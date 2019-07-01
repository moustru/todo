let noteIdCounter = 0;

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        id: noteIdCounter++,
        note
    }
};

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        id
    }
};