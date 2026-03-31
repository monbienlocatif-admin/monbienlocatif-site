import React from 'react';
import ReactDOM from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Building2, ChevronRight, LineChart, ShieldCheck, Users } from 'lucide-react';
import './index.css';

const siteContent = {
  brand: {
    name: 'Mon Bien Locatif',
    tagline: 'Immobilier d’investissement & accompagnement premium',
  },
  hero: {
    eyebrow: 'Agence immobilière pensée pour les investisseurs exigeants',
    title: 'L’immobilier pensé par des investisseurs, pour des investisseurs exigeants.',
    text: 'Vendre, acheter, investir ou structurer un projet immobilier avec plus de méthode, plus de discernement et un niveau d’accompagnement supérieur.',
    primaryCta: 'Vendre mon bien',
    secondaryCta: 'Acheter / Investir',
    tertiaryCta: 'Rejoindre le réseau',
    cardTitle: 'Une approche plus stratégique du marché et des actifs.',
    cardText:
      'Nous privilégions la qualité des décisions, la cohérence des projets et la défense de la valeur plutôt qu’une simple logique de volume.',
  },
  stats: [
    {
      value: '+5 M€',
      label:
        'investis dans des opérations immobilières suivies avec une logique de performance et de sélection',
    },
    {
      value: '40+',
      label:
        'biens accompagnés ou gérés avec une approche structurée, exigeante et orientée long terme',
    },
    {
      value: '10 %',
      label:
        'de rendement brut minimum visé sur les projets à fort potentiel sélectionnés',
    },
  ],
  services: [
    {
      title: 'Vendre un bien',
      text:
        'Une mise en marché plus intelligente, plus qualitative et plus crédible, pensée pour défendre la valeur du bien et maximiser le résultat final.',
      cta: 'Demander une estimation',
    },
    {
      title: 'Acheter / Investir',
      text:
        'Un accompagnement orienté stratégie, rendement, cohérence patrimoniale et sécurisation du projet, de l’analyse à la concrétisation.',
      cta: 'Parler de mon projet',
    },
    {
      title: 'Rejoindre le réseau',
      text:
        'Une structure pensée pour les profils ambitieux qui veulent une image plus premium, de meilleurs outils et un positionnement plus fort.',
      cta: 'Découvrir le réseau',
    },
  ],
  contact: {
    eyebrow: 'Passer à l’action',
    title: 'Parlons de votre bien, de votre projet ou de votre développement.',
    text:
      'Vente, acquisition, investissement, structuration ou recrutement : nous construisons une réponse claire, cohérente et adaptée à votre objectif.',
    button: 'Être recontacté',
  },
  images: {
    portfolio1:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    portfolio2:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    portfolio3:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
  },
};

const services = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: siteContent.services[0].title,
    text: siteContent.services[0].text,
    cta: siteContent.services[0].cta,
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: siteContent.services[1].title,
    text: siteContent.services[1].text,
    cta: siteContent.services[1].cta,
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: siteContent.services[2].title,
    text: siteContent.services[2].text,
    cta: siteContent.services[2].cta,
  },
];

const pillars = [
  {
    title: 'Vision investisseur',
    text:
      'Chaque décision est pensée avec une logique de rentabilité, de valorisation, de cohérence patrimoniale et de maîtrise du risque.',
  },
  {
    title: 'Exigence de sélection',
    text:
      'Nous privilégions les projets solides, défendables et stratégiquement cohérents plutôt que la logique de volume.',
  },
  {
    title: 'Accompagnement sur mesure',
    text:
      'Vente, acquisition, investissement ou structuration : chaque mission est adaptée au niveau d’exigence et aux objectifs du client.',
  },
  {
    title: 'Image plus haut de gamme',
    text:
      'Le site, la communication et la relation client doivent refléter un niveau de qualité supérieur aux réseaux immobiliers classiques.',
  },
];

const investmentCards = [
  {
    title: 'Projet patrimonial',
    text:
      'Pour les clients qui recherchent la qualité d’emplacement, la cohérence d’actif, la tenue long terme et la valorisation progressive.',
  },
  {
    title: 'Projet orienté rendement',
    text:
      'Pour les investisseurs qui veulent analyser le brut, le net, les travaux, le financement, la fiscalité et le risque avec méthode.',
  },
  {
    title: 'Arbitrage stratégique',
    text:
      'Pour décider s’il faut acheter, vendre, restructurer, optimiser ou conserver un actif avec une lecture plus lucide du potentiel réel.',
  },
];

const portfolio = [
  {
    title: 'Immeuble de rapport repositionné',
    subtitle: 'Hauts-de-France',
    text:
      'Analyse du potentiel, sécurisation des hypothèses d’exploitation et revalorisation d’ensemble dans une logique de performance.',
    tag: 'Rendement visé > 10 % brut',
    image: siteContent.images.portfolio1,
  },
  {
    title: 'Acquisition à forte logique locative',
    subtitle: 'Marché ciblé',
    text:
      'Étude du couple emplacement / travaux / demande locative / projection nette avant prise de décision.',
    tag: 'Approche investissement',
    image: siteContent.images.portfolio2,
  },
  {
    title: 'Commercialisation premium d’un actif',
    subtitle: 'Vente optimisée',
    text:
      'Positionnement plus défendable, meilleure mise en valeur, et stratégie conçue pour protéger le prix de sortie.',
    tag: 'Maximisation de valeur',
    image: siteContent.images.portfolio3,
  },
];

