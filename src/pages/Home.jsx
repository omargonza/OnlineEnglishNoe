import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import CompanySection from "../components/Company-section/Company";
import Inicio from "../components/inicio/Inicio";
import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";
import Newsletter from "../components/Newsletter/Newsletter";
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
      <Newsletter />
      <Footer />
      </Fragment>
  );
};

export default Home;
