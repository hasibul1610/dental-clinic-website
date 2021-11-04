import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLogin, setIsLogin] = useState(false);


    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const handleSignInEmail = (e) => {
        setEmail(e.target.value);


    }
    const handleSignInPassword = (e) => {
        setPassword(e.target.value);


    }
    const handleRegister = (e) => {
        e.preventDefault()
        if (!/^(?=.*[A-Za-z])/.test(password)) {
            setError("Please give at least character with one Uppercase one lowercase and numbers");
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

    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})

            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        handleSignInEmail,
        handleSignInPassword,
        handleRegister,
        createNewUser,
        processLogin,
        verifyLogin,
        toggleLogin,
        isLogin,
        error


    }

}

export default useFirebase;