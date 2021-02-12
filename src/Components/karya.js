import React from "react";
import poster1 from "../images/poster1.svg";
import poster2 from "../images/poster2.svg";
import poster3 from "../images/poster3.svg";
import poster4 from "../images/poster4.svg";
import poster5 from "../images/poster5.svg";
import poster6 from "../images/poster6.svg";

class Karya extends React.Component {
    render (){
        return (
        <div className="karya-title">
            <h1>Galeri Poster</h1>
        <div className="karya-container">
           <div className="blog-poster">
                <div className="poster">
                    <img className="poster-img" src={poster1}></img>
                    <div className="poster-caption">
                        <h3>"Kita Indonesia, Satu Nusa Satu Bangsa"</h3>
                        <span class="date">July 13, 2020</span>
                    </div>
                </div>
                <div className="poster">
                    <img className="poster-img" src={poster2}></img>
                    <div className="poster-caption">
                        <h3>"Jangan biarkan otakmu kurang gizi karena malas membaca"</h3>
                        <span class="date">July 13, 2020</span>
                    </div>
                </div>
                <div className="poster">
                    <img className="poster-img" src={poster3}></img>
                    <div className="poster-caption">
                        <h3>"Jangan lupa literasi generasi muda!"</h3>
                        <span class="date">July 13, 2020</span>
                    </div>
                </div>
                <div className="poster">
                    <img className="poster-img" src={poster4}></img>
                    <div className="poster-caption">
                        <h3>"Tekadku untuk sukses sudah bulat, pandemi hanya rintangan kecil bagiku"</h3>
                        <span class="date">July 13, 2020</span>
                    </div>
                </div>
                <div className="poster">
                    <img className="poster-img" src={poster5}></img>
                    <div className="poster-caption">
                        <h3>"Lestarikan bahasa, bersama kita amankan jati diri bangsa"</h3>
                        <span class="date">July 13, 2020</span>
                    </div>
                </div>
                <div className="poster">
                    <img className="poster-img" src={poster6}></img>
                    <div className="poster-caption">
                        <h3>"Tidak ada ruginya membaca buku, yang rugi itu jika kita membuang-buang waktu"</h3>
                        <span class="date">July 13, 2020</span>
                    </div>
                </div>
           </div>
        </div>
        </div>
        )
    }
}

export default Karya;
