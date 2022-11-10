import type {IShipmentServiceServer} from './proto/shipping_grpc_pb';
import {OrderPayload, ShipmentResponse} from './proto/shipping_pb';
import {handleUnaryCall} from '@grpc/grpc-js';
import {AddressDTO} from './Dtos/address_dto';
import ShippingRepo from './Repositories/shipping_repo';
import {TranscationsDTO} from './Dtos/transcations.dto';
import {Parcel} from './Dtos/parcel.dto';
import qrcode from 'qrcode';
import ejs from 'ejs';
import {SendMail} from './Services/SendMail';

const repo = new ShippingRepo();
export class ShippingServer implements IShipmentServiceServer {
  [name: string]: import('@grpc/grpc-js').UntypedHandleCall;
  processShipment: handleUnaryCall<OrderPayload, ShipmentResponse> = async (
    call,
    cb
  ) => {
    const orderPayload = call.request;
    try {
      const payment = orderPayload.getPaymentinfo();
      if (payment !== undefined) {
        const addr = payment.getPayer()?.getPayerinfo()?.getShippingaddress()!;
        const contact = new AddressDTO(
          addr.getRecipientname(),
          addr.getCity(),
          addr.getPostalcode(),
          addr.getCountycode(),
          '',
          payment.getPayer()?.getPayerinfo()?.getEmail()!
        );

        const address = await repo.addAddress(contact);
        const transcation = payment.getTranscationsList()!;

        const transcationDetails = new TranscationsDTO(
          '',
          'Valid',
          ' SUCCESS',
          addr.getRecipientname(),
          transcation[0]
            .getRelatedresources()
            ?.getSale()
            ?.getTransactionfee()!
            .getValue()!,
          'PDF_W_PSLIP_8x11',
          '00123',
          'TRANSIT',
          '2021-06-15T10:24:20.121Z',
          '+25471234567',
          111
        );

        const parcel = new Parcel(
          '',
          'Valid',
          addr.getRecipientname(),
          12,
          12,
          12,
          'cm',
          'g'
        );

        await repo.createParcel(parcel);
        const transID = await repo.createNewTranscation(transcationDetails);

        const products = orderPayload.getProductsList().map(p => {
          return {
            name: p.getName(),
            url: p.getUrl(),
            price: p.getPrice(),
            qty: p.getQty(),
          };
        });

        const order = {
          qr_code: 'src',
          products,
          order: {
            'transcation identifier': transID,
            orderId: orderPayload.getOrderid(),
            purchaseDate: format(
              new Date(payment.getCreateTime()),
              'dd/MM/yyyy'
            ),
            shippedDate: format(new Date(Date.now()), 'dd/MM/yyyy'),
            address,
          },
        };

        // Sender
        qrcode.toFile(
          `assets/qr-${transID}.png`,
          order.order.orderId.toString(),
          async err => {
            order.qr_code = `${process.env.HOSTURL}:${process.env.PORT}/assets/qr-${transID}.png`;
            console.log(`assets/qr-${transID}.png`);
            const html = await ejs.renderFile('views/invoice.ejs', order);

            //send to email service
            const data = {
              id: order.order.orderId,

              emailTo: orderPayload
                .getPaymentinfo()
                ?.getPayer()
                ?.getPayerinfo()
                ?.getEmail()!,

              subject: 'ORDER CONFIRMATION NOTIFICATION',
              messageInHtml: html,
            };
            const mailServer = SendMail.getInstance();
            const response = await mailServer.send({
              body: data.messageInHtml,
              to: data.emailTo,
              from: '',
              subject: data.subject,
              text: data.messageInHtml,
            });
            console.log(response);
            //return success payload
            const resPayload = new ShipmentResponse()
              .setMsg('Shipment Process Processed Successfully')
              .setShipmentid(transID);
            cb(null, resPayload);
          }
        );
      }
      cb(
        null,
        new ShipmentResponse()
          .setMsg('Invalid payment information passed')
          .setShipmentid('0')
      );
    } catch (error: any) {
      console.log(error);
      cb(error, null);
    }
  };
}

function format(x: Date, y: string): string {
  let z = new Map<String, number>();
  z.set('M', x.getMonth() + 1);
  z.set('d', x.getDate());
  z.set('h', x.getHours());
  z.set('m', x.getMinutes());
  z.set('s', x.getSeconds());

  y = y.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
    return ((v.length > 1 ? '0' : '') + z.get(v.slice(-1))).slice(-2);
  });

  return y.replace(/(y+)/g, function (v) {
    return x.getFullYear().toString().slice(-v.length);
  });
}
