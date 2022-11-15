import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
 


<div className="container-fluid col-md-9 py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 portfolio-img">
                <Link to="/"> 
                <img className="w-100" alt="" src="img/ccs.jpeg" />
                </Link>
                </div>
                
                <div className="col-lg-5 portfolio-wrapper">
                  <small className="d-block text-white text-end">Featured Project</small> 
                  <h4 className="text-white text-end">Halcyon Theme</h4>
                    <div className="text-wrapper">
                        <div className="text-inner">
                        <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, 
                          and more. Available on Visual Studio Marketplace, Package Control, 
                          Atom Package Manager, and npm.
                        </p>
                        </div>
                        <p className="text-end">VS Code, Sublime Text, Atom, iTerm2, Hyper</p>
                    </div>

                   
                </div>
            </div>
        </div>
    </div>



{/* 

    <div className="container-fluid py-5">
        <div className="container pt-5">
            <div className="row">
            <div className="col-lg-6 pt-5 pb-lg-5">
                    <div className="text-right bg-white p-4 p-lg-5 my-lg-2">
                        <h2 className="mb-3">Quest International Travel & Tours</h2>
                        <p>
                        As we strive for good service motivated by our mission to establish successful, 
                        long-term, and great connections with our clients and opening doors for travel 
                        opportunities to individuals throughout the world, quality and cost 
                        go hand in hand.
                        </p>
                    </div>
                    <p className="text-white">VS Code, Sublime Text, Atom, iTerm2, Hyper</p>
                </div>

                <div className="col-lg-6">
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 card-img" alt="" src="img/couple.jpg" />
                    </div>
                </div>
                
            </div>
        </div>
    </div> */}


      </header>
    </div>
  );
}

export default App;
