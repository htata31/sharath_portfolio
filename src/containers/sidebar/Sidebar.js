import React from "react";
import "./Sidebar.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";


// class App extends React.Component 
export default class Sidebar extends React.Component {
    render() {
        return (
            <div className ="col-12 col-lg-4">
                <div className="greeting-image-div">
                    <img src="https://chandrasg.github.io/images/sharath.jpg" alt="">
                    </img>
                </div>
                <div className="greeting-text-div">
                    <h3 className="greeting-text">{greeting.title}</h3>
                    <h3 className="greeting-text-p subTitle">{greeting.subTitle}</h3>
                    <p className="greeting-text-p ">
                        <a href="https://www.cis.upenn.edu/" className= 'a_color' target="_blank" >{greeting.department}</a></p>
                    <p className="greeting-text-p ">
                        <a href="https://centerfordigitalhealth.upenn.edu/" className= 'a_color' target='_blank' >{greeting.address}</a></p>
                    <SocialMedia />
                </div>
            </div>
        );
    }
}

