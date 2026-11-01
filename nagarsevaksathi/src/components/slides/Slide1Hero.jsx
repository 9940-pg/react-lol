import { Building2, Sparkles, ArrowRight, ShieldCheck, FileCheck, Play, Award, Scale, CheckCircle2 } from 'lucide-react';
import { JALNA_MUNICIPAL_DETAILS } from '../../data/slidesData';

export default function Slide1Hero({ onNext, onJumpTo, onOpenLetter, language }) {
  const isMr = language === 'mr';

  return (
    <div className="slide-content slide-hero animate-fade-in">
      <div className="hero-grid">
        {/* Left Column: Headlines & Call to Actions */}
        <div className="hero-text-col">
          <div className="hero-top-badges">
            <span className="hero-pill-badge badge-orange">
              <Building2 size={13} className="text-orange-500" />
              {isMr ? JALNA_MUNICIPAL_DETAILS.corporationNameMr : JALNA_MUNICIPAL_DETAILS.corporationNameEn}
            </span>
            <span className="hero-pill-badge badge-green">
              <ShieldCheck size={13} className="text-green-500" />
              Tender ID: {JALNA_MUNICIPAL_DETAILS.tenderId}
            </span>
            <span className="hero-pill-badge badge-black">
              <Sparkles size={13} className="text-orange-400" />
              {isMr ? 'किमान १०० TPD क्षमता' : 'Min 100 TPD Capacity'}
            </span>
          </div>

          <h1 className="hero-main-title">
            {isMr ? (
              <>
                जालना शहर महानगरपालिका <br />
                <span className="gradient-text-tri">१०० TPD घनकचरा संकलन व व्यवस्थापन</span>
              </>
            ) : (
              <>
                Jalna Municipal Corporation <br />
                <span className="gradient-text-tri">100 TPD Solid Waste Management</span>
              </>
            )}
          </h1>

          <p className="hero-subtitle">
            {isMr
              ? 'डोअर टू डोअर कचरा संकलन, उगमस्थानी वर्गीकरण आणि सुरक्षित वाहतूक — प्रस्तावित तांत्रिक सादरीकरण'
              : 'Door-to-Door Collection, Source Segregation & Safe Transportation — Technical Methodology Deck'}
          </p>

          <p className="hero-lead-text">
            {isMr
              ? 'मा. आयुक्त यांच्या ३०/१०/२०२६ रोजीच्या पत्रानुसार (जा.क्र. ५०९) विचारलेल्या सर्व ९ महत्त्वाच्या तांत्रिक मुद्द्यांचे परिपूर्ण व शास्त्रीय सादरीकरण.'
              : 'Pursuant to Hon. Municipal Commissioner letter dated 30/10/2026 (No. 509), presenting a comprehensive 9-point technical operational masterplan.'}
          </p>

          {/* Key Metrics */}
          <div className="hero-stats-row">
            <div className="stat-card">
              <div className="stat-val text-green-400">१००+ TPD</div>
              <div className="stat-lbl">{isMr ? 'दैनिक संकलन क्षमता' : 'Daily Collection Capacity'}</div>
            </div>
            <div className="stat-card">
              <div className="stat-val text-orange-400">१००%</div>
              <div className="stat-lbl">{isMr ? 'घरोघरी कव्हरेज' : 'Door-to-Door Coverage'}</div>
            </div>
            <div className="stat-card">
              <div className="stat-val text-white">४५+</div>
              <div className="stat-lbl">{isMr ? 'जीपीएस सक्षम वाहने' : 'GPS-enabled Fleet'}</div>
            </div>
            <div className="stat-card">
              <div className="stat-val text-green-400">२ तास</div>
              <div className="stat-lbl">{isMr ? 'तक्रार निवारण SLA' : 'Grievance SLA'}</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-action-buttons">
            <button className="btn-primary-action" onClick={onNext}>
              <Play size={16} fill="currentColor" />
              <span>{isMr ? 'सादरीकरण सुरू करा' : 'Start Presentation'}</span>
              <ArrowRight size={16} />
            </button>
            <button className="btn-secondary-action" onClick={onOpenLetter}>
              <FileCheck size={16} />
              <span>{isMr ? 'मनपा अधिकृत पत्र पहा' : 'View JMC Tender Letter'}</span>
            </button>
            <button className="btn-outline-action" onClick={() => onJumpTo(11)}>
              <Scale size={16} />
              <span>{isMr ? 'थेट GPS व बीट मॅप' : 'Live Fleet & Beat Map'}</span>
            </button>
            <button className="btn-outline-action" onClick={() => onJumpTo(12)}>
              <Award size={16} />
              <span>{isMr ? '१०० TPD कॅल्क्युलेटर' : '100 TPD Calculator'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Visual Showcase Card */}
        <div className="hero-visual-col">
          <div className="hero-showcase-card">
            {/* Tender Invitation Certificate Box */}
            <div className="tender-callout-box">
              <div className="callout-header">
                <div className="emblem-mini">
                  <Building2 size={24} className="text-orange-500" />
                </div>
                <div>
                  <div className="callout-org">{JALNA_MUNICIPAL_DETAILS.corporationNameMr}</div>
                  <div className="callout-dep">स्वच्छता व घनकचरा व्यवस्थापन विभाग</div>
                </div>
              </div>

              <div className="callout-badge-line">
                <span className="badge-tag">निविदा सादरीकरण निमंत्रण</span>
                <span className="badge-date">दिनांक: ०२/११/२०२६ | १२:०० दु.</span>
              </div>

              <div className="callout-details">
                <div className="callout-row">
                  <span className="lbl">{isMr ? 'सादरकर्ता एजन्सी:' : 'Bidder Agency:'}</span>
                  <span className="val text-orange-400"><strong>{JALNA_MUNICIPAL_DETAILS.bidderFullName}</strong></span>
                </div>
                <div className="callout-row">
                  <span className="lbl">{isMr ? 'निविदा संदर्भ:' : 'Tender Ref:'}</span>
                  <span className="val font-mono">{JALNA_MUNICIPAL_DETAILS.tenderId}</span>
                </div>
                <div className="callout-row">
                  <span className="lbl">{isMr ? 'जावक क्रमांक:' : 'Outward No:'}</span>
                  <span className="val font-mono">{JALNA_MUNICIPAL_DETAILS.outwardNo}</span>
                </div>
                <div className="callout-row">
                  <span className="lbl">{isMr ? 'स्थळ:' : 'Venue:'}</span>
                  <span className="val">{JALNA_MUNICIPAL_DETAILS.venue}</span>
                </div>
                <div className="callout-row">
                  <span className="lbl">{isMr ? 'वेळ मर्यादा:' : 'Time Slot:'}</span>
                  <span className="val text-green-400">२० मिनिटे सादरीकरण + १० मिनिटे प्रश्नोत्तरे</span>
                </div>
              </div>

              <div className="mandates-summary-strip">
                <div className="strip-title">
                  <CheckCircle2 size={15} className="text-green-500" />
                  <span>{isMr ? 'मनपा पत्रातील ९ अनिवार्य मुद्दे:' : '9 Mandatory Tender Scopes:'}</span>
                </div>
                <div className="strip-pills">
                  <span>१. प्रोफाइल</span>
                  <span>२. सर्वेक्षण</span>
                  <span>३. वाहने व GPS</span>
                  <span>४. संकलन</span>
                  <span>५. वर्गीकरण</span>
                  <span>६. MRF वाहतूक</span>
                  <span>७. सुरक्षा व HR</span>
                  <span>८. मॉनिटरिंग</span>
                  <span>९. मोबिलायझेशन</span>
                </div>
              </div>

              <div className="callout-footer-sign">
                <div className="sign-details">
                  <span className="sign-name"><strong>{isMr ? JALNA_MUNICIPAL_DETAILS.commissionerName : JALNA_MUNICIPAL_DETAILS.commissionerNameEn}</strong></span>
                  <span className="sign-role">{isMr ? JALNA_MUNICIPAL_DETAILS.commissionerTitle : JALNA_MUNICIPAL_DETAILS.commissionerTitleEn}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
