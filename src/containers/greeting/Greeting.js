import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { biography } from "../../portfolio"
import { Fade } from "react-reveal";


// class App extends React.Component 
export default class Greeting extends React.Component {

  populateBiography() {
    let arr = [];
    console.log("entered");
    for (let i in biography.intro) {
      arr.push(React.createElement('p', {}, biography.intro[i]));
    }
    return (React.createElement('div', {className: 'biography'}, [arr]) );
  }

  render() {
    return (
      <Fade bottom duration={1000} distance="40px">
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div>
              <div className="greeting-image-div">
                <img src="https://chandrasg.github.io/images/sharath.jpg" alt="">
                </img>
              </div>
              <div className="greeting-text-div">
                <h3 className="greeting-text">{greeting.title}</h3>
                <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
                <SocialMedia />
              </div>
            </div>

            <div >
              <h1 className='biography-header'>Biography</h1>
              {this.populateBiography()}
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  

}

