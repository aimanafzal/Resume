import React, { Component } from 'react';

import { FaHeart } from "react-icons/fa";
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Company from './Components/company';
import "./pat.css";
import Contact from './Components/Contact';
import ParticleBackground from "./ParticleBackground";
import CenterTitle from "./CenterTitle";

import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
     
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }
   
  render() {
   
    return (
      <div className="App">
       
        <Header data={this.state.resumeData.main}/>
        <div>
        <Resume data={this.state.resumeData.resume}/>
     <Company data={this.state.resumeData.skill}/>
     {/* <ParticleBackground/> */}
     
      {/* <CenterTitle/> */}
      
      
    </div>
  
        {/* <About data={this.state.resumeData.main}></About> */}
        
        {/* <Portfolio data={this.state.resumeData.portfolio}/> */}
        <Testimonials data={this.state.resumeData.testimonials}/>
        {/* <Contact data={this.state.resumeData.main}/> */}
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
    // function CenterTitle() {
    //   return (
    //     <section  >
    //     <div id="text_div center_all" className="tex">
          
          
            
    //       <div className="center_all">

           
    //          {/* <img className="tt"    src={require('./cx.png')} />  */}
    //          <h1>Why to choose us ?</h1>
    //          <p className="pip" >
    //          We take various aspects in mind while creating a custom information structure, such as confirmation and security.
    //          As a result, we built our data-connected platform with these similarities in mind, ensuring that you only have 
    //          acccess to the most basic features. This frees us up to focus on the particular computations and data in your solution.
    //           As a consequence, we're prepared to deliver your arrangements quickly and effectively, with the added benefit of our 
    //           ongoing assistance from day one. </p> </p> </p> </p>
             
             
    //          </p> 
             
    //         {/* <h2 className="l">We are US Based Company. We provide software solutions, </h2>
    //         <h2 className="l">software consultancy on different tech 
    //         stacks. </h2>
    //         <h2 className="l">Which are widely used and considerd to be market leading tech's.</h2> */}
            
    //       </div>
    //     </div>
    //     </section>
    //   );
    // }
  }
}

export default App;
