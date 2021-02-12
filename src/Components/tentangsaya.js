import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

class TentangSaya extends React.Component {
    render(){
        return(
        <div className="about-container">
        <div className="about">
            <div className="inner-section">
                <h1>Tentang Saya !!</h1>
                <p className="text">
                Halo Sahabat, Nama saya Fidela Faustina Faizza, Saya berasal dari Tulungagung, 
                Sekarang saya duduk di bangku kelas XI RPL 4
                di sekolah tercinta SMK TELKOM MALANG, 
                Jika kalian ingin mengenal saya lebih dekat, 
                kalian bisa hubungi akun sosmed saya di bawah ini, salam kenal :)
                </p>
            <div className="social-container">
                 <a href="https://www.instagram.com/fidelafaizza/" className="instagram social">
                        <AiFillInstagram  size="2.5rem" />
                 </a>
                 <a href="https://web.facebook.com/fidela.faustina.52" className="facebook social">
                        <IoLogoFacebook  size="2.5rem"/>
                 </a>
                 <a href="https://twitter.com/twitter" className="twitter social">
                        <FaTwitter  size="2.5rem"/>
                 </a>
                 <a href="https://github.com/Fidela-Faustina" className="twitter social">
                        <AiOutlineGithub  size="2.5rem"/>
                 </a>
            </div>
            </div>
        </div>
        </div>
        )
    }
}

export default TentangSaya;
