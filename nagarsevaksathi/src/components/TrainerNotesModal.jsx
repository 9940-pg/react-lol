import { useState } from 'react';
import { X, Mic, Languages, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';

export default function TrainerNotesModal({ isOpen, onClose, currentSlide, slidesData }) {
  const [langTab, setLangTab] = useState('mr'); // 'mr' | 'en'

  if (!isOpen) return null;

  const activeSlide = slidesData.find((s) => s.id === currentSlide) || slidesData[0];

  return (
    <div className="notes-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="notes-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="notes-modal-header">
          <div className="notes-header-left">
            <Mic size={20} className="text-orange-500" />
            <div>
              <h3 className="notes-title">सादरकर्त्याची मार्गदर्शक टिपणे (Speaker Notes)</h3>
              <p className="notes-subtitle">
                स्लाइड {currentSlide} / {slidesData.length}: {activeSlide.title}
              </p>
            </div>
          </div>

          <div className="notes-header-actions">
            {/* Language toggle */}
            <div className="lang-tabs-pill">
              <button
                className={`lang-pill-btn ${langTab === 'mr' ? 'active' : ''}`}
                onClick={() => setLangTab('mr')}
              >
                मराठी
              </button>
              <button
                className={`lang-pill-btn ${langTab === 'en' ? 'active' : ''}`}
                onClick={() => setLangTab('en')}
              >
                English
              </button>
            </div>

            <button className="notes-close-btn" onClick={onClose} aria-label="Close notes">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="notes-modal-body">
          <div className="notes-category-chip">
            <span className="notes-mandate-badge">{activeSlide.mandateNumber}</span>
            <span className="notes-category-text">{activeSlide.category}</span>
          </div>

          <div className="notes-talking-points-box">
            <h4 className="talking-points-heading">
              <BookOpen size={16} className="text-green-500" />
              <span>
                {langTab === 'mr'
                  ? 'सादर करताना स्पष्ट करावयाचे महत्त्वाचे मुद्दे:'
                  : 'Key Presentation Talking Points:'}
              </span>
            </h4>

            <div className="speaker-script-content">
              {langTab === 'mr' ? (
                <p className="script-paragraph">{activeSlide.speakerNotes}</p>
              ) : (
                <p className="script-paragraph">
                  {activeSlide.speakerNotesEn || activeSlide.speakerNotes}
                </p>
              )}
            </div>
          </div>

          {/* Quick timing alert */}
          <div className="notes-time-tip">
            <CheckCircle2 size={15} className="text-orange-500" />
            <span>
              <strong>वेळ व्यवस्थापन सल्ला:</strong> एकूण २० मिनिटांच्या सादरीकरणात या स्लाइडसाठी
              सुमारे १.५ ते २ मिनिटे द्यावीत.
            </span>
          </div>
        </div>

        <div className="notes-modal-footer">
          <span className="notes-hint">
            कळफलकावर <code>N</code> दाबून हे स्पीकर नोट्स विंडो उघडा किंवा बंद करा.
          </span>
          <button className="btn-notes-done" onClick={onClose}>
            <span>समजले / Close</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
