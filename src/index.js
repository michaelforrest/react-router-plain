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

  componentWillMount() {
    if (typeof window === 'undefined') {
      global.plain__pathname__ = this.props.pathname;
    }
  }

  componentDidMount() {
    let { pathname } = location;
    changePath(pathname);

    window.addEventListener('popstate', ({ state }) => {
      _dispatch(backButtonClick({ ...state, isBack: true }));
    });
  }

  componentWillReceiveProps(nextProps) {
    let { previousPath, path, isBack } = nextProps;
    let method =
      !previousPath || isBack || this.isSameUrlPattern(previousPath, path)
        ? 'replace'
        : 'push';

    history[method + 'State']({ previousPath, path }, null, path);
  }

  isSameUrlPattern(p1, p2) {
    if (!p1 || !p2) {
      return false;
    }
    return p1 === p2;
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
