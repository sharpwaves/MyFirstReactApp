import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AmitView from './Components/AmitView';
import AmitListView from './Components/AmitListView';
import WeatherView from './Components/Weather/WeatherView';

const posts = 
[
  {id:100, title:"hello world", content:"welcome to hello"},
  {id:200, title:"installation", content:"you can install from npm"},
]
ReactDOM.render(
  <React.StrictMode>
    <WeatherView />
    <hr/>
    <AmitListView posts={posts} />
    <AmitView />
    <hr/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
