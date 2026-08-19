import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './App.css';


// ✅ ЗУРАГУУД — ЗАМЫГ ЗӨВ БОЛГОСОН
import huvguudZurag from './assets/huvguud-zurag.png';
import emegteiZurag from './assets/emegtei-zurag.png';
import tavgiinIdee from './assets/tavgiin-idee.png';
// ✅ СЛАЙДЕРИЙН ЗУРАГУУД
import slide1 from './assets/slide1.jpg';
import slide2 from './assets/slide2.jpg';
import slide3 from './assets/slide3.jpg';
import slide4 from './assets/slide4.jpg';
import slide5 from './assets/slide5.jpg';
import slide6 from './assets/slide6.jpg';
import pattern1 from './assets/pattern1.svg';


// ===== ТОГТВОРТОЙ УТГА =====
const FORM_ID = "1FAIpQLScuh_lcMTotK92ElJiT6jxuUh_DAbvzFl5nBZwvyiY01YmYJA";
const FIELDS = {
  name: "entry.746365638",
  attending: "entry.499623538"
};

// ✅ Огноо, цаг
const TARGET_DATE = new Date('2026-08-26T10:00:00+08:00');

// ✅ YouTube — Error 153 зассан (mute=1)
const YOUTUBE_BG_URL = "https://www.youtube.com/embed/45812_MJMWs?autoplay=1&mute=1&loop=1&playlist=45812_MJMWs";


