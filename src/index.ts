import 'module-alias/register';

import * as grpc from '@grpc/grpc-js';
import app, { start } from '@Shipping/src/app';

import { ShippingServer } from './grpc_server';
import { ShipmentServiceService } from './proto/shipping_grpc_pb';

const grpcServer = new grpc.Server();
grpcServer.addService(ShipmentServiceService, new ShippingServer());

// note connection is insecure because the service is internal 
// and should not be exposed to the public network
grpcServer.bindAsync(
  `${process.env.GRPC_HOST?.trim()}:${process.env.GRPC_PORT?.trim()}`,
  grpc.ServerCredentials.createInsecure(),
  (_, port) => {
    start();
    grpcServer.start();
    app.listen(process.env.PORT, () =>
      console.log(
        ` Http Server listening on port ${process.env.PORT} and grpc is listening on port ${port}`
      )
    );
  }
);