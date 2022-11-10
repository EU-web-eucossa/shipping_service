import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express, { Application} from 'express';
import {config} from 'dotenv';



config();
const app: Application = express();

app.set('PORT', process.env.PORT || '4040');
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'templates'));
export async function start() {
  console.log('booting service ....');
  app.use('/assets', express.static('assets'));
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  app.use(helmet());
  app.use(morgan('tiny'));

 
}

export default app;

