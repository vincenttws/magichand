import logo from './logo.svg';
import './Landing.css';

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
        </body>
      </div>
      
      <footer>
        <div className="footer-div">
          <div className="footer-text inter-font">
            <h1>MAGICHAND</h1>
            <p>Made with ❤️. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
