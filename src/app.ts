import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express, {Request, Response,Application} from 'express';
import {config} from 'dotenv';

config();
const app:Application = express();

app.set('PORT', process.env.PORT || '4040');

export async function start() {
  console.log('booting service ....');

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  app.use(helmet());
  app.use(morgan('tiny'));

  app.use('/', (req: Request, res: Response) =>
    res.json({
      msg: 'server development in progress',
    })
  );
}

export default app;
