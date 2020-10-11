import { SET_AUTH_USER, LOGOUT } from "./actions";

export const initialState = {
  user: null,
  isAuthenticated: false,
};

type ActionType = {
  type: string;
  payload: any;
};

export default (state = initialState, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case SET_AUTH_USER:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
