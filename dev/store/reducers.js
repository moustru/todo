import Store from './store';

const reducer = (state = Store, action) => {
    switch(action.type) {
        case 'ADD_NOTE':
            return { ...state, notes: action.note }
        case 'DELETE_NOTE':
            return { ...state, id: action.id }
        default:
            return state;
    }
}

export default reducer;