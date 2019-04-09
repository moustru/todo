import React from 'react';
import Note from './Note';

function EmptyNotes(props) {
    if(props.list.length == 0) {
        return (
            <div className="container-right__empty">
                <p>Заметок нет</p>
            </div>
        )
    } else {
        return false;
    }
}

export default class Notes extends React.Component {
    render() {
        return (
            <div className="container-right">
                <div className="container-right__title">
                    <h3>Список записей</h3>
                </div>
                <EmptyNotes list={this.props.list}></EmptyNotes>
                <Note list={this.props.list}></Note>
            </div>
        )
    }
}