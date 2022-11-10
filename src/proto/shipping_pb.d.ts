// package: com.eucossa.grpc.shipment
// file: shipping.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class OrderPayload extends jspb.Message { 
    clearProductsList(): void;
    getProductsList(): Array<Product>;
    setProductsList(value: Array<Product>): OrderPayload;
    addProducts(value?: Product, index?: number): Product;

    hasPaymentinfo(): boolean;
    clearPaymentinfo(): void;
    getPaymentinfo(): Payment | undefined;
    setPaymentinfo(value?: Payment): OrderPayload;
    getOrderid(): string;
    setOrderid(value: string): OrderPayload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderPayload.AsObject;
    static toObject(includeInstance: boolean, msg: OrderPayload): OrderPayload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderPayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderPayload;
    static deserializeBinaryFromReader(message: OrderPayload, reader: jspb.BinaryReader): OrderPayload;
}

export namespace OrderPayload {
    export type AsObject = {
        productsList: Array<Product.AsObject>,
        paymentinfo?: Payment.AsObject,
        orderid: string,
    }
}

export class Payment extends jspb.Message { 
    getIntent(): string;
    setIntent(value: string): Payment;
    getState(): string;
    setState(value: string): Payment;
    getCart(): string;
    setCart(value: string): Payment;

    hasPayer(): boolean;
    clearPayer(): void;
    getPayer(): Payer | undefined;
    setPayer(value?: Payer): Payment;
    clearTranscationsList(): void;
    getTranscationsList(): Array<Transaction>;
    setTranscationsList(value: Array<Transaction>): Payment;
    addTranscations(value?: Transaction, index?: number): Transaction;
    getHttpstatuscode(): number;
    setHttpstatuscode(value: number): Payment;
    getCreateTime(): string;
    setCreateTime(value: string): Payment;
    getUpdateTime(): string;
    setUpdateTime(value: string): Payment;
    clearLinksList(): void;
    getLinksList(): Array<Link>;
    setLinksList(value: Array<Link>): Payment;
    addLinks(value?: Link, index?: number): Link;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payment.AsObject;
    static toObject(includeInstance: boolean, msg: Payment): Payment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payment;
    static deserializeBinaryFromReader(message: Payment, reader: jspb.BinaryReader): Payment;
}

export namespace Payment {
    export type AsObject = {
        intent: string,
        state: string,
        cart: string,
        payer?: Payer.AsObject,
        transcationsList: Array<Transaction.AsObject>,
        httpstatuscode: number,
        createTime: string,
        updateTime: string,
        linksList: Array<Link.AsObject>,
    }
}

export class Payer extends jspb.Message { 
    getPaymentmethod(): string;
    setPaymentmethod(value: string): Payer;
    getStatus(): string;
    setStatus(value: string): Payer;

    hasPayerinfo(): boolean;
    clearPayerinfo(): void;
    getPayerinfo(): PayerInfo | undefined;
    setPayerinfo(value?: PayerInfo): Payer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payer.AsObject;
    static toObject(includeInstance: boolean, msg: Payer): Payer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payer;
    static deserializeBinaryFromReader(message: Payer, reader: jspb.BinaryReader): Payer;
}

export namespace Payer {
    export type AsObject = {
        paymentmethod: string,
        status: string,
        payerinfo?: PayerInfo.AsObject,
    }
}

export class PayerInfo extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): PayerInfo;
    getFirstname(): string;
    setFirstname(value: string): PayerInfo;
    getLastname(): string;
    setLastname(value: string): PayerInfo;
    getPayerid(): string;
    setPayerid(value: string): PayerInfo;

    hasShippingaddress(): boolean;
    clearShippingaddress(): void;
    getShippingaddress(): ShippingAddress | undefined;
    setShippingaddress(value?: ShippingAddress): PayerInfo;
    getCountrycode(): string;
    setCountrycode(value: string): PayerInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayerInfo.AsObject;
    static toObject(includeInstance: boolean, msg: PayerInfo): PayerInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayerInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayerInfo;
    static deserializeBinaryFromReader(message: PayerInfo, reader: jspb.BinaryReader): PayerInfo;
}

export namespace PayerInfo {
    export type AsObject = {
        email: string,
        firstname: string,
        lastname: string,
        payerid: string,
        shippingaddress?: ShippingAddress.AsObject,
        countrycode: string,
    }
}

