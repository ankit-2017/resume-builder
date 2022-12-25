import React from 'react';

export const cloneElement = (type, props, children) => (
  React.cloneElement(type, { ...props }, children)
);

export const createElement = (type, props, children) => (
  React.createElement(type, { ...props }, children)
);
