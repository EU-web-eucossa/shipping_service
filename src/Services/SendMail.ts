import { emailReturnPayload, Imail } from "../proto/notification_pb";
import { emailServiceConnection } from "../utils/notificationGrpcConn";


export interface Mailer {
    send(mail:IMail):Promise<emailReturnPayload>
}
export class SendMail implements Mailer {

  private static instance: SendMail;
  private constructor() {}

  public static getInstance() {
    if (!SendMail.instance) {
      SendMail.instance = new SendMail();
    }
    return SendMail.instance;
  }
  send(mail: IMail) {
    console.log('sending mail')
    const newMail = new Imail();
    newMail.setTo(mail.to);
    newMail.setFrom(mail.from);
    newMail.setSubject(mail.subject);
    newMail.setMessage(mail.body);
    newMail.setText(mail.text);

    return new Promise<emailReturnPayload>((res, rej) => {
      emailServiceConnection.sendMail(
        newMail,
        (error, EmailServiceResponse) => {
          if (error) return rej(error);
          return res(EmailServiceResponse);
        }
      );
    });
  }
}


export interface IMail {
  to: string;
  from: string;
  body: string;
  subject: string;
  text: string;
}
