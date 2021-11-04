import './App.css';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Doctors from './components/Doctors/Doctors';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Details from './components/Home/Details/Details';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import Register from './components/Login/Register/Register';
function App() {
  return (
    <>

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute exact path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </>
  );
}

export default App;
