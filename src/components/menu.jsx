function Menu({ pageActive, setPageActive }) {
  
  // 1. La liste des menus (Données statiques pour l'instant)
  const menuItems = ["Notes", "Etudiants", "Matières", "A propos"];

  const menuStyle = {
    display: 'flex',
    gap: '20px',
    listStyleType: 'none',
    padding: '0',
    cursor: 'pointer'
  };

  return (
    <nav>
      <ul style={menuStyle}>
        {/* 2. On utilise .map pour générer les <li> automatiquement */}
        {menuItems.map((item) => (
          <li 
            key={item} // React a besoin d'une clé unique pour les listes
            onClick={() => setPageActive(item)} // Au clic, on change l'état dans App
            style={{
              // 3. Style conditionnel : Si c'est l'item actif, on le met en bleu/gras
              fontWeight: item === pageActive ? 'bold' : 'normal',
              color: item === pageActive ? '#646cff' : 'inherit',
              textDecoration: item === pageActive ? 'underline' : 'none'
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;