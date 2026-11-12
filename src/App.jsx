import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Instagram,
  Mail,
  Menu,
  X,
  ArrowRight,
  Smartphone,
  Video,
  Sparkles,
  Layers,
  Zap,
  TrendingUp,
  CheckCircle2,
  Film
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
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
      <div className="nav-container">
        <div className="logo">
          <a href="#hero">
            <span className="neon-text">REN.AMAHA</span>
          </a>
        </div>

        <ul className="nav-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <button
          className="mobile-menu-btn mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.name}
                  </a>
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
          transition: all 0.3s ease;
          background: rgba(16, 17, 23, 0.75);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .navbar.scrolled {
          background: rgba(16, 17, 23, 0.94);
          border-bottom: 1px solid var(--border-accent);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 44px;
        }
        .logo a {
          display: inline-block;
          font-family: var(--font-accent);
          font-size: 1.45rem;
          font-weight: 700;
          letter-spacing: 1.5px;
        }
        .nav-links {
          display: flex;
          gap: 36px;
          align-items: center;
        }
        .nav-links a {
          font-family: var(--font-accent);
          font-size: 0.88rem;
          font-weight: 500;
          letter-spacing: 1.5px;
          color: #d1d5db;
          position: relative;
          padding: 6px 0;
        }
        .nav-links a:hover {
          color: #ffffff;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-color);
          transition: width 0.25s ease;
        }
        .nav-links a:hover::after {
          width: 100%;
        }
        .mobile-only { display: none; }
        .mobile-menu-btn {
          color: #ffffff;
          padding: 8px;
        }
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 20px;
          }
          .desktop-only { display: none; }
          .mobile-only { display: block; }
          .mobile-menu {
            position: absolute;
            top: var(--header-height);
            left: 0;
            width: 100%;
            background: rgba(22, 23, 32, 0.98);
            backdrop-filter: blur(20px);
            padding: 24px 20px;
            border-bottom: 1px solid var(--border-accent);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          }
          .mobile-menu ul {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
          }
          .mobile-menu a {
            font-family: var(--font-accent);
            font-size: 1.05rem;
            letter-spacing: 2px;
            color: #f3f4f6;
          }
        }
      `}</style>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* 背景動画 */}
      <video
        className="hero-bg-video"
        src="/シーケンス01.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-overlay" />

      <motion.div
        className="container hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="hero-subline neon-text">AI Creator / Video Director</p>
        <h1 className="hero-title">
          CREATIVE<br />
          <span className="neon-text">PORTFOLIO</span>
        </h1>
        <p className="hero-description">
          あなたのビジョンを、最新のクリエイティブとAIで現実に。
        </p>
        <motion.a
          href="#works"
          className="cta-button neon-border"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          VIEW WORKS <ArrowRight size={18} />
        </motion.a>
      </motion.div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.65;
          z-index: 0;
          pointer-events: none;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(16, 17, 23, 0.4) 0%, rgba(16, 17, 23, 0.85) 100%);
          z-index: 1;
        }
        .hero-content {
          text-align: center;
          z-index: 2;
          position: relative;
          padding: 0 20px;
        }
        .hero-subline {
          font-size: 1.15rem;
          margin-bottom: 12px;
          font-weight: 600;
          letter-spacing: 2px;
        }
        .hero-title {
          font-size: clamp(2.8rem, 8.5vw, 5.5rem);
          line-height: 1.08;
          margin-bottom: 24px;
          font-weight: 800;
        }
        .hero-description {
          font-size: 1.15rem;
          margin-bottom: 36px;
          color: #d1d5db;
          letter-spacing: 0.5px;
        }
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 38px;
          font-family: var(--font-accent);
          background: rgba(184, 69, 255, 0.12);
          color: #ffffff;
          font-weight: 700;
          border-radius: 4px;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }
        .cta-button:hover {
          background: var(--accent-color);
          color: #ffffff;
        }
      `}</style>
    </section>
  );
};

