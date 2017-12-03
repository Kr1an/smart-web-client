/**
*
* Navbar
*
*/

import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  MdCode as TemplatesIcon,
  MdContentCopy as PagesIcon,
  MdInsertLink as MenuIcon,
  MdSettings as StructureIcon,
  MdApps as HomeIcon,
} from 'react-icons/lib/md';

import NavbarLink from './NavbarLink';
import Ul from './Ul';
import Li from './Li';
import LiSelected from './LiSelected';
import messages from './messages';
import Wrapper from './Wrapper';
import NavbarSceleton from './NavbarSceleton';
import MobileHide from './MobileHide';

import { makeSelectPathnameState } from './selectors';


class Navbar extends React.Component {
  static propTypes = {
    pathname: PropTypes.string,
  }
  pathnames = [
    'home',
    'templates',
    'menu',
    'pages',
    'structure',
  ]
  icons = {
    home: HomeIcon,
    templates: TemplatesIcon,
    menu: MenuIcon,
    pages: PagesIcon,
    structure: StructureIcon,
  }
  LiContentGEnerator = (path) => {
    const IconComponent = this.icons[path];
    return (
      <NavbarLink to={`/${path}`}>
        <IconComponent />
        <MobileHide>
          <FormattedMessage {...messages[path]} />
        </MobileHide>
      </NavbarLink>
    );
  }
  LiGenerator = (path) => `/${path}` === this.props.pathname ? (
    <LiSelected key={path}>
      {this.LiContentGEnerator(path)}
    </LiSelected>
  ) : (
    <Li key={path}>
      {this.LiContentGEnerator(path)}
    </Li>
  )
  render() {
    const navbarContent = this.pathnames.map((pathname) => this.LiGenerator(pathname));
    return (
      <NavbarSceleton>
        <Wrapper>
          <Ul>
            {navbarContent}
          </Ul>
        </Wrapper>
      </NavbarSceleton>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  pathname: makeSelectPathnameState(),
});

const withConnect = connect(mapStateToProps, null);

export default compose(
  withConnect
)(Navbar);
