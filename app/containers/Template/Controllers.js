import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  from {
    opacity: 0;
    bottom: 2rem;
  }
  to {
    bottom: 0;
    opacity: 1;
  }
`;

export default styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  justify-content: space-around;
  background: rgba(255,255,255,0.4);
  padding: 2px 5px;
  align-items: center;
  * {
    &:hover {
      color: red;
    }
    position: relative;
    animation: ${fadeInOut} 0.2s linear;

    transition: all 0.01s linear;
    cursor: pointer;

  }
`;
