/* =========================================================================
   header-hero.jsx : Navbar sticky translucide, Hero parallaxe, réassurance.
   ========================================================================= */

/* ----------------------------------------------------------------- NAVBAR */
function Navbar({ heroStyle }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("accueil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Surligne le lien de la section visible.
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView ? window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" }) : null;
  };

  return (
    <header className={"nav" + (scrolled ? " nav--scrolled" : "")}>
      <div className="nav-inner">
        <a href="#accueil" className="brand" onClick={(e) => go(e, "accueil")} aria-label="Accueil — Institut Santé Plus">
          <span className="brand-badge">
            <img src="assets/logo-sante-plus.png" alt="Logo Institut Santé Plus" />
          </span>
          <span className="brand-text">
            <strong>École de Formation Paramédicale</strong>
            <em>Tétouan · 2025-2026</em>
          </span>
        </a>

        <nav className="nav-links" aria-label="Navigation principale">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={"#" + l.id}
              onClick={(e) => go(e, l.id)}
              className={active === l.id ? "is-active" : ""}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="lang-btn" title="Version arabe (à venir)" aria-label="Changer de langue : arabe (à venir)">
            <Icon name="language" /> AR
          </button>
          <a href="#contact" className="btn btn--cta nav-cta" onClick={(e) => go(e, "contact")}>
            Demander une info
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
        {NAV_LINKS.map((l) => (
          <a key={l.id} href={"#" + l.id} onClick={(e) => go(e, l.id)}>{l.label}</a>
        ))}
        <a href="#contact" className="btn btn--cta" onClick={(e) => go(e, "contact")}>Demander une info</a>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------- HERO */
function Hero({ heroStyle }) {
  const scrollY = useScrollY();
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  const blobA = { transform: `translate3d(0, ${scrollY * 0.12}px, 0)` };
  const blobB = { transform: `translate3d(0, ${scrollY * -0.08}px, 0)` };
  const visualPar = { transform: `translate3d(0, ${scrollY * -0.05}px, 0)` };

  const centered = heroStyle === "centre";

  return (
    <section id="accueil" className={"hero" + (centered ? " hero--centered" : "")}>
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob--green" style={blobA}></span>
        <span className="blob blob--blue" style={blobB}></span>
        <span className="grid-dots"></span>
      </div>

      <a
        href="#direction"
        className="hero-seal hero-seal--left"
        onClick={(e) => { e.preventDefault(); goTo("direction"); }}
        aria-label="Établissement accrédité — formation professionnelle privée"
        title="Établissement accrédité"
      >
        <img src="assets/accreditation-ffp.png" alt="Établissement accrédité" />
      </a>
      <a
        href="#direction"
        className="hero-seal hero-seal--right"
        onClick={(e) => { e.preventDefault(); goTo("direction"); }}
        aria-hidden="true"
        tabIndex={-1}
      >
        <img src="assets/accreditation-ffp.png" alt="" />
      </a>

      <div className="hero-inner">
        <div className="hero-copy">
          <Reveal as="span" className="pill">
            <Icon name="eco" /> École de formation paramédicale
          </Reveal>
          <Reveal as="h1" delay={60}>
            Devenez un professionnel de la santé à <span className="hl">Tétouan</span>
          </Reveal>
          <Reveal as="p" delay={140} className="hero-sub">
            L'École de Formation Paramédicale forme les soignants de demain à Tétouan,
            à travers trois filières et un encadrement de proximité.
          </Reveal>
          <Reveal className="hero-btns" delay={220}>
            <button className="btn btn--primary" onClick={() => goTo("filieres")}>
              Découvrir nos filières <Icon name="arrow_forward" />
            </button>
            <button className="btn btn--ghost" onClick={() => goTo("contact")}>
              Nous contacter
            </button>
          </Reveal>

          <Reveal className="hero-reassure" delay={300}>
            {[
              { icon: "category", t: "3 filières paramédicales" },
              { icon: "verified", t: "Établissement accrédité" },
              { icon: "medical_information", t: "Encadrement médical de haut niveau" },
            ].map((r) => (
              <span key={r.t} className="reassure-item">
                <Icon name={r.icon} /> {r.t}
              </span>
            ))}
          </Reveal>
        </div>

        {!centered && (
          <Reveal className="hero-visual" delay={120} style={visualPar}>
            <Placeholder legende="étudiants en blouse — ambiance lumineuse" tone="blue" radius={28} className="hero-ph" />
            <div className="hero-float hero-float--a">
              <span className="hf-ico hf-ico--green"><Icon name="verified" /></span>
              <div>
                <strong>Accrédité</strong>
                <em>établissement reconnu</em>
              </div>
            </div>
            <div className="hero-float hero-float--b">
              <span className="hf-ico hf-ico--blue"><Icon name="category" /></span>
              <div>
                <strong>3 filières</strong>
                <em>paramédicales</em>
              </div>
            </div>
          </Reveal>
        )}
      </div>

      <div className="hero-wave" aria-hidden="true"></div>
    </section>
  );
}

Object.assign(window, { Navbar, Hero });
