import styled from 'styled-components';

import NormalLi from 'components/Li';

export const selected = `
    background: rgba(0,0,0,0.1);
    border-radius: 0.5rem;
`;

export default styled(NormalLi)`
  margin-top:1rem;
  padding: 0.5rem 2rem;
  @media (max-width: 800px) {
    padding: 0.5rem 0.5rem;
  }
  &:hover {
    ${selected}
  }
`;