// Булгийн хээ SVG
const CornerKhee = ({ className = "", style = {} }) => (
  <svg 
    className={`corner-khee ${className}`} 
    style={style} 
    viewBox="0 0 98 98" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M10.45,1.11c-1.15,0-2.53.15-2.88.17a29.52,29.52,0,0,0-3.05.34,16.16,16.16,0,0,0-3,.84S-.07,3.05,0,3.37a.29.29,0,0,0,.09.14c.11.07.28,0,.4,0,1.56,0,3.12.07,4.68.14a48.61,48.61,0,0,1,7.12,1,30.23,30.23,0,0,1,7.48,2.51c2.34,1.19,4.47,2.66,5.61,5.09a24.11,24.11,0,0,0,2.21,3.86A11.68,11.68,0,0,0,35,21.26a13,13,0,0,0,6-.39c.83-.23,1.64-.53,2.46-.8s.94-.13,1.21.57a12.45,12.45,0,0,0,2.91,4.81,11,11,0,0,0,9,3.12,12.55,12.55,0,0,0,10-6.13,8.65,8.65,0,0,0-4.2-12.61,6.44,6.44,0,0,0-6.58,1.22,5.58,5.58,0,0,0-2.31,4,4.24,4.24,0,0,0,.83,3.38,2.3,2.3,0,0,0,2.52.53,1.91,1.91,0,0,0,1.69-1.85c0-.5.16-1,.23-1.49a1.76,1.76,0,0,1,2.54-1.38,2.32,2.32,0,0,1,1.38,1.62A5.31,5.31,0,0,1,60.41,22a7.9,7.9,0,0,1-8.37.9,6.18,6.18,0,0,1-3.44-5.2,10.17,10.17,0,0,1,1.65-7.45A10.49,10.49,0,0,1,57,6a11.88,11.88,0,0,1,9.66,1.84A11.92,11.92,0,0,1,72,18.79a11.36,11.36,0,0,1-1.88,5.14,17.66,17.66,0,0,1-9.56,7.57c-1.35.5-1.41.8-.38,1.85l.33.38,3.65,3.57c.18.18.35.37.54.54.85.79,1.1.76,1.73-.2a.5.5,0,0,1,0-.12,20.55,20.55,0,0,1,8.45-9.69,10.29,10.29,0,0,1,9.21-.74A15.3,15.3,0,0,1,89.51,31a11.26,11.26,0,0,1,.71,15.18c-4,4.9-10.55,5-15.18.66a1.85,1.85,0,0,1-.6-1.23,16.56,16.56,0,0,1,0-3.52,7.47,7.47,0,0,1,5.89-6.61c2.1-.42,4.34.69,3.77,3.47a1.21,1.21,0,0,1-1.33,1.15H81a1.26,1.26,0,0,0-1,.37,2.43,2.43,0,0,0,.82,3.78c2.34.94,5.78-.44,7-2.86a8.26,8.26,0,0,0,.8-4.84,6,6,0,0,0-3.77-5.19,9.13,9.13,0,0,0-5.53-.49,11.23,11.23,0,0,0-7.46,4.9,13.48,13.48,0,0,0-2,5.21,14.6,14.6,0,0,0,.26,4.89A11,11,0,0,0,77,53.51c1,.41,1.11.56.8,1.61a21.09,21.09,0,0,0-1,7.53,10,10,0,0,0,1.69,4.9c2,3,4.89,4.6,8.11,5.85.37.14.73.31,1.09.47A6.2,6.2,0,0,1,90.54,77a28.17,28.17,0,0,1,2.18,6.22,68.42,68.42,0,0,1,1.5,9.43c0,.25.19,2.72.19,2.72a1,1,0,0,0,0,.17A16.23,16.23,0,0,0,95.75,92c.09-.32.31-1.1.53-2.26a28.7,28.7,0,0,0,.55-6.15A15.35,15.35,0,0,0,96.22,79a14.24,14.24,0,0,0-.93-2.23,21.39,21.39,0,0,0-1.9-3c-.49-.65-.43-1,.23-1.54a12.24,12.24,0,0,0,3.64-4,7.71,7.71,0,0,0,.34-7,10,10,0,0,0-6.67-6,4.93,4.93,0,0,0-5.48,1.64c-1.18,1.42-2.2,4.5-.91,6.75a5.53,5.53,0,0,0,6,2.34,2.16,2.16,0,0,0,1.11-3.3,1.36,1.36,0,0,0-1-.54c-1.18-.24-2.36-.43-3.54-.67-.31-.07-.79-.09-.82-.47s.39-.55.71-.71a5.72,5.72,0,0,1,6.7.85,1.17,1.17,0,0,1,.46.8,6.5,6.5,0,0,1-.8,4.21,4.81,4.81,0,0,1-5.06,2.13,8.34,8.34,0,0,1-6.63-4.41,6.38,6.38,0,0,1-.06-5.83,11,11,0,0,1,1.85-2.77,3.79,3.79,0,0,1,1.68-1A18.45,18.45,0,0,0,93,49,16.91,16.91,0,0,0,97.5,36.3a14.76,14.76,0,0,0-2.47-7,1.58,1.58,0,0,0-.12-.15c-.81-1.15-.82-1.23.21-2.2a9.92,9.92,0,0,0,3-9.38A41.52,41.52,0,0,0,97,12.9a15.66,15.66,0,0,1,.28-9.24c.24-.81.46-1.62.66-2.44.14-.59-.08-.79-.66-.62-1.15.35-2.27.79-3.46,1a21.77,21.77,0,0,1-10.27-.44A21.51,21.51,0,0,0,78.26.26a7.89,7.89,0,0,0-6.34,2.89C71.23,4,71,4,70,3.62a31.7,31.7,0,0,0-8-2.43,15.64,15.64,0,0,0-8.73,1.07,16.82,16.82,0,0,0-7,6.26,29.74,29.74,0,0,0-2.9,5.53,3.42,3.42,0,0,1-1.83,1.74c-2.35,1.14-4.75,1.69-7.24.48a7.66,7.66,0,0,1-3.8-4.53,7.23,7.23,0,0,1-.36-4.21c.53-2.35,2.55-3.56,5.05-3.22,1.74.24,3.38,2.37,3.63,3.75A1.47,1.47,0,0,1,38,9.65c-.82.43-1.27.22-1.34-.7A3.32,3.32,0,0,0,36,7.15a1.66,1.66,0,0,0-2.6-.47c-1.63,1-2.57,4.13-.36,5.76a7.83,7.83,0,0,0,4.71,2,4.06,4.06,0,0,0,3.48-1.84A8.52,8.52,0,0,0,41,2.68,6.94,6.94,0,0,0,36.23.1a10.68,10.68,0,0,0-6.3,1,8.41,8.41,0,0,0-3.32,2.91c-.67,1-.91,1.06-2.12.31a36.29,36.29,0,0,0-7.42-2.78A25.35,25.35,0,0,0,10.45,1.11Zm82.76,18a6.47,6.47,0,0,1-.52,2.87,3.37,3.37,0,0,1-4.58,1.74,3.09,3.09,0,0,1-1-5.08,22.68,22.68,0,0,1,2-1.91A6.61,6.61,0,0,0,90.59,15c.34-.58.13-1-.54-1.15a9,9,0,0,0-4.5.14,2.63,2.63,0,0,0-1.15.62,7.23,7.23,0,0,0-2.35,5.64,2.16,2.16,0,0,1-.3,1,2.51,2.51,0,0,1-1,.94,3.54,3.54,0,0,1-2.71,0,2.28,2.28,0,0,1-1.36-.78A2.12,2.12,0,0,1,76.36,20a3.31,3.31,0,0,1,3.29-3.46,3.54,3.54,0,0,0,1.68-.5c.91-.56,2-.76,2.73-1.73a4.28,4.28,0,0,0,.54-1.07,6.34,6.34,0,0,0,.11-3.4,2.49,2.49,0,0,0-.46-1.26,2.17,2.17,0,0,0-.59-.53c-.8-.49-1.32-.35-1.74.5a6.4,6.4,0,0,1-2.85,3c-2,1-2.43.83-3.53-.34a3.57,3.57,0,0,1,.21-5.32A4.38,4.38,0,0,1,80.18,5c.93.27,1.85.55,2.79.8A46.08,46.08,0,0,0,90.26,7a1.06,1.06,0,0,1,1,1.06c.21,1.61.59,3.18.95,4.76A28.39,28.39,0,0,1,93.21,19.07Z" fill="currentColor" />
  </svg>
);


