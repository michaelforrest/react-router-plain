import React from 'react';
import { connect } from 'react-redux';
import { changePath } from './index.js';

const Link = ({ to, children, className }) => (
  <a
    className={className}
    href="javascript:void(0)"
    onClick={() => {
      changePath(to);
    }}
  >
    {children}
  </a>
);

export default Link;
