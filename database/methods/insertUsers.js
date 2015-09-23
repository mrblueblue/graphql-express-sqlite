import {promisify} from 'bluebird';

function populateWithUsers(db){

  let users = ['Tim', 'Bob']
  let rows = users.map((user) => {
    return { name: user }
  });

  return db('users').insert(rows)
}

export default populateWithUsers