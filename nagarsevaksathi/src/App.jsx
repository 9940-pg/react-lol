import { useState, useEffect, useCallback, useRef } from 'react';
import { SLIDES_CONFIG, JALNA_MUNICIPAL_DETAILS } from './data/slidesData';
import { soundManager } from './utils/audio';

// Top Toolbar & Nav Components
import PresenterToolbar from './components/PresenterToolbar';
import SlideDrawer from './components/SlideDrawer';
import TrainerNotesModal from './components/TrainerNotesModal';
import OfficialLetterModal from './components/OfficialLetterModal';
import LaserPointer from './components/LaserPointer';
import Spotlight from './components/Spotlight';
import ImageLightbox from './components/ImageLightbox';
import MobileFloatingBar from './components/MobileFloatingBar';

// Slide Components
import Slide1Hero from './components/slides/Slide1Hero';
import Slide2AgencyProfile from './components/slides/Slide2AgencyProfile';
import Slide3DoorToDoorSurvey from './components/slides/Slide3DoorToDoorSurvey';
import Slide4FleetManagement from './components/slides/Slide4FleetManagement';
import Slide5WasteCollection from './components/slides/Slide5WasteCollection';
import Slide6WasteSegregation from './components/slides/Slide6WasteSegregation';
import Slide7TransportationHandover from './components/slides/Slide7TransportationHandover';
import Slide8HRSafety from './components/slides/Slide8HRSafety';
import Slide9MonitoringAccountability from './components/slides/Slide9MonitoringAccountability';
import Slide10MobilizationBudget from './components/slides/Slide10MobilizationBudget';
import Slide11LiveRouteGPSDemo from './components/slides/Slide11LiveRouteGPSDemo';
import Slide12CapacityCalculator from './components/slides/Slide12CapacityCalculator';
import Slide13TenderCompliance from './components/slides/Slide13TenderCompliance';
import Slide14ConclusionQA from './components/slides/Slide14ConclusionQA';

