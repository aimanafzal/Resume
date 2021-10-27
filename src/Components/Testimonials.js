import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      
      <section id="testimonials" className="bc">
          
      <div className="text-container">
     <img className="top"  src={require('./cx.png')} />
         <div className="row">
         <div className="banner-text">
       
      {/* <h1 className="top">Why to choose us ?</h1> */}
      </div>
            <div className="two columns header-col">
               <h1><span>why to choose Us ?</span></h1>
            </div>
            
            <div className="eleven columns flex-container">
           
            <ul className="slides">
                      {testimonials}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
