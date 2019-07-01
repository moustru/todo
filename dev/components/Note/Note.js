import React from 'react';

export default class Note extends React.Component {
    render() {
        return (
            this.props.list.map((note, i) =>
                <div className="note" key={i}>
                    <span className="note-title">{ note.title }</span>
                    <span className="note-desc">{ note.text }</span>
                    <a className="btns btn-no" onClick={this.props.remove.bind(this, i)}>Удалить</a>
                </div>
            )
        )
    }
}