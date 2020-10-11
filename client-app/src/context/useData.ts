import React from "react";

const defaultActions = (dispatch: Function) => [];

export default function (
  reducer: any,
  initialState: Object,
  getActions: Function = defaultActions
) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const actions = getActions(dispatch);
  return {
    state,
    ...actions,
  };
}
