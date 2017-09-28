'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = (0, _reactRedux.connect)(function (state, props) {
  var _ref2 = state.historyRouter || {},
      _ref2$path = _ref2.path,
      path = _ref2$path === undefined ? '' : _ref2$path;

  return _extends({}, props, {
    renderPath: props.path,
    urlPath: path
  });
})(HistoryRoute);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9IaXN0b3J5Um91dGUuanMiXSwibmFtZXMiOlsiSGlzdG9yeVJvdXRlIiwicmVuZGVyUGF0aCIsInVybFBhdGgiLCJjb21wb25lbnQiLCJyZW5kZXIiLCJlbCIsImlzTWF0Y2hlZCIsImJ1aWxkQ29tcG9uZW50IiwibmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJzdGF0ZSIsInByb3BzIiwiaGlzdG9yeVJvdXRlciIsInBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxPQUFnRDtBQUFBLE1BQTdDQyxVQUE2QyxRQUE3Q0EsVUFBNkM7QUFBQSxNQUFqQ0MsT0FBaUMsUUFBakNBLE9BQWlDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDbkUsTUFBSUMsS0FBS0YsYUFBYUMsTUFBdEI7QUFDQSxTQUFPRSxVQUFVSixPQUFWLEVBQW1CRCxVQUFuQixJQUFpQ00sZUFBZUYsRUFBZixFQUFtQkgsT0FBbkIsQ0FBakMsR0FBK0QsSUFBdEU7QUFDRCxDQUhEOztBQUtBLElBQU1JLFlBQVksU0FBWkEsU0FBWSxDQUFDSixPQUFELEVBQVVELFVBQVYsRUFBeUI7QUFDekMsTUFBSSxPQUFPQSxVQUFQLEtBQXNCLFVBQTFCLEVBQXNDO0FBQ3BDLFdBQU9BLFdBQVdDLE9BQVgsQ0FBUDtBQUNEO0FBQ0QsU0FBT0QsZUFBZSxHQUFmLElBQXNCQSxlQUFlQyxPQUE1QztBQUNELENBTEQ7O0FBT0EsSUFBTUssaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDRixFQUFELEVBQUtILE9BQUwsRUFBaUI7QUFDdEMsTUFBSSxPQUFPRyxFQUFQLEtBQWMsVUFBZCxJQUE0QkEsR0FBR0csSUFBSCxLQUFZLFFBQTVDLEVBQXNEO0FBQ3BELFdBQU9ILEdBQUdILE9BQUgsQ0FBUDtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU8sZ0JBQU1PLGFBQU4sQ0FBb0JKLEVBQXBCLEVBQXdCLEVBQUVILGdCQUFGLEVBQXhCLENBQVA7QUFDRDtBQUNGLENBTkQ7O2tCQVFlLHlCQUFRLFVBQUNRLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUFBLGNBQ25CRCxNQUFNRSxhQUFOLElBQXVCLEVBREo7QUFBQSx5QkFDakNDLElBRGlDO0FBQUEsTUFDakNBLElBRGlDLDhCQUMxQixFQUQwQjs7QUFFdkMsc0JBQ0tGLEtBREw7QUFFRVYsZ0JBQVlVLE1BQU1FLElBRnBCO0FBR0VYLGFBQVNXO0FBSFg7QUFLRCxDQVBjLEVBT1piLFlBUFksQyIsImZpbGUiOiJIaXN0b3J5Um91dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgSGlzdG9yeVJvdXRlID0gKHsgcmVuZGVyUGF0aCwgdXJsUGF0aCwgY29tcG9uZW50LCByZW5kZXIgfSkgPT4ge1xuICBsZXQgZWwgPSBjb21wb25lbnQgfHwgcmVuZGVyO1xuICByZXR1cm4gaXNNYXRjaGVkKHVybFBhdGgsIHJlbmRlclBhdGgpID8gYnVpbGRDb21wb25lbnQoZWwsIHVybFBhdGgpIDogbnVsbDtcbn07XG5cbmNvbnN0IGlzTWF0Y2hlZCA9ICh1cmxQYXRoLCByZW5kZXJQYXRoKSA9PiB7XG4gIGlmICh0eXBlb2YgcmVuZGVyUGF0aCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiByZW5kZXJQYXRoKHVybFBhdGgpO1xuICB9XG4gIHJldHVybiByZW5kZXJQYXRoID09PSAnKicgfHwgcmVuZGVyUGF0aCA9PT0gdXJsUGF0aDtcbn07XG5cbmNvbnN0IGJ1aWxkQ29tcG9uZW50ID0gKGVsLCB1cmxQYXRoKSA9PiB7XG4gIGlmICh0eXBlb2YgZWwgPT09ICdmdW5jdGlvbicgJiYgZWwubmFtZSA9PT0gJ3JlbmRlcicpIHtcbiAgICByZXR1cm4gZWwodXJsUGF0aCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoZWwsIHsgdXJsUGF0aCB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUsIHByb3BzKSA9PiB7XG4gIGxldCB7IHBhdGggPSAnJyB9ID0gc3RhdGUuaGlzdG9yeVJvdXRlciB8fCB7fTtcbiAgcmV0dXJuIHtcbiAgICAuLi5wcm9wcyxcbiAgICByZW5kZXJQYXRoOiBwcm9wcy5wYXRoLFxuICAgIHVybFBhdGg6IHBhdGhcbiAgfTtcbn0pKEhpc3RvcnlSb3V0ZSk7XG4iXX0=