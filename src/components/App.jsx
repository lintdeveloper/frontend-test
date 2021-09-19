import '../App.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero'

function App() {
  return (
    <div className="app--container">
      <div className="container">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
