import { useState } from 'react';
import { Calendar, DollarSign, HelpCircle, CheckCircle, Clock, Truck, ShieldAlert, Zap, Calculator, CheckCircle2 } from 'lucide-react';
import { PROPOSED_MOBILIZATION_PHASES, BUDGET_COST_HEADS, JMC_EXPECTED_SUPPORT } from '../../data/slidesData';

export default function Slide10MobilizationBudget({ language }) {
  const isMr = language === 'mr';
  const [activeTab, setActiveTab] = useState('budget'); // 'budget' | 'jmcSupport'

  return (
    <div className="slide-content slide-mandate-9 animate-fade-in">
      <div className="slide-header-box">
        <div className="mandate-tag-pill">
          <span className="pill-number">मुद्दा क्र. ९</span>
          <span className="pill-title">अमलबजावणी कालमर्यादा, खर्च व मनपा सहकार्य</span>
        </div>
        <h2 className="slide-main-heading">
          {isMr
            ? '३० दिवसांची मोबिलायझेशन टाइमलाइन (७ टप्पे), ऑपरेशन्स खर्च रचना व मनपा सहकार्य'
            : '30-Day 7-Phase Mobilization Roadmap, OPEX Cost Architecture & JMC Support'}
        </h2>
        <p className="slide-lead-desc">
          {isMr
            ? 'कार्यादेशानंतर ३० दिवसांत १००% कामकाज, पारदर्शक खर्च गणनेचे सूत्र आणि जालना महापालिकेकडून अपेक्षित सहकार्य.'
            : 'Strict 7-phase 30-day mobilization roadmap, transparent costing framework without fictitious inflation, and municipal enablers.'}
        </p>
      </div>

      <div className="slide-two-col-layout">
        {/* Left Column: 7-Phase 30-Day Timeline */}
        <div className="layout-col">
          <div className="content-card primary-border">
            <div className="card-top-icon">
              <Calendar size={22} className="text-orange-500" />
              <h3 className="card-h3">
                {isMr ? '३० दिवसांची मोबिलायझेशन योजना (७ टप्पे)' : '30-Day Fast-Track Mobilization (7 Phases)'}
              </h3>
            </div>

            <div className="timeline-gantt-stack">
              {PROPOSED_MOBILIZATION_PHASES.map((p, idx) => (
                <div key={idx} className="gantt-phase-item">
                  <div className="gantt-phase-tag font-mono text-orange-400 font-bold">
                    {p.phase} &bull; {p.days}
                  </div>
                  <h4 className="gantt-phase-title text-white">{p.titleMr}</h4>
                  <p className="gantt-phase-desc text-secondary text-xs">{p.descMr}</p>
                </div>
              ))}
            </div>

            <div className="gantt-summary-banner">
              <Clock size={16} className="text-green-400" />
              <span>
                <strong>{isMr ? 'अधिकृत कालमर्यादा:' : 'Commitment:'}</strong>{' '}
                {isMr
                  ? '३० व्या दिवशी संपूर्ण जालना शहरात नियमित संकलन व समंगाव प्रक्रिया केंद्राकडे वाहतूक १००% क्षमतेने सुरू.'
                  : '100% full-scale operational rollout and haulage to Samangaon on Day 30 without delay.'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Cost Architecture & Expected JMC Support Tabs */}
        <div className="layout-col">
          <div className="content-card">
            {/* Top Interactive Sub-tabs */}
            <div className="profile-sub-tabs-bar">
              <button
                type="button"
                className={`prof-tab-btn ${activeTab === 'budget' ? 'active' : ''}`}
                onClick={() => setActiveTab('budget')}
              >
                <Calculator size={15} />
                <span>{isMr ? 'खर्च शीर्षके व गणना सूत्र' : 'Cost Heads & Formula'}</span>
              </button>
              <button
                type="button"
                className={`prof-tab-btn ${activeTab === 'jmcSupport' ? 'active' : ''}`}
                onClick={() => setActiveTab('jmcSupport')}
              >
                <HelpCircle size={15} />
                <span>{isMr ? 'मनपाकडून अपेक्षित सहाय्य (१० बाबी)' : 'Required JMC Support (10)'}</span>
              </button>
            </div>

            {/* TAB 1: Cost Formula & Heads */}
            {activeTab === 'budget' && (
              <div className="budget-model-panel">
                <div className="cost-formula-card">
                  <div className="formula-title font-bold text-orange-400">
                    {isMr ? 'खर्च मोजण्याचे अधिकृत सूत्र (Cost Formula):' : 'Standard Cost Estimation Formula:'}
                  </div>
                  <div className="formula-box font-mono text-xs">
                    <div><strong>एकूण मासिक खर्च</strong> = मनुष्यबळ + वाहन + इंधन + देखभाल + तंत्रज्ञान + इतर खर्च</div>
                    <div><strong>वार्षिक खर्च</strong> = मासिक खर्च × १२ (+ लागू GST व कर)</div>
                  </div>
                  <div className="formula-note text-secondary text-xs mt-2">
                    {isMr
                      ? '⚠️ महत्त्वाची नोंद: निविदेचा BOQ आणि मंजूर दर उपलब्ध नसताना कोणतीही खोटी किंवा फुगवलेली आकडेवारी न देता खर्चाची शीर्षके व गणनेची पद्धत दिली आहे; अंतिम आर्थिक प्रस्ताव BOQ नुसार राहील.'
                      : 'Note: In compliance with tender integrity, cost heads and formula are presented without unverified figures pending official BOQ rates.'}
                  </div>
                </div>

                <div className="budget-heads-grid mt-3">
                  {BUDGET_COST_HEADS.map((bh, i) => (
                    <div key={i} className="budget-head-chip">
                      <strong className="text-white text-xs">{bh.head}:</strong>{' '}
                      <span className="text-secondary text-xs">{bh.items}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: Expected JMC Support (10 Items) */}
            {activeTab === 'jmcSupport' && (
              <div className="jmc-support-panel">
                <div className="support-banner">
                  <CheckCircle2 size={16} className="text-green-400" />
                  <span className="text-xs text-white font-bold">
                    {isMr ? 'प्रकल्प सुरळीत चालण्यासाठी जालना मनपाचे पूरक सहकार्य:' : 'Essential enablers requested from Jalna Municipal Corporation:'}
                  </span>
                </div>
                <div className="jmc-support-list-10">
                  {JMC_EXPECTED_SUPPORT.map((supp, idx) => (
                    <div key={idx} className="support-item-row">
                      <span className="supp-idx font-mono font-bold text-orange-400">{idx + 1}.</span>
                      <span className="supp-text text-secondary text-xs">{supp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
