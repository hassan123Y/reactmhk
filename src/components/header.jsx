// src/components/Header.jsx

// Tu peux importer une image ici si tu l'as mise dans le dossier assets
// import monLogo from '../assets/ton-logo.png'; 

function Header() {
  return (
    <header>
      {/* Remplace le src par le chemin de ton logo ou la variable importée */}
      <img src="/vite.svg" alt="Logo Formation" width={50} /> 
      <h1>Introduction à React</h1>
      <h2>A la découverte des premières notions de React</h2>
    </header>
  );
}

export default Header;