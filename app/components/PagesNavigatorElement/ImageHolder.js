import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 325px;
  width:100%;
`;

const ImageHolder = ({ src }) => (
  <Wrapper style={{ backgroundImage: `url(${src})` }}>

  </Wrapper>
);

ImageHolder.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ImageHolder;
