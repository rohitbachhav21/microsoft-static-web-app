import './App.css';
import BackToTopButton from './Components/BackToTop';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default App;
