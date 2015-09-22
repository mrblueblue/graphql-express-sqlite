export default function insertMessages(db){
  return db('messages').insert({user_id: 1, message: 'hello'})
}
