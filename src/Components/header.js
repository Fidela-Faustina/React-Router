import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className="header-wraper">
         <div className="header-info">
            <h1>Selamat Datang di Website ini</h1>
            <Typed
                className="header-typed-text"
                strings={["Assalamu'alaikum wr. wb","Kalian Berada di Beranda"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <Link to="/kontak" className="header-btn">Kontak</Link>
         </div>
         <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#ffb633"
              }
            }
          }
        }}/>
    </>
    </div>

        )
    }
}

export default Header;
