export default class TableNames {
  static address = 'Address';
  static parcel = 'Parcel';
  static rates = 'Rates';
  static transcations = 'Transcations';
  static CustomItems = 'CustomItems';
  static CustomsDeclaration = 'CustomsDeclaration';
  static invoicedCharges = 'InvoicedCharges';
  static ExporterIdentification = 'ExporterIdentification';
  static TaxIdentification = 'TaxIdentification';
  static Manifest = 'Manifest';
  static CarrierAccounts = 'CarrierAccounts';
  static TrackingStatus = 'TrackingStatus';
  static serviceLevel = 'serviceLevel';
  static Error = 'Error';
  static Document = 'Document';
  static TrackingState = 'TrackingState';
  static StatusLocation = 'statusLocation';
}

export const OrderedTables = [
  TableNames.address,
  TableNames.parcel,
  TableNames.serviceLevel,
  TableNames.rates,
  TableNames.transcations,
  TableNames.invoicedCharges,
  TableNames.CustomItems,
  TableNames.CustomsDeclaration,
  TableNames.TaxIdentification,
  TableNames.ExporterIdentification,
  TableNames.Error,
  TableNames.Document,
  TableNames.Manifest,
  TableNames.CarrierAccounts,
  TableNames.TrackingStatus,
  TableNames.TrackingState,
  TableNames.StatusLocation,

];
