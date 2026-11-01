import { Clock, Bell, MapPinOff, AlertTriangle, CheckCircle, Volume2, ShieldCheck, CornerDownRight, CalendarDays } from 'lucide-react';
import { PROPOSED_DAILY_SCHEDULE } from '../../data/slidesData';

export default function Slide5WasteCollection({ language }) {
  const isMr = language === 'mr';

  const timeSlots = PROPOSED_DAILY_SCHEDULE;

  const narrowLaneSolutions = [
    {
      title: isMr ? "जुना जालना व अरुंद गल्ल्या" : "Old Jalna & Congested Lanes",
      desc: isMr
        ? "जालन्यातील अरुंद गल्ल्यांमध्ये मोठे टिप्पर जात नाहीत; त्यासाठी १.२ मीटर रुंदीच्या कॉम्पॅक्ट बॅटरी ई-रिक्षांची योजना."
        : "Ultra-compact 1.2m width electric tippers easily maneuver narrow historic lanes and cul-de-sacs."
    },
    {
      title: isMr ? "झोपडपट्टी व दुर्लक्षित वस्त्या" : "Slum Pockets & Informal Settlements",
      desc: isMr
        ? "४ डबे असलेल्या हाताने चालविण्याच्या स्मार्ट ट्रॉली आणि स्थानिक स्वच्छता मित्रांद्वारे १००% घरोघरी प्रवेश."
        : "Four-compartment manual push-trolleys and dedicated localized ward safai mitras."
    },
    {
      title: isMr ? "कंटेनरमुक्त जालना शहर धोरण" : "Bin-Free City Policy",
      desc: isMr
        ? "रस्त्यावरील उघडे कचरा कुंडे (DVP) हटवून थेट घंटागाडीत कचरा देण्याची शिस्तबद्ध अंमलबजावणी."
        : "Elimination of open secondary road vats (DVP) in favor of 100% direct-to-vehicle collection."
    }
  ];

  const antiMissedMeasures = [
    {
      title: isMr ? "घंटागाडी म्युझिकल अलर्ट" : "Audio Melodious Siren",
      desc: isMr ? "वाहन गल्लीत येण्यापूर्वी २०० मीटर आधी स्वच्छतेचे गाणे वाजवून नागरिकांना पूर्वसूचना." : "Pre-arrival jingle alerts households 200m before the vehicle enters the lane."
    },
    {
      title: isMr ? "QR / RFID स्कॅनिंग पडताळणी" : "RFID/QR Gate Scanning",
      desc: isMr ? "कचरा संकलनानंतर घरावरील कोड स्कॅन; स्कॅन न झालेली घरे डॅशबोर्डवर लाल रंगात दिसतात." : "Mandatory scan turns household green; uncollected houses flag red by 11:30 AM."
    },
    {
      title: isMr ? "४५ मिनिटांत मोप-अप व्हॅन" : "45-Min Mop-up Response",
      desc: isMr ? "नागरिकाने ॲप/व्हॉट्सॲपवर कळवल्यास राखीव व्हॅन ४५ मिनिटांत जाऊन कचरा संकलित करते." : "Dedicated mop-up vehicle dispatches on alert to retrieve any missed collections."
    }
  ];

  return (
    <div className="slide-content slide-mandate-4 animate-fade-in">
      <div className="slide-header-box">
        <div className="mandate-tag-pill">
          <span className="pill-number">मुद्दा क्र. ४</span>
          <span className="pill-title">कचरा संकलन: दैनिक संकलन, संकीर्ण गल्ल्या व वेळापत्रक</span>
        </div>
        <h2 className="slide-main-heading">
          {isMr
            ? 'दैनिक संकलन व्यवस्था, संकीर्ण गल्ल्यांचा समावेश, वेळ आणि कचरा चुकणे टाळण्यासाठी उपाय'
            : 'Daily Collection SOP, Narrow Lane Slum Coverage & Anti-Missed Measures'}
        </h2>
        <p className="slide-lead-desc">
          {isMr
            ? '१००% घरोघरी दैनंदिन संकलन, जुना जालना मधील संकीर्ण गल्ल्यांसाठी ई-रिक्षा आणि शून्य कचरा सुटण्याची हमी.'
            : '365-day 100% door-to-door collection with narrow-lane electric units and proactive missed-bin alert systems.'}
        </p>
      </div>

      <div className="slide-two-col-layout">
        {/* Left Column: Timing & Narrow Lanes */}
        <div className="layout-col">
          <div className="content-card">
            <div className="card-top-icon">
              <Clock size={22} className="text-orange-500" />
              <h3 className="card-h3">
                {isMr ? 'संकलनाचे अचूक वेळापत्रक व पाळी नियोजन' : 'Collection Shift Schedule & Timetable'}
              </h3>
            </div>

            <div className="shift-schedule-stack">
              {timeSlots.map((ts, idx) => (
                <div key={idx} className={`shift-card-row ${ts.color}`}>
                  <div className="shift-header-line">
                    <span className="shift-hours font-mono text-orange-400 font-bold">{ts.time}</span>
                  </div>
                  <p className="shift-cov-text font-medium text-white">{isMr ? ts.taskMr : ts.taskEn}</p>
                </div>
              ))}
            </div>

            {/* Special Situations Note */}
            <div className="contingency-schedule-note">
              <CalendarDays size={14} className="text-orange-400 flex-shrink-0" />
              <span className="text-xs text-secondary">
                <strong>{isMr ? 'विशेष परिस्थिती नियोजन:' : 'Contingency Protocol:'}</strong>{' '}
                {isMr
                  ? 'पावसाळा, सण, आठवडी बाजाराचे दिवस किंवा आपत्कालीन स्थितीत अतिरिक्त फेऱ्या व राखीव वाहने तैनात केली जातील.'
                  : 'Additional shifts deployed during monsoon, festivals, weekly markets & emergency waste surges.'}
              </span>
            </div>

            {/* Narrow lanes section */}
            <div className="narrow-lanes-box">
              <h4 className="narrow-heading">
                <CornerDownRight size={16} className="text-green-500" />
                <span>{isMr ? 'संकीर्ण गल्ल्या व दुर्लक्षित क्षेत्रांसाठी विशेष तोडगा:' : 'Narrow Alley & Slum Protocol:'}</span>
              </h4>
              <div className="narrow-items-list">
                {narrowLaneSolutions.map((n, i) => (
                  <div key={i} className="narrow-sub-item">
                    <strong>{n.title}:</strong> <span>{n.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Anti-Missed Bin Technology */}
        <div className="layout-col">
          <div className="content-card primary-border">
            <div className="card-top-icon">
              <ShieldCheck size={22} className="text-green-500" />
              <h3 className="card-h3">
                {isMr ? 'कचरा संकलन चुकणे टाळण्यासाठी त्रिस्तरीय उपाय' : '3-Tier Anti-Missed Collection Measures'}
              </h3>
            </div>

            <div className="anti-missed-cards-stack">
              {antiMissedMeasures.map((am, i) => (
                <div key={i} className="anti-missed-item">
                  <div className="anti-icon-box">
                    {i === 0 && <Volume2 size={20} className="text-orange-500" />}
                    {i === 1 && <CheckCircle size={20} className="text-green-500" />}
                    {i === 2 && <AlertTriangle size={20} className="text-blue-500" />}
                  </div>
                  <div>
                    <h4 className="anti-item-title">{am.title}</h4>
                    <p className="anti-item-desc">{am.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Citizen Alert Simulator */}
            <div className="citizen-alert-card">
              <div className="cit-alert-top">
                <span className="live-dot" />
                <span className="cit-alert-head">
                  {isMr ? 'नागरिक ॲप व व्हॉट्सॲप थेट ट्रॅकिंग' : 'Live WhatsApp / Citizen Bot'}
                </span>
              </div>
              <p className="cit-alert-txt">
                {isMr
                  ? 'नागरिक आपल्या प्रभागातील घंटागाडीचे लाईव्ह लोकेशन पाहू शकतात आणि गाडी न आल्यास एका क्लिकवर "कचरा सुटला" अशी तक्रार नोंदवू शकतात.'
                  : 'Citizens track incoming vehicle live on map and can trigger instant "Missed Bin" alert.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
