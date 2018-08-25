import { createStore, combineReducers, applyMiddleware } from 'redux';

import ideaReducer from './reducers/ideaReducer';
import todoReducer from './reducers/todoReducer';
import inProgressReducer from './reducers/inProgressReducer';
import doneReducer from './reducers/doneReducer';


export default createStore(combineReducers({
	idea: ideaReducer,
	todo: todoReducer,
	inProgress: inProgressReducer,
	doneReducer: doneReducer
}),
{}, applyMiddleware);