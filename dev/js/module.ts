import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { App } from './components/App';
import { Note } from './components/Note'; 

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ App, Note ],
    bootstrap: [ App ]
})

export class AppModule {};