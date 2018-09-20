import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import IdeaContainer from '../../containers/IdeaContainer.jsx';
import TodoContent from '../TodoContent/TodoContent.jsx';
import InProgressContent from '../InProgressContent/InProgressContent.jsx';
import DoneContent from '../TodoContent/TodoContent.jsx';

class Content extends Component {
	render() {
		return (
			<div className="container-fluid">	
				<Redirect from='/' to='/idea' />
				<Route exact path='/idea' component={IdeaContainer} />
				<Route path='/todo' component={TodoContent} />
				<Route path='/inProgress' component={InProgressContent} />
				<Route path='/done' component={DoneContent} />
			</div>
		);
	}
}

export default Content;

