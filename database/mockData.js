const mock = [

  {
    id: 'xjc12',
    name: 'Bob',
    messages: [
      {created_at: new Date(), text: 'hello world'},
      {created_at: new Date(), text: 'bye byw'},
      {created_at: new Date(), text: 'yolo world'},
      {created_at: new Date(), text: 'TGIF'}
    ]
  },

  {
    id: 'j9kl1',
    name: 'Tim',
    messages: [
      {created_at: new Date(), text: 'hello?'},
      {created_at: new Date(), text: 'I like pie'},
      {created_at: new Date(), text: 'graf q l'},
      {created_at: new Date(), text: 'this is a string'}
    ]
  }

]

export const users = mock.map((user) => {
  return { name: user.name }
});

export const messages = mock.reduce((accum, entry, index) => {
  return accum.concat(entry.messages.map((message) => {
    return { user_id: index + 1, text: message.text, created_at: message.created_at };
  }));
}, []);
