import styled, { keyframes } from 'styled-components';

const rightToLeftAppear = keyframes`
  0% {
    opacity: 0.3;
    right: -50px;
  }
  80% {
    opacity: 1;
  }

`;

export default styled.input`
  position: relative;
  right:0;
  animation: ${rightToLeftAppear} .3s cubic-bezier(0.250, 0.250, 0.040, 1.470);
  color: rgba(0,0,0,0.6);
  font-size: 1.3rem;
  outline: none;
  color: black;
  border-bottom: 4px solid black;
`;
