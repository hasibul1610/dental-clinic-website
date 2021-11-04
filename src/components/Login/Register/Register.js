import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <div>
                <h2>Register Here</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter Email " />
                    <br />
                    <input type="password" name="" id="" placeholder="Give Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Again Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already Have an Account <Link to="/login">Login</Link></p>

                <p>---------Or--------</p>

                <button onClick={() => signInUsingGoogle()} className="common-btn">Google Sign In</button>
            </div>

        </div>
    );
};

export default Register;