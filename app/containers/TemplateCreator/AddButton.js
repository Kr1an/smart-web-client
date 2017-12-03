import styled from 'styled-components';

export default styled.button`

  opacity: 0.8;
  color: black;
  transition: all 0.1s linear;

  &:hover {
    outline: none;
    opacity: 1;
    transform: scale(1.04);
    filter: drop-shadow(0 0 10px rgba(0,0,0,0.3));
    cursor: pointer;
    transform-origin: 50% 50%;
    color: black;
  }
  &:focus {
    outline: none;
  }
`;
