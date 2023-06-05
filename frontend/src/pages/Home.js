import React from "react";
import "../components/components-style/Home.css";
import globe from'../assests/home-globe.png';
import CryptoStats from '../components/CryptoStats'
import CryptoGlobal from '../components/cryptoGlobal';
function Home() {
  return (
    <div>
      <div className="our-website">
        <div className="first-desc">
         
          <p>Your access to CryptoCurrency</p>
          <p>
            Welcome to our crypto website, your ultimate destination for
            up-to-date cryptocurrency prices, latest news, exchanges, and insights
            into the world of crypto.
          </p>
        </div>
        <div className="second-desc">
       
          <img src={globe} alt="Globe" className="globe-image" />
        </div>
      </div>
      
      <CryptoStats/>
      <CryptoGlobal/>
    </div>
  );
}

export default Home;
