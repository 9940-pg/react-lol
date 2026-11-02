import { Map, Smartphone, QrCode, Database, CheckSquare, BarChart3, Layers, Home } from 'lucide-react';

export default function Slide3DoorToDoorSurvey({ language }) {
  const isMr = language === 'mr';

  const surveySteps = [
    {
      step: "01",
      title: isMr ? "जीआयएस बेसलाइन मॅपिंग" : "GIS Baseline Mapping",
      desc: isMr
        ? "जालना मनपा हद्दीतील सर्व प्रभाग, गल्ल्या आणि वस्त्यांचे सॅटेलाइट नकाशावर सीमांकन."
        : "Demarcation of all municipal wards, mohallas, and slums on satellite GIS base layer."
    },
    {
      step: "02",
      title: isMr ? "घरोघरी मोबाइल ॲप सर्वेक्षण" : "Door-to-Door App Survey",
      desc: isMr
        ? "प्रत्येक घराची, दुकानाची माहिती: कुटुंब संख्या, व्यावसायिक प्रकार, दैनंदिन कचरा प्रमाण."
        : "Capturing property type, family members, shop category, and estimated daily waste."
    },
    {
      step: "03",
      title: isMr ? "डिजिटल QR / RFID टॅगिंग" : "Digital QR / RFID Tagging",
      desc: isMr
        ? "प्रत्येक मिळकतीवर युनिक बारकोड/आरएफआयडी स्टीकर लावून जिओ-टॅगिंग पूर्ण करणे."
        : "Affixing unique tamper-proof QR/RFID code on main gate/door with geo-coordinates."
    },
    {
      step: "04",
      title: isMr ? "डेटा पडताळणी व प्रमाणीकरण" : "Data Audit & Verification",
      desc: isMr
        ? "मनपाच्या मिळकत कर (Property Tax) डेटाबेसशी जुळवणी करून अंतिम बीट प्लॅन तयार करणे."
        : "Reconciliation against JMC property tax roll to eliminate unserved ghost properties."
    }
  ];

  const wasteBreakdown = [
    {
      source: isMr ? "निवासी घरे (Residential)" : "Residential Households",
      rate: isMr ? "४२० ग्रॅम / व्यक्ती / दिवस" : "420 gm / capita / day",
      tpd: "६५ - ७० TPD",
      share: "६५%",
      color: "bg-green-500"
    },
    {
      source: isMr ? "व्यावसायिक व बाजारपेठा (Commercial/Markets)" : "Commercial, Markets & Bazaars",
      rate: isMr ? "हॉटेल्स, भाजी मंडई, दुकाने" : "Hotels, Mandis, Retail",
      tpd: "२२ - २५ TPD",
      share: "२३%",
      color: "bg-orange-500"
    },
    {
      source: isMr ? "बल्क वेस्ट जनरेटर्स (BWG)" : "Bulk Waste Generators (BWG)",
      rate: isMr ? "लग्न कार्यालये, हॉस्पिटल्स, मॉल्स" : "Function halls, Hospitals, Malls",
      tpd: "१० - १२ TPD",
      share: "१०%",
      color: "bg-yellow-500"
    },
    {
      source: isMr ? "संस्थात्मक व संकीर्ण (Institutional)" : "Institutions & Mixed Pockets",
      rate: isMr ? "शाळा, शासकीय कार्यालये" : "Offices, Schools, Peripheral",
      tpd: "३ - ५ TPD",
      share: "२%",
      color: "bg-blue-500"
    }
  ];

  return (
    <div className="slide-content slide-mandate-2 animate-fade-in">
      <div className="slide-header-box">
        <div className="mandate-tag-pill">
          <span className="pill-number">मुद्दा क्र. २</span>
          <span className="pill-title">घरोघरी सर्वेक्षण व कचरा निर्मिती मूल्यांकन</span>
        </div>
        <h2 className="slide-main-heading">
          {isMr
            ? 'घरोघरी सर्वेक्षण पद्धत, प्रभागनिहाय मॅपिंग आणि कचरा निर्मितीचे शास्त्रीय मूल्यांकन'
            : 'Survey Methodology, Ward-wise GIS Mapping & Scientific Waste Quantification'}
        </h2>
        <p className="slide-lead-desc">
          {isMr
            ? 'प्रत्येक मिळकतीचे डिजिटल टॅगिंग, प्रभागनिहाय बीट प्लॅनिंग आणि किमान १०० TPD क्षमतेची अचूक आखणी.'
            : '100% digital property enumeration, GIS beat alignment, and scientific baseline estimation for 100+ TPD.'}
        </p>
      </div>

      <div className="slide-two-col-layout">
        {/* Left Column: 4-Step Methodology */}
        <div className="layout-col">
          <div className="content-card">
            <div className="card-top-icon">
              <Smartphone size={22} className="text-orange-500" />
              <h3 className="card-h3">
                {isMr ? 'सर्वेक्षणाची ४-टप्प्यांची डिजिटल कार्यपद्धती' : '4-Stage Digital Survey Methodology'}
              </h3>
            </div>

            <div className="survey-steps-stack">
              {surveySteps.map((s, idx) => (
                <div key={idx} className="step-row-item">
                  <div className="step-num-bubble">{s.step}</div>
                  <div className="step-text-body">
                    <h4 className="step-item-title">{s.title}</h4>
                    <p className="step-item-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="survey-app-feature-box">
              <div className="feature-chip">
                <QrCode size={16} className="text-green-400" />
                <span>QR/RFID स्कॅनर</span>
              </div>
              <div className="feature-chip">
                <Map size={16} className="text-orange-400" />
                <span>GPS अक्षांश-रेखांश</span>
              </div>
              <div className="feature-chip">
                <Database size={16} className="text-blue-400" />
                <span>ऑफलाइन सिंक सुविधा</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Waste Quantification & Estimation (100 TPD target) */}
        <div className="layout-col">
          <div className="content-card primary-border">
            <div className="card-top-icon">
              <BarChart3 size={22} className="text-green-500" />
              <h3 className="card-h3">
                {isMr ? 'जालना शहर कचरा निर्मितीचे मूल्यांकन (१५०+ TPD)' : 'Jalna City Waste Quantification (150+ TPD)'}
              </h3>
            </div>

            <p className="card-body-text">
              {isMr
                ? 'जालना शहराची अंदाजे ३.५ लाख लोकसंख्या आणि बाजारपेठा लक्षात घेऊन दररोज सरासरी १०० ते ११० मेट्रिक टन कचरा निर्मितीचे सूक्ष्म विश्लेषण:'
                : 'Based on ~3.5 Lakh population and thriving commercial hubs of Jalna, projected daily waste generation of 100 to 110 MT:'}
            </p>

            <div className="waste-stream-table">
              {wasteBreakdown.map((wb, i) => (
                <div key={i} className="stream-row">
                  <div className="stream-info">
                    <span className="stream-name"><strong>{wb.source}</strong></span>
                    <span className="stream-sub">{wb.rate}</span>
                  </div>
                  <div className="stream-metrics">
                    <span className="stream-tpd">{wb.tpd}</span>
                    <span className="stream-badge">{wb.share}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Highlight */}
            <div className="total-highlight-banner">
              <div>
                <span className="tot-lbl">{isMr ? 'एकूण लक्ष्यित दैनिक संकलन क्षमता:' : 'Total Guaranteed Daily Capacity:'}</span>
                <span className="tot-val text-green-400"> १०० - ११० TPD (Tons Per Day)</span>
              </div>
              <span className="tot-status-tag">{isMr ? 'मनपा निविदेच्या १००% अनुकूल' : '100% Tender Compliant'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
