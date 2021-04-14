import React from 'react';
import ReactDOM from 'react-dom';
// React Query
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.scss';
import './reset.scss';
import App from './App'
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient()   // Create a client

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();