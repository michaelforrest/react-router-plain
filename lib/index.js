'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.historyRouter = exports.Link = exports.HistoryRoute = exports.changePath = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('./redux.js');

var _HistoryRoute = require('./HistoryRoute.js');

var _HistoryRoute2 = _interopRequireDefault(_HistoryRoute);

var _Link = require('./Link.js');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HistoryRouter = function (_React$Component) {
  _inherits(HistoryRouter, _React$Component);

  function HistoryRouter() {
    _classCallCheck(this, HistoryRouter);

    return _possibleConstructorReturn(this, (HistoryRouter.__proto__ || Object.getPrototypeOf(HistoryRouter)).apply(this, arguments));
  }

  _createClass(HistoryRouter, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (typeof window === 'undefined') {
        global.plain__pathname__ = this.props.pathname;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _location = location,
          pathname = _location.pathname;

      changePath(pathname);

      window.addEventListener('popstate', function (_ref) {
        var state = _ref.state;

        _dispatch((0, _redux.backButtonClick)(_extends({}, state, { isBack: true })));
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var history = this.props.history;
      var previousPath = nextProps.previousPath,
          path = nextProps.path,
          isBack = nextProps.isBack;

      var method = !previousPath || isBack || this.isSameUrlPattern(previousPath, path) ? history.replace : history.push;

      method({ previousPath: previousPath, path: path }, null, path);
    }
  }, {
    key: 'isSameUrlPattern',
    value: function isSameUrlPattern(p1, p2) {
      if (!p1 || !p2) {
        return false;
      }
      return p1 === p2;
    }
  }]);

  return HistoryRouter;
}(_react2.default.Component);

var changePath = exports.changePath = function changePath(path) {
  _dispatch((0, _redux.changePathAction)(path));
};

var _dispatch = void 0;

