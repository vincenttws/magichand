import logoWhite from '../../images/logo_white.svg';

function PageFooter() {

    return (
        <div className="container">
            <img src={logoWhite} className="App-logo" alt="logo" />
            <p>Made with ❤️. All rights reserved</p>
        </div>
    );
}

export default PageFooter;