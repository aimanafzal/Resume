import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      // var aboutmsg = this.props.data.aboutmsg;
      // var skills = this.props.data.skills.map(function(skills){
      //   var className = 'bar-expand1 '+skills.name.toLowerCase();
      //   return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      // })
      var about = this.props.data.about.map(function(about){
        var className = 'bar-expand '+about.name.toLowerCase();
        return <li key={about.name}><span style={{width:about.level}}className={className}></span><em>{about.name}</em></li>
      })
    }

    return (
      <section id="resume" className="bc">

      

          <div className="row skill" >

         <div className="three columns header-col">
            <h1><span>About Us</span></h1>
         </div>

         <div className="nine columns main-col">

            <p className='pi'>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {about}
					</ul>
				</div>
			</div>
      </div>
      
      {/* <div className="row skill" >
      <div className="three columns header-col">
            <h1><span>Our skill set</span></h1>
         </div>

         <div className="nine columns main-col">
         <p className='pi'>{aboutmsg}
            </p>
            

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div> */}
         
     



      
   </section>
    );
  }
}

export default Resume;
