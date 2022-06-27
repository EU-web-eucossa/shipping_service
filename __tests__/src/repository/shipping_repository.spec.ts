import {config} from 'dotenv';
import {Parcel} from './../../../src/Dtos/parcel.dto';
import {AddressDTO} from './../../../src/Dtos/address_dto';
import ShippingRepo from '../../../src/Repositories/shipping_repo';
import {prismaMock} from '../../../src/utils/test_utils/singleton';
import {TranscationsDTO} from './../../../src/Dtos/transcations.dto';

config();

describe('Shipping Repository', () => {
  const repo = new ShippingRepo();
  const addr = new AddressDTO(
    'John Doe',
    'Nakuru',
    '001',
    'KE',
    '+25471234567',
    'johndoe@site.com'
  );
  describe('Repository.addAddress() ', () => {
    it('should successfully add a new address based on the params passed', async () => {
      prismaMock.address.create.mockResolvedValue({
        city: addr.city,
        email: addr.email,
        country: addr.country,
        phone: addr.phone,
        name: addr.name,
        zip: addr.zip,
        owner: addr.name,
        id: 1,
        is_complete: true,
        is_residential: true,
        validate: true,
        created_at: new Date('Sat, 25 Jun 2022 10:26:27 GMT'),
        updated_at: new Date('Sat, 25 Jun 2022 10:26:27 GMT'),
        deletedAt: null,
      });
      const res = (await repo.addAddress(addr)) as AddressDTO;
      expect(addr.name).toStrictEqual(res.name);
      expect(addr.city).toStrictEqual(res.city);
      expect(addr.country).toStrictEqual(res.country);
      expect(addr.zip).toStrictEqual(res.zip);
      expect(addr.phone).toStrictEqual(res.phone);
      expect(addr.email).toStrictEqual(res.email);
      expect(addr.toJson()).toStrictEqual(res.toJson());
    }, 7000);
  });

  describe('Repository.getAddress() ', () => {
    it('should successfully retrive the requested address based on the id passed', async () => {
      prismaMock.address.create.mockResolvedValue({
        city: addr.city,
        email: addr.email,
        country: addr.country,
        phone: addr.phone,
        name: addr.name,
        zip: addr.zip,
        owner: addr.name,
        id: 1,
        is_complete: true,
        is_residential: true,
        validate: true,
        created_at: new Date('Sat, 25 Jun 2022 10:26:27 GMT'),
        updated_at: new Date('Sat, 25 Jun 2022 10:26:27 GMT'),
        deletedAt: null,
      });
      const addrId = '1';
      const res = (await repo.getAddress(addrId)) as AddressDTO;

      expect(addr.name).toStrictEqual(res.name);
      expect(addr.city).toStrictEqual(res.city);
      expect(addr.country).toStrictEqual(res.country);
      expect(addr.zip).toStrictEqual(res.zip);
      expect(addr.phone).toStrictEqual(res.phone);
      expect(addr.email).toStrictEqual(res.email);
    }, 7000);

    it('should throw error if invalid or unavailable address is passed', async () => {
      const addrId = '10123'; //no existent id
      prismaMock.address.findFirst.mockResolvedValue(null);

      try {
        await repo.getAddress(addrId);
      } catch (error:any) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('Address Not Found');
      }
    });
  });

  describe('Repository.createParcel() ', () => {
    it('should successfully create a new parcel', async () => {
      const parcel = new Parcel(
        '1',
        'Success',
        'John Doe',
        12,
        12,
        12,
        'cm',
        'g'
      );
      prismaMock.parcel.create.mockResolvedValue({
        id: 1,
        state: 'Success',
        owner: 'John Doe',
        length: 12,
        width: 12,
        height: 12,
        weight: 100,
        distance_unit: 'cm',
        mass_unit: 'g',
        created_at: new Date('Sat, 25 Jun 2022 10:26:27 GMT'),
        updated_at: new Date('Sat, 25 Jun 2022 10:26:27 GMT'),
        deletedAt: null,
      });
      const res = await repo.createParcel(parcel);
      parcel.id = res.id;
      expect(parcel.id).toStrictEqual(res.id);
      expect(parcel.owner).toStrictEqual(res.owner);
      expect(parcel.state).toStrictEqual(res.state);
      expect(parcel.width).toStrictEqual(res.width);
      expect(parcel.height).toStrictEqual(res.height);
      expect(parcel.length).toStrictEqual(res.length);
      expect(parcel.mass_unit).toStrictEqual(res.mass_unit);
      expect(parcel.distance_unit).toStrictEqual(res.distance_unit);
      expect(parcel.toJson()).toStrictEqual(res.toJson());
    }, 7000);
  });

  describe('Repository.getParcel() ', () => {
    const parcel = new Parcel(
      '1',
      'Success',
      'John Doe',
      12,
      12,
      12,
      'cm',
      'g'
    );
    it('should successfully retrive the requested parcel based on the id passed', async () => {
      prismaMock.parcel.findFirst.mockResolvedValue({
        id: 1,
        state: 'Success',
        owner: 'John Doe',
        length: 12,
        width: 12,
        height: 12,
        weight: 100,
        distance_unit: 'cm',
        mass_unit: 'g',
        created_at: new Date('Sat, 25 Jun 2022 10:26:27 GMT'),
        updated_at: new Date('Sat, 25 Jun 2022 10:26:27 GMT'),
        deletedAt: null,
      });
      const parcelId = '1';
      const res = await repo.getParcel(parcelId);
      expect(parcel.toJson()).toStrictEqual(res.toJson());
    }, 7000);

    it('should throw error if invalid or unavailable parcel id is passed', async () => {
      const parcelId = '10123'; //no existent id
      prismaMock.parcel.findFirst.mockResolvedValue(null);

      try {
        await repo.getParcel(parcelId);
      } catch (error:any) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('Parcel Not Found');
      }
    });
  });

  describe('Repository.createNewTranscation()', () => {
    const tId = 1;
    const transcation = new TranscationsDTO(
      tId.toString(),
      'Valid',
      'WAITING',
      'John Doe',
      '12',
      'PDF',
      '2',
      'processing',
      '2021-06-15T10:24:20.121Z',
      'http:test.site/label',
      0
    );

    it('should successfully  add new transcation', async () => {
      prismaMock.transcations.create.mockResolvedValue({
        id: tId,
        label_file_type: transcation.labelFileType,
        label_url: transcation.labelUrl,
        commercial_invoice_url: transcation.commercialInvoiceUrl,
        owner: transcation.owner,
        rate: transcation.rate,
        state: transcation.state,
        status: transcation.status,
        tracking_number: transcation.trackingNumber,
        tracking_status: transcation.trackingStatus,
        eta: transcation.eta,
        created_at: new Date('Sat, 25 Jun 2022 10:26:27 GMT'),
        updated_at: new Date('Sat, 25 Jun 2022 10:26:27 GMT'),
        deletedAt: null,
      });
      const res = await repo.createNewTranscation(transcation);
      transcation.id = res;
      expect(transcation.id).toStrictEqual(res);
    }, 7000);
  });

  describe('Repository.getTranscation()', () => {
    const tId = 1;
    const transcation = new TranscationsDTO(
      tId.toString(),
      'Valid',
      'WAITING',
      'John Doe',
      '12',
      'PDF',
      '2',
      'processing',
      '2021-06-15T10:24:20.121Z',
      'null',
      0
    );
    it('should successfully retrive the requested parcel based on the id passed', async () => {
      prismaMock.transcations.findFirst.mockResolvedValue({
        id: tId,
        label_file_type: transcation.labelFileType,
        label_url: transcation.labelUrl,
        commercial_invoice_url: transcation.commercialInvoiceUrl,
        owner: transcation.owner,
        rate: transcation.rate,
        state: transcation.state,
        status: transcation.status,
        tracking_number: transcation.trackingNumber,
        tracking_status: transcation.trackingStatus,
        eta: transcation.eta,
        created_at: new Date('Sat, 25 Jun 2022 10:26:27 GMT'),
        updated_at: new Date('Sat, 25 Jun 2022 10:26:27 GMT'),
        deletedAt: null,
      });
      const res = await repo.getTranscation(tId.toString());
      transcation.id = res.id;
      expect(transcation.id).toStrictEqual(res.id);
      expect(transcation.eta).toStrictEqual(res.eta);
      expect(transcation.rate).toStrictEqual(res.rate);
      expect(transcation.state).toStrictEqual(res.state);
      expect(transcation.owner).toStrictEqual(res.owner);
      expect(transcation.status).toStrictEqual(res.status);
      expect(transcation.labelUrl).toStrictEqual(res.labelUrl);
      expect(transcation.labelFileType).toStrictEqual(res.labelFileType);
      expect(transcation.trackingNumber).toStrictEqual(res.trackingNumber);
      expect(transcation.trackingStatus).toStrictEqual(res.trackingStatus);
      expect(transcation.commercialInvoiceUrl).toStrictEqual(res.commercialInvoiceUrl);
      expect(transcation.toJson()).toStrictEqual(res.toJson());
    }, 7000);

    it('should throw error if invalid or unavailable parcel id is passed', async () => {
      const tID = '10123'; //no existent id
      prismaMock.transcations.findFirst.mockResolvedValue(null);

      try {
        await repo.getTranscation(tID.toString());
      } catch (error:any) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('Transcations Not Found');
      }
    });
  });
});
