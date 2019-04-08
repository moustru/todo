import './index.html';
import './scss/app.scss';
require.context('./static/', true, /\.(ttf|svg|png|jpe?g)$/);

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';

ReactDOM.render(
    <Hello name="Eugene"></Hello>,
    document.getElementById('app')
);