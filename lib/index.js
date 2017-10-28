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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIaXN0b3J5Um91dGVyIiwibmV4dFByb3BzIiwid2luZG93IiwidW5kZWZpbmVkIiwicHJvcHMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY2hhbmdlUGF0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGF0ZSIsIl9kaXNwYXRjaCIsImlzQmFjayIsInByZXZpb3VzUGF0aCIsInBhdGgiLCJtZXRob2QiLCJpc1NhbWVVcmxQYXR0ZXJuIiwiaGlzdG9yeSIsInAxIiwicDIiLCJDb21wb25lbnQiLCJoaXN0b3J5Um91dGVyIiwiZGlzcGF0Y2giLCJIaXN0b3J5Um91dGUiLCJMaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLGE7Ozs7Ozs7Ozs7OzBDQUNrQkMsUyxFQUFXO0FBQy9CLGFBQU8sS0FBUDtBQUNEOzs7NkJBRVE7QUFDUCxhQUFPLElBQVA7QUFDRDs7O3dDQUVtQjtBQUFBLGlCQUNDQyxXQUFXQyxTQUFYLEdBQXVCLEtBQUtDLEtBQTVCLEdBQW9DQyxRQURyQztBQUFBLFVBQ1pDLFFBRFksUUFDWkEsUUFEWTs7QUFFbEJDLGlCQUFXRCxRQUFYOztBQUVBSixhQUFPTSxnQkFBUCxDQUF3QixVQUF4QixFQUFvQyxpQkFBZTtBQUFBLFlBQVpDLEtBQVksU0FBWkEsS0FBWTs7QUFDakRDLGtCQUFVLHlDQUFxQkQsS0FBckIsSUFBNEJFLFFBQVEsSUFBcEMsSUFBVjtBQUNELE9BRkQ7QUFHRDs7OzhDQUV5QlYsUyxFQUFXO0FBQUEsVUFDN0JXLFlBRDZCLEdBQ0VYLFNBREYsQ0FDN0JXLFlBRDZCO0FBQUEsVUFDZkMsSUFEZSxHQUNFWixTQURGLENBQ2ZZLElBRGU7QUFBQSxVQUNURixNQURTLEdBQ0VWLFNBREYsQ0FDVFUsTUFEUzs7QUFFbkMsVUFBSUcsU0FDRixDQUFDRixZQUFELElBQWlCRCxNQUFqQixJQUEyQixLQUFLSSxnQkFBTCxDQUFzQkgsWUFBdEIsRUFBb0NDLElBQXBDLENBQTNCLEdBQ0ksU0FESixHQUVJLE1BSE47O0FBS0FHLGNBQVFGLFNBQVMsT0FBakIsRUFBMEIsRUFBRUYsMEJBQUYsRUFBZ0JDLFVBQWhCLEVBQTFCLEVBQWtELElBQWxELEVBQXdEQSxJQUF4RDtBQUNEOzs7cUNBRWdCSSxFLEVBQUlDLEUsRUFBSTtBQUN2QixVQUFJLENBQUNELEVBQUQsSUFBTyxDQUFDQyxFQUFaLEVBQWdCO0FBQ2QsZUFBTyxLQUFQO0FBQ0Q7QUFDRCxhQUFPRCxPQUFPQyxFQUFkO0FBQ0Q7Ozs7RUFqQ3lCLGdCQUFNQyxTOztBQW9DM0IsSUFBTVosa0NBQWEsU0FBYkEsVUFBYSxPQUFRO0FBQ2hDRyxZQUFVLDZCQUFpQkcsSUFBakIsQ0FBVjtBQUNELENBRk07O0FBSVAsSUFBSUgsa0JBQUo7O2tCQUVlLHlCQUNiLGlCQUFTO0FBQ1Asc0JBQ0tELE1BQU1XLGFBRFg7QUFHRCxDQUxZLEVBTWIsb0JBQVk7QUFDVlYsY0FBWVcsUUFBWjtBQUNBLFNBQU8sRUFBUDtBQUNELENBVFksRUFVYnJCLGFBVmEsQztRQVlOc0IsWTtRQUFjQyxJO1FBQU1ILGEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNoYW5nZVBhdGhBY3Rpb24sIGJhY2tCdXR0b25DbGljaywgaGlzdG9yeVJvdXRlciB9IGZyb20gJy4vcmVkdXguanMnO1xuaW1wb3J0IEhpc3RvcnlSb3V0ZSBmcm9tICcuL0hpc3RvcnlSb3V0ZS5qcyc7XG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsuanMnO1xuXG5jbGFzcyBIaXN0b3J5Um91dGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxldCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cgPT09IHVuZGVmaW5lZCA/IHRoaXMucHJvcHMgOiBsb2NhdGlvbjtcbiAgICBjaGFuZ2VQYXRoKHBhdGhuYW1lKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICh7IHN0YXRlIH0pID0+IHtcbiAgICAgIF9kaXNwYXRjaChiYWNrQnV0dG9uQ2xpY2soeyAuLi5zdGF0ZSwgaXNCYWNrOiB0cnVlIH0pKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgbGV0IHsgcHJldmlvdXNQYXRoLCBwYXRoLCBpc0JhY2sgfSA9IG5leHRQcm9wcztcbiAgICBsZXQgbWV0aG9kID1cbiAgICAgICFwcmV2aW91c1BhdGggfHwgaXNCYWNrIHx8IHRoaXMuaXNTYW1lVXJsUGF0dGVybihwcmV2aW91c1BhdGgsIHBhdGgpXG4gICAgICAgID8gJ3JlcGxhY2UnXG4gICAgICAgIDogJ3B1c2gnO1xuXG4gICAgaGlzdG9yeVttZXRob2QgKyAnU3RhdGUnXSh7IHByZXZpb3VzUGF0aCwgcGF0aCB9LCBudWxsLCBwYXRoKTtcbiAgfVxuXG4gIGlzU2FtZVVybFBhdHRlcm4ocDEsIHAyKSB7XG4gICAgaWYgKCFwMSB8fCAhcDIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHAxID09PSBwMjtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY2hhbmdlUGF0aCA9IHBhdGggPT4ge1xuICBfZGlzcGF0Y2goY2hhbmdlUGF0aEFjdGlvbihwYXRoKSk7XG59O1xuXG5sZXQgX2Rpc3BhdGNoO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLmhpc3RvcnlSb3V0ZXJcbiAgICB9O1xuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgX2Rpc3BhdGNoID0gZGlzcGF0Y2g7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4pKEhpc3RvcnlSb3V0ZXIpO1xuXG5leHBvcnQgeyBIaXN0b3J5Um91dGUsIExpbmssIGhpc3RvcnlSb3V0ZXIgfTtcbiJdfQ==