import React from 'react';
import ReactDOM from 'react-dom';
import Client from './store/client'
import  {ApolloProvider}  from '@apollo/client' 
import App from "./App";
import store from "./store/store"
import { Provider } from 'react-redux';

//create redux store
ReactDOM.render(
<Provider store={store}>
<ApolloProvider client={Client}>
<App/>
</ApolloProvider>
  </Provider>,
 document.getElementById('root'));
