<template>
    <div class="container">
        <div class="container-left">
            <form class="container-left__form">
                <h3 class="container-left__form-title">Форма</h3>
                <input class="inputs input-title" type="text" placeholder="Введите заголовок" maxlength="70" required>
                <textarea class="inputs input-desc" type="text" placeholder="Введите описание" rows="5" maxlength="1000"></textarea>
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
                notes: JSON.parse(localStorage.getItem('notes')) || []
            }
        },

        components: {
            Note
        },

        methods: {
            addNote() {
                var title = document.querySelector('.input-title');
                var desc = document.querySelector('.input-desc');

                this.notes.push({
                    caption: title.value,
                    text: desc.value
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

<style scoped lang="scss">

</style>