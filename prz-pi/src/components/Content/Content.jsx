import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import IdeaContainer from '../../containers/IdeaContainer.jsx';
import TodoContainer from '../../containers/TodoContainer.jsx';
import InProgressContainer from '../../containers/InProgressContainer.jsx';
import DoneContainer from '../../containers/DoneContainer.jsx';

class Content extends Component {
	render() {
		return (
			<div className="container-fluid">	
				<Redirect from='/' to='/idea' />
				<Route exact path='/idea' component={IdeaContainer} />
				<Route path='/todo' component={TodoContainer} />
				<Route path='/inProgress' component={InProgressContainer} />
				<Route path='/done' component={DoneContainer} />
			</div>
		);
	}
}

export default Content;

