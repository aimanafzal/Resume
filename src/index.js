import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ContactForm from './Components/Contact';
import hader from './Components/hader';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class app extends React.Component {
   render() {
    return (
    
      <div >
        <div className="col-md-6 offset-md-3">
        
          <ContactForm />
          
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
