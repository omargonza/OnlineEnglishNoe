import React from "react";
import { Container, Row, Col } from "reactstrap";
import noeInicio from "../../assests/images/noe_inicio.png";
import CountUp from "react-countup";
import "./inicio.css";





const styles = { 
  imgNoe: {
    width: "450px",
    height: "550px",
    filter:"brightness(120%), contrast(100%),saturate(200%) "
    
}
}



const Inicio = () => {
    return (
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="inicio__img">
                <img src={noeInicio} style={styles.imgNoe} />
              </div>
            </Col>
  
            <Col lg="6" md="6">
              <div className="inicio__content">
                <h2>Welcome !!</h2>
                <p>
                 ¡Hola! ¿Cómo estás?
                 Que alegria encontrarnos por acá. Te invito a
                 recorrer este website para conocernos más 
                 sobre el recorrido de Miss. Noe-Online English,
                 nuestra oferta académica y lo que nos motiva a 
                 hacer del aprendizaje del inglés un momento de 
                 felicidad y disfrute.  Miss. Noe
                 

  
                </p>
  
                <div className="inicio__counter">
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
  
  export default Inicio;