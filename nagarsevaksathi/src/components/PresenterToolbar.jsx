import { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  Crosshair,
  Lightbulb,
  FileText,
  Clock,
  Play,
  Pause,
  RotateCcw,
  Grid,
  FileCheck,
  LayoutGrid,
  MonitorPlay,
  Globe,
  Building2,
  Sun,
  Moon
} from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function PresenterToolbar({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onJumpTo,
  slidesData,
  onOpenDrawer,
  onToggleNotes,
  isNotesOpen,
  onOpenLetter,
  laserActive,
  onToggleLaser,
  spotlightActive,
  onToggleSpotlight,
  viewMode,
  onToggleViewMode,
  language,
  onToggleLanguage,
  theme,
  onToggleTheme
}) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Presenter Stopwatch (Official 20-min session tracker)
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  // Auto-scroll active tab into view in the secondary sub-nav rail
  useEffect(() => {
    const activeChip = document.querySelector('.subnav-tab-chip.active-tab');
    if (activeChip) {
      activeChip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [currentSlide]);

  const handleScrollTabs = (direction) => {
    const rail = document.getElementById('subnav-tabs-rail');
    if (rail) {
      const scrollAmount = direction === 'left' ? -240 : 240;
      rail.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(remSecs).padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const handleMuteToggle = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
    soundManager.playLaserClick();
  };

  const progressPercent = ((currentSlide - 1) / (totalSlides - 1)) * 100;
  const isOvertime = seconds > 20 * 60; // 20 min presentation limit alert

  const activeSlideObj = (slidesData && slidesData.find((s) => s.id === currentSlide)) || {
    mandateNumber: 'सादरकर्ता',
    category: 'प्रस्तावना'
  };

  const getSlideShortTitle = (s) => {
    if (language === 'mr') {
      const shortTitlesMr = {
        1: '१. प्रस्तावना',
        2: '२. एजन्सी प्रोफाइल',
        3: '३. सर्वेक्षण',
        4: '४. वाहने व GPS',
        5: '५. कचरा संकलन',
        6: '६. वर्गीकरण',
        7: '७. MRF वाहतूक',
        8: '८. कामगार सुरक्षा',
        9: '९. मॉनिटरिंग',
        10: '१०. बजेट',
        11: '११. थेट GPS मॅप',
        12: '१२. कॅल्क्युलेटर',
        13: '१३. निविदा अनुपालन',
        14: '१४. निष्कर्ष व QA'
      };
      return shortTitlesMr[s.id] || s.title;
    } else {
      const shortTitlesEn = {
        1: '1. Intro',
        2: '2. Agency Profile',
        3: '3. D2D Survey',
        4: '4. Fleet & GPS',
        5: '5. Collection',
        6: '6. Segregation',
        7: '7. Logistics & MRF',
        8: '8. HR & Safety',
        9: '9. Monitoring',
        10: '10. Budget',
        11: '11. Live GPS Map',
        12: '12. Calculator',
        13: '13. Compliance',
        14: '14. Q&A Sign-off'
      };
      return shortTitlesEn[s.id] || s.titleEn || s.title;
    }
  };

  return (
    <>
      {/* Top progress indicator bar - Clickable for direct navigation */}
      <div
        className="presentation-progress-track"
        onClick={(e) => {
          if (!onJumpTo) return;
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const percent = Math.max(0, Math.min(1, clickX / rect.width));
          const target = Math.min(totalSlides, Math.max(1, Math.round(percent * (totalSlides - 1)) + 1));
          onJumpTo(target);
        }}
        title="क्लिक करून थेट स्लाइडवर जा (Click to jump to slide)"
      >
        <div
          className="presentation-progress-bar"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 1. PRIMARY TOP NAVIGATION BAR */}
      <header className="presenter-nav-bar" role="toolbar" aria-label="Main presentation bar">
        {/* Left: Brand & Authority */}
        <div className="nav-brand-group">
          <div className="brand-badge-swachh">
            <Building2 size={17} className="brand-icon-orange" />
            <span className="brand-text">जालना मनपा</span>
            <span className="brand-dot brand-sub-badge">&bull;</span>
            <span className="brand-bidder brand-sub-badge">BKNSS</span>
          </div>
          <span className="brand-tagline">
            १०० TPD घनकचरा व्यवस्थापन निविदा सादरीकरण
          </span>
        </div>

        {/* Center: Slide Controls & Stopwatch */}
        <div className="nav-center-controls">
          <button
            type="button"
            className="nav-icon-btn nav-btn-prev"
            onClick={onPrev}
            disabled={currentSlide === 1}
            title="मागील स्लाइड / Previous Slide (Left Arrow / Up Arrow / PageUp)"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            className="nav-slide-counter-btn"
            onClick={onOpenDrawer}
            title="सर्व १४ स्लाइड्सची सूची उघडा / Slide Index (G)"
            aria-label="Open Slide Index"
          >
            <span className="current-num">{String(currentSlide).padStart(2, '0')}</span>
            <span className="divider">/</span>
            <span className="total-num">{String(totalSlides).padStart(2, '0')}</span>
            <Grid size={13} className="counter-grid-icon" />
          </button>

          <button
            type="button"
            className="nav-icon-btn nav-btn-primary nav-btn-next"
            onClick={onNext}
            disabled={currentSlide === totalSlides}
            title="पुढील स्लाइड / Next Slide (Right Arrow / Down Arrow / Space)"
            aria-label="Next Slide"
          >
            <ChevronRight size={18} />
          </button>

          {/* Quick Slide Dropdown Selector */}
          {slidesData && slidesData.length > 0 && (
            <div className="nav-quick-select-wrap">
              <select
                className="nav-slide-select"
                value={currentSlide}
                onChange={(e) => onJumpTo && onJumpTo(Number(e.target.value))}
                aria-label="Quick slide jump"
                title="थेट स्लाइड निवडा (Quick Jump)"
              >
                {slidesData.map((s) => (
                  <option key={s.id} value={s.id}>
                    {String(s.id).padStart(2, '0')}. {language === 'mr' ? s.title : (s.titleEn || s.title)}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* 20-Min Stopwatch Timer */}
          <div className={`nav-stopwatch ${isOvertime ? 'stopwatch-alert' : ''}`} title="Presentation Timer (20 min limit)">
            <Clock size={14} className={timerRunning ? 'stopwatch-icon-running' : 'stopwatch-icon-idle'} />
            <span className="stopwatch-display">{formatTime(seconds)}</span>
            <span className="stopwatch-target">/ 20:00</span>
            <button
              type="button"
              className="stopwatch-btn"
              onClick={() => {
                setTimerRunning((prev) => !prev);
                soundManager.playLaserClick();
              }}
              title={timerRunning ? 'Pause Stopwatch' : 'Start Stopwatch'}
            >
              {timerRunning ? <Pause size={12} /> : <Play size={12} fill="currentColor" />}
            </button>
            <button
              type="button"
              className="stopwatch-btn reset"
              onClick={() => {
                setTimerRunning(false);
                setSeconds(0);
                soundManager.playLaserClick();
              }}
              title="Reset Stopwatch"
            >
              <RotateCcw size={11} />
            </button>
          </div>
        </div>

        {/* Right: Global Settings (Theme, Language, Fullscreen, Mute) */}
        <div className="nav-tools-group">
          {/* Ant Design Theme Switcher (One Admin Template Light / Dark) */}
          <button
            type="button"
            className="tool-btn theme-tool-btn"
            onClick={onToggleTheme}
            title={theme === 'light' ? 'Switch to Ant Design Dark Mode' : 'Switch to Ant Design Light Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} className="tool-icon-orange" />}
            <span className="tool-btn-label">{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>

          {/* Language Switch */}
          <button
            type="button"
            className="tool-btn lang-tool-btn"
            onClick={onToggleLanguage}
            title="Toggle Language (मराठी / English)"
          >
            <Globe size={16} />
            <span className="lang-label">{language === 'mr' ? 'मराठी' : 'EN'}</span>
          </button>

          {/* Sound Toggle */}
          <button
            type="button"
            className="tool-btn sound-tool-btn"
            onClick={handleMuteToggle}
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          {/* Fullscreen */}
          <button
            type="button"
            className="tool-btn fullscreen-tool-btn"
            onClick={toggleFullscreen}
            title="Toggle Fullscreen"
            aria-label="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </header>

      {/* 2. SECONDARY SUB-NAVIGATION BAR (Slides Rail & Dedicated Presentation Tools) */}
      <nav className="presenter-sub-nav-bar" role="navigation" aria-label="Secondary sub-navigation rail and presenter controls">
        {/* Left: Active Slide Mandate & Category */}
        <div className="subnav-left-badge">
          <span className="subnav-mandate-chip">{activeSlideObj.mandateNumber}</span>
          <span className="subnav-crumb-separator">/</span>
          <span className="subnav-cat-label">{activeSlideObj.category}</span>
        </div>

        {/* Center: Ant Design 14 Slide Quick Tabs Rail with navigation chevrons */}
        <div className="subnav-tabs-container">
          <button
            type="button"
            className="subnav-arrow-btn prev"
            onClick={() => handleScrollTabs('left')}
            title="Scroll tabs left"
            aria-label="Scroll tabs left"
          >
            <ChevronLeft size={13} />
          </button>

          <div className="subnav-tabs-rail" id="subnav-tabs-rail">
            {slidesData && slidesData.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`subnav-tab-chip ${s.id === currentSlide ? 'active-tab' : ''}`}
                onClick={() => onJumpTo && onJumpTo(s.id)}
                title={`${s.mandateNumber}: ${language === 'mr' ? s.title : (s.titleEn || s.title)}`}
              >
                <span className="tab-chip-dot" />
                <span className="tab-chip-text">{getSlideShortTitle(s)}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="subnav-arrow-btn next"
            onClick={() => handleScrollTabs('right')}
            title="Scroll tabs right"
            aria-label="Scroll tabs right"
          >
            <ChevronRight size={13} />
          </button>
        </div>

        {/* Right: Dedicated Presentation Tools with clear labels */}
        <div className="subnav-tools-group">
          {/* Laser Pointer with prominent state */}
          <button
            type="button"
            className={`subnav-tool-btn laser-tool-btn ${laserActive ? 'active-laser' : ''}`}
            onClick={onToggleLaser}
            title={language === 'mr' ? 'लेझर पॉइंटर चालू/बंद करा (कीबोर्ड P किंवा L दाबा)' : 'Toggle Laser Pointer (Press P or L)'}
            aria-label="Toggle Laser Pointer"
          >
            <span className="subnav-laser-icon-wrap">
              <Crosshair size={15} className={laserActive ? 'laser-icon-active' : ''} />
              {laserActive && <span className="subnav-laser-ring" />}
            </span>
            <span className="subnav-btn-label">
              {language === 'mr' ? (laserActive ? 'पॉइंटर चालू' : 'पॉइंटर') : (laserActive ? 'Pointer ON' : 'Pointer')}
            </span>
            <kbd className="subnav-kbd">P</kbd>
          </button>

          {/* Spotlight Focus */}
          <button
            type="button"
            className={`subnav-tool-btn spotlight-tool-btn ${spotlightActive ? 'active-spotlight' : ''}`}
            onClick={onToggleSpotlight}
            title="Spotlight Focus (S)"
            aria-label="Toggle Spotlight"
          >
            <Lightbulb size={15} />
            <span className="subnav-btn-label">{language === 'mr' ? 'स्पॉटलाइट' : 'Spotlight'}</span>
          </button>

          {/* Speaker Notes */}
          <button
            type="button"
            className={`subnav-tool-btn notes-tool-btn ${isNotesOpen ? 'active-tool' : ''}`}
            onClick={onToggleNotes}
            title="Speaker Notes (N)"
            aria-label="Toggle Speaker Notes"
          >
            <FileText size={15} />
            <span className="subnav-btn-label">{language === 'mr' ? 'टिपणे' : 'Notes'}</span>
          </button>

          <span className="subnav-divider" />

          {/* Official JMC Letter Viewer */}
          <button
            type="button"
            className="subnav-tool-btn letter-highlight-btn"
            onClick={onOpenLetter}
            title="मनपा अधिकृत निविदा पत्र पहा (View Official JMC Letter)"
          >
            <FileCheck size={15} className="tool-icon-orange" />
            <span className="subnav-btn-label">{language === 'mr' ? 'निविदा पत्र' : 'Letter'}</span>
          </button>

          {/* View Mode Toggle: Slide deck vs Web Portal Scroll */}
          <button
            type="button"
            className={`subnav-tool-btn mode-tool-btn ${viewMode === 'scroll' ? 'active-tool' : ''}`}
            onClick={onToggleViewMode}
            title={
              viewMode === 'presentation'
                ? 'Switch to Continuous Web Portal Scroll Mode'
                : 'Switch to Presentation Slide Mode'
            }
          >
            {viewMode === 'presentation' ? <LayoutGrid size={15} /> : <MonitorPlay size={15} />}
            <span className="subnav-btn-label">
              {viewMode === 'presentation' ? 'Portal' : 'Deck'}
            </span>
          </button>

          {/* Slide Index Drawer */}
          <button
            type="button"
            className="subnav-tool-btn drawer-tool-btn"
            onClick={onOpenDrawer}
            title="सर्व १४ स्लाइड्सची सूची (G)"
            aria-label="Open Slide Index"
          >
            <Grid size={15} />
            <span className="subnav-btn-label">{language === 'mr' ? 'सूची' : 'Index'}</span>
          </button>
        </div>
      </nav>
    </>
  );
}
