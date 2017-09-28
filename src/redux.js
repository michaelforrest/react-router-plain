const ADD_PATH = 'ADD_PATH';
const BACK_BUTTON_CLICK = 'BACK_BUTTON_CLICK';

export const historyRouter = (state = {}, action) => {
  switch (action.type) {
    case ADD_PATH:
      return {
        ...state,
        isBack: false,
        previousPath: state.path || '',
        path: action.path
      };
    case BACK_BUTTON_CLICK:
      return {
        ...state,
        previousPath: action.previousPath,
        path: action.path,
        isBack: action.isBack
      };
  }
  return state;
};

export const changePathAction = path => {
  return {
    type: ADD_PATH,
    path
  };
};

export const backButtonClick = routeState => {
  return {
    type: BACK_BUTTON_CLICK,
    ...routeState
  };
};