export class ShippingAddress extends jspb.Message { 
    getRecipientname(): string;
    setRecipientname(value: string): ShippingAddress;
    getLine1(): string;
    setLine1(value: string): ShippingAddress;
    getCity(): string;
    setCity(value: string): ShippingAddress;
    getState(): string;
    setState(value: string): ShippingAddress;
    getPostalcode(): string;
    setPostalcode(value: string): ShippingAddress;
    getCountycode(): string;
    setCountycode(value: string): ShippingAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShippingAddress.AsObject;
    static toObject(includeInstance: boolean, msg: ShippingAddress): ShippingAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShippingAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShippingAddress;
    static deserializeBinaryFromReader(message: ShippingAddress, reader: jspb.BinaryReader): ShippingAddress;
}

export namespace ShippingAddress {
    export type AsObject = {
        recipientname: string,
        line1: string,
        city: string,
        state: string,
        postalcode: string,
        countycode: string,
    }
}

export class Transaction extends jspb.Message { 

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): Amount | undefined;
    setAmount(value?: Amount): Transaction;

    hasPayee(): boolean;
    clearPayee(): void;
    getPayee(): Payee | undefined;
    setPayee(value?: Payee): Transaction;
    getDescription(): string;
    setDescription(value: string): Transaction;

    hasItemlist(): boolean;
    clearItemlist(): void;
    getItemlist(): ItemList | undefined;
    setItemlist(value?: ItemList): Transaction;

    hasRelatedresources(): boolean;
    clearRelatedresources(): void;
    getRelatedresources(): RelatedResources | undefined;
    setRelatedresources(value?: RelatedResources): Transaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transaction.AsObject;
    static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transaction;
    static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
    export type AsObject = {
        amount?: Amount.AsObject,
        payee?: Payee.AsObject,
        description: string,
        itemlist?: ItemList.AsObject,
        relatedresources?: RelatedResources.AsObject,
    }
}

export class Amount extends jspb.Message { 
    getTotal(): string;
    setTotal(value: string): Amount;
    getCurrency(): string;
    setCurrency(value: string): Amount;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): Details | undefined;
    setDetails(value?: Details): Amount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Amount.AsObject;
    static toObject(includeInstance: boolean, msg: Amount): Amount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Amount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Amount;
    static deserializeBinaryFromReader(message: Amount, reader: jspb.BinaryReader): Amount;
}

export namespace Amount {
    export type AsObject = {
        total: string,
        currency: string,
        details?: Details.AsObject,
    }
}

export class Details extends jspb.Message { 
    getSubtotal(): string;
    setSubtotal(value: string): Details;
    getShipping(): string;
    setShipping(value: string): Details;
    getInsurance(): string;
    setInsurance(value: string): Details;
    getHandlingfees(): string;
    setHandlingfees(value: string): Details;
    getShippingdiscount(): string;
    setShippingdiscount(value: string): Details;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Details.AsObject;
    static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Details;
    static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
}

export namespace Details {
    export type AsObject = {
        subtotal: string,
        shipping: string,
        insurance: string,
        handlingfees: string,
        shippingdiscount: string,
    }
}

export class ItemList extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<Item>;
    setItemsList(value: Array<Item>): ItemList;
    addItems(value?: Item, index?: number): Item;

    hasShippingaddress(): boolean;
    clearShippingaddress(): void;
    getShippingaddress(): ShippingAddress | undefined;
    setShippingaddress(value?: ShippingAddress): ItemList;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ItemList.AsObject;
    static toObject(includeInstance: boolean, msg: ItemList): ItemList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ItemList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ItemList;
    static deserializeBinaryFromReader(message: ItemList, reader: jspb.BinaryReader): ItemList;
}

export namespace ItemList {
    export type AsObject = {
        itemsList: Array<Item.AsObject>,
        shippingaddress?: ShippingAddress.AsObject,
    }
}

export class Item extends jspb.Message { 
    getName(): string;
    setName(value: string): Item;
    getSku(): string;
    setSku(value: string): Item;
    getPrice(): string;
    setPrice(value: string): Item;
    getCurrency(): string;
    setCurrency(value: string): Item;
    getTax(): string;
    setTax(value: string): Item;
    getQuantity(): string;
    setQuantity(value: string): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
    export type AsObject = {
        name: string,
        sku: string,
        price: string,
        currency: string,
        tax: string,
        quantity: string,
    }
}

export class Payee extends jspb.Message { 
    getMerchantid(): string;
    setMerchantid(value: string): Payee;
    getEmail(): string;
    setEmail(value: string): Payee;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payee.AsObject;
    static toObject(includeInstance: boolean, msg: Payee): Payee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payee;
    static deserializeBinaryFromReader(message: Payee, reader: jspb.BinaryReader): Payee;
}

