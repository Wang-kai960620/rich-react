import React from 'react';
import ReactDOM from 'react-dom';
import'./index.scss'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

window.onload = function () {
  setTimeout(function () {
    window.scroll(0, 200);
  }, 0);
};
if(document.documentElement.clientWidth > 500){
  window.alert('请扫描二维码，保证体验效果')
  const img = document.createElement('img')
  img.src = './QRcode.png'
  img.style.position = 'fixed'
  img.style.left = '50%'
  img.style.top = '50%'
  img.style.transform = 'translate(-50%,-50%)'
  img.style.boxShadow = '0 10px 200px rgba(0,0,0,0.3)'
  document.body.appendChild(img)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
