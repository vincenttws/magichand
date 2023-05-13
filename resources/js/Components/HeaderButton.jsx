function HeaderButton({ text, url }) {

    return (
        <a href={url} className="sign-up-button login_signup_button">{text}</a>
    );
}

export default HeaderButton;