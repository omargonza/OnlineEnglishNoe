
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePost from "./PageNewsletter/home-post";
import CrearPost from "./PageNewsletter/Crear-post";
import LoginNewsletter from "./PageNewsletter/Login-Newsletter";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import "./newsletter.css";


function NewApp() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/Login-Newsletter";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/home-post"> Home </Link>

        {!isAuth ? (
          <Link to="/Login-Newsletter"> Login </Link>
        ) : (
          <>
            <Link to="/Crear-post"> Crear Post </Link>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/home-post" element={<HomePost isAuth={isAuth} />} />
        <Route path="/Crear-post" element={<CrearPost isAuth={isAuth} />} />
        <Route path="/Login-Newsletter" element={<LoginNewsletter setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default NewApp;