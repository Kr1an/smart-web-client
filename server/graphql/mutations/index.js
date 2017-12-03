import generateMutationSet from '../abstract/mutation';

import pageInputType from '../types/page-input';
import menulinkInputType from '../types/menulink-input';
import templateInputType from '../types/template-input';

export default {
  ...generateMutationSet(pageInputType, 'Page', 'page', 'addPage', 'removePage', 'updatePage'),
  ...generateMutationSet(menulinkInputType, 'MenuLink', 'menulink', 'addMenuLink', 'removeMenuLink', 'updateMenuLink'),
  ...generateMutationSet(templateInputType, 'Template', 'template', 'addTemplate', 'removeTemplate', 'updateTemplate'),
};
