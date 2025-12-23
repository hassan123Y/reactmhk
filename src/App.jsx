import './App.css'; // Si tu as gardé le CSS
import Header from './components/Header';
import MainContent from './components/MainContent';
function App() {
  return (
    <div className="app-container">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;