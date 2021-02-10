import React from "react";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

class Kontak extends React.Component {
    render(){
        return(
    <div className="title">
        <h1>Hubungi Kami</h1>
        <div className="kontak-wraped">
            <div className="kontak-info">
                <div className="kontak-card">
                <a href="https://mail.google.com/" className="card-info">
                        <MdEmail color="white" size="2.5rem" />
                 </a>
                <p>fidelafaustina@gmail.com</p>
                </div>

                <div className="kontak-card">
                <a href="#" className="card-info">
                        <MdCall color="white" size="2.5rem"/>
                 </a>
                <p>0812345678910</p>
                </div>

                <div className="kontak-card">
                <a href="#" className="card-info">
                        <SiGooglemaps color="white" size="2.5rem"/>
                 </a>
                <p>Tulungagung, Jawa Timur</p>
                </div>
            </div>
         </div>
    </div>
        )
    }
}

export default Kontak;