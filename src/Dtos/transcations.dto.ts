export class TranscationsDTO {
  constructor(
    private _id: string,
    private _state: string,
    private _status: string,
    private _owner: string,
    private _rate: string,
    private _labelFileType: string,
    private _trackingNumber: string,
    private _trackingStatus: string,
    private _eta: string,
    private _labelUrl: string,
    private _commercialInvoiceUrl: number
  ) {}

  toJson(): String {
    return JSON.stringify({
      id: this._id,
      state: this._state,
      owner: this._owner,
      rate: this._rate,
      labelFileType: this._labelFileType,
      trackingNumber: this._trackingNumber,
      trackingStatus: this._trackingStatus,
      eta: this._eta,
      labelUrl: this._labelUrl,
      commercialInvoiceUrl: this._commercialInvoiceUrl,
    });
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get state(): string {
    return this._state;
  }
  public set state(value: string) {
    this._state = value;
  }
  public get status(): string {
    return this._status;
  }
  public set status(value: string) {
    this._status = value;
  }
  public get owner(): string {
    return this._owner;
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public get rate(): string {
    return this._rate;
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public get labelFileType(): string {
    return this._labelFileType;
  }
  public set labelFileType(value: string) {
    this._labelFileType = value;
  }
  public get trackingNumber(): string {
    return this._trackingNumber;
  }
  public set trackingNumber(value: string) {
    this._trackingNumber = value;
  }
  public get trackingStatus(): string {
    return this._trackingStatus;
  }
  public set trackingStatus(value: string) {
    this._trackingStatus = value;
  }
  public get eta(): string {
    return this._eta;
  }
  public set eta(value: string) {
    this._eta = value;
  }
  public get labelUrl(): string {
    return this._labelUrl;
  }
  public set labelUrl(value: string) {
    this._labelUrl = value;
  }
  public get commercialInvoiceUrl(): number {
    return this._commercialInvoiceUrl;
  }
  public set commercialInvoiceUrl(value: number) {
    this._commercialInvoiceUrl = value;
  }
}
