export class AddressDTO {
  name: string = '';
  city: string = '';
  zip: string = '';
  country: string = '';
  phone: string = '';
  email: string = '';
  constructor(
    name: string,
    city: string,
    zip: string,
    country: string,
    phone: string,
    email: string
  ) {
    this.name = name;
    this.city = city;
    this.zip = zip;
    this.country = country;
    this.phone = phone;
    this.email = email;
  }

  toJson(): string {
    return JSON.stringify({
      name: this.name,
      city: this.city,
      zip: this.zip,
      country: this.country,
      phone: this.phone,
      email: this.email,
    });
  }
}
