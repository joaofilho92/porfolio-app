import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Banner from './components/Banner/Banner';
import MyNavBar from './components/NavBar/MyNavBar.jsx';
import Stack from './components/Stack/Stack';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Banner />
      <Stack />
      <AboutMe/>
    </div>
  );
}

export default App;
