import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarLinkBaseStyles = `
  color: rgba(255,255,255,0.6);
  font-size: 2rem;
  display: flex;
  align-items: center;
  span {
    margin-left: 0.5rem;
    font-size: 1.5rem;
    font-weight: normal;
  }
  &:hover {
    color: white;
    text-decoration: none;
    a {
      color: white;
    }
  }
`;

export default styled(Link)`
  ${NavbarLinkBaseStyles}
`;
