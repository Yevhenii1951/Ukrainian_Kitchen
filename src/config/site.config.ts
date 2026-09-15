export const siteConfig = {
  title: "Borschtsch & Pampuschky",
  description: "Rezepte der ukrainischen Küche",
  navItems: [
    { href: "/", label: "Rezepte" },
    { href: "/ingredients", label: "Zutaten" },
    { href: "/about", label: "Über uns" }
  ],
  pagesContent: {
    "/": {
      content: "Willkommen bei unseren ukrainischen Rezepten..."
    },
    "/ingredients": {
      content: "Traditionelle Zutaten der ukrainischen Küche..."
    },
    "/about": {
      content: `
        <p>
          Die ukrainische Küche ist eine lebendige Mischung aus herzhaften Fleischgerichten,
          aromatischer Backwaren und zarten Milchprodukten – ein Spiegel der reichen
          Geschichte und Gastfreundschaft des ukrainischen Volkes.
        </p>
          <br/>
        <h2>Die wichtigsten Gerichte der ukrainischen Küche</h2>
          <br/>
         <ul>
          <li>
            <strong>Borschtsch</strong> – die ikonische Rote-Bete-Suppe mit Fleisch,
            Kartoffeln und saurer Sahne. Das Herzstück jeder ukrainischen Familie.
          </li>
          <li>
            <strong>Deruny</strong> – knusprige Kartoffelpuffer, serviert mit saurer
            Sahne oder Schmand. Einfach und unvergleichlich.
          </li>
          <li>
            <strong>Holubtsi</strong> – Weinkrautblätter gefüllt mit Reis und Hackfleisch,
            gedünstet in Tomatensauce. Ein Festgericht.
          </li>
          <li>
            <strong>Pampuschky</strong> – lockere Teigbrötchen, reichlich mit Knoblauchbutter
            und frischem Dill beträufelt. Die Seele des Borschtsch-Erlebnisses.
          </li>
          <li>
            <strong>Kotelett nach Kiew</strong> – paniertes Hühnerbrötchen mit geschmolzener
            Butter im Inneren. Ein Klassiker der ukrainischen Gastronomie.
          </li>
        </ul>
      `
    }
  }
};