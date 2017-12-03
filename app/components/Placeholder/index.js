import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import { FaWrench } from 'react-icons/lib/fa';

import Wrapper from './Wrapper';
import BackgroundAnimation from '../Error/BackgroundAnimation';
import WrenchAnimation from './WrenchAnimation';
import messages from './messages';
import H2 from './H2';

function Placeholder({ componentTitle }) {
  return (
    <BackgroundAnimation>
      <Wrapper>
        <WrenchAnimation>
          <FaWrench size={100} />
        </WrenchAnimation>
        <H2>
          {componentTitle}
        </H2>
        <FormattedMessage {...messages.header} />
      </Wrapper>
    </BackgroundAnimation>
  );
}

Placeholder.propTypes = {
  componentTitle: PropTypes.string,
};

export default Placeholder;
