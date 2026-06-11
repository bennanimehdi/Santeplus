/* =========================================================================
   sections-b.jsx : Galerie (photos), Processus d'admission.
   ========================================================================= */

function Galerie() {
  const { L } = useL();
  return (
    <section id="cadre" className="section">
      <div className="container">
        <SectionHead kicker={L.cadreHead.kicker} title={L.cadreHead.title} sub={L.cadreHead.sub} />
        <Reveal className="galerie-grid">
          {L.galerie.map((g, i) => (
            <figure key={i} className="gal-photo">
              <img src={g.image} alt={g.legende} loading="lazy" />
              <figcaption className="gal-cap">{g.legende}</figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Admission() {
  const { L } = useL();
  return (
    <section id="admission" className="section">
      <div className="container">
        <SectionHead kicker={L.admissionHead.kicker} title={L.admissionHead.title} sub={L.admissionHead.sub} />
        <div className="timeline">
          <span className="timeline-line" aria-hidden="true"></span>
          {L.admission.map((a, i) => (
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

Object.assign(window, { Galerie, Admission });
