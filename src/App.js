import CardSearch from './components/CardSearch';
import Chooseus from './components/Chooseus';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Properties from './components/Properties';
import Testimoni from './components/Testimoni';
import Work from './components/Work';

function App() {
  return (
    <div>
      
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* CardSearch */}
      <CardSearch />

      {/* Work */}
      <Work />

      {/* Chooseus */}
      <Chooseus />

      {/* Properties */}
      <Properties />

      {/* Testimooni */}
      <Testimoni />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
