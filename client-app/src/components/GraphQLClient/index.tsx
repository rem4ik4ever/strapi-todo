import * as React from "react";
import {
  cacheExchange,
  createClient,
  dedupExchange,
  errorExchange,
  fetchExchange,
  Provider,
} from "urql";
import { authExchange } from "@urql/exchange-auth";
import { addAuthToOperation, getAuth, didAuthError } from "./authConfig";

const client = createClient({
  url: "http://localhost:1337/graphql",
  exchanges: [
    dedupExchange,
    cacheExchange,
    errorExchange({
      onError: (error) => {
        const isAuthError = error.graphQLErrors.some(
          (e) => e.extensions?.code === "FORBIDDEN"
        );
        if (isAuthError) {
          console.log("Auth failed redirect to LOGIN");
          // logout();
        }
      },
    }),
    authExchange({
      addAuthToOperation,
      getAuth,
      didAuthError,
    }),
    fetchExchange,
  ],
});

type ClientAppProps = {
  children: React.ReactNode;
};

const ClientApp = ({ children }: ClientAppProps) => (
  <Provider value={client}>{children}</Provider>
);

export default ClientApp;
