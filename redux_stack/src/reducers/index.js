import { combineReducers } from 'redux';
import SelectionReducer from './SelectionReducer';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    items: LibraryReducer,
    selectedItemId: SelectionReducer
});
