import React from 'react';
import { connect } from 'react-redux';

const HistoryRoute = ({ renderPath, urlPath, component, render }) => {
  let el = component || render;
  return isMatched(urlPath, renderPath) ? buildComponent(el, urlPath) : null;
};

const isMatched = (urlPath, renderPath) => {
  if (typeof renderPath === 'function') {
    return renderPath(urlPath);
  }
  return renderPath === '*' || renderPath === urlPath;
};

const buildComponent = (el, urlPath) => {
  if (typeof el === 'function' && el.name === 'render') {
    return el(urlPath);
  } else {
    return React.createElement(el, { urlPath });
  }
};

export default connect((state, props) => {
  let { path = '' } = state.historyRouter;

  return {
    ...props,
    renderPath: props.path,
    urlPath: global.plain__pathname__ || path
  };
})(HistoryRoute);
