import './index.html';
import './scss/app.scss';
require.context('./static/', true, /\.(ttf|svg|png|jpe?g)$/);

import React from 'react';
import { render } from 'react-dom';
import Form from './components/Form';
import List from './components/List';

class App extends React.Component {
    state = {
        notes: []
    };

    addNote = (value) => {
        this.setState({ notes: value })
    }

    render() {
       return (
            <div className="container">
                <Form list={this.state.notes} addNote={this.addNote}></Form>
                <List list={this.state.notes}></List>
            </div>
       ) 
    }
}

// function App() {
//     var notes = [];

//     return (
//         <div className="container">
//             <Form list={notes}></Form>
//             <List list={notes}></List>
//         </div>
//     )
// }

render(
    <App/>,
    document.getElementById('app')
);