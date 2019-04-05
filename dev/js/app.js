import './../index.html';
import './../scss/app.scss';

import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';
import Note from './../components/Note.vue';

var app = new Vue({
    el: '#app',
    data: {
        caption: '',
        text: '',
        notes: JSON.parse(localStorage.getItem('notes')) || []
    },

    components: {
        'note': Note
    },

    methods: {
        addNote: function() {
            var title = document.querySelector('.input-title');
            var desc = document.querySelector('.input-desc');

            this.notes.push({
                caption: title.value,
                text: desc.value
            });
            
            localStorage.setItem('notes', JSON.stringify(this.notes));
        },

        removeNote: function(note) {
            this.notes.splice(this.notes.indexOf(note), 1);
            localStorage.setItem('notes', JSON.stringify(this.notes));
        } 
    }
})
