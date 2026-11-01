import { Recycle, Megaphone, ShieldBan, Sparkles, Layers, CheckCircle2, AlertOctagon } from 'lucide-react';

export default function Slide6WasteSegregation({ language }) {
  const isMr = language === 'mr';

  const streams = [
    {
      stream: isMr ? "ओला कचरा (Wet Waste)" : "Wet Biodegradable Waste",
      colorTag: "bg-green-600",
      borderTag: "border-green-500",
      items: isMr ? "अन्नाचे उरलेले भाग, भाजीपाल्याचे अवशेष, फळांची साले, खरकटे" : "Kitchen scraps, vegetable peels, leftover food",
      destination: isMr ? "बायो-मिथेनेशन व सेंद्रिय खत प्रकल्प" : "Bio-methanation & Scientific Composting"
    },
    {
      stream: isMr ? "सुका कचरा (Dry Waste)" : "Dry Recyclable Waste",
      colorTag: "bg-blue-600",
      borderTag: "border-blue-500",
      items: isMr ? "प्लॅस्टिक, कागद, पुठ्ठा, काच, धातू, रबर, थर्माकोल" : "Plastics, paper, cardboard, glass, metals, tetra packs",
      destination: isMr ? "साहित्य पुनर्प्राप्ती केंद्र (MRF) व पुनर्प्रक्रिया" : "Material Recovery Facility (MRF) & Recycling"
    },
    {
      stream: isMr ? "घरगुती घातक व सॅनिटरी" : "Domestic Hazardous & Sanitary",
      colorTag: "bg-red-600",
      borderTag: "border-red-500",
      items: isMr ? "सॅनिटरी नॅपकिन्स, डायपर्स, मुदतबाह्य औषधे, बॅटऱ्या" : "Diapers, sanitary pads, expired medicines, paint cans",
      destination: isMr ? "सुरक्षित भस्मीकरण (Incineration / CPCB Norms)" : "Authorized Incineration & Scientific Landfill"
    },
    {
      stream: isMr ? "ई-कचरा (E-Waste)" : "Electronic Waste",
      colorTag: "bg-orange-600",
      borderTag: "border-orange-500",
      items: isMr ? "खराब मोबाइल, चार्जर, वायर, सीएफएल दिवे, इलेक्ट्रॉनिक्स" : "Dead batteries, cables, old electronics, tube lights",
      destination: isMr ? "अधिकृत ई-कचरा रिसायकलर्सकडे सुपूर्द" : "Authorized Maharashtra PCB E-waste Recyclers"
    }
  ];

  const iecInitiatives = [
    {
      title: isMr ? "प्रभागस्तरीय स्वच्छता दूत" : "Ward Swachhata Doots",
      desc: isMr ? "प्रत्येक प्रभागात प्रशिक्षित स्वयंसेवक महिला बचत गट व नागरिकांना ४-डबे वर्गीकरणाचे प्रत्यक्ष प्रात्यक्षिक देतील." : "Dedicated field educators train households & SHGs on four-bin segregation."
    },
    {
      title: isMr ? "पथनाट्य व शाळा जनजागृती" : "Nukkad Natak & School Campaigns",
      desc: isMr ? "गांधी चौक, आठवडी बाजार आणि शाळांमध्ये आकर्षक पथनाट्यांद्वारे वर्गीकरणाचे महत्त्व पटवून देणे." : "Interactive street plays at busy bazaars and eco-club rallies in Jalna schools."
    },
    {
      title: isMr ? "'स्वच्छ सोसायटी' पुरस्कार योजना" : "Green Society Awards",
      desc: isMr ? "१००% वर्गीकरण करणाऱ्या सोसायट्यांना मा. आयुक्त यांच्या हस्ते विशेष गौरव व कर सवलत प्रोत्साहन." : "Recognition awards and property rebate incentives for 100% segregating societies."
    }
  ];

  return (
    <div className="slide-content slide-mandate-5 animate-fade-in">
      <div className="slide-header-box">
        <div className="mandate-tag-pill">
          <span className="pill-number">मुद्दा क्र. ५</span>
          <span className="pill-title">कचरा वर्गीकरण: उगमस्थानी विलगीकरण व जनजागृती</span>
        </div>
        <h2 className="slide-main-heading">
          {isMr
            ? 'उगमस्थानी ४-प्रवाह वर्गीकरण, जनजागृती मोहीम आणि वाहतुकीदरम्यान न मिसळण्याची पूर्ण हमी'
            : '4-Stream Source Segregation, IEC Campaigns & Zero Re-Mixing Safeguards'}
        </h2>
        <p className="slide-lead-desc">
          {isMr
            ? 'ओला, सुका, घातक व ई-कचऱ्याचे काटेकोर वर्गीकरण; वाहनांमध्ये भौतिक पार्टिशन व दंडात्मक नियमावली.'
            : 'Distinct partitioned containment in collection fleet, intensive behavioral IEC, and zero-mixing protocol.'}
        </p>
      </div>

      <div className="slide-two-col-layout">
        {/* Left Column: 4 Waste Streams */}
        <div className="layout-col">
          <div className="content-card primary-border">
            <div className="card-top-icon">
              <Recycle size={22} className="text-green-500" />
              <h3 className="card-h3">
                {isMr ? 'उगमस्थानी ४-प्रवाह वर्गीकरण प्रणाली' : '4-Stream Segregation Framework'}
              </h3>
            </div>

            <div className="streams-vertical-grid">
              {streams.map((s, idx) => (
                <div key={idx} className={`stream-box-item ${s.borderTag}`}>
                  <div className="stream-badge-row">
                    <span className={`stream-color-dot ${s.colorTag}`} />
                    <span className="stream-heading-title font-bold">{s.stream}</span>
                  </div>
                  <div className="stream-items-desc">
                    <strong>{isMr ? 'समाविष्ट घटक: ' : 'Examples: '}</strong>{s.items}
                  </div>
                  <div className="stream-dest-line">
                    <strong>{isMr ? 'अंतिम प्रक्रिया: ' : 'Processing: '}</strong>
                    <span className="text-green-400">{s.destination}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Anti-Mixing Proof & IEC Campaign */}
        <div className="layout-col">
          <div className="content-card">
            {/* Anti Mixing Safeguards */}
            <div className="card-top-icon">
              <ShieldBan size={22} className="text-orange-500" />
              <h3 className="card-h3">
                {isMr ? 'वाहतुकीदरम्यान कचरा एकत्र न मिसळण्याची खात्री' : 'Zero Re-Mixing Fleet Engineering'}
              </h3>
            </div>

            <div className="anti-mixing-callout">
              <div className="callout-bullet">
                <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                <p>
                  <strong>{isMr ? 'भौतिक मेटल पार्टिशन:' : 'Welded Metal Bulkhead:'}</strong>{' '}
                  {isMr
                    ? 'वाहनात ओला (६०%) व सुका (४०%) भाग धातूच्या भक्कम भिंतीने पूर्णतः वेगळा केलेला असतो.'
                    : 'Heavy gauge steel bulkhead permanently separates wet (60%) and dry (40%) sections.'}
                </p>
              </div>
              <div className="callout-bullet">
                <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                <p>
                  <strong>{isMr ? 'स्वतंत्र हायड्रॉलिक अनलोडिंग:' : 'Dual Hydraulic Rams:'}</strong>{' '}
                  {isMr
                    ? 'ओला कचरा कंपोस्ट यार्डात आणि सुका कचरा थेट MRF शेडमध्ये वेगवेगळ्या वेळी अनलोड होतो.'
                    : 'Independent hydraulic dumping valves unload wet at composting and dry at MRF.'}
                </p>
              </div>
              <div className="callout-bullet">
                <AlertOctagon size={16} className="text-orange-500 flex-shrink-0" />
                <p>
                  <strong>{isMr ? 'कर्मचाऱ्यांवर कडक बंधने:' : 'Strict Penal Clause:'}</strong>{' '}
                  {isMr
                    ? 'कचरा एकत्र मिसळल्याचे आढळल्यास चालकावर निलंबन व दंडात्मक कारवाईची कायदेशीर तरतूद.'
                    : 'Instant suspension and heavy financial penalty if staff mingles segregated streams.'}
                </p>
              </div>
            </div>

            {/* IEC Campaign */}
            <div className="iec-sub-section">
              <div className="iec-head">
                <Megaphone size={18} className="text-orange-500" />
                <h4 className="iec-title">{isMr ? 'नागरिकांमध्ये जनजागृती मोहीम (IEC)' : 'Citizen IEC Campaigns'}</h4>
              </div>
              <div className="iec-cards-stack">
                {iecInitiatives.map((iec, i) => (
                  <div key={i} className="iec-chip-row">
                    <strong>{iec.title}:</strong> <span>{iec.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
