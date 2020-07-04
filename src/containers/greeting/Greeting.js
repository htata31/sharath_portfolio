import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting, biography, interests, education } from "../../portfolio";
import { Fade } from "react-reveal";
import Sidebar from "../../containers/sidebar/Sidebar"


// class App extends React.Component 
export default class Greeting extends React.Component {

  populateBiography() {
    let arr = [];
    arr.push(React.createElement('h1', {}, 'Biography'));
    for (let i in biography.intro) {
      if(parseInt(i) === 2)
        arr.push(React.createElement('p', {}, [biography.intro[i],React.createElement('a', {href: 'https://www.arcgis.com/apps/opsdashboard/index.html#/abb41818160d4cec91f604520a088349' }, '[Dashboard]')]));
      else
        arr.push(React.createElement('p', {}, biography.intro[i]));
    }
    return (React.createElement('div', { className: 'biography' }, [arr]));
  }

  education() {
    let list_arr = [];
    let arr= [];
    arr.push(React.createElement('h3', {}, 'Education'));
    for (let i in education.course) {
      console.log(i);
      list_arr.push(<i class="fa fa-graduation-cap cap"></i>);
      list_arr.push(React.createElement('div', { }, [React.createElement('p', { className: 'course' }, [education.course[i]]),React.createElement('p', {className: 'institution' }, [education.institution[i]])]));
    }
    arr.push(React.createElement('ul', {className :'ul'}, list_arr));

    return (React.createElement('div', { className: 'education' }, [ arr]));
  }

  interests() {
    let list_arr = [];
    let arr= [];
    arr.push(React.createElement('h3', {}, 'Interests'));
    for (let i in interests) {
      list_arr.push(React.createElement('li', {}, interests[i]));
    }
    arr.push(React.createElement('ul', {}, list_arr));

    return (React.createElement('div', { className: 'interests' }, [arr]));
  }


  render() {
    return (
      <Fade bottom duration={1000} distance="40px">
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <Sidebar />
            {/* <div>
              <div className="greeting-image-div">
                <img src="https://chandrasg.github.io/images/sharath.jpg" alt="">
                </img>
              </div>
              <div className="greeting-text-div">
                <h3 className="greeting-text">{greeting.title}</h3>
                <h3 className="greeting-text-p subTitle">{greeting.subTitle}</h3>
                <p className="greeting-text-p ">
                  <a href="https://www.cis.upenn.edu/" target="_blank" >{greeting.department}</a></p>
                <p className="greeting-text-p ">
                  <a href="https://centerfordigitalhealth.upenn.edu/" target='_blank' >{greeting.address}</a></p>
                <SocialMedia />
              </div>
            </div> */}

            <div >
              {this.populateBiography()}
              <div>
                {this.interests()}
                {this.education()}
              </div>

            </div>
          </div>
        </div>
      </Fade>
    );
  }


}

