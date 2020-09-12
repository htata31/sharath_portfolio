import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Footer from "../../components/footer/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <div>
        <Greeting />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
