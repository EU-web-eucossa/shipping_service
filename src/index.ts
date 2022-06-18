import 'module-alias/register';
import app, {start} from '@Shipping/src/app';

start();

app.listen(app.get('PORT'), () =>
  console.log(` Shipping service  listening on port ${app.get('PORT')}`)
);
