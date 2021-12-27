import {createStore} from 'redux';
import {reducer} from './Reducers/reducer';

export let store = createStore(reducer);