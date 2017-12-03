import generateAdd from '../mutations/abstract/add';
import generateRemove from '../mutations/abstract/remove';
import generateUpdate from '../mutations/abstract/update';

export default (type, modelName, argName, addN, removeN, updateN) => ({
  [addN]: generateAdd(type, modelName, argName),
  [removeN]: generateRemove(modelName),
  [updateN]: generateUpdate(type, modelName, argName),
});
