import { Users, HardHat, ShieldCheck, HeartPulse, UserCheck, Award, FileCheck2 } from 'lucide-react';

export default function Slide8HRSafety({ language }) {
  const isMr = language === 'mr';

  const staffingRows = [
    { role: isMr ? "प्रकल्प संचालक व SWM अभियंते" : "Project Heads & SWM Engineers", count: "२", desc: isMr ? "एकूण संनियंत्रण, मनपा समन्वय व धोरणात्मक अंमलबजावणी" : "Overall command & JMC liaison" },
    { role: isMr ? "प्रभाग स्वच्छता पर्यवेक्षक (Supervisors)" : "Ward Field Supervisors", count: "१४", desc: isMr ? "थेट बीट मॉनिटरिंग, हजेरी व जागेवरील तपासणी" : "Direct beat monitoring & citizen contact" },
    { role: isMr ? "प्रशिक्षित व्यावसायिक चालक (Drivers)" : "Heavy & Light Vehicle Drivers", count: "६२", desc: isMr ? "वैध परवानाधारक, जीपीएस हाताळणीत निष्णात" : "Licensed, GPS navigation trained" },
    { role: isMr ? "स्वच्छता मित्र / मदतनीस (Safai Mitras)" : "Safai Mitras / Waste Loaders", count: "१२४", desc: isMr ? "प्रत्येक वाहनावर २ मदतनीस, कचरा वर्गीकरण तपासणी" : "2 loaders per vehicle, segregation audit" },
    { role: isMr ? "ऑटो मेकॅनिक, इलेक्ट्रिशियन व मदतनीस" : "Fleet Mechanics & Technicians", count: "४", desc: isMr ? "डेपोमध्ये वाहनांची २४x७ देखभाल व दुरुस्ती" : "Depot maintenance, emergency breakdown van" },
    { role: isMr ? "डेटा ऑपरेटर व MIS विश्लेषक" : "MIS Analysts & IT Dispatchers", count: "४", desc: isMr ? "कमांड सेंटर, डॅशबोर्ड व तक्रार निवारण कक्ष" : "Command center, ticketing & daily reports" }
  ];

  const ppeKits = [
    { item: isMr ? "पंक्चर-प्रूफ सुरक्षा हातमोजे" : "Puncture-Proof Gloves", desc: isMr ? "काच, पत्रे व तीक्ष्ण कचऱ्यापासून संरक्षणासाठी हेवी-ड्युटी नायट्रिल व लेदर ग्लोव्हज." : "Heavy-duty nitrile & leather to prevent cuts from broken glass & metals." },
    { item: isMr ? "रिफ्लेक्टीव्ह फ्लोरोसंट जॅकेट" : "3M Fluorescent Jackets", desc: isMr ? "सकाळी अंधारात व रस्त्यावर वाहनांच्या प्रकाशात कामगारांचे स्पष्ट दृश्यमानता." : "High-visibility neon vests with retro-reflective bands for dawn/night safety." },
    { item: isMr ? "अँटी-स्लिप स्टील-टो गमबूट्स" : "Steel-Toe Safety Gumboots", desc: isMr ? "पाणी, चिखल, आम्ल व रासायनिक द्रव्यांपासून पायांचे १००% रक्षण." : "Industrial acid & slip resistant boots protecting from sharp objects." },
    { item: isMr ? "सक्रिय कार्बनयुक्त N-95 मास्क" : "Activated Carbon N-95 Masks", desc: isMr ? "दुर्गंधी, धूळ आणि सूक्ष्म जीवाणूंच्या श्वसनातून प्रतिबंध." : "Multi-layer respirators protecting lungs from harmful dust, vapors & bio-aerosols." }
  ];

  return (
    <div className="slide-content slide-mandate-7 animate-fade-in">
      <div className="slide-header-box">
        <div className="mandate-tag-pill">
          <span className="pill-number">मुद्दा क्र. ७</span>
          <span className="pill-title">मानवसंसाधन, कामगार सुरक्षा व कल्याण</span>
        </div>
        <h2 className="slide-main-heading">
          {isMr
            ? 'कर्मचारी नियुक्ती, पर्यवेक्षण, बायोमेट्रिक उपस्थिती, प्रशिक्षण आणि कामगारांची सुरक्षा'
            : 'Staff Recruitment, Hierarchy, Biometric Tracking, Safety PPE & Worker Welfare'}
        </h2>
        <p className="slide-lead-desc">
          {isMr
            ? '२१०+ कर्मचाऱ्यांचे सुसज्ज मनुष्यबळ, फेस-रेकग्निशन बायोमेट्रिक हजेरी, १००% PPE किट्स आणि ESIC/PF संरक्षण.'
            : '210+ trained personnel, geo-tagged facial attendance, full protective gear, and robust health & welfare coverage.'}
        </p>
      </div>

      <div className="slide-two-col-layout">
        {/* Left Column: Staffing Matrix */}
        <div className="layout-col">
          <div className="content-card">
            <div className="card-top-icon">
              <Users size={22} className="text-orange-500" />
              <h3 className="card-h3">
                {isMr ? 'प्रकल्प मनुष्यबळ रचना (Staffing Structure: २१०+)' : 'Project Workforce Deployment (210+ Staff)'}
              </h3>
            </div>

            <div className="staff-table-list">
              {staffingRows.map((sr, idx) => (
                <div key={idx} className="staff-row-item">
                  <div className="staff-meta">
                    <span className="staff-role font-bold">{sr.role}</span>
                    <span className="staff-count-badge font-mono">{sr.count}</span>
                  </div>
                  <p className="staff-desc">{sr.desc}</p>
                </div>
              ))}
            </div>

            {/* Key Technical SWM Expert Callout */}
            <div className="expert-profile-callout">
              <div className="expert-callout-top">
                <Award size={18} className="text-orange-400" />
                <span className="expert-badge-tag">{isMr ? 'संस्थेचे मुख्य तांत्रिक तज्ज्ञ' : 'Key SWM Technical Expert'}</span>
              </div>
              <div className="expert-details-body">
                <h4 className="expert-name font-bold text-white">श्री. धम्मपाल वामन धवळे</h4>
                <div className="expert-role text-xs text-orange-400 font-medium">घनकचरा संकलन व वाहतूक तज्ज्ञ</div>
                <div className="expert-credentials-grid">
                  <div>
                    <span className="text-secondary text-xs">पात्रता:</span>{' '}
                    <strong className="text-xs text-white">B.A., Diploma in Sanitary Inspector</strong>
                  </div>
                  <div>
                    <span className="text-secondary text-xs">अनुभव:</span>{' '}
                    <strong className="text-xs text-green-400 font-mono">१५ वर्षांचा प्रदीर्घ अनुभव</strong>
                  </div>
                </div>
                <p className="expert-desc text-secondary text-xs mt-1">
                  {isMr
                    ? 'जालना शहरातील १०० TPD संकलन, प्रभाग बीट प्लॅनिंग, कामगार सुरक्षा व समंगाव प्रक्रिया केंद्राशी थेट तांत्रिक समन्वय.'
                    : 'Heading Jalna 100 TPD collection beat planning, worker safety protocols & technical coordination with Samangaon plant.'}
                </p>
              </div>
            </div>

            <div className="attendance-feature-strip">
              <UserCheck size={18} className="text-green-400" />
              <span>
                <strong>{isMr ? 'हजेरी व देखरेख पद्धत:' : 'Attendance Protocol:'}</strong>{' '}
                {isMr
                  ? 'सकाळी ०६:०० वाजता डेपोमध्ये बायोमेट्रिक किंवा मोबाइल-आधारित हजेरी, गणवेश, ओळखपत्र व दररोज उपस्थिती अहवाल.'
                  : 'Daily biometric/mobile scan at 06:00 AM, ID badges, uniforms & automated daily attendance MIS.'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: PPE Gear & Worker Welfare */}
        <div className="layout-col">
          <div className="content-card primary-border">
            <div className="card-top-icon">
              <HardHat size={22} className="text-green-500" />
              <h3 className="card-h3">
                {isMr ? 'सुरक्षा उपकरणे (PPE Kits) व कामगार कल्याण' : 'Mandatory PPE Equipment & Worker Welfare'}
              </h3>
            </div>

            <div className="ppe-grid">
              {ppeKits.map((p, i) => (
                <div key={i} className="ppe-item-box">
                  <div className="ppe-name font-bold text-orange-400">
                    <ShieldCheck size={16} className="inline-icon text-green-400" />
                    <span>{p.item}</span>
                  </div>
                  <p className="ppe-desc">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="welfare-pledge-box">
              <h4 className="welfare-title">
                <HeartPulse size={18} className="text-red-400" />
                <span>{isMr ? 'कायदेशीर संरक्षण व सामाजिक सुरक्षा:' : 'Statutory & Social Security Compliance:'}</span>
              </h4>
              <div className="welfare-pills-row">
                <span className="welfare-pill">ESIC वैद्यकीय विमा</span>
                <span className="welfare-pill">भविष्य निर्वाह निधी (EPF)</span>
                <span className="welfare-pill">दर ३ महिन्यांनी आरोग्य तपासणी</span>
                <span className="welfare-pill">धनुर्वात व कावीळ लसीकरण</span>
                <span className="welfare-pill">स्वच्छ पिण्याचे पाणी व विश्रामगृह</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
