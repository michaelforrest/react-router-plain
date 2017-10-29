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
      var _ref = window === undefined ? this.props : location,
          pathname = _ref.pathname;

      changePath(pathname);

      window.addEventListener('popstate', function (_ref2) {
        var state = _ref2.state;

        _dispatch((0, _redux.backButtonClick)(_extends({}, state, { isBack: true })));
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var previousPath = nextProps.previousPath,
          path = nextProps.path,
          isBack = nextProps.isBack;

      var method = !previousPath || isBack || this.isSameUrlPattern(previousPath, path) ? 'replace' : 'push';

      history[method + 'State']({ previousPath: previousPath, path: path }, null, path);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIaXN0b3J5Um91dGVyIiwibmV4dFByb3BzIiwid2luZG93IiwidW5kZWZpbmVkIiwicHJvcHMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY2hhbmdlUGF0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGF0ZSIsIl9kaXNwYXRjaCIsImlzQmFjayIsInByZXZpb3VzUGF0aCIsInBhdGgiLCJtZXRob2QiLCJpc1NhbWVVcmxQYXR0ZXJuIiwiaGlzdG9yeSIsInAxIiwicDIiLCJDb21wb25lbnQiLCJoaXN0b3J5Um91dGVyIiwiZGlzcGF0Y2giLCJIaXN0b3J5Um91dGUiLCJMaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLGE7Ozs7Ozs7Ozs7OzBDQUNrQkMsUyxFQUFXO0FBQy9CLGFBQU8sS0FBUDtBQUNEOzs7NkJBRVE7QUFDUCxhQUFPLElBQVA7QUFDRDs7O3lDQUVvQjtBQUFBLGlCQUNBQyxXQUFXQyxTQUFYLEdBQXVCLEtBQUtDLEtBQTVCLEdBQW9DQyxRQURwQztBQUFBLFVBQ2JDLFFBRGEsUUFDYkEsUUFEYTs7QUFFbkJDLGlCQUFXRCxRQUFYOztBQUVBSixhQUFPTSxnQkFBUCxDQUF3QixVQUF4QixFQUFvQyxpQkFBZTtBQUFBLFlBQVpDLEtBQVksU0FBWkEsS0FBWTs7QUFDakRDLGtCQUFVLHlDQUFxQkQsS0FBckIsSUFBNEJFLFFBQVEsSUFBcEMsSUFBVjtBQUNELE9BRkQ7QUFHRDs7OzhDQUV5QlYsUyxFQUFXO0FBQUEsVUFDN0JXLFlBRDZCLEdBQ0VYLFNBREYsQ0FDN0JXLFlBRDZCO0FBQUEsVUFDZkMsSUFEZSxHQUNFWixTQURGLENBQ2ZZLElBRGU7QUFBQSxVQUNURixNQURTLEdBQ0VWLFNBREYsQ0FDVFUsTUFEUzs7QUFFbkMsVUFBSUcsU0FDRixDQUFDRixZQUFELElBQWlCRCxNQUFqQixJQUEyQixLQUFLSSxnQkFBTCxDQUFzQkgsWUFBdEIsRUFBb0NDLElBQXBDLENBQTNCLEdBQ0ksU0FESixHQUVJLE1BSE47O0FBS0FHLGNBQVFGLFNBQVMsT0FBakIsRUFBMEIsRUFBRUYsMEJBQUYsRUFBZ0JDLFVBQWhCLEVBQTFCLEVBQWtELElBQWxELEVBQXdEQSxJQUF4RDtBQUNEOzs7cUNBRWdCSSxFLEVBQUlDLEUsRUFBSTtBQUN2QixVQUFJLENBQUNELEVBQUQsSUFBTyxDQUFDQyxFQUFaLEVBQWdCO0FBQ2QsZUFBTyxLQUFQO0FBQ0Q7QUFDRCxhQUFPRCxPQUFPQyxFQUFkO0FBQ0Q7Ozs7RUFqQ3lCLGdCQUFNQyxTOztBQW9DM0IsSUFBTVosa0NBQWEsU0FBYkEsVUFBYSxPQUFRO0FBQ2hDRyxZQUFVLDZCQUFpQkcsSUFBakIsQ0FBVjtBQUNELENBRk07O0FBSVAsSUFBSUgsa0JBQUo7O2tCQUVlLHlCQUNiLGlCQUFTO0FBQ1Asc0JBQ0tELE1BQU1XLGFBRFg7QUFHRCxDQUxZLEVBTWIsb0JBQVk7QUFDVlYsY0FBWVcsUUFBWjtBQUNBLFNBQU8sRUFBUDtBQUNELENBVFksRUFVYnJCLGFBVmEsQztRQVlOc0IsWTtRQUFjQyxJO1FBQU1ILGEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNoYW5nZVBhdGhBY3Rpb24sIGJhY2tCdXR0b25DbGljaywgaGlzdG9yeVJvdXRlciB9IGZyb20gJy4vcmVkdXguanMnO1xuaW1wb3J0IEhpc3RvcnlSb3V0ZSBmcm9tICcuL0hpc3RvcnlSb3V0ZS5qcyc7XG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsuanMnO1xuXG5jbGFzcyBIaXN0b3J5Um91dGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gd2luZG93ID09PSB1bmRlZmluZWQgPyB0aGlzLnByb3BzIDogbG9jYXRpb247XG4gICAgY2hhbmdlUGF0aChwYXRobmFtZSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICBfZGlzcGF0Y2goYmFja0J1dHRvbkNsaWNrKHsgLi4uc3RhdGUsIGlzQmFjazogdHJ1ZSB9KSk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGxldCB7IHByZXZpb3VzUGF0aCwgcGF0aCwgaXNCYWNrIH0gPSBuZXh0UHJvcHM7XG4gICAgbGV0IG1ldGhvZCA9XG4gICAgICAhcHJldmlvdXNQYXRoIHx8IGlzQmFjayB8fCB0aGlzLmlzU2FtZVVybFBhdHRlcm4ocHJldmlvdXNQYXRoLCBwYXRoKVxuICAgICAgICA/ICdyZXBsYWNlJ1xuICAgICAgICA6ICdwdXNoJztcblxuICAgIGhpc3RvcnlbbWV0aG9kICsgJ1N0YXRlJ10oeyBwcmV2aW91c1BhdGgsIHBhdGggfSwgbnVsbCwgcGF0aCk7XG4gIH1cblxuICBpc1NhbWVVcmxQYXR0ZXJuKHAxLCBwMikge1xuICAgIGlmICghcDEgfHwgIXAyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBwMSA9PT0gcDI7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNoYW5nZVBhdGggPSBwYXRoID0+IHtcbiAgX2Rpc3BhdGNoKGNoYW5nZVBhdGhBY3Rpb24ocGF0aCkpO1xufTtcblxubGV0IF9kaXNwYXRjaDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZS5oaXN0b3J5Um91dGVyXG4gICAgfTtcbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIF9kaXNwYXRjaCA9IGRpc3BhdGNoO1xuICAgIHJldHVybiB7fTtcbiAgfVxuKShIaXN0b3J5Um91dGVyKTtcblxuZXhwb3J0IHsgSGlzdG9yeVJvdXRlLCBMaW5rLCBoaXN0b3J5Um91dGVyIH07XG4iXX0=