const faq = [
  {
    q: 'En quoi Mon Bien Locatif est différent d’une agence classique ?',
    a:
      'Nous raisonnons d’abord comme des investisseurs. Cela change la manière d’évaluer un bien, de le vendre, de l’acheter, de le structurer et de l’exploiter.',
  },
  {
    q: 'Accompagnez-vous uniquement des investisseurs ?',
    a:
      'Non. Nous accompagnons aussi les vendeurs et les acquéreurs, mais avec un niveau d’exigence, de méthode et de conseil supérieur à une approche transactionnelle standard.',
  },
  {
    q: 'Pourquoi privilégier une vraie estimation sur rendez-vous ?',
    a:
      'Parce qu’une valorisation sérieuse ne repose pas sur un chiffre automatique ou volontairement gonflé. Elle repose sur le bien, son marché, son potentiel et la stratégie de sortie.',
  },
  {
    q: 'À qui s’adresse votre réseau ?',
    a:
      'Aux profils ambitieux qui veulent rejoindre une structure plus qualitative, avec un positionnement plus crédible, une image plus premium et une vraie logique de montée en gamme.',
  },
];

function SectionTitle({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="text-xs uppercase tracking-[0.35em] text-stone-500 mb-4">{eyebrow}</p>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-stone-950 leading-tight">
        {title}
      </h2>
      {text && <p className="mt-5 text-base md:text-lg text-stone-600 leading-relaxed">{text}</p>}
    </div>
  );
}

function PrimaryButton({ children }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-full bg-stone-950 text-white px-6 py-3.5 text-sm font-medium shadow-sm hover:opacity-90 transition-opacity">
      {children}
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}

