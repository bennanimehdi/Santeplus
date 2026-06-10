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
          <Icon name="schedule" /> {f.duree}
        </span>
      </div>
      <h3>{f.nom}</h3>
      <p className="filiere-desc">{f.desc}</p>
      <dl className="filiere-specs">
        <div>
          <dt><Icon name="workspace_premium" /> Niveau</dt>
          <dd>{f.niveau}</dd>
        </div>
        <div>
          <dt><Icon name="school" /> Niveau d'accès</dt>
          <dd>{f.acces}</dd>
        </div>
        <div>
          <dt><Icon name="schedule" /> Durée</dt>
          <dd>{f.duree}</dd>
        </div>
      </dl>
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

/* ------------------------------------------------------- DIRECTION / FONDATEUR */
function Fondateur() {
  return (
    <section id="direction" className="section fondateur">
      <div className="container">
        <div className="fond-grid">
          <Reveal className="fond-visual">
            <div className="fond-portrait">
              <Placeholder legende="Dr Bennani Jaafar — Fondateur" tone="blue" radius={24} label={false} />
              <span className="fond-mono"><Icon name="medical_information" /></span>
            </div>
            <div className="fond-namecard">
              <strong>Dr Bennani Jaafar</strong>
              <em>Fondateur · Médecin anesthésiste-réanimateur</em>
            </div>
          </Reveal>

          <Reveal className="fond-copy" delay={120}>
            <span className="kicker">Direction &amp; équipe pédagogique</span>
            <h2>Une école dirigée par un médecin</h2>
            <p>
              L'Institut Santé Plus a été fondé par le <strong>Dr Bennani Jaafar</strong>,
              médecin <strong>anesthésiste-réanimateur</strong>. Sa conviction : former des
              soignants compétents et humains, encadrés par de vrais professionnels de terrain.
            </p>
            <p>
              Au quotidien, les étudiants sont accompagnés par une <strong>équipe pédagogique de
              médecins et d'infirmiers de haut niveau</strong>, qui transmettent l'exigence
              clinique et le sens du soin.
            </p>
            <ul className="fond-points">
              <li><Icon name="check_circle" /> Fondateur médecin anesthésiste-réanimateur</li>
              <li><Icon name="check_circle" /> Encadrement par des médecins et infirmiers expérimentés</li>
              <li><Icon name="check_circle" /> Établissement de formation professionnelle privée accrédité</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Stats, SectionHead, Filieres, Pourquoi, Fondateur });
