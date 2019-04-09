import './index.html';
import './scss/app.scss';
require.context('./static/', true, /\.(ttf|svg|png|jpe?g)$/);

import React from 'react';
import { render } from 'react-dom';
import Form from './components/Form';
import List from './components/List';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: []
        }

        this.addNote = this.addNote.bind(this);
    }

    addNote = (value) => {
        this.setState({ notes: [...this.state.notes, value] })
    }

    render() {
        return (
            <div className="container">
                <Form list={this.state.notes} add={this.addNote}></Form>
                <List list={this.state.notes}></List>
            </div>
        ) 
    }
}

render(
    <App/>,
    document.getElementById('app')
);