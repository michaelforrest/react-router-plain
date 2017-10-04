'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var HistoryRoute = function HistoryRoute(_ref) {
  var renderPath = _ref.renderPath,
    urlPath = _ref.urlPath,
    component = _ref.component,
    render = _ref.render;

  var el = component || render;
  return isMatched(urlPath, renderPath) ? buildComponent(el, urlPath) : null;
};

var isMatched = function isMatched(urlPath, renderPath) {
  if (typeof renderPath === 'function') {
    return renderPath(urlPath);
  }
  return renderPath === '*' || renderPath === urlPath;
};

var buildComponent = function buildComponent(el, urlPath) {
  if (typeof el === 'function' && el.name === 'render') {
    return el(urlPath);
  } else {
    return _react2.default.createElement(el, { urlPath: urlPath });
  }
};

exports.default = (0, _reactRedux.connect)(function(state, props) {
  var _state$historyRouter$ = state.historyRouter.path,
    path = _state$historyRouter$ === undefined ? '' : _state$historyRouter$;

  return _extends({}, props, {
    renderPath: props.path,
    urlPath: path
  });
})(HistoryRoute);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9IaXN0b3J5Um91dGUuanMiXSwibmFtZXMiOlsiSGlzdG9yeVJvdXRlIiwicmVuZGVyUGF0aCIsInVybFBhdGgiLCJjb21wb25lbnQiLCJyZW5kZXIiLCJlbCIsImlzTWF0Y2hlZCIsImJ1aWxkQ29tcG9uZW50IiwibmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJzdGF0ZSIsInByb3BzIiwiaGlzdG9yeVJvdXRlciIsInBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxPQUFnRDtBQUFBLE1BQTdDQyxVQUE2QyxRQUE3Q0EsVUFBNkM7QUFBQSxNQUFqQ0MsT0FBaUMsUUFBakNBLE9BQWlDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDbkUsTUFBSUMsS0FBS0YsYUFBYUMsTUFBdEI7QUFDQSxTQUFPRSxVQUFVSixPQUFWLEVBQW1CRCxVQUFuQixJQUFpQ00sZUFBZUYsRUFBZixFQUFtQkgsT0FBbkIsQ0FBakMsR0FBK0QsSUFBdEU7QUFDRCxDQUhEOztBQUtBLElBQU1JLFlBQVksU0FBWkEsU0FBWSxDQUFDSixPQUFELEVBQVVELFVBQVYsRUFBeUI7QUFDekMsTUFBSSxPQUFPQSxVQUFQLEtBQXNCLFVBQTFCLEVBQXNDO0FBQ3BDLFdBQU9BLFdBQVdDLE9BQVgsQ0FBUDtBQUNEO0FBQ0QsU0FBT0QsZUFBZSxHQUFmLElBQXNCQSxlQUFlQyxPQUE1QztBQUNELENBTEQ7O0FBT0EsSUFBTUssaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDRixFQUFELEVBQUtILE9BQUwsRUFBaUI7QUFDdEMsTUFBSSxPQUFPRyxFQUFQLEtBQWMsVUFBZCxJQUE0QkEsR0FBR0csSUFBSCxLQUFZLFFBQTVDLEVBQXNEO0FBQ3BELFdBQU9ILEdBQUdILE9BQUgsQ0FBUDtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU8sZ0JBQU1PLGFBQU4sQ0FBb0JKLEVBQXBCLEVBQXdCLEVBQUVILGdCQUFGLEVBQXhCLENBQVA7QUFDRDtBQUNGLENBTkQ7O2tCQVFlLHlCQUFRLFVBQUNRLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUFBLDhCQUNuQkQsTUFBTUUsYUFEYSxDQUNqQ0MsSUFEaUM7QUFBQSxNQUNqQ0EsSUFEaUMseUNBQzFCLEVBRDBCOztBQUV2QyxzQkFDS0YsS0FETDtBQUVFVixnQkFBWVUsTUFBTUUsSUFGcEI7QUFHRVgsYUFBU1c7QUFIWDtBQUtELENBUGMsRUFPWmIsWUFQWSxDIiwiZmlsZSI6Ikhpc3RvcnlSb3V0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBIaXN0b3J5Um91dGUgPSAoeyByZW5kZXJQYXRoLCB1cmxQYXRoLCBjb21wb25lbnQsIHJlbmRlciB9KSA9PiB7XG4gIGxldCBlbCA9IGNvbXBvbmVudCB8fCByZW5kZXI7XG4gIHJldHVybiBpc01hdGNoZWQodXJsUGF0aCwgcmVuZGVyUGF0aCkgPyBidWlsZENvbXBvbmVudChlbCwgdXJsUGF0aCkgOiBudWxsO1xufTtcblxuY29uc3QgaXNNYXRjaGVkID0gKHVybFBhdGgsIHJlbmRlclBhdGgpID0+IHtcbiAgaWYgKHR5cGVvZiByZW5kZXJQYXRoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHJlbmRlclBhdGgodXJsUGF0aCk7XG4gIH1cbiAgcmV0dXJuIHJlbmRlclBhdGggPT09ICcqJyB8fCByZW5kZXJQYXRoID09PSB1cmxQYXRoO1xufTtcblxuY29uc3QgYnVpbGRDb21wb25lbnQgPSAoZWwsIHVybFBhdGgpID0+IHtcbiAgaWYgKHR5cGVvZiBlbCA9PT0gJ2Z1bmN0aW9uJyAmJiBlbC5uYW1lID09PSAncmVuZGVyJykge1xuICAgIHJldHVybiBlbCh1cmxQYXRoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChlbCwgeyB1cmxQYXRoIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdGF0ZSwgcHJvcHMpID0+IHtcbiAgbGV0IHsgcGF0aCA9ICcnIH0gPSBzdGF0ZS5oaXN0b3J5Um91dGVyO1xuICByZXR1cm4ge1xuICAgIC4uLnByb3BzLFxuICAgIHJlbmRlclBhdGg6IHByb3BzLnBhdGgsXG4gICAgdXJsUGF0aDogcGF0aFxuICB9O1xufSkoSGlzdG9yeVJvdXRlKTtcbiJdfQ==
