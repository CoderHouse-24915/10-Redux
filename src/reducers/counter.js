// Definimos un estado inicial de nuestro contador que va a ser igual a 0
// y ademas le pasamos un action
// El reducer va a recibir una accion 

import { INCREMENT, DECREMENT } from '../types/index';

const countReducer = (state = 0, action) => {
    switch(action.type) {
        case INCREMENT:
            return state + action.payload;
        case DECREMENT:
            return state  - 1;
        default: 
            return state;
    }
}

export default countReducer;