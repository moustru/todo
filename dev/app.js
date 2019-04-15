import './index.html';
import './scss/app.scss';
require.context('./static/', true, /\.(ttf|svg|png|jpe?g)$/);

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

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
        console.log(store.getState());
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

const mapStateToProps = (state) => {
    console.log(state);
    return {
        test: 1
    }
}

const WrappedComponent = connect(mapStateToProps)(App);

render(
    <Provider store={store}>
        <WrappedComponent/>
    </Provider>,
    document.getElementById('app')
);