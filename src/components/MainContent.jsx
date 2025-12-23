// src/components/MainContent.jsx
function MainContent() {
  // 1. On récupère la date actuelle en JavaScript (avant le return)
  const date = new Date();

  // 2. On formate les éléments demandés
  // Astuce : toLocaleDateString permet d'avoir le format français facilement
  const dateDuJour = date.toLocaleDateString("fr-FR", {
    weekday: "long", // Lundi
    year: "numeric", // 2023
    month: "long",   // Octobre
    day: "numeric",  // 23
  });

  const heureActuelle = date.toLocaleTimeString("fr-FR");

  // 3. On injecte les variables dans le JSX avec des accolades {}
  return (
    <main>
      <p>
        Bonjour, on est le {dateDuJour} et il est {heureActuelle}
      </p>
    </main>
  );
}

export default MainContent;