/**
*
* PagesNavigatorElement
*
*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { MdDelete } from 'react-icons/lib/md';
import { push } from 'react-router-redux';
import ReactTooltip from 'react-tooltip';

import Controllers from 'containers/Template/Controllers';
import Title from 'containers/Template/Title';
import DashedWrapper from 'containers/Template/DashedWrapper';
import ImageHolder from './ImageHolder';

import Wrapper from './Wrapper';

class PagesNavigatorElement extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    page: PropTypes.object.isRequired,
    onPageClick: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
      isFocused: false,
    };
  }
  render() {
    return (
      <Wrapper
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
        onClick={() => this.props.onPageClick(this.props.page.refTitle)}
      >

        <ImageHolder src={this.props.page.url || 'http://adaptive-instruments.com/images/structure/noProductImage.jpg'} />
        {
          !(this.state.isHover) ? (
            <Title style={{ margin: 0 }}>{this.props.page.title}</Title>
          ) : null
        }
        {
          (this.state.isHover) ? (
            <DashedWrapper />
          ) : null
        }
        {
          this.state.isHover ? (

            <Controllers>
              <ReactTooltip
                id="delete-tooltip"
                aria-haspopup="true"
                delayShow={300}
                effect="solid"
              >Delete
              </ReactTooltip>
              <MdDelete
                data-tip
                data-for="delete-tooltip"
                size={40}
              />
            </Controllers>
          ) : null
        }
      </Wrapper>
    );
  }
}

PagesNavigatorElement.propTypes = {

};

export function mapDispatchToProps(dispatch) {
  return {
    onPageClick: (id) => dispatch(push(`/pages/${id}`)),
  };
}

export default connect(null, mapDispatchToProps)(PagesNavigatorElement);