function SecondaryButton({ children }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3.5 text-sm font-medium text-stone-900 hover:bg-stone-50 transition-colors">
      {children}
      <ChevronRight className="h-4 w-4" />
    </button>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#f6f1e8] text-stone-900">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f6f1e8]/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-stone-500">
              {siteContent.brand.name}
            </div>
            <div className="text-base font-semibold text-stone-950">
              {siteContent.brand.tagline}
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-sm text-stone-700">
            <a href="#services" className="hover:text-stone-950">Services</a>
            <a href="#difference" className="hover:text-stone-950">Notre approche</a>
            <a href="#investissement" className="hover:text-stone-950">Investissement</a>
            <a href="#portfolio" className="hover:text-stone-950">Portfolio</a>
            <a href="#reseau" className="hover:text-stone-950">Réseau</a>
            <a href="#faq" className="hover:text-stone-950">FAQ</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            Nous contacter
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.55),transparent_30%),radial-gradient(circle_at_left,rgba(255,255,255,0.3),transparent_20%)]" />
          <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 relative">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <p className="text-xs uppercase tracking-[0.35em] text-stone-500 mb-6">
                  {siteContent.hero.eyebrow}
                </p>
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] text-stone-950 max-w-4xl">
                  {siteContent.hero.title}
                </h1>
                <p className="mt-7 max-w-2xl text-lg md:text-xl leading-relaxed text-stone-600">
                  {siteContent.hero.text}
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <PrimaryButton>{siteContent.hero.primaryCta}</PrimaryButton>
                  <SecondaryButton>{siteContent.hero.secondaryCta}</SecondaryButton>
                  <SecondaryButton>{siteContent.hero.tertiaryCta}</SecondaryButton>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}>
                <div className="rounded-[2rem] bg-gradient-to-br from-stone-950 via-stone-900 to-[#594a3c] p-7 md:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.18)] min-h-[520px] flex flex-col justify-between">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white/90">
                      <div className="text-xs uppercase tracking-[0.25em] text-white/55">Positionnement</div>
                      <div className="mt-3 text-lg font-medium">Premium</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white/90">
                      <div className="text-xs uppercase tracking-[0.25em] text-white/55">Approche</div>
                      <div className="mt-3 text-lg font-medium">Investisseur</div>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-white/10 backdrop-blur p-6 md:p-7 text-white mt-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.25em] text-white/65">
                      <ShieldCheck className="h-4 w-4" />
                      Exigence & sélection
                    </div>
                    <h3 className="mt-5 text-2xl md:text-3xl font-semibold leading-tight">
                      {siteContent.hero.cardTitle}
                    </h3>
                    <p className="mt-4 text-white/75 leading-relaxed">
                      {siteContent.hero.cardText}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
          <div className="grid md:grid-cols-3 gap-5">
            {siteContent.stats.map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm"
              >
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-950">
                  {item.value}
                </div>
                <p className="mt-4 text-stone-600 leading-relaxed">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionTitle
            eyebrow="Services"
            title="Un accompagnement immobilier plus exigeant"
            text="Chaque service répond à un objectif concret : mieux vendre, mieux investir, ou rejoindre une structure plus crédible et plus qualitative."
          />

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-stone-900">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-stone-950">{service.title}</h3>
                <p className="mt-4 text-stone-600 leading-relaxed">{service.text}</p>
                <button className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-stone-950 hover:opacity-70 transition-opacity">
                  {service.cta}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="difference" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
            <div className="rounded-[2.25rem] bg-stone-950 p-8 md:p-10 text-white shadow-[0_25px_80px_rgba(0,0,0,0.16)]">
              <p className="text-xs uppercase tracking-[0.35em] text-white/55 mb-4">Notre approche</p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                Plus de stratégie. Plus de cohérence. Moins de promesses faciles.
              </h2>
              <p className="mt-6 text-white/75 text-lg leading-relaxed">
                Mon Bien Locatif a été pensé pour des clients qui attendent plus qu’une transaction : une lecture plus lucide du marché, un niveau d’accompagnement plus précis, et une qualité d’exécution plus élevée.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="rounded-[1.75rem] border border-black/5 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-stone-950">{pillar.title}</h3>
                  <p className="mt-3 text-stone-600 leading-relaxed">{pillar.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="investissement" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionTitle
            eyebrow="Investissement"
            title="Investir avec méthode, pas au hasard"
            text="Résidence principale, actif patrimonial, opération à rendement, arbitrage ou optimisation : chaque projet doit être lu avec discipline et cohérence."
            align="center"
          />

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {investmentCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[2rem] border border-black/5 bg-[#fbf8f3] p-8 shadow-sm"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-black/5 text-stone-900">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-stone-950">{card.title}</h3>
                <p className="mt-4 text-stone-600 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionTitle
            eyebrow="Portfolio"
            title="Des opérations menées avec logique et discipline"
            text="Une sélection de cas représentatifs de notre lecture des projets : rendement, valorisation, cohérence et qualité d’exécution."
          />

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm"
              >
                <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.3em] text-stone-500">{item.subtitle}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">{item.title}</h3>
                  <p className="mt-4 text-stone-600 leading-relaxed">{item.text}</p>
                  <div className="mt-6 inline-flex rounded-full border border-black/5 bg-stone-100 px-4 py-2 text-sm font-medium text-stone-800">
                    {item.tag}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="reseau" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="rounded-[2.5rem] border border-black/5 bg-white p-8 md:p-12 shadow-sm">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-stone-500 mb-4">Rejoindre le réseau</p>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-stone-950">
                  Pour les mandataires qui veulent plus qu’un réseau de masse.
                </h2>
                <p className="mt-6 text-lg text-stone-600 leading-relaxed max-w-2xl">
                  Une image plus premium, des outils plus cohérents, une approche investisseur plus crédible et une structure conçue pour mieux convertir, mieux convaincre et mieux monter en gamme.
                </p>
                <div className="mt-8">
                  <PrimaryButton>Découvrir le réseau</PrimaryButton>
                </div>
              </div>

              <div className="rounded-[2rem] bg-stone-950 p-8 text-white">
                <ul className="space-y-5 text-white/85 leading-relaxed">
                  <li>• Positionnement différenciant et haut de gamme</li>
                  <li>• Outils commerciaux plus premium</li>
                  <li>• Image plus forte auprès des clients investisseurs</li>
                  <li>• Structure pensée pour des profils ambitieux</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <SectionTitle
            eyebrow="FAQ"
            title="Les questions les plus fréquentes"
            text="Une base claire pour rassurer, expliquer et mieux qualifier les demandes entrantes."
            align="center"
          />

          <div className="mt-12 space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-[1.5rem] border border-black/5 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-semibold tracking-tight text-stone-950">{item.q}</h3>
                <p className="mt-3 text-stone-600 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pt-8 pb-24 md:pb-28">
          <div className="rounded-[2.5rem] bg-stone-950 p-8 md:p-12 text-white shadow-[0_25px_80px_rgba(0,0,0,0.18)]">
            <div className="grid lg:grid-cols-[1fr_0.95fr] gap-10 items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/55 mb-4">
                  {siteContent.contact.eyebrow}
                </p>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                  {siteContent.contact.title}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/75 max-w-2xl">
                  {siteContent.contact.text}
                </p>
              </div>

              <form className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <input className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-white/35" placeholder="Nom" />
                <input className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-white/35" placeholder="Email" />
                <input className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-white/35" placeholder="Objet de votre demande" />
                <textarea className="min-h-[140px] rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-white/35" placeholder="Décrivez votre projet" />
                <button type="button" className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-stone-950 hover:opacity-90 transition-opacity">
                  {siteContent.contact.button}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-stone-600">
          <div>
            <div className="font-semibold text-stone-950">{siteContent.brand.name}</div>
            <div>Immobilier premium • Vente • Investissement • Réseau</div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-stone-950">Mentions légales</a>
            <a href="#" className="hover:text-stone-950">Politique de confidentialité</a>
            <a href="#contact" className="hover:text-stone-950">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