const App = () => {
  // ===== БҮХ HOOK-УУД =====
  const [isLoading, setIsLoading] = useState(true);
  const [musicStarted, setMusicStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  // ✅ Хоёр зураг солих (хүүхдийн зураг)
  const [childSlide, setChildSlide] = useState(0);

  // ✅ Том зургийн слайдер
  const [sliderSlide, setSliderSlide] = useState(0);

  // ✅ БҮРТГЭЛИЙН ХУВЬСАГЧ — ДУТАЖ БАЙСАН НЬ ЭНД НЭГЖ БАЙНА
  const [rsvp, setRsvp] = useState(null);
  const [rsvpName, setRsvpName] = useState('');


  // ===== useCallback =====
  const initMusic = useCallback(() => {
    const iframe = document.getElementById('bgMusicIframe');
    if (iframe && !iframe.src) {
      iframe.src = YOUTUBE_BG_URL;
    }
  }, []);

  const toggleMute = useCallback(() => {
    const newMuted = !muted;
    setMuted(newMuted);
    setIsPlaying(!newMuted);
    const iframe = document.getElementById('bgMusicIframe');
    if (iframe && iframe.src) {
      iframe.src = iframe.src.replace(/mute=\d/, `mute=${newMuted ? 1 : 0}`);
    }
  }, [muted]);
  

  const handleSubmitRsvp = useCallback(async (e) => {
    e.preventDefault();
    const trimmedName = rsvpName.trim();
    if (!trimmedName) { alert('⚠️ Эхлээд нэрээ оруулна уу!'); return; }
    if (!rsvp) { alert('⚠️ Ирэх эсэхээ сонгоно уу!'); return; }
    const formData = new FormData();
    formData.append(FIELDS.name, trimmedName);
    formData.append(FIELDS.attending, rsvp === 'yes' ? 'Тийм, ирнэ' : 'Ирэхгүй');
    try {
      await fetch(`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`, { method: "POST", mode: "no-cors", body: formData });
      alert(`✅ БҮРТГЭЛ АМЖИЛТТАЙ ИЛГЭЭГДЛЭЭ!\n\n📝 Нэр: ${trimmedName}\nИрэх: ${rsvp === 'yes' ? '✅ Тийм' : '❌ Үгүй'}\n\nБаярлалаа! 🙏`);
      setRsvp(null);
      setRsvpName('');
    } catch (err) {
      alert('⚠️ Алдаа гарлаа: ' + (err?.message || 'Тодорхойгүй алдаа'));
    }
  }, [rsvp, rsvpName]);


  // ===== useMemo =====
  const countdownItems = useMemo(() => [
    { v: String(timeLeft.days).padStart(2, '0'), l: 'өдөр' },
    { v: String(timeLeft.hours).padStart(2, '0'), l: 'цаг' },
    { v: String(timeLeft.mins).padStart(2, '0'), l: 'минут' },
    { v: String(timeLeft.secs).padStart(2, '0'), l: 'секунд' },
  ], [timeLeft]);

  // ✅ Зургийн слайдер (6 зураг)
  const sliderImages = useMemo(() => [slide1, slide2, slide3, slide4, slide5, slide6], []);

  // ✅ Хоёр зураг солих (хүүхэд, эмэгтэй)
  const images = useMemo(() => [huvguudZurag, emegteiZurag], []);


  // ===== useEffect =====
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && !musicStarted) {
      setMusicStarted(true);
      setIsPlaying(true);
      initMusic();
    }
  }, [isLoading, musicStarted, initMusic]);

  // ✅ ХОЁР ЗУРАГ СОЛИХ — 5 секунд тутамд
  useEffect(() => {
    const imgTimer = setInterval(() => {
      setChildSlide(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(imgTimer);
  }, [images.length]);

  // ✅ ЗУРАГИЙН СЛАЙДЕР — 4 секунд тутамд
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setSliderSlide(prev => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(slideTimer);
  }, [sliderImages.length]);

  // Тооллогын цаг
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = TARGET_DATE - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  // ===== АЧААЛАХ ДЭЛГЭЦ =====
  if (isLoading) {
    return (
      <div className="splash-screen">
        <div className="splash-content">
          <div className="envelope-icon">
            <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="10" y="25" width="80" height="45" rx="4" fill="#967218"/>
              <rect x="25" y="10" width="50" height="30" rx="2" fill="#f5efe0"/>
              <line x1="35" y1="20" x2="65" y2="20" stroke="#d4c8a8" strokeWidth="2"/>
              <line x1="35" y1="28" x2="60" y2="28" stroke="#d4c8a8" strokeWidth="2"/>
              <line x1="35" y1="36" x2="55" y2="36" stroke="#d4c8a8" strokeWidth="2"/>
              <path d="M50 55 C45 50, 38 48, 35 55 L50 65 L65 55 C62 48, 55 50, 50 55 Z" fill="#b8860b"/>
              <circle cx="50" cy="55" r="6" fill="#f5efe0" stroke="#967218" strokeWidth="2"/>
              <circle cx="50" cy="55" r="2.5" fill="#967218"/>
            </svg>
          </div>
          <div className="progress-bar"><div className="progress-fill"></div></div>
          <p className="splash-text">Сэвлэг үргээх ёслолын урилгыг дэлгэж байна..</p>
        </div>
      </div>
    );
  }


  // ===== ҮНДСЭН ХУУДАС =====
  return (
    <div className="app-container fade-in-page">
      {/* 4 Буланд хээ */}
      <CornerKhee className="top-left" />
      <CornerKhee className="top-right"/>
      <CornerKhee className="bottom-left" />
      <CornerKhee className="bottom-right"/>

      {/* Ард тоглох хөгжим */}
      <iframe
        width="100%" height="1" title="Арын хөгжим" frameBorder="0"
        style={{ border: 'none', opacity: 0.01, position: 'absolute', top: '-9999px', left: '-9999px' }}
        allow="autoplay; encrypted-media" allowFullScreen id="bgMusicIframe" aria-hidden="true"
      ></iframe>

      {/* Хөгжим товчлуур */}
      <button 
        className={`floating-music-btn ${isPlaying ? 'playing' : ''}`} 
        onClick={toggleMute}
        aria-label={muted ? "Хөгжим нээх" : "Хөгжим хаах"}
        type="button"
      >
        <span className="icon-main">{muted ? '🔇' : '🔊'}</span>
        {isPlaying && !muted && (<><span className="wave wave-1"></span><span className="wave wave-2"></span><span className="wave wave-3"></span></>)}
      </button>


      {/* Гарчиг ба зураг */}
      <section className="hero-section shimmer-wrapper"> 
        {/* === ХОЁР ЗУРАГ СОЛИГДОХ ХЭСЭГ === */}
        <div className="hero-image">
          <img 
            key={childSlide}
            src={images[childSlide]}
            alt={childSlide === 0 ? "Хүүхдийн зураг" : "Эмэгтэй зураг"}
            className="child-photo animate-float-in"
            loading="lazy"
          />
          <div className="shimmer-overlay"></div>

          {/* Цэгүүд */}
          <div style={{
            position: 'absolute', bottom: '12px', left: '50%',
            transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 3
          }}>
            {images.map((_, i) => (
              <span key={i} style={{
                width: i === childSlide ? '12px' : '8px',
                height: i === childSlide ? '12px' : '8px',
                borderRadius: '50%',
                background: i === childSlide ? '#f9d71c' : 'rgba(255,255,255,0.5)',
                transition: 'all 0.3s ease'
              }} />
            ))}
          </div> 
        </div>

        {/* Тавгийн идээ */}
        <div className="tavgiin-under-photo shimmer-wrapper">
          <img src={tavgiinIdee} alt="Тавгийн идээ" className="tavgiin-under-img animate-float-in" loading="lazy" />
          <div className="shimmer-overlay"></div>
        </div>
      </section>


      {/* Урилгын үг */}
      <section className="section fade-in">
        <div className="hero-text shimmer-wrapper">
          <h1>Сэвлэг үргээх ёслолын<br />урилга</h1>
          <div className="shimmer-overlay"></div>
        </div>
        <div className="invitation-text shimmer-wrapper">
          <p>
            Цээлийн усыг цалгиаж, сэцэн хүү, охин төржээ,<br />
            Сэвлэг даахь нь ихдээд, сэлгэж үргээх цаг ирлээ.<br />
            Уран цагаан хайчаа, хадаг идээгээр бэлдэж,<br />
            Өлзий хийморийг нь дэлгэрүүлэн, ач зээгийнхээ авьяас заяаг мялаая.
          </p>
          <div className="divider-symbol">
            <span className="divider-line"></span>
            <img src={pattern1} alt="" className="divider-icon-svg" />
            <span className="divider-line"></span>
          </div>
          <p>
            Бид хайртай ач хүү <strong>С.Сод-Од</strong>,<br />
            хайртай зээ охин <strong>О.Нарансувд</strong> хоёрын<br />
            сэвлэг үргээх ёслол хамтад нь тохиож байгаа тул,<br />
            та бүхнийг гэр бүлийн хамтаар хүрэлцэн ирж,<br />
            Ач, зээ хоёртоо хайр энэрлийн ерөөлөө өргөн,<br />
            Тэдний өсөж торних заяанд ивээл хайрлаж,<br />
            Энэ баярт мөчийг бидэнтэй хамт тэмдэглэхийг<br />
            чин сэтгэлээсээ урьж байна.
          </p>
          <div className="divider-symbol">
            <span className="divider-line"></span>
            <img src={pattern1} alt="" className="divider-icon-svg" />
            <span className="divider-line"></span>
          </div>
          <p>
            Сод-Од ач хүү, Нарансувд зээ охины<br />
            сэвлэг даахь нь арчигдаж,<br />
            Билэг оюун нь тэлж,<br />
            Буян хишиг нь арвижиж,<br />
            Ирээдүй заяа нь өлзийтэй байх болтугай.
          </p>
          <div className="shimmer-overlay"></div>
        </div>
      </section>


      {/* Огноо — Календарь */}
      <section className="section date-section fade-in">
        <h3 className="sub-title">📅 Хэзээ болох</h3>
        <div className="date-blocks">
          <div className="date-block">
            <h3>2026 оны 08 сарын <strong>26</strong>-ны 10:00 цагт</h3>
          </div>
        </div>
        <div className="calendar-container">
          <div className="calendar-header"><span className="calendar-month">2026 оны 8-р сар</span></div>
          <div className="calendar-grid">
            {['Ня','Да','Мя','Лх','Ба','Бя','Дө'].map(d => (<span key={d} className="calendar-day-name">{d}</span>))}
            {[26,27,28,29,30,1,2].map((d,i) => (<span key={`row1-${i}`} className={d>25?"calendar-day other-month":"calendar-day"}>{d}</span>))}
            {[3,4,5,6,7,8,9].map(d => (<span key={`row2-${d}`} className="calendar-day">{d}</span>))}
            {[10,11,12,13,14,15,16].map(d => (<span key={`row3-${d}`} className="calendar-day">{d}</span>))}
            {[17,18,19,20,21,22,23].map(d => (<span key={`row4-${d}`} className="calendar-day">{d}</span>))}
            {[24,25].map(d => (<span key={`row5-${d}`} className="calendar-day">{d}</span>))}
            <span className="calendar-day target-day">26</span>
            {[27,28,29,30].map(d => (<span key={`row5b-${d}`} className="calendar-day">{d}</span>))}
            {[31,1,2,3,4,5,6].map((d,i) => (<span key={`row6-${i}`} className={d>25?"calendar-day":"calendar-day other-month"}>{d}</span>))}
          </div>
        </div>
        <h3 className="sub-title">Үлдсэн хугацаа</h3>
        <div className="countdown">
          {countdownItems.map((item, i) => (
            <div className="count-item" key={i}>
              <div className="count-num">{item.v}</div>
              <div className="count-label">{item.l}</div>
            </div>
          ))}
        </div>
      </section>


      {/* Зургийн слайдер */}
      <section className="section fade-in">
        <div className="photo-slider-container">
          <div className="slider-wrapper">
            <img
              src={sliderImages[sliderSlide]}
              alt={`Зураг ${sliderSlide + 1}`}
              className="slider-image"
              loading="lazy"
            />
          </div>
          <div className="slider-dots">
            {sliderImages.map((_, i) => (
              <span
                key={i}
                className={`slider-dot ${i === sliderSlide ? 'active' : ''}`}
                onClick={() => setSliderSlide(i)}
                aria-label={`Зураг ${i + 1}`}
              ></span>
            ))}
          </div>
        </div>
      </section>


      {/* Хаяг / Байршил */}
      <section className="section fade-in">
        <div className="location-container">
          <h3 className="sub-title">📍 Хаяг / Байршил</h3>
          <div className="location-box">
            <p className="location-text">
              <strong>Буян-Ухаа 2 хороолол, 1039-р байр, 49-р тоот</strong><br />
              Улаанбаатар хот, Хан-Уул дүүрэг
            </p>
            <a
              href="https://www.google.com/maps?q=47.84418357227405,106.78710434917139"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              📍 Байршил харах
            </a>
          </div>
        </div>
      </section>
     


      {/* Ирэх эсэх бүртгэл */}
      <section className="section fade-in">
        <div className="rsvp-container">
          <h3 className="rsvp-question">
            Та "СЭВЛЭГ ҮРГЭЭХ ЁСЛОЛ" арга хэмжээнд<br />
            хүрэлцэн ирэх үү?
          </h3>
          <div className="rsvp-buttons">
            <button className={`rsvp-option-btn ${rsvp === 'yes' ? 'active' : ''}`} onClick={() => setRsvp('yes')} type="button">Тийм</button>
            <button className={`rsvp-option-btn ${rsvp === 'no' ? 'active' : ''}`} onClick={() => setRsvp('no')} type="button">Үгүй</button>
          </div>
          {rsvp && (
            <form className="rsvp-form-box" onSubmit={handleSubmitRsvp}>
              <label className="form-label">Таны нэр <span className="required">*</span></label>
              <input type="text" className="rsvp-input" placeholder="Нэрээ оруулна уу" value={rsvpName} onChange={(e) => setRsvpName(e.target.value)} autoComplete="name" />
              <button type="submit" className="submit-btn">Бүртгүүлэх</button>
            </form>
          )}
        </div>
      </section>


      {/* Зохион байгуулагч */}
      <section className="section fade-in">
        <div className="respect-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#253813" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="crown-icon" aria-hidden="true">
            <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
            <path d="M5 21h14"></path>
          </svg>
          <div className="respect-lines">
            <span className="respect-line"></span>
            <h2 className="respect-text">Хүндэтгэсэн</h2>
            <span className="respect-line"></span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#253813" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="crown-icon" aria-hidden="true">
            <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
            <path d="M5 21h14"></path>
          </svg>
        </div>
        <h3 className="family-name">С.Сод-Од хүүгийн гэр бүл</h3>
        <h3 className="family-name">О.Нарансувд охины гэр бүл</h3>
      </section>
    </div>
  );
};

export default App;