import './App.css'; // Si tu as gardé le CSS
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
function App() {
  return (
    <div className="app-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;