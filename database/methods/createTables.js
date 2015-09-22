export default async function createTables(db) {
  try {
    await db.schema.createTable('users', function (table) {
      table.increments().primary();
      table.string('name');
    });

    await db.schema.createTable('messages', function (table) {
      table.increments().primary();
      table.timestamp('created_at')
      table.string('text');
      table.integer('user_id').references('id').inTable('users')
    });

  } catch(e){
    console.log('Database already exists!', e);
  }
}
