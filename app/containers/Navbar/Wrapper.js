import styled from 'styled-components';

export default styled.nav.attrs({
  className: 'navbar navbar-inverse navbar-fixed-top',
  id: 'sidebar-wrapper',
  role: 'navigation',
})`
  height: 100%;
  min-width: inherit;
  position: fixed;
  left: 0;
  flex-direction: column;
  padding: 0;
  background: #4a4a4a;
  border-left: 60px solid rgba(0,0,0,0.12);
  @media (max-width: 800px) {
    border-left: none;
    background: #353535;
  }
`;
