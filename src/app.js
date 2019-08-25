import './index.html';
import './scss/app.scss';
require.context('./static/', true, /\.(ttf|svg|png|jpe?g)$/);

import Vue from 'vue/dist/vue.js';
import App from './App.vue';

var app = new Vue({
    el: '#app',
    components: {
        App
    }
})