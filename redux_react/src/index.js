import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux"; // 제공

import './index.css';
import App from './App';
import store from './store/index' // 리덕스 저장소

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <App />
</Provider>);
