export const SET_AUTH_USER = "SET_AUTH_USER";
export const GET_AUTH_USER = "GET_AUTH_USER";
export const LOGOUT = "LOGOUT";

export default function getActions(dispatch: Function) {
  const setAuthUser = (payload: any) => {
    dispatch({ type: SET_AUTH_USER, payload });
  };

  const logout = (payload: any) => {
    dispatch({ type: LOGOUT, payload });
  };

  return {
    setAuthUser,
    logout,
  };
}
