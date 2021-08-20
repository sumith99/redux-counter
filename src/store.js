import { createStore } from 'redux';
import { rootReducer } from './reducer/indexReducer';

export const store = createStore(rootReducer)
console.log("->",store.getState());