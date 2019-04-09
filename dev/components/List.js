import React from 'react';
import Note from './Note';
import EmptyNotes from './EmptyNotes.jsx';

export default class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.removeNote = this.removeNote.bind(this);
    }

    removeNote = (note) => {
        this.props.list.splice(note, 1);
        this.setState({ notes: this.props.list })
    }

    render() {
        return (
            <div className="container-right">
                <div className="container-right__title">
                    <h3>Список записей</h3>
                </div>
                { this.props.list.length == 0 ? EmptyNotes : false }
                <Note list={this.props.list} remove={this.removeNote}></Note>
            </div>
        )
    }
}