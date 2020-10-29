import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';

function Login() {
    const signIn = () => {

    }
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png" alt="" />
                <img src="https://seeklogo.net/wp-content/uploads/2015/07/new-facebook-logo-2015-400x400.png" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>Login</Button>
        </div>
    )
}

export default Login
