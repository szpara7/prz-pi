import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import ideaReducer from './reducers/ideaReducer';
import todoReducer from './reducers/todoReducer';
import inProgressReducer from './reducers/inProgressReducer';
import doneReducer from './reducers/doneReducer';
import notificationReducer from './reducers/notificationsReducer';


export default createStore(combineReducers({
	idea: ideaReducer,
	todo: todoReducer,
	inProgess: inProgressReducer,
	done: doneReducer,
	notification: notificationReducer
}),
{}, applyMiddleware(thunk));