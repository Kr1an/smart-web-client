import styled from 'styled-components';

export default styled.div`
    background: #4a4a4a;
    padding: 3px;
    border-radius: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transform-origin: center;
    transition: 0.1s;
    cursor: pointer;
    &:hover {
        filter: drop-shadow(0 0 6px rgba(0,0,0,0.15));
    }
    &:active {
        filter: drop-shadow(0 0 10px rgba(0,0,0,0.4));
    }
`;
