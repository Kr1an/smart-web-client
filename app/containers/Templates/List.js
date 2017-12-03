import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;
const Li = styled.li``;

function List({ component, items, onUpdate }) {
  const ItemComponent = component;
  const content = items.map((i, idx) => <Li key={idx}><ItemComponent onUpdate={onUpdate} item={i} /></Li>);
  return (
    <Ul>
      { content }
    </Ul>
  );
  // return <div>List</div>;
}
List.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  items: PropTypes.array,
  onUpdate: PropTypes.func.isRequired,
};

export default List;
