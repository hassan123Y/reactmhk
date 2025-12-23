// src/components/NoteDisplay.jsx

// On reçoit "props" en argument. 
// Ici j'utilise la destructuration { title, value } pour simplifier le code
function NoteDisplay({ course, grade, prof }) {
  
  // Petit style en ligne pour faire joli (tu peux le mettre dans un CSS à part)
  const cardStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '300px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
    color: '#333'
  };

  return (
    <div style={cardStyle}>
      <h3>Matière : {course}</h3>
      <p style={{ fontSize: '2em', fontWeight: 'bold', color: grade >= 10 ? 'green' : 'red' }}>
        Note : {grade} / 20
      </p>
      <p><i>Enseignant : {prof}</i></p>
    </div>
  );
}

export default NoteDisplay;