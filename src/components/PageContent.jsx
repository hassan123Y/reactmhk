// src/components/PageContent.jsx
import NotesTable from './NotesTable';
import EtudiantsTable from './EtudiantsTable';
import MatieresTable from './MatieresTable';

function PageContent({ pageActive }) {
  
  // Style temporaire pour bien voir la zone
  const styleContent = {
    padding: '20px',
    minHeight: '300px',
    backgroundColor: '#fff',
    color: '#333'
  };

  const renderContent = () => {
    switch (pageActive) {
      case 'Notes':
        return <NotesTable />;
      case 'Etudiants':
        return <EtudiantsTable />;
      case 'Matières':
        return <MatieresTable />;
      case 'A propos':
        return <div>Ce projet est réalisé par Hassan</div>;
      default:
        return <p>Contenu du menu {pageActive} en cours de construction...</p>;
    }
  };

  return (
    <main style={styleContent} className="fade-in" key={pageActive}>
      <h2>Page : {pageActive}</h2>
      {renderContent()}
    </main>
  );
}

export default PageContent;