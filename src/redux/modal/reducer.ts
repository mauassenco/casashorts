import { ModalActionTypes } from '../modal/action-types';

interface Action {
  type: string;
  payload: boolean;
}

const initialState = {
  modalState: false,
};

const modalReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ModalActionTypes.OPEN:
      return {
        ...state,
        modalState: true,
      };

    case ModalActionTypes.CLOSE:
      return {
        ...state,
        modalState: false,
      };

    default:
      return state;
  }
};

export default modalReducer;
