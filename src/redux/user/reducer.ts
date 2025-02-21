const initialState = {
  currentUser: true,
};

interface Action {
  type: string;
  payload: string | boolean;
}
const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
