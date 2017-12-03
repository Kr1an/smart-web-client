import styled from 'styled-components';
import Li, { selected } from './Li';

export default styled(Li)`
    ${selected}
    color: blue;
`;
