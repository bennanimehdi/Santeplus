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
    },
    footer: { desc: "École privée de formation paramédicale à Tétouan. Trois filières et un encadrement de proximité.", nav: "Navigation", filieres: "Filières", contact: "Contact", legal1: "Mentions légales", legal2: "Confidentialité", rights: "Tous droits réservés." },
    accreditBottom: "Établissement de formation professionnelle privée accrédité",
  },

  ar: {
    dir: "rtl",
    langSwitch: "Français",
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
