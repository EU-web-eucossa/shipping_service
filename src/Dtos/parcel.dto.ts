export class Parcel {
  constructor(
    private _id: string,
    private _state: string,
    private _owner: string,
    private _length: number,
    private _width: number,
    private _height: number,
    private distanceUnit: string,
    private massUnit: string
  ) {}

  toJson(): string {
    return JSON.stringify({
      id: this.id,
      state: this.state,
      owner: this.owner,
      lenght: this.length,
      width: this.width,
      height: this.height,
      distanceUnit: this.distanceUnit,
      massUnit: this.massUnit,
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

  public get owner(): string {
    return this._owner;
  }
  public set owner(value: string) {
    this._owner = value;
  }

  public get length(): number {
    return this._length;
  }
  public set length(value: number) {
    this._length = value;
  }

  public get width(): number {
    return this._width;
  }
  public set width(value: number) {
    this._width = value;
  }

  public get height(): number {
    return this._height;
  }
  public set height(value: number) {
    this._height = value;
  }

  public get distance_unit(): string {
    return this.distanceUnit;
  }
  public set distance_unit(value: string) {
    this.distanceUnit = value;
  }

  public get mass_unit(): string {
    return this.massUnit;
  }
  public set mass_unit(value: string) {
    this.massUnit = value;
  }
}
