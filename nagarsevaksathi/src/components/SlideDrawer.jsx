import { useState } from 'react';
import { X, Search, CheckCircle, ChevronRight, Layers } from 'lucide-react';

export default function SlideDrawer({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide,
  slidesData,
  language
}) {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filtered = slidesData.filter((s) => {
    const q = search.toLowerCase();
    const titleMatch = (s.title && s.title.toLowerCase().includes(q)) ||
      (s.titleEn && s.titleEn.toLowerCase().includes(q));
    const catMatch = s.category && s.category.toLowerCase().includes(q);
    const mandateMatch = s.mandateNumber && s.mandateNumber.toLowerCase().includes(q);
    return titleMatch || catMatch || mandateMatch;
  });

  return (
    <div className="drawer-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div className="drawer-title-group">
            <Layers size={20} className="text-green-500" />
            <div>
              <h3 className="drawer-heading">सादरीकरण मार्गदर्शक (Slide Index)</h3>
              <p className="drawer-sub">
                {language === 'mr'
                  ? 'जालना मनपा १०० TPD निविदा सादरीकरण सूची'
                  : 'Jalna Municipal Corporation 100 TPD Presentation Deck'}
              </p>
            </div>
          </div>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close drawer">
            <X size={20} />
          </button>
        </div>

        {/* Search Input */}
        <div className="drawer-search-wrap">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="drawer-search-input"
            placeholder={
              language === 'mr'
                ? 'मुद्दा किंवा स्लाइड शोधा (उदा. वाहन, सर्वेक्षण, MRF)...'
                : 'Search slide or mandate point...'
            }
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          {search && (
            <button className="search-clear-btn" onClick={() => setSearch('')}>
              <X size={14} />
            </button>
          )}
        </div>

        {/* Slides List */}
        <div className="drawer-slides-list">
          {filtered.map((slide) => {
            const isActive = slide.id === currentSlide;
            return (
              <div
                key={slide.id}
                className={`drawer-slide-item ${isActive ? 'active' : ''}`}
                onClick={() => {
                  onSelectSlide(slide.id);
                  onClose();
                }}
              >
                <div className="drawer-slide-num">
                  <span>{String(slide.id).padStart(2, '0')}</span>
                  {isActive && <CheckCircle size={14} className="active-icon" />}
                </div>

                <div className="drawer-slide-info">
                  <div className="drawer-mandate-tag">
                    <span className="mandate-badge">{slide.mandateNumber}</span>
                    <span className="cat-badge">{slide.category}</span>
                  </div>
                  <h4 className="drawer-slide-title">
                    {language === 'mr' ? slide.title : slide.titleEn || slide.title}
                  </h4>
                  <p className="drawer-slide-sub">
                    {language === 'mr' ? slide.subtitle : slide.subtitleEn || slide.subtitle}
                  </p>
                </div>

                <ChevronRight size={18} className="drawer-chevron" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
