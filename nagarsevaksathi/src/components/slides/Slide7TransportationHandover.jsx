import { ArrowUpRight, Scale, Factory, FileSpreadsheet, CheckCircle2, Truck, RefreshCw, BarChart } from 'lucide-react';

export default function Slide7TransportationHandover({ language }) {
  const isMr = language === 'mr';

  const facilities = [
    {
      name: isMr ? "साहित्य पुनर्प्राप्ती केंद्र (MRF Facility)" : "Material Recovery Facility (MRF)",
      stream: isMr ? "सुका पुनर्वापरयोग्य कचरा (३५-४० TPD)" : "Dry Recyclable Waste (35-40 TPD)",
      process: isMr ? "कन्व्हेयर बेल्ट, मॅग्नेटिक सेपरेटर, मॅन्युअल सॉर्टिंग व हायड्रॉलिक बेलिंग" : "Conveyor sorting lines, magnetic extractors & hydraulic balers",
      output: isMr ? "प्लॅस्टिक, पुठ्ठा, काच रिसायकलर्सकडे व सिमेंट भट्टीसाठी RDF" : "Baled paper, PET, cardboard to recyclers; MLP to RDF cement kilns"
    },
    {
      name: isMr ? "सेंद्रिय खत व बायो-मिथेनेशन प्रकल्प" : "Wet Waste Composting & Bio-Gas",
      stream: isMr ? "ओला विघटनशील कचरा (५५-६० TPD)" : "Wet Biodegradable Waste (55-60 TPD)",
      process: isMr ? "एरोबिक विंड्रो कंपोस्टिंग, बॅक्टेरियल कल्चर व स्लरी प्रक्रिया" : "Aerobic windrow composting & bio-methanation",
      output: isMr ? "उच्च प्रतीचे सेंद्रिय खत (सिटी कंपोस्ट) व बायोगॅस ऊर्जा निर्मिती" : "Enriched organic compost & bio-gas fuel"
    },
    {
      name: isMr ? "शास्त्रीय विल्हेवाट स्थळ (Scientific Landfill)" : "Scientific Landfill & Inert Disposal",
      stream: isMr ? "निष्क्रिय कचरा, माती व अवशिष्ट (१० TPD)" : "Inert Silt & Non-recyclable Residue (10 TPD)",
      process: isMr ? "काटेकोर कॉम्पॅक्शन, लीचेट ट्रीटमेंट व मातीचा थर देणे" : "Strict compaction, leachate control & soil cover",
      output: isMr ? "पर्यावरणपूरक डम्पिंग, शून्य धूर व शून्य भूजल प्रदूषण" : "CPCB-compliant closure, zero surface runoff contamination"
    }
  ];

  const weighbridgeData = [
    { param: isMr ? "वजन काटा तंत्रज्ञान" : "Weighbridge Tech", val: "Digitally Calibrated 60 MT Load-Cell Electronic Bridge" },
    { param: isMr ? "वाहन ओळख प्रणाली" : "Vehicle ID Tag", val: "RFID Windshield FastTag Reader (Auto-Authentication)" },
    { param: isMr ? "डेटा नोंदी (Capture)" : "Recorded Metrics", val: "Gross Wt, Tare Wt, Net Tonnage, Ward No, Time-stamp" },
    { param: isMr ? "मनपा सर्व्हर सिंक" : "JMC Server Sync", val: "Instant Cloud API Sync — Zero Manual Tampering" }
  ];

  return (
    <div className="slide-content slide-mandate-6 animate-fade-in">
      <div className="slide-header-box">
        <div className="mandate-tag-pill">
          <span className="pill-number">मुद्दा क्र. ६</span>
          <span className="pill-title">वाहतूक आणि सुपूर्द करणे: MRF व वजन नोंदी</span>
        </div>
        <h2 className="slide-main-heading">
          {isMr
            ? 'प्रक्रिया सुविधा, MRF केंद्रावर सुपूर्द करणे आणि कॉम्प्युटराइज्ड वेटमेंट व ट्रिप नोंदी'
            : 'Delivery to Processing Facilities, MRF Operations & Computerized Weighment Slips'}
        </h2>
        <p className="slide-lead-desc">
          {isMr
            ? 'ओल्या कचऱ्यापासून खत, सुक्या कचऱ्याचे MRF वर वर्गीकरण आणि १००% डिजिटल वजन नोंदींचा पारदर्शक पुरावा.'
            : 'Scientific handover to MRF & composting yards backed by tamper-proof RFID weighbridge manifests.'}
        </p>
      </div>

      <div className="slide-two-col-layout">
        {/* Left Column: Processing Facilities & MRF */}
        <div className="layout-col">
          <div className="content-card primary-border">
            <div className="card-top-icon">
              <Factory size={22} className="text-green-500" />
              <h3 className="card-h3">
                {isMr ? 'समंगाव येथील निर्धारित घनकचरा प्रक्रिया केंद्र व MRF' : 'Samangaon Processing Facility & MRF'}
              </h3>
            </div>

            <div className="facilities-stack">
              {facilities.map((fac, idx) => (
                <div key={idx} className="fac-card-item">
                  <div className="fac-head">
                    <span className="fac-name font-bold">{fac.name}</span>
                    <span className="fac-stream-tag">{fac.stream}</span>
                  </div>
                  <p className="fac-process">
                    <strong>{isMr ? 'प्रक्रिया पद्धत: ' : 'Process: '}</strong>{fac.process}
                  </p>
                  <p className="fac-output text-green-400">
                    <strong>{isMr ? 'उत्पादित घटक: ' : 'Recovered Output: '}</strong>{fac.output}
                  </p>
                </div>
              ))}
            </div>

            {/* Reconciliation Control Banner */}
            <div className="weigh-reconcile-banner">
              <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
              <span className="text-xs text-secondary">
                <strong>{isMr ? 'महत्त्वाचे वजन नियंत्रण:' : 'Reconciliation Control:'}</strong>{' '}
                {isMr
                  ? 'संकलन केंद्रावरून निघालेल्या कचऱ्याचे वजन व समंगाव प्रक्रिया केंद्रावर स्वीकारलेल्या कचऱ्याचे वजन यांची नियमित तुलना केली जाईल. वजनातील फरक आढळल्यास तातडीने तपासणी होईल.'
                  : 'Zero discrepancy control: Continuous computerized cross-check between transfer station dispatch weight and Samangaon receipt weight.'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Weighbridge & Trip Records */}
        <div className="layout-col">
          <div className="content-card">
            <div className="card-top-icon">
              <Scale size={22} className="text-orange-500" />
              <h3 className="card-h3">
                {isMr ? 'डिजिटल वे-ब्रिज व ट्रिप रेकॉर्ड्स (Weighment Slips)' : 'Automated Weighment & Digital Slips'}
              </h3>
            </div>

            <p className="card-body-text">
              {isMr
                ? 'प्रत्येक वाहनाची मनपाच्या वजन काट्यावर स्वयंचलित नोंद घेतली जाईल. मानवी हस्तक्षेपाशिवाय वजन पावती तयार होते:'
                : 'Vehicles pass over calibrated weighbridge where RFID tags trigger automated gross, tare, and net tonnage logging:'}
            </p>

            <div className="weigh-specs-table">
              {weighbridgeData.map((w, i) => (
                <div key={i} className="weigh-spec-row">
                  <span className="spec-lbl">{w.param}:</span>
                  <span className="spec-val font-mono">{w.val}</span>
                </div>
              ))}
            </div>

            {/* Sample Digital Slip Preview Card */}
            <div className="sample-slip-box">
              <div className="slip-top">
                <span className="slip-brand font-bold">{isMr ? 'जालना मनपा अधिकृत वजन पावती (नमुना)' : 'Official JMC Weighment Slip (Sample)'}</span>
                <span className="slip-id font-mono">SLIP #JMC-2026-0982</span>
              </div>
              <div className="slip-grid">
                <div><span>वाहन क्र:</span> <strong>MH-21-BH-4512</strong></div>
                <div><span>प्रभाग:</span> <strong>प्रभाग क्र. १२ (जुना जालना)</strong></div>
                <div><span>गंतव्य:</span> <strong className="text-orange-400">समंगाव प्रक्रिया केंद्र</strong></div>
                <div><span>कचरा प्रकार:</span> <strong className="text-green-400">सुका कचरा (MRF)</strong></div>
                <div><span>एकूण वजन:</span> <strong>४,२५० किलो (Gross)</strong></div>
                <div><span>वाहन वजन:</span> <strong>२,१०० किलो (Tare)</strong></div>
                <div><span>निव्वळ वजन:</span> <strong className="text-orange-400">२,१५० किलो (Net 2.15 MT)</strong></div>
              </div>
              <div className="slip-footer font-mono">
                TIMESTAMP: 02/11/2026 11:42:18 AM | LOCATION: समंगाव वे-ब्रिज | RFID: AUTO-04
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
