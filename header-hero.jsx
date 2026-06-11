/* =========================================================================
   header-hero.jsx : barre de navigation (bilingue + bascule de langue) + hero.
   ========================================================================= */

function Navbar() {
  const { L, lang, setLang } = useL();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("accueil");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const ids = ["accueil", "filieres", "pourquoi", "admission", "contact"];
      let cur = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) cur = id;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <header className={"nav" + (scrolled ? " nav--scrolled" : "")}>
      <div className="nav-inner">
        <a href="#accueil" className="brand" onClick={(e) => go(e, "accueil")} aria-label={L.brand.nom}>
          <span className="brand-badge">
            <img src="assets/logo-sante-plus.png?v=2" alt="Logo Institut Santé Plus" />
          </span>
          <span className="brand-text">
            <strong>{L.brand.nom}</strong>
            <em>{L.brand.ville}</em>
          </span>
        </a>

        <nav className="nav-links" aria-label="Navigation">
          {L.nav.map((l) => (
            <a key={l.id} href={"#" + l.id} onClick={(e) => go(e, l.id)} className={active === l.id ? "is-active" : ""}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="lang-btn" onClick={() => setLang(lang === "fr" ? "ar" : "fr")} aria-label="Changer de langue / تغيير اللغة">
            <Icon name="language" /> {L.langSwitch}
          </button>
          <a href="#contact" className="btn btn--cta nav-cta" onClick={(e) => go(e, "contact")}>
            {L.navCta}
          </a>
          <button
            className={"burger" + (open ? " is-open" : "")}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <div className={"mobile-menu" + (open ? " is-open" : "")}>
        {L.nav.map((l) => (
          <a key={l.id} href={"#" + l.id} onClick={(e) => go(e, l.id)}>{l.label}</a>
        ))}
        <a href="#contact" className="btn btn--cta" onClick={(e) => go(e, "contact")}>{L.navCta}</a>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------- HERO */
function Hero() {
  const { L } = useL();
  const scrollY = useScrollY();
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  const blobA = { transform: `translate3d(0, ${scrollY * 0.12}px, 0)` };
  const blobB = { transform: `translate3d(0, ${scrollY * -0.08}px, 0)` };
  const H = L.hero;

  return (
    <section id="accueil" className="hero hero--centered">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob--green" style={blobA}></span>
        <span className="blob blob--blue" style={blobB}></span>
        <span className="grid-dots"></span>
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <span className="pill"><Icon name="eco" /> {H.pill}</span>
          <h1>{H.titlePre}<span className="hl">{H.titleHl}</span>{H.titlePost}</h1>
          <p className="hero-sub">{H.sub}</p>
          <div className="hero-btns">
            <a href="#filieres" className="btn btn--primary" onClick={(e) => { e.preventDefault(); goTo("filieres"); }}>
              {H.cta1} <Icon name="arrow_forward" />
            </a>
            <a href="#contact" className="btn btn--ghost" onClick={(e) => { e.preventDefault(); goTo("contact"); }}>
              {H.cta2}
            </a>
          </div>
          <ul className="hero-reassure">
            {H.reassure.map((r) => (
              <li key={r.t}><Icon name={r.icon} /> {r.t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Navbar, Hero });
