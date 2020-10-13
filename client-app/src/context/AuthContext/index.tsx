import getActions from "context/AuthContext/actions";
import reducer from "context/AuthContext/reducer";
import * as React from "react";

type Context = {
  user: any;
  isAuthenticated: Boolean;
  setAuthUser: (payload: any) => void;
  logout: (payload: any) => void;
  setJWTToken: (payload: any) => void;
};

const initialContext = {
  user: null,
  isAuthenticated: false,
  setAuthUser: () => {},
  logout: () => {},
  setJWTToken: () => {},
};

const AuthContext = React.createContext<Context>(initialContext);

type Props = {
  children: React.ReactNode;
};
const AuthContextProvider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initialContext);
  const actions = getActions(dispatch);
  const setJWTToken = (jwt: string) => {
    localStorage.setItem("jwt", jwt);
  };
  const value = {
    ...state,
    ...actions,
    setJWTToken,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useIdentity = () => {
  return React.useContext<Context>(AuthContext);
};

export { AuthContext, AuthContextProvider };
