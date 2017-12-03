import generateSingle from '../queries/abstract/single';
import generateMultiple from '../queries/abstract/multiple';

export default (type, modelName, args, singleName, multipleName) => ({
  [singleName]: generateSingle(type, modelName, args),
  [multipleName]: generateMultiple(type, modelName, args),
});
