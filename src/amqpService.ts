import amqplib from 'amqplib';
import qrcode from 'qrcode';
import ejs from 'ejs';
import pdf from 'html-pdf';

export default async () => {
  const queue = 'NOTIFICATION_QUEUE';
  const ordersQueue = 'ORDERS_QUEUE';
  const connUrl = 'amqp://guest:guest@146.190.230.41:5672/';
  const conn = await amqplib.connect(connUrl);

  const notification = await conn.createChannel();
  await notification.assertQueue(queue);

  const orders = await conn.createChannel();
  await orders.assertQueue(ordersQueue);
  // Listener
  orders.consume(ordersQueue, msg => {
    if (msg !== null) {
      console.log('Recieved: order ', msg.content.toString());
      orders.ack(msg);
    } else {
      console.log('Consumer cancelled by server');
    }
  });

  //notification
  notification.consume(queue, msg => {
    if (msg !== null) {
      console.log('Recieved: notification ', msg.content.toString());
      notification.ack(msg);
    } else {
      console.log('Consumer cancelled by server');
    }
  });

  const order = {
    qr_code: 'src',
    products: [
      {
        name: 'camera',
        url: 'http://localhost:4000/assets/lens.jpg',
        price: 30000,
        qty: 1,
      },
      {
        name: 'speaker',
        url: 'http://localhost:4000/assets/speaker.jpg',
        price: 30000,
        qty: 1,
      },
      {
        name: ' cannon lens',
        url: 'http://localhost:4000/assets/lens.jpg',
        price: 30000,
        qty: 1,
      },
    ],
    order: {
      id: 12345,
      purchaseDate: format(new Date('Sun May 11,2022'), 'dd/MM/yyyy'),
      shippedDate: format(new Date(Date.now()), 'dd/MM/yyyy'),
      address: {
        owner: 'John Doe',
        city: 'Nakuru',
        country: 'KE',
        zip: '606-80100',
        phone: '07123456',
        email: 'johndoe@site.com',
      },
    },
  };
  // Sender
  qrcode.toDataURL(order.order.id.toString(), async (err, src) => {
    order.qr_code = src;
    const html = await ejs.renderFile('views/invoice.ejs', order);

    pdf.create(html).toBuffer(function (err, buffer) {
      console.log('This is a pdf buffer:', Buffer.isBuffer(buffer));

      const data = {
        id: order.order.id,
        cc: null,
        bcc: null,
        emailTo: ['otienochris98@gmail.com'],
        subject: 'ORDER CONFIRMATION NOTIFICATION',
        messageInHtml: html,
        attachments: [
          {
            originalFileName: 'invoice.pdf',
            contentInBytes: buffer.toString('base64'),
          },
        ],
      };

      console.log(JSON.stringify(data))
      notification.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
    });
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
