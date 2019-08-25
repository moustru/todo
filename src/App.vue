<template>
    <div class="container">
        <div class="container-left">
            <form class="container-left__form">
                <h3 class="container-left__form-title">Форма</h3>
                <input v-model="title" class="inputs input-title" type="text" placeholder="Введите заголовок">
                <textarea v-model="desc" class="inputs input-desc" type="text" placeholder="Введите описание" rows="5"></textarea>
                <div class="container-left__form-buttons">
                    <a class="btns btn-yes" @click="addNote();">Добавить</a>
                    <a class="btns btn-no">Очистить</a>
                </div>
            </form>
        </div>
        <div class="container-right">
            <div class="container-right__title">
                <h3>Список записей</h3>
            </div>
            <div class="container-right__empty" v-if="!notes.length">
                <p>Заметок нет</p>
            </div>
            <note v-for="note in notes" 
                  :key="note.id" 
                  :note="note" 
                  :id="note.id" 
                  @remove-note="removeNote(note)">
            </note>
        </div>
    </div>
</template>

<script>
    import Note from './components/Note.vue';

    export default {
        data() {
            return {
                notes: JSON.parse(localStorage.getItem('notes')) || [],
                title: null,
                desc: null
            }
        },

        components: {
            Note
        },

        methods: {
            addNote() {
                this.notes.push({
                    caption: this.title,
                    text: this.desc
                });
                
                localStorage.setItem('notes', JSON.stringify(this.notes));
            },

            removeNote(note) {
                this.notes.splice(this.notes.indexOf(note), 1);
                localStorage.setItem('notes', JSON.stringify(this.notes));
            }
        }
    }
</script>