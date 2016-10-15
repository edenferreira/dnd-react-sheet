import React from 'react';
import {
  flow,
  toPairs,
  filter,
  map,
  join,
} from 'lodash/fp';

const createClasses = flow(
  toPairs,
  filter(([key, value]) => key !== 'children'),
  map(([kind, size]) => `col-${kind}-${size}`),
  join(' ')
);

export const Col = (props) => (
  <span className={createClasses(props)}>
    {props.children}
  </span>
);

export const Row = ({
  children
}) => (
  <div className='row'>
    {children}
  </div>
);

export const ContainerFluid = ({
  children
}) => (
  <div className='container-fluid'>
    {children}
  </div>
);