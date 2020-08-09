import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Talks.css";
import TalksData from "../../_pages/talks.md"
import ReactMarkdown from 'react-markdown'
import Sidebar from '../../containers/sidebar/Sidebar'


class Talks extends Component {
    constructor(props) {
        super(props)

        this.state = { data: null }
    }

    componentWillMount() {
        fetch(TalksData).then((response) => response.text()).then((text) => {
            this.setState({ data: text })
        })
    }

    render() {
        return (
            <div >
                <Header />
                <div className="talks-data">
                    <ReactMarkdown source={this.state.data} />
                </div>
                {this.state.data !== null ? <Footer />: null}
            </div>
        )
    }
}
export default Talks