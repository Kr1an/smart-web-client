/*
 *
 * Structure
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Placeholder from 'components/Placeholder';
import Wrapper from 'components/Wrapper';
import makeSelectStructure from './selectors';

export class Structure extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Placeholder componentTitle="Structure" />
      </Wrapper>
    );
  }
}

Structure.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Structure: makeSelectStructure(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Structure);
