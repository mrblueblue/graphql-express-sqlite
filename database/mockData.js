import {prop, values, flatten, mapObjIndexed, map, compose, curry} from 'ramda';

const mock = [

  {
    name: 'Bob',
    messages: [
      {created_at: new Date(), text: 'hello world'},
      {created_at: new Date(), text: 'bye byw'},
      {created_at: new Date(), text: 'yolo world'},
      {created_at: new Date(), text: 'TGIF'}
    ]
  },

  {
    name: 'Tim',
    messages: [
      {created_at: new Date(), text: 'hello?'},
      {created_at: new Date(), text: 'I like pie'},
      {created_at: new Date(), text: 'graf q l'},
      {created_at: new Date(), text: 'this is a string'}
    ]
  }

]

function addUserId(index, data){
  data['user_id']=index;
  return data;
}

function addUserIdToMessages(value, index){
  let addUserIdWithIndex = curry(addUserId)(++index);
  return compose(map(addUserIdWithIndex), prop('messages'))(value);
}

let addUserIdToAllmessages = mapObjIndexed(addUserIdToMessages);
let mapUserName = curry(map((data) => Object.create({name: data.name})));

export const messages = compose(flatten, values, addUserIdToAllmessages)(mock);
export const users = mapUserName(mock);
