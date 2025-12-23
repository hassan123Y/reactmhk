// src/components/Footer.jsx
function Footer() {
  // On récupère juste l'année
  const currentYear = new Date().getFullYear(); 

  return (
    <footer>
      {/* Remplace [TonPrénom].[TonNom] par tes infos */}
      <p>© {currentYear} - Gemini.AI, Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;