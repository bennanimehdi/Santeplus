/* =========================================================================
   main.jsx : assemble la page, gère la langue (FR/AR) et le sens RTL.
   ========================================================================= */

function App() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("lang") === "ar" ? "ar" : "fr"; } catch (e) { return "fr"; }
  });
  const L = CONTENT[lang];

  useEffect(() => {
    const r = document.documentElement;
    r.lang = lang;
    r.dir = L.dir;
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }, [lang]);

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--accent", "#1AA0DC");
    r.style.setProperty("--radius", "20px");
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, L }}>
      <Navbar />
      <main>
        <div className="affiche-band">
          <img src="assets/affiche-2026.jpg?v=2" alt="Institut Santé Plus — Tétouan" />
        </div>
        <Hero />
        <Filieres />
        <Fondateur />
        <Pourquoi />
        <Galerie />
        <Admission />
        <Faq />
        <Contact />
        <div className="accredit-bottom">
          <img src="assets/accreditation-ffp.png?v=2" alt={L.accreditBottom} />
          <span>{L.accreditBottom}</span>
        </div>
      </main>
      <Footer />
    </LangContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
