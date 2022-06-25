import {config} from 'dotenv';
import {AddressDTO} from './../../../src/Dtos/address_dto';
import ShippingRepo from '../../../src/Repositories/shipping_repo';
import { prismaMock } from '../../../src/utils/test_utils/singleton';

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
      const res = await repo.addAddress(addr) as AddressDTO;
      expect(addr.name).toStrictEqual(res.name);
      expect(addr.city).toStrictEqual(res.city);
      expect(addr.country).toStrictEqual(res.country);
      expect(addr.zip).toStrictEqual(res.zip);
      expect(addr.phone).toStrictEqual(res.phone);
      expect(addr.email).toStrictEqual(res.email);
      expect(addr.toJson()).toStrictEqual(res.toJson());
    },7000);
  });
});
