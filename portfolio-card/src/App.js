import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { faHouse } from '@fortawesome/free-solid-svg-icons'

import {  faGithub } from '@fortawesome/free-brands-svg-icons'


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid col-md-9 py-5">


            <div className="row">
              <div className="col-lg-7 portfolio-img">
              <Link to="/"><img className="w-100" alt="" src="img/ccs.jpg" /></Link>
              </div>
                
              <div className="col-lg-5 portfolio-wrapper">
                <small className="d-block text-white text-end">Featured Project</small> 
                  <h4 className="text-white text-end">Halcyon Theme</h4>
                    <div className="description">
                      <div className="text-inner">
                        <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, 
                          and more. Available on Visual Studio Marketplace, Package Control, 
                          Atom Package Manager, and npm.</p>
                      </div>
                        <ul className="list-group list-group-horizontal list-group-flush justify-content-end right-list">
                          <li className="list-group-item bg-transparent">ReactJS</li>
                          <li className="list-group-item bg-transparent">Express</li>
                          <li className="list-group-item bg-transparent">MySQL</li>
                          <li className="list-group-item bg-transparent">Netlify</li>
                        </ul>
                        <div className="text-end"><Link to="\"><FontAwesomeIcon icon={faGithub} /></Link></div>
                    </div>                   
              </div>
            </div>
       



            <div className="row">
                <div className="col-lg-5 portfolio-wrapper">
                <small className="d-block text-white">Featured Project</small> 
                  <h4 className="text-white">Halcyon Theme</h4>
                    <div className="description-left">
                      <div className="text-inner">
                        <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, 
                          and more. Available on Visual Studio Marketplace, Package Control, 
                          Atom Package Manager, and npm.</p>
                      </div>
                        <ul className="list-group list-group-horizontal list-group-flush justify-content-start left-list">
                          <li className="list-group-item bg-transparent">ReactJS</li>
                          <li className="list-group-item bg-transparent">Express</li>
                          <li className="list-group-item bg-transparent">MySQL</li>
                          <li className="list-group-item bg-transparent">Netlify</li>
                        </ul>
                        <div className="text-start"><Link to="\"><FontAwesomeIcon icon={faGithub} /></Link></div>
                    </div>                   
              </div>

              <div className="col-lg-7 portfolio-img">
              <Link to="/"><img className="w-100" alt="" src="img/mob.jpg" /></Link>
              </div>
            </div>

        </div>
      </header>
    </div>
  );
}

export default App;
