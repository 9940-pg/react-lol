import { X, ZoomIn } from 'lucide-react';

export default function ImageLightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-card" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-header">
          <div className="lightbox-title-wrap">
            <ZoomIn size={18} className="text-green-500" />
            <h3 className="lightbox-title">{image.title || 'Image Preview'}</h3>
          </div>
          <button className="lightbox-close-btn" onClick={onClose} aria-label="Close lightbox">
            <X size={20} />
          </button>
        </div>

        <div className="lightbox-body">
          <img src={image.src} alt={image.title || 'Preview'} className="lightbox-img" />
          {image.caption && <p className="lightbox-caption">{image.caption}</p>}
        </div>
      </div>
    </div>
  );
}
