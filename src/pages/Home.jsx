
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import CompanySection from "../components/Sección-empresas/Company";
import Inicio from "../components/inicio/Inicio";
import AboutUs from "../components/Sobre-nosotros/AboutUs";
import Courses from "../components/Sección-cursos/Courses";
import ChooseUs from "../components/Elige-nosotros/ChooseUs";
import Features from "../components/Sección-caracteristicas/Features";
import FreeCourse from "../components/Sección-cursos-libres/FreeCourse";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/context/PageNewsletter/PageNews";



const Home = () => {
  return (
    <Routes>
      <Route path ="../components/Header" element={<Header/>}/> 
      <Route path ="../components/Inicio" element={<Inicio/>}/> 
      <Route path ="../components/Sobre-nosotros" element={<AboutUs/>}/> 
      <Route path ="../components/Sección-empresasr" element={<CompanySection/>}/> 
      <Route path ="../components/Sección-cursos" element={<Courses/>}/> 
      <Route path ="../components/Elige-nosotros" element={<ChooseUs/>}/> 
      <Route path ="../components/Sección-caracteristicas" element={<Features/>}/> 
      <Route path ="../components/Sección-cursos-libres" element={<FreeCourse/>}/> 
      <Route path ="../components/context/PageNewsletter" element={<Newsletter/>}/> 
 
      <Footer />
    </Routes>
  );
};

export default Home;
