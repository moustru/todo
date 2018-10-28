import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app',
    template: ` 
                <div class="container-left">
                    <form class="container-left__form">
                        <h3 class="container-left__form-title">Форма</h3>
                        <input [(ngModel)]='title' class="inputs input-title" type="text" placeholder="Введите заголовок" maxlength="70" required>
                        <textarea [(ngModel)]='name' class="inputs input-desc" type="text" placeholder="Введите описание" rows="5" maxlength="1000"></textarea>
                        <div class="container-left__form-buttons">
                            <a class="btns btn-yes">Добавить</a>
                            <a class="btns btn-no">Очистить</a>
                        </div>
                    </form> 
                </div>
                <div class="container-right">
                    <div class="container-right__title">
                        <h3>Список записей</h3>
                    </div>
                    <div class="container-right__empty">
                        <p>Заметок нет</p>
                    </div>
                    <note [caption]="title" [text]="desc" (delete)="delete(index)"></note>
                </div>
            `
})

export class App {
    title: any;
    desc: any;
    notes: any;

    constructor() {
        this.notes = [];
    }

    addNote() {
        this.notes.push({
            caption: this.title,
            text: this.desc
        })
    }

    delete(index: any) {
        this.notes.splice(index, 1)
    } 
}