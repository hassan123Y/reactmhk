import { useState } from 'react'; // 1. On importe le Hook useState
import Header from './components/Header';
import PageContent from './components/PageContent'; // On va le créer juste après
import Footer from './components/Footer';
import './App.css';

function App() {
  // 2. On déclare l'état. Par défaut, on est sur "Notes".
  // pageActive : la valeur actuelle
  // setPageActive : la fonction pour changer la valeur
  const [pageActive, setPageActive] = useState("Notes");

  return (
    <div className="app-container">
      {/* 3. On passe l'info et la fonction de changement au Header */}
      <Header 
        pageActive={pageActive} 
        setPageActive={setPageActive} 
      />

      {/* 4. On passe l'info de la page active au contenu */}
      <PageContent pageActive={pageActive} />

      <Footer />
    </div>
  );
}

export default App;