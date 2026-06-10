/* =========================================================================
   Institut Santé Plus — Tétouan
   data.jsx : contenu (FR), hooks d'animation, atomes UI réutilisables.
   ------------------------------------------------------------------------
   ZONES À PERSONNALISER : chiffres clés, témoignages, photos (placeholders).
   Coordonnées réelles fournies par le client.
   ========================================================================= */

const { useState, useEffect, useRef, useCallback } = React;

/* ---------------------------------------------------------------- CONTENU */

const CONTACT = {
  adresse: "50 Av. Hassan II, Tétouan",
  ville: "Tétouan, Maroc",
  tel: "05 39 71 30 46",
  telLink: "+212539713046",
  email: "contact@institutsanteplus.com",
  whatsapp: "+212539713046",
};

// Identité de l'établissement (✅ données vérifiées du logiciel de gestion).
const ECOLE = {
  nom: "École de Formation Paramédicale",
  ville: "Tétouan",
  annee: "2025-2026",
};

const NAV_LINKS = [
  { id: "accueil", label: "Accueil" },
  { id: "filieres", label: "Filières" },
  { id: "pourquoi", label: "Pourquoi nous" },
  { id: "admission", label: "Admission" },
  { id: "contact", label: "Contact" },
];

// Chiffres clés — ✅ DONNÉES VÉRIFIÉES (année 2025-2026).
const STATS = [
  { value: 296, suffix: "", label: "étudiants en 2025-2026" },
  { value: 3, suffix: "", label: "filières paramédicales" },
  { value: 18, suffix: "", label: "membres de l'équipe" },
  { value: 9, suffix: "", label: "enseignants" },
];

// Filières — ✅ noms, effectifs et niveaux vérifiés. Durées ⚠️ à confirmer (sauf Polyvalent).
const FILIERES = [
  {
    icon: "healing",
    nom: "Aide-Soignant",
    duree: "1 à 2 ans",
    dureeConfirmer: true,
    effectif: 56,
    niveaux: ["1ère année"],
    desc: "Accompagner les patients dans les gestes du quotidien et assister l'équipe soignante avec bienveillance.",
    tone: "green",
  },
  {
    icon: "medical_services",
    nom: "Infirmier Auxiliaire",
    duree: "2 ans",
    dureeConfirmer: true,
    effectif: 57,
    niveaux: ["1ère année", "2ème année"],
    desc: "Réaliser les soins de base et seconder l'infirmier dans la prise en charge des patients.",
    tone: "blue",
  },
  {
    icon: "vaccines",
    nom: "Infirmier Polyvalent",
    duree: "3 ans",
    dureeConfirmer: false,
    effectif: 183,
    niveaux: ["1ère année", "2ème année", "3ème année"],
    desc: "Maîtriser l'ensemble des soins infirmiers et intervenir dans les différents services de santé.",
    tone: "green",
  },
];

// Atouts — ancrés sur les données vérifiées ; le dernier reste un placeholder explicite.
const ATOUTS = [
  { icon: "diversity_3", titre: "Un encadrement de proximité", texte: "Une équipe de 18 personnes au service de 296 étudiants." },
  { icon: "category", titre: "Trois filières paramédicales", texte: "Aide-soignant, infirmier auxiliaire et infirmier polyvalent." },
  { icon: "school", titre: "Un cursus complet sur 3 ans", texte: "La filière infirmier polyvalent se déroule sur trois années." },
  { icon: "payments", titre: "Des frais accessibles", texte: "À partir de 14 200 MAD par an, payables en 11 mensualités." },
  { icon: "co_present", titre: "Un corps enseignant dédié", texte: "9 enseignants permanents et vacataires encadrent les promotions." },
  { icon: "local_hospital", titre: "Stages en milieu hospitalier", texte: "[À compléter : hôpitaux et cliniques partenaires.]" },
];

const GALERIE = [
  { legende: "salle de pratique", tone: "green", span: 2 },
  { legende: "laboratoire", tone: "blue", span: 1 },
  { legende: "étudiants en blouse", tone: "blue", span: 1 },
  { legende: "cours magistral", tone: "green", span: 1 },
  { legende: "matériel de soin", tone: "green", span: 1 },
  { legende: "espace commun", tone: "blue", span: 2 },
];

