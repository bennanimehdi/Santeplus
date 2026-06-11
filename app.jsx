/* =========================================================================
   Institut Santé Plus — Tétouan
   data.jsx : contenu bilingue (FR/AR), contexte de langue, hooks, atomes UI.
   ========================================================================= */

const { useState, useEffect, useRef, useCallback, useContext, createContext } = React;

/* ----------------------------------------------- COORDONNÉES (non traduites) */
const CONTACT = {
  telLink: "+212539713046",
  tel: "05 39 71 30 46",
  email: "contact@institutsanteplus.com",
  whatsapp: "+212613723951",
  whatsappAffiche: "06 13 72 39 51",
  mapSrc: "https://www.google.com/maps?q=35.5686179,-5.3751904&z=17&hl=fr&output=embed",
};

/* ----------------------------------------------------------- CONTEXTE LANGUE */
const LangContext = createContext({ lang: "fr" });
function useL() { return useContext(LangContext); }

/* --------------------------------------------------------- CONTENU BILINGUE */
const CONTENT = {
  fr: {
    dir: "ltr",
    langSwitch: "العربية",
    langSwitchShort: "AR",
    brand: { nom: "École de Formation Paramédicale", ville: "Tétouan" },
    nav: [
      { id: "accueil", label: "Accueil" },
      { id: "filieres", label: "Filières" },
      { id: "pourquoi", label: "Pourquoi nous" },
      { id: "admission", label: "Admission" },
      { id: "contact", label: "Contact" },
    ],
    navCta: "Demander une info",
    hero: {
      pill: "École de formation paramédicale",
      titlePre: "Devenez un professionnel de la santé à ",
      titleHl: "Tétouan",
      titlePost: "",
      sub: "L'École de Formation Paramédicale forme les soignants de demain à Tétouan, à travers trois filières et un encadrement de proximité.",
      cta1: "Découvrir nos filières",
      cta2: "Nous contacter",
      reassure: [
        { icon: "category", t: "3 filières paramédicales" },
        { icon: "verified", t: "Établissement accrédité" },
        { icon: "medical_information", t: "Encadrement médical de haut niveau" },
      ],
    },
    filieresHead: {
      kicker: "Nos filières",
      title: "Trois métiers du soin, une vocation",
      sub: "Trois métiers du soin, ouverts aux bacheliers et jeunes diplômés qui veulent s'engager dans la santé.",
    },
    filieres: [
      { icon: "healing", image: "assets/filiere-aide-soignant.jpg", tone: "green", nom: "Aide-Soignant", niveau: "Qualification", acces: "3ème année secondaire", duree: "1 an", desc: "Accompagner les patients dans les gestes du quotidien et assister l'équipe soignante avec bienveillance." },
      { icon: "medical_services", image: "assets/filiere-infirmier-auxiliaire.jpg", tone: "blue", nom: "Infirmier Auxiliaire", niveau: "Technicien", acces: "Niveau Baccalauréat", duree: "2 ans", desc: "Réaliser les soins de base et seconder l'infirmier dans la prise en charge des patients." },
      { icon: "vaccines", image: "assets/filiere-infirmier-polyvalent.jpg", tone: "green", nom: "Infirmier Polyvalent", niveau: "Technicien spécialisé", acces: "Baccalauréat", duree: "3 ans", desc: "Maîtriser l'ensemble des soins infirmiers et intervenir dans les différents services de santé." },
    ],
    filiereLabels: { niveau: "Niveau", acces: "Niveau d'accès", duree: "Durée", more: "En savoir plus" },
    direction: {
      kicker: "Direction & équipe pédagogique",
      title: "Une école dirigée par un médecin",
      p1: "L'Institut Santé Plus a été fondé par le Dr Bennani Jaafar, médecin anesthésiste-réanimateur. Sa conviction : former des soignants compétents et humains, encadrés par de vrais professionnels de terrain.",
      p2: "Au quotidien, les étudiants sont accompagnés par une équipe pédagogique de médecins et d'infirmiers de haut niveau, qui transmettent l'exigence clinique et le sens du soin.",
      points: [
        "Fondateur médecin anesthésiste-réanimateur",
        "Encadrement par des médecins et infirmiers expérimentés",
        "Établissement de formation professionnelle privée accrédité",
      ],
      name: "Dr Bennani Jaafar",
      role: "Fondateur · Médecin anesthésiste-réanimateur",
    },
    pourquoiHead: {
      kicker: "Pourquoi Santé Plus",
      title: "Un cadre sérieux où l'on se sent accompagné",
      sub: "Tout est réuni pour apprendre dans de bonnes conditions et réussir votre entrée dans la vie professionnelle.",
    },
    atouts: [
      { icon: "medical_information", titre: "Une école fondée par un médecin", texte: "Dirigée par le Dr Bennani Jaafar, anesthésiste-réanimateur, garant de l'exigence médicale." },
      { icon: "diversity_3", titre: "Une équipe pédagogique de haut niveau", texte: "Des médecins et des infirmiers expérimentés accompagnent chaque étudiant." },
      { icon: "verified", titre: "Établissement accrédité", texte: "Formation professionnelle privée accréditée et reconnue." },
      { icon: "category", titre: "Trois filières paramédicales", texte: "Aide-soignant, infirmier auxiliaire et infirmier polyvalent." },
      { icon: "school", titre: "Des cursus d'un à trois ans", texte: "Un parcours adapté à chaque profil, de la qualification au technicien spécialisé." },
      { icon: "local_hospital", titre: "Stages en milieu hospitalier", texte: "Une formation ancrée dans la pratique, au plus près des patients." },
    ],
    cadreHead: {
      kicker: "Notre cadre",
      title: "Un institut équipé pour la pratique",
      sub: "Façade de l'institut, salles de travaux pratiques équipées : un cadre pensé pour apprendre dans de bonnes conditions.",
    },
    galerie: [
      { legende: "Façade de l'institut", image: "assets/cadre-facade.jpg" },
      { legende: "Salle de travaux pratiques", image: "assets/cadre-salle-tp.jpg" },
    ],
    admissionHead: {
      kicker: "Admission",
      title: "Rejoindre l'institut en 4 étapes",
      sub: "Un parcours simple et humain, de la candidature à la rentrée.",
    },
    admission: [
      { num: "1", icon: "description", titre: "Candidature", texte: "Déposez votre dossier en ligne ou sur place." },
      { num: "2", icon: "forum", titre: "Entretien", texte: "Un échange pour comprendre votre projet." },
      { num: "3", icon: "how_to_reg", titre: "Inscription", texte: "Confirmez votre place dans la filière choisie." },
      { num: "4", icon: "celebration", titre: "Rentrée", texte: "Rejoignez votre promotion et commencez." },
    ],
    faqHead: { kicker: "FAQ", title: "Vous vous posez des questions ?" },
    faq: [
      { q: "Quelles filières propose l'école ?", r: "Trois filières paramédicales : aide-soignant, infirmier auxiliaire et infirmier polyvalent." },
      { q: "Quelle est la durée des formations ?", r: "Aide-soignant : 1 an. Infirmier auxiliaire : 2 ans. Infirmier polyvalent : 3 ans." },
      { q: "Quelles sont les conditions d'accès ?", r: "Aide-soignant : niveau 3ème année secondaire. Infirmier auxiliaire : niveau baccalauréat. Infirmier polyvalent : baccalauréat obtenu." },
      { q: "Qui dirige l'école ?", r: "L'Institut Santé Plus a été fondé et est dirigé par le Dr Bennani Jaafar, médecin anesthésiste-réanimateur, entouré d'une équipe pédagogique de médecins et d'infirmiers de haut niveau." },
      { q: "L'établissement est-il accrédité ?", r: "Oui, l'Institut Santé Plus est un établissement de formation professionnelle privée accrédité." },
      { q: "Y a-t-il des stages en milieu hospitalier ?", r: "Oui, la formation inclut des stages pratiques en milieu hospitalier pour mettre en application les acquis." },
    ],
    contactHead: {
      kicker: "Contact",
      title: "Parlons de votre projet",
      sub: "Une question sur une filière ou l'admission ? Notre équipe vous répond avec plaisir.",
    },
    contactInfo: { adresse: "Adresse", adresseValue: "50 Av. Hassan II, Tétouan", tel: "Téléphone", email: "Email", whatsapp: "WhatsApp" },
    form: {
      title: "Demander une information",
      nom: "Nom complet *", nomPh: "Votre nom",
      tel: "Téléphone *", telPh: "06 00 00 00 00",
      filiere: "Filière souhaitée", filiereChoose: "Choisir une filière…", indecis: "Je ne suis pas encore décidé(e)",
      message: "Message", messagePh: "Votre message (facultatif)",
      submit: "Envoyer ma demande",
      note: "Nous vous répondons généralement sous 24h ouvrées.",
      thanks: "Merci", success: "Votre demande a bien été enregistrée. Notre équipe vous recontactera très vite.", again: "Envoyer une autre demande",
      sending: "Envoi en cours…", error: "Une erreur est survenue. Réessayez ou appelez-nous directement.",
    },
    footer: { desc: "École privée de formation paramédicale à Tétouan. Trois filières et un encadrement de proximité.", nav: "Navigation", filieres: "Filières", contact: "Contact", legal1: "Mentions légales", legal2: "Confidentialité", rights: "Tous droits réservés." },
    accreditBottom: "Établissement de formation professionnelle privée accrédité",
  },

  ar: {
    dir: "rtl",
    langSwitch: "Français",
    langSwitchShort: "FR",
    brand: { nom: "معهد العلوم الطبية", ville: "تطوان" },
    nav: [
      { id: "accueil", label: "الرئيسية" },
      { id: "filieres", label: "الشُّعب" },
      { id: "pourquoi", label: "لماذا نحن" },
      { id: "admission", label: "التسجيل" },
      { id: "contact", label: "اتصل بنا" },
    ],
    navCta: "اطلب معلومات",
    hero: {
      pill: "معهد للتكوين شبه الطبي",
      titlePre: "كُن مهنيّاً في مجال الصحة بمدينة ",
      titleHl: "تطوان",
      titlePost: "",
      sub: "يُكوّن معهد العلوم الطبية ممرّضي ومساعدي الغد بمدينة تطوان، عبر ثلاث شُعب وتأطير قريب من الطلبة.",
      cta1: "اكتشف شُعبنا",
      cta2: "اتصل بنا",
      reassure: [
        { icon: "category", t: "ثلاث شُعب شبه طبية" },
        { icon: "verified", t: "مؤسسة معتمدة" },
        { icon: "medical_information", t: "تأطير طبي رفيع المستوى" },
      ],
    },
    filieresHead: {
      kicker: "شُعبنا",
      title: "ثلاث مهن للرعاية، رسالة واحدة",
      sub: "ثلاث مهن للرعاية، مفتوحة لحاملي الباكالوريا والشباب الراغبين في الالتزام بمجال الصحة.",
    },
    filieres: [
      { icon: "healing", image: "assets/filiere-aide-soignant.jpg", tone: "green", nom: "مساعد معالج", niveau: "تأهيل", acces: "الثالثة إعدادي", duree: "سنة واحدة", desc: "مرافقة المرضى في أعمالهم اليومية ومساعدة الفريق الطبي بعناية ولطف." },
      { icon: "medical_services", image: "assets/filiere-infirmier-auxiliaire.jpg", tone: "blue", nom: "ممرّض مساعد", niveau: "تقني", acces: "مستوى الباكالوريا", duree: "سنتان", desc: "إنجاز العناية الأساسية ومساعدة الممرّض في التكفّل بالمرضى." },
      { icon: "vaccines", image: "assets/filiere-infirmier-polyvalent.jpg", tone: "green", nom: "ممرّض متعدّد الاختصاصات", niveau: "تقني متخصّص", acces: "الباكالوريا", duree: "ثلاث سنوات", desc: "إتقان مجمل العناية التمريضية والتدخّل في مختلف المصالح الصحية." },
    ],
    filiereLabels: { niveau: "المستوى", acces: "شروط الولوج", duree: "المدة", more: "اعرف المزيد" },
    direction: {
      kicker: "الإدارة والطاقم البيداغوجي",
      title: "معهد يديره طبيب",
      p1: "أسّس معهدَ العلوم الطبية الدكتورُ بنّاني جعفر، طبيب مختصّ في التخدير والإنعاش. قناعته: تكوين مساعدين أكفّاء وإنسانيّين، يؤطّرهم مهنيّون حقيقيّون من الميدان.",
      p2: "يُرافَق الطلبة يوميّاً من طرف طاقم بيداغوجي من الأطبّاء والممرّضين ذوي المستوى الرفيع، ينقلون الصرامة السريرية وحسّ الرعاية.",
      points: [
        "مؤسّس طبيب مختصّ في التخدير والإنعاش",
        "تأطير من طرف أطبّاء وممرّضين ذوي خبرة",
        "مؤسسة للتكوين المهني الخاص معتمدة",
      ],
      name: "الدكتور بنّاني جعفر",
      role: "المؤسّس · طبيب مختصّ في التخدير والإنعاش",
    },
    pourquoiHead: {
      kicker: "لماذا صحة بلوس",
      title: "إطار جدّي تشعر فيه بالمرافقة",
      sub: "كل شيء مُهيّأ للتعلّم في ظروف جيّدة والنجاح في ولوج الحياة المهنية.",
    },
    atouts: [
      { icon: "medical_information", titre: "معهد أسّسه طبيب", texte: "يديره الدكتور بنّاني جعفر، مختصّ في التخدير والإنعاش، ضامن للصرامة الطبية." },
      { icon: "diversity_3", titre: "طاقم بيداغوجي رفيع المستوى", texte: "أطبّاء وممرّضون ذوو خبرة يرافقون كل طالب." },
      { icon: "verified", titre: "مؤسسة معتمدة", texte: "تكوين مهني خاص معتمد ومعترف به." },
      { icon: "category", titre: "ثلاث شُعب شبه طبية", texte: "مساعد معالج، ممرّض مساعد، وممرّض متعدّد الاختصاصات." },
      { icon: "school", titre: "مسارات من سنة إلى ثلاث سنوات", texte: "مسار يناسب كل ملف، من التأهيل إلى التقني المتخصّص." },
      { icon: "local_hospital", titre: "تداريب في الوسط الاستشفائي", texte: "تكوين متجذّر في الممارسة، قريب من المرضى." },
    ],
    cadreHead: {
      kicker: "فضاؤنا",
      title: "معهد مجهّز للممارسة",
      sub: "واجهة المعهد وقاعات الأشغال التطبيقية المجهّزة: فضاء مُصمّم للتعلّم في ظروف جيّدة.",
    },
    galerie: [
      { legende: "واجهة المعهد", image: "assets/cadre-facade.jpg" },
      { legende: "قاعة الأشغال التطبيقية", image: "assets/cadre-salle-tp.jpg" },
    ],
    admissionHead: {
      kicker: "التسجيل",
      title: "الالتحاق بالمعهد في 4 خطوات",
      sub: "مسار بسيط وإنساني، من الترشيح إلى الدخول.",
    },
    admission: [
      { num: "1", icon: "description", titre: "الترشيح", texte: "أودِع ملفّك عبر الإنترنت أو في عين المكان." },
      { num: "2", icon: "forum", titre: "المقابلة", texte: "حوار لفهم مشروعك." },
      { num: "3", icon: "how_to_reg", titre: "التسجيل", texte: "أكّد مقعدك في الشعبة المختارة." },
      { num: "4", icon: "celebration", titre: "الدخول", texte: "التحق بفوجك وابدأ." },
    ],
    faqHead: { kicker: "أسئلة شائعة", title: "هل لديك أسئلة؟" },
    faq: [
      { q: "ما هي الشُّعب التي يقترحها المعهد؟", r: "ثلاث شُعب شبه طبية: مساعد معالج، ممرّض مساعد، وممرّض متعدّد الاختصاصات." },
      { q: "ما هي مدة التكوينات؟", r: "مساعد معالج: سنة واحدة. ممرّض مساعد: سنتان. ممرّض متعدّد الاختصاصات: ثلاث سنوات." },
      { q: "ما هي شروط الولوج؟", r: "مساعد معالج: مستوى الثالثة إعدادي. ممرّض مساعد: مستوى الباكالوريا. ممرّض متعدّد الاختصاصات: الحصول على الباكالوريا." },
      { q: "من يدير المعهد؟", r: "أسّس المعهدَ ويديره الدكتور بنّاني جعفر، طبيب مختصّ في التخدير والإنعاش، محاطاً بطاقم بيداغوجي من الأطبّاء والممرّضين ذوي المستوى الرفيع." },
      { q: "هل المؤسسة معتمدة؟", r: "نعم، معهد العلوم الطبية مؤسسة للتكوين المهني الخاص معتمدة." },
      { q: "هل هناك تداريب في الوسط الاستشفائي؟", r: "نعم، يتضمّن التكوين تداريب تطبيقية في الوسط الاستشفائي لتطبيق المكتسبات." },
    ],
    contactHead: {
      kicker: "اتصل بنا",
      title: "لنتحدّث عن مشروعك",
      sub: "سؤال حول شعبة أو التسجيل؟ فريقنا يجيبك بكل سرور.",
    },
    contactInfo: { adresse: "العنوان", adresseValue: "50 شارع الحسن الثاني، تطوان", tel: "الهاتف", email: "البريد الإلكتروني", whatsapp: "واتساب" },
    form: {
      title: "طلب معلومات",
      nom: "الاسم الكامل *", nomPh: "اسمك",
      tel: "الهاتف *", telPh: "06 00 00 00 00",
      filiere: "الشعبة المرغوبة", filiereChoose: "اختر شعبة…", indecis: "لم أقرّر بعد",
      message: "رسالة", messagePh: "رسالتك (اختياري)",
      submit: "أرسل طلبي",
      note: "نجيبك عادةً خلال 24 ساعة عمل.",
      thanks: "شكراً", success: "تمّ تسجيل طلبك بنجاح. سيتواصل معك فريقنا قريباً جداً.", again: "إرسال طلب آخر",
      sending: "جارٍ الإرسال…", error: "حدث خطأ. حاول مجدّداً أو اتصل بنا هاتفيّاً.",
    },
    footer: { desc: "معهد خاص للتكوين شبه الطبي بتطوان. ثلاث شُعب وتأطير قريب من الطلبة.", nav: "التنقّل", filieres: "الشُّعب", contact: "اتصل بنا", legal1: "إشعارات قانونية", legal2: "الخصوصية", rights: "جميع الحقوق محفوظة." },
    accreditBottom: "مؤسسة للتكوين المهني الخاص معتمدة",
  },
};

