import React,{Fragment} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import CompanySection from "../components/Sección-empresas/Company";
import Inicio from "../components/inicio/Inicio";
import AboutUs from "../components/Sobre-nosotros/AboutUs";
import Courses from "../components/Sección-cursos/Courses";
import ChooseUs from "../components/Elige-nosotros/ChooseUs";
import Features from "../components/Sección-caracteristicas/Features";
import FreeCourse from "../components/Sección-cursos-libres/FreeCourse";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/PageNewsletter/newsletter";



const Home = () => {
  return (
    
    <BrowserRouter>

<Route path= "../components/Header/Header.jsx" element={<Header/>}/> 
    <Routes> 
      <Route path= "../components/Inicio/Inicio.jsx" element={<Inicio/>}/>
      <Route path= "../components/Sobre-nosotros/AboutUs" element={<AboutUs/>}/> 
      <Route path= "../components/Sección-empresas/Company" element={<CompanySection/>}/> 
      <Route path= "../components/Sección-cursos/Courses" element={<Courses/>}/> 
      <Route path= "../components/Elige-nosotros/ChooseUs" element={<ChooseUs/>}/> 
      <Route path= "../components/Sección-caracteristicas/Features" element={<Features/>}/> 
      <Route path= "../components/Sección-cursos-libres/FreeCourse"  element={<FreeCourse/>}/>
      <Route path=  "../components/PageNewsletter/newsletter"  element={<Newsletter/>}/>
      <Route path= "../components/Footer/Footer"element={Footer}/>
      </Routes>
    </BrowserRouter>
  
    
  );
};

export default Home;