import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [laserActive, setLaserActive] = useState(false);
  const [spotlightActive, setSpotlightActive] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [viewMode, setViewMode] = useState('presentation'); // 'presentation' | 'scroll'
  const [language, setLanguage] = useState('mr'); // 'mr' (मराठी) | 'en' (English)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('nagarsevak_theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('nagarsevak_theme', theme);
      }
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    soundManager.playLaserClick();
  };

  const totalSlides = SLIDES_CONFIG.length;
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  // Modern View Transitions API navigation helper with robust fallbacks
  const navigateSlide = useCallback((targetSlide, direction = 'forward') => {
    if (targetSlide < 1 || targetSlide > totalSlides) return;

    soundManager.playSlideWhoosh();

    const updateDOM = () => {
      setCurrentSlide(targetSlide);
      // Ensure slide viewport stage scrolls to top
      const stage = document.getElementById('slide-stage');
      if (stage) stage.scrollTo({ top: 0, behavior: 'smooth' });
      if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });

      // If in continuous scroll mode, scroll smoothly to section
      const section = document.getElementById(`slide-section-${targetSlide}`);
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (typeof document !== 'undefined' && 'startViewTransition' in document && typeof document.startViewTransition === 'function') {
      try {
        // Attempt View Transitions Level 2 with transition types
        document.startViewTransition({
          update: updateDOM,
          types: [direction]
        });
        return;
      } catch {
        try {
          // Fallback to standard View Transitions Level 1
          document.startViewTransition(updateDOM);
          return;
        } catch {
          // Direct update fallback if transition fails
          updateDOM();
          return;
        }
      }
    }
    updateDOM();
  }, [totalSlides]);

  const handleNext = useCallback(() => {
    if (currentSlide < totalSlides) {
      navigateSlide(currentSlide + 1, 'forward');
    }
  }, [currentSlide, totalSlides, navigateSlide]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 1) {
      navigateSlide(currentSlide - 1, 'backward');
    }
  }, [currentSlide, navigateSlide]);

  const handleJumpTo = useCallback((slideId) => {
    const dir = slideId > currentSlide ? 'forward' : 'backward';
    navigateSlide(slideId, dir);
  }, [currentSlide, navigateSlide]);

  // Touch Swipe Handlers for Mobile & Tablet (Horizontal and Vertical)
  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current || !touchStartY.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Horizontal swipe
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    } 
    // Vertical swipe
    else if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 50) {
      if (diffY > 0) {
        handleNext(); // swipe up advances to next slide
      } else {
        handlePrev(); // swipe down returns to previous slide
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Global Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          handlePrev();
          break;
        case 'Home':
          e.preventDefault();
          handleJumpTo(1);
          break;
        case 'End':
          e.preventDefault();
          handleJumpTo(totalSlides);
          break;
        case 'l':
        case 'L':
        case 'p':
        case 'P':
          setLaserActive((prev) => !prev);
          soundManager.playLaserClick();
          break;
        case 'n':
        case 'N':
          setIsNotesOpen((prev) => !prev);
          soundManager.playLaserClick();
          break;
        case 'g':
        case 'G':
          setIsDrawerOpen((prev) => !prev);
          soundManager.playLaserClick();
          break;
        case 'Escape':
          setIsDrawerOpen(false);
          setIsNotesOpen(false);
          setIsLetterOpen(false);
          setLightboxImage(null);
          setLaserActive(false);
          setSpotlightActive(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleJumpTo, totalSlides]);

  // Render individual slide component by ID
  const renderSlideComponent = (id) => {
    switch (id) {
      case 1:
        return (
          <Slide1Hero
            onNext={handleNext}
            onJumpTo={handleJumpTo}
            onOpenLetter={() => setIsLetterOpen(true)}
            language={language}
          />
        );
      case 2:
        return <Slide2AgencyProfile language={language} />;
      case 3:
        return <Slide3DoorToDoorSurvey language={language} />;
      case 4:
        return <Slide4FleetManagement language={language} />;
      case 5:
        return <Slide5WasteCollection language={language} />;
      case 6:
        return <Slide6WasteSegregation language={language} />;
      case 7:
        return <Slide7TransportationHandover language={language} />;
      case 8:
        return <Slide8HRSafety language={language} />;
      case 9:
        return <Slide9MonitoringAccountability language={language} />;
      case 10:
        return <Slide10MobilizationBudget language={language} />;
      case 11:
        return <Slide11LiveRouteGPSDemo language={language} />;
      case 12:
        return <Slide12CapacityCalculator language={language} />;
      case 13:
        return (
          <Slide13TenderCompliance
            language={language}
            onOpenLetter={() => setIsLetterOpen(true)}
          />
        );
      case 14:
        return (
          <Slide14ConclusionQA
            onRestart={() => handleJumpTo(1)}
            language={language}
          />
        );
      default:
        return (
          <Slide1Hero
            onNext={handleNext}
            onJumpTo={handleJumpTo}
            onOpenLetter={() => setIsLetterOpen(true)}
            language={language}
          />
        );
    }
  };

  return (
    <div
      className={`presentation-root ${laserActive ? 'laser-cursor-active' : ''}`}
      data-theme={theme}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Laser Pointer & Spotlight Overlays */}
      <LaserPointer active={laserActive} />
      <Spotlight active={spotlightActive} />

      {/* Persistent Presenter Toolbar */}
      <PresenterToolbar
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
        onJumpTo={handleJumpTo}
        slidesData={SLIDES_CONFIG}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
        isNotesOpen={isNotesOpen}
        onOpenLetter={() => setIsLetterOpen(true)}
        laserActive={laserActive}
        onToggleLaser={() => {
          setLaserActive((prev) => !prev);
          soundManager.playLaserClick();
        }}
        spotlightActive={spotlightActive}
        onToggleSpotlight={() => {
          setSpotlightActive((prev) => !prev);
          soundManager.playLaserClick();
        }}
        viewMode={viewMode}
        onToggleViewMode={() => {
          setViewMode((prev) => (prev === 'presentation' ? 'scroll' : 'presentation'));
          soundManager.playLaserClick();
        }}
        language={language}
        onToggleLanguage={() => {
          setLanguage((prev) => (prev === 'mr' ? 'en' : 'mr'));
          soundManager.playLaserClick();
        }}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Viewport */}
      {viewMode === 'presentation' ? (
        <main className="slide-viewport" id="slide-stage">
          <div className="slide-frame">
            {renderSlideComponent(currentSlide)}
          </div>
        </main>
      ) : (
        /* Web Portal Continuous Scroll Mode */
        <main className="web-portal-scroll-view">
          <div className="portal-container">
            {SLIDES_CONFIG.map((s) => (
              <section key={s.id} id={`slide-section-${s.id}`} className="portal-slide-section">
                <div className="portal-section-header">
                  <div className="portal-badge-group">
                    <span className="portal-num">SLIDE {String(s.id).padStart(2, '0')}</span>
                    <span className="portal-mandate">{s.mandateNumber}</span>
                  </div>
                  <span className="portal-cat">{s.category}</span>
                </div>
                <div className="portal-section-content">
                  {renderSlideComponent(s.id)}
                </div>
              </section>
            ))}
          </div>
        </main>
      )}

      {/* Mobile Floating Bottom Navigation Bar */}
      <MobileFloatingBar
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
        onOpenLetter={() => setIsLetterOpen(true)}
        laserActive={laserActive}
        onToggleLaser={() => {
          setLaserActive((prev) => !prev);
          soundManager.playLaserClick();
        }}
      />

      {/* Slide Navigator Drawer */}
      <SlideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentSlide={currentSlide}
        onSelectSlide={handleJumpTo}
        slidesData={SLIDES_CONFIG}
        language={language}
      />

      {/* Trainer / Speaker Notes Modal */}
      <TrainerNotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        currentSlide={currentSlide}
        slidesData={SLIDES_CONFIG}
      />

      {/* Official Jalna Municipal Corporation Letter Modal */}
      <OfficialLetterModal
        isOpen={isLetterOpen}
        onClose={() => setIsLetterOpen(false)}
      />

      {/* Image Lightbox Modal */}
      <ImageLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}

export default App;
