import {Parcel} from '@Models/parcel.dto';
import {AddressDTO} from '@Models/address_dto';
import {TranscationsDTO} from '@Models/transcations.dto';
import prisma from '../../src/client';

export interface IShippingRepo {
  // addAddress()
  addAddress(contact: AddressDTO): Promise<AddressDTO>;
  getAddress(addrId: string): Promise<AddressDTO>;
  createParcel(parcel: Parcel): Promise<Parcel>;
  getParcel(id: string): Promise<Parcel>;
  //transcation id
  createNewTranscation(trans: TranscationsDTO): Promise<string>;
  getTranscation(id: string): Promise<TranscationsDTO>;
}

export default class ShippingRepo implements IShippingRepo {
  async addAddress(contact: AddressDTO): Promise<AddressDTO> {
    const res = await prisma.address.create({
      data: {
        city: contact.city,
        email: contact.email,
        country: contact.country,
        phone: contact.phone,
        name: contact.name,
        zip: contact.zip,
        owner: contact.name,
      },
    });

    return new AddressDTO(
      res.name,
      res.city,
      res.zip,
      res.country,
      res.phone,
      res.email
    );
  }
  async getAddress(addrId: string): Promise<AddressDTO> {
    let res = await prisma.address.findFirst({
      where: {
        id: {
          equals: parseInt(addrId),
        },
      },
    });
    if (res === null) {
      throw new Error('Address Not Found');
    }
    return new AddressDTO(
      res.name,
      res.city,
      res.zip,
      res.country,
      res.phone,
      res.email
    );
  }
  async createParcel(parcel: Parcel): Promise<Parcel> {
    let res = await prisma.parcel.create({
      data: {
        distance_unit: parcel.distance_unit,
        height: parcel.height,
        length: parcel.length,
        width: parcel.width,
        weight: parcel.width,
        mass_unit: parcel.mass_unit,
        owner: parcel.owner,
        state: parcel.state,
      },
    });

    return new Parcel(
      res.id.toString(),
      res.state,
      res.owner,
      res.length,
      res.width,
      res.height,
      res.distance_unit,
      res.mass_unit
    );
  }
  async getParcel(id: string): Promise<Parcel> {
    const res = await prisma.parcel.findFirst({
      where: {
        id: {
          equals: parseInt(id),
        },
      },
    });

    if (res === null) {
      throw new Error('Parcel Not Found');
    }

    return new Parcel(
      res.id.toString(),
      res.state,
      res.owner,
      res.length,
      res.width,
      res.height,
      res.distance_unit,
      res.mass_unit
    );
  }
  async createNewTranscation(trans: TranscationsDTO): Promise<string> {
    const res = await prisma.transcations.create({
      data: {
        label_file_type: trans.labelFileType,
        label_url: trans.labelUrl,
        commercial_invoice_url: trans.commercialInvoiceUrl,
        owner: trans.owner,
        rate: trans.rate,
        state: trans.state,
        status: trans.status,
        tracking_number: trans.trackingNumber,
        tracking_status: trans.trackingStatus,
        eta: trans.eta,
      },
    });

    return res.id.toString();
  }
  async getTranscation(id: string): Promise<TranscationsDTO> {
    const res = await prisma.transcations.findFirst({
      where: {
        id: {
          equals: parseInt(id),
        },
      },
    });

    if (res === null) {
      throw new Error('Transcations Not Found');
    }

    return new TranscationsDTO(
      res.id.toString(),
      res.state,
      res.status,
      res.owner,
      res.rate,
      res.label_file_type,
      res.tracking_number,
      res.tracking_status,
      res.eta!.toString(),
      res.label_url + '',
      res.commercial_invoice_url!
    );
  }
}
