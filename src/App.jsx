import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Youtube, Mail, Menu, X, ArrowRight } from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORKS', href: '#works' },
    { name: 'SERVICES', href: '#services' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <span className="neon-text">REN.AMAHA</span>
        </div>

        <ul className="nav-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <button className="mobile-menu-btn mobile-only" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: background 0.3s ease;
        }
        .navbar.scrolled {
          background: rgba(5, 5, 5, 0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--accent-color-glow);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .logo {
          font-family: var(--font-accent);
          font-size: 1.5rem;
          font-weight: 700;
        }
        .nav-links {
          display: flex;
          gap: 40px;
        }
        .nav-links a {
          font-family: var(--font-accent);
          font-size: 0.9rem;
          letter-spacing: 1px;
        }
        .nav-links a:hover {
          color: var(--accent-color);
          text-shadow: 0 0 8px var(--accent-color);
        }
        .mobile-only { display: none; }
        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .mobile-only { display: block; }
          .mobile-menu {
            position: absolute;
            top: var(--header-height);
            left: 0;
            width: 100%;
            background: var(--bg-color);
            padding: 20px;
            border-bottom: 1px solid var(--accent-color);
          }
          .mobile-menu ul {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
          }
        }
      `}</style>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="container hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="hero-subline neon-text">AI Creator / AI writer</h2>
        <h1 className="hero-title">CREATIVE<br /><span className="neon-text">PORTFOLIO</span></h1>
        <p className="hero-description">
          あなたのビジョンを、最新のクリエイティブで現実に。
        </p>
        <motion.a
          href="#works"
          className="cta-button neon-border"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px var(--accent-color)" }}
          whileTap={{ scale: 0.95 }}
        >
          VIEW WORKS <ArrowRight size={20} />
        </motion.a>
      </motion.div>

      <style jsx>{`
        .hero-section {
          position: relative;
          overflow: hidden;
        }
        .hero-content {
          text-align: center;
          z-index: 1;
        }
        .hero-subline {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }
        .hero-title {
          font-size: clamp(3rem, 10vw, 6rem);
          line-height: 1;
          margin-bottom: 30px;
        }
        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 40px;
          color: #aaa;
        }
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 40px;
          font-family: var(--font-accent);
          background: transparent;
          color: white;
          font-weight: 700;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

