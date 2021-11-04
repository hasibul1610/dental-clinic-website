import useAuth from '../../../hooks/useAuth';
import { Form, Container } from 'react-bootstrap';
import './Login.css';


const Login = () => {
    const { signInUsingGoogle, toggleLogin, isLogin, error, handleRegister, handleSignInEmail, handleSignInPassword } = useAuth();



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