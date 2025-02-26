import { UserActionTypes } from './action-types';

const initialState = {
  currentUser: null,
};

interface IuserItem {
  id: string;
  url: string;
  dtCriacao: string;
  titulo: string;
  urlEncurtada: string;
  qtdCliques: number;
}
interface ICurrentUser {
  userId: string;
  name: string;
  image: string;
  items: IuserItem[];
}
interface Action {
  type: string;
  payload: ICurrentUser | null;
}

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return {
        ...state,
        currentUser: action.payload,
      };

    case UserActionTypes.LOGOUT:
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
};

export default userReducer;
