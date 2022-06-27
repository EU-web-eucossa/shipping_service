import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express, {Request, Response, Application} from 'express';
import {config} from 'dotenv';
// import amqplib from 'amqplib';
// (async () => {
//   const queue = 'tasks';
//   const connUrl = 'amqp://guest:guest@146.190.230.41:5672/';
//   const conn = await amqplib.connect(connUrl);
//   console.log(conn);
//   const ch1 = await conn.createChannel();
//   await ch1.assertQueue(queue);

//   // Listener
//   ch1.consume(queue, msg => {
//     if (msg !== null) {
//       console.log('Recieved:', msg.content.toString());
//       ch1.ack(msg);
//     } else {
//       console.log('Consumer cancelled by server');
//     }
//   });

//   // Sender
//   const ch2 = await conn.createChannel();

//   setInterval(() => {
//     ch2.sendToQueue(queue, Buffer.from('something to do'));
//   }, 1000);
// })();
config();
const app: Application = express();

app.set('PORT', process.env.PORT || '4040');

export async function start() {
  console.log('booting service ....');

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  app.use(helmet());
  app.use(morgan('tiny'));

  app.use('/', (req: Request, res: Response) => {
    res.json({
      msg: 'server development in progress',
    });
  });
}

export default app;
