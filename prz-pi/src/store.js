import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import ideaReducer from './reducers/ideaReducer';
import todoReducer from './reducers/todoReducer';
import inProgressReducer from './reducers/inProgressReducer';
import doneReducer from './reducers/doneReducer';
import notificationReducer from './reducers/notificationsReducer';
import userReducer from './reducers/userReducer';
import searchReducer from './reducers/searchReducer';

export default createStore(combineReducers({
	idea: ideaReducer,
	todo: todoReducer,
	inProgress: inProgressReducer,
	done: doneReducer,
	notification: notificationReducer,
	user: userReducer,
	search: searchReducer
}),
{}, applyMiddleware(logger, thunk));