import PageType from './page';
import generateType from './abstract/type';

const Page = require('mongoose').model('Page');

export default generateType(
  'MenuLink',
  {
    page: {
      type: PageType,
      resolve: (s) => Page.findById(s.page),
    },
  },

);
