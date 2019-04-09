import React from 'react';

export default class Note extends React.Component {
    render() {
        return this.props.list.map(note => 
                    <div className="note">
                        <span className="note-title">{ note.title }</span>
                        <span className="note-desc">{ note.text }</span>
                        <a className="btns btn-no">Удалить</a>
                    </div>
                )
        
    }
}