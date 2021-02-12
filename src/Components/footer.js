import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import {Link} from "react-router-dom";

class Footer extends React.Component {
    render(){
        return(
        <div className="footer-container">
            <div className="footer-icon">
                <a href="https://www.instagram.com/fidelafaizza/" className="icon">
                        <AiFillInstagram color="white" size="2rem" />
                 </a>
                 <a href="https://web.facebook.com/fidela.faustina.52" className="icon">
                        <IoLogoFacebook color="white" size="2rem"/>
                 </a>
                 <a href="https://twitter.com/twitter"  className="icon">
                        <FaTwitter color="white" size="2rem"/>
                 </a>
                 <a href="https://github.com/Fidela-Faustina"  className="icon">
                        <AiOutlineGithub color="white" size="2rem"/>
                 </a>
            </div>
            <div className="menu">
                <Link to="/" className="menu">Beranda</Link>
                <Link to="/tentangsaya" className="menu">Tentang Saya</Link>
                <Link to="/karya" className="menu">Karya</Link>
                <Link to="/kontak" className="menu">Kontak</Link>
            </div>
            <p className="copyright">&copy;{new Date().getFullYear()} Copyright | Fidela Faustina</p>
        </div>
        )
    }
}

export default Footer;
