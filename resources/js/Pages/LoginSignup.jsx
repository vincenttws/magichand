import '../../css/landing.css';
import '../../css/login.css';
import PageFooter from '../components/PageFooter';
import NavigationHeader from '../components/NavigationHeader';
import SignUpButton from '../Components/HeaderButton';
import ValidateError from '../Components/ValidateError';

function LoginSignup({ text, url, navText,  navLink, emailError, passwordError }) {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <nav className="container">
                <NavigationHeader text={navText} url={navLink}/>
            </nav>

            <div className="container form_section">
                <form action={url} method="post">
                    <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]').content} />
                    <div style={{margin: "20px auto"}}> 
                        <label for="username">Email</label><br />
                        <input type="email" className={`${emailError && "border-red-500"}`} name="email" placeholder="Email" style={{ marginTop: "10px" }} /><br />
                        <ValidateError errorMessage={emailError}/>
                    </div>
                    <div>
                        <label for="password">Password</label><br />
                        <input type="password" className={`${passwordError && "border-red-500"}`} name="password" placeholder="Password" style={{ marginTop: "10px" }}/><br />
                        <ValidateError errorMessage={passwordError}/>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "70px"}}>
                        <input className="sign-up-button login_signup_button" type="submit" style={{ paddingBottom: "10px"}} value={text}/>
                        <a href="/" style={{ color: "rgba(59, 130, 246, 1)", cursor: "pointer", fontWeight: "bold", paddingTop: "5px" }}>Forgot Password?</a>
                    </div>
                </form>
            </div>


            <footer style={{ marginTop: "auto" }}> 
                <PageFooter />
            </footer>
        </div>
    )
}

export default LoginSignup;