// Témoignages — ⚠️ à recueillir auprès d'anciens étudiants. Placeholders explicites (ne pas inventer).
const TEMOIGNAGES = [
  { nom: "[Nom de l'ancien étudiant]", filiere: "Infirmier Polyvalent", citation: "Témoignage à recueillir auprès d'un ancien étudiant.", tone: "blue", placeholder: true },
  { nom: "[Nom de l'ancien étudiant]", filiere: "Aide-Soignant", citation: "Témoignage à recueillir auprès d'un ancien étudiant.", tone: "green", placeholder: true },
  { nom: "[Nom de l'ancien étudiant]", filiere: "Infirmier Auxiliaire", citation: "Témoignage à recueillir auprès d'un ancien étudiant.", tone: "green", placeholder: true },
];

const ADMISSION = [
  { num: "1", icon: "description", titre: "Candidature", texte: "Déposez votre dossier en ligne ou sur place." },
  { num: "2", icon: "forum", titre: "Entretien", texte: "Un échange pour comprendre votre projet." },
  { num: "3", icon: "how_to_reg", titre: "Inscription", texte: "Confirmez votre place dans la filière choisie." },
  { num: "4", icon: "celebration", titre: "Rentrée", texte: "Rejoignez votre promotion et commencez." },
];

const FAQ = [
  { q: "Quelles filières propose l'école ?", r: "Trois filières paramédicales : aide-soignant, infirmier auxiliaire et infirmier polyvalent." },
  { q: "Quelle est la durée des formations ?", r: "Le cursus d'infirmier polyvalent se déroule sur 3 ans. Les durées des filières aide-soignant et infirmier auxiliaire sont en cours de confirmation." },
  { q: "Quels sont les frais de scolarité ?", r: "Frais d'inscription : 1 000 MAD à la rentrée, puis 1 200 MAD par mois sur 11 mensualités, soit environ 14 200 MAD par an. Des réductions peuvent être accordées au cas par cas." },
  { q: "Quelles sont les conditions d'accès ?", r: "[À compléter : niveau scolaire requis, âge et modalités d'admission.]" },
  { q: "Le diplôme est-il reconnu ?", r: "[À compléter : diplôme délivré et reconnaissance officielle.]" },
  { q: "Y a-t-il des stages en milieu hospitalier ?", r: "[À compléter : hôpitaux et cliniques partenaires, durée des stages.]" },
];

/* ----------------------------------------------------------------- HOOKS  */

// Révèle un élément au scroll (fade/slide). Renvoie une ref + l'état visible.
function useReveal(options) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setVisible(true); return; }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setVisible(true); io.unobserve(e.target); }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px", ...(options || {}) }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

