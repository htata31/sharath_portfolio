import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from '../pages/contact/ContactComponent';
import Projects from '../pages/projects/Projects';
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
						<Route path="/experience" exact component={Cv} />
						<Route path="/education" component={Publications} />
						<Route path="/opensource" component={Media} />
						<Route path="/contact" component={Talks} />
						<Route path="/splash" component={Splash} />
						<Route path="/projects" component={Resources} />
					</Switch>
				</HashRouter>
			</div>
		);
	}
}
