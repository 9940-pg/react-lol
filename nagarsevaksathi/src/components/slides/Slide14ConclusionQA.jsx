import { useState, useEffect } from 'react';
import { HelpCircle, Clock, Play, Pause, RotateCcw, Building2, Phone, Mail, Award, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { soundManager } from '../../utils/audio';
import { JALNA_MUNICIPAL_DETAILS, BKNSS_COMPANY_DETAILS } from '../../data/slidesData';

export default function Slide14ConclusionQA({ onRestart, language }) {
  const isMr = language === 'mr';

  // 10-Minute Committee Q&A Countdown Timer
  const [qaSeconds, setQaSeconds] = useState(10 * 60);
  const [qaRunning, setQaRunning] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    let interval = null;
    if (qaRunning && qaSeconds > 0) {
      interval = setInterval(() => {
        setQaSeconds((prev) => prev - 1);
      }, 1000);
    } else if (qaSeconds === 0 && qaRunning) {
      setQaRunning(false);
      soundManager.playSuccessChime();
    }
    return () => clearInterval(interval);
  }, [qaRunning, qaSeconds]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(remSecs).padStart(2, '0')}`;
  };

  const faqs = [
    {
      q: isMr ? "पावसाळ्यात कचरा संकलन व वाहतूक विस्कळीत होणार नाही याची काय व्यवस्था आहे?" : "How will waste collection be sustained during monsoon waterlogging?",
      a: isMr
        ? "पावसाळ्यासाठी सर्व वाहनांवर वॉटरप्रूफ हेवी-ड्युटी ताडपत्री, कामगारांना उच्च दर्जाचे रेनकोट व गमबूट्स दिले जातील. तसेच जुना जालन्यातील सखल भागांसाठी विशेष ई-रिक्षांची अतिरिक्त फेऱ्यांची योजना असेल."
        : "All vehicles feature waterproof tarpaulin roll-tops, staff are equipped with full rainsuits & gumboots, and low-lying waterlogged pockets are cleared by agile electric rickshaws on double shifts."
    },
    {
      q: isMr ? "नागरिकांनी कचरा वेगळा करून न दिल्यास काय कारवाई करणार?" : "What action is taken if citizens refuse to segregate waste?",
      a: isMr
        ? "पहिल्या ३ दिवसांत स्वच्छता दूत प्रत्यक्ष समजावून सांगतील; चौथ्या दिवशी पिवळा चेतावणी स्टीकर लावला जाईल. सलग दुर्लक्ष झाल्यास मनपाच्या स्वच्छता निरीक्षकांमार्फत जागेवर दंडात्मक कारवाईची शिफारस केली जाईल."
        : "3-day counseling by Swachhata Doots, followed by yellow warning sticker on Day 4. Habitual defaulters are handed over to JMC sanitary inspectors for statutory spot fines."
    },
    {
      q: isMr ? "वाहनामध्ये बिघाड झाल्यास संकलन रखडणार नाही याची खात्री काय?" : "What is the concrete guarantee against vehicle breakdown delay?",
      a: isMr
        ? "डेपोमध्ये १५% (८ वाहने) सदैव राखीव स्थितीत सज्ज राहतील. जीपीएस अलार्म वाजताच अवघ्या १५ मिनिटांत पर्यायी वाहन संबंधित प्रभागात दाखल होऊन उर्वरित काम पूर्ण करेल."
        : "15% standby fleet (8 buffer vehicles) remain fueled and on active standby at depot. Replacement vehicles reach breakdown site within 15 minutes of telematics alert."
    }
  ];

  return (
    <div className="slide-content slide-mandate-qa animate-fade-in">
      <div className="slide-header-box">
        <div className="mandate-tag-pill">
          <span className="pill-number">समारोप व चर्चा</span>
          <span className="pill-title">प्रश्नोत्तरे सत्र (१० मिनिटे) व आभार प्रदर्शन</span>
        </div>
        <h2 className="slide-main-heading">
          {isMr
            ? 'निष्कर्ष, समिती प्रश्नोत्तरे सत्र (१० मिनिटे) आणि स्वच्छ जालना संकल्प'
            : 'Conclusion, 10-Minute Committee Q&A Session & Official Resolution'}
        </h2>
        <p className="slide-lead-desc">
          {isMr
            ? 'मा. आयुक्त, जालना शहर महानगरपालिका व तांत्रिक मूल्यांकन समितीचे मनःपूर्वक आभार.'
            : 'Extending sincere gratitude to Hon. Municipal Commissioner & Technical Evaluation Committee.'}
        </p>
      </div>

      <div className="slide-two-col-layout">
        {/* Left Column: 10-Min Timer & FAQ Accordions */}
        <div className="layout-col">
          <div className="content-card primary-border">
            <div className="card-top-icon">
              <Clock size={22} className="text-orange-500" />
              <h3 className="card-h3">
                {isMr ? 'समिती प्रश्नोत्तरे सत्र (१० मिनिटे टाइमर)' : 'Committee Q&A Session Countdown'}
              </h3>
            </div>

            {/* Countdown Display Card */}
            <div className="qa-countdown-card">
              <div className="qa-timer-value font-mono font-bold text-green-400">
                {formatTime(qaSeconds)}
              </div>
              <div className="qa-timer-sub text-secondary">
                {isMr ? 'अधिकृत १० मिनिटे प्रश्नोत्तरे कालावधी' : 'Official 10-Minute Q&A Time Window'}
              </div>

              <div className="qa-timer-actions">
                <button
                  className="btn-qa-action play"
                  onClick={() => {
                    setQaRunning(!qaRunning);
                    soundManager.playLaserClick();
                  }}
                >
                  {qaRunning ? <Pause size={15} /> : <Play size={15} fill="currentColor" />}
                  <span>{qaRunning ? 'टाइमर थांबवा' : 'टाइमर सुरू करा'}</span>
                </button>
                <button
                  className="btn-qa-action reset"
                  onClick={() => {
                    setQaRunning(false);
                    setQaSeconds(10 * 60);
                    soundManager.playLaserClick();
                  }}
                >
                  <RotateCcw size={15} />
                  <span>१०:०० रीसेट</span>
                </button>
              </div>
            </div>

            {/* Committee Expected FAQs */}
            <div className="faqs-accordion-wrap">
              <h4 className="faqs-heading">
                <HelpCircle size={16} className="text-green-500" />
                <span>{isMr ? 'समितीचे संभाव्य तांत्रिक प्रश्न व उत्तरे:' : 'Frequently Raised Committee Inquiries:'}</span>
              </h4>

              <div className="faqs-list">
                {faqs.map((f, i) => {
                  const isOpen = activeFaq === i;
                  return (
                    <div key={i} className="faq-item">
                      <button
                        className="faq-question-btn"
                        onClick={() => {
                          setActiveFaq(isOpen ? null : i);
                          soundManager.playLaserClick();
                        }}
                      >
                        <span className="faq-q-text">{f.q}</span>
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      {isOpen && <div className="faq-answer-body">{f.a}</div>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Official Gratitude, Pledge & Contact Details */}
        <div className="layout-col">
          <div className="content-card">
            <div className="card-top-icon">
              <Award size={22} className="text-green-500" />
              <h3 className="card-h3">
                {isMr ? 'बी.के.एन.एस.एस. अमरावती — संपर्क व वचनबद्धता' : 'BKNSS Amravati — Contact & Resolution'}
              </h3>
            </div>

            <div className="swachh-jalna-pledge-card">
              <h4 className="pledge-tagline font-bold text-orange-400">
                &ldquo;स्वच्छ जालना &bull; सुंदर जालना &bull; हरित जालना&rdquo;
              </h4>
              <p className="pledge-quote">
                {isMr
                  ? 'जालना शहर महानगरपालिकेच्या मार्गदर्शनाखाली १००% घरोघरी कचरा संकलन, १००% शास्त्रीय वर्गीकरण आणि पर्यावरणपूरक विल्हेवाट करून शहराला महाराष्ट्रात प्रथम क्रमांकाचे स्वच्छ शहर बनवण्याचा आमचा दृढ संकल्प आहे.'
                  : 'Committed to partnering with Jalna Municipal Corporation to achieve 100% door-to-door coverage, >95% source segregation, and propel Jalna into Maharashtra’s top Clean City league.'}
              </p>
            </div>

            {/* Official Bidder Credentials Card */}
            <div className="bidder-contacts-card">
              <div className="b-row">
                <span className="b-lbl">{isMr ? 'संस्थेचे नाव:' : 'Organization:'}</span>
                <span className="b-val text-white font-bold">{isMr ? BKNSS_COMPANY_DETAILS.legalNameMr : BKNSS_COMPANY_DETAILS.legalNameEn}</span>
              </div>
              <div className="b-row">
                <span className="b-lbl">{isMr ? 'नोंदणीकृत कार्यालय:' : 'Registered Office:'}</span>
                <span className="b-val text-secondary text-xs">{BKNSS_COMPANY_DETAILS.registeredAddress}</span>
              </div>
              <div className="b-row">
                <span className="b-lbl">{isMr ? 'अधिकृत स्वाक्षरीकर्ता:' : 'Authorized Signatory:'}</span>
                <span className="b-val text-white font-medium">श्री. दिनेश प्रेमसिंग गहलोत (सचिव)</span>
              </div>
              <div className="b-row">
                <span className="b-lbl">{isMr ? 'निविदा संदर्भ:' : 'Tender Ref:'}</span>
                <span className="b-val font-mono text-orange-400">{JALNA_MUNICIPAL_DETAILS.tenderId}</span>
              </div>
              <div className="b-row">
                <span className="b-lbl">{isMr ? 'वैधानिक ओळख:' : 'Statutory ID:'}</span>
                <span className="b-val font-mono text-xs text-sky-400">PAN: {BKNSS_COMPANY_DETAILS.pan} | GSTIN: {BKNSS_COMPANY_DETAILS.gstin}</span>
              </div>
              <div className="b-row">
                <span className="b-lbl">{isMr ? 'उद्यम नोंदणी:' : 'Udyam MSME:'}</span>
                <span className="b-val font-mono text-xs text-purple-300">{BKNSS_COMPANY_DETAILS.udyamNumber}</span>
              </div>
              <div className="b-row">
                <span className="b-lbl">{isMr ? 'थेट संपर्क (मोबाईल):' : 'Direct Contacts:'}</span>
                <span className="b-val font-mono text-green-400 font-bold">+91 9921171555 / +91 9022503570</span>
              </div>
              <div className="b-row">
                <span className="b-lbl">{isMr ? 'अधिकृत ईमेल:' : 'Official Email:'}</span>
                <span className="b-val font-mono text-cyan-300">dineshpgahalod@gmail.com</span>
              </div>
            </div>

            {/* Restart button */}
            <div className="conclusion-actions-row">
              <button className="btn-restart-action" onClick={onRestart}>
                <RotateCcw size={16} />
                <span>{isMr ? 'सादरीकरण पुन्हा पहिल्या स्लाइडवर न्या' : 'Restart Deck (Slide 1)'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
