import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MemoryIcon from '@mui/icons-material/Memory';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import BrushIcon from '@mui/icons-material/Brush';
import { Button } from '@mui/material';
const BusinessHubPage= () => {
  const { t } = useTranslation();
  const clientLogoStyle = {
    height: '42px',
    width: 'auto',
    opacity: 0.6,
    transition: 'opacity 0.3s',
    cursor: 'pointer',
  };
  
  const caseStudy = {
    client: 'Fulltrailer',
    headline: 'AI assistants for dispatch → faster bookings',
    results: [
      '↑ 38% qualified leads in 30 days',
      '–62% response time with chat automation'
    ],
    to: '/case-studies/fulltrailer'
  };
return (
<div>
<style>{`
  @keyframes typing { from { width: 0 } to { width: 100% } }
  @keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: orange } }
`}</style>
<style>{`
  /* Business Hub layout */
  #business { padding-left: 1rem; padding-right: 1rem; }
  #business .bhub-flex { display:flex; flex-direction: column; align-items:flex-start; gap:2rem; flex-wrap:wrap; }
  #business .bhub-grid, #business .bhub-text { width: 100%; }
  #business .bhub-grid { order: 1; margin-left: auto; margin-right: auto; }
  #business .bhub-text { order: 2; margin-left: auto; margin-right: auto; }
  /* Normalize top spacing so Services aligns with the grid */
  #business .bhub-grid { margin-top: 0; }
  #business .bhub-copy h3 { margin-top: 0; margin-bottom: 0.5rem; }
  #business .bhub-copy p:first-of-type { margin-top: 0; }
  #business .bhub-actions { margin-top: 0; }
  @media (min-width: 768px) {
    #business .bhub-flex { flex-direction: row; }
    #business .bhub-grid { width: 50%; order: 1; margin-left: 0; margin-right: 0; }
    #business .bhub-text { width: 50%; order: 2; margin-left: 0; margin-right: 0; }
  }
  /* Latest blog grid */
  #latest .latest-grid { display: grid; grid-template-columns: 1fr; }
  @media (min-width: 768px) {
    #latest .latest-grid { grid-template-columns: repeat(3, 1fr); }
  }
  /* Case study card */
  #case-study .case-card { flex-direction: column; }
  @media (min-width: 768px) {
    #case-study .case-card { flex-direction: row; }
  }
  /* Text inner layout: two columns on mobile, revert on desktop */
  #business .bhub-text-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; align-items: start; }
  #business .bhub-actions { display: flex; flex-direction: column; align-items: flex-start; }
  #business .bhub-actions .mui-btn { width: 100%; }
  #business .bhub-copy { text-align: left; }
  @media (min-width: 768px) {
    #business .bhub-text-inner { display: block; }
  }
`}</style>
<h1 style={{
  fontSize: 'clamp(1.8rem, 6vw, 3rem)',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '1rem',
  fontFamily: 'monospace',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  borderRight: '0.15em solid orange',
  marginLeft: 'auto',
  marginRight: 'auto',
  animation: 'typing 3s steps(40, end), blink-caret 0.75s step-end infinite',
  maxWidth: '100%',
  boxSizing: 'border-box'
}}>
[ 🧠 ]  Business Hub
</h1>
<p style={{
  textAlign: 'center',
  maxWidth: '700px',
  margin: '0 auto .16rem',
  color: '#aaa',
  fontSize: '1.1rem',
  lineHeight: '1.6'
}}>
  Unlock the full potential of your business.</p>
<p style={{
  textAlign: 'center',
  maxWidth: '700px',
  margin: '0 auto 3rem',
  color: '#aaa',
  fontSize: '1.1rem',
  lineHeight: '1.6'}}>
   Let’s start building the intelligence that works for you.
</p>
  <section id="business" className="welcome-section third align-right">
  <div className="bhub-flex" style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
  <div
      className="bhub-grid"
      style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
      flexShrink: 0}} >
{[
  { label: 'IA', icon: <MemoryIcon />, href: '/ai-for-your-business' },
  { label: 'Web Dev', icon: <CodeIcon /> },
  { label: 'Cloud', icon: <CloudIcon /> },
  { label: 'Media', icon: <VideoLibraryIcon /> },
  { label: 'FullStack', icon: <DeveloperModeIcon /> },
  { label: 'ChatBots', icon: <SmartToyIcon /> },
  { label: 'SEO', icon: <TrendingUpIcon /> },
  { label: 'Design', icon: <BrushIcon /> },
  { label: 'Blockchain', icon: <CurrencyBitcoinIcon /> }
].map((item, index) => (
  item.href ? (
    <Link
      key={index}
      to={item.href}
      className="grid-item"
      style={{
        backgroundColor: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '8px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ccc',
        fontSize: '1rem',
        fontWeight: '300',
        textDecoration: 'none',
        cursor: 'pointer'
      }}
    >
      <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
      {item.label}
    </Link>
  ) : (
    <div
      key={index}
      className="grid-item"
      style={{
        backgroundColor: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '8px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ccc',
        fontSize: '1rem',
        fontWeight: '300'
      }}
    >
      <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
      {item.label}
    </div>
  )
))}
</div>
  <div className="bhub-text" style={{ flex: 1 }}>
