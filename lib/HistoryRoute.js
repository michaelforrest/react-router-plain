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
  var _state$historyRouter$ = state.historyRouter.path,
      path = _state$historyRouter$ === undefined ? '' : _state$historyRouter$;


  return _extends({}, props, {
    renderPath: props.path,
    urlPath: global.plain__pathname__ || path
  });
})(HistoryRoute);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9IaXN0b3J5Um91dGUuanMiXSwibmFtZXMiOlsiSGlzdG9yeVJvdXRlIiwicmVuZGVyUGF0aCIsInVybFBhdGgiLCJjb21wb25lbnQiLCJyZW5kZXIiLCJlbCIsImlzTWF0Y2hlZCIsImJ1aWxkQ29tcG9uZW50IiwibmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJzdGF0ZSIsInByb3BzIiwiaGlzdG9yeVJvdXRlciIsInBhdGgiLCJnbG9iYWwiLCJwbGFpbl9fcGF0aG5hbWVfXyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLE9BQWdEO0FBQUEsTUFBN0NDLFVBQTZDLFFBQTdDQSxVQUE2QztBQUFBLE1BQWpDQyxPQUFpQyxRQUFqQ0EsT0FBaUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUNuRSxNQUFJQyxLQUFLRixhQUFhQyxNQUF0QjtBQUNBLFNBQU9FLFVBQVVKLE9BQVYsRUFBbUJELFVBQW5CLElBQWlDTSxlQUFlRixFQUFmLEVBQW1CSCxPQUFuQixDQUFqQyxHQUErRCxJQUF0RTtBQUNELENBSEQ7O0FBS0EsSUFBTUksWUFBWSxTQUFaQSxTQUFZLENBQUNKLE9BQUQsRUFBVUQsVUFBVixFQUF5QjtBQUN6QyxNQUFJLE9BQU9BLFVBQVAsS0FBc0IsVUFBMUIsRUFBc0M7QUFDcEMsV0FBT0EsV0FBV0MsT0FBWCxDQUFQO0FBQ0Q7QUFDRCxTQUFPRCxlQUFlLEdBQWYsSUFBc0JBLGVBQWVDLE9BQTVDO0FBQ0QsQ0FMRDs7QUFPQSxJQUFNSyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNGLEVBQUQsRUFBS0gsT0FBTCxFQUFpQjtBQUN0QyxNQUFJLE9BQU9HLEVBQVAsS0FBYyxVQUFkLElBQTRCQSxHQUFHRyxJQUFILEtBQVksUUFBNUMsRUFBc0Q7QUFDcEQsV0FBT0gsR0FBR0gsT0FBSCxDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBTyxnQkFBTU8sYUFBTixDQUFvQkosRUFBcEIsRUFBd0IsRUFBRUgsZ0JBQUYsRUFBeEIsQ0FBUDtBQUNEO0FBQ0YsQ0FORDs7a0JBUWUseUJBQVEsVUFBQ1EsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQUEsOEJBQ25CRCxNQUFNRSxhQURhLENBQ2pDQyxJQURpQztBQUFBLE1BQ2pDQSxJQURpQyx5Q0FDMUIsRUFEMEI7OztBQUd2QyxzQkFDS0YsS0FETDtBQUVFVixnQkFBWVUsTUFBTUUsSUFGcEI7QUFHRVgsYUFBU1ksT0FBT0MsaUJBQVAsSUFBNEJGO0FBSHZDO0FBS0QsQ0FSYyxFQVFaYixZQVJZLEMiLCJmaWxlIjoiSGlzdG9yeVJvdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IEhpc3RvcnlSb3V0ZSA9ICh7IHJlbmRlclBhdGgsIHVybFBhdGgsIGNvbXBvbmVudCwgcmVuZGVyIH0pID0+IHtcbiAgbGV0IGVsID0gY29tcG9uZW50IHx8IHJlbmRlcjtcbiAgcmV0dXJuIGlzTWF0Y2hlZCh1cmxQYXRoLCByZW5kZXJQYXRoKSA/IGJ1aWxkQ29tcG9uZW50KGVsLCB1cmxQYXRoKSA6IG51bGw7XG59O1xuXG5jb25zdCBpc01hdGNoZWQgPSAodXJsUGF0aCwgcmVuZGVyUGF0aCkgPT4ge1xuICBpZiAodHlwZW9mIHJlbmRlclBhdGggPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcmVuZGVyUGF0aCh1cmxQYXRoKTtcbiAgfVxuICByZXR1cm4gcmVuZGVyUGF0aCA9PT0gJyonIHx8IHJlbmRlclBhdGggPT09IHVybFBhdGg7XG59O1xuXG5jb25zdCBidWlsZENvbXBvbmVudCA9IChlbCwgdXJsUGF0aCkgPT4ge1xuICBpZiAodHlwZW9mIGVsID09PSAnZnVuY3Rpb24nICYmIGVsLm5hbWUgPT09ICdyZW5kZXInKSB7XG4gICAgcmV0dXJuIGVsKHVybFBhdGgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGVsLCB7IHVybFBhdGggfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlLCBwcm9wcykgPT4ge1xuICBsZXQgeyBwYXRoID0gJycgfSA9IHN0YXRlLmhpc3RvcnlSb3V0ZXI7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5wcm9wcyxcbiAgICByZW5kZXJQYXRoOiBwcm9wcy5wYXRoLFxuICAgIHVybFBhdGg6IGdsb2JhbC5wbGFpbl9fcGF0aG5hbWVfXyB8fCBwYXRoXG4gIH07XG59KShIaXN0b3J5Um91dGUpO1xuIl19