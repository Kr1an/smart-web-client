import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

import mongoose from 'mongoose';

export default (type, modelName, argName) => ({
  type: GraphQLBoolean,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID),
    },
    [argName]: {
      name: [argName],
      type: new GraphQLNonNull(type),
    },
  },
  async resolve(root, params) {
    const Model = mongoose.model(modelName);
    const updated = await Model.update(
      { $and: ['_id'].map((i) => ({ [i]: params[i] })) },
      { $set: params[argName] },
    );
    if (!updated) {
      throw new Error('update error');
    }
    return updated;
  },
});
