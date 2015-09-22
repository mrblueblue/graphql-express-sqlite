export default async function createTables(db) {
  try {
    await db.schema.createTable('users', function (table) {
      table.increments().primary();
      table.string('name');
    });

    await db.schema.createTable('messages', function (table) {
      table.increments().primary();
      table.string('message');
      table.integer('user_id').references('id').inTable('users')
    });

  } catch(e){
    console.log(e);
  }
}
