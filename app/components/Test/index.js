/**
*
* Test
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Test() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Test.propTypes = {

};

export default Test;
