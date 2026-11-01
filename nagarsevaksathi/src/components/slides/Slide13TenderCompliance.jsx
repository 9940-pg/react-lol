import { useState } from 'react';
import { ShieldCheck, CheckCircle2, FileText, Award, Building, Sparkles, ClipboardCheck, ListFilter } from 'lucide-react';
import { JALNA_MUNICIPAL_DETAILS, PRE_PRESENTATION_CHECKLIST } from '../../data/slidesData';

export default function Slide13TenderCompliance({ language, onOpenLetter }) {
  const isMr = language === 'mr';
  const [activeTab, setActiveTab] = useState('mandates'); // 'mandates' | 'checklist'

  const complianceList = [
    {
      num: 1,
      title: isMr ? "एजन्सी प्रोफाइल व अनुभव" : "Agency Profile & Track Record",
      status: isMr ? "१००% परिपूर्ण" : "100% Compliant",
      proof: isMr
        ? "१९+ वर्षे अनुभव (स्थापना: १८/१२/२००६). यवतमाळ नगर परिषद (८५ TPD, ५०६ कामगार, ₹१७.८३ कोटी), अमरावती मनपा (₹२१.३८ कोटी/वर्ष), हिंगोली (₹१६.७१ कोटी, २०८ कामगार). CA प्रमाणित नेट वर्थ ₹६.१२ कोटी."
        : "19+ Yrs (Est. 2006). Yavatmal NP (85 TPD, 506 staff, ₹17.83 Cr), Amravati (₹21.38 Cr/yr), Hingoli (₹16.71 Cr). Certified Net Worth ₹6.12 Cr."
    },
    {
      num: 2,
      title: isMr ? "घरोघरी सर्वेक्षण व मॅपिंग" : "D2D Survey & GIS Mapping",
      status: isMr ? "१००% परिपूर्ण" : "100% Compliant",
      proof: isMr ? "जीआयएस बीट मॅपिंग, प्रत्येक मिळकतीस डिजिटल QR/RFID टॅगिंग पद्धत." : "Full GIS beat demarcation, property RFID/QR enumeration"
    },
    {
      num: 3,
      title: isMr ? "वाहन व्यवस्थापन व GPS" : "Fleet Management & GPS",
      status: isMr ? "१००% परिपूर्ण" : "100% Compliant",
      proof: isMr
        ? "६२+ वाहने, AIS-140 GPS. शुद्धीपत्रकानुसार किमान ३ Refuse Compactors चे अधिकृत भाडेकरार व आर.सी. बुक सादर."
        : "62+ vehicles, AIS-140 GPS. 3 Refuse Compactors submitted with registered lease deeds & RC books."
    },
    {
      num: 4,
      title: isMr ? "दैनिक कचरा संकलन" : "Daily Collection SOP",
      status: isMr ? "१००% परिपूर्ण" : "100% Compliant",
      proof: isMr ? "सकाळी ६ ते सायं. ६ (५ सत्रे), जुना जालना अरुंद गल्ल्या कव्हरेज, म्युझिकल सायरन, ॲप अलर्ट." : "Full 5-session daily schedule, Old Jalna narrow alleys, audio siren, missed bin alerts"
    },
    {
      num: 5,
      title: isMr ? "उगमस्थानी कचरा वर्गीकरण" : "Source Waste Segregation",
      status: isMr ? "१००% परिपूर्ण" : "100% Compliant",
      proof: isMr ? "४-प्रवाह वर्गीकरण, वाहनात मेटल पार्टिशन, शून्य भेसळ हमी व IEC जनजागृती." : "4-stream separation, welded bulkheads, zero mixing, Swachhata Doot"
    },
    {
      num: 6,
      title: isMr ? "वाहतूक, MRF व समंगाव वजन नोंदी" : "MRF & Samangaon Weighment",
      status: isMr ? "१००% परिपूर्ण" : "100% Compliant",
      proof: isMr ? "समंगाव प्रक्रिया केंद्रात सुपूर्द, स्वयंचलित डिजिटल वे-ब्रिज, डिस्पॅच व रिसिप्ट वजन ताळमेळ." : "Handover to Samangaon plant, tamper-proof RFID weighbridge manifests & weight cross-check"
    },
    {
      num: 7,
      title: isMr ? "मानवसंसाधन व कामगार सुरक्षा" : "HR & Worker Safety",
      status: isMr ? "१००% परिपूर्ण" : "100% Compliant",
      proof: isMr
        ? "मुख्य तज्ज्ञ: श्री. धम्मपाल धवळे (१५ वर्षे अनुभव, Sanitary Inspector Diploma). २१०+ कर्मचारी, बायोमेट्रिक हजेरी, PPE किट्स व ESIC."
        : "Lead SWM Expert: Shri Dhammapal Dhawale (15 yrs exp, SI Diploma). 210+ staff, biometric attendance, full PPE & ESIC."
    },
    {
      num: 8,
      title: isMr ? "मॉनिटरिंग व उत्तरदायित्व" : "Monitoring & Accountability",
      status: isMr ? "१००% परिपूर्ण" : "100% Compliant",
      proof: isMr ? "मनपा डॅशबोर्ड रिअल-टाइम ॲक्सेस, व्हॉट्सॲप बॉट, २४ तासांत तक्रार निवारण SLA." : "Live JMC dashboard sync, WhatsApp bot, 24-hour SLA redressal"
    },
    {
      num: 9,
      title: isMr ? "अमलबजावणी कालमर्यादा व खर्च" : "Mobilization Plan & Budget",
      status: isMr ? "१००% परिपूर्ण" : "100% Compliant",
      proof: isMr
        ? "३० दिवसांची ७-टप्प्यांची योजना, सूत्रबद्ध पारदर्शक खर्च मॉडेल, १५ स्थानिक स्वराज्य संस्थांमधील चालू कामांचा आधार."
        : "30-day 7-phase Gantt rollout, formula-based transparent cost model, backed by 15 active municipal contracts."
    }
  ];

  return (
    <div className="slide-content slide-mandate-compliance animate-fade-in">
      <div className="slide-header-box">
        <div className="mandate-tag-pill">
          <span className="pill-number">अनुपालन पडताळणी</span>
          <span className="pill-title">निविदा अटी, ९ मुद्दे व १२-मुद्द्यांची चेकलिस्ट</span>
        </div>
        <h2 className="slide-main-heading">
          {isMr
            ? 'जालना शहर महानगरपालिका निविदा पत्र (जा.क्र. ५०९) — सर्वंकष अनुपालन व चेकलिस्ट'
            : 'Jalna Municipal Corporation Letter No. 509 — 100% Technical Compliance & Checklist'}
        </h2>
        <p className="slide-lead-desc">
          {isMr
            ? 'मा. आयुक्त यांच्या पत्रात मागितलेल्या सर्व ९ मुद्द्यांची तांत्रिक निकषांनुसार परिपूर्ण पूर्तता आणि १२ मुद्यांची पडताळणी.'
            : 'Point-by-point compliance certification mapped directly against Hon. Municipal Commissioner letter & official bid documents.'}
        </p>
      </div>

      {/* Tab Switcher for Mandates vs Checklist */}
      <div className="compliance-sub-tabs-bar">
        <button
          type="button"
          className={`comp-tab-btn ${activeTab === 'mandates' ? 'active' : ''}`}
          onClick={() => setActiveTab('mandates')}
        >
          <ShieldCheck size={16} />
          <span>{isMr ? '१. मनपा पत्रातील ९ अनिवार्य मुद्दे (Mandatory Scopes)' : '1. 9 Mandatory Scopes'}</span>
        </button>
        <button
          type="button"
          className={`comp-tab-btn ${activeTab === 'checklist' ? 'active' : ''}`}
          onClick={() => setActiveTab('checklist')}
        >
          <ClipboardCheck size={16} />
          <span>{isMr ? '२. अंतिम सादरीकरणापूर्वी १२-मुद्द्यांची चेकलिस्ट (Verification Checklist)' : '2. 12-Item Verification Checklist'}</span>
        </button>
      </div>

      {/* TAB 1: 9-Point Compliance Table */}
      {activeTab === 'mandates' && (
        <div className="compliance-table-container">
          <div className="compliance-table-header">
            <span className="col-num">क्र.</span>
            <span className="col-mandate">मनपा पत्रातील आवश्यक मुद्दा</span>
            <span className="col-status">अनुपालन स्थिती</span>
            <span className="col-proof">बी.के.एन.एस.एस. ची प्रस्तावित तांत्रिक पूर्तता व पुरावा</span>
          </div>

          <div className="compliance-rows-scroll">
            {complianceList.map((c) => (
              <div key={c.num} className="compliance-row-item">
                <span className="col-num font-mono font-bold">{c.num}</span>
                <span className="col-mandate font-bold text-white">{c.title}</span>
                <span className="col-status">
                  <span className="status-badge-compliant">
                    <CheckCircle2 size={13} className="text-green-400" />
                    <span>{c.status}</span>
                  </span>
                </span>
                <span className="col-proof text-secondary">{c.proof}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: 12-Point Pre-Presentation Verification Checklist */}
      {activeTab === 'checklist' && (
        <div className="compliance-table-container checklist-view">
          <div className="compliance-table-header checklist-header">
            <span className="col-num">अ.क्र.</span>
            <span className="col-mandate">आवश्यक माहिती / पुरावा</span>
            <span className="col-status">सद्यस्थिती</span>
            <span className="col-proof">तपशील व सादरीकरणातील पडताळणी</span>
          </div>

          <div className="compliance-rows-scroll">
            {PRE_PRESENTATION_CHECKLIST.map((chk) => (
              <div key={chk.sr} className="compliance-row-item checklist-row">
                <span className="col-num font-mono font-bold">{chk.sr}</span>
                <span className="col-mandate font-bold text-white">{chk.itemMr}</span>
                <span className="col-status">
                  <span className="status-badge-compliant">
                    <CheckCircle2 size={13} className="text-green-400" />
                    <span>{chk.statusMr}</span>
                  </span>
                </span>
                <span className="col-proof text-secondary font-mono text-xs">{chk.noteMr}</span>
              </div>
            ))}
          </div>

          <div className="checklist-rec-banner">
            <Sparkles size={16} className="text-orange-400 flex-shrink-0" />
            <span className="text-xs text-secondary">
              <strong>{isMr ? 'तांत्रिक शिफारस:' : 'Technical Note:'}</strong>{' '}
              {isMr
                ? 'हा प्रस्ताव केवळ लेखी आश्वासन नसून प्रत्यक्ष वाहनांचे RC Book, लीज करारनामे, GPS स्क्रीनशॉट, अनुभवी तज्ज्ञ (श्री. धम्मपाल धवळे) व मागील कामांचे अधिकृत अनुभव प्रमाणपत्रे यांसह सिद्ध आहे.'
                : 'Backed by verified RC books, registered lease deeds, live GPS demos, seasoned SWM leadership, and municipal completion certificates.'}
            </span>
          </div>
        </div>
      )}

      {/* Official Written Undertaking Banner */}
      <div className="compliance-undertaking-banner">
        <div className="undertaking-icon">
          <Award size={26} className="text-orange-400" />
        </div>
        <div className="undertaking-text">
          <h4 className="undertaking-h4">
            {isMr ? 'अधिकृत तांत्रिक वचनपत्र (Solemn Undertaking):' : 'Solemn Quality Undertaking:'}
          </h4>
          <p className="undertaking-p">
            {isMr
              ? `बी.के.एन.एस.एस. अमरावती जालना शहर महानगरपालिकेस लेखी हमी देते की, घनकचरा व्यवस्थापन नियम २०१६, सीपीसीबी मानके आणि मा. राष्ट्रीय हरित लवाद (NGT) च्या सर्व मार्गदर्शक तत्त्वांचे १००% काटेकोर पालन केले जाईल. जालना शहराला स्वच्छतेत राज्यात अव्वल क्रमांकावर आणण्यासाठी आमची संस्था सर्व ताकदीनिशी कार्य करेल.`
              : `B.K.N.S.S. Amravati formally undertakes to adhere 100% to Solid Waste Management Rules 2016, CPCB guidelines, and NGT directives, ensuring Jalna emerges as a premier Clean City in Maharashtra.`}
          </p>
        </div>
        <button className="btn-view-notice" onClick={onOpenLetter}>
          <FileText size={16} />
          <span>मूळ पत्र पहा</span>
        </button>
      </div>
    </div>
  );
}
