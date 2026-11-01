import { ChevronLeft, ChevronRight, Grid, FileText, FileCheck, Crosshair } from 'lucide-react';

export default function MobileFloatingBar({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onOpenDrawer,
  onToggleNotes,
  onOpenLetter,
  laserActive,
  onToggleLaser
}) {
  return (
    <div className="mobile-floating-bar" role="navigation" aria-label="Mobile navigation">
      <button
        className="mobile-bar-btn"
        onClick={onOpenDrawer}
        aria-label="Slide drawer"
        title="Slides Menu"
      >
        <Grid size={17} />
      </button>

      <button
        className={`mobile-bar-btn ${laserActive ? 'active-laser' : ''}`}
        onClick={onToggleLaser}
        aria-label="Toggle Laser Pointer"
        title="Laser Pointer (P)"
      >
        <Crosshair size={17} />
      </button>

      <button
        className="mobile-bar-btn"
        onClick={onToggleNotes}
        aria-label="Speaker notes"
        title="Speaker Notes"
      >
        <FileText size={17} />
      </button>

      <button
        className="mobile-bar-btn letter-btn"
        onClick={onOpenLetter}
        aria-label="Tender Letter"
        title="JMC Tender Letter"
      >
        <FileCheck size={17} />
      </button>

      <div className="mobile-slide-indicator">
        <span className="mobile-current">{currentSlide}</span>
        <span className="mobile-sep">/</span>
        <span className="mobile-total">{totalSlides}</span>
      </div>

      <button
        className="mobile-bar-btn"
        onClick={onPrev}
        disabled={currentSlide === 1}
        aria-label="Previous slide"
      >
        <ChevronLeft size={19} />
      </button>

      <button
        className="mobile-bar-btn primary"
        onClick={onNext}
        disabled={currentSlide === totalSlides}
        aria-label="Next slide"
      >
        <ChevronRight size={19} />
      </button>
    </div>
  );
}
