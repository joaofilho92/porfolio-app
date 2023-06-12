import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import TechStack from './components/techStack/TechStack';
import Portfolio from './components/portfolio/Portfolio';


function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Portfolio/>
        <TechStack />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
