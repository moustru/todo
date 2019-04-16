import Store from './store';

const reducer = (state = Store, action) => {
    switch(action.type) {
        case 'ADD_NOTE':
            return { ...state, notes: [ ...state.notes, action.note ] }
        case 'DELETE_NOTE':
            return { ...state, notes: [ ...state.notes, state.notes.splice(action.id, 1) ] }
        default:
            return state;
    }
}

export default reducer;