import notesData from '../data.json'; // 1. On importe les données
import NoteDisplay from './NoteDisplay'; // 2. On importe le composant enfant
import { useState } from 'react';

function MainContent() {
  // --- État pour stocker une note aléatoire ---
  const [randomNote] = useState(() => {
    const randomIndex = Math.floor(Math.random() * notesData.length);
    return notesData[randomIndex];
  });

  // --- Affichage ---
  // On passe les données via les attributs (props) : course, grade, prof
  return (
    <main>
      {randomNote && (
        <NoteDisplay 
          course={randomNote.course}
          grade={randomNote.grade}
          prof={randomNote.prof}
        />
      )}
      
      <p>
        <small>Rechargez la page pour voir une autre note !</small>
      </p>
    </main>
  );
}

export default MainContent;