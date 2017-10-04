import React from 'react';
import { connect } from 'react-redux';
import { changePathAction, backButtonClick, historyRouter } from './redux.js';
import HistoryRoute from './HistoryRoute.js';
import Link from './Link.js';

class HistoryRouter extends React.Component {
  shouldComponentUpdate(nextProps) {
    return false;
  }

  render() {
    return null;
  }

  componentDidMount() {
    changePath(location.pathname);

    window.addEventListener('popstate', ({ state }) => {
      _dispatch(backButtonClick({ ...state, isBack: true }));
    });
  }

  makeRelativePath(previousPath, path) {
    if (path.charAt(0) !== '/') {
      let prefix = previousPath;
      if (prefix.charAt(prefix.length - 1) !== '/') {
        prefix = prefix + '/';
      }
      path = prefix + path;
    }

    return path;
  }

  componentWillReceiveProps(nextProps) {
    let { previousPath, path, isBack } = nextProps;
    let method =
      !previousPath || isBack || this.isSameUrlPattern(previousPath, path)
        ? 'replace'
        : 'push';

    path = this.makeRelativePath(previousPath, path);
    history[method + 'State']({ previousPath, path }, null, path);
  }

  isSameUrlPattern(p1, p2) {
    if (!p1 || !p2) {
      return false;
    }
    return p1 === p2;
    //return p1.split('/')[1] === p2.split('/')[1];
  }
}

export const changePath = path => {
  _dispatch(changePathAction(path));
};

let _dispatch;

export default connect(
  state => {
    return {
      ...state.historyRouter
    };
  },
  dispatch => {
    _dispatch = dispatch;
    return {};
  }
)(HistoryRouter);

export { HistoryRoute, Link, historyRouter };
