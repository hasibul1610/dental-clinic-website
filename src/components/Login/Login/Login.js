import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className=" text-center my-5 py-5">
            <button onClick={() => signInUsingGoogle()} className="common-btn">Google Sign In</button>
        </div>
    );
};

export default Login;