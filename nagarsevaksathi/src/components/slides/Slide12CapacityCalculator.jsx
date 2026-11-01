import { useState } from 'react';
import { Calculator, Sparkles, Truck, Users, Leaf, RotateCcw, CheckCircle, BarChart3 } from 'lucide-react';
import { soundManager } from '../../utils/audio';

export default function Slide12CapacityCalculator({ language }) {
  const isMr = language === 'mr';

  const [tpdTarget, setTpdTarget] = useState(100);

  // Dynamic calculations based on TPD input
  const wetTons = Math.round(tpdTarget * 0.58);
  const dryTons = Math.round(tpdTarget * 0.34);
  const inertTons = Math.round(tpdTarget * 0.08);

  const tippersNeeded = Math.ceil(tpdTarget / 2.4);
  const eRickshawsNeeded = Math.ceil((tpdTarget * 0.25) / 1.5);
  const totalFleet = tippersNeeded + eRickshawsNeeded + 4; // plus compactors & backup

  const driversNeeded = totalFleet;
  const helpersNeeded = totalFleet * 2;
  const totalWorkforce = driversNeeded + helpersNeeded + 18; // supervisors + tech

  const tripsPerDay = Math.round(tpdTarget / 1.8);
  const co2AvoidedKg = Math.round(tpdTarget * 480); // kg of greenhouse gas offset

  const handleSliderChange = (e) => {
    setTpdTarget(Number(e.target.value));
    soundManager.playLaserClick();
  };

  const setPreset = (val) => {
    setTpdTarget(val);
    soundManager.playLaserClick();
  };

  return (
    <div className="slide-content slide-mandate-calc animate-fade-in">
      <div className="slide-header-box">
        <div className="mandate-tag-pill">
          <span className="pill-number">परस्परसंवादी सिम्युलेटर</span>
          <span className="pill-title">१०० TPD घनकचरा क्षमता व ताफा कॅल्क्युलेटर</span>
        </div>
        <h2 className="slide-main-heading">
          {isMr
            ? '१०० TPD कचरा क्षमता, आवश्यक वाहने, मनुष्यबळ आणि पर्यावरणीय फायदे कॅल्क्युलेटर'
            : 'Interactive 100 TPD Waste Capacity, Fleet, Workforce & Carbon Calculator'}
        </h2>
        <p className="slide-lead-desc">
          {isMr
            ? 'जालना मनपाच्या गरजेनुसार दैनिक टनेज बदलून वाहने, फेऱ्या, कामगार आणि खत निर्मितीची तत्काळ आकडेमोड करा.'
            : 'Simulate required fleet, staff, daily trips, and composting yields across varying municipal tonnage.'}
        </p>
      </div>

      <div className="slide-two-col-layout">
        {/* Left Column: Interactive Sliders & Presets */}
        <div className="layout-col">
          <div className="content-card primary-border">
            <div className="card-top-icon">
              <Calculator size={22} className="text-orange-500" />
              <h3 className="card-h3">
                {isMr ? 'दैनिक संकलन टार्गेट निवडा (TPD Slider)' : 'Target Daily Collection Capacity'}
              </h3>
            </div>

            {/* Slider Control */}
            <div className="calculator-slider-box">
              <div className="calc-slider-header">
                <span className="slider-label">{isMr ? 'दैनिक कचरा प्रमाण (Tons Per Day):' : 'Daily Tonnage:'}</span>
                <span className="slider-value-badge font-mono text-green-400">
                  {tpdTarget} TPD
                </span>
              </div>
              <input
                type="range"
                min="70"
                max="160"
                step="5"
                value={tpdTarget}
                onChange={handleSliderChange}
                className="tpd-range-slider"
              />
              <div className="slider-scale-ticks">
                <span>७० TPD</span>
                <span className="font-bold text-orange-400">१०० TPD (निविदा बेस)</span>
                <span>१३० TPD</span>
                <span>१६० TPD</span>
              </div>
            </div>

            {/* Preset Buttons */}
            <div className="preset-buttons-group">
              <button
                className={`btn-preset ${tpdTarget === 100 ? 'active' : ''}`}
                onClick={() => setPreset(100)}
              >
                मनपा निविदा बेस (१०० TPD)
              </button>
              <button
                className={`btn-preset ${tpdTarget === 120 ? 'active' : ''}`}
                onClick={() => setPreset(120)}
              >
                उत्सव / सणासुदीचा काळ (१२० TPD)
              </button>
              <button
                className={`btn-preset ${tpdTarget === 140 ? 'active' : ''}`}
                onClick={() => setPreset(140)}
              >
                भविष्यातील विस्तार (१४० TPD)
              </button>
            </div>

            {/* Stream Breakdown Result Box */}
            <div className="stream-breakdown-calc-box">
              <h4 className="breakdown-title">
                <BarChart3 size={16} className="text-green-500" />
                <span>{isMr ? 'कचरा प्रकार विभाजन (Estimated Split):' : 'Estimated Waste Split:'}</span>
              </h4>
              <div className="calc-split-cards">
                <div className="split-card green-card">
                  <span className="split-name">{isMr ? 'ओला कचरा (खत / गॅस)' : 'Wet Composting'}</span>
                  <span className="split-val font-mono">{wetTons} TPD</span>
                </div>
                <div className="split-card blue-card">
                  <span className="split-name">{isMr ? 'सुका कचरा (MRF रिसायकल)' : 'Dry MRF Sorting'}</span>
                  <span className="split-val font-mono">{dryTons} TPD</span>
                </div>
                <div className="split-card gray-card">
                  <span className="split-name">{isMr ? 'अवशिष्ट / निष्क्रिय' : 'Inert / Silt'}</span>
                  <span className="split-val font-mono">{inertTons} TPD</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Computed Fleet & Workforce Outputs */}
        <div className="layout-col">
          <div className="content-card">
            <div className="card-top-icon">
              <Sparkles size={22} className="text-green-500" />
              <h3 className="card-h3">
                {isMr ? 'स्वयंचलित साधनसामग्री आवश्यकता (Computed Resources)' : 'Computed Operational Resources'}
              </h3>
            </div>

            <div className="calc-metrics-grid">
              <div className="calc-metric-card">
                <div className="metric-icon-wrap text-orange-400">
                  <Truck size={20} />
                </div>
                <div>
                  <div className="metric-computed-val font-mono font-bold text-white">
                    {totalFleet} वाहने
                  </div>
                  <div className="metric-computed-lbl text-secondary">
                    {isMr ? 'एकूण सक्रिय व बॅकअप ताफा' : 'Total Fleet Size'}
                  </div>
                  <span className="metric-sub-note">
                    ({tippersNeeded} टिप्पर + {eRickshawsNeeded} ई-रिक्षा + बॅकअप)
                  </span>
                </div>
              </div>

              <div className="calc-metric-card">
                <div className="metric-icon-wrap text-green-400">
                  <Users size={20} />
                </div>
                <div>
                  <div className="metric-computed-val font-mono font-bold text-white">
                    {totalWorkforce} कामगार
                  </div>
                  <div className="metric-computed-lbl text-secondary">
                    {isMr ? 'कर्मचारी व पर्यवेक्षक दल' : 'Total Field Workforce'}
                  </div>
                  <span className="metric-sub-note">
                    ({driversNeeded} चालक + {helpersNeeded} स्वच्छता मित्र + पर्यवेक्षक)
                  </span>
                </div>
              </div>

              <div className="calc-metric-card">
                <div className="metric-icon-wrap text-blue-400">
                  <RotateCcw size={20} />
                </div>
                <div>
                  <div className="metric-computed-val font-mono font-bold text-white">
                    {tripsPerDay} फेऱ्या / दिवस
                  </div>
                  <div className="metric-computed-lbl text-secondary">
                    {isMr ? 'दैनिक एकूण ट्रिप्स' : 'Daily Collection Trips'}
                  </div>
                  <span className="metric-sub-note">
                    (सरासरी २ ते २.५ फेऱ्या प्रति वाहन)
                  </span>
                </div>
              </div>

              <div className="calc-metric-card">
                <div className="metric-icon-wrap text-yellow-400">
                  <Leaf size={20} />
                </div>
                <div>
                  <div className="metric-computed-val font-mono font-bold text-green-400">
                    {co2AvoidedKg.toLocaleString()} kg CO₂
                  </div>
                  <div className="metric-computed-lbl text-secondary">
                    {isMr ? 'दैनिक कार्बन उत्सर्जन बचत' : 'Daily CO2 Emissions Offset'}
                  </div>
                  <span className="metric-sub-note">
                    (१००% कंपोस्टिंग व रिसायकलिंगद्वारे)
                  </span>
                </div>
              </div>
            </div>

            {/* Validation Badge */}
            <div className="calc-compliance-check">
              <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
              <p>
                <strong>{isMr ? 'तांत्रिक पडताळणी:' : 'Technical Validation:'}</strong>{' '}
                {isMr
                  ? `बी.के.एन.एस.एस. कडे ${tpdTarget} TPD क्षमतेची वाहने, चालक व तांत्रिक सिस्टीम तात्काळ तैनात करण्याची पूर्ण क्षमता आहे.`
                  : `BKNSS maintains dedicated readiness to deploy requisite fleet and manpower for ${tpdTarget} TPD immediately.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
