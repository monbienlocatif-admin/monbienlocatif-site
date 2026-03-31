import React from 'react';
import ReactDOM from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Building2, ChevronRight, LineChart, ShieldCheck, Users } from 'lucide-react';

const stats = [
  {
    value: '+5 M€',
    label: 'investis dans des opérations immobilières suivies avec une logique de performance et de sélection',
  },
  {
    value: '40+',
    label: 'biens accompagnés ou gérés avec une approche structurée, exigeante et orientée long terme',
  },
  {
    value: '10 %',
    label: 'de rendement brut minimum visé sur les projets à fort potentiel sélectionnés',
  },
];

const services = [
  {
    icon: <Building2 size={24} />,
    title: 'Vendre un bien',
    text: 'Une mise en marché plus intelligente, plus qualitative et plus crédible, pensée pour défendre la valeur du bien et maximiser le résultat final.',
    cta: 'Demander une estimation',
  },
  {
    icon: <LineChart size={24} />,
    title: 'Acheter / Investir',
    text: 'Un accompagnement orienté stratégie, rendement, cohérence patrimoniale et sécurisation du projet, de l’analyse à la concrétisation.',
    cta: 'Parler de mon projet',
  },
  {
    icon: <Users size={24} />,
    title: 'Rejoindre le réseau',
    text: 'Une structure pensée pour les profils ambitieux qui veulent une image plus premium, de meilleurs outils et un positionnement plus fort.',
    cta: 'Découvrir le réseau',
  },
];

const pillars = [
  {
    title: 'Vision investisseur',
    text: 'Chaque décision est pensée avec une logique de rentabilité, de valorisation, de cohérence patrimoniale et de maîtrise du risque.',
  },
  {
    title: 'Exigence de sélection',
    text: 'Nous privilégions les projets solides, défendables et stratégiquement cohérents plutôt que la logique de volume.',
  },
  {
    title: 'Accompagnement sur mesure',
    text: 'Vente, acquisition, investissement ou structuration : chaque mission est adaptée au niveau d’exigence et aux objectifs du client.',
  },
  {
    title: 'Image plus haut de gamme',
    text: 'Le site, la communication et la relation client doivent refléter un niveau de qualité supérieur aux réseaux immobiliers classiques.',
  },
];

const investmentCards = [
  {
    title: 'Projet patrimonial',
    text: 'Pour les clients qui recherchent la qualité d’emplacement, la cohérence d’actif, la tenue long terme et la valorisation progressive.',
  },
  {
    title: 'Projet orienté rendement',
    text: 'Pour les investisseurs qui veulent analyser le brut, le net, les travaux, le financement, la fiscalité et le risque avec méthode.',
  },
  {
    title: 'Arbitrage stratégique',
    text: 'Pour décider s’il faut acheter, vendre, restructurer, optimiser ou conserver un actif avec une lecture plus lucide du potentiel réel.',
  },
];

const portfolio = [
  {
    title: 'Immeuble de rapport repositionné',
    subtitle: 'Hauts-de-France',
    text: 'Analyse du potentiel, sécurisation des hypothèses d’exploitation et revalorisation d’ensemble dans une logique de performance.',
    tag: 'Rendement visé > 10 % brut',
  },
  {
    title: 'Acquisition à forte logique locative',
    subtitle: 'Marché ciblé',
    text: 'Étude du couple emplacement / travaux / demande locative / projection nette avant prise de décision.',
    tag: 'Approche investissement',
  },
  {
    title: 'Commercialisation premium d’un actif',
    subtitle: 'Vente optimisée',
    text: 'Positionnement plus défendable, meilleure mise en valeur, et stratégie conçue pour protéger le prix de sortie.',
    tag: 'Maximisation de valeur',
  },
];

