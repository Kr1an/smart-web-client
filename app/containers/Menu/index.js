/*
 *
 * Menu
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Wrapper from 'components/Wrapper';
import Placeholder from 'components/Placeholder';

export class Menu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Placeholder componentTitle="Statistic" />
      </Wrapper>
    );
  }
}

Menu.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Menu);
