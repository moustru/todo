import './index.html';
import './scss/app.scss';
require.context('./static/', true, /\.(ttf|svg|png|jpe?g)$/);

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Form from './components/Form/Form';
import List from './components/List/List';

import reducer from './store/reducers';
import { addNote, deleteNote } from './store/actions';

const store = createStore(reducer);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.addNote = this.addNote.bind(this);
    }

    addNote = (value) => {
        store.dispatch(addNote(value));
    }

    render() {
        return (
            <div className="container">
                <Form list={store.getState().notes} add={this.addNote}></Form>
                <List list={store.getState().notes}></List>
            </div>
        ) 
    }
}

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);