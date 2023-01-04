import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
<Provider store={store}>
  root.render(<App />);
</Provider>
