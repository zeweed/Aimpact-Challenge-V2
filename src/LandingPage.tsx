import React, { useState, useEffect } from 'react';
import {ArrowRight, Play, CheckCircle2, Zap, Target, BarChart, Calendar, Shield, Cpu, MessageSquare, TrendingUp, Lock, X} from 'lucide-react';
import { motion } from 'motion/react';

// --- UI Components ---


const BentoCard = ({ children, className = '', glow = false, ...props }: { children: React.ReactNode, className?: string, glow?: boolean } & React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={`bento-card relative overflow-hidden rounded-[32px] bg-zinc-950/50 border border-zinc-800/80 p-6 md:p-10 backdrop-blur-xl transition-all duration-500 hover:bg-zinc-900/80 group ${className}`}>
    {glow && (
      <div className="absolute top-0 right-0 p-32 bg-brand/20 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
    )}
    <div className="relative z-10 h-full flex flex-col">
      {children}
    </div>
  </div>
);

const Badge = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-zinc-800 bg-zinc-950/80 backdrop-blur-md text-zinc-300 ${className}`}>
    <span className="w-1.5 h-1.5 rounded-full bg-brand mr-2 animate-pulse"></span>
    {children}
  </div>
);

const NavBar = () => (
  <motion.nav 
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[90%] max-w-5xl"
  >
    <div className="navbar-inner flex items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-full border border-zinc-800/80 bg-black/60 backdrop-blur-xl shadow-2xl">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center">
          <Zap className="w-3 h-3 text-white" />
        </div>
        <span className="font-display font-bold text-white tracking-tight">AI Impact</span>
      </div>
      
      <div className="nav-links hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <a href="#programme" className="hover:text-white transition-colors">Programme</a>
        <a href="#resultats" className="hover:text-white transition-colors">Résultats</a>
        <a href="#methode" className="hover:text-white transition-colors">Méthode</a>
      </div>

      <a href="#offre" className="nav-cta px-5 py-2 rounded-full bg-brand text-white text-sm font-bold hover:bg-brand-light transition-all shadow-[0_0_20px_rgba(19,81,53,0.4)]">
        Prendre sa place
      </a>
    </div>
  </motion.nav>
);

// --- Sections ---

const Hero = () => {
  return (
    <section className="hero-section relative min-h-screen pt-32 pb-12 md:pt-40 md:pb-20 px-4 md:px-6 flex flex-col justify-center overflow-hidden">
      {/* Abstract Glowing Background representing the "Medusa" energy from inspiration */}
      <div className="absolute top-1/4 right-0 md:right-1/4 w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] bg-brand/30 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">
        
        {/* Left Column: Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="mb-6 md:mb-8">Challenge V2.0</Badge>
            
            <h1 className="hero-title text-5xl sm:text-6xl md:text-8xl lg:text-[100px] font-display font-medium tracking-tighter leading-[0.95] text-white">
              Du Contenu.<br/>
              <span className="italic text-brand-light">De l'Audience.</span><br/>
              De l'Argent.
            </h1>
            
            <p className="hero-subtitle mt-6 md:mt-8 text-base md:text-xl text-zinc-400 max-w-xl leading-relaxed">
              Pendant que tu lis ça, quelqu'un dans ta niche construit l'audience que tu aurais dû avoir. Le <strong className="text-white font-medium">AI Impact Challenge 2.0</strong> change ça — en 13 jours.
            </p>
            
            <div className="hero-cta-container mt-8 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a href="#offre" className="hero-cta-btn group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform w-full sm:w-auto">
                Prendre sa place
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#resultats" className="hero-cta-btn v1-btn flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-zinc-800 text-white font-medium hover:bg-zinc-900 transition-colors w-full sm:w-auto">
                <Play className="w-4 h-4" />
                Voir la V1
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-zinc-500 font-medium font-mono uppercase tracking-widest">
              <span>Prix libre</span>
              <span className="w-1 h-1 bg-zinc-700 mx-1 rounded-full"></span>
              <span>Accès immédiat</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Floating Stats (like the inspiration bento boxes) */}
        <div className="lg:col-span-5 relative mt-16 md:mt-12 lg:mt-0 min-h-0 lg:min-h-[400px] flex flex-col items-center gap-4 lg:block lg:gap-0">
           <motion.div 
             initial={{ opacity: 0, x: 50, rotate: 5 }}
             animate={{ opacity: 1, x: 0, rotate: 0 }}
             transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
             className="relative lg:absolute top-0 lg:right-0 w-full lg:w-11/12 max-w-sm lg:-mr-12"
           >
             <BentoCard className="bg-zinc-950/80">
               <div className="flex justify-between items-start mb-6">
                 <span className="text-sm font-medium text-zinc-400">V1 du Challenge</span>
                 <BarChart className="w-5 h-5 text-brand-light" />
               </div>
               <div className="stat-number text-6xl font-display font-medium text-white mb-2">500+</div>
               <p className="text-sm text-zinc-500">Participants à la première édition.</p>
             </BentoCard>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 50, rotate: -3 }}
             animate={{ opacity: 1, x: 0, rotate: 0 }}
             transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
             className="relative lg:absolute lg:top-48 xl:top-64 left-0 w-full lg:w-11/12 max-w-xs lg:-ml-8"
           >
             <BentoCard className="bg-black/80 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="flex justify-between items-start mb-4">
                 <span className="text-sm font-medium text-zinc-400">Reach Total</span>
                 <Zap className="w-5 h-5 text-brand" />
               </div>
               <div className="flex items-end gap-3 mb-2">
                 <div className="stat-number text-5xl font-display font-medium text-white">8M+</div>
                 <div className="text-brand font-medium pb-1.5 flex items-center"><TrendingUp className="w-4 h-4 mr-1"/> Top</div>
               </div>
               <p className="text-sm text-zinc-500">Vues générées en seulement 10 jours.</p>
             </BentoCard>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
             className="relative lg:absolute lg:top-[380px] xl:top-[480px] lg:-right-4 w-full max-w-sm lg:max-w-[280px] mt-4 lg:mt-0"
           >
             <div className="py-4 px-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm shadow-[0_0_50px_rgba(19,81,53,0.3)]">
                <p className="text-brand-light text-xs font-bold uppercase tracking-wider mb-1">Impact V1</p>
                <p className="text-xl font-display text-white leading-tight font-medium">+100 entrepreneurs<br/><span className="text-sm font-sans text-brand-light font-normal mt-1 block">Vivent de leur contenu aujourd'hui.</span></p>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

const HugeStatement = () => (
  <section className="py-16 md:py-24 px-4 md:px-6 border-y border-zinc-900/50 bg-black/50 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(19,81,53,0.1)_0%,transparent_70%)]"></div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="section-title text-2xl md:text-4xl lg:text-5xl font-display font-medium leading-tight text-white">
        Ceux qui ont participé à la V1 avaient un avantage sur toi. <br/><span className="text-brand-light italic">Maintenant, c'est toi qui as l'avantage.</span>
      </h2>
    </div>
  </section>
);

const OriginStory = () => (
  <section className="py-16 md:py-32 px-4 md:px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        
        <div className="relative rounded-[32px] overflow-hidden border border-zinc-800 group aspect-[4/5] md:aspect-square flex items-end">
           {/* Image of Divin Setondji */}
           <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
              <img 
                src="https://live.divin.business/wp-content/uploads/2026/03/CHARIOW-CREATORS-MEETUP257-scaled.jpg" 
                alt="Divin Setondji" 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-top lg:object-center opacity-90 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
           </div>
           
           <div className="relative z-20 p-8 w-full">
             <Badge className="mb-4 bg-black border-zinc-700">Le Grand Chef</Badge>
             <h3 className="card-title text-3xl font-display font-medium text-white mb-2">Divin Setondji</h3>
             <p className="text-zinc-400 font-mono text-sm">Contentpreneur, le créateur de créateurs</p>
           </div>
        </div>

        <div>
          <h2 className="font-display font-medium text-white mb-6 md:mb-8 leading-tight whitespace-nowrap text-[clamp(16px,4.5vw,28px)] md:text-[clamp(24px,3.5vw,32px)] lg:text-[clamp(22px,2.5vw,40px)]">
            Il est allé là où tu veux aller.<br/> Il revient te montrer le chemin.
          </h2>
          <div className="space-y-6 text-lg text-zinc-400">
            <p>24 ans. Parti de zéro, sans budget pub, sans réseau établi dans le digital. Juste un clavier et une certitude absolue.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 w-full">
              <div className="px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/50">
                <span className="stat-number block text-2xl font-display text-white">37k+</span>
                <span className="text-xs uppercase tracking-wider">Abonnés</span>
              </div>
              <div className="px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/50">
                <span className="stat-number block text-2xl font-display text-white">11k+</span>
                <span className="text-xs uppercase tracking-wider">Contacts WhatsApp</span>
              </div>
              <div className="px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/50">
                <span className="stat-number block text-2xl font-display text-white">2</span>
                <span className="text-xs uppercase tracking-wider">Passages TV</span>
              </div>
            </div>

            <p>Ce qu'il transmet n'est pas une théorie lue dans un livre. C'est un chemin qu'il a bâti de ses mains. Tu n'as pas à chercher la route. Il a déjà macadamisé la piste.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Arsenal = () => (
  <section id="methode" className="py-16 md:py-32 px-4 md:px-6 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
    <div className="absolute top-0 right-1/2 w-[800px] h-[800px] bg-brand/10 blur-[150px] rounded-full pointer-events-none translate-x-1/2"></div>
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="mb-12 md:mb-20 max-w-2xl">
        <Badge className="mb-4 md:mb-6">Ce que tu reçois</Badge>
        <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tighter">
          L'Arsenal Injuste.
        </h2>
        <p className="mt-6 text-xl text-zinc-400">Ce que les créateurs qui te devancent utilisent déjà et que tu n'as pas encore.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <BentoCard glow className="md:col-span-1">
          <Target className="w-8 h-8 text-white mb-6" />
          <h3 className="card-title text-2xl font-display font-medium text-white mb-4">Sniper Viral</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Un système automatisé qui détecte le contenu qui monte *avant* tout le monde. Installation unique. Pendant que les concurrents réagissent, tu as déjà publié.
          </p>
        </BentoCard>
        
        <BentoCard glow className="md:col-span-1">
          <Cpu className="w-8 h-8 text-white mb-6" />
          <h3 className="card-title text-2xl font-display font-medium text-white mb-4">Workflow Claude</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Un système plug-and-play qui supprime la page blanche définitivement. On ne cherche plus quoi dire : on exécute une ligne éditoriale produite à la chaîne.
          </p>
        </BentoCard>

        {/* The standout feature takes more space visually in the bento */}
        <BentoCard glow className="md:col-span-3 lg:col-span-1 bg-gradient-to-br from-brand-dark to-black border-brand/30">
          <div className="absolute top-0 right-0 p-6">
             <span className="text-[100px] font-display font-bold text-white/5 leading-none absolute -top-4 -right-4">135</span>
          </div>
          <Lock className="w-8 h-8 text-brand-light mb-6 relative z-10" />
          <h3 className="card-title text-3xl font-display font-medium text-white mb-4 relative z-10">Méthode 1-3-5</h3>
          <p className="text-zinc-300 text-sm leading-relaxed mb-6">
            Elle n'existe nulle part sur internet. Pas de tutoriel. Pas de thread YouTube. Elle appartient exclusivement à ceux qui participent au challenge. Le cœur de ton système.
          </p>
        </BentoCard>
      </div>
    </div>
  </section>
);

const TimelineObj = () => (
  <section id="programme" className="py-16 md:py-32 px-4 md:px-6">
    <div className="max-w-7xl mx-auto">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        <div className="lg:col-span-4">
          <h2 className="section-title text-3xl md:text-5xl font-display font-medium text-white leading-tight sticky top-24 md:top-32">
            13 jours.<br/>Pas pour apprendre.<br/><span className="text-brand-light">Pour basculer.</span>
          </h2>
        </div>
        
        <div className="lg:col-span-8 flex flex-col gap-6">
          <BentoCard className="border-l-4 border-l-brand-light">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 md:gap-4 mb-4 md:mb-6">
              <h3 className="card-title text-2xl md:text-3xl font-display font-medium text-white">Armer son système</h3>
              <span className="font-mono text-brand font-bold tracking-widest uppercase text-sm md:text-base">Jours 1 → 3</span>
            </div>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 shrink-0 text-zinc-700" /> Installer son avantage concurrentiel : les outils secrets.</li>
              <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 shrink-0 text-zinc-700" /> Apprendre l'inconnu : le workflow activé, la méthode révélée.</li>
              <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 shrink-0 text-zinc-700" /> Définir l'indestructible : niche, angle, voix. Le socle.</li>
            </ul>
          </BentoCard>

          <BentoCard className="border-l-4 border-l-white">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 md:gap-4 mb-4 md:mb-6">
              <h3 className="card-title text-2xl md:text-3xl font-display font-medium text-white">Imposer sa présence</h3>
              <span className="font-mono text-zinc-500 font-bold tracking-widest uppercase text-sm md:text-base">Jours 4 → 13</span>
            </div>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex gap-4"><Calendar className="w-6 h-6 shrink-0 text-zinc-700" /> 1 brief quotidien chirurgical fourni par Divin.</li>
              <li className="flex gap-4"><Play className="w-6 h-6 shrink-0 text-zinc-700" /> 1 post publié chaque jour. Sans exception. Zéro délai.</li>
              <li className="flex gap-4"><MessageSquare className="w-6 h-6 shrink-0 text-zinc-700" /> Lives de suivi sur Meet & Feedback communautaire immédiat.</li>
            </ul>
          </BentoCard>

          <div className="mt-6 md:mt-8 p-6 md:p-8 rounded-[32px] bg-white text-black text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <p className="text-lg md:text-xl font-medium tracking-tight">Ceux qui ont posté tous les jours dans la V1 ont tout obtenu. Ceux qui ont hésité ont regardé les autres grandir.</p>
            <div className="stat-number shrink-0 text-2xl md:text-3xl font-display font-bold">Tout peut changer <br/><span className="text-brand">en 10 post.</span></div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
);

const WallOfFame = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const testimonialsData = [
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG000-21.jpg", name: "Emma-Alk D.", role: "Freelance", result: "A appliqué le conseil, ne jamais tutoyer le client — closé à 1 200€ le lendemain." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_3122.png", name: "Mauren A.", role: "Créateur de contenu", result: "31 000 personnes atteintes, +300 likes, +160 commentaires — post viral." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_3123.png", name: "Mauren A.", role: "Créateur de contenu", result: "496 réactions, 202 partages — débattu stratégiquement par des inconnus." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5020.png", name: "Miss Nzeukeu", role: "Créatrice de contenu", result: "'C'était déroutant, on dirait une transcription des pensées de mon esprit.'" },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5022.png", name: "Fresnel Anani", role: "Participant", result: "'Un chef œuvre, j'ai cru que c'était moi qui l'avais rédigé à la main.'" },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5024.png", name: "Auréole AVOCETIEN", role: "Participante", result: "'Je l'ai adoré.' — Trois mots, une réaction cœur, et tout est dit." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5027.png", name: "Djigbodi SS", role: "Participant", result: "'Je l'ai lu et relu à haute voix. C'est ainsi que j'aimerais écrire.'" },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5041.png", name: "KOUAMÉ Serge", role: "Créateur de contenu", result: "'Les sujets que GPT a générés en suivant la stratégie sont tout simplement wow.'" },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5062.png", name: "DAOUDA Hamidath", role: "Créatrice de contenu", result: "Le challenge a structuré sa ligne éditoriale. Elle publie sans stress." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5063.png", name: "DAOUDA Hamidath", role: "Créatrice de contenu", result: "En 5 jours de posts, elle a dépassé ses stats de mois entiers." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5066.png", name: "Céphas KEKE", role: "Entrepreneur", result: "Sorti de sa zone de confort — a trouvé une idée business alignée à sa passion." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5067.png", name: "Lebrun", role: "Créateur de contenu", result: "'Ce challenge est une dinguerie. 90% du potentiel de GPT m'était encore inconnu.'" },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5068.png", name: "Bénédicte AKOHOGNI", role: "Créatrice de contenu", result: "'Ce challenge est juste exceptionnel.' Elle peut publier 93 fois en une journée." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5069.png", name: "Bénédicte AKOHOGNI", role: "Créatrice de contenu", result: "En 5 jours, elle a dépassé toutes ses stats précédentes et touche enfin sa cible." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5070.png", name: "Bénédicte AKOHOGNI", role: "Créatrice de contenu", result: "'Avant c'était juste des réactions.' Maintenant de vraies conversations s'animent." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5071.png", name: "Flori", role: "Créateur de contenu", result: "Visibilité, Hooks en 3 secondes, meilleure IA — sa façon de créer a changé." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5073.png", name: "Michel T.", role: "Créateur de contenu", result: "'J'ai trouvé le bon filon pour multiplier exponentiellement l'impact de mes posts.'" },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5075.png", name: "Anonyme", role: "Créateur de contenu", result: "Ses 2 posts du challenge sont ses meilleurs résultats — il manquait juste les éléments clés." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5079.png", name: "Hamza", role: "Créateur de contenu", result: "Premier client en ligne décroché — 3 posts par jour sans effort, contre 1 impossible avant." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5080.png", name: "Emeric", role: "Créateur de contenu", result: "'Le faiseur de Rois' — communauté active à chaque post, record en approche." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5082.png", name: "Joana Tiphanie", role: "Créatrice de contenu", result: "'C'est le meilleur des challenges. Ce challenge a été pour moi un vrai déclic.'" },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5441.jpg", name: "Tableau de bord FB", role: "14 jours", result: "52 275 vues (+139,8%) et 2 196 interactions (+97,1%) — 1 févr. au 14 févr." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5442.jpg", name: "Tableau de bord FB", role: "28 jours", result: "74 071 vues (+37%), 5,4K engagements, 63 nouveaux followers (+50%)." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5444.jpg", name: "Stats post individuel", role: "5 févr. 2025", result: "11 540 vues, 241 réactions, couverture de 9 724 personnes — un seul post." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5445.jpg", name: "Tableau de bord FB", role: "28 jours", result: "47 034 vues (+147,4%) et 1 362 interactions (+172,9%) — 2 362 followers." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5446.jpg", name: "Tableau de bord FB", role: "14 jours", result: "32 098 vues (+114,9%) et 1 028 interactions (+207,8%) — même compte." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5448.jpg", name: "Tableau de bord FB", role: "28 jours", result: "189 925 vues (+88%) et 7,9K interactions — pics importants en février." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5460.jpg", name: "Tableau de bord FB", role: "14 jours", result: "5 278 vues (+155,5%) et 609 interactions (+254,1%)." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5463.jpg", name: "Tableau de bord FB", role: "28 jours", result: "102 632 vues (+56,2%) — cap des 100K franchi en un mois." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5466.jpg", name: "Tableau de bord FB", role: "14 jours", result: "109 817 vues — après avoir atteint les 183K la semaine précédente." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5469.jpg", name: "Tableau de bord FB", role: "14 jours", result: "24 830 vues, 787 interactions, 6 354 followers — 66% dans la tranche 18-24 ans." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5470.jpg", name: "Stats post individuel", role: "4 févr. 2025", result: "6 737 vues, 336 interactions sur un seul post." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5506.jpg", name: "Tableau de bord FB", role: "14 jours", result: "19 434 vues (+414,4%) — multiplié par 5 en deux semaines." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5507.jpg", name: "Tableau de bord FB", role: "28 jours", result: "23 212 vues (+3 200%) — parti de 697 vues, arrivé à 23K en un mois." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5508.jpg", name: "Joël Boton", role: "Créateur de contenu", result: "21,1K vues (+670%), 558 interactions (+197%), 6 nouveaux followers (+200%)." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_5509.jpg", name: "Tableau de bord FB", role: "28 jours", result: "8,5K vues (+54%) et 993 interactions (+32%)." },
    { url: "https://live.divin.business/wp-content/uploads/2026/04/IMG_6758.png", name: "Mocktar Yessoufou", role: "Créateur de contenu", result: "'Je me réveille et ton post est à quasiment 1K de likes. Tu prends le pli.'" }
  ];

  const row1 = testimonialsData.slice(0, 19);
  const row2 = testimonialsData.slice(19, 37);

  // Close lightbox on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const TestimonialCard: React.FC<{ item: typeof testimonialsData[0] }> = ({ item }) => (
    <div className="w-[85vw] md:w-[280px] h-auto flex flex-col rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] overflow-hidden shrink-0 mx-3 md:mx-4 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(19,81,53,0.4)] cursor-pointer" onClick={() => setSelectedImage(item.url)}>
      <div className="h-[180px] w-full overflow-hidden bg-black/50">
        <img src={item.url} alt={`Témoignage de ${item.name}`} className="w-full h-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
      </div>
      <div className="p-[14px] flex flex-col flex-1">
        <p className="text-sm mb-3 font-sans">
          <span className="font-bold text-white">{item.name}</span> <span className="text-zinc-500">· {item.role}</span>
        </p>
        <p className="mt-auto text-[13px] text-[#135135] font-mono leading-snug">
          {item.result}
        </p>
      </div>
    </div>
  );

  return (
    <section id="resultats" className="py-16 md:py-32 bg-[#070707] overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-10 md:mb-16">
        <div className="flex flex-col flex-col-reverse md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white mb-4 md:mb-6">Ils avaient peur. Ils ont joué quand même.</h2>
            <p className="text-zinc-400 text-sm md:text-base">Ces gens ne sont pas exceptionnels. Ils ont juste décidé de ne plus attendre. Plus d'un an après, leurs résultats tiennent encore.</p>
          </div>
          <div className="text-center md:text-right shrink-0">
             <div className="stat-number text-6xl md:text-7xl font-display font-medium text-white leading-none">120+</div>
             <div className="text-brand-light font-mono text-xs md:text-sm tracking-widest uppercase mt-2">Créateurs transformés</div>
          </div>
        </div>
      </div>

      {/* Desktop View (2 horizontal rows) */}
      <div className="hidden md:flex flex-col gap-6 w-full -mx-4 md:mx-0">
        {/* Row 1 - scrolling left */}
        <div className="relative w-full overflow-hidden">
          <div className="scrolling-wrapper-horizontal animate-scroll-left">
            {[...row1, ...row1].map((item, idx) => (
              <TestimonialCard key={`r1-${idx}`} item={item} />
            ))}
          </div>
        </div>
        {/* Row 2 - scrolling right */}
        <div className="relative w-full overflow-hidden">
          <div className="scrolling-wrapper-horizontal animate-scroll-right">
            {[...row2, ...row2].map((item, idx) => (
               <TestimonialCard key={`r2-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View (1 vertical column) */}
      <div className="md:hidden relative w-full h-[80vh] overflow-hidden flex justify-center">
         {/* Top and bottom gradient fade for smooth entrance/exit */}
         <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#070707] to-transparent z-10 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#070707] to-transparent z-10 pointer-events-none"></div>
         
         <div className="scrolling-wrapper-vertical animate-scroll-up px-2">
            {[...testimonialsData, ...testimonialsData].map((item, idx) => (
              <div key={`m-${idx}`} className="mb-6">
                <TestimonialCard item={item} />
              </div>
            ))}
         </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-[rgba(0,0,0,0.92)] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-black/50 rounded-full p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Preview" 
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

const ChariowModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const script = document.createElement('script');
      script.src = 'https://js.chariowcdn.com/v1/widget.min.js';
      script.async = true;
      document.head.appendChild(script);

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://js.chariowcdn.com/v1/widget.min.css';
      document.head.appendChild(link);
      
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm" onClick={onClose}>
        <div className="relative bg-zinc-950 border border-zinc-800 rounded-[24px] overflow-hidden w-full max-w-xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <button 
             className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors bg-black/50 rounded-full p-2"
             onClick={onClose}
           >
             <X className="w-5 h-5" />
           </button>
           
           <div className="p-2 md:p-6 pt-12 text-center min-h-[300px] flex items-center justify-center">
             <div id="chariow-widget" data-product-id="prd_19hd61"
                data-store-domain="go.divin.business"
                data-style="frame"
                data-border-style="rounded"
                data-cta-width="xs"
                data-cta-animation="none"
                data-locale="en"
                data-primary-color="#136136"
                data-background-color="#000000"
                className="w-full">
             </div>
           </div>
        </div>
    </div>
  );
};

const PricingSection = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <section id="offre" className="py-16 md:py-32 px-4 md:px-6 relative flex flex-col items-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10 text-center flex flex-col items-center w-full">
        <h2 className="section-title text-4xl md:text-5xl lg:text-7xl font-display font-medium text-white tracking-tighter mb-4 md:mb-6">
          1€. Pas plus. Sauf si tu veux.
        </h2>
        <p className="text-base md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 md:mb-16 whitespace-pre-line leading-relaxed">
          Ce n'est pas un tarif. C'est un filtre.
          Ceux qui entrent à 1€ s'engagent autant que les autres —
          parce que ce n'est pas l'argent qui crée l'engagement.
          <span className="text-white font-medium block mt-2">C'est la décision de rejoindre.</span>
        </p>

        <BentoCard className="w-full max-w-2xl mx-auto flex flex-col items-center border-brand/50 bg-brand-dark/20 relative shadow-[0_0_50px_rgba(19,81,53,0.15)] glow min-h-0 text-center p-0 md:p-0">
          <div className="prix-simple">
            <div className="prix-simple-amount">1€</div>
            <div className="prix-simple-label">symbolique — minimum</div>
            <p className="prix-simple-sub">
              Tu peux choisir de donner plus. Beaucoup le font.
              Mais 1€, c'est suffisant pour rejoindre le <strong className="text-white">Challenge</strong> et accéder à tout.
            </p>
          </div>
          
          <div className="w-full px-6 md:px-12 text-left mb-8 flex justify-center">
              <ul className="flex flex-col gap-3 text-[14px] text-[#EFEFEF] max-w-sm w-full">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#135135] shrink-0" />Programme complet 13 jours (3 jours setup + 10 jours posting)</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#135135] shrink-0" />Outils d'automatisation virale installables</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#135135] shrink-0" />Workflow Claude complet</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#135135] shrink-0" />Méthode 1-3-5 — jamais publiée nulle part</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#135135] shrink-0" />Lives Google Meet + feedback quotidien</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#135135] shrink-0" />Accès communauté Challenge</li>
              </ul>
          </div>

          <div className="px-6 md:px-8 pb-8 md:pb-10 w-full flex justify-center">
            <button 
              onClick={() => setIsCheckoutOpen(true)}
              className="hero-cta-btn w-full max-w-md px-6 py-4 h-auto min-h-[56px] whitespace-normal bg-white text-black rounded-full text-sm md:text-base font-bold hover:bg-zinc-200 transition-colors shadow-lg"
            >
              Je Rejoins Le Challenge !
            </button>
          </div>
        </BentoCard>
      </div>

      <ChariowModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </section>
  );
};

const SafeFooter = () => (
  <footer className="py-10 md:py-12 border-t border-zinc-900 bg-black text-zinc-500 text-center md:text-left px-4 md:px-6">
    <div className="footer-container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
      <div className="font-display">
        <span className="text-white font-medium tracking-tight">AI Impact Challenge 2.0</span> 
        <span className="hidden md:inline mx-4">|</span>
        <span className="block md:inline mt-2 md:mt-0 text-sm">ETS Scientist Digital Marketing © 2026</span>
      </div>
      <div className="flex gap-6 text-sm">
        <span className="flex items-center gap-2"><Lock className="w-4 h-4"/> Paiement sécurisé via Chariow</span>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-brand selection:text-white pb-0">
      <NavBar />
      <Hero />
      <WallOfFame />
      <HugeStatement />
      <Arsenal />
      <TimelineObj />
      <OriginStory />
      <PricingSection />
      <SafeFooter />
    </div>
  );
}
