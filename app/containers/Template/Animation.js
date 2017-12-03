import styled, { keyframes } from 'styled-components';

const rotationAppear = keyframes`
  from {
    transform: rotate(-90deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const EditAnimation = styled.div`
  animation: ${rotationAppear} .0s ease-out;
`;

export const CloseAnimation = styled.div`
  animation: ${rotationAppear} .5s ease-out;
`;
