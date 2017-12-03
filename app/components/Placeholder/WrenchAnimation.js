import styled, { keyframes } from 'styled-components';

const sizingRotationRepeat = keyframes`
  0% { opacity: 0.6; transform:rotate(0deg)}
  50% { opacity: 0.6; transform:rotate(45deg)}
  100% { opacity: 0.6; transform:rotate(0deg)}
`;

export default styled.div`
  animation: ${sizingRotationRepeat} 5s ease-in-out infinite;
  transform-origin: 85% 20%;
  position: relative;
  &:hover {
    cursor: pointer
  }
`;
