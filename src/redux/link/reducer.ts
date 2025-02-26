import { LinkActionTypes } from './action-types';

const initialState = {
  selectedLink: null,
};

interface Action {
  type: string;
  payload: boolean;
}

const linkReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LinkActionTypes.SELECTED_LINK:
      return { ...state, selectedLink: action.payload };
    default:
      return state;
  }
};

export default linkReducer;
