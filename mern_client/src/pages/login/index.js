import React, { Fragment } from 'react';
import { Button, Gap, Input } from '../../component';
import '../../asset/scss/style.scss';

const Login = () => {
    return (
        <Fragment>
            <div className="model-login">
                <div className="model-login__left">
                    <h1 className="font-color-green font-size-45 font-bold">Sign in to Blogture</h1>
                    <Gap height={60}/>
                    <div className="text-align-center">
                        <i className="fab fa-facebook-f fa-lg"/>
                        <i className="fab fa-google-plus-g fa-lg margin-right-20 margin-left-20" />
                        <i className="fab fa-linkedin-in fa-lg" />
                    </div>
                    <Gap height={40}/>
                    <p className="font-color-gray-89">or use your email account</p>
                    <Gap height={20}/>
                    <div className="flex-normal flex-content-center">
                        <i className="far fa-envelope fa-lg min-width-50  input__icon--grey" />
                        <Input className="input--grey" placeholder="Email" />
                    </div>
                    <Gap height={20}/>
                    <div className="password flex-normal flex-content-center">
                        <i className="fas fa-lock fa-lg min-width-50  input__icon--grey" />
                        <Input className="input--grey" placeholder="Password" />
                    </div>
                    <Gap height={30}/>
                    <p className="font-color-black font-bold">Forgot your password</p>
                    <Gap height={40}/>
                    <Button title="Sign In" className="background-color-green width-74 padding-18 font-upper font-color-white border-radius-24 box-sizing outline-none" />
                </div>
                <div className="width-28 text-align-center background-color-gradient flex-normal flex-direction-coloumn flex-content-center text-align-center background-image background-cover">
                    <h1 className="font-size-50 font-color-white font-bold">Hello, Friend!</h1>
                    <Gap height={50}/>
                    <p className="font-color-white margin-left-40 margin-right-40">Enter your personal details and start journey with us </p>
                    <Gap height={50}/>
                    <Button title="Sign Up" className="background-color-trans width-74 padding-12 font-upper font-color-white border-radius-24 box-sizing outline-none" />
                </div>
            </div>
        </Fragment>
    );
}

export default Login;
