import React, { Fragment } from 'react';
import { Input } from '../../component';
import '../pages.scss'

const Login = () => {
    return (
        <Fragment>
            <div className="flex-normal height-100">
                <div className="flex-normal flex-1 flex-direction-coloumn flex-content-center text-align-center">
                    <h1 className="font-color-green">Sign in to Blogture</h1>
                    <div className="text-align-center">
                        <i className="fab fa-facebook-f fa-lg"/>
                        <i className="fab fa-google-plus-g fa-lg margin-right-20 margin-left-20" />
                        <i className="fab fa-linkedin-in fa-lg" />
                    </div>
                    <p className="font-color-gray-89">or use your email account</p>
                    <div className="login flex-normal flex-content-center">
                        <i className="far fa-envelope fa-lg min-width-50  background-color-grey padding-top-13 padding-left-10 padding-btm-13 border-top-left-10 border-btm-left-10" />
                        <Input className="width-250 padding-10 border-top-right-10 border-btm-right-10 outline-none box-sizing border-none background-color-grey" placeholder="Email" />
                    </div>
                    <div className="password flex-normal flex-content-center">
                        <i className="fas fa-lock fa-lg min-width-50  background-color-grey padding-top-13 padding-left-10 padding-btm-13 border-top-left-10 border-btm-left-10" />
                        <Input className="width-250 padding-10 border-top-right-10 border-btm-right-10 outline-none box-sizing border-none background-color-grey" placeholder="Password" />
                    </div>
                </div>
                <div className="width-30 text-align-center background-color-red flex-normal flex-direction-coloumn flex-content-center text-align-center">
                    <h1>Hello Friend</h1>
                    <p>Enter your personal details and start journey with us </p>
                </div>
            </div>
        </Fragment>
    );
}

export default Login;
