import mongoose from 'mongoose';
import getProjection from '../../get-projection';

const generateSingle = (type, modelName, args = ['_id']) => {
  const configLocation = '_typeConfig';
  const fieldsConfig = type[configLocation].fields();
  const argsArray = args.map((i) => fieldsConfig[i]);
  return ({
    type,
    args: args.reduce((a, b, i) => ({ ...a, [b]: argsArray[i] }), {}),
    resolve: (root, params, source, fieldASTs) => mongoose.model(modelName)
        .findOne({ $and: Object.keys(params).map((i) => ({ [i]: params[i] })) })
        .select(getProjection(fieldASTs))
        .exec()
    ,
  });
};

export default generateSingle;
