import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div className=" text-center my-5 py-5">
            <div>
                <h2>Login </h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Input Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Ema John <Link to="/register">Create Account</Link></p>
                <div>---------Or---------</div>
                <button onClick={() => signInUsingGoogle()} className="common-btn">Google Sign In</button>
            </div>

        </div>
    );
};

export default Login;