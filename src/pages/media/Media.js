import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Media.css";
import MediaData from "../../_pages/media.md"
import ReactMarkdown from 'react-markdown'
import Sidebar from '../../containers/sidebar/Sidebar'


class Media extends Component {
    constructor(props) {
        super(props)

        this.state = { data: null }
    }

    componentWillMount() {
        fetch(MediaData).then((response) => response.text()).then((text) => {
            this.setState({ data: text })
        })
    }

    render() {
        return (
            <div className = "media-main">
                <Header />
                <div className="media-data">
                    <ReactMarkdown source={this.state.data} />
                </div>
                <Footer />
            </div>
        )
    }
}
export default Media