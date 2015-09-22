import {messages} from '../mockData';

export default function insertMessages(db){
  return db('messages').insert(messages);
}