export namespace Payee {
    export type AsObject = {
        merchantid: string,
        email: string,
    }
}

export class Sale extends jspb.Message { 
    getId(): string;
    setId(value: string): Sale;
    getState(): string;
    setState(value: string): Sale;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): Amount | undefined;
    setAmount(value?: Amount): Sale;
    getPaymentmode(): string;
    setPaymentmode(value: string): Sale;
    getProtectioneligibility(): string;
    setProtectioneligibility(value: string): Sale;
    getProtectioneligibilitytype(): string;
    setProtectioneligibilitytype(value: string): Sale;

    hasTransactionfee(): boolean;
    clearTransactionfee(): void;
    getTransactionfee(): TransactionFee | undefined;
    setTransactionfee(value?: TransactionFee): Sale;
    getParentpayment(): string;
    setParentpayment(value: string): Sale;
    getCreateTime(): string;
    setCreateTime(value: string): Sale;
    getUpdateTime(): string;
    setUpdateTime(value: string): Sale;
    clearLinksList(): void;
    getLinksList(): Array<Link>;
    setLinksList(value: Array<Link>): Sale;
    addLinks(value?: Link, index?: number): Link;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sale.AsObject;
    static toObject(includeInstance: boolean, msg: Sale): Sale.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sale, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sale;
    static deserializeBinaryFromReader(message: Sale, reader: jspb.BinaryReader): Sale;
}

export namespace Sale {
    export type AsObject = {
        id: string,
        state: string,
        amount?: Amount.AsObject,
        paymentmode: string,
        protectioneligibility: string,
        protectioneligibilitytype: string,
        transactionfee?: TransactionFee.AsObject,
        parentpayment: string,
        createTime: string,
        updateTime: string,
        linksList: Array<Link.AsObject>,
    }
}

export class TransactionFee extends jspb.Message { 
    getValue(): string;
    setValue(value: string): TransactionFee;
    getCurrency(): string;
    setCurrency(value: string): TransactionFee;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionFee.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionFee): TransactionFee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionFee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionFee;
    static deserializeBinaryFromReader(message: TransactionFee, reader: jspb.BinaryReader): TransactionFee;
}

export namespace TransactionFee {
    export type AsObject = {
        value: string,
        currency: string,
    }
}

export class RelatedResources extends jspb.Message { 

    hasSale(): boolean;
    clearSale(): void;
    getSale(): Sale | undefined;
    setSale(value?: Sale): RelatedResources;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelatedResources.AsObject;
    static toObject(includeInstance: boolean, msg: RelatedResources): RelatedResources.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelatedResources, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelatedResources;
    static deserializeBinaryFromReader(message: RelatedResources, reader: jspb.BinaryReader): RelatedResources;
}

export namespace RelatedResources {
    export type AsObject = {
        sale?: Sale.AsObject,
    }
}

export class Link extends jspb.Message { 
    getHref(): string;
    setHref(value: string): Link;
    getRel(): string;
    setRel(value: string): Link;
    getMethod(): string;
    setMethod(value: string): Link;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Link.AsObject;
    static toObject(includeInstance: boolean, msg: Link): Link.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Link, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Link;
    static deserializeBinaryFromReader(message: Link, reader: jspb.BinaryReader): Link;
}

export namespace Link {
    export type AsObject = {
        href: string,
        rel: string,
        method: string,
    }
}

export class Product extends jspb.Message { 
    getName(): string;
    setName(value: string): Product;
    getUrl(): string;
    setUrl(value: string): Product;
    getPrice(): string;
    setPrice(value: string): Product;
    getQty(): string;
    setQty(value: string): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Product.AsObject;
    static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Product;
    static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
    export type AsObject = {
        name: string,
        url: string,
        price: string,
        qty: string,
    }
}

export class ShipmentResponse extends jspb.Message { 
    getMsg(): string;
    setMsg(value: string): ShipmentResponse;
    getShipmentid(): string;
    setShipmentid(value: string): ShipmentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShipmentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ShipmentResponse): ShipmentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShipmentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShipmentResponse;
    static deserializeBinaryFromReader(message: ShipmentResponse, reader: jspb.BinaryReader): ShipmentResponse;
}

export namespace ShipmentResponse {
    export type AsObject = {
        msg: string,
        shipmentid: string,
    }
}
