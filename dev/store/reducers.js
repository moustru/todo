var reducer = function(state = [], action) {
    switch(action.type) {
        case 'ADD_NOTE':
            return state.update('notes', notes => notes.push(action.note));
        case 'DELETE_NOTE':
            return state.update('notes', notes => notes.splice(action.note, 1));
        default:
            return state;
    }
}

export default reducer;