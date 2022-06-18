/**
 * @fileOverview contains the various helper functions  for database operation.
 * @author Brian Omondi
 * @version 1.0.0
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import { Knex } from "knex";

 const addDefaultColumns = (table: Knex.CreateTableBuilder): void => {
   table.timestamps(false, true);
   table.dateTime("deletedAt", { useTz: true });
 };
 
 const createRef = (table: Knex.CreateTableBuilder, foreignTable: string) => {
  //PlanetScale does not allow the use of foreign key constraints,
  return table
     .integer(`${foreignTable}_id`)
     .unsigned()
     .notNullable()
    ;
 };
 
 export { addDefaultColumns, createRef };
