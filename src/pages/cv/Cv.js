import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Cv.css";
import CV from "../../_pages/cv.md"
import ReactMarkdown from 'react-markdown'


class Cv extends Component {
	constructor(props) {
	  super(props)
  
	  this.state = { data: null }
	}
  
	componentWillMount() {
	  fetch(CV).then((response) => response.text()).then((text) => {
		this.setState({ data: text })
	  })
	}
  
	render() {
	  return (
		<div >
			{/* <Header /> */}
			<div className="cv-experience">
			<ReactMarkdown source={this.state.data} />
			</div>
			{this.state.data !== null ? <Footer />: null}
		</div>
	  )
	}
  }
export default Cv