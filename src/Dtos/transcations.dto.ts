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

  toJson(): string {
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

  public get status(): string {
    return this._status;
  }

  public get owner(): string {
    return this._owner;
  }

  public get rate(): string {
    return this._rate;
  }

  public get labelFileType(): string {
    return this._labelFileType;
  }

  public get trackingNumber(): string {
    return this._trackingNumber;
  }

  public get trackingStatus(): string {
    return this._trackingStatus;
  }

  public get eta(): string {
    return this._eta;
  }
 
  public get labelUrl(): string {
    return this._labelUrl;
  }

  public get commercialInvoiceUrl(): number {
    return this._commercialInvoiceUrl;
  }

}
