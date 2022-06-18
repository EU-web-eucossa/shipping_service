import {Knex} from 'knex';
import TableNames, {OrderedTables} from '../../src/utils/constants';
import {addDefaultColumns} from '../../src/utils/db';

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
  ]);
}

export async function down(knex: Knex): Promise<void> {
  await Promise.all(
    OrderedTables.map(async (tableName: string) =>
      knex.schema.dropTableIfExists(tableName)
    )
  );
}
