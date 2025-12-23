// src/components/PageContent.jsx
function PageContent({ pageActive }) {
  
  // Style temporaire pour bien voir la zone
  const styleContent = {
    padding: '20px',
    minHeight: '300px',
    backgroundColor: '#fff',
    color: '#333'
  };

  return (
    <main style={styleContent}>
      <h2>Page : {pageActive}</h2>
      <p>Contenu du menu {pageActive} en cours de construction...</p>
    </main>
  );
}

export default PageContent;