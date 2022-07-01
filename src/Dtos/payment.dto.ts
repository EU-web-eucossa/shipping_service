export interface Payment {
    payment: PaymentClass;
}

export interface PaymentClass {
    id:                  string;
    intent:              string;
    state:               string;
    cart:                string;
    payer:               Payer;
    transactions:        Transaction[];
    failed_transactions: any[];
    create_time:         Date;
    update_time:         Date;
    links:               Link[];
    httpStatusCode:      number;
}

export interface Link {
    href:   string;
    rel:    string;
    method: string;
}

export interface Payer {
    payment_method: string;
    status:         string;
    payer_info:     PayerInfo;
}

export interface PayerInfo {
    email:            string;
    first_name:       string;
    last_name:        string;
    payer_id:         string;
    shipping_address: ShippingAddress;
    country_code:     string;
}

export interface ShippingAddress {
    recipient_name: string;
    line1:          string;
    city:           string;
    state:          string;
    postal_code:    string;
    country_code:   string;
}

export interface Transaction {
    amount:            Amount;
    payee:             Payee;
    description:       string;
    item_list:         ItemList;
    related_resources: RelatedResource[];
}

export interface Amount {
    total:    string;
    currency: string;
    details:  Details;
}

export interface Details {
    subtotal:          string;
    shipping:          string;
    insurance:         string;
    handling_fee:      string;
    shipping_discount: string;
    discount:          string;
}

export interface ItemList {
    items:            Item[];
    shipping_address: ShippingAddress;
}

export interface Item {
    name:     string;
    sku:      string;
    price:    string;
    currency: string;
    tax:      string;
    quantity: number;
}

export interface Payee {
    merchant_id: string;
    email:       string;
}

export interface RelatedResource {
    sale: Sale;
}

export interface Sale {
    id:                          string;
    state:                       string;
    amount:                      Amount;
    payment_mode:                string;
    protection_eligibility:      string;
    protection_eligibility_type: string;
    transaction_fee:             TransactionFee;
    parent_payment:              string;
    create_time:                 Date;
    update_time:                 Date;
    links:                       Link[];
}

export interface TransactionFee {
    value:    string;
    currency: string;
}
