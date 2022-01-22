import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { Provider } from 'mobx-react';
import { setContext } from '@apollo/client/link/context';
import App from './App';
import RootStore from './stores/root.store';
import { accessTokenFunction } from './libs';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
  const accessToken = accessTokenFunction.getAccessToken();
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `bearer ${accessToken}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
const rootStore = new RootStore();

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider {...rootStore}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
