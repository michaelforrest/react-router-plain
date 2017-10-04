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
    key: 'makeRelativePath',
    value: function makeRelativePath(previousPath, path) {
      if (path.charAt(0) !== '/') {
        var prefix = previousPath;
        if (prefix.charAt(prefix.length - 1) !== '/') {
          prefix = prefix + '/';
        }
        path = prefix + path;
      }

      return path;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var previousPath = nextProps.previousPath,
          path = nextProps.path,
          isBack = nextProps.isBack;

      var method = !previousPath || isBack || this.isSameUrlPattern(previousPath, path) ? 'replace' : 'push';

      path = this.makeRelativePath(previousPath, path);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIaXN0b3J5Um91dGVyIiwibmV4dFByb3BzIiwiY2hhbmdlUGF0aCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic3RhdGUiLCJfZGlzcGF0Y2giLCJpc0JhY2siLCJwcmV2aW91c1BhdGgiLCJwYXRoIiwiY2hhckF0IiwicHJlZml4IiwibGVuZ3RoIiwibWV0aG9kIiwiaXNTYW1lVXJsUGF0dGVybiIsIm1ha2VSZWxhdGl2ZVBhdGgiLCJoaXN0b3J5IiwicDEiLCJwMiIsIkNvbXBvbmVudCIsImhpc3RvcnlSb3V0ZXIiLCJkaXNwYXRjaCIsIkhpc3RvcnlSb3V0ZSIsIkxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsYTs7Ozs7Ozs7Ozs7MENBQ2tCQyxTLEVBQVc7QUFDL0IsYUFBTyxLQUFQO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQU8sSUFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCQyxpQkFBV0MsU0FBU0MsUUFBcEI7O0FBRUFDLGFBQU9DLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9DLGdCQUFlO0FBQUEsWUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUNqREMsa0JBQVUseUNBQXFCRCxLQUFyQixJQUE0QkUsUUFBUSxJQUFwQyxJQUFWO0FBQ0QsT0FGRDtBQUdEOzs7cUNBRWdCQyxZLEVBQWNDLEksRUFBTTtBQUNuQyxVQUFJQSxLQUFLQyxNQUFMLENBQVksQ0FBWixNQUFtQixHQUF2QixFQUE0QjtBQUMxQixZQUFJQyxTQUFTSCxZQUFiO0FBQ0EsWUFBSUcsT0FBT0QsTUFBUCxDQUFjQyxPQUFPQyxNQUFQLEdBQWdCLENBQTlCLE1BQXFDLEdBQXpDLEVBQThDO0FBQzVDRCxtQkFBU0EsU0FBUyxHQUFsQjtBQUNEO0FBQ0RGLGVBQU9FLFNBQVNGLElBQWhCO0FBQ0Q7O0FBRUQsYUFBT0EsSUFBUDtBQUNEOzs7OENBRXlCVixTLEVBQVc7QUFBQSxVQUM3QlMsWUFENkIsR0FDRVQsU0FERixDQUM3QlMsWUFENkI7QUFBQSxVQUNmQyxJQURlLEdBQ0VWLFNBREYsQ0FDZlUsSUFEZTtBQUFBLFVBQ1RGLE1BRFMsR0FDRVIsU0FERixDQUNUUSxNQURTOztBQUVuQyxVQUFJTSxTQUNGLENBQUNMLFlBQUQsSUFBaUJELE1BQWpCLElBQTJCLEtBQUtPLGdCQUFMLENBQXNCTixZQUF0QixFQUFvQ0MsSUFBcEMsQ0FBM0IsR0FDSSxTQURKLEdBRUksTUFITjs7QUFLQUEsYUFBTyxLQUFLTSxnQkFBTCxDQUFzQlAsWUFBdEIsRUFBb0NDLElBQXBDLENBQVA7QUFDQU8sY0FBUUgsU0FBUyxPQUFqQixFQUEwQixFQUFFTCwwQkFBRixFQUFnQkMsVUFBaEIsRUFBMUIsRUFBa0QsSUFBbEQsRUFBd0RBLElBQXhEO0FBQ0Q7OztxQ0FFZ0JRLEUsRUFBSUMsRSxFQUFJO0FBQ3ZCLFVBQUksQ0FBQ0QsRUFBRCxJQUFPLENBQUNDLEVBQVosRUFBZ0I7QUFDZCxlQUFPLEtBQVA7QUFDRDtBQUNELGFBQU9ELE9BQU9DLEVBQWQ7QUFDQTtBQUNEOzs7O0VBOUN5QixnQkFBTUMsUzs7QUFpRDNCLElBQU1uQixrQ0FBYSxTQUFiQSxVQUFhLE9BQVE7QUFDaENNLFlBQVUsNkJBQWlCRyxJQUFqQixDQUFWO0FBQ0QsQ0FGTTs7QUFJUCxJQUFJSCxrQkFBSjs7a0JBRWUseUJBQ2IsaUJBQVM7QUFDUCxzQkFDS0QsTUFBTWUsYUFEWDtBQUdELENBTFksRUFNYixvQkFBWTtBQUNWZCxjQUFZZSxRQUFaO0FBQ0EsU0FBTyxFQUFQO0FBQ0QsQ0FUWSxFQVVidkIsYUFWYSxDO1FBWU53QixZO1FBQWNDLEk7UUFBTUgsYSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY2hhbmdlUGF0aEFjdGlvbiwgYmFja0J1dHRvbkNsaWNrLCBoaXN0b3J5Um91dGVyIH0gZnJvbSAnLi9yZWR1eC5qcyc7XG5pbXBvcnQgSGlzdG9yeVJvdXRlIGZyb20gJy4vSGlzdG9yeVJvdXRlLmpzJztcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluay5qcyc7XG5cbmNsYXNzIEhpc3RvcnlSb3V0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY2hhbmdlUGF0aChsb2NhdGlvbi5wYXRobmFtZSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICBfZGlzcGF0Y2goYmFja0J1dHRvbkNsaWNrKHsgLi4uc3RhdGUsIGlzQmFjazogdHJ1ZSB9KSk7XG4gICAgfSk7XG4gIH1cblxuICBtYWtlUmVsYXRpdmVQYXRoKHByZXZpb3VzUGF0aCwgcGF0aCkge1xuICAgIGlmIChwYXRoLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICBsZXQgcHJlZml4ID0gcHJldmlvdXNQYXRoO1xuICAgICAgaWYgKHByZWZpeC5jaGFyQXQocHJlZml4Lmxlbmd0aCAtIDEpICE9PSAnLycpIHtcbiAgICAgICAgcHJlZml4ID0gcHJlZml4ICsgJy8nO1xuICAgICAgfVxuICAgICAgcGF0aCA9IHByZWZpeCArIHBhdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGxldCB7IHByZXZpb3VzUGF0aCwgcGF0aCwgaXNCYWNrIH0gPSBuZXh0UHJvcHM7XG4gICAgbGV0IG1ldGhvZCA9XG4gICAgICAhcHJldmlvdXNQYXRoIHx8IGlzQmFjayB8fCB0aGlzLmlzU2FtZVVybFBhdHRlcm4ocHJldmlvdXNQYXRoLCBwYXRoKVxuICAgICAgICA/ICdyZXBsYWNlJ1xuICAgICAgICA6ICdwdXNoJztcblxuICAgIHBhdGggPSB0aGlzLm1ha2VSZWxhdGl2ZVBhdGgocHJldmlvdXNQYXRoLCBwYXRoKTtcbiAgICBoaXN0b3J5W21ldGhvZCArICdTdGF0ZSddKHsgcHJldmlvdXNQYXRoLCBwYXRoIH0sIG51bGwsIHBhdGgpO1xuICB9XG5cbiAgaXNTYW1lVXJsUGF0dGVybihwMSwgcDIpIHtcbiAgICBpZiAoIXAxIHx8ICFwMikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcDEgPT09IHAyO1xuICAgIC8vcmV0dXJuIHAxLnNwbGl0KCcvJylbMV0gPT09IHAyLnNwbGl0KCcvJylbMV07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNoYW5nZVBhdGggPSBwYXRoID0+IHtcbiAgX2Rpc3BhdGNoKGNoYW5nZVBhdGhBY3Rpb24ocGF0aCkpO1xufTtcblxubGV0IF9kaXNwYXRjaDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZS5oaXN0b3J5Um91dGVyXG4gICAgfTtcbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIF9kaXNwYXRjaCA9IGRpc3BhdGNoO1xuICAgIHJldHVybiB7fTtcbiAgfVxuKShIaXN0b3J5Um91dGVyKTtcblxuZXhwb3J0IHsgSGlzdG9yeVJvdXRlLCBMaW5rLCBoaXN0b3J5Um91dGVyIH07XG4iXX0=