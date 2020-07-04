import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Publications.css";
import PublicationsData from "../../_pages/publications.md"
import ReactMarkdown from 'react-markdown'
import Sidebar from '../../containers/sidebar/Sidebar'


class Publications extends Component {
    constructor(props) {
        super(props)

        this.state = { data: null }
    }

    componentWillMount() {
        fetch(PublicationsData).then((response) => response.text()).then((text) => {
            this.setState({ data: text })
        })
    }

    render() {
        return (
            <div >
                <Header />
                <div className="publications-data">
                    <ReactMarkdown source={this.state.data} />
                </div>
                <Footer />
            </div>
        )
    }
}
export default Publications