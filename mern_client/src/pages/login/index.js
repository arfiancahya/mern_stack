import React,{ Fragment }  from 'react';
import Gambar from '../../asset/images/amico.svg'
import './login.scss'

const Login = () => {
    return (
        <Fragment>
        <div class="main-page">
            <cdiv class="left">
                <img src={Gambar} alt="gambar" />
            </cdiv>
            <div class="right">
                <h1>Admin Login</h1>
            </div>
        </div>
        </Fragment>
    );
}

export default Login;
