import { Monitor, Smartphone, MessageSquare, Target, CheckCircle2, FileText, Clock, BarChart4 } from 'lucide-react';

export default function Slide9MonitoringAccountability({ language }) {
  const isMr = language === 'mr';

  const kpis = [
    {
      kpi: isMr ? "घरोघरी संकलन कव्हरेज" : "Door-to-Door Coverage",
      target: "१००%",
      timeline: isMr ? "पहिल्या दिवसापासून कायम" : "Day 1 Onward",
      metric: isMr ? "RFID स्कॅनिंग व GPS ट्रॅकिंगद्वारे" : "Verified by RFID scans & GPS trails"
    },
    {
      kpi: isMr ? "उगमस्थानी वर्गीकरण दर" : "Source Segregation Rate",
      target: "९०% ते ९५%",
      timeline: isMr ? "९० दिवसांत साध्य" : "Within 90 Days",
      metric: isMr ? "ओला, सुका, घातक कप्पे तपासणी" : "4-Stream bin audits by supervisors"
    },
    {
      kpi: isMr ? "दैनिक कचरा संकलन व सुपूर्द" : "Daily Waste Delivered",
      target: isMr ? "१५०+ TPD" : "150+ TPD",
      timeline: isMr ? "दैनंदिन हमी" : "Daily Guaranteed",
      metric: isMr ? "संगणकीकृत वे-ब्रिज वजन नोंदी" : "Computerized weighbridge manifests"
    },
    {
      kpi: isMr ? "तक्रार निवारण कालमर्यादा (SLA)" : "Grievance Resolution SLA",
      target: "< २ तास",
      timeline: isMr ? "तातडीची कारवाई" : "Immediate Turnaround",
      metric: isMr ? "'आधी' व 'नंतर' चे जिओ-टॅग्ड फोटो" : "Before-After geo-tagged photo proof"
    }
  ];

  const grievanceChannels = [
    { channel: isMr ? "२४x७ टोल-फ्री हेल्पलाइन" : "24x7 Toll-Free Call Desk", desc: isMr ? "नागरिकांसाठी मोफत हेल्पलाईन क्रमांक, कॉल सेंटर प्रतिनिधी थेट तक्रार नोंदवतील." : "Toll-free IVR & call center agents record citizen issues." },
    { channel: isMr ? "स्वच्छ जालना व्हॉट्सॲप बॉट" : "Swachh Jalna WhatsApp Bot", desc: isMr ? "नागरिक घरबसल्या फोटो व लोकेशन पाठवून तात्काळ तिकीट क्रमांक मिळवू शकतात." : "Automated chatbot receives photo & auto-fetches location pin." },
    { channel: isMr ? "मनपा सिटिझन ॲप सिंक" : "JMC Citizen Mobile App", desc: isMr ? "मनपाच्या मुख्य ॲपशी API इंटिग्रेशन; आयुक्तांच्या डॅशबोर्डवर थेट तक्रार स्थिती." : "Bi-directional API sync with Jalna Municipal Corporation citizen app." }
  ];

  return (
    <div className="slide-content slide-mandate-8 animate-fade-in">
      <div className="slide-header-box">
        <div className="mandate-tag-pill">
          <span className="pill-number">मुद्दा क्र. ८</span>
          <span className="pill-title">मॉनिटरिंग, उत्तरदायित्व व तक्रार निवारण</span>
        </div>
        <h2 className="slide-main-heading">
          {isMr
            ? 'दैनिक अहवाल, मनपा डॅशबोर्ड प्रवेश, २ तासांत तक्रार निवारण आणि मोजता येण्याजोगे उद्दिष्टे'
            : 'Daily MIS Reports, JMC Admin Dashboard Sync, 2-Hour SLA & Measurable KPIs'}
        </h2>
        <p className="slide-lead-desc">
          {isMr
            ? 'प्रशासकीय अधिकाऱ्यांसाठी पारदर्शक वेब डॅशबोर्ड, व्हॉट्सॲप तक्रार बॉट आणि १००% उत्तरदायित्वाचे KPIs.'
            : 'Real-time cloud monitoring for municipal executives, automated daily MIS, and SLA-bound citizen redressal.'}
        </p>
      </div>

      <div className="slide-two-col-layout">
        {/* Left Column: JMC Dashboard & Reports */}
        <div className="layout-col">
          <div className="content-card primary-border">
            <div className="card-top-icon">
              <Monitor size={22} className="text-green-500" />
              <h3 className="card-h3">
                {isMr ? 'मनपा अधिकाऱ्यांसाठी रिअल-टाइम वेब डॅशबोर्ड' : 'JMC Executive Command Dashboard'}
              </h3>
            </div>

            <p className="card-body-text">
              {isMr
                ? 'मा. आयुक्त, उपायुक्त व आरोग्य निरीक्षकांना विशेष ॲडमिन क्रेडेंशियल्स दिले जातील, ज्याद्वारे खालील माहिती थेट दिसेल:'
                : 'Dedicated role-based credentials for Municipal Commissioner & Ward Officers providing real-time visibility:'}
            </p>

            <div className="dashboard-feature-grid">
              <div className="dash-feat-card">
                <span className="dash-feat-title font-bold text-orange-400">
                  {isMr ? 'लाईव्ह वाहन नकाशा' : 'Live Fleet GIS Map'}
                </span>
                <p className="dash-feat-p">प्रत्येक वाहनाचे अचूक स्थान, गती आणि मार्ग पूर्णता टक्केवारी.</p>
              </div>
              <div className="dash-feat-card">
                <span className="dash-feat-title font-bold text-green-400">
                  {isMr ? 'वजन काटा थेट फीड' : 'Live Weighment Stream'}
                </span>
                <p className="dash-feat-p">MRF व डम्पिंगवर आज दाखल झालेल्या कचऱ्याचे एकूण टनेज (TPD).</p>
              </div>
              <div className="dash-feat-card">
                <span className="dash-feat-title font-bold text-white">
                  {isMr ? 'कचरा चुकलेली घरे' : 'Uncollected Houses Alert'}
                </span>
                <p className="dash-feat-p">दुपारी ११:३० पर्यंत संकलन न झालेली घरे नकाशावर लाल चिन्हांकित.</p>
              </div>
              <div className="dash-feat-card">
                <span className="dash-feat-title font-bold text-orange-400">
                  {isMr ? 'स्वयंचलित दैनिक MIS' : 'Automated Daily MIS'}
                </span>
                <p className="dash-feat-p">दररोज संध्याकाळी ०४:०० वाजता मनपा अधिकाऱ्यांना ईमेल व व्हॉट्सॲप अहवाल.</p>
              </div>
            </div>

            {/* Grievance Channels */}
            <div className="grievance-channels-box">
              <h4 className="grievance-title">
                <MessageSquare size={16} className="text-orange-400" />
                <span>{isMr ? 'त्रिस्तरीय तक्रार निवारण यंत्रणा (२ तास SLA):' : 'Citizen Grievance Channels (2-Hr SLA):'}</span>
              </h4>
              <div className="grievance-list">
                {grievanceChannels.map((g, i) => (
                  <div key={i} className="grievance-item">
                    <strong>{g.channel}:</strong> <span>{g.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Measurable KPIs & Targets */}
        <div className="layout-col">
          <div className="content-card">
            <div className="card-top-icon">
              <Target size={22} className="text-orange-500" />
              <h3 className="card-h3">
                {isMr ? 'मोजता येण्याजोगे मुख्य उद्दिष्टे (Measurable KPIs)' : 'Measurable Targets & SLA Standards'}
              </h3>
            </div>

            <div className="kpi-table-stack">
              {kpis.map((k, idx) => (
                <div key={idx} className="kpi-card-row">
                  <div className="kpi-head">
                    <span className="kpi-title font-bold">{k.kpi}</span>
                    <span className="kpi-target-badge text-green-400">{k.target}</span>
                  </div>
                  <div className="kpi-meta-row">
                    <span className="kpi-time">
                      <Clock size={13} className="inline-icon text-orange-400" /> {k.timeline}
                    </span>
                    <span className="kpi-metric text-secondary">{k.metric}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality Commitment Box */}
            <div className="quality-commitment-banner">
              <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-white">
                  {isMr ? 'जालना मनपा स्वच्छ सर्वेक्षण ध्येय:' : 'Swachh Survekshan Benchmark:'}
                </h5>
                <p className="text-sm text-secondary">
                  {isMr
                    ? 'या उद्दिष्टांच्या पूर्ततेमुळे जालना शहर महानगरपालिकेला स्वच्छ सर्वेक्षणात टॉप ५ स्टार गार्बेज फ्री सिटी (GFC) आणि ODF++ चा सर्वोच्च सन्मान मिळवून देणे हा आमचा प्राथमिक संकल्प आहे.'
                    : 'Targeting a 5-Star Garbage Free City rating and leading national ranks for Jalna in Swachh Survekshan.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
