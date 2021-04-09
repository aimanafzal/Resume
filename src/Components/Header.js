import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      description = "I, being a Certified Blockchain Developer and a FullStack developer working as a Senior Lead backend Developer - WIRD PBC - Remote using NodeJS,ExpressJS, Python, ReactJS, and AWS (EC2, Lambda Functions, REST API, RDS, S3) and Firebase." +
      "Along with that, I am Deep Learning Certified for AI based developments working as a Software Engineer (Backend) and a key team member with team aiming towards AI based predictions to make a business successful using NodeJS, Python, Shopify and Google Analytics."+
      "Worked as a Remote software engineer for a company situated in USA (Arizona) as a full stack developer, managing the current running softwares and writing code to extend the current features using NodeJs and AWS (EC2, Lambda Functions, REST API, RDS, S3)."+
      "Have been associated with multiple companies for more than 5+ years which includes my responsibilities as development and management of their software and databases, all based on web and desktop using ASP.NET (.NET and NodeJs)"+
      "and opensource environment which includes JQUERY, JavaScript, AngularJS, Node.js, AWS, Firebase and HEROKU." +
      "Developed Financials, Advertisement, Sales and Hospital related custom ERP"
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
         </ul>

      </nav>
      
      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
