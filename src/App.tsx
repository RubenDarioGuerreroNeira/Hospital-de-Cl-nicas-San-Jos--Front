import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/layout/Hero';
import Specialties from './components/layout/Specialties';
import CallToAction from './components/layout/CallToAction';
import NewsSection from './components/layout/NewsSection';
import Footer from './components/layout/Footer';
import Carreras from './pages/Carreras';
import MedicinaEnfermeria from './pages/MedicinaEnfermeria';
import SuEstancia from './pages/SuEstancia';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';


function App() {
  return (
    <div className="pt-[60px] md:pt-[72px]">
      <Router>
        <div className="font-sans">
          <Navbar />
          <main>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/su-estancia" element={<SuEstancia />} />
              <Route path="/carreras" element={<Carreras />} />
              <Route path="/medicina-enfermeria" element={<MedicinaEnfermeria />} />
              <Route path="/especialidades" element={<Specialties />} />


            </Routes>

          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}
export default App;




// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/layout/Navbar';
// import Hero from './components/layout/Hero';
// import Specialties from './components/layout/Specialties';
// import CallToAction from './components/layout/CallToAction';
// import NewsSection from './components/layout/NewsSection';
// import Footer from './components/layout/Footer';
// import Carreras from './pages/Carreras';
// import MedicinaEnfermeria from './pages/MedicinaEnfermeria';
// import SuEstancia from './pages/SuEstancia';

// // Componente para la página de inicio
// const Home = () => {
//   return (
//     <>
//       <Hero />
//       <Specialties />
//       <CallToAction />
//       <NewsSection />
//     </>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <div className="font-sans">
//         <Navbar />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/carreras" element={<Carreras />} />
//             <Route path="/medicina-enfermeria" element={<MedicinaEnfermeria />} />
//             <Route path="/su-estancia" element={<SuEstancia />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


