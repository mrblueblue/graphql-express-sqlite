import knex from 'knex';
import {promisify} from 'bluebird';
import {createTables, insertUsers, insertMessages} from './methods';

let {log} = console;

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './db.sqlite'
  }
});

async function initialize(){
  await createTables(db);
  await insertUsers(db);
  await insertMessages(db);
  return db.select('created_at', 'text').from('messages')
    .then((rows) => log(rows));
}

initialize();
export default db;