exports.default = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state.historyRouter);
}, function (dispatch) {
  _dispatch = dispatch;
  return {};
})(HistoryRouter);
exports.HistoryRoute = _HistoryRoute2.default;
exports.Link = _Link2.default;
exports.historyRouter = _redux.historyRouter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIaXN0b3J5Um91dGVyIiwibmV4dFByb3BzIiwid2luZG93IiwiZ2xvYmFsIiwicGxhaW5fX3BhdGhuYW1lX18iLCJwcm9wcyIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJjaGFuZ2VQYXRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlIiwiX2Rpc3BhdGNoIiwiaXNCYWNrIiwiaGlzdG9yeSIsInByZXZpb3VzUGF0aCIsInBhdGgiLCJtZXRob2QiLCJpc1NhbWVVcmxQYXR0ZXJuIiwicmVwbGFjZSIsInB1c2giLCJwMSIsInAyIiwiQ29tcG9uZW50IiwiaGlzdG9yeVJvdXRlciIsImRpc3BhdGNoIiwiSGlzdG9yeVJvdXRlIiwiTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7Ozs7Ozs7OzswQ0FDa0JDLFMsRUFBVztBQUMvQixhQUFPLEtBQVA7QUFDRDs7OzZCQUVRO0FBQ1AsYUFBTyxJQUFQO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsVUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDQyxlQUFPQyxpQkFBUCxHQUEyQixLQUFLQyxLQUFMLENBQVdDLFFBQXRDO0FBQ0Q7QUFDRjs7O3dDQUVtQjtBQUFBLHNCQUNDQyxRQUREO0FBQUEsVUFDWkQsUUFEWSxhQUNaQSxRQURZOztBQUVsQkUsaUJBQVdGLFFBQVg7O0FBRUFKLGFBQU9PLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9DLGdCQUFlO0FBQUEsWUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUNqREMsa0JBQVUseUNBQXFCRCxLQUFyQixJQUE0QkUsUUFBUSxJQUFwQyxJQUFWO0FBQ0QsT0FGRDtBQUdEOzs7OENBRXlCWCxTLEVBQVc7QUFBQSxVQUMzQlksT0FEMkIsR0FDZixLQUFLUixLQURVLENBQzNCUSxPQUQyQjtBQUFBLFVBRTdCQyxZQUY2QixHQUVFYixTQUZGLENBRTdCYSxZQUY2QjtBQUFBLFVBRWZDLElBRmUsR0FFRWQsU0FGRixDQUVmYyxJQUZlO0FBQUEsVUFFVEgsTUFGUyxHQUVFWCxTQUZGLENBRVRXLE1BRlM7O0FBR25DLFVBQUlJLFNBQ0YsQ0FBQ0YsWUFBRCxJQUFpQkYsTUFBakIsSUFBMkIsS0FBS0ssZ0JBQUwsQ0FBc0JILFlBQXRCLEVBQW9DQyxJQUFwQyxDQUEzQixHQUNJRixRQUFRSyxPQURaLEdBRUlMLFFBQVFNLElBSGQ7O0FBS0FILGFBQU8sRUFBRUYsMEJBQUYsRUFBZ0JDLFVBQWhCLEVBQVAsRUFBK0IsSUFBL0IsRUFBcUNBLElBQXJDO0FBQ0Q7OztxQ0FFZ0JLLEUsRUFBSUMsRSxFQUFJO0FBQ3ZCLFVBQUksQ0FBQ0QsRUFBRCxJQUFPLENBQUNDLEVBQVosRUFBZ0I7QUFDZCxlQUFPLEtBQVA7QUFDRDtBQUNELGFBQU9ELE9BQU9DLEVBQWQ7QUFDRDs7OztFQXhDeUIsZ0JBQU1DLFM7O0FBMkMzQixJQUFNZCxrQ0FBYSxTQUFiQSxVQUFhLE9BQVE7QUFDaENHLFlBQVUsNkJBQWlCSSxJQUFqQixDQUFWO0FBQ0QsQ0FGTTs7QUFJUCxJQUFJSixrQkFBSjs7a0JBRWUseUJBQ2IsaUJBQVM7QUFDUCxzQkFDS0QsTUFBTWEsYUFEWDtBQUdELENBTFksRUFNYixvQkFBWTtBQUNWWixjQUFZYSxRQUFaO0FBQ0EsU0FBTyxFQUFQO0FBQ0QsQ0FUWSxFQVVieEIsYUFWYSxDO1FBWU55QixZO1FBQWNDLEk7UUFBTUgsYSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY2hhbmdlUGF0aEFjdGlvbiwgYmFja0J1dHRvbkNsaWNrLCBoaXN0b3J5Um91dGVyIH0gZnJvbSAnLi9yZWR1eC5qcyc7XG5pbXBvcnQgSGlzdG9yeVJvdXRlIGZyb20gJy4vSGlzdG9yeVJvdXRlLmpzJztcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluay5qcyc7XG5cbmNsYXNzIEhpc3RvcnlSb3V0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZ2xvYmFsLnBsYWluX19wYXRobmFtZV9fID0gdGhpcy5wcm9wcy5wYXRobmFtZTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gbG9jYXRpb247XG4gICAgY2hhbmdlUGF0aChwYXRobmFtZSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICBfZGlzcGF0Y2goYmFja0J1dHRvbkNsaWNrKHsgLi4uc3RhdGUsIGlzQmFjazogdHJ1ZSB9KSk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgeyBwcmV2aW91c1BhdGgsIHBhdGgsIGlzQmFjayB9ID0gbmV4dFByb3BzO1xuICAgIGxldCBtZXRob2QgPVxuICAgICAgIXByZXZpb3VzUGF0aCB8fCBpc0JhY2sgfHwgdGhpcy5pc1NhbWVVcmxQYXR0ZXJuKHByZXZpb3VzUGF0aCwgcGF0aClcbiAgICAgICAgPyBoaXN0b3J5LnJlcGxhY2VcbiAgICAgICAgOiBoaXN0b3J5LnB1c2hcblxuICAgIG1ldGhvZCh7IHByZXZpb3VzUGF0aCwgcGF0aCB9LCBudWxsLCBwYXRoKTtcbiAgfVxuXG4gIGlzU2FtZVVybFBhdHRlcm4ocDEsIHAyKSB7XG4gICAgaWYgKCFwMSB8fCAhcDIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHAxID09PSBwMjtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY2hhbmdlUGF0aCA9IHBhdGggPT4ge1xuICBfZGlzcGF0Y2goY2hhbmdlUGF0aEFjdGlvbihwYXRoKSk7XG59O1xuXG5sZXQgX2Rpc3BhdGNoO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLmhpc3RvcnlSb3V0ZXJcbiAgICB9O1xuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgX2Rpc3BhdGNoID0gZGlzcGF0Y2g7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4pKEhpc3RvcnlSb3V0ZXIpO1xuXG5leHBvcnQgeyBIaXN0b3J5Um91dGUsIExpbmssIGhpc3RvcnlSb3V0ZXIgfTtcbiJdfQ==