const Works = () => {
  // 並び順：
  // 1: L'Arc-en-Ciel 35th
  // 2: 原宿 ULTRA MART
  // 3: yukaDD「いま光った」
  // 4以降: 新しい順
  const works = [
    {
      title: "L'Arc-en-Ciel 35th L'Anniversary TOUR オープニング/ライブ演出/CM映像制作",
      category: 'STAGE & CM',
      url: 'https://le-ciel.com/L35',
      image: '/assets/larc_35th.jpg',
    },
    {
      title: '原宿 ULTRA MART サイネージ/店内映像制作',
      category: 'SIGNAGE / STORE',
      url: '#',
      video: '/assets/ultramart_signage.mp4',
    },
    {
      title: 'yukaDD「いま光った」Music Video AI映像制作',
      category: 'MUSIC VIDEO',
      url: 'https://youtu.be/2C7gZ_v4Wfk?si=DJTkh_Tfr2hR_dbY',
      image: 'https://img.youtube.com/vi/2C7gZ_v4Wfk/maxresdefault.jpg',
    },
    {
      title: 'リクルートヒーローおのちゃん ショートドラマ制作',
      category: 'TIKTOK / SHORT DRAMA',
      url: 'https://www.tiktok.com/@rh_onochan/video/7697434723160837397?is_from_webapp=1&sender_device=pc&web_id=7699680195166914069',
      image: '/assets/onochan.jpg',
    },
    {
      title: '【MUSIC VIDEO】「八紘一宇」/剣豪スレイヤー AI映像制作',
      category: 'MUSIC VIDEO',
      url: 'https://youtu.be/3UgEi5QrLo0?si=8QwbPCa9iN8V4QZ5',
      image: 'https://img.youtube.com/vi/3UgEi5QrLo0/maxresdefault.jpg',
    },
    {
      title: 'Hazky - Alive AI修正映像制作',
      category: 'MUSIC VIDEO / AI RETOUCH',
      url: 'https://youtu.be/44mT4dZA9XA?si=DDCO1Tl8GQpeRmun',
      image: 'https://img.youtube.com/vi/44mT4dZA9XA/maxresdefault.jpg',
    },
    {
      title: 'Dr.MARTENS 新作PV',
      category: 'INSTAGRAM / PROMOTION',
      url: 'https://www.instagram.com/reel/DLqc6rsM8pY/?igsh=MXM1eHVwcTA0cHoxMA==',
      image: '/assets/dr_martens_pv.jpg',
    },
    {
      title: 'Gong cha ショートアニメPV',
      category: 'TIKTOK / ANIMATION',
      url: 'https://www.tiktok.com/@gongcha_japan/video/7617858493025979668?is_from_webapp=1&sender_device=pc&web_id=7613336404365510161',
      image: '/assets/gongcha_thumb.jpg',
    },
    {
      title: '【MUSIC VIDEO】「千年愛歌-五月雨-」/剣豪スレイヤー AI映像制作',
      category: 'MUSIC VIDEO',
      url: 'https://youtu.be/pnAT2TNRKoA?si=CfbXPJSj4ytFeQXq',
      image: 'https://img.youtube.com/vi/pnAT2TNRKoA/maxresdefault.jpg',
    },
    {
      title: 'IFE - Maleficent (Official Music Video)',
      category: 'MUSIC VIDEO',
      url: 'https://youtu.be/7DsQg24fVZY?si=bGwpMFjXRgmYssPq',
      image: 'https://img.youtube.com/vi/7DsQg24fVZY/maxresdefault.jpg',
    },
    {
      title: 'AIが考えた特撮作品：MIRACLEMAN GEO（ミラクルマン ジオ）',
      category: 'YOUTUBE / ORIGINAL AI FILM',
      url: 'https://youtu.be/PGlE4XZyWy0?si=4PH4uA-Npd5NGfxx',
      image: 'https://img.youtube.com/vi/PGlE4XZyWy0/maxresdefault.jpg',
    },
    {
      title: 'etc...',
      category: 'OTHERS',
      url: '#',
      image: '/assets/etc_bg.png',
    },
  ];

  return (
    <section id="works" className="works-section">
      <div className="container-fluid">
        <div className="works-header">
          <h2 className="section-title">
            <span className="neon-text">/</span> WORKS
          </h2>
          <p className="section-subtitle">
            ライブ演出、店舗サイネージ、MV、SNS動画など多彩な映像制作実績
          </p>
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
              transition={{ delay: (index % 6) * 0.08 }}
            >
              <div className="work-image-container neon-border">
                {work.video ? (
                  <video
                    className="work-video"
                    src={work.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img src={work.image} alt={work.title} loading="lazy" />
                )}
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
        .works-section {
          padding: var(--section-padding) 0;
          background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-color-alt) 50%, var(--bg-color) 100%);
        }
        .container-fluid {
          width: 100%;
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .works-header {
          margin-bottom: 40px;
        }
        .section-title {
          font-size: 2.3rem;
          font-weight: 700;
          text-align: left;
          margin-bottom: 8px;
        }
        .section-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
        }
        .works-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
        }
        @media (max-width: 1024px) {
          .works-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .container-fluid {
            padding: 0 20px;
          }
        }
        @media (max-width: 640px) {
          .works-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        .work-card {
          display: block;
          background: var(--secondary-color);
          border-radius: 8px;
          overflow: hidden;
          padding: 14px;
          border: 1px solid var(--border-color);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .work-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-accent);
        }
        .work-image-container {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
          border-radius: 6px;
          margin-bottom: 14px;
          background: #090a0f;
        }
        .work-image-container img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .work-image-container .work-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .work-card:hover img {
          transform: scale(1.04);
        }
        .work-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(184, 69, 255, 0.45);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .work-card:hover .work-overlay {
          opacity: 1;
        }
        .work-overlay span {
          font-family: var(--font-accent);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          padding: 8px 18px;
          border: 2px solid #ffffff;
          color: #ffffff;
          background: rgba(0, 0, 0, 0.3);
        }
        .work-info {
          padding: 4px 4px 8px;
        }
        .work-category {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 6px;
        }
        .work-title {
          font-size: 0.95rem;
          line-height: 1.45;
          font-weight: 600;
          color: #f3f4f6;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

// --- USE CASE と SERVICES を統合し、図解・インフォグラフィック化したセクション ---
const ServicesAndSolutions = () => {
  const workflowSteps = [
    {
      step: '01',
      title: '企画・構成 / フック設計',
      desc: '視聴者の離脱を防ぐ冒頭演出と、ターゲットの心を掴むストーリーラインを構築',
      highlight: '離脱防止・視聴維持率UP',
    },
    {
      step: '02',
      title: 'AI × 実写ハイブリッド制作',
      desc: '最先端生成AI・VFXとリアル映像を融合させ、従来困難だった独自の世界観を高速具現化',
      highlight: '圧倒的スピード・独創性',
    },
    {
      step: '03',
      title: '高精度編集 & レタッチ',
      desc: 'テンポ・テロップ・音響設計に加え、AIを用いた高精度レタッチ・演出修正を実施',
      highlight: 'クオリティと完成度の追求',
    },
    {
      step: '04',
      title: '媒体最適化 & 成果創出',
      desc: 'TikTok / YouTube / Instagram / サイネージ / ライブ演出など各規格に最適化',
      highlight: '認知・バズ・CV最大化',
    },
  ];

  const solutions = [
    {
      icon: <Smartphone className="solution-icon" size={28} />,
      title: 'SNSショート動画 & 縦型ドラマ',
      tag: 'TIKTOK / REELS / SHORTS',
      desc: '視聴者の“1秒離脱”を防ぎ、最後まで見られる構成でバズとファン化を生むショート動画・ショートドラマを企画から制作。',
      metrics: [
        { label: '重要指標', val: '冒頭1〜2秒の離脱防止' },
        { label: '効果', val: '拡散力 & エンゲージメント最大化' },
      ],
      features: ['テンポ・テロップ・BGMのSNS最適化', '継続視聴を促すプロット設計', 'トレンドを押さえた演出'],
    },
    {
      icon: <Video className="solution-icon" size={28} />,
      title: '営業プロモーション & 店舗サイネージ',
      tag: 'SIGNAGE / PROMOTION',
      desc: '商品や店舗、ブランドの魅力を最短時間で直感的に伝え、来店や問い合わせ・成約につなげるインパクトある映像を制作。',
      metrics: [
        { label: '重要指標', val: '直感的伝達・視線誘導' },
        { label: '効果', val: '来店率・問い合わせ率の向上' },
      ],
      features: ['大型モニター・屋外サイネージ規格対応', '短時間で伝わる情報構造化', 'ブランド世界観の統一'],
    },
    {
      icon: <Film className="solution-icon" size={28} />,
      title: 'Music Video & ライブ・ステージ演出',
      tag: 'MV / LIVE STAGE',
      desc: '楽曲の世界観やアーティストの個性を映像で最大化。大規模ライブ演出やツアーオープニング、世界観重視のMVを制作。',
      metrics: [
        { label: '重要指標', val: '圧倒的没入感・視覚体験' },
        { label: '効果', val: '楽曲・ブランドの記憶定着' },
      ],
      features: ['巨大LED・ステージ演出用フォーマット', 'シネマティックな物語設計', '音楽とシンクロするモーショングラフィックス'],
    },
    {
      icon: <Sparkles className="solution-icon" size={28} />,
      title: 'AI映像生成 & ハイブリッド編集',
      tag: 'AI GENERATION / VFX',
      desc: '最先端の動画生成AIやAI修正技術を活用し、CGや実写撮影ではコスト・時間がかかる非現実的な表現をスピーディに実現。',
      metrics: [
        { label: '重要指標', val: '制作スピード & 表現の自由度' },
        { label: '効果', val: '低コストでハイエンド表現' },
      ],
      features: ['AIによる人物・背景レタッチ/修正', 'AI特撮・SF・ファンタジー映像生成', '実写素材との自然なブレンド編集'],
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="neon-text">/</span> SERVICES & SOLUTIONS
          </h2>
          <p className="section-subtitle">
            最新テクノロジーと映像演出設計で、ビジネスと表現の成果を最大化する統合ソリューション
          </p>
        </div>

        {/* --- インフォグラフィック: 制作ワークフロー図解 --- */}
        <div className="workflow-container neon-border">
          <div className="workflow-header">
            <div className="badge-row">
              <span className="info-badge">INFOGRAPHIC</span>
              <span className="info-title">PRODUCTION WORKFLOW</span>
            </div>
            <p className="workflow-lead">構想から公開・成果創出までの一貫した制作プロセス</p>
          </div>

          <div className="workflow-steps">
            {workflowSteps.map((item, index) => (
              <div key={index} className="workflow-step-item">
                <div className="step-number-wrapper">
                  <span className="step-num font-accent">{item.step}</span>
                  {index < workflowSteps.length - 1 && <div className="step-connector" />}
                </div>
                <div className="step-content">
                  <h4 className="step-title">{item.title}</h4>
                  <p className="step-desc">{item.desc}</p>
                  <span className="step-highlight">
                    <CheckCircle2 size={13} /> {item.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- ソリューション4大領域カード --- */}
        <div className="solutions-grid">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              className="solution-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card-top">
                <div className="icon-box neon-border">{item.icon}</div>
                <span className="category-tag neon-text">{item.tag}</span>
              </div>

              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>

              {/* インフォグラフィック: 指標バッジ */}
              <div className="metrics-box">
                {item.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="metric-row">
                    <span className="metric-label">{m.label}</span>
                    <span className="metric-val">{m.val}</span>
                  </div>
                ))}
              </div>

              <ul className="feature-list">
                {item.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <Zap size={14} className="feature-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          padding: var(--section-padding);
        }
        .section-header {
          margin-bottom: 48px;
        }
        .section-title {
          font-size: 2.3rem;
          font-weight: 700;
          text-align: left;
          margin-bottom: 8px;
        }
        .section-subtitle {
          color: var(--text-muted);
          font-size: 1.05rem;
        }

        /* 制作ワークフロー インフォグラフィック */
        .workflow-container {
          background: var(--secondary-color);
          border-radius: 12px;
          padding: 36px 32px;
          margin-bottom: 56px;
        }
        .workflow-header {
          margin-bottom: 32px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 18px;
        }
        .badge-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 6px;
        }
        .info-badge {
          background: var(--accent-color);
          color: #ffffff;
          font-family: var(--font-accent);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 1px;
        }
        .info-title {
          font-family: var(--font-accent);
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #f3f4f6;
        }
        .workflow-lead {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .workflow-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          position: relative;
        }
        @media (max-width: 960px) {
          .workflow-steps {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        .workflow-step-item {
          display: flex;
          flex-direction: column;
        }
        .step-number-wrapper {
          display: flex;
          align-items: center;
          margin-bottom: 14px;
          position: relative;
        }
        .step-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: rgba(184, 69, 255, 0.15);
          border: 1px solid var(--accent-color);
          color: var(--accent-color);
          font-size: 1.05rem;
          font-weight: 700;
          flex-shrink: 0;
        }
        .step-connector {
          flex-grow: 1;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-color) 0%, rgba(184, 69, 255, 0.15) 100%);
          margin-left: 12px;
        }
        @media (max-width: 960px) {
          .step-connector {
            display: none;
          }
        }
        .step-title {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 8px;
          color: #ffffff;
        }
        .step-desc {
          font-size: 0.88rem;
          color: #9ca3af;
          line-height: 1.55;
          margin-bottom: 12px;
          flex-grow: 1;
        }
        .step-highlight {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--accent-color-light);
          background: rgba(184, 69, 255, 0.08);
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid rgba(184, 69, 255, 0.2);
        }

        /* ソリューションカードグリッド */
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        @media (max-width: 860px) {
          .solutions-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }
        }
        .solution-card {
          background: var(--secondary-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .solution-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-accent);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }
        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .icon-box {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: rgba(184, 69, 255, 0.08);
          color: var(--accent-color);
        }
        .category-tag {
          font-family: var(--font-accent);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1.5px;
        }
        .card-title {
          font-size: 1.28rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #ffffff;
        }
        .card-desc {
          color: #d1d5db;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        /* インフォグラフィック: 指標ボックス */
        .metrics-box {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          padding: 12px 16px;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .metric-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
        }
        .metric-label {
          color: var(--text-muted);
        }
        .metric-val {
          color: var(--accent-color-light);
          font-weight: 600;
        }

        .feature-list {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-top: 1px solid var(--border-color);
          padding-top: 16px;
        }
        .feature-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: #9ca3af;
        }
        .feature-icon {
          color: var(--accent-color);
          flex-shrink: 0;
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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="profile-image neon-border">
            <img src="/assets/profile_icon.jpg" alt="あまは れん プロフィール" />
          </div>
        </motion.div>

        <motion.div
          className="about-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="neon-text">/</span> ABOUT
          </h2>
          <h3 className="about-name neon-text">あまは れん / AI Creator</h3>
          <p className="about-text">
            映像制作を中心に、デジタルコンテンツの企画から編集まで幅広く活動中。<br />
            「未来的な視覚表現」と「感情に訴えかけるストーリー」の融合を<br />
            追求しています。
          </p>
          <div className="social-links">
            <a
              href="https://www.instagram.com/ren.amaha1004?igsh=aWJsZG1kdWtxZWVz&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-border"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about-section {
          padding: var(--section-padding);
          background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-color-alt) 100%);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 64px;
          align-items: center;
        }
        .profile-image {
          width: 100%;
          max-width: 360px;
          margin: 0 auto;
          aspect-ratio: 1/1;
          border-radius: 50%;
          overflow: hidden;
          background: #000;
        }
        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .about-name {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 12px 0 20px;
          letter-spacing: 1px;
        }
        .about-text {
          font-size: 1.1rem;
          margin-bottom: 36px;
          color: #d1d5db;
          line-height: 1.85;
        }
        .social-links {
          display: flex;
          gap: 18px;
        }
        .social-links a {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(184, 69, 255, 0.08);
          color: #ffffff;
        }
        .social-links a:hover {
          background: var(--accent-color);
          color: #ffffff;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          .about-text {
            font-size: 1rem;
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
  const formUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSf3vkEJ-XWz_dB6bmIk6B_Xpr4PMomnLDrRFsU-r_TgNBg2mQ/viewform?usp=header';
  const email = 'ren.amaha1004@gmail.com';

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <motion.div
          className="contact-card neon-border"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* 中央揃えのタイトル */}
          <h2 className="contact-title">
            REN.AMAHA動画制作<br />
            お問い合わせフォーム
          </h2>
          <p className="contact-description">
            プロジェクトのご依頼、ご相談、お見積りなどはこちらからお気軽にご連絡ください。<br />
            Email: <a href={`mailto:${email}`} className="email-link">{email}</a><br />
            共に未来の映像を創りましょう。
          </p>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button neon-border"
          >
            EMAIL FORM <Mail size={18} />
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: var(--section-padding);
        }
        .contact-container {
          max-width: 860px;
          margin: 0 auto;
        }
        .contact-card {
          background: var(--secondary-color);
          border-radius: 16px;
          padding: 64px 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .contact-title {
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          font-weight: 700;
          text-align: center;
          line-height: 1.35;
          margin-bottom: 24px;
          color: #ffffff;
        }
        .contact-description {
          font-size: 1.05rem;
          margin-bottom: 36px;
          color: #d1d5db;
          line-height: 1.85;
          text-align: center;
        }
        .email-link {
          color: var(--accent-color-light);
          text-decoration: underline;
        }
        .email-link:hover {
          color: #ffffff;
        }
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 44px;
          font-family: var(--font-accent);
          background: rgba(184, 69, 255, 0.15);
          color: #ffffff;
          font-weight: 700;
          border-radius: 6px;
          font-size: 1rem;
          letter-spacing: 1.5px;
          transition: all 0.3s ease;
        }
        .cta-button:hover {
          background: var(--accent-color);
          color: #ffffff;
        }
        @media (max-width: 640px) {
          .contact-card {
            padding: 40px 20px;
          }
          .contact-description {
            font-size: 0.95rem;
          }
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
          padding: 36px 0;
          text-align: center;
          font-family: var(--font-accent);
          font-size: 0.8rem;
          color: #6b7280;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          background: var(--bg-color);
          letter-spacing: 1px;
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
        <ServicesAndSolutions />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
