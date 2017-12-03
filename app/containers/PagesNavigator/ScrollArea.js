import React, { PropTypes } from 'react';
import ScrollArea from 'react-scrollbar';


const ScrollContainer = ({ children }) => (
  <ScrollArea style={{ height: '100vh', width: '100%' }} >
    { children }
  </ScrollArea>
);

ScrollContainer.propTypes = {
  children: PropTypes.object,
};

export default ScrollContainer;
