import { Input, Output, Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'note',
    template: `<div class="note">
                    <span class="note-title">{{ title }}</span>
                    <span class="note-desc">{{ desc }}</span>
                    <a class="btns btn-no" (click)="deleteNote(index)">Удалить</a>
                </div> `,
    styles: [`
                .note {
                    @include flexColumn;
                    margin: 20px 0;
                    padding: 15px;
                    background-color: #fff;
                    word-break: break-all;
                    box-shadow: 0 0 1px .5px #c5c5c5;

                    &-title {
                        font-size: 24px;
                    }

                    &-desc {
                        padding-bottom: 15px;
                        font-size: 18px;
                    }

                    .btn-no {
                        width: 100px;
                        padding: 10px;
                        text-align: center;
                        font-size: 14px;
                    }
                }
            `]
})

export class Note {
    @Input() title: any;
    @Input() desc: any;

    @Output() delete = new EventEmitter();
    deleteNote(index: any): void {
        this.delete.emit(index);
    } 
}