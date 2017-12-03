import {
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql';

import mongoose from 'mongoose';

export default (type, modelName, argName) => ({
  type: GraphQLBoolean,
  args: {
    [argName]: {
      name: argName,
      type: new GraphQLNonNull(type),
    },
  },
  async resolve(root, params) {
    const Model = mongoose.model(modelName);
    const obj = new Model(params[argName]);
    const saved = await obj.save();
    if (!saved) {
      throw new Error('creation error');
    }
    return saved;
  },
});
