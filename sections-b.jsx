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
