/**
 * @description creates a grpc connection to rada notification service
 */
import * as grpc from "@grpc/grpc-js";
import { config } from "dotenv";
import { EmailClient } from "../proto/notification_grpc_pb";
config();
const NOTIFICATION_ADDR = `${process.env.NOTIFICATION_GRPC_HOST?.trim()}:${process.env.NOTIFICATION_GRPC_PORT?.trim()}`;
console.log("grpc notification = %s", NOTIFICATION_ADDR);
export const emailServiceConnection = new EmailClient(
  NOTIFICATION_ADDR.trim(),
  grpc.credentials.createInsecure()
);



