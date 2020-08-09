import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Resources.css";
import ResourcesData from "../../_pages/resources.md"
import ReactMarkdown from 'react-markdown'


// const resources = {
//     title: "Resources",
//     datasets:
//     {
//         title: "Datasets",
//         data: [{
//             info: "Weibo and Twitter word embeddings for 2012-2018, part of which was used in Studying Cultural Differences in Emoji Usage across the East and the West. ICWSM 2019",
//             dataset: "https://docs.google.com/forms/d/e/1FAIpQLSdAlsH58xhZKbwjURrF24mc3UCTENOG1GC5VJCvdpebXp34og/viewform",
//         }, {
//             info: "Cross-platform and cross-interaction study of user personality based on images on Twitter and Flickr",
//             dataset: "https://drive.google.com/file/d/1rXweI5Jy5FyaRqji2Tp-RfNWTev8vajH/view",
//             readme: "https://raw.githubusercontent.com/chandrasg/chandrasg.github.io/master/files/zahra_plos_ReadMe.txt"
//         }, {
//             info: "Studying Personality through the Content of Posted and Liked Images on Twitter,",
//             dataset: "https://raw.githubusercontent.com/chandrasg/chandrasg.github.io/master/files/acm_websci_data.csv.zip",
//             readme: "https://raw.githubusercontent.com/chandrasg/chandrasg.github.io/master/files/acm_websci_readme.txt"
//         }, {
//             info: "CP-QAE-I: Influence of Personality and Culture on Perception of Quality, Affect and Enjoyment",
//             dataset: "https://www.researchgate.net/publication/281642894_CP-QAE-I_Influence_of_Personality_and_Culture_on_Perception_of_Quality_Affect_and_Enjoyment",
//         }]
//     },
//     code_lexica:{
//             title: "Code and Lexica",
//             data :[{
//                 info:"Lexica, (eg. Understanding and measuring psychological stress using social media, ICWSM 2019)",
//                 lexicon:{
//                     title: "[Lexicon]",
//                     link: "https://github.com/chandrasg/lexica" },
//             },{
//                 info:"Convolutional Deep Belief Networks for Scalable Unsupervised Learning of Hierarchical Representations,Lee, Honglak, et al.",
//                 visualization :{
//                     title: "[ICML 2009 paper]",
//                     link:"http://dl.acm.org/citation.cfm?id=1553453",
//                 }, 
//                 paper: {
//                     title: "[MATLAB Implementation along with Visualisations]",
//                     link:"http://dl.acm.org/citation.cfm?id=1553453"
//                 },
//             },{
//                 info:"Script for downloading users' photos (tagged as favorite) along with profile information.Needs flickr_api ",
//                 code : {
//                     title: "[Python Code]",
//                     link: "https://github.com/sharathchandra92/flickrapi_downloadfavorites",
//                 },
//             }]

//     },
//     blogpost :{
//         title: "Blog Post",
//         data: [{
//             info: "Penn COVID Twitter Map to track mental health, common topics across states, and symptom mentions",
//             dashboard :{
//                 title: "[Dashboard]",
//                 link: "https://www.arcgis.com/apps/opsdashboard/index.html#/abb41818160d4cec91f604520a088349",
//             },
//             covid_hub:{
//                 title:"[Penn COVID Hub]",
//                 link: "http://penncovid19hub.com/"
//             }
//         },{
//             shows:{
//                 title:"[Study Shows Twitter Usage Expresses ADHD]",
//                 link:"https://openforest.net/twitter-usage-expresses-adhd/",
//             }

//         }]
//     },
//     plagarism:{
//         title: "Comic Sketch on Plagiarism",
//         info : "This is a play I wrote and co-directed for Research Methods course I took during my PhD at NTU",
//         youtube_link: "https://www.youtube.com/watch?v=r8zYpgCMoTA",
//         logo_path : "Plagarism.jpg",
//         alt_name: "Plagarism"
//     }
// }


class Resources extends React.Component {

    constructor(props) {
        super(props)

        this.state = { data: null }
    }

    componentWillMount() {
        fetch(ResourcesData).then((response) => response.text()).then((text) => {
            this.setState({ data: text })
        })
    }

    render() {
        return (
            <div >
                <Header />
                <div className="resourceView">
                    <ReactMarkdown source={this.state.data} />
                </div>
                {this.state.data !== null ? <Footer />: null}
            </div>
        )
    }
    // render() {
    //     return (
    //         <div className="resources-main">
    //             <Header />
    //             <div className="resourceView">

    //                 <h1>{resources.title}</h1>
    //                 <div>
    //                     <h3>{resources.datasets.title}</h3>
    //                     {resources.datasets.data.map((dataset) => {
    //                         console.log(dataset.dataset)
    //                         return (
    //                             <ul>
    //                                 <li>{dataset.info}
    //                                 <a href={dataset.dataset}>[Dataset]</a>
    //                                 {dataset.readme ? <a href={dataset.readme}>[Readme]</a> :""}
    //                                 </li>
    //                             </ul>

    //                         );
    //                     })}
    //                 </div>
    //                 <div>
    //                     <h3>{resources.code_lexica.title}</h3>
    //                     {resources.code_lexica.data.map((data) => {
    //                         console.log(data)
    //                         return (
    //                             <ul>
    //                                 <li>{data.info}
    //                                 {data.lexicon ? <a href={data.lexicon.link}>{data.lexicon.title}</a> :""}
    //                                 {data.paper ? <a href={data.paper.link}>{data.paper.title}</a> :""}
    //                                 {data.visualization ? <a href={data.visualization.link}>{data.visualization.title}</a> :""}
    //                                 {data.code ? <a href={data.code.link}>{data.code.title}</a> :""}
    //                                 </li>
    //                             </ul>

    //                         );
    //                     })}
    //                 </div>
    //                 <div>
    //                     <h3>{resources.blogpost.title}</h3>
    //                     {resources.blogpost.data.map((data) => {
    //                         console.log(data)
    //                         return (
    //                             <ul>
    //                                 <li>{data.info}
    //                                 {data.dashboard ? <a href={data.dashboard.link}>{data.dashboard.title}</a> :""}
    //                                 {data.covid_hub ? <a href={data.covid_hub.link}>{data.covid_hub.title}</a> :""}
    //                                 {data.shows ? <a href={data.shows.link}>{data.shows.title}</a> :""}
    //                                 </li>
    //                             </ul>

    //                         );
    //                     })}
    //                 </div>
    //                 <div>
    //                     <h3>{resources.plagarism.title}</h3>
    //                     <p>{resources.plagarism.info}</p>
    //                     <p>
    //                     <a href={resources.plagarism.youtube_link}><img src="https://img.youtube.com/vi/r8zYpgCMoTA/0.jpg" alt="NTU Research Methods -- Comic Skit on Plagiarism" /></a>
    //                     </p>
    //                 </div>

    //             </div>
    //             <Footer />
    //         </div>
    //     );
    // }
}


export default Resources;