/* ----------------------------------------------------------------- HOOKS  */
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
function Icon({ name, className, style }) {
  return (
    <span className={"material-symbols-rounded" + (className ? " " + className : "")} style={style} aria-hidden="true">
      {name}
    </span>
  );
}

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

Object.assign(window, {
  CONTACT, CONTENT, LangContext, useL,
  useReveal, useScrollY,
  Icon, Reveal,
});
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
            <Icon name="language" />
            <span className="lang-full">{L.langSwitch}</span>
            <span className="lang-short">{L.langSwitchShort}</span>
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
        <button className="mobile-lang" onClick={() => { setLang(lang === "fr" ? "ar" : "fr"); setOpen(false); }}>
          <Icon name="language" /> {L.langSwitch}
        </button>
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
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.nom || !form.tel || sending) return;
    setSending(true);
    setErr(false);
    try {
      const res = await fetch("https://formsubmit.co/ajax/contact@institutsanteplus.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Nom: form.nom,
          "Téléphone": form.tel,
          "Filière souhaitée": form.filiere || "—",
          Message: form.message || "—",
          _subject: "Nouvelle demande — site Institut Santé Plus",
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json();
      if (res.ok && (data.success === "true" || data.success === true)) setSent(true);
      else setErr(true);
    } catch (e2) {
      setErr(true);
    }
    setSending(false);
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
                <button type="submit" className="btn btn--cta btn--block" disabled={sending}>
                  {sending ? F.sending : F.submit} <Icon name="send" />
                </button>
                {err && <p className="form-error">{F.error}</p>}
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
