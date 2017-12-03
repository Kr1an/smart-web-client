import React from 'react';
import MDSpinner from 'react-md-spinner';

import Wrapper from './Wrapper';
import BackgroundAnimation from '../Error/BackgroundAnimation';
import IconAnimation from '../Error/IconAnimation';


export default function Loading() {
  return (
    <BackgroundAnimation>
      <Wrapper>
        <IconAnimation>
          <MDSpinner size={100} />
        </IconAnimation>
      </Wrapper>
    </BackgroundAnimation>
  );
}
