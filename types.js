import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';

export const userType = new GraphQLObjectType({
  name: 'User',
  description: 'a user',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'a user\'s id',
    },
    name: {
      type: GraphQLString,
      description: 'a user\'s name',
    },
    messages: {
      type: new GraphQLList(messageType),
      description: 'a user\'s messages'
    }
  })
});

export const messageType = new GraphQLObjectType({
  name: 'Message',
  description: 'a message',
  fields: () => ({
    created_at: {
      type: GraphQLInt,
      description: 'time message was sent'
    },
    text: {
      type: GraphQLString,
      description: 'message text'
    }
  })
});
