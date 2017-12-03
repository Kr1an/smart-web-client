/*
 *
 * PagesNavigator
 *
 */

import React, { PropTypes } from 'react';
import Ul from 'containers/Navbar/Ul';

import PagesNavigatorElement from 'components/PagesNavigatorElement';

import Li from './Li';
import ScrollArea from './ScrollArea';
import NavbarSceleton from './NavbarSceleton';
import Wrapper from './Wrapper';


export class PagesNavigator extends React.Component {
  static propTypes = {
    pagesBluePrints: PropTypes.arrayOf(PropTypes.object),
  }

  LiGenerator = (page) => (
    <Li key={page._id}>
      <PagesNavigatorElement page={page} />
    </Li>
  )

  render() {
    const listContent = this.props.pagesBluePrints.map((page) => this.LiGenerator(page));
    return (
      <NavbarSceleton>
        <Wrapper>
          <ScrollArea>
            <Ul>
              {listContent}
            </Ul>
          </ScrollArea>
        </Wrapper>
      </NavbarSceleton>

    );
  }
}

export default PagesNavigator;
