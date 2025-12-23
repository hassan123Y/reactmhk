import Menu from './Menu';

// On récupère les props envoyées par App
function Header({ pageActive, setPageActive }) {
  return (
    <header style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <img src="/vite.svg" alt="Logo Formation" width={50} /> 
        <div>
            <h1>Introduction à React</h1>
            <h2>A la découverte des premières notions de React</h2>
        </div>
      </div>
      
      {/* On transmet les props au Menu */}
      <Menu pageActive={pageActive} setPageActive={setPageActive} /> 
    </header>
  );
}

export default Header;