import logo from './logo.svg';
import logoWhite from './logo_white.svg';
import intelligentLogo from './intelligent_logo.svg';
import intuitiveLogo from './intuitive_logo.svg';
import moreLogo from './more_logo.svg';
import './Landing.css';
import FeaturesBox from './components/FeaturesBox';
import SignupButton from './components/SignupButton';

const features = [
  {
    title: 'Intelligent',
    description: 'Meet our automatically generated intelligent report everyday you come visit. All you need to do is browse.',
    featureLogo: intelligentLogo
  },
  {
    title: 'Intuitive',
    description: 'Get to know your portfolio as you have seen it before. You will come and will never go, we can be sure of it.',
    featureLogo: intuitiveLogo
  },
  {
    title: 'Alot more...',
    description: 'More ways we can flash ourself. You wouldn’t be disapointed by what we are offering.',
    featureLogo: moreLogo
  }
];

function Landing() {
  return (
    <div>
      <nav className="app-header container">
        <div className="top-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="header-buttons">
            <button className="login-button">Login</button>
            <SignupButton text="Sign Up" />
          </div>
        </div>
      </nav>
      <div className="header-description">
        <h1 className="header-title">Intelligent and Intuitive<br />Stock Portfolio Management</h1>
        <p className="header-text">Only the best can serve you right and we have confident to prove it to you</p>
      </div>
      <div>
        <div className="feature-section container">
          {features.map((feature) => <FeaturesBox {...feature} />)}
        </div>
      </div>
      
      <footer>
        <div className="container">
          <img src={logoWhite} className="App-logo" alt="logo" />
          <p>Made with ❤️. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
