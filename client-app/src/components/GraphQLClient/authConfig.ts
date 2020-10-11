type getAuthProps = {
  authState: any;
};
export const getAuth = async ({ authState }: getAuthProps) => {
  if (!authState) {
    const token = localStorage.getItem("jwt");
    // const refreshToken = localStorage.getItem("refreshToken");
    if (token) {
      return { token };
    }
    return null;
  }
  localStorage.removeItem("jwt");
  return null;
};

type AddAuthToOperationProps = {
  authState: any;
  operation: any;
};
export const addAuthToOperation = ({
  authState,
  operation,
}: AddAuthToOperationProps) => {
  if (!authState || !authState.token) {
    return operation;
  }
  const fetchOptions =
    typeof operation.context.fetchOptions === "function"
      ? operation.context.fetchOptions()
      : operation.context.fetchOptions || {};
  return {
    ...operation,
    context: {
      ...operation.context,
      fetchOptions: {
        ...fetchOptions,
        headers: {
          ...fetchOptions.headers,
          Authorization: `Bearer ${authState.token}`,
        },
      },
    },
  };
};

type DidAuthErrorProps = {
  error: any;
};
export const didAuthError = ({ error }: DidAuthErrorProps) => {
  return error.graphQLErrors.some((e: any) => {
    console.log("AU", e);
    return e.message.includes("Forbidden");
  });
};
