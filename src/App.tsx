import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import Specialties from './components/layout/Specialties';
import CallToAction from './components/layout/CallToAction';
import NewsSection from './components/layout/NewsSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <CallToAction />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
