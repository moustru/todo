let noteIdCounter = 0;

export const addNote = (note) => {
    return {
        type: 'ADD_NOTE',
        id: noteIdCounter++,
        note
    }
};

export const deleteNote = note => {
    return {
        type: 'DELETE_NOTE',
        note
    }
};