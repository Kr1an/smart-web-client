import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

import mongoose from 'mongoose';

export default (modelName) => ({
  type: GraphQLBoolean,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  async resolve(root, params) {
    const Model = mongoose.model(modelName);
    if (Object.keys(params).length) {
      const removed = await Model.remove({ $and: Object.keys(params).map((i) => ({ [i]: params[i] })) });
      if (!removed) {
        throw new Error('remove error');
      }
      return removed;
    }
    throw new Error('not found');
  },
});
