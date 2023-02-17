import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import CompanySection from "../components/Sección-empresas/Company";
import Inicio from "../components/inicio/Inicio";
import AboutUs from "../components/Sobre-nosotros/AboutUs";
import Courses from "../components/Sección-cursos/Courses";
import ChooseUs from "../components/Elige-nosotros/ChooseUs";
import Features from "../components/Sección-caracteristicas/Features";
import FreeCourse from "../components/Sección-cursos-libres/FreeCourse";
import LoginNewsletter from "../components/Newsletter/LoginNewsletter";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Inicio />
      <AboutUs />
      <CompanySection />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <LoginNewsletter />
      <Footer />
      </Fragment>
  );
};

export default Home;
