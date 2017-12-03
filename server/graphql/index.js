import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql/type';

import queries from './queries';
import mutations from './mutations';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: queries,
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: mutations,
  }),
});

