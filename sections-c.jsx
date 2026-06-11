/* =========================================================================
   sections-c.jsx : FAQ (accordéon), Contact (formulaire + carte), Footer.
   ========================================================================= */

function FaqItem({ item, open, onToggle, idx }) {
  const bodyRef = useRef(null);
  return (
    <div className={"faq-item" + (open ? " is-open" : "")}>
      <button className="faq-q" aria-expanded={open} aria-controls={"faq-body-" + idx} onClick={onToggle}>
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
  const { L } = useL();
  const [open, setOpen] = useState(0);
  return (
    <section className="section section--tint">
      <div className="container container--narrow">
        <SectionHead kicker={L.faqHead.kicker} title={L.faqHead.title} />
        <div className="faq-list">
          {L.faq.map((item, i) => (
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
  const { L } = useL();
  const C = L.contactInfo;
  const F = L.form;
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
          <div className="contact-info">
            <SectionHead kicker={L.contactHead.kicker} title={L.contactHead.title} sub={L.contactHead.sub} />
            <ul className="contact-list">
              <li>
                <span className="ci-ico ci-green"><Icon name="location_on" /></span>
                <div><strong>{C.adresse}</strong><a href="#carte">{C.adresseValue}</a></div>
              </li>
              <li>
                <span className="ci-ico ci-blue"><Icon name="call" /></span>
                <div><strong>{C.tel}</strong><a href={"tel:" + CONTACT.telLink}>{CONTACT.tel}</a></div>
              </li>
              <li>
                <span className="ci-ico ci-green"><Icon name="mail" /></span>
                <div><strong>{C.email}</strong><a href={"mailto:" + CONTACT.email}>{CONTACT.email}</a></div>
              </li>
              <li>
                <span className="ci-ico ci-blue"><Icon name="chat" /></span>
                <div><strong>{C.whatsapp}</strong><a href={"https://wa.me/" + CONTACT.whatsapp.replace(/[^0-9]/g, "")} target="_blank" rel="noreferrer">{CONTACT.whatsappAffiche}</a></div>
              </li>
            </ul>
            <div id="carte" className="map-embed">
              <iframe
                src={CONTACT.mapSrc}
                title="Institut Santé Plus — Tétouan"
                loading="lazy"
                frameBorder="0"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <Reveal className="contact-form-wrap">
            {!sent ? (
              <form className="contact-form" onSubmit={submit} noValidate>
                <h3>{F.title}</h3>
                <label>
                  {F.nom}
                  <input type="text" value={form.nom} onChange={set("nom")} placeholder={F.nomPh} required />
                </label>
                <label>
                  {F.tel}
                  <input type="tel" value={form.tel} onChange={set("tel")} placeholder={F.telPh} required />
                </label>
                <label>
                  {F.filiere}
                  <select value={form.filiere} onChange={set("filiere")}>
                    <option value="">{F.filiereChoose}</option>
                    {L.filieres.map((f) => <option key={f.nom} value={f.nom}>{f.nom}</option>)}
                    <option value="indecis">{F.indecis}</option>
                  </select>
                </label>
                <label>
                  {F.message}
                  <textarea rows="4" value={form.message} onChange={set("message")} placeholder={F.messagePh}></textarea>
                </label>
                <button type="submit" className="btn btn--cta btn--block">
                  {F.submit} <Icon name="send" />
                </button>
                <p className="form-note">{F.note}</p>
              </form>
            ) : (
              <div className="form-success">
                <span className="success-ico"><Icon name="check_circle" /></span>
                <h3>{F.thanks}, {form.nom.split(" ")[0]} !</h3>
                <p>{F.success}</p>
                <button className="btn btn--ghost" onClick={() => { setSent(false); setForm({ nom: "", tel: "", filiere: "", message: "" }); }}>
                  {F.again}
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
  const { L } = useL();
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
            <strong>{L.brand.nom}</strong>
            <p>{L.footer.desc}</p>
          </div>
        </div>

        <div className="footer-col">
          <h4>{L.footer.nav}</h4>
          {L.nav.map((l) => (
            <a key={l.id} href={"#" + l.id} onClick={(e) => goTo(e, l.id)}>{l.label}</a>
          ))}
        </div>

        <div className="footer-col">
          <h4>{L.footer.filieres}</h4>
          {L.filieres.map((f) => (
            <a key={f.nom} href="#filieres" onClick={(e) => goTo(e, "filieres")}>{f.nom}</a>
          ))}
        </div>

        <div className="footer-col">
          <h4>{L.footer.contact}</h4>
          <a href={"tel:" + CONTACT.telLink}><Icon name="call" /> {CONTACT.tel}</a>
          <a href={"mailto:" + CONTACT.email}><Icon name="mail" /> {CONTACT.email}</a>
          <span className="foot-addr"><Icon name="location_on" /> {L.contactInfo.adresseValue}</span>
          <div className="socials">
            <a href={"https://wa.me/" + CONTACT.whatsapp.replace(/[^0-9]/g, "")} aria-label="WhatsApp" className="soc"><Icon name="chat" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Institut Santé Plus — {L.brand.ville}. {L.footer.rights}</span>
        <span className="footer-legal"><a href="#">{L.footer.legal1}</a> · <a href="#">{L.footer.legal2}</a></span>
      </div>
    </footer>
  );
}

Object.assign(window, { Faq, Contact, Footer });
