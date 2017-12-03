import generateQueryPair from '../abstract/queries';
import Page from '../types/page';
import MenuLink from '../types/menulink';
import Template from '../types/template';


export default {
  ...generateQueryPair(Page, 'Page', ['_id', 'refTitle'], 'page', 'pages'),
  ...generateQueryPair(MenuLink, 'MenuLink', ['_id'], 'menulink', 'menulinks'),
  ...generateQueryPair(Template, 'Template', ['_id'], 'template', 'templates'),
};
