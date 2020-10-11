import * as React from "react";

export default function createCtx<T>(initialContext: T) {
  const ctx = React.createContext<T>(initialContext);
  function useCtx() {
    const c = React.useContext(ctx);
    if (!c) throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider];
}
