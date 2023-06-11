import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';

function App() {
  return (
   <>
   <Header/>

   <main className="main">
    <Home/>
    <About /> 
    <Footer/>
   </main>
   </>
  );
}

export default App;
