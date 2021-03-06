// Importamos createStore
import { createStore } from 'redux';
import rootReducer from '../reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(rootReducer, devTools)