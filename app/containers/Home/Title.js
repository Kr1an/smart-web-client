import styled from 'styled-components';

export default styled.p`
    font-size: 3rem;
    display: flex;
    color: ${(props) => props.status ? '#e5f9e3' : '#bdbdbd'};
    align-items: flex-end;
    margin: 0;
    font-family: monospace;
    margin-left: 25px;
    overflow:hidden;
    font-weight: bold;
    padding: 0;
    transition: 0.3s;
    &>p {
        font-weight: normal;
        padding: 0;
        margin: 0;
        font-family: inherit;
        font-size: 1rem;
        margin: 0 10px;
        opacity: 0.3;
        transition: all 1s ease;
    }
`;
