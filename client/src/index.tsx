import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SocketProvider from './context/socket.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <SocketProvider>
    <App />
  </SocketProvider>
);
