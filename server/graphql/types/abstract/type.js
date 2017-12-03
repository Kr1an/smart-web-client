import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
} from 'graphql';

import mongoose from 'mongoose';

const mongooseToGraphql = {
  String: GraphQLString,
  ObjectID: GraphQLID,
  Boolean: GraphQLBoolean,
};

export default (modelName, fields = {}, exclude = []) => {
  const ignoreFields = [...exclude, '_id', '__v'];
  return new GraphQLObjectType({
    name: modelName,
    fields: () => ({
      _id: { type: GraphQLID },
      ...Object.keys(mongoose.model(modelName).schema.paths)
        .filter((x) => ignoreFields.indexOf(x) === -1)
        .reduce((a, b) => ({
          ...a,
          [b]: { type: mongooseToGraphql[mongoose.model(modelName).schema.path(b).instance] },
        }), {}),
      ...fields,
    }),
  });
};

