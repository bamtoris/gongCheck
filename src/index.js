import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Helmet} from 'react-helmet';

ReactDOM.render(
  <div>
    <Helmet>
        <title>공책</title>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="./index.css"/>
    </Helmet>
    <BrowserRouter> 
      <App />
  </BrowserRouter>
  </div>
    ,
  document.getElementById('root')
);
