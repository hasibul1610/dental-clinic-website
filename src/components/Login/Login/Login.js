import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Form, Container } from 'react-bootstrap';
import './Login.css';


const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const handleSignInEmail = (e) => {
        setEmail(e.target.value);


    }
    const handleSignInPassword = (e) => {
        setPassword(e.target.value);


    }
    const handleRegister = (e) => {
        e.preventDefault()
        if (!/^(?=.*[A-Za-z])/.test(password)) {
            setError("Please give at least Uppercase");
            return;
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password);


    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setError("")
                verifyLogin()
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                console.log(result.user)
                setError("")
                // ...
            })
            .catch((error) => {
                setError(error.message);
            });

    }
    const verifyLogin = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }
    const toggleLogin = (e) => {
        setIsLogin(e.target.checked);
    }

    return (
        <Container>
            <div className="login-form">
                <Form>
                    <h2 style={{ "color": "#3FCE92" }}>Please {isLogin ? "Login" : "Register"}</h2>
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={toggleLogin} type="checkbox" label="Already Registered" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleSignInEmail} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handleSignInPassword} type="password" placeholder="Password" required />
                    </Form.Group>


                    <p>{error}</p>
                    <button onClick={handleRegister} className="common-btn" type="submit">
                        {isLogin ? "Login" : "Register"}
                    </button>
                    <br />
                    <br />
                    <p>-----------Or-----------</p>
                    <br />

                    <button onClick={() => signInUsingGoogle()} className="common-btn">Google Sign In</button>
                    <br />
                    <br />
                </Form>
            </div>

        </Container>
    );
};

export default Login;