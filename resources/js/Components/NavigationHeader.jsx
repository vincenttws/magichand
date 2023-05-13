import logo from '../../images/logo.svg';
import HeaderButton from './HeaderButton';


function NavigationHeader({ text, url }) {
    return (
        <div className="top-header">
            <a href="/"><img src={logo} className="app-logo" alt="logo" /></a>
            <div className="header-buttons">
                <HeaderButton text={text} url={url} />
            </div>
        </div>
    );
}


export default NavigationHeader;