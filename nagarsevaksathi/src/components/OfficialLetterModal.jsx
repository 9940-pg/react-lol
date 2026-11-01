import { useState } from 'react';
import { X, FileText, CheckCircle2, Building, Calendar, Clock, MapPin, Download, ShieldCheck, Mail, Phone, Truck, Landmark, BookOpen, ClipboardList } from 'lucide-react';
import { JALNA_MUNICIPAL_DETAILS, BKNSS_COMPANY_DETAILS, PROPOSED_DAILY_SCHEDULE, PROPOSED_MOBILIZATION_PHASES, JMC_EXPECTED_SUPPORT, PRE_PRESENTATION_CHECKLIST, BUDGET_COST_HEADS } from '../data/slidesData';

export default function OfficialLetterModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const [activeTab, setActiveTab] = useState('compliance'); // 'compliance' | 'ongoing' | 'proposal' | 'notice'

  const points = [
    {
      num: 1,
      titleMr: "एजन्सीची प्रोफाइल (माहिती)",
      titleEn: "Agency Profile",
      descMr: "संबंधित अनुभव, सुरू असलेले महानगरपालिका प्रकल्प आणि साध्य झालेले परिणाम."
    },
    {
      num: 2,
      titleMr: "घरोघरी सर्वेक्षण",
      titleEn: "Door-to-Door Survey",
      descMr: "घरे आणि व्यावसायिक प्रतिष्ठानांचे सर्वेक्षण करण्याची पद्धत, प्रभागनिहाय मॅपिंग, कचरा निर्मितीचे मूल्यांकन, डिजिटल डेटा संकलन आणि पडताळणी."
    },
    {
      num: 3,
      titleMr: "वाहन व्यवस्थापन",
      titleEn: "Vehicle Fleet Management",
      descMr: "वाहनांची संख्या, प्रकार आणि क्षमता; मार्ग नियोजन (रूट प्लॅनिंग); फेऱ्यांचे वेळापत्रक; जीपीएस ट्रॅकिंग; इंधन मॉनिटरिंग; देखभाल; आणि वाहन बिघाड झाल्यास पर्यायी व्यवस्था."
    },
    {
      num: 4,
      titleMr: "कचरा संकलन",
      titleEn: "Daily Waste Collection",
      descMr: "दैनिक संकलन व्यवस्था, संकीर्ण गल्ल्या आणि दुर्लक्षित क्षेत्रांचा समावेश, संकलनाची वेळ आणि कचरा संकलन चुकणे टाळण्यासाठी उपाययोजना."
    },
    {
      num: 5,
      titleMr: "कचरा वर्गीकरण",
      titleEn: "Waste Segregation",
      descMr: "उगमस्थानी कचरा वर्गीकरण, विविध कचरा प्रवाहांचे स्वतंत्र संकलन, नागरिकांमध्ये जनजागृती आणि वाहतुकीदरम्यान कचरा एकत्र मिसळू नये म्हणून उपाय."
    },
    {
      num: 6,
      titleMr: "वाहतूक आणि सुपूर्द करणे",
      titleEn: "Transportation & Handover",
      descMr: "ठरवून दिलेल्या प्रक्रिया सुविधा, साहित्य पुनर्प्राप्ती सुविधा (मटेरियल रिकव्हरी फॅसिलिटीज - MRF) आणि विल्हेवाट स्थळावर कचरा पोहोचवणे, ज्याला वजन आणि फेऱ्यांच्या नोंदींचे (वेटमेंट आणि ट्रिप रेकॉर्ड्स) समर्थन असेल."
    },
    {
      num: 7,
      titleMr: "मानवसंसाधन आणि सुरक्षा",
      titleEn: "HR & Labor Safety",
      descMr: "कर्मचारी नियुक्ती, पर्यवेक्षण, उपस्थिती मॉनिटरिंग, प्रशिक्षण, सुरक्षा उपकरणे आणि कामगारांची सुरक्षा."
    },
    {
      num: 8,
      titleMr: "मॉनिटरिंग आणि उत्तरदायित्व",
      titleEn: "Monitoring & Accountability",
      descMr: "दैनिक अहवाल, महानगरपालिकेच्या डॅशबोर्डवर प्रवेश, तक्रार निवारण आणि संकलन कव्हरेज व वर्गीकरणासाठी मोजता येण्याजोगे उद्दिष्टे."
    },
    {
      num: 9,
      titleMr: "अमलबजावणी आणि खर्च",
      titleEn: "Implementation & Budget",
      descMr: "अमलबजावणीची कालमर्यादा (मोबिलायझेशन टाइमलाइन), ऑपरेशन्सच्या गरजा, अंदाजे खर्च आणि महापालिकेकडून अपेक्षित सहाय्य."
    }
  ];

  return (
    <div className="letter-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="letter-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="letter-modal-header">
          <div className="letter-modal-title-group">
            <ShieldCheck size={22} className="text-orange-500" />
            <div>
              <h2 className="letter-header-h2">निविदा दस्तऐवज व अधिकृत पत्रव्यवहार कक्ष</h2>
              <span className="letter-header-sub">
                Tender ID: {JALNA_MUNICIPAL_DETAILS.tenderId} &bull; {BKNSS_COMPANY_DETAILS.shortName}
              </span>
            </div>
          </div>
          <button className="letter-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Document Selection Tabs */}
        <div className="modal-document-tabs">
          <button
            type="button"
            className={`modal-doc-tab ${activeTab === 'compliance' ? 'active' : ''}`}
            onClick={() => setActiveTab('compliance')}
          >
            <CheckCircle2 size={15} />
            <span>१. BKNSS अधिकृत त्रुटीपूर्तता पत्र (Ref: 478)</span>
          </button>
          <button
            type="button"
            className={`modal-doc-tab ${activeTab === 'ongoing' ? 'active' : ''}`}
            onClick={() => setActiveTab('ongoing')}
          >
            <Building size={15} />
            <span>२. सध्या सुरू असलेली कामे (१५ संस्था)</span>
          </button>
          <button
            type="button"
            className={`modal-doc-tab ${activeTab === 'proposal' ? 'active' : ''}`}
            onClick={() => setActiveTab('proposal')}
          >
            <BookOpen size={15} />
            <span>३. संपूर्ण कार्ययोजना व तांत्रिक प्रस्ताव (Full Proposal)</span>
          </button>
          <button
            type="button"
            className={`modal-doc-tab ${activeTab === 'notice' ? 'active' : ''}`}
            onClick={() => setActiveTab('notice')}
          >
            <FileText size={15} />
            <span>४. जालना मनपा नोटीस (जा.क्र. ५०९)</span>
          </button>
        </div>

        <div className="letter-modal-scroll">
          {/* TAB 1: BKNSS OFFICIAL COMPLIANCE & CLARIFICATION LETTER */}
          {activeTab === 'compliance' && (
            <div className="official-letter-sheet bknss-compliance-letter">
              {/* BKNSS Official Letterhead */}
              <div className="bknss-letterhead-box">
                <h1 className="bknss-head-name">{BKNSS_COMPANY_DETAILS.legalNameMr}</h1>
                <div className="bknss-head-en font-mono">{BKNSS_COMPANY_DETAILS.legalNameEn}</div>
                <p className="bknss-head-sub">
                  मुख्य कार्यालय: {BKNSS_COMPANY_DETAILS.registeredAddress}
                </p>
                <p className="bknss-head-contacts font-mono">
                  मो.: ९९२११७१५५५, ९०२२५०३५७० &bull; Email: dineshpgahalod@gmail.com
                </p>
                <div className="bknss-head-rule" />
              </div>

              {/* Addressee & Reference */}
              <div className="sheet-meta-row">
                <div className="meta-left">
                  <p><strong>प्रति,</strong></p>
                  <p><strong>मा. आयुक्त,</strong></p>
                  <p>{JALNA_MUNICIPAL_DETAILS.corporationNameMr}</p>
                </div>
                <div className="meta-right">
                  <div><strong>दिनांक:</strong> २८/१०/२०२६</div>
                  <div><strong>PAN:</strong> <span className="font-mono">{BKNSS_COMPANY_DETAILS.panNumber}</span></div>
                  <div><strong>GSTIN:</strong> <span className="font-mono">{BKNSS_COMPANY_DETAILS.gstin}</span></div>
                </div>
              </div>

              <div className="sheet-subject-box highlight-subject">
                <p>
                  <strong>विषय:</strong> निविदेमध्ये आढळून आलेल्या त्रुटींची पूर्तता करून आवश्यक कागदपत्रे सादर करण्याबाबत.
                </p>
                <p>
                  <strong>संदर्भ:</strong> १. आपले पत्र जा.क्र. जाशमनपा/2026/478, दिनांक 27/10/2026. <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;२. Tender ID No. <code>{JALNA_MUNICIPAL_DETAILS.tenderId}</code>
                </p>
              </div>

              <div className="sheet-body-text">
                <p><strong>महोदय,</strong></p>
                <p>
                  उपरोक्त विषय व संदर्भांन्वये, जालना शहरातील घनकचरा संकलन, ओला व सुका कचरा विलगीकरण, वाहतूक व स्वच्छता विषयक जनजागृती आदी कामांसाठी आमच्या संस्थेने सादर केलेल्या निविदेच्या तांत्रिक कागदपत्रांमध्ये निदर्शनास आणून दिलेल्या त्रुटींच्या अनुषंगाने संबंधित अधिकृत कागदपत्रे व स्पष्टीकरणे या पत्रासोबत सादर करीत आहोत.
                </p>
                <p>आपल्या पत्रातील निरीक्षणांनुसार त्रुटीपूर्ततेसाठी खालील कागदपत्रे जोडली आहेत:</p>

                <div className="compliance-points-detailed">
                  <div className="comp-item">
                    <span className="comp-num">१.</span>
                    <div><strong>जी.एस.टी. भरणा:</strong> सन २०२२–२३ व २०२३–२४ मधील जी.एस.टी. भरणा चलने व संबंधित विवरणपत्रे (GST Returns) जोडली आहेत.</div>
                  </div>
                  <div className="comp-item">
                    <span className="comp-num">२.</span>
                    <div><strong>समान कामाचा अनुभव:</strong> यवतमाळ नगर परिषद येथील कामाचे सक्षम प्राधिकाऱ्याने निर्गमित केलेले अधिकृत अनुभव प्रमाणपत्र (८५ TPD, ५०६ कर्मचारी, ₹१७.८३ कोटी मूल्य) जोडले आहे.</div>
                  </div>
                  <div className="comp-item">
                    <span className="comp-num">३.</span>
                    <div><strong>कामगार विमा (ESIC):</strong> कर्मचारी राज्य विमा महामंडळाचे (ESIC) नोंदणी प्रमाणपत्र (कोड: २३००००५७४३०००१००१) व मासिक भरणा चलनाच्या प्रती संलग्न आहेत.</div>
                  </div>
                  <div className="comp-item highlight-refuse">
                    <span className="comp-num">४.</span>
                    <div>
                      <strong>Refuse Compactor वाहने:</strong> किमान ३ Refuse Compactor बाबत मालकीच्या पुराव्याऐवजी अधिकृत भाडे करारनामे (Lease Agreements) व संबंधित आर.सी. बुकच्या प्रती मागील शुद्धीपत्रकातील अटींनुसार १००% जोडल्या आहेत. कामकाजात कोणताही अडथळा येणार नाही याची खात्री संस्था देते.
                    </div>
                  </div>
                  <div className="comp-item">
                    <span className="comp-num">५.</span>
                    <div><strong>५ वर्षांचे काम:</strong> मागील ५ वर्षांतील पूर्ण झालेली व सध्या सुरू असलेली कामे यांची सक्षम प्राधिकाऱ्याने प्रमाणित केलेली प्रमाणपत्रे जोडली आहेत.</div>
                  </div>
                  <div className="comp-item">
                    <span className="comp-num">६.</span>
                    <div><strong>कार्यादेश:</strong> सध्या सुरू असलेल्या कामांचे संबंधित नगर परिषदांचे कार्यादेश (Work Orders) व संस्थेच्या लेटरहेडवरील स्वाक्षरीयुक्त कामांचा सारांश जोडला आहे.</div>
                  </div>
                  <div className="comp-item">
                    <span className="comp-num">७.</span>
                    <div><strong>सनदी लेखापाल (CA) ऑडिट:</strong> मागील ५ आर्थिक वर्षांचे आयकर परतावे (ITR), पोचपावत्या व सनदी लेखापालांनी (A. K. Chatterjee & Co, UDIN: 26013446FALAES5780) प्रमाणित केलेले वित्तीय विवरणपत्रे (नेट वर्थ ₹६.१२ कोटी, उलाढाल ₹५३.१२+ कोटी) सादर केले आहेत.</div>
                  </div>
                </div>

                <p className="mt-4">
                  तरी, सोबत सादर केलेली कागदपत्रे व स्पष्टीकरणे विचारात घेऊन त्रुटीपूर्तता स्वीकारावी व आमच्या निविदेचा पुढील प्रक्रियेसाठी विचार करावा, ही नम्र विनंती.
                </p>
              </div>

              {/* BKNSS Signature Block */}
              <div className="sheet-signature-block">
                <div className="sign-stamp-badge">
                  <CheckCircle2 size={18} className="text-green-600" />
                  <span>Verified Tender Submission</span>
                </div>
                <div className="sign-signature-text">
                  <div className="sign-post font-bold">आपला विश्वासू,</div>
                  <div className="sign-pen-mark">(दिनेश प्रेमसिंग गहलोत)</div>
                  <div className="sign-post"><strong>अधिकृत स्वाक्षरी व शिक्का</strong></div>
                  <div className="sign-dept">{BKNSS_COMPANY_DETAILS.legalNameMr}</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CURRENT ONGOING WORK ORDERS SUMMARY */}
          {activeTab === 'ongoing' && (
            <div className="official-letter-sheet bknss-work-orders-sheet">
              <div className="bknss-letterhead-box">
                <h1 className="bknss-head-name">{BKNSS_COMPANY_DETAILS.legalNameMr}</h1>
                <p className="bknss-head-sub">सध्या सुरू असलेल्या कामांचा अधिकृत सारांश — घनकचरा संकलन व व्यवस्थापन</p>
                <div className="bknss-head-rule" />
              </div>

              <div className="sheet-subject-box">
                <p><strong>सादर:</strong> मा. आयुक्त, {JALNA_MUNICIPAL_DETAILS.corporationNameMr}</p>
                <p><strong>विषय:</strong> विविध स्थानिक स्वराज्य संस्थांमध्ये सुरू असलेल्या घनकचरा संकलन व व्यवस्थापन कामांचा तपशील.</p>
              </div>

              <div className="ongoing-contracts-table-wrap">
                <table className="ongoing-contracts-table">
                  <thead>
                    <tr>
                      <th>अ.क्र.</th>
                      <th>विभाग / स्थानिक स्वराज्य संस्था</th>
                      <th>कार्यादेश क्र. व दिनांक</th>
                      <th>कामाचे स्वरूप</th>
                      <th>सद्यस्थिती</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BKNSS_COMPANY_DETAILS.ongoingWorkInHand.map((w, idx) => (
                      <tr key={idx}>
                        <td className="text-center font-bold">{idx + 1}</td>
                        <td><strong>{w.client}</strong></td>
                        <td className="font-mono text-orange-400">{w.orderNo}</td>
                        <td>{w.scope}</td>
                        <td><span className="badge-active-work">काम अविरत सुरू आहे</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="jalna-commitment-box mt-4">
                <CheckCircle2 size={18} className="text-orange-500 flex-shrink-0" />
                <p className="text-xs">
                  <strong>घोषणा:</strong> वरील १५ स्थानिक स्वराज्य संस्थांमधील कामांचा तपशील आमच्या संस्थेच्या अभिलेखानुसार १००% सत्य व अचूक असून नमूद केलेली सर्व कामे सद्यस्थितीत प्रत्यक्ष सुरू आहेत. आवश्यकतेनुसार संबंधित सर्व मूळ कार्यादेश तपासणीसाठी उपलब्ध आहेत.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: COMPLETE OFFICIAL OPERATIONAL PLAN & TECHNICAL PROPOSAL */}
          {activeTab === 'proposal' && (
            <div className="official-letter-sheet bknss-proposal-full-sheet">
              <div className="bknss-letterhead-box">
                <h1 className="bknss-head-name">जालना शहर घनकचरा व्यवस्थापन प्रकल्प</h1>
                <div className="bknss-head-en font-mono">BKNSSS – संपूर्ण कार्ययोजना व तांत्रिक प्रस्ताव</div>
                <p className="bknss-head-sub">निविदा क्रमांक: {JALNA_MUNICIPAL_DETAILS.tenderId}</p>
                <p className="bknss-head-contacts">
                  सादरकर्ता: {BKNSS_COMPANY_DETAILS.legalNameMr}
                </p>
                <div className="bknss-head-rule" />
              </div>

              <div className="sheet-subject-box highlight-subject">
                <p><strong>कामाचे स्वरूप:</strong> जालना शहरातील घरे, हॉटेल्स, रेस्टॉरंट्स, दुकाने, व्यावसायिक आस्थापना व इतर ठिकाणांहून कचरा संकलित करणे, ओला-सुका कचरा वेगळा करणे, संकलन केंद्रापर्यंत पोहोचवणे आणि तेथून <strong>समंगाव येथील निर्धारित घनकचरा प्रक्रिया केंद्रापर्यंत</strong> वाहतूक करणे.</p>
                <p className="text-xs text-secondary mt-1"><em>टीप: संस्थेच्या कागदपत्रांत उपलब्ध असलेला अनुभव व माहिती अधिकृतपणे नमूद केली आहे; तर जालना शहरासाठी राबविण्याची कार्यपद्धती ही वास्तववादी प्रस्तावित योजना म्हणून मांडली आहे. खोटी किंवा अवास्तव आकडेवारी न देता खरी वस्तुस्थिती मांडण्यात आली आहे.</em></p>
              </div>

              <div className="proposal-sections-accordion">
                {/* 1. Agency Profile */}
                <div className="prop-sec-card">
                  <h3 className="prop-sec-title">१. एजन्सीची प्रोफाइल (Agency Profile)</h3>
                  <p>संस्थेचे नाव: <strong>{BKNSS_COMPANY_DETAILS.legalNameMr}</strong> (मुख्यालय: प्रभात कॉलनी, शिलांगण रोड, अमरावती)</p>
                  <p>स्थापना: १८ डिसेंबर २००६ (१९+ वर्षे) &bull; Udyam: {BKNSS_COMPANY_DETAILS.udyamRegistration} &bull; PAN: {BKNSS_COMPANY_DETAILS.panNumber} &bull; GSTIN: {BKNSS_COMPANY_DETAILS.gstin}</p>
                  <p>संपर्क: ९९२११७१५५५ &bull; ई-मेल: dineshpgahalod@gmail.com</p>
                  <div className="prop-sub-box mt-2">
                    <strong>संबंधित कामांचा अनुभव:</strong>
                    <ul className="bullet-list-sm mt-1">
                      <li><strong>यवतमाळ नगरपरिषद:</strong> सुमारे ८५ MT/दिवस कचरा वाहतूक, सुमारे ५०६ कर्मचारी, काम पूर्णत्वाचे अधिकृत प्रमाणपत्र.</li>
                      <li><strong>अमरावती महानगरपालिका:</strong> घनकचरा संकलन, वाहतूक, रस्ते व सार्वजनिक ठिकाणांची स्वच्छता, वार्षिक अंदाजित मूल्य सुमारे ₹२१.३८ कोटी.</li>
                      <li><strong>हिंगोली नगरपरिषद:</strong> सफाई कर्मचारी, चालक, मदतनीस, पर्यवेक्षक, MRF व यंत्रसामग्री, मूल्य सुमारे ₹१६.७१ कोटी.</li>
                      <li><strong>पूर्णा नगरपरिषद:</strong> SWM Rules 2016 अंतर्गत कामे, मूल्य सुमारे ₹१.४६ कोटी.</li>
                      <li><strong>हरिद्वार महानगरपालिका (कुंभमेळा २०२१):</strong> कचरा संकलन व वाहतूक (टिपिंग फी ₹८२८/MT ते ₹९२७/MT).</li>
                    </ul>
                  </div>
                </div>

                {/* 2. Door to Door Survey */}
                <div className="prop-sec-card">
                  <h3 className="prop-sec-title">२. घरोघरी सर्वेक्षण (Door-to-Door Survey)</h3>
                  <p>जालना शहरातील सर्व प्रभागांमध्ये प्राथमिक सर्वेक्षण: प्रभागनिहाय विभागणी, मालमत्ता नोंदणी (घरे, दुकाने, हॉटेल्स, कार्यालये, शाळा, रुग्णालये), युनिक Property ID सह डिजिटल GPS डेटा, कचरा निर्मितीचे मूल्यांकन, QR कोड प्रणाली व मनपा मालमत्ता नोंदींशी पडताळणी.</p>
                </div>

                {/* 3. Fleet Management */}
                <div className="prop-sec-card">
                  <h3 className="prop-sec-title">३. वाहन व्यवस्थापन (Vehicle Fleet Management)</h3>
                  <p>घरगुती कचरा संकलन वाहने (टिप्पर), अरुंद गल्ल्यांसाठी लहान वाहने, संकलन केंद्रापासून <strong>समंगाव प्रक्रिया केंद्रापर्यंत</strong> कचरा वाहतूक करणारी मोठी वाहने, ट्रॅक्टर/ट्रॉली व राखीव वाहने.</p>
                  <p className="text-xs text-orange-400 mt-1"><strong>Refuse Compactor वाहने:</strong> किमान ३ Refuse Compactor वाहनांसाठी अधिकृत भाडेकरार व RC Book प्रती शुद्धीपत्रकानुसार सादर.</p>
                </div>

                {/* 4. Daily Waste Collection */}
                <div className="prop-sec-card">
                  <h3 className="prop-sec-title">४. दैनिक कचरा संकलन (Daily Waste Collection)</h3>
                  <p>निश्चित वेळापत्रक: सकाळी ६ ते ७ (हजेरी व तपासणी), सकाळी ७ ते ११ (घरगुती संकलन), सकाळी ११ ते २ (व्यावसायिक, हॉटेल्स व बाजारपेठ), दुपारी २ ते ५ (उर्वरित संकलन व समंगावकडे वाहतूक), सायंकाळी ५ ते ६ (अहवाल व आढावा). पावसाळा, सण, बाजाराच्या दिवसांत विशेष अतिरिक्त फेऱ्या.</p>
                </div>

                {/* 5. Waste Segregation */}
                <div className="prop-sec-card">
                  <h3 className="prop-sec-title">५. कचरा वर्गीकरण (Waste Segregation)</h3>
                  <p>उगमस्थानी किमान २ स्वतंत्र डबे (ओला व सुका), घातक घरगुती कचऱ्याचे स्वतंत्र व्यवस्थापन, वाहनात स्वतंत्र कप्पे, संकलन केंद्रावर स्वतंत्र उतराई आणि शाळा, सोसायट्यांमध्ये जनजागृती (IEC).</p>
                </div>

                {/* 6. Transportation & Handover to Samangaon */}
                <div className="prop-sec-card">
                  <h3 className="prop-sec-title">६. वाहतूक आणि सुपूर्द करणे (Transportation & Handover to Samangaon)</h3>
                  <p>संकलित कचरा थेट <strong>समंगाव येथील निर्धारित घनकचरा प्रक्रिया केंद्रावर</strong> पोहोचविणे. इलेक्ट्रॉनिक वे-ब्रिजवर वजन पावती, वाहन फेरी नोंद आणि <strong>संकलन केंद्र वजन वि. समंगाव वजन यांचा नियमित ताळमेळ (Discrepancy Cross-Check)</strong>.</p>
                </div>

                {/* 7. HR & Labor Safety */}
                <div className="prop-sec-card">
                  <h3 className="prop-sec-title">७. मानवसंसाधन आणि सुरक्षा (HR & Labor Safety)</h3>
                  <p><strong>मुख्य तांत्रिक तज्ज्ञ: श्री. धम्मपाल वामन धवळे</strong> (B.A., Diploma in Sanitary Inspector, १५ वर्षांचा घनकचरा संकलन व वाहतूक क्षेत्रातील प्रदीर्घ अनुभव).</p>
                  <p>प्रकल्प व्यवस्थापक, ऑपरेशन मॅनेजर, प्रभाग पर्यवेक्षक, चालक, मदतनीस, स्वच्छता कर्मचारी, MRF व MIS ऑपरेटर. बायोमेट्रिक हजेरी, पंक्चर-प्रूफ ग्लोव्हज, सेफ्टी बूट, रिफ्लेक्टिव्ह जॅकेट्स, मास्क आणि ESIC/EPF कायदेशीर संरक्षण.</p>
                </div>

                {/* 8. Monitoring & Accountability */}
                <div className="prop-sec-card">
                  <h3 className="prop-sec-title">८. मॉनिटरिंग आणि उत्तरदायित्व (Monitoring & Accountability)</h3>
                  <p>GPS वाहन ट्रॅकिंग, QR कोड स्कॅनिंग, मनपा डॅशबोर्ड थेट ॲक्सेस, व्हॉट्सॲप / मोबाइल तक्रार निवारण कक्ष (२४ तासांत निराकरण लक्ष्य), १००% दैनिक फेरी व वजन नोंदी.</p>
                </div>

                {/* 9. Implementation & Budget */}
                <div className="prop-sec-card">
                  <h3 className="prop-sec-title">९. अंमलबजावणी (७ टप्पे, ३० दिवस) आणि खर्च सूत्र</h3>
                  <p><strong>३० दिवसांचे ७ टप्पे:</strong> दिवस १-३ (तयारी), ४-१० (सर्वेक्षण), ७-१५ (मनुष्यबळ व वाहने), १०-१८ (डिजिटल प्रणाली), १६-२० (प्रशिक्षण व चाचणी), २१-३० (पूर्ण क्षमतेने कामकाज), ३० नंतर (नियमित देखरेख).</p>
                  <p><strong>खर्च सूत्र:</strong> एकूण मासिक खर्च = मनुष्यबळ + वाहन + इंधन + देखभाल + तंत्रज्ञान + इतर खर्च &bull; वार्षिक खर्च = मासिक खर्च × १२ (+ लागू कर). अंतिम किंमत निविदेच्या BOQ नुसार.</p>
                </div>

                {/* 10. End-to-End Operational Workflow */}
                <div className="prop-sec-card">
                  <h3 className="prop-sec-title">१०. प्रकल्पाची एकूण कार्यप्रणाली (End-to-End Operational Workflow)</h3>
                  <p>घरोघरी सर्वेक्षण (QR कोड) &rarr; उगमस्थानी वर्गीकरण &rarr; दैनिक संकलन &rarr; संकलन केंद्रावर उतराई &rarr; समंगाव प्रक्रिया केंद्राकडे वाहतूक &rarr; वजन पावती व सुपूर्दगी &rarr; दैनिक मनपा MIS डॅशबोर्ड सिंक.</p>
                </div>

                {/* 11. Expected Outcomes */}
                <div className="prop-sec-card">
                  <h3 className="prop-sec-title">११. अपेक्षित प्रकल्प परिणाम (Expected Outcomes)</h3>
                  <p>१००% नियमित संकलन, ओला-सुका स्वतंत्र संकलन, कार्यक्षम GPS वाहन व्यवस्थापन, पारदर्शक वजन पावती, बायोमेट्रिक उपस्थिती, वेळेत तक्रार निवारण आणि स्वच्छतेत सर्वोच्च गुणवत्ता.</p>
                </div>

                {/* 12. Conclusion & Commitment */}
                <div className="prop-sec-card">
                  <h3 className="prop-sec-title">१२. निष्कर्ष व संस्थेची बांधिलकी</h3>
                  <p>बी.के.एन.एस.एस. अमरावती जालना शहर महानगरपालिकेच्या मंजूर कार्यक्षेत्रानुसार, निविदेतील अटींनुसार आणि लागू नियमांनुसार १००% गुणवत्तेने काम करण्यास कटिबद्ध आहे.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ORIGINAL JALNA MUNICIPAL CORPORATION PRESENTATION NOTICE */}
          {activeTab === 'notice' && (
            <div className="official-letter-sheet">
              {/* Header / Letterhead */}
              <div className="letter-sheet-top">
                <div className="sheet-emblem">
                  <Building size={32} className="text-orange-600" />
                </div>
                <div className="sheet-gov-titles">
                  <h1 className="sheet-title-main">{JALNA_MUNICIPAL_DETAILS.corporationNameMr}</h1>
                  <p className="sheet-address">{JALNA_MUNICIPAL_DETAILS.address}</p>
                  <p className="sheet-contact-line">
                    Email: <span>{JALNA_MUNICIPAL_DETAILS.email}</span> &bull; Website: <span>{JALNA_MUNICIPAL_DETAILS.website}</span>
                  </p>
                </div>
              </div>

              <div className="letter-sheet-divider" />

              {/* Reference metadata row */}
              <div className="sheet-meta-row">
                <div className="meta-left">
                  <div><strong>विभाग:</strong> स्वच्छता व घनकचरा व्यवस्थापन विभाग</div>
                  <div><strong>जाशमनपा जा क्र.:</strong> ५०९</div>
                </div>
                <div className="meta-right">
                  <div><strong>दिनांक:</strong> {JALNA_MUNICIPAL_DETAILS.letterDate}</div>
                </div>
              </div>

              {/* Addressee */}
              <div className="sheet-recipient">
                <p><strong>प्रति,</strong></p>
                <p className="recipient-name"><strong>{BKNSS_COMPANY_DETAILS.legalNameMr}</strong></p>
                <p>प्रभात कॉलनी, शिलांगण रोड, अमरावती</p>
              </div>

              {/* Subject and Reference */}
              <div className="sheet-subject-box">
                <p><strong>विषय:</strong> निविदेच्या अनुषंगाने सादरीकरण करण्यासाठी मनपा कार्यालयात हजर राहणे बाबत.</p>
                <p><strong>संदर्भ:</strong> Tender ID No. <code>{JALNA_MUNICIPAL_DETAILS.tenderId}</code> अन्वये.</p>
              </div>

              {/* Body */}
              <div className="sheet-body-text">
                <p>
                  उपरोक्त प्रमाणे आपणा कळविण्यात येते की, निविदामध्ये पात्र झालेल्या निविदा धारकांनी
                  <strong> कमीतकमी १०० TPD घनकचरा संकलन</strong> करणे बाबत जालना शहर महानगरपालिका शहरातील
                  डोअर टू डोअर कचरा संकलन, वर्गीकरण आणि घनकचऱ्याची वाहतूक याच्या प्रस्तावित पद्धतीवर
                  सादरीकरण करण्यात यावे. या सादरीकरणामध्ये खालील मुद्द्यांचा समावेश असावा:
                </p>
              </div>

              {/* 9 Mandatory Points Grid */}
              <div className="sheet-points-list">
                {points.map((p) => (
                  <div key={p.num} className="sheet-point-item">
                    <div className="point-number-badge">{p.num}</div>
                    <div className="point-content-text">
                      <div className="point-headline">
                        <span className="point-headline-mr">{p.titleMr}</span>
                        <span className="point-headline-en">({p.titleEn})</span>
                      </div>
                      <p className="point-desc">{p.descMr}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Presentation Instructions */}
              <div className="sheet-additional-notes">
                <p>
                  कृपया जिथे उपलब्ध असेल तिथे संबंधित <strong>छायाचित्रे</strong>,
                  <strong> नमुना सर्वेक्षण नमुने</strong>, <strong>मार्ग नकाशे (रूट मॅप्स)</strong>
                  आणि आपल्या <strong>मॉनिटरिंग सिस्टीमचे संक्षिप्त प्रदर्शन (लाईव्ह डेमो)</strong>
                  सादरीकरणासोबत सादर करावे.
                </p>
              </div>

              {/* Schedule Highlights Box */}
              <div className="sheet-schedule-box">
                <div className="schedule-item">
                  <Clock size={16} className="text-orange-500" />
                  <span><strong>वेळ कालावधी:</strong> सादरीकरण २० मिनिटे | प्रश्नोत्तर सत्र - १० मिनिटे</span>
                </div>
                <div className="schedule-item">
                  <Calendar size={16} className="text-green-600" />
                  <span><strong>दिनांक:</strong> {JALNA_MUNICIPAL_DETAILS.presentationDate} &bull; <strong>वेळ:</strong> {JALNA_MUNICIPAL_DETAILS.presentationTime}</span>
                </div>
                <div className="schedule-item">
                  <MapPin size={16} className="text-orange-500" />
                  <span><strong>स्थळ:</strong> {JALNA_MUNICIPAL_DETAILS.venue}</span>
                </div>
              </div>

              {/* Signature Area */}
              <div className="sheet-signature-block">
                <div className="sign-stamp-badge">
                  <CheckCircle2 size={18} className="text-green-600" />
                  <span>Authorized Signatory</span>
                </div>
                <div className="sign-signature-text">
                  <div className="sign-pen-mark">(अंजली शर्मा) भा.प्र.से.</div>
                  <div className="sign-post"><strong>आयुक्त</strong></div>
                  <div className="sign-dept">जालना शहर महानगरपालिका, जालना</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="letter-modal-footer">
          <span className="footer-notice">
            * निविदेतील सर्व ९ मुद्द्यांची व त्रुटीपूर्ततेची अधिकृत कागदपत्रे या डॅशबोर्डमध्ये जोडलेली आहेत.
          </span>
          <button className="btn-letter-print" onClick={() => window.print()}>
            <Download size={15} />
            <span>Print / Save Document</span>
          </button>
        </div>
      </div>
    </div>
  );
}

