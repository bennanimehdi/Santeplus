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
              sub="Une question sur une filière ou l'admission ? Notre équipe vous répond avec plaisir."
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
                <div><strong>WhatsApp</strong><a href={"https://wa.me/" + CONTACT.whatsapp.replace(/[^0-9]/g, "")} target="_blank" rel="noreferrer">{CONTACT.whatsappAffiche}</a></div>
              </li>
            </ul>
            {/* Carte Google Maps (intégration sans clé API) */}
            <div id="carte" className="map-embed">
              <iframe
                src="https://www.google.com/maps?q=35.5686179,-5.3751904&z=17&hl=fr&output=embed"
                title="Localisation de l'Institut Santé Plus — 50 Av. Hassan II, Tétouan"
                loading="lazy"
                frameBorder="0"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
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
            <img src="assets/logo-sante-plus.png?v=2" alt="Logo Institut Santé Plus" />
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
