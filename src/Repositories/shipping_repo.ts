import {Parcel} from '@Models/parcel.dto';
import {AddressDTO} from '@Models/address_dto';
import {TranscationsDTO} from '@Models/transcations.dto';
import prisma from '../../src/client'
 
export interface IShippingRepo {
  // addAddress()
  addAddress(contact: AddressDTO): Promise<AddressDTO>;
  getAddress(addrId: string): Promise<AddressDTO>;
  createParcel(parcel: Parcel): Promise<Parcel>;
  getParcel(id: string): Promise<Parcel>;
  //transcation id
  createNewTranscation(trans: TranscationsDTO): Promise<String>;
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
  getAddress(addrId: string): Promise<AddressDTO> {
    throw new Error('Method not implemented.');
  }
  createParcel(parcel: Parcel): Promise<Parcel> {
    throw new Error('Method not implemented.');
  }
  getParcel(id: string): Promise<Parcel> {
    throw new Error('Method not implemented.');
  }
  createNewTranscation(trans: TranscationsDTO): Promise<String> {
    throw new Error('Method not implemented.');
  }
  getTranscation(id: string): Promise<TranscationsDTO> {
    throw new Error('Method not implemented.');
  }
}
