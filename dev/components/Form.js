import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleText = this.handleText.bind(this);
        this.addNote = this.addNote.bind(this);
    }

    handleTitle(e) {
        this.setState({ title: e.target.value })
    }

    handleText(e) {
        this.setState({ text: e.target.value })
    }

    addNote() {
        var note = {
            title: this.state.title,
            text: this.state.text
        }
        this.props.addNote(note);
    }

    render() {
        return (
            <div className="container-left">
                <form className="container-left__form">
                    <h3 className="container-left__form-title">Форма</h3>
                    <input className="inputs input-title" 
                           type="text" 
                           placeholder="Введите заголовок" 
                           maxLength="70"
                           value={this.state.title}
                           onChange={this.handleTitle}
                    />
                    <textarea className="inputs input-desc" 
                              type="text" 
                              placeholder="Введите описание" 
                              rows="5" 
                              maxLength="1000"
                              value={this.state.text}
                              onChange={this.handleText}>
                    </textarea>
                    <div className="container-left__form-buttons">
                        <a className="btns btn-yes" onClick={this.addNote}>Добавить</a>
                        <a className="btns btn-no">Очистить</a>
                    </div>
                </form>
            </div>
        )
    }
}