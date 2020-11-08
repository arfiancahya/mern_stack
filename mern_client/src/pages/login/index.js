import React, { Fragment } from 'react';
import './login.scss'

const Login = () => {
    return (
        <Fragment>
            <div class="main-page">
                <div class="left">
                    <h1>Sign in to Blogture</h1>
                    <div className="icon-sm">
                        <i className="fab fa-facebook-f fa-lg"></i>
                        <i className="fab fa-google-plus-g fa-lg"></i>
                        <i className="fab fa-linkedin-in fa-lg"></i>
                    </div>
                </div>
                <div class="right">
                    <h1>Admin Login</h1>
                </div>
            </div>
        </Fragment>
    );
}

export default Login;
