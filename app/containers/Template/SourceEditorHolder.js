import styled, { keyframes } from 'styled-components';

const fromNoneToMaxHeight = keyframes`
  from {
    height: 0;
  }
`;

export default styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  background: #000;

  textarea {
    outline: none;
    margin: 12px;
    padding: 13px;
    margin-right: 107px;
    overflow: hidden;
    resize: none;
    font-family: monospace;
    background: black;
    color: rgba(255,255,255,0.6);
    font-size: 1.5rem;
    animation: ${fromNoneToMaxHeight} 0.4s cubic-bezier(0.000, 0.655, 0.400, 1.280);
  }
`;
