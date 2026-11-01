import { Truck, Navigation, Fuel, Wrench, ShieldAlert, Cpu, CheckCircle2, RotateCw } from 'lucide-react';

export default function Slide4FleetManagement({ language }) {
  const isMr = language === 'mr';

  const fleetTypes = [
    {
      type: isMr ? "हायड्रॉलिक टिप्पर (४-चाकी)" : "Hydraulic Tippers (4-Wheel)",
      count: "४२ वाहने",
      capacity: isMr ? "१.८ ते २.५ मेट्रिक टन" : "1.8 - 2.5 MT per trip",
      features: isMr ? "ओला (६०%) व सुका (४०%) स्वतंत्र हायड्रॉलिक कप्पे" : "Partitioned Twin Compartments",
      badge: "मुख्य संकलन"
    },
    {
      type: isMr ? "ई-रिक्षा / ऑटो टिप्पर (३-चाकी)" : "E-Rickshaws / Auto Tippers (3-Wheel)",
      count: "१६ वाहने",
      capacity: isMr ? "६०० ते ८०० किलो" : "600 - 800 kg per trip",
      features: isMr ? "अरुंद गल्ल्या, झोपडपट्टी व गर्दीच्या बाजारपेठांसाठी" : "Zero-emission, narrow lane agile",
      badge: "संकीर्ण गल्ल्या"
    },
    {
      type: isMr ? "रिफ्यूज कॉम्पॅक्टर / ट्रान्सिट ट्रक्स" : "Refuse Compactors / Bulk Carriers",
      count: "४ वाहने",
      capacity: isMr ? "१० ते १२ मेट्रिक टन" : "10 - 12 MT payload",
      features: isMr ? "दुय्यम वाहतूक, कॉम्पॅक्टिंग व थेट MRF/डंपिंग सुपूर्द" : "High compaction ratio, secondary transit",
      badge: "दुय्यम वाहतूक"
    },
    {
      type: isMr ? "राखीव बॅकअप वाहने (Standby Buffer)" : "Standby Contingency Buffer",
      count: "८ वाहने (१५%)",
      capacity: isMr ? "तात्काळ बदलीसाठी सज्ज" : "Ready for instant swap",
      features: isMr ? "वाहनात बिघाड झाल्यास १५ मिनिटांत घटनास्थळी बदली" : "15-minute SLA replacement on breakdown",
      badge: "बॅकअप हमी"
    }
  ];

  return (
    <div className="slide-content slide-mandate-3 animate-fade-in">
      <div className="slide-header-box">
        <div className="mandate-tag-pill">
          <span className="pill-number">मुद्दा क्र. ३</span>
          <span className="pill-title">वाहन व्यवस्थापन, रूट प्लॅनिंग व जीपीएस मॉनिटरिंग</span>
        </div>
        <h2 className="slide-main-heading">
          {isMr
            ? 'वाहनांची संख्या, क्षमता, मार्ग नियोजन, जीपीएस, इंधन नियंत्रण आणि बॅकअप व्यवस्था'
            : 'Fleet Composition, Capacities, Micro-Routing, GPS Telematics & Contingency'}
        </h2>
        <p className="slide-lead-desc">
          {isMr
            ? 'एकूण ६२+ वाहनांचा सुसज्ज ताफा, AIS-140 GPS ट्रॅकिंग, इंधन सेन्सर आणि १५ मिनिटांत ब्रेकडाऊन बॅकअप.'
            : 'State-of-the-art 62+ vehicle fleet equipped with dual-chambers, AIS-140 GPS, fuel sensors, and 15-minute breakdown swap.'}
        </p>
      </div>

      <div className="slide-two-col-layout">
        {/* Left Column: Fleet Matrix */}
        <div className="layout-col">
          <div className="content-card">
            <div className="card-top-icon">
              <Truck size={22} className="text-green-500" />
              <h3 className="card-h3">
                {isMr ? 'प्रस्तावित वाहन ताफ्याची रचना (Fleet Matrix)' : 'Proposed Fleet Architecture'}
              </h3>
            </div>

            <div className="fleet-cards-grid">
              {fleetTypes.map((f, i) => (
                <div key={i} className="fleet-unit-card">
                  <div className="fleet-unit-top">
                    <span className="fleet-unit-type">{f.type}</span>
                    <span className="fleet-unit-badge">{f.badge}</span>
                  </div>
                  <div className="fleet-unit-count text-orange-400">{f.count}</div>
                  <div className="fleet-unit-cap">
                    <strong>{isMr ? 'क्षमता: ' : 'Capacity: '}</strong>{f.capacity}
                  </div>
                  <p className="fleet-unit-desc">{f.features}</p>
                </div>
              ))}
            </div>

            <div className="fleet-total-strip">
              <span>{isMr ? 'एकूण तैनात वाहने:' : 'Total Active Fleet:'} <strong>६२+ वाहने</strong></span>
              <span>{isMr ? 'दैनिक फेऱ्या:' : 'Daily Trips:'} <strong>२ ते ३ फेऱ्या / वाहन</strong></span>
            </div>

            <div className="refuse-compactor-compliance-note">
              <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
              <span className="text-xs">
                <strong>{isMr ? 'Refuse Compactor शुद्धीपत्रक पूर्तता:' : 'Refuse Compactor Compliance:'}</strong>{' '}
                {isMr
                  ? 'मनपा पत्र क्र. जाशमनपा/2026/478 च्या अनुषंगाने किमान ३ Refuse Compactors चे अधिकृत भाडे करारनामे व आर.सी. बुक प्रती सादर केलेल्या आहेत.'
                  : 'Pursuant to JMC letter 478, valid lease agreements and registration RC books for minimum 3 Refuse Compactors are fully submitted.'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Routing, GPS, Fuel & Maintenance */}
        <div className="layout-col">
          <div className="content-card primary-border">
            <div className="card-top-icon">
              <Navigation size={22} className="text-orange-500" />
              <h3 className="card-h3">
                {isMr ? 'रूट प्लॅनिंग, टेलीमॅटिक्स आणि मेंटेनन्स प्रणाली' : 'Micro-Routing, Telematics & Maintenance SOP'}
              </h3>
            </div>

            <div className="fleet-tech-features-list">
              <div className="tech-feature-item">
                <div className="feature-icon-bubble bg-orange-500/10 text-orange-500">
                  <Navigation size={18} />
                </div>
                <div>
                  <h4 className="tech-feat-title">{isMr ? 'मार्ग नियोजन (GIS Micro-Routing)' : 'GIS Micro-Routing'}</h4>
                  <p className="tech-feat-desc">
                    {isMr
                      ? 'प्रत्येक प्रभागाचा गल्लीबोळानुसार निश्चित बीट प्लॅन. वाहने एकमेकांच्या मार्गावर ओव्हरलॅप होणार नाहीत अशी अचूक मांडणी.'
                      : 'Fixed ward beat maps eliminating redundant overlaps and minimizing fuel dead-mileage.'}
                  </p>
                </div>
              </div>

              <div className="tech-feature-item">
                <div className="feature-icon-bubble bg-green-500/10 text-green-500">
                  <Cpu size={18} />
                </div>
                <div>
                  <h4 className="tech-feat-title">{isMr ? 'AIS-140 GPS व जिओ-फेन्सिंग' : 'AIS-140 GPS & Geofencing'}</h4>
                  <p className="tech-feat-desc">
                    {isMr
                      ? 'प्रत्येक सेकंदाला वाहनाची गती, मार्ग आणि स्थान नोंद. प्रभागाबाहेर गेल्यास तात्काळ कमांड सेंटरला अलार्म.'
                      : 'Live speed, route compliance, and instant audio-visual breach alert upon unauthorized ward deviation.'}
                  </p>
                </div>
              </div>

              <div className="tech-feature-item">
                <div className="feature-icon-bubble bg-blue-500/10 text-blue-500">
                  <Fuel size={18} />
                </div>
                <div>
                  <h4 className="tech-feat-title">{isMr ? 'डिजिटल इंधन मॉनिटरिंग' : 'Digital Fuel Sensors'}</h4>
                  <p className="tech-feat-desc">
                    {isMr
                      ? 'टाकीतील इंधनाची रिअल-टाइम डिजिटल मोजणी; इंधन चोरी व अनावश्यक मायलेज अपव्यय रोखणे.'
                      : 'Ultrasonic fuel tank sensors prevent fuel siphoning and optimize km/litre efficiency.'}
                  </p>
                </div>
              </div>

              <div className="tech-feature-item">
                <div className="feature-icon-bubble bg-red-500/10 text-red-500">
                  <ShieldAlert size={18} />
                </div>
                <div>
                  <h4 className="tech-feat-title">{isMr ? 'ब्रेकडाऊन पर्यायी व्यवस्था (१५ मि. SLA)' : 'Breakdown Protocol (15 Min SLA)'}</h4>
                  <p className="tech-feat-desc">
                    {isMr
                      ? 'डेपोमध्ये ८ राखीव वाहने व मेकॅनिक व्हॅन तैनात. बिघाड झाल्यास १५ मिनिटांत पर्यायी वाहन मार्गावर दाखल.'
                      : '8 buffer vehicles + on-call mobile mechanic van ensure zero route disruption within 15 minutes.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
