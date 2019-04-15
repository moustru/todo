import Store from './store';

let noteIdCounter = 0;

export const addNote = (note) => {
    return {
        type: 'ADD_NOTE',
        id: noteIdCounter++,
        note
    }
};

export const deleteNote = (id) => {
    return {
        type: 'DELETE_NOTE',
        id
    }
};