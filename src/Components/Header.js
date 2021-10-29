import React, { Component } from 'react';


class Header extends Component {
   constructor (props) {
      super(props);
      this.state = {
        animationClass: 'test'
      }
      this.changeState = this.changeState.bind(this);
    }
    
    changeState(){
      if(this.state.animationClass === 'test'){
        this.setState({
          animationClass: 'test paused'
        });
      }else{
        this.setState({
          animationClass: 'test'
        });
      }
    }
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      description = ""
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <section className="resume1">
      <header id="home"  >
       
        
      <nav id="nav-wrap" bg="dark" variant="dark">
      
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
         
         <ul id="nav" >
         {/* <li className="logo">IZTECH</li> */}
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            {/* <li><a className="smoothscroll" href="#about">About</a></li> */}
	         <li><a className="smoothscroll" href="#resume">About</a></li>
            {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="">Services</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>
      
      <div className="row banner">
         { <div className="banner-text">
        <div> <img className="f" src={require('./logo.jpg')} /> </div>
            <h1 className="responsive-headline"  ><span>WELCOME TO </span>"IS TECH LLC."</h1>
            <h3>We Develop Smart Software Solutions</h3>
            <hr />
            <h6 className="r">We have team comprised of experienced professionals. Our creative team employs the most cutting-edge,  </h6>
            <h6 className="r">cutting-edge methods to make your life easier and your clients' experiences more pleasant. We provide efficient </h6>
            <h6 className="r">and relaible solutions for almost all kinds of business needs.</h6>
            {/* <ul className="social">
               {networks}
            </ul> */}
         </div> }
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>
      
   </header>
   </section>
    );
  }
}

export default Header;
