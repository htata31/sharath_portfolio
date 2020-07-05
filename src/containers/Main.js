import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Resources from '../pages/resources/Resources';
import Cv from '../pages/cv/Cv';
import Publications from '../pages/publications/Publications';
import Media from '../pages/media/Media';
import Talks from '../pages/talks/Talks';

export default class Main extends Component {
	render() {
		return (
			<div>
				<HashRouter basename="/">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/home" component={Home} />
						<Route path="/cv" exact component={Cv} />
						<Route path="/publications" component={Publications} />
						<Route path="/media" component={Media} />
						<Route path="/talks" component={Talks} />
						<Route path="/resources" component={Resources} />
					</Switch>
				</HashRouter>
			</div>
		);
	}
}
