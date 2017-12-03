/*
 *
 * Home
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import Wrapper from './Wrapper';
import makeSelectHome, {
  makeSelectControllers,
  makeSelectError,
  makeSelectLoading,
} from './selectors';
import saga from './sagas';
import Ul from './Ul';
import Title from './Title';
import Li from './Li';
import { loadControllers, toggleController, setUpClick } from './actions';
import ActivateBtn from './ActivateBtn';

class Home extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadControllers();
  }
  render() {
    return (
      <Wrapper>
        {
          this.props.controllers ? (
            <Ul>
              {
                this.props.controllers.map((x, idx) => (
                  <Li onClick={() => this.props.controllerClick(idx)} key={idx}>
                    <Title status={x.status}>
                      Lamp
                    </Title>
                    <div style={{ display: 'flex' }}>
                      <ActivateBtn setup onClick={(e) => { this.props.setUpClick(idx); e.stopPropagation(); }} />
                      <ActivateBtn status={x.status} />
                    </div>
                  </Li>
                ))
              }
            </Ul>
          ) : null
        }
      </Wrapper>
    );
  }
}

Home.propTypes = {
  loadControllers: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  controllers: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  controllerClick: PropTypes.func.isRequired,
  setUpClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Home: makeSelectHome(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  controllers: makeSelectControllers(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadControllers: () => dispatch(loadControllers()),
    controllerClick: (idx) => dispatch(toggleController(idx)),
    setUpClick: (idx) => dispatch(setUpClick(idx)),
  };
}

const withSaga = injectSaga({ key: 'home', saga })(Home);

export default connect(mapStateToProps, mapDispatchToProps)(withSaga);
