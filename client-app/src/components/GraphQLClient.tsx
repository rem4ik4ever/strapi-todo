import * as React from 'react';
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'http://localhost:1337/graphql'
});

type ClientAppProps = {
  children: React.ReactNode
}

const ClientApp = ({children}:ClientAppProps) => <Provider value={client}>{children}</Provider>;

export default ClientApp;
