import { createStore } from 'redux';
import { countReducer } from './redux-comp/reducer';

export const store = createStore(countReducer);