const Works = () => {
  const works = [
    { title: '親愛なるふぉいへ / DJ SHACHO - Dear Foy', category: 'YOUTUBE', url: 'https://youtu.be/0cPRPZDce68?si=zH-4TtOxQSJQcrHl', image: 'https://img.youtube.com/vi/0cPRPZDce68/maxresdefault.jpg' },
    { title: 'Gong cha ショートアニメPV', category: 'TIKTOK', url: 'https://www.tiktok.com/@gongcha_japan/video/7617858493025979668?is_from_webapp=1&sender_device=pc&web_id=7613336404365510161', image: '/assets/gongcha_thumb.jpg' },
    { title: 'Dr.MARTENS 新作PV', category: 'INSTAGRAM', url: 'https://www.instagram.com/reel/DLqc6rsM8pY/?igsh=MXM1eHVwcTA0cHoxMA==', image: '/assets/dr_martens_pv.jpg' },
    { title: 'けんじイケメン化計画 - YouTube', category: 'YOUTUBE', url: 'https://youtu.be/V-BIJxHB_fw?si=eHUQpfb0h7TlDy6h', image: 'https://img.youtube.com/vi/V-BIJxHB_fw/maxresdefault.jpg' },
    { title: 'AIが考えた"短編映画"『怪獣』', category: 'YOUTUBE', url: 'https://youtu.be/7Eu0QTsAGHQ?si=z_oP64TnvyIHZ3xC', image: 'https://img.youtube.com/vi/7Eu0QTsAGHQ/maxresdefault.jpg' },
    { title: '【AIが考えた】『機動戦士DunGam AIZaaaaaaR（アイザー）-Beginning-』予告', category: 'YOUTUBE', url: 'https://youtu.be/XRAMr4zTsxI?si=6kxBxJZMZMg0yC53', image: 'https://img.youtube.com/vi/XRAMr4zTsxI/maxresdefault.jpg' },
    { title: 'IFE - Maleficent (Official Music Video)', category: 'YOUTUBE', url: 'https://youtu.be/7DsQg24fVZY?si=bGwpMFjXRgmYssPq', image: 'https://img.youtube.com/vi/7DsQg24fVZY/maxresdefault.jpg' },
    { title: '【MUSIC VIDEO】「千年愛歌-五月雨-」/剣豪スレイヤー', category: 'YOUTUBE', url: 'https://youtu.be/pnAT2TNRKoA?si=CfbXPJSj4ytFeQXq', image: 'https://img.youtube.com/vi/pnAT2TNRKoA/maxresdefault.jpg' },
    { title: 'etc...', category: 'OTHERS', url: '#', image: '/assets/etc_bg.png' },
  ];

  return (
    <section id="works" className="works-section">
      <div className="container-fluid">
        <div className="container">
          <h2 className="section-title"><span className="neon-text">/</span> WORKS</h2>
        </div>
        <div className="works-grid">
          {works.map((work, index) => (
            <motion.a
              key={index}
              href={work.url}
              target={work.url === '#' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="work-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="work-image-container neon-border">
                <img src={work.image} alt={work.title} />
                <div className="work-overlay">
                  <span>{work.title === 'etc...' ? 'MORE WORKS' : 'VIEW PROJECT'}</span>
                </div>
              </div>
              <div className="work-info">
                <p className="work-category neon-text">{work.category}</p>
                <h3 className="work-title">{work.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container-fluid {
           width: 100%;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 50px;
        }
        .works-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          width: 100%;
        }
        @media (max-width: 1024px) {
          .works-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .works-grid {
            grid-template-columns: 1fr;
          }
        }
        .work-card {
          display: block;
          padding: 20px;
        }
        .work-image-container {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
          margin-bottom: 15px;
        }
        .work-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .work-card:hover img {
          transform: scale(1.05);
        }
        .work-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(188, 19, 254, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .work-card:hover .work-overlay {
          opacity: 1;
        }
        .work-overlay span {
          font-family: var(--font-accent);
          font-weight: 700;
          padding: 10px 20px;
          border: 2px solid white;
        }
        .work-category {
          font-size: 0.8rem;
          margin-bottom: 5px;
        }
        .work-title {
          font-size: 1rem;
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
};

const UseCases = () => {
  const useCases = [
    {
      title: 'SNS用ショート動画制作',
      desc: '視聴者の“1秒離脱”を防ぎ、最後まで見られる設計でバズを生むショート動画を制作',
      image: '/assets/use_case_sns_v2.png'
    },
    {
      title: '営業用プロモーション動画',
      desc: '商品・サービスの魅力を最短で伝え、問い合わせ・成約につなげる営業特化型動画を制作',
      image: '/assets/use_case_promotion_v2.png'
    },
    {
      title: 'Music Video制作',
      desc: '楽曲の世界観を映像で最大化し、記憶に残るストーリー性のあるMVを制作',
      image: '/assets/use_case_mv_v2.png'
    },
    {
      title: '動画編集',
      desc: 'テンポ・テロップ・構成を最適化し、視聴維持率を高めるSNS特化編集',
      image: '/assets/use_case_editing_v2.png'
    },
  ];

  return (
    <section id="use-cases" className="use-cases-section">
      <div className="container">
        <h2 className="section-title"><span className="neon-text">/</span> USE CASES</h2>
        <div className="use-cases-grid">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="use-case-card neon-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="use-case-image">
                <img src={useCase.image} alt={useCase.title} />
              </div>
              <div className="use-case-info">
                <h3 className="neon-text">{useCase.title}</h3>
                <p>{useCase.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .use-cases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 30px;
        }
        @media (max-width: 640px) {
          .use-cases-grid {
            grid-template-columns: 1fr;
          }
        }
        .use-case-card {
          background: var(--secondary-color);
          overflow: hidden;
        }
        .use-case-image {
          aspect-ratio: 16/9;
          overflow: hidden;
        }
        .use-case-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .use-case-info {
          padding: 30px;
        }
        .use-case-info h3 {
          margin-bottom: 15px;
          font-size: 1.2rem;
        }
        .use-case-info p {
          color: #ccc;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: 'Video Production', desc: 'YouTube動画制作からCMまで、高品質な映像を提供。' },
    { title: 'Social Strategy', desc: 'InstagramやTikTokでの波及効果を最大化する戦略。' },
    { title: 'Creative Direction', desc: 'ブランドの価値を視覚化し、一貫した世界観を構築。' },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title"><span className="neon-text">/</span> SERVICES</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-item neon-border"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="neon-text">{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        .service-item {
          padding: 40px;
          background: var(--secondary-color);
        }
        .service-item h3 {
          margin-bottom: 15px;
        }
        .service-item p {
          color: #aaa;
        }
      `}</style>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <motion.div
          className="about-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="profile-image neon-border">
            <img src="/assets/profile_icon.jpg" alt="Profile" />
          </div>
        </motion.div>

        <motion.div
          className="about-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="section-title"><span className="neon-text">/</span> ABOUT</h2>
          <h3 className="neon-text">REN.AMAHA / AI Creator</h3>
          <p className="about-text">
            映像制作を中心に、デジタルコンテンツの企画から編集まで幅広く活動中。<br />
            「未来的な視覚表現」と「感情に訴えかけるストーリー」の融合を追求しています。
          </p>
          <div className="social-links">
            <a href="https://youtube.com/@cantik_gdgs?si=r2UTui6yVM3OwKul" target="_blank" rel="noopener noreferrer" className="neon-border"><Youtube size={20} /></a>
            <a href="https://www.instagram.com/ren.amaha1004?igsh=aWJsZG1kdWtxZWVz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="neon-border"><Instagram size={20} /></a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          align-items: center;
        }
        .profile-image {
          width: 100%;
          aspect-ratio: 1/1;
          border-radius: 50%;
          overflow: hidden;
        }
        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .about-text {
          font-size: 1.1rem;
          margin: 20px 0 40px;
          color: #ccc;
        }
        .social-links {
          display: flex;
          gap: 20px;
        }
        .social-links a {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .social-links a:hover {
          background: var(--accent-color);
          color: white;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

const Contact = () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSexVBRaO3jIcgOse3I9EPFsaSn1h4SvbPzFcwyDGyQG0qrcHQ/viewform?usp=dialog";
  const email = "ren.amaha1004@gmail.com";

  return (
    <section id="contact" className="contact-section">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">REN.AMAHA動画制作<br />お問い合わせフォーム</h2>
          <p className="contact-description">
            プロジェクトのご依頼や、ご相談はこちらからお気軽にご連絡ください。<br />
            Email: {email}<br />
            共に未来の映像を創りましょう。
          </p>
          <a href={formUrl} target="_blank" rel="noopener noreferrer" className="cta-button neon-border">
            EMAIL FORM <Mail size={20} />
          </a>
        </motion.div>
      </div>
      <style jsx>{`
        .text-center { text-align: center; }
        .contact-description {
          font-size: 1.2rem;
          margin-bottom: 40px;
          color: #aaa;
          line-height: 1.8;
        }
      `}</style>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} REN.AMAHA. ALL RIGHTS RESERVED.</p>
      </div>
      <style jsx>{`
        .footer {
          padding: 40px 0;
          text-align: center;
          font-family: var(--font-accent);
          font-size: 0.8rem;
          color: #555;
          border-top: 1px solid #111;
        }
      `}</style>
    </footer>
  );
};

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Works />
        <UseCases />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