<div className="bhub-text-inner">
  <div className="bhub-copy">
    <h3>{t('businessHub.services')}</h3>
    <p>{t('businessHub.line1')}</p>
    <p>{t('businessHub.line2')}</p>
    <p>{t('businessHub.line3')}</p>
    <p>{t('businessHub.line4')}</p>
  </div>
  <div className="bhub-actions">
    <Button
      component={Link}
      to="/business-project-call"
      variant="outlined"
      startIcon={<CalendarTodayIcon />}
      className="mui-btn"
      sx={{
        mr: '12px',
        mt: '12px',
        mb: '12px',
        textTransform: 'none',
        color: 'rgb(0, 170, 150)'
      }}
    >
      {t('businessHub.scheduleCall')}
    </Button>
    <Button
      component={Link}
      to="/what-is-all-this"
      variant="outlined"
      startIcon={<ChatBubbleOutlineIcon />}
      className="mui-btn"
      sx={{
        mr: '12px',
        mt: '12px',
        mb: '12px',
        textTransform: 'none',
        color: 'rgb(0, 170, 150)'
      }}
    >
      Chat.
    </Button>
    <div style={{
      marginTop: '2px',
      display: 'flex',
      justifyContent: 'center',
      gap: '20px'
    }}>
      <a href="https://github.com/neurons-me" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '28px', transition: 'color 0.3s ease' }}>
        <FaGithub />
      </a>
      <a href="https://instagram.com/neurons.me" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '28px', transition: 'color 0.3s ease' }}>
        <FaInstagram />
      </a>
      <a href="https://facebook.com/neurons.me" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '28px', transition: 'color 0.3s ease' }}>
        <FaFacebookF />
      </a>
      <a href="https://linkedin.com/company/neurons-me" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '28px', transition: 'color 0.3s ease' }}>
        <FaLinkedinIn />
      </a>
    </div>
  </div>
</div>
</div>
</div>
</section>      

