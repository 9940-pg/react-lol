import { useState } from 'react';
import { Award, CheckCircle, TrendingUp, ShieldCheck, MapPin, Building, Users, FileCheck2, Landmark, Briefcase } from 'lucide-react';
import { BKNSS_COMPANY_DETAILS } from '../../data/slidesData';

export default function Slide2AgencyProfile({ language }) {
  const isMr = language === 'mr';
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' | 'workInHand' | 'financials'

  return (
    <div className="slide-content slide-mandate-1 animate-fade-in">
      {/* Slide Header */}
      <div className="slide-header-box">
        <div className="mandate-tag-pill">
          <span className="pill-number">मुद्दा क्र. १</span>
          <span className="pill-title">{isMr ? 'एजन्सी प्रोफाइल, अनुभव आणि साध्य झालेले निकाल' : 'Agency Profile & Track Record'}</span>
        </div>
        <h2 className="slide-main-heading">
          {isMr
            ? 'बी.के.एन.एस.एस. अमरावती — अधिकृत प्रोफाइल, शासकीय अनुभव आणि सिद्ध यश'
            : 'B.K.N.S.S. Amravati — Official Profile, Certified Track Record & Outcomes'}
        </h2>
        <p className="slide-lead-desc">
          {isMr
            ? `${BKNSS_COMPANY_DETAILS.legalNameMr} (संक्षिप्त नाव: ${BKNSS_COMPANY_DETAILS.shortName}) — १८/१२/२००६ पासून महाराष्ट्र व देशभरात घनकचरा व्यवस्थापन व नागरी स्वच्छता क्षेत्रात कार्यरत.`
            : `${BKNSS_COMPANY_DETAILS.legalNameEn} — Operating continuously since 18/12/2006 across Municipal Corporations and Councils with certified excellence.`}
        </p>
      </div>

      <div className="slide-two-col-layout">
        {/* Left Column: Organization, Statutory Registrations & Financial Quad */}
        <div className="layout-col">
          <div className="content-card primary-border">
            <div className="card-top-icon">
              <Award size={22} className="text-orange-500" />
              <h3 className="card-h3">
                {isMr ? 'अधिकृत संस्था परिचय व वैधानिक नोंदण्या' : 'Statutory Profile & Official Credentials'}
              </h3>
            </div>

            {/* Legal Entity Identity Callout */}
            <div className="entity-legal-box">
              <div className="entity-legal-title">
                <strong>{isMr ? BKNSS_COMPANY_DETAILS.legalNameMr : BKNSS_COMPANY_DETAILS.legalNameEn}</strong>
              </div>
              <div className="entity-meta-grid">
                <div>
                  <span className="meta-k">{isMr ? 'स्थापना / नोंदणी:' : 'Registration:'}</span>{' '}
                  <span className="meta-v font-mono font-bold text-green-400">{BKNSS_COMPANY_DETAILS.incorporationDate} (१९+ वर्षे)</span>
                </div>
                <div>
                  <span className="meta-k">{isMr ? 'उद्यम नोंदणी:' : 'Udyam Reg:'}</span>{' '}
                  <span className="meta-v font-mono font-bold text-orange-400">{BKNSS_COMPANY_DETAILS.udyamRegistration}</span>
                </div>
                <div>
                  <span className="meta-k">PAN No:</span>{' '}
                  <span className="meta-v font-mono font-bold">{BKNSS_COMPANY_DETAILS.panNumber}</span>
                </div>
                <div>
                  <span className="meta-k">GSTIN:</span>{' '}
                  <span className="meta-v font-mono font-bold text-green-400">{BKNSS_COMPANY_DETAILS.gstin}</span>
                </div>
                <div>
                  <span className="meta-k">ESIC Code:</span>{' '}
                  <span className="meta-v font-mono">{BKNSS_COMPANY_DETAILS.esicCode}</span>
                </div>
                <div>
                  <span className="meta-k">{isMr ? 'मुख्य बँक:' : 'Banker:'}</span>{' '}
                  <span className="meta-v">{BKNSS_COMPANY_DETAILS.bankName} (IFSC: {BKNSS_COMPANY_DETAILS.ifscCode})</span>
                </div>
              </div>
            </div>

            {/* Financial Credentials Quad Grid */}
            <div className="metrics-quad-grid">
              <div className="quad-item">
                <div className="quad-val text-green-400">₹६.१२ कोटी</div>
                <div className="quad-lbl">{isMr ? 'CA प्रमाणित नेट वर्थ (2024-25)' : 'Certified Net Worth'}</div>
              </div>
              <div className="quad-item">
                <div className="quad-val text-orange-400">₹५३.१२+ कोटी</div>
                <div className="quad-lbl">{isMr ? '३ वर्षांची एकत्रित उलाढाल' : '3-Yr Audited Turnover'}</div>
              </div>
              <div className="quad-item">
                <div className="quad-val text-white">₹१७.७ कोटी/वर्ष</div>
                <div className="quad-lbl">{isMr ? 'सरासरी वार्षिक उलाढाल' : 'Avg Annual Turnover'}</div>
              </div>
              <div className="quad-item">
                <div className="quad-val text-green-400">१९+ वर्षे</div>
                <div className="quad-lbl">{isMr ? 'अविरत सेवा अनुभव' : 'Years Experience'}</div>
              </div>
            </div>

            {/* CA Verification Note */}
            <div className="ca-verify-strip">
              <Landmark size={14} className="text-orange-500 flex-shrink-0" />
              <span className="text-secondary text-xs">
                <strong>{isMr ? 'सनदी लेखापाल (CA):' : 'Auditor:'}</strong> {BKNSS_COMPANY_DETAILS.caFirm} &bull; {BKNSS_COMPANY_DETAILS.caDetails}
              </span>
            </div>

            {/* Key Office & Contact */}
            <div className="agency-contact-strip">
              <MapPin size={14} className="text-green-500 flex-shrink-0" />
              <span className="text-secondary text-xs">
                <strong>{isMr ? 'मुख्य कार्यालय:' : 'Reg. Office:'}</strong> {BKNSS_COMPANY_DETAILS.registeredAddress}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Municipal Projects, Active Work In Hand & Benchmarks */}
        <div className="layout-col">
          <div className="content-card">
            {/* Top Interactive Tabs */}
            <div className="profile-sub-tabs-bar">
              <button
                type="button"
                className={`prof-tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
                onClick={() => setActiveTab('projects')}
              >
                <Building size={15} />
                <span>{isMr ? 'मोठे पूर्ण प्रकल्प (Past Track Record)' : 'Major Past Projects'}</span>
              </button>
              <button
                type="button"
                className={`prof-tab-btn ${activeTab === 'workInHand' ? 'active' : ''}`}
                onClick={() => setActiveTab('workInHand')}
              >
                <Briefcase size={15} />
                <span>{isMr ? 'सध्या सुरू असलेली कामे (Work in Hand - १५ संस्था)' : 'Work in Hand (15 ULBs)'}</span>
              </button>
            </div>

            {/* Tab 1: Major Past Projects with Certified Figures */}
            {activeTab === 'projects' && (
              <div className="projects-vertical-timeline">
                {BKNSS_COMPANY_DETAILS.majorPastProjects.map((proj, idx) => (
                  <div key={idx} className="project-card-item">
                    <div className="proj-head">
                      <div className="proj-title-group">
                        <MapPin size={16} className="text-orange-500" />
                        <strong className="proj-city">{proj.client}</strong>
                      </div>
                      <span className="proj-status-badge">{proj.status}</span>
                    </div>
                    <div className="proj-scope">{isMr ? proj.scope : proj.scopeEn}</div>
                    <div className="proj-meta-row">
                      <span className="proj-val-tag">
                        <strong>{isMr ? 'प्रकल्प मूल्य: ' : 'Value: '}</strong>{proj.value}
                      </span>
                      {proj.capacityTPD && (
                        <span className="proj-tpd-tag">
                          <strong>{isMr ? 'क्षमता: ' : 'Capacity: '}</strong>{proj.capacityTPD}
                        </span>
                      )}
                      {proj.manpower && (
                        <span className="proj-mp-tag">
                          <strong>{isMr ? 'मनुष्यबळ: ' : 'Manpower: '}</strong>{proj.manpower}
                        </span>
                      )}
                    </div>
                    {proj.certRef && (
                      <div className="proj-cert-ref">
                        <FileCheck2 size={13} className="text-green-400 inline-icon" />
                        <span><strong>{isMr ? 'प्रमाणपत्र संदर्भ: ' : 'Ref: '}</strong>{proj.certRef}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Currently Ongoing Work in Hand across Maharashtra */}
            {activeTab === 'workInHand' && (
              <div className="work-in-hand-list">
                <div className="work-hand-banner">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>
                    {isMr
                      ? 'संस्थेच्या अधिकृत Work-in-Hand यादीतील १५ स्थानिक स्वराज्य संस्था (कार्यादेश पडताळणीसह):'
                      : 'Active solid waste contracts across 15 Maharashtra ULBs (with Work Orders):'}
                  </span>
                </div>
                {BKNSS_COMPANY_DETAILS.ongoingWorkInHand.map((w, idx) => (
                  <div key={idx} className="work-hand-item">
                    <div className="work-hand-num">{idx + 1}</div>
                    <div className="work-hand-details">
                      <div className="work-hand-client font-bold">{w.client}</div>
                      <div className="work-hand-order text-orange-400 font-mono text-xs">{w.orderNo}</div>
                      <div className="work-hand-scope text-secondary text-xs">{w.scope}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Jalna Municipal Corporation Direct Commitment */}
            <div className="jalna-commitment-box">
              <CheckCircle size={18} className="text-orange-500 flex-shrink-0" />
              <p>
                <strong>{isMr ? 'जालना शहर महानगरपालिकेसाठी वचनबद्धता:' : 'Commitment to Jalna:'}</strong>{' '}
                {isMr
                  ? 'यवतमाळ (८५ TPD), हिंगोली (२०८ कर्मचारी) आणि अमरावती येथील यशस्वी प्रत्यक्ष अनुभवाच्या बळावर जालना शहरात १०० TPD संकलन व वाहतूक पहिल्याच दिवसापासून १००% तंतोतंत राबवली जाईल.'
                  : 'Leveraging verified execution strength from Yavatmal (85 TPD), Hingoli (208 staff), and Amravati to guarantee 100% precision for Jalna’s 100 TPD SWM mandate.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

