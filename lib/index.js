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
    key: 'componentDidMount',
    value: function componentDidMount() {
      changePath(location.pathname);

      window.addEventListener('popstate', function (_ref) {
        var state = _ref.state;

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
      //return p1.split('/')[1] === p2.split('/')[1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIaXN0b3J5Um91dGVyIiwibmV4dFByb3BzIiwiY2hhbmdlUGF0aCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic3RhdGUiLCJfZGlzcGF0Y2giLCJpc0JhY2siLCJwcmV2aW91c1BhdGgiLCJwYXRoIiwibWV0aG9kIiwiaXNTYW1lVXJsUGF0dGVybiIsImhpc3RvcnkiLCJwMSIsInAyIiwiQ29tcG9uZW50IiwiaGlzdG9yeVJvdXRlciIsImRpc3BhdGNoIiwiSGlzdG9yeVJvdXRlIiwiTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7Ozs7Ozs7OzswQ0FDa0JDLFMsRUFBVztBQUMvQixhQUFPLEtBQVA7QUFDRDs7OzZCQUVRO0FBQ1AsYUFBTyxJQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEJDLGlCQUFXQyxTQUFTQyxRQUFwQjs7QUFFQUMsYUFBT0MsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0MsZ0JBQWU7QUFBQSxZQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQ2pEQyxrQkFBVSx5Q0FBcUJELEtBQXJCLElBQTRCRSxRQUFRLElBQXBDLElBQVY7QUFDRCxPQUZEO0FBR0Q7Ozs4Q0FFeUJSLFMsRUFBVztBQUFBLFVBQzdCUyxZQUQ2QixHQUNFVCxTQURGLENBQzdCUyxZQUQ2QjtBQUFBLFVBQ2ZDLElBRGUsR0FDRVYsU0FERixDQUNmVSxJQURlO0FBQUEsVUFDVEYsTUFEUyxHQUNFUixTQURGLENBQ1RRLE1BRFM7O0FBRW5DLFVBQUlHLFNBQ0YsQ0FBQ0YsWUFBRCxJQUFpQkQsTUFBakIsSUFBMkIsS0FBS0ksZ0JBQUwsQ0FBc0JILFlBQXRCLEVBQW9DQyxJQUFwQyxDQUEzQixHQUNJLFNBREosR0FFSSxNQUhOOztBQUtBRyxjQUFRRixTQUFTLE9BQWpCLEVBQTBCLEVBQUVGLDBCQUFGLEVBQWdCQyxVQUFoQixFQUExQixFQUFrRCxJQUFsRCxFQUF3REEsSUFBeEQ7QUFDRDs7O3FDQUVnQkksRSxFQUFJQyxFLEVBQUk7QUFDdkIsVUFBSSxDQUFDRCxFQUFELElBQU8sQ0FBQ0MsRUFBWixFQUFnQjtBQUNkLGVBQU8sS0FBUDtBQUNEO0FBQ0QsYUFBT0QsT0FBT0MsRUFBZDtBQUNBO0FBQ0Q7Ozs7RUFqQ3lCLGdCQUFNQyxTOztBQW9DM0IsSUFBTWYsa0NBQWEsU0FBYkEsVUFBYSxPQUFRO0FBQ2hDTSxZQUFVLDZCQUFpQkcsSUFBakIsQ0FBVjtBQUNELENBRk07O0FBSVAsSUFBSUgsa0JBQUo7O2tCQUVlLHlCQUNiLGlCQUFTO0FBQ1Asc0JBQ0tELE1BQU1XLGFBRFg7QUFHRCxDQUxZLEVBTWIsb0JBQVk7QUFDVlYsY0FBWVcsUUFBWjtBQUNBLFNBQU8sRUFBUDtBQUNELENBVFksRUFVYm5CLGFBVmEsQztRQVlOb0IsWTtRQUFjQyxJO1FBQU1ILGEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNoYW5nZVBhdGhBY3Rpb24sIGJhY2tCdXR0b25DbGljaywgaGlzdG9yeVJvdXRlciB9IGZyb20gJy4vcmVkdXguanMnO1xuaW1wb3J0IEhpc3RvcnlSb3V0ZSBmcm9tICcuL0hpc3RvcnlSb3V0ZS5qcyc7XG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsuanMnO1xuXG5jbGFzcyBIaXN0b3J5Um91dGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNoYW5nZVBhdGgobG9jYXRpb24ucGF0aG5hbWUpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKHsgc3RhdGUgfSkgPT4ge1xuICAgICAgX2Rpc3BhdGNoKGJhY2tCdXR0b25DbGljayh7IC4uLnN0YXRlLCBpc0JhY2s6IHRydWUgfSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBsZXQgeyBwcmV2aW91c1BhdGgsIHBhdGgsIGlzQmFjayB9ID0gbmV4dFByb3BzO1xuICAgIGxldCBtZXRob2QgPVxuICAgICAgIXByZXZpb3VzUGF0aCB8fCBpc0JhY2sgfHwgdGhpcy5pc1NhbWVVcmxQYXR0ZXJuKHByZXZpb3VzUGF0aCwgcGF0aClcbiAgICAgICAgPyAncmVwbGFjZSdcbiAgICAgICAgOiAncHVzaCc7XG5cbiAgICBoaXN0b3J5W21ldGhvZCArICdTdGF0ZSddKHsgcHJldmlvdXNQYXRoLCBwYXRoIH0sIG51bGwsIHBhdGgpO1xuICB9XG5cbiAgaXNTYW1lVXJsUGF0dGVybihwMSwgcDIpIHtcbiAgICBpZiAoIXAxIHx8ICFwMikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcDEgPT09IHAyO1xuICAgIC8vcmV0dXJuIHAxLnNwbGl0KCcvJylbMV0gPT09IHAyLnNwbGl0KCcvJylbMV07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNoYW5nZVBhdGggPSBwYXRoID0+IHtcbiAgX2Rpc3BhdGNoKGNoYW5nZVBhdGhBY3Rpb24ocGF0aCkpO1xufTtcblxubGV0IF9kaXNwYXRjaDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZS5oaXN0b3J5Um91dGVyXG4gICAgfTtcbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIF9kaXNwYXRjaCA9IGRpc3BhdGNoO1xuICAgIHJldHVybiB7fTtcbiAgfVxuKShIaXN0b3J5Um91dGVyKTtcblxuZXhwb3J0IHsgSGlzdG9yeVJvdXRlLCBMaW5rLCBoaXN0b3J5Um91dGVyIH07XG4iXX0=