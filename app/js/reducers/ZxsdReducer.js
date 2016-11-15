/**
 * Created by 1 on 2016/6/27.
 */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import { MainReducer } from 'reducers/MainReducer';


export const ZxsdReducer  = combineReducers({
    MainReducer,
    routing:routerReducer,
});
