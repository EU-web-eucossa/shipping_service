import amqplib from 'amqplib';
import qrcode from 'qrcode';
import ejs from 'ejs';
import pdf from 'html-pdf';
import ShippingRepo from './Repositories/shipping_repo';
import {AddressDTO} from './Dtos/address_dto';
import {TranscationsDTO} from './Dtos/transcations.dto';
import {Parcel} from './Dtos/parcel.dto';
import {Payment} from './Dtos/payment.dto';

export default async () => {
  const repo = new ShippingRepo();
  const queue = 'NOTIFICATION_QUEUE';
  const paymentQueue = 'PAYMENT_QUEUE';
  const connUrl = process.env.RABBIT_URL as string;
  const conn = await amqplib.connect(connUrl);

  const notification = await conn.createChannel();
  await notification.assertQueue(queue);

  const paymentChnl = await conn.createChannel();
  await paymentChnl.assertQueue(paymentQueue);

  // Listener
  paymentChnl.consume(paymentQueue, async msg => {
    if (msg !== null) {
      const transcationMsg = JSON.parse(msg.content.toString());
      console.log('Recieved: payment ', transcationMsg);
      paymentChnl.ack(msg);
      const payment: Payment = transcationMsg as any as Payment;
      const {payer, id, create_time,transactions} = payment;
      const {email, shipping_address} = payer.payer_info;
      const contact = new AddressDTO(
        shipping_address.recipient_name,
        shipping_address.city,
        shipping_address.postal_code,
        shipping_address.country_code,
        '',
        email
      );
      const address = await repo.addAddress(contact);
      const transcationDetails = new TranscationsDTO(
        '',
        'Valid',
        ' SUCCESS',
        shipping_address.recipient_name,
        transactions[0].related_resources[0].sale.transaction_fee.value,
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
        shipping_address.recipient_name,
        12,
        12,
        12,
        'cm',
        'g'
      );
      await repo.createParcel(parcel);
      const transID = await repo.createNewTranscation(transcationDetails);

      const order = {
        qr_code: 'src',
        products: [
          {
            name: 'camera',
            url: `${process.env.HOSTURL}:${process.env.PORT}/assets/lens.jpg`,
            price: 30000,
            qty: 1,
          },
          {
            name: 'speaker',
            url: `${process.env.HOSTURL}:${process.env.PORT}/assets/speaker.jpg`,
            price: 30000,
            qty: 1,
          },
          {
            name: ' cannon lens',
            url: `${process.env.HOSTURL}:${process.env.PORT}/assets/lens.jpg`,
            price: 30000,
            qty: 1,
          },
        ],
        order: {
          id: transID,
          purchaseDate: format(new Date(create_time), 'dd/MM/yyyy'),
          shippedDate: format(new Date(Date.now()), 'dd/MM/yyyy'),
          address,
        },
      };

      // Sender
      qrcode.toFile(
        `assets/qr-${transID}.png`,
        order.order.id.toString(),
        async err => {
          order.qr_code = `${process.env.HOSTURL}:${process.env.PORT}/assets/qr-${transID}.png`;
          console.log(`assets/qr-${transID}.png`);
          const html = await ejs.renderFile('views/invoice.ejs', order);

          pdf.create(html).toBuffer(function (err, buffer) {
            console.log('This is a pdf buffer:', Buffer.isBuffer(buffer));

            const data = {
              id: order.order.id,
              cc: null,
              bcc: null,
              emailTo: ['omondibrian392@gmail.com'],
              subject: 'ORDER CONFIRMATION NOTIFICATION',
              messageInHtml: html,
              attachments: [
                {
                  originalFileName: 'invoice.pdf',
                  contentInBytes: buffer.toString('base64'),
                },
              ],
            };

            notification.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
          });
        }
      );
    } else {
      console.log('Consumer cancelled by server');
    }
  });
};

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


