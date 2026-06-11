/* =========================================================================
   sections-a.jsx : SectionHead, Filières, Direction (fondateur), Pourquoi.
   ========================================================================= */

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
function FiliereCard({ f, label, delay }) {
  const scrollContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };
  return (
    <Reveal className={"filiere card tone-" + f.tone} delay={delay}>
      <div className="filiere-photo">
        <img src={f.image} alt={f.nom} loading="lazy" />
        <span className="filiere-ico"><Icon name={f.icon} /></span>
      </div>
      <div className="filiere-body">
        <h3>{f.nom}</h3>
        <p className="filiere-desc">{f.desc}</p>
        <dl className="filiere-specs">
          <div>
            <dt><Icon name="workspace_premium" /> {label.niveau}</dt>
            <dd>{f.niveau}</dd>
          </div>
          <div>
            <dt><Icon name="school" /> {label.acces}</dt>
            <dd>{f.acces}</dd>
          </div>
          <div>
            <dt><Icon name="schedule" /> {label.duree}</dt>
            <dd>{f.duree}</dd>
          </div>
        </dl>
        <a href="#contact" className="link-more" onClick={scrollContact}>
          {label.more} <Icon name="arrow_forward" />
        </a>
      </div>
    </Reveal>
  );
}

function Filieres() {
  const { L } = useL();
  return (
    <section id="filieres" className="section">
      <div className="container">
        <SectionHead kicker={L.filieresHead.kicker} title={L.filieresHead.title} sub={L.filieresHead.sub} />
        <div className="filieres-grid">
          {L.filieres.map((f, i) => (
            <FiliereCard key={f.nom} f={f} label={L.filiereLabels} delay={i * 110} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- DIRECTION / FONDATEUR */
function Fondateur() {
  const { L } = useL();
  const D = L.direction;
  return (
    <section id="direction" className="section fondateur">
      <div className="container">
        <div className="fond-grid">
          <Reveal className="fond-visual">
            <div className="fond-portrait">
              <img src="assets/dr-bennani.png?v=2" alt={D.name} className="fond-photo" />
              <span className="fond-mono"><Icon name="medical_information" /></span>
            </div>
            <div className="fond-namecard">
              <strong>{D.name}</strong>
              <em>{D.role}</em>
            </div>
          </Reveal>

          <Reveal className="fond-copy" delay={120}>
            <span className="kicker">{D.kicker}</span>
            <h2>{D.title}</h2>
            <p>{D.p1}</p>
            <p>{D.p2}</p>
            <ul className="fond-points">
              {D.points.map((p) => (
                <li key={p}><Icon name="check_circle" /> {p}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- POURQUOI NOUS */
function Pourquoi() {
  const { L } = useL();
  return (
    <section id="pourquoi" className="section section--tint">
      <div className="container">
        <SectionHead kicker={L.pourquoiHead.kicker} title={L.pourquoiHead.title} sub={L.pourquoiHead.sub} />
        <div className="atouts-grid">
          {L.atouts.map((a, i) => (
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

Object.assign(window, { SectionHead, Filieres, Fondateur, Pourquoi });
