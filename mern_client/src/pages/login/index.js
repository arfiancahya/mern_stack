import React, { Fragment } from 'react';
import '../pages.scss'

const Login = () => {
    return (
        <Fragment>
            <div className="flex-normal height-100">
                <div className="flex-normal flex-1 flex-direction-coloumn flex-content-center text-align-center">
                    <h1 className="font-color-green">Sign in to Blogture</h1>
                    <div className="text-align-center">
                        <i className="fab fa-facebook-f fa-lg"></i>
                        <i className="fab fa-google-plus-g fa-lg"></i>
                        <i className="fab fa-linkedin-in fa-lg"></i>
                    </div>
                </div>
                <div className="width-30 text-align-center background-color-red flex-normal flex-direction-coloumn flex-content-center text-align-center">
                    <h1>Admin Login</h1>
                </div>
            </div>
        </Fragment>
    );
}

export default Login;
