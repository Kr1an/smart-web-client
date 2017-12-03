import styled from 'styled-components';

import NormalUl from 'components/Ul';

export default styled(NormalUl).attrs({
  className: 'nav sidebar-nav',
})`
  display: flex;
  flex-direction: column
`;

