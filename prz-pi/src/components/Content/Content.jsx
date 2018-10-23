import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import IdeaContainer from '../../containers/IdeaContainer.jsx';
import TodoContainer from '../../containers/TodoContainer.jsx';
import InProgressContent from '../InProgressContent/InProgressContent.jsx';
import DoneContent from '../DoneContent/DoneContent.jsx';

class Content extends Component {
	render() {
		return (
			<div className="container-fluid">	
				<Redirect from='/' to='/idea' />
				<Route exact path='/idea' component={IdeaContainer} />
				<Route path='/todo' component={TodoContainer} />
				<Route path='/inProgress' component={InProgressContent} />
				<Route path='/done' component={DoneContent} />
			</div>
		);
	}
}

export default Content;

