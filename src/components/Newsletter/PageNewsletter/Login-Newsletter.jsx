import React from "react";
import "../newsletter.css";
import { Container, Row, Col } from "reactstrap";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginNewsletter({ setIsAuth }) {
  let navigate = useNavigate();

  const subscribirseConGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };


  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Subscribe Our Newsletter</h2>
            <div className="subscribe">
              <button className="btn"onClick={subscribirseConGoogle}>Subscribe</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoginNewsletter;