<section id="latest" className="welcome-section" style={{ marginTop: '1.68rem', backgroundColor: 'rgb(18, 18, 20)', paddingTop: '0.4rem' }} >
  <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginTop: 21, marginBottom: '0.16rem' }}>From The Blog</h2>
  <p style={{ textAlign: 'center', color: '#aaa', margin: '0 auto 1.25rem', maxWidth: '680px' }}>Quick reads that show what’s possible right now.</p>
  <div
    className="latest-grid"
    style={{
      display: 'grid',
      gap: '1rem'
    }}
  >
    <Link to="/blog/post-one" style={{ textDecoration: 'none' }}>
      <div
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
          width: '100%',
          minHeight: '150px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <img
          src="/media/MonadLisa.webp"
          alt="Post preview"
          style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
          loading="lazy"
          decoding="async"
        />
        <div style={{ padding: '14px' }}>
          <div style={{ color: '#0bbca8', fontSize: '0.85rem', marginBottom: '6px' }}>Category · 08/10/2025</div>
          <h3 style={{ color: '#fff', fontSize: '1.05rem', margin: '0 0 6px' }}>Post One Title</h3>
          <p style={{ color: '#bbb', fontSize: '0.95rem', margin: 0 }}>Short description of the first blog post goes here.</p>
          <div style={{ marginTop: '10px', color: '#0bbca8', fontSize: '0.9rem' }}>Learn more →</div>
        </div>
      </div>
    </Link>

    <Link to="/blog/post-two" style={{ textDecoration: 'none' }}>
      <div
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
          width: '100%',
          minHeight: '150px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <img
          src="/media/MonadLisa.webp"
          alt="Post preview"
          style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
          loading="lazy"
          decoding="async"
        />
        <div style={{ padding: '14px' }}>
          <div style={{ color: '#0bbca8', fontSize: '0.85rem', marginBottom: '6px' }}>Category · 08/05/2025</div>
          <h3 style={{ color: '#fff', fontSize: '1.05rem', margin: '0 0 6px' }}>Post Two Title</h3>
          <p style={{ color: '#bbb', fontSize: '0.95rem', margin: 0 }}>Short description of the second blog post goes here.</p>
          <div style={{ marginTop: '10px', color: '#0bbca8', fontSize: '0.9rem' }}>Learn more →</div>
        </div>
      </div>
    </Link>

    <Link to="/blog/post-three" style={{ textDecoration: 'none' }}>
      <div
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
          width: '100%',
          minHeight: '150px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <img
          src="/media/MonadLisa.webp"
          alt="Post preview"
          style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
          loading="lazy"
          decoding="async"
        />
        <div style={{ padding: '14px' }}>
          <div style={{ color: '#0bbca8', fontSize: '0.85rem', marginBottom: '6px' }}>Category · 08/01/2025</div>
          <h3 style={{ color: '#fff', fontSize: '1.05rem', margin: '0 0 6px' }}>Post Three Title</h3>
          <p style={{ color: '#bbb', fontSize: '0.95rem', margin: 0 }}>Short description of the third blog post goes here.</p>
          <div style={{ marginTop: '10px', color: '#0bbca8', fontSize: '0.9rem' }}>Learn more →</div>
        </div>
      </div>
    </Link>
  </div>
</section>

<section id="case-study" className="welcome-section" style={{ marginTop: '2.5rem', backgroundColor: 'rgb(10, 11, 12)' }}>
  <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.5rem' }}>Case study</h2>
  <p style={{ textAlign: 'center', color: '#aaa', margin: '0 auto 1.25rem', maxWidth: '680px' }}>A quick look at outcomes we delivered with AI.</p>
  <Link to={caseStudy.to} style={{ textDecoration: 'none' }}>
    <div
      className="case-card"
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '12px',
        padding: '18px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        flexDirection: 'column'
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ color: '#0bbca8', fontSize: '0.9rem', marginBottom: '6px' }}>{caseStudy.client}</div>
        <h3 style={{ color: '#fff', margin: '0 0 8px', fontSize: '1.25rem' }}>{caseStudy.headline}</h3>
        <ul style={{ margin: 0, paddingLeft: '18px', color: '#bbb' }}>
          {caseStudy.results.map((r, idx) => (
            <li key={idx} style={{ marginBottom: '4px' }}>{r}</li>
          ))}
        </ul>
      </div>
      <Button variant="outlined" sx={{ textTransform: 'none', color: 'rgb(0, 170, 150)' }}>View case →</Button>
    </div>
  </Link>
</section>


</div>
  );
};

export default BusinessHubPage;
