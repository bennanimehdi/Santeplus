/* =========================================================================
   main.jsx : assemble la page + panneau Tweaks (variations rapides).
   ========================================================================= */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#1AA0DC",
  "heroStyle": "centre",
  "headFont": "Sora",
  "radius": 20
}/*EDITMODE-END*/;

const ACCENTS = {
  "Corail": "#F2A65A",
  "Bleu": "#1AA0DC",
  "Vert": "#34B24A",
};

function App() {
  // Valeurs fixes (le panneau de réglages de l'éditeur n'est pas embarqué en production).
  const t = TWEAK_DEFAULTS;

  // Applique les réglages via variables CSS sur la racine.
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--accent", t.accent);
    r.style.setProperty("--radius", t.radius + "px");
    r.style.setProperty("--font-head", `"${t.headFont}", "Poppins", sans-serif`);
  }, [t.accent, t.radius, t.headFont]);

  return (
    <React.Fragment>
      <Navbar heroStyle={t.heroStyle} />
      <main>
        <div className="affiche-band">
          <img src="assets/affiche-2026.jpg" alt="Institut des Sciences Médicales Santé Plus — Formation des infirmiers, Tétouan" />
        </div>
        <Hero heroStyle={t.heroStyle} />
        <Filieres />
        <Fondateur />
        <Pourquoi />
        <Galerie />
        <Admission />
        <Faq />
        <Contact />
        <div className="accredit-bottom">
          <img src="assets/accreditation-ffp.png" alt="Établissement de formation professionnelle privée accrédité" />
          <span>Établissement de formation professionnelle privée accrédité</span>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
