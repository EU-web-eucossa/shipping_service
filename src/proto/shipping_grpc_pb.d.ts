// package: com.eucossa.grpc.shipment
// file: shipping.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as shipping_pb from "./shipping_pb";

interface IShipmentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    processShipment: IShipmentServiceService_IprocessShipment;
}

interface IShipmentServiceService_IprocessShipment extends grpc.MethodDefinition<shipping_pb.OrderPayload, shipping_pb.ShipmentResponse> {
    path: "/com.eucossa.grpc.shipment.ShipmentService/processShipment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<shipping_pb.OrderPayload>;
    requestDeserialize: grpc.deserialize<shipping_pb.OrderPayload>;
    responseSerialize: grpc.serialize<shipping_pb.ShipmentResponse>;
    responseDeserialize: grpc.deserialize<shipping_pb.ShipmentResponse>;
}

export const ShipmentServiceService: IShipmentServiceService;

export interface IShipmentServiceServer extends grpc.UntypedServiceImplementation {
    processShipment: grpc.handleUnaryCall<shipping_pb.OrderPayload, shipping_pb.ShipmentResponse>;
}

export interface IShipmentServiceClient {
    processShipment(request: shipping_pb.OrderPayload, callback: (error: grpc.ServiceError | null, response: shipping_pb.ShipmentResponse) => void): grpc.ClientUnaryCall;
    processShipment(request: shipping_pb.OrderPayload, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shipping_pb.ShipmentResponse) => void): grpc.ClientUnaryCall;
    processShipment(request: shipping_pb.OrderPayload, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shipping_pb.ShipmentResponse) => void): grpc.ClientUnaryCall;
}

export class ShipmentServiceClient extends grpc.Client implements IShipmentServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public processShipment(request: shipping_pb.OrderPayload, callback: (error: grpc.ServiceError | null, response: shipping_pb.ShipmentResponse) => void): grpc.ClientUnaryCall;
    public processShipment(request: shipping_pb.OrderPayload, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shipping_pb.ShipmentResponse) => void): grpc.ClientUnaryCall;
    public processShipment(request: shipping_pb.OrderPayload, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shipping_pb.ShipmentResponse) => void): grpc.ClientUnaryCall;
}
