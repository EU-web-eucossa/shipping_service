import { TranscationsDTO } from '../../Dtos/transcations.dto';
import { Parcel } from '../../Dtos/parcel.dto';
import { AddressDTO } from '../../Dtos/address_dto';
import { IShippingRepo } from '../shipping_repo';
import { Context } from '@Shipping/src/utils/test_utils/context';


class MockedShippingRepo implements IShippingRepo{
    addAddress(contact: AddressDTO): Promise<AddressDTO> {
        throw new Error('Method not implemented.');
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