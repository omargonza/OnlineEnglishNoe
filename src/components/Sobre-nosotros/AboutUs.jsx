import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img3 from "../../assests/images/img3.png";
import CountUp from "react-countup";
import "./about.css";



const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={Img3} alt="" className="w-55" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>Sobre Nosotros</h2>
              <p>
               Miss.Noe-Online English nace de la capacidadd de reinvención
               que habita en su mentora y en su equipo.
               En contexto de pandemia muchos nos hemos encontrado en 
               el desafio de re pensar nuestras practicas y replantear
               el trabajo.No fuimos la exepción.
               Gracias a saberes adquiridos previamente para un proyecto
               online a futuro pudimos diseñar una metodologia de trabajo a
               distancia, sincronica y asincrónica en la que el aprendizaje 
               del ideoma fluye en encuentros dinamicos donde la exploración
               y el disfrute son ejes principales.

              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
