import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: transparent;
  span {
    font-weight: lighter;
    font-size: 1rem;
    color: black;
    opacity: 0.7;
    text-shadow: 1px 3px rgba(0,0,0,0.2);
  }
`;

export default Wrapper;
