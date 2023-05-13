import intelligentLogo from '../../images/intelligent_logo.svg';
import intuitiveLogo from '../../images/intuitive_logo.svg';
import moreLogo from '../../images/more_logo.svg';
import hero from '../../images/hero.svg';
import '../../css/landing.css';
import FeaturesBox from '../components/FeaturesBox';
import PageFooter from '../components/PageFooter';
import logo from '../../images/logo.svg';
import HeaderButton from '../Components/HeaderButton';

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

function Landing({ isLogin }) {
    return (
        <div>
            <nav className="app-header container">
              <div className="top-header">
                <a href="/"><img src={logo} className="app-logo" alt="logo" /></a>
                <div className="header-buttons">
                  {isLogin ? (
                    <a href="/dashboard" className="login-button login_signup_button">Dashboard</a>
                  ) : (
                    <a href="/loginp" className="login-button login_signup_button">Login</a>
                  )}
                  {isLogin ? (
                    <HeaderButton text="Logout" url=""/>
                  ) : (
                    <HeaderButton text="Sign Up" url="/signup"/>
                  )}
                </div>
              </div>
            </nav>
            <div className="header-description">
                <h1 className="header-title">Intelligent and Intuitive<br />Stock Portfolio Management</h1>
                <p className="header-text">Only the best can serve you right and we have confident to prove it to you</p>
            </div>

            <div className="container">
                <img src={hero} className="hero_image" alt="logo" />
                <div className="connector"></div>
                <div className="feature-section">
                    {features.map((feature) => <FeaturesBox {...feature} />)}
                </div>
            </div>
        
            <footer>
                <PageFooter />
            </footer>
        </div>
    );
}

export default Landing;
