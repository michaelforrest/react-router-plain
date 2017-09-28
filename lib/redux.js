'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ADD_PATH = 'ADD_PATH';
var BACK_BUTTON_CLICK = 'BACK_BUTTON_CLICK';

var historyRouter = exports.historyRouter = function historyRouter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case ADD_PATH:
      return _extends({}, state, {
        isBack: false,
        previousPath: state.path || '',
        path: action.path
      });
    case BACK_BUTTON_CLICK:
      return _extends({}, state, {
        previousPath: action.previousPath,
        path: action.path,
        isBack: action.isBack
      });
  }
  return state;
};

var changePathAction = exports.changePathAction = function changePathAction(path) {
  return {
    type: ADD_PATH,
    path: path
  };
};

var backButtonClick = exports.backButtonClick = function backButtonClick(routeState) {
  return _extends({
    type: BACK_BUTTON_CLICK
  }, routeState);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWR1eC5qcyJdLCJuYW1lcyI6WyJBRERfUEFUSCIsIkJBQ0tfQlVUVE9OX0NMSUNLIiwiaGlzdG9yeVJvdXRlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImlzQmFjayIsInByZXZpb3VzUGF0aCIsInBhdGgiLCJjaGFuZ2VQYXRoQWN0aW9uIiwiYmFja0J1dHRvbkNsaWNrIiwicm91dGVTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNQSxXQUFXLFVBQWpCO0FBQ0EsSUFBTUMsb0JBQW9CLG1CQUExQjs7QUFFTyxJQUFNQyx3Q0FBZ0IsU0FBaEJBLGFBQWdCLEdBQXdCO0FBQUEsTUFBdkJDLEtBQXVCLHVFQUFmLEVBQWU7QUFBQSxNQUFYQyxNQUFXOztBQUNuRCxVQUFRQSxPQUFPQyxJQUFmO0FBQ0UsU0FBS0wsUUFBTDtBQUNFLDBCQUNLRyxLQURMO0FBRUVHLGdCQUFRLEtBRlY7QUFHRUMsc0JBQWNKLE1BQU1LLElBQU4sSUFBYyxFQUg5QjtBQUlFQSxjQUFNSixPQUFPSTtBQUpmO0FBTUYsU0FBS1AsaUJBQUw7QUFDRSwwQkFDS0UsS0FETDtBQUVFSSxzQkFBY0gsT0FBT0csWUFGdkI7QUFHRUMsY0FBTUosT0FBT0ksSUFIZjtBQUlFRixnQkFBUUYsT0FBT0U7QUFKakI7QUFUSjtBQWdCQSxTQUFPSCxLQUFQO0FBQ0QsQ0FsQk07O0FBb0JBLElBQU1NLDhDQUFtQixTQUFuQkEsZ0JBQW1CLE9BQVE7QUFDdEMsU0FBTztBQUNMSixVQUFNTCxRQUREO0FBRUxRO0FBRkssR0FBUDtBQUlELENBTE07O0FBT0EsSUFBTUUsNENBQWtCLFNBQWxCQSxlQUFrQixhQUFjO0FBQzNDO0FBQ0VMLFVBQU1KO0FBRFIsS0FFS1UsVUFGTDtBQUlELENBTE0iLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBRERfUEFUSCA9ICdBRERfUEFUSCc7XG5jb25zdCBCQUNLX0JVVFRPTl9DTElDSyA9ICdCQUNLX0JVVFRPTl9DTElDSyc7XG5cbmV4cG9ydCBjb25zdCBoaXN0b3J5Um91dGVyID0gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfUEFUSDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0JhY2s6IGZhbHNlLFxuICAgICAgICBwcmV2aW91c1BhdGg6IHN0YXRlLnBhdGggfHwgJycsXG4gICAgICAgIHBhdGg6IGFjdGlvbi5wYXRoXG4gICAgICB9O1xuICAgIGNhc2UgQkFDS19CVVRUT05fQ0xJQ0s6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJldmlvdXNQYXRoOiBhY3Rpb24ucHJldmlvdXNQYXRoLFxuICAgICAgICBwYXRoOiBhY3Rpb24ucGF0aCxcbiAgICAgICAgaXNCYWNrOiBhY3Rpb24uaXNCYWNrXG4gICAgICB9O1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VQYXRoQWN0aW9uID0gcGF0aCA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUREX1BBVEgsXG4gICAgcGF0aFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGJhY2tCdXR0b25DbGljayA9IHJvdXRlU3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEJBQ0tfQlVUVE9OX0NMSUNLLFxuICAgIC4uLnJvdXRlU3RhdGVcbiAgfTtcbn07XG4iXX0=