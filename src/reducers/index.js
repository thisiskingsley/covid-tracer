import { combineReducers } from "redux";
import { covidReducer } from './covidReducer';
import { openDropdownReducer } from './openDropdownReducer';
import { selectedStateReducer } from './selectedStateReducer';

export default combineReducers({
    covid: covidReducer,
    open: openDropdownReducer,
    selection: selectedStateReducer
})