const faq = [
  {
    q: 'En quoi Mon Bien Locatif est différent d’une agence classique ?',
    a: 'Nous raisonnons d’abord comme des investisseurs. Cela change la manière d’évaluer un bien, de le vendre, de l’acheter, de le structurer et de l’exploiter.',
  },
  {
    q: 'Accompagnez-vous uniquement des investisseurs ?',
    a: 'Non. Nous accompagnons aussi les vendeurs et les acquéreurs, mais avec un niveau d’exigence, de méthode et de conseil supérieur à une approche transactionnelle standard.',
  },
  {
    q: 'Pourquoi privilégier une vraie estimation sur rendez-vous ?',
    a: 'Parce qu’une valorisation sérieuse ne repose pas sur un chiffre automatique ou volontairement gonflé. Elle repose sur le bien, son marché, son potentiel et la stratégie de sortie.',
  },
  {
    q: 'À qui s’adresse votre réseau ?',
    a: 'Aux profils ambitieux qui veulent rejoindre une structure plus qualitative, avec un positionnement plus crédible, une image plus premium et une vraie logique de montée en gamme.',
  },
];

function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-title${center ? ' center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function PrimaryButton({ children }) {
  return (
    <a href="#contact" className="button button-primary">
      {children}
      <ArrowRight size={16} />
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a href={href} className="button button-secondary">
      {children}
      <ChevronRight size={16} />
    </a>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div>
            <div className="brand-eyebrow">Mon Bien Locatif</div>
            <div className="brand-title">Immobilier premium & investissement</div>
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#difference">Notre approche</a>
            <a href="#investissement">Investissement</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#reseau">Réseau</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href="#contact" className="button button-primary">Nous contacter</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="eyebrow">Agence immobilière nouvelle génération</p>
              <h1>L’immobilier pensé par des investisseurs, pour des investisseurs exigeants.</h1>
              <p className="hero-text">
                Un accompagnement sur mesure pour vendre, investir, structurer et valoriser chaque projet immobilier avec plus de méthode, plus d’exigence et plus de cohérence.
              </p>
              <div className="hero-actions">
                <PrimaryButton>Vendre mon bien</PrimaryButton>
                <SecondaryButton href="#investissement">Acheter / Investir</SecondaryButton>
                <SecondaryButton href="#reseau">Rejoindre le réseau</SecondaryButton>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}>
              <div className="hero-card">
                <div className="hero-badges">
                  <div className="glass glass-small">
                    <div className="label">Positionnement</div>
                    <div className="value">Premium</div>
                  </div>
                  <div className="glass glass-small">
                    <div className="label">Approche</div>
                    <div className="value">Investisseur</div>
                  </div>
                </div>
                <div className="hero-insight">
                  <div className="insight-pill"><ShieldCheck size={14} style={{ verticalAlign: 'middle', marginRight: 8 }} />Exigence & sélection</div>
                  <h3>Une lecture plus stratégique du marché, des actifs et des projets.</h3>
                  <p>
                    Nous ne cherchons pas à faire plus de volume. Nous cherchons à construire de meilleures décisions, avec un niveau de qualité supérieur à une agence traditionnelle.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="stats">
          <div className="container stats-grid">
            {stats.map((item, index) => (
              <motion.div
                className="card"
                key={item.value}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="stat-value">{item.value}</div>
                <p className="muted" style={{ marginTop: 16 }}>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="services">
          <div className="container">
            <SectionTitle
              eyebrow="Services"
              title="Un accompagnement immobilier plus exigeant"
              text="Chaque service répond à un objectif concret : mieux vendre, mieux investir, ou rejoindre une structure plus crédible et plus qualitative."
            />
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="icon-wrap">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="muted" style={{ marginTop: 16 }}>{service.text}</p>
                  <a href="#contact" className="text-link">{service.cta}<ArrowRight size={16} /></a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="difference">
          <div className="container difference-grid">
            <div className="dark-panel">
              <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)', marginBottom: 18 }}>Notre approche</p>
              <h2 style={{ color: 'white' }}>Plus de stratégie. Plus de cohérence. Moins de promesses faciles.</h2>
              <p style={{ marginTop: 24 }}>
                Mon Bien Locatif a été pensé pour des clients qui attendent plus qu’une transaction : une lecture plus lucide du marché, un niveau d’accompagnement plus précis, et une qualité d’exécution plus élevée.
              </p>
            </div>
            <div className="pillars-grid">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  className="card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                >
                  <h3 style={{ fontSize: 24, margin: 0 }}>{pillar.title}</h3>
                  <p className="muted" style={{ marginTop: 14 }}>{pillar.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="investissement">
          <div className="container">
            <SectionTitle
              center
              eyebrow="Investissement"
              title="Investir avec méthode, pas au hasard"
              text="Résidence principale, actif patrimonial, opération à rendement, arbitrage ou optimisation : chaque projet doit être lu avec discipline et cohérence."
            />
            <div className="investment-grid">
              {investmentCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className="card soft-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="icon-wrap" style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)' }}><BarChart3 size={20} /></div>
                  <h3 className="investment-title">{card.title}</h3>
                  <p className="muted" style={{ marginTop: 16 }}>{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container">
            <SectionTitle
              eyebrow="Portfolio"
              title="Des opérations menées avec logique et discipline"
              text="Une sélection de cas représentatifs de notre lecture des projets : rendement, valorisation, cohérence et qualité d’exécution."
            />
            <div className="portfolio-grid">
              {portfolio.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="card" style={{ padding: 0, overflow: 'hidden' }}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="portfolio-visual" />
                  <div style={{ padding: 28 }}>
                    <p className="eyebrow" style={{ marginBottom: 12 }}>{item.subtitle}</p>
                    <h3 className="portfolio-title" style={{ marginTop: 0 }}>{item.title}</h3>
                    <p className="muted" style={{ marginTop: 16 }}>{item.text}</p>
                    <div className="tag">{item.tag}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="reseau">
          <div className="container network">
            <div className="network-grid">
              <div>
                <p className="eyebrow">Rejoindre le réseau</p>
                <h2>Pour les mandataires qui veulent plus qu’un réseau de masse.</h2>
                <p className="muted" style={{ fontSize: 18, marginTop: 24 }}>
                  Une image plus premium, des outils plus cohérents, une approche investisseur plus crédible et une structure conçue pour mieux convertir, mieux convaincre et mieux monter en gamme.
                </p>
                <div style={{ marginTop: 30 }}><PrimaryButton>Découvrir le réseau</PrimaryButton></div>
              </div>
              <div className="network-list">
                <ul>
                  <li>Positionnement différenciant et haut de gamme</li>
                  <li>Outils commerciaux plus premium</li>
                  <li>Image plus forte auprès des clients investisseurs</li>
                  <li>Structure pensée pour des profils ambitieux</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="container">
            <SectionTitle
              center
              eyebrow="FAQ"
              title="Les questions les plus fréquentes"
              text="Une base claire pour rassurer, expliquer et mieux qualifier les demandes entrantes."
            />
            <div className="faq-wrap">
              {faq.map((item, index) => (
                <motion.div
                  key={item.q}
                  className="card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <h3 className="faq-question" style={{ marginTop: 0 }}>{item.q}</h3>
                  <p className="muted" style={{ marginTop: 14 }}>{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" style={{ paddingTop: 24, paddingBottom: 88 }}>
          <div className="container contact">
            <div className="contact-grid">
              <div>
                <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>Passer à l’action</p>
                <h2 style={{ color: 'white' }}>Parlons de votre bien, de votre projet ou de votre développement.</h2>
                <p style={{ marginTop: 24, fontSize: 18 }}>
                  Vente, acquisition, investissement, structuration ou recrutement : nous construisons une réponse adaptée à votre objectif, avec méthode et exigence.
                </p>
              </div>
              <form className="form">
                <input className="field" placeholder="Nom" />
                <input className="field" placeholder="Email" />
                <input className="field" placeholder="Objet de votre demande" />
                <textarea className="textarea" placeholder="Décrivez votre projet" />
                <button type="button" className="button" style={{ background: 'white', color: 'var(--dark)', fontWeight: 700 }}>Être recontacté</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div>
            <div className="footer-title">Mon Bien Locatif</div>
            <div>Immobilier premium • Vente • Investissement • Réseau</div>
          </div>
          <div className="footer-links">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
