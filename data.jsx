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
  whatsapp: "+212613723951",
  whatsappAffiche: "06 13 72 39 51",
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

// Bande de chiffres retirée à la demande du client (pas d'effectifs affichés).
const STATS = [];

// Filières — ✅ niveaux, niveaux d'accès et durées vérifiés (données client).
const FILIERES = [
  {
    icon: "healing",
    nom: "Aide-Soignant",
    niveau: "Qualification",
    acces: "3ème année secondaire",
    duree: "1 an",
    desc: "Accompagner les patients dans les gestes du quotidien et assister l'équipe soignante avec bienveillance.",
    tone: "green",
  },
  {
    icon: "medical_services",
    nom: "Infirmier Auxiliaire",
    niveau: "Technicien",
    acces: "Niveau Baccalauréat",
    duree: "2 ans",
    desc: "Réaliser les soins de base et seconder l'infirmier dans la prise en charge des patients.",
    tone: "blue",
  },
  {
    icon: "vaccines",
    nom: "Infirmier Polyvalent",
    niveau: "Technicien spécialisé",
    acces: "Baccalauréat",
    duree: "3 ans",
    desc: "Maîtriser l'ensemble des soins infirmiers et intervenir dans les différents services de santé.",
    tone: "green",
  },
];

// Atouts — mettent en avant le fondateur, l'équipe médicale et l'accréditation.
const ATOUTS = [
  { icon: "medical_information", titre: "Une école fondée par un médecin", texte: "Dirigée par le Dr Bennani Jaafar, anesthésiste-réanimateur, garant de l'exigence médicale." },
  { icon: "diversity_3", titre: "Une équipe pédagogique de haut niveau", texte: "Des médecins et des infirmiers expérimentés accompagnent chaque étudiant." },
  { icon: "verified", titre: "Établissement accrédité", texte: "Formation professionnelle privée accréditée et reconnue." },
  { icon: "category", titre: "Trois filières paramédicales", texte: "Aide-soignant, infirmier auxiliaire et infirmier polyvalent." },
  { icon: "school", titre: "Des cursus d'un à trois ans", texte: "Un parcours adapté à chaque profil, de la qualification au technicien spécialisé." },
  { icon: "local_hospital", titre: "Stages en milieu hospitalier", texte: "Une formation ancrée dans la pratique, au plus près des patients." },
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
  { q: "Quelle est la durée des formations ?", r: "Aide-soignant : 1 an. Infirmier auxiliaire : 2 ans. Infirmier polyvalent : 3 ans." },
  { q: "Quelles sont les conditions d'accès ?", r: "Aide-soignant : niveau 3ème année secondaire. Infirmier auxiliaire : niveau baccalauréat. Infirmier polyvalent : baccalauréat obtenu." },
  { q: "Qui dirige l'école ?", r: "L'Institut Santé Plus a été fondé et est dirigé par le Dr Bennani Jaafar, médecin anesthésiste-réanimateur, entouré d'une équipe pédagogique de médecins et d'infirmiers de haut niveau." },
  { q: "L'établissement est-il accrédité ?", r: "Oui, l'Institut Santé Plus est un établissement de formation professionnelle privée accrédité." },
  { q: "Y a-t-il des stages en milieu hospitalier ?", r: "Oui, la formation inclut des stages pratiques en milieu hospitalier pour mettre en application les acquis." },
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
