import React, { Component } from 'react';

class Company extends Component {
    render() {

        if(this.props.data){
         //var skillmessage = this.props.data.ab;
         var aboutmsg = this.props.data.aboutmsg;
          var skills = this.props.data.skills.map(function(skills){
            var className = 'bar-expand1 '+skills.name.toLowerCase();
            return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><ef>{skills.name}</ef></li>
          })
        //   var about = this.props.data.about.map(function(about){
        //     var className = 'bar-expand '+about.name.toLowerCase();
        //     return <li key={about.name}><span style={{width:about.level}}className={className}></span><ef>{about.name}</ef></li>
        //   })
        }
    
        return (
          <section id="resume" className="resume1" >
          <div className="row skill" >
          <div className="three columns header-col">
                <h1><span className="span1">Our skills</span></h1>
             </div>
    
             <div className="nine columns main-col">
             <p className='pi2'>We work on following technologies:
                </p>
                
    
                    <div className="bars">
                       <ul className="skills">
                          {skills}
                        </ul>
                    </div>
                </div>
          </div>
             
         
    
    
    
          
       </section>
        );
      }
    }
export default Company;