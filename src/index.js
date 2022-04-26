import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import {reducer} from './Redux/Reducer'

const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Suspense fallback={(<div className="text-center">Loading ...</div>)}>
        <Provider store={store}>
    <App />
    </Provider>
    </Suspense>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
