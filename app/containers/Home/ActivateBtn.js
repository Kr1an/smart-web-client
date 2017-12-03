import styled from 'styled-components';

export default styled.div`
    min-width: 50px;
    min-height: 50px;
    margin-right: 5px;
    background: ${(props) => props.setup ? '#ddde77' : props.status ? '#6bef63' : '#ccb1a1'};
    border-radius: 100px;
    transform-origin: center;
    transition: 0.1s;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition:0.5s;
    }
    &:active {
        transform: scale(1.25);
        transition:0.1s;
    }

`;
