'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _index = require('./index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(_ref) {
  var to = _ref.to,
      children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    'a',
    {
      className: className,
      href: 'javascript:void(0)',
      onClick: function onClick() {
        (0, _index.changePath)(to);
      }
    },
    children
  );
};

exports.default = Link;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MaW5rLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJ0byIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsRUFBSCxRQUFHQSxFQUFIO0FBQUEsTUFBT0MsUUFBUCxRQUFPQSxRQUFQO0FBQUEsTUFBaUJDLFNBQWpCLFFBQWlCQSxTQUFqQjtBQUFBLFNBQ1g7QUFBQTtBQUFBO0FBQ0UsaUJBQVdBLFNBRGI7QUFFRSxZQUFLLG9CQUZQO0FBR0UsZUFBUyxtQkFBTTtBQUNiLCtCQUFXRixFQUFYO0FBQ0Q7QUFMSDtBQU9HQztBQVBILEdBRFc7QUFBQSxDQUFiOztrQkFZZUYsSSIsImZpbGUiOiJMaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjaGFuZ2VQYXRoIH0gZnJvbSAnLi9pbmRleC5qcyc7XG5cbmNvbnN0IExpbmsgPSAoeyB0bywgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiAoXG4gIDxhXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiXG4gICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgY2hhbmdlUGF0aCh0byk7XG4gICAgfX1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9hPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGluaztcbiJdfQ==