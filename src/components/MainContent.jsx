import notesData from '../data.json'; // 1. On importe les données
import NoteDisplay from './NoteDisplay'; // 2. On importe le composant enfant

function MainContent() {
  // --- Fonction pour trier aléatoirement ---
  const getRandomNote = () => {
    const randomIndex = Math.floor(Math.random() * notesData.length);
    return notesData[randomIndex];
  };

  // On exécute la fonction pour avoir une note
  const randomNote = getRandomNote();

  // --- Affichage ---
  // On passe les données via les attributs (props) : course, grade, prof
  return (
    <main style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Détail d'une note (Aléatoire)</h2>
      
      <NoteDisplay 
        course={randomNote.course}
        grade={randomNote.grade}
        prof={randomNote.prof}
      />
      
      <p>
        <small>Rechargez la page pour voir une autre note !</small>
      </p>
    </main>
  );
}

export default MainContent;