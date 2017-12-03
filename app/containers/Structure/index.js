/*
 *
 * Structure
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Placeholder from 'components/Placeholder';
import Wrapper from 'components/Wrapper';

export class Structure extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Placeholder componentTitle="Settings" />
      </Wrapper>
    );
  }
}

Structure.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Structure);
