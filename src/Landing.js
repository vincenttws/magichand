import logo from './logo.svg';
import intelligentLogo from './intelligent_logo.svg';
import intuitiveLogo from './intuitive_logo.svg';
import moreLogo from './more_logo.svg';
import './Landing.css';
import { useState } from 'react';

const features = [
  {
    title: 'Intelligent',
    description: 'Meet our automatically generated intelligent report everyday you come visit. All you need to do is browse.',
    featurelogo: intelligentLogo
  },
  {
    title: 'Intuitive',
    description: 'Get to know your portfolio as you have seen it before. You will come and will never go, we can be sure of it.',
    featurelogo: intuitiveLogo
  },
  {
    title: 'Alot more...',
    description: 'More ways we can flash ourself. You wouldn’t be disapointed by what we are offering.',
    featurelogo: moreLogo
  }
];

function FeaturesBox({ feature }) {
  return (
      <div className="inter-font feature-box">
        <div style={{ paddingTop: "20px" }}>
          <h3 style={{ display: "inline-block", fontWeight: "bold", fontSize: "20px" }}>{feature.title}</h3>
          <img src={feature.featurelogo} alt="logo" style={{ display: "inline-block", float: "right" }} />
        </div>
        <p>{feature.description}</p>
      </div>
  );
}

function Landing() {
  return (
    <div className="App">
      <div className="top-middle">
        <header className="App-header inter-font">
          <div className="top-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="header-buttons">
              <button className="Login-button">Login</button>
              <button className="Sign-up-button">Sign Up</button>
            </div>
          </div>
          <div className="header-description">
            <div className="header-title">
              <h1 className="header-title-one">Intelligent and Intuitive<br></br>Stock Portfolio Management</h1>
            </div>
            <p className="header-text">Only the best can serve you right and we have confident to prove it to you</p>
          </div>
        </header>
        <body>
          <div className="feature-section" style={{ display: "inline-block" }}>
            <FeaturesBox feature={features[0]} style={{ display: "inline-block" }} />
            <FeaturesBox feature={features[1]} style={{ display: "inline-block" }} />
            <FeaturesBox feature={features[2]} style={{ display: "inline-block" }} />
          </div>
        </body>
      </div>
      
      <footer>
        <div className="footer-div">
          <div className="footer-text inter-font">
            <h1 style={{ fontSize: "50px", marginBottom: "20px" }}>MAGICHAND</h1>
            <p>Made with ❤️. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