// Compteur animé qui démarre quand l'élément devient visible.
function useCounter(target, visible, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let raf, start;
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const step = (ts) => {
      if (start == null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.round(ease(p) * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, target, duration]);
  return val;
}

// Valeur de défilement de la page (pour la parallaxe douce).
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { setY(window.scrollY); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

/* ------------------------------------------------------------- ATOMES UI  */

// Icône Material Symbols Rounded.
function Icon({ name, className, style }) {
  return (
    <span className={"material-symbols-rounded" + (className ? " " + className : "")} style={style} aria-hidden="true">
      {name}
    </span>
  );
}

// Bloc révélé au scroll.
function Reveal({ children, delay = 0, as = "div", className, style }) {
  const [ref, visible] = useReveal();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={"reveal" + (visible ? " is-visible" : "") + (className ? " " + className : "")}
      style={{ transitionDelay: delay + "ms", ...(style || {}) }}
    >
      {children}
    </Tag>
  );
}

// Placeholder image : dégradé teinté + rayures douces + légende monospace.
function Placeholder({ legende, tone = "green", className, style, radius = 20, label = true }) {
  const grad =
    tone === "blue"
      ? "linear-gradient(135deg, var(--sky) 0%, var(--blue-soft) 100%)"
      : tone === "mix"
      ? "linear-gradient(135deg, var(--mint) 0%, var(--sky) 100%)"
      : "linear-gradient(135deg, var(--mint) 0%, var(--green-soft) 100%)";
  return (
    <div
      className={"ph" + (className ? " " + className : "")}
      style={{ background: grad, borderRadius: radius, ...(style || {}) }}
      role="img"
      aria-label={"Image : " + legende}
    >
      <div className="ph-stripes" aria-hidden="true"></div>
      <Icon name="image" className="ph-ico" />
      {label && <span className="ph-cap">{legende}</span>}
    </div>
  );
}

Object.assign(window, {
  CONTACT, ECOLE, NAV_LINKS, STATS, FILIERES, ATOUTS, GALERIE, TEMOIGNAGES, ADMISSION, FAQ,
  useReveal, useCounter, useScrollY,
  Icon, Reveal, Placeholder,
});
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
              { icon: "groups", t: "296 étudiants en 2025-2026" },
              { icon: "category", t: "3 filières paramédicales" },
              { icon: "diversity_3", t: "Équipe de 18 encadrants" },
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
              <span className="hf-ico hf-ico--green"><Icon name="groups" /></span>
              <div>
                <strong>296</strong>
                <em>étudiants en 2025-2026</em>
              </div>
            </div>
            <div className="hero-float hero-float--b">
              <span className="hf-ico hf-ico--blue"><Icon name="category" /></span>
              <div>
                <strong>3</strong>
                <em>filières paramédicales</em>
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
/* =========================================================================
   sections-a.jsx : Chiffres clés (compteurs), Filières, Pourquoi nous.
   ========================================================================= */

/* ----------------------------------------------------------- CHIFFRES CLÉS */
function StatItem({ stat, delay }) {
  const [ref, visible] = useReveal();
  const val = useCounter(stat.value, visible);
  return (
    <div ref={ref} className={"stat reveal" + (visible ? " is-visible" : "")} style={{ transitionDelay: delay + "ms" }}>
      <span className="stat-num">
        {val.toLocaleString("fr-FR")}
        <i>{stat.suffix}</i>
      </span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

function Stats() {
  return (
    <section className="stats-band" aria-label="Chiffres clés">
      <div className="stats-inner">
        {STATS.map((s, i) => (
          <StatItem key={s.label} stat={s} delay={i * 90} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ HEAD  */
function SectionHead({ kicker, title, sub, light }) {
  return (
    <Reveal className={"sec-head" + (light ? " sec-head--light" : "")}>
      {kicker && <span className="kicker">{kicker}</span>}
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  );
}

/* --------------------------------------------------------------- FILIÈRES */
function FiliereCard({ f, delay }) {
  return (
    <Reveal className={"filiere card tone-" + f.tone} delay={delay}>
      <div className="filiere-top">
        <span className="filiere-ico"><Icon name={f.icon} /></span>
        <span className="filiere-duree">
          <Icon name="schedule" /> {f.duree}{f.dureeConfirmer && <em className="duree-note">à confirmer</em>}
        </span>
      </div>
      <h3>{f.nom}</h3>
      <span className="filiere-eff">
        <Icon name="groups" /> <strong>{f.effectif}</strong> étudiants en 2025-2026
      </span>
      <p className="filiere-desc">{f.desc}</p>
      <div className="filiere-deb">
        <span className="deb-title">Niveaux ouverts</span>
        <ul>
          {f.niveaux.map((n) => (
            <li key={n}><Icon name="check_circle" /> {n}</li>
          ))}
        </ul>
      </div>
      <a href="#contact" className="link-more" onClick={(e) => { e.preventDefault(); const el = document.getElementById("contact"); if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" }); }}>
        En savoir plus <Icon name="arrow_forward" />
      </a>
    </Reveal>
  );
}

function Filieres() {
  return (
    <section id="filieres" className="section">
      <div className="container">
        <SectionHead
          kicker="Nos filières"
          title="Trois métiers du soin, une vocation"
          sub="Trois métiers du soin, ouverts aux bacheliers et jeunes diplômés qui veulent s'engager dans la santé."
        />
        <div className="filieres-grid">
          {FILIERES.map((f, i) => (
            <FiliereCard key={f.nom} f={f} delay={i * 110} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- POURQUOI NOUS */
function Pourquoi() {
  return (
    <section id="pourquoi" className="section section--tint">
      <div className="container">
        <SectionHead
          kicker="Pourquoi Santé Plus"
          title="Un cadre sérieux où l'on se sent accompagné"
          sub="Tout est réuni pour apprendre dans de bonnes conditions et réussir votre entrée dans la vie professionnelle."
        />
        <div className="atouts-grid">
          {ATOUTS.map((a, i) => (
            <Reveal key={a.titre} className="atout" delay={(i % 3) * 90}>
              <span className="atout-ico"><Icon name={a.icon} /></span>
              <h3>{a.titre}</h3>
              <p>{a.texte}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Stats, SectionHead, Filieres, Pourquoi });
/* =========================================================================
   sections-b.jsx : Galerie (cadre), Témoignages, Processus d'admission.
   ========================================================================= */

/* ------------------------------------------------------------- GALERIE    */
function Galerie() {
  return (
    <section id="cadre" className="section">
      <div className="container">
        <SectionHead
          kicker="Notre cadre"
          title="Un environnement lumineux et bien équipé"
          sub="Salles de pratique, laboratoires et espaces de vie : un institut pensé pour apprendre dans les meilleures conditions."
        />
        <Reveal className="galerie-grid">
          {GALERIE.map((g, i) => (
            <Placeholder
              key={i}
              legende={g.legende}
              tone={g.tone}
              radius={20}
              className={"gal-item gal-span-" + g.span}
              style={{ transitionDelay: (i * 60) + "ms" }}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- TÉMOIGNAGES  */
function Temoignages() {
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHead
          kicker="Ils nous font confiance"
          title="La parole à nos anciens étudiants"
          sub="[Section à compléter — témoignages à recueillir auprès d'anciens étudiants.]"
        />
        <div className="temoins-grid">
          {TEMOIGNAGES.map((t, i) => (
            <Reveal key={i} className={"temoin card tone-" + t.tone + (t.placeholder ? " temoin--ph" : "")} delay={i * 100}>
              <Icon name="format_quote" className="temoin-quote" />
              <p className="temoin-text">{t.citation}</p>
              <div className="temoin-foot">
                <span className={"avatar avatar-" + t.tone}>
                  {t.placeholder ? <Icon name="person" /> : t.nom.split(" ").map((w) => w[0]).join("")}
                </span>
                <div>
                  <strong>{t.nom}</strong>
                  <em>{t.filiere}</em>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- ADMISSION  */
function Admission() {
  return (
    <section id="admission" className="section">
      <div className="container">
        <SectionHead
          kicker="Admission"
          title="Rejoindre l'institut en 4 étapes"
          sub="Un parcours simple et humain, de la candidature à la rentrée."
        />
        <div className="timeline">
          <span className="timeline-line" aria-hidden="true"></span>
          {ADMISSION.map((a, i) => (
            <Reveal key={a.num} className="step" delay={i * 110}>
              <span className="step-dot">
                <Icon name={a.icon} />
                <span className="step-num">{a.num}</span>
              </span>
              <h3>{a.titre}</h3>
              <p>{a.texte}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Galerie, Temoignages, Admission });
/* =========================================================================
   sections-c.jsx : FAQ (accordéon), Contact (formulaire + carte), Footer.
   ========================================================================= */

/* ------------------------------------------------------------------- FAQ  */
function FaqItem({ item, open, onToggle, idx }) {
  const bodyRef = useRef(null);
  return (
    <div className={"faq-item" + (open ? " is-open" : "")}>
      <button
        className="faq-q"
        aria-expanded={open}
        aria-controls={"faq-body-" + idx}
        onClick={onToggle}
      >
        <span>{item.q}</span>
        <Icon name="expand_more" className="faq-chev" />
      </button>
      <div
        id={"faq-body-" + idx}
        className="faq-body"
        style={{ maxHeight: open ? (bodyRef.current ? bodyRef.current.scrollHeight + 24 : 400) : 0 }}
      >
        <p ref={bodyRef}>{item.r}</p>
      </div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section section--tint">
      <div className="container container--narrow">
        <SectionHead kicker="FAQ" title="Vous vous posez des questions ?" />
        <div className="faq-list">
          {FAQ.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 60}>
              <FaqItem item={item} idx={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- CONTACT  */
function Contact() {
  const [form, setForm] = useState({ nom: "", tel: "", filiere: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.nom || !form.tel) return;
    setSent(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-grid">
          {/* Colonne infos */}
          <div className="contact-info">
            <SectionHead
              kicker="Contact"
              title="Parlons de votre projet"
              sub="Une question sur une filière, l'admission ou les frais ? Notre équipe vous répond avec plaisir."
            />
            <ul className="contact-list">
              <li>
                <span className="ci-ico ci-green"><Icon name="location_on" /></span>
                <div><strong>Adresse</strong><a href="#carte">{CONTACT.adresse}</a></div>
              </li>
              <li>
                <span className="ci-ico ci-blue"><Icon name="call" /></span>
                <div><strong>Téléphone</strong><a href={"tel:" + CONTACT.telLink}>{CONTACT.tel}</a></div>
              </li>
              <li>
                <span className="ci-ico ci-green"><Icon name="mail" /></span>
                <div><strong>Email</strong><a href={"mailto:" + CONTACT.email}>{CONTACT.email}</a></div>
              </li>
              <li>
                <span className="ci-ico ci-blue"><Icon name="chat" /></span>
                <div><strong>WhatsApp</strong><a href={"https://wa.me/" + CONTACT.whatsapp.replace(/[^0-9]/g, "")} target="_blank" rel="noreferrer">Écrire sur WhatsApp</a></div>
              </li>
            </ul>
            {/* Carte — PLACEHOLDER : remplacer par un <iframe> Google Maps réel */}
            <div id="carte" className="map-ph" role="img" aria-label="Carte de localisation — placeholder">
              <div className="map-grid" aria-hidden="true"></div>
              <span className="map-pin"><Icon name="location_on" /></span>
              <span className="map-cap">carte Google Maps — Tétouan</span>
            </div>
          </div>

          {/* Colonne formulaire */}
          <Reveal className="contact-form-wrap">
            {!sent ? (
              <form className="contact-form" onSubmit={submit} noValidate>
                <h3>Demander une information</h3>
                <label>
                  Nom complet *
                  <input type="text" value={form.nom} onChange={set("nom")} placeholder="Votre nom" required />
                </label>
                <label>
                  Téléphone *
                  <input type="tel" value={form.tel} onChange={set("tel")} placeholder="06 00 00 00 00" required />
                </label>
                <label>
                  Filière souhaitée
                  <select value={form.filiere} onChange={set("filiere")}>
                    <option value="">Choisir une filière…</option>
                    {FILIERES.map((f) => <option key={f.nom} value={f.nom}>{f.nom}</option>)}
                    <option value="indecis">Je ne suis pas encore décidé(e)</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea rows="4" value={form.message} onChange={set("message")} placeholder="Votre message (facultatif)"></textarea>
                </label>
                <button type="submit" className="btn btn--cta btn--block">
                  Envoyer ma demande <Icon name="send" />
                </button>
                <p className="form-note">Nous vous répondons généralement sous 24h ouvrées.</p>
              </form>
            ) : (
              <div className="form-success">
                <span className="success-ico"><Icon name="check_circle" /></span>
                <h3>Merci, {form.nom.split(" ")[0]} !</h3>
                <p>Votre demande a bien été enregistrée. Notre équipe vous recontactera très vite.</p>
                <button className="btn btn--ghost" onClick={() => { setSent(false); setForm({ nom: "", tel: "", filiere: "", message: "" }); }}>
                  Envoyer une autre demande
                </button>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- FOOTER    */
function Footer() {
  const goTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-badge brand-badge--lg">
            <img src="assets/logo-sante-plus.png" alt="Logo Institut Santé Plus" />
          </span>
          <div>
            <strong>École de Formation Paramédicale</strong>
            <p>École privée de formation paramédicale à Tétouan. Trois filières et un encadrement de proximité.</p>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={"#" + l.id} onClick={(e) => goTo(e, l.id)}>{l.label}</a>
          ))}
        </div>

        <div className="footer-col">
          <h4>Filières</h4>
          {FILIERES.map((f) => (
            <a key={f.nom} href="#filieres" onClick={(e) => goTo(e, "filieres")}>{f.nom}</a>
          ))}
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href={"tel:" + CONTACT.telLink}><Icon name="call" /> {CONTACT.tel}</a>
          <a href={"mailto:" + CONTACT.email}><Icon name="mail" /> {CONTACT.email}</a>
          <span className="foot-addr"><Icon name="location_on" /> {CONTACT.adresse}</span>
          <div className="socials">
            <a href="#" aria-label="Facebook" className="soc"><Icon name="thumb_up" /></a>
            <a href="#" aria-label="Instagram" className="soc"><Icon name="photo_camera" /></a>
            <a href={"https://wa.me/" + CONTACT.whatsapp.replace(/[^0-9]/g, "")} aria-label="WhatsApp" className="soc"><Icon name="chat" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Institut Santé Plus — Tétouan. Tous droits réservés.</span>
        <span className="footer-legal"><a href="#">Mentions légales</a> · <a href="#">Confidentialité</a></span>
      </div>
    </footer>
  );
}

Object.assign(window, { Faq, Contact, Footer });
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
        <Hero heroStyle={t.heroStyle} />
        <Stats />
        <Filieres />
        <Pourquoi />
        <Galerie />
        <Temoignages />
        <Admission />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
