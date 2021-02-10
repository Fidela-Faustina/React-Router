import React from "react";
import Utama from "./Components/utama";
import Footer from "./Components/footer";
import {Link} from "react-router-dom";
import logo from "./images/logo.png";
import "./App.css";

class App extends React.Component {
  render (){
    return (
    /****************************** NAVBAR ************************************/
      <div> 
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container">
  <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Beranda</Link>
            </li>
            <li className="nav-item">
              <Link to="tentangsaya" className="nav-link">Tentang Saya</Link>
            </li>
            <li className="nav-item">
              <Link to="karya" className="nav-link">Karya</Link>
            </li>
            <li className="nav-item">
              <Link to="kontak" className="nav-link">Kontak</Link>
            </li>
          </ul>
        </div>
  </div>
</nav>
      <Utama />
      <Footer />
      </div>
    );
  }
}
 
export default App;