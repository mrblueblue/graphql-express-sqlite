import db from '../database/index';
import {compose, prop, head} from 'ramda'
// Hooray for Functional Programming //

//Helpers//

async function getUserIdFromName(name){
  let getId = compose(prop('id'), head)
  let result = await db.where('name', name).select('id').from('users');

  return getId(result);
}

//GraphQL Query Resolvers//

export async function resolveUsers(rootValue, {name} ){
  let id = await getUserIdFromName(name);

  return [{
    id: id, 
    name: name, 
    messages: await db.where('user_id', id).select('text', 'created_at').from('messages') 
  }];
}

//GraphQL Mutation Resolvers//

export async function resolvePostMessage(rootValue, {name, text}){
  let newMessage = {
    user_id: await getUserIdFromName(name),
    text: text,
    created_at: new Date()
  };

  await db('messages').insert(newMessage);
  return newMessage;
}

export async function resolveCreateUser(rootValue, {name}){
  let newUser = {name: name}
  
  await db('users').insert(newUser);
  return newUser;
}
