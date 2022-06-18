import {Knex} from 'knex';
import TableNames, {OrderedTables} from '../../src/utils/constants';
import {addDefaultColumns, createRef} from '../../src/utils/db';

export async function up(knex: Knex): Promise<void> {
  await Promise.all([
    knex.schema.createTable(
      TableNames.address,
      (table: Knex.CreateTableBuilder) => {
        table.increments('id').notNullable().primary();
        table.boolean('is_complete').defaultTo(false);
        table.string('name').notNullable();
        table.string('owner').notNullable();
        table.string('city').notNullable();
        table.string('zip').notNullable();
        table.string('country').notNullable();
        table.string('phone').notNullable();
        table.string('email').notNullable();
        table.boolean('is_residential').defaultTo(false);
        table.boolean('validate').defaultTo(false);
        addDefaultColumns(table);
      }
    ),

    knex.schema.createTable(
      TableNames.parcel,
      (table: Knex.CreateTableBuilder) => {
        table.increments('id').notNullable().primary();
        table.string('state').notNullable();
        table.string('owner').notNullable();
        table.integer('length').notNullable();
        table.integer('width').notNullable();
        table.integer('height').notNullable();
        table.integer('weight').notNullable();
        table.string('distance_unit').notNullable();
        table.string('mass_unit').notNullable();
        addDefaultColumns(table);
      }
    ),

    knex.schema.createTable(
      TableNames.serviceLevel,
      (table: Knex.CreateTableBuilder) => {
        table.increments('id').notNullable().primary();
        table.string('name').notNullable();
        table.string('token').notNullable();
        table.integer('terms').notNullable();
      }
    ),

    knex.schema.createTable(
      TableNames.rates,
      (table: Knex.CreateTableBuilder) => {
        table.increments('id').notNullable().primary();
        table.string('attributes').notNullable();
        table.string('owner').notNullable();
        table.integer('amount_local').notNullable();
        table.string('currency_local').notNullable();
        table.integer('amount').notNullable();
        table.integer('currency').notNullable();
        table.string('provider').notNullable();
        table.string('provider_image_75');
        table.string('provider_image_200');
        table.integer('estimated_days');
        table.string('duration_terms');
        table.string('carrier_account');
        table.string('zone');
        createRef(table, TableNames.serviceLevel);
        addDefaultColumns(table);
      }
    ),

    knex.schema.createTable(
      TableNames.transcations,
      (table: Knex.CreateTableBuilder) => {
        table.increments('id').notNullable().primary();
        table.string('state').notNullable();
        table.string('status').notNullable();
        table.string('owner').notNullable();
        table.string('rate').notNullable();
        table.string('label_file_type').notNullable();
        table.string('tracking_number').notNullable();
        table.string('tracking_status').notNullable();
        table.string('eta');
        table.string('label_url');
        table.integer('commercial_invoice_url');
        addDefaultColumns(table);
      }
    ),

    // Customs declarations are relevant information, including
    // one or multiple customs items, you need to provide for customs
    // clearance for your international shipments.
    knex.schema.createTable(
      TableNames.CustomsDeclaration,
      (table: Knex.CreateTableBuilder) => {
        table.increments('id').notNullable().primary();
        table.string('state').notNullable();
        table.string('owner').notNullable();
        table.string('certify_signer').notNullable();
        table.string('certify').notNullable();
        table.integer('non_delivery_option').notNullable();
        table.integer('contents_type').notNullable();
        table.string('contents_explanation').notNullable();
        table.integer('exporter_reference').notNullable();
        table.string('importer_reference').notNullable();
        table.string('invoice').notNullable();
        table.string('lincence').notNullable();
        table.string('certificate').notNullable();
        table.string('notes').notNullable();
        table.string('aes_itn').notNullable();
        table.string('disclaimer').notNullable();
        addDefaultColumns(table);
      }
    ),

    // Additional invoiced charges to be shown on
    //the Customs Declaration Commercial Invoice
    knex.schema.createTable(
      TableNames.invoicedCharges,
      (table: Knex.CreateTableBuilder) => {
        table.increments('id').notNullable().primary();
        table.string('currency').notNullable();
        table.integer('total_shipping').notNullable();
        table.integer('total_taxes').notNullable();
        table.integer('total_duties').notNullable();
        table.integer('other_fees').notNullable();
        createRef(table, TableNames.CustomsDeclaration);

        addDefaultColumns(table);
      }
    ),

    /// Customs items are distinct items in your international shipment parcel.
    knex.schema.createTable(
      TableNames.CustomItems,
      (table: Knex.CreateTableBuilder) => {
        table.increments('id').notNullable().primary();
        table.string('state').notNullable();
        table.string('status').notNullable();
        table.string('owner').notNullable();
        table.string('description').notNullable();
        table.integer('qty').notNullable();
        table.integer('net_weight').notNullable();
        table.string('mass_unit').notNullable();
        table.integer('value_amount').notNullable();
        table.string('value_currency').notNullable();
        table.string('origin_country').notNullable();
        table.string('tariff_number').notNullable();
        //custom declaration has 1-N relation with custom items
        createRef(table, TableNames.CustomsDeclaration);
        addDefaultColumns(table);
      }
    ),

    // Tax identification that may be required to ship in certain countries.
    // Typically used to assess duties on goods that are crossing a border.
    knex.schema.createTable(
      TableNames.TaxIdentification,
      (table: Knex.CreateTableBuilder) => {
        table.increments('id').notNullable().primary();
        table.string('tax_type').notNullable();
        addDefaultColumns(table);
      }
    ),
    // Additional exporter identification that may
    // be required to ship in certain countries Invoice
    // Additional invoiced charges to be shown on
    //the Customs Declaration Commercial Invoice
    // knex.schema.createTable(
    //   TableNames.invoicedCharges,
    //   (table: Knex.CreateTableBuilder) => {
    //     table.increments('id').notNullable().primary();
    //     table.string('eori_number').notNullable();
    //     createRef(table, TableNames.TaxIdentification);
    //     addDefaultColumns(table);
    //   }
    // ),

    //Manifests are close-outs of shipping labels of a certain day.
    // Some carriers require manifests to properly process the shipments.
    knex.schema.createTable(
      TableNames.Manifest,
      (table: Knex.CreateTableBuilder) => {
        table.increments('id').notNullable().primary();
        table.string('owner').notNullable();
        table.string('status').notNullable();
        table.dateTime('shipment_date').notNullable();
        createRef(table, TableNames.transcations);
        createRef(table, TableNames.address);
        createRef(table, TableNames.TaxIdentification);
        addDefaultColumns(table);
      }
    ),

    //A relation of codes and messages describing the error that occurred if any.
    knex.schema.createTable(
      TableNames.Error,
      (table: Knex.CreateTableBuilder) => {
        table.increments('id').notNullable().primary();
        table.string('code').notNullable();
        table.string('msg').notNullable();
        createRef(table, TableNames.Manifest); //1-N
        addDefaultColumns(table);
      }
    ),

    // A relation  containing the URLs to all returned manifest documents.
    knex.schema.createTable(
      TableNames.Document,
      (table: Knex.CreateTableBuilder) => {
        table.increments('id').notNullable().primary();
        table.string('url').notNullable();

        createRef(table, TableNames.Manifest); // 1-N
        addDefaultColumns(table);
      }
    ),
    // Carrier accounts are used as credentials
    // to retrieve shipping rates and purchase labels from a shipping provider.
    knex.schema.createTable(
      TableNames.CarrierAccounts,
      (table: Knex.CreateTableBuilder) => {
        table.increments('id').notNullable().primary();
        table.string('carrier').notNullable();
        table.string('account_id').notNullable();
        table.string('owner').notNullable();
        table.boolean('active').notNullable();
        table.json('parameters').nullable();
        addDefaultColumns(table);
      }
    ),
    // Tracking Status objects are used to track shipments.
    knex.schema.createTable(
      TableNames.TrackingStatus,
      (table: Knex.CreateTableBuilder) => {
        table.increments('id').notNullable().primary();
        table.string('carrier').notNullable();
        table.string('tracking_number').notNullable();
        table.string('eta').notNullable();
        table.string('original_eta').notNullable();
        table.integer('address_from').unsigned();
        table.integer('address_to').unsigned();
        createRef(table, TableNames.transcations);
        createRef(table, TableNames.serviceLevel);
        addDefaultColumns(table);
      }
    ),
    // The latest tracking information of this shipment.
    knex.schema.createTable(
      TableNames.TrackingState,
      (table: Knex.CreateTableBuilder) => {
        table.increments('id').notNullable().primary();
        table.string('status').notNullable();
        table.string('status_details').notNullable();
        table.dateTime('status_date').notNullable();
        table.string('status_location').notNullable();
        createRef(table, TableNames.TrackingStatus); // N-1 tracking status
        addDefaultColumns(table);
      }
    ),

    // A relation containing zip, city and country information of the tracking event.
    knex.schema.createTable(
      TableNames.StatusLocation,
      (table: Knex.CreateTableBuilder) => {
        table.increments('id').notNullable().primary();
        table.string('zip').notNullable();
        table.string('city').notNullable();
        table.dateTime('status_date').notNullable();
        table.string('country').notNullable();
        createRef(table, TableNames.TrackingState);
        addDefaultColumns(table);
      }
    ),
  ]);
}

export async function down(knex: Knex): Promise<void> {
  await Promise.all(
    OrderedTables.map(async (tableName: string) =>
      knex.schema.dropTableIfExists(tableName)
    )
  );
}
