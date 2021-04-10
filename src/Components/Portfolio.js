import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })

      var certification = this.props.data.Certification.map(function(Certification){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={Certification.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={Certification.url} title={Certification.title}>
               {/* <img alt={projects.title} src={projectImage} /> */}
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{Certification.title}</h5>
                     <p>{Certification.organization}</p>
                     <p>{Certification.issueDate}</p>
                     <p>{Certification.url}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            {/* <h1>Check Out Some of My Works.</h1> */}

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {/* {projects} */}
                {certification}
            </div>

          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
