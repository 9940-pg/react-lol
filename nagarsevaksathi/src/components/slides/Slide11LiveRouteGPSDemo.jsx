import { useState, useEffect } from 'react';
import { Navigation, Play, Pause, RotateCcw, AlertTriangle, ShieldCheck, MapPin, Gauge, Fuel, CheckCircle2, Radio } from 'lucide-react';
import { soundManager } from '../../utils/audio';

export default function Slide11LiveRouteGPSDemo({ language }) {
  const isMr = language === 'mr';

  const [activeWard, setActiveWard] = useState('ward1');
  const [isSimulating, setIsSimulating] = useState(true);
  const [progress, setProgress] = useState(68);
  const [alertState, setAlertState] = useState(null);

  const wardsData = {
    ward1: {
      name: isMr ? "प्रभाग क्र. ०१ — गांधी चौक व स्टेशन रोड" : "Ward 01 — Gandhi Chowk & Station Road",
      vehicle: "MH-21-BH-4501",
      driver: "आनंद गवळी (Anand Gawali)",
      type: "हायड्रॉलिक टिप्पर (२.२ MT)",
      housesTotal: 1250,
      collected: Math.round(1250 * (progress / 100)),
      speed: "18 km/h",
      fuel: "76%",
      eta: "12:15 PM"
    },
    ward2: {
      name: isMr ? "प्रभाग क्र. ०२ — जुना जालना व सराफा बाजार" : "Ward 02 — Old Jalna & Sarafa Bazaar",
      vehicle: "MH-21-ER-1204",
      driver: "शेख इम्रान (Shaikh Imran)",
      type: "कॉम्पॅक्ट ई-रिक्षा (८०० kg)",
      housesTotal: 980,
      collected: Math.round(980 * (progress / 100)),
      speed: "14 km/h",
      fuel: "84% (Battery)",
      eta: "11:50 AM"
    },
    ward3: {
      name: isMr ? "प्रभाग क्र. ०३ — मस्तगड व भाजी मंडई" : "Ward 03 — Mastgad & Mandi",
      vehicle: "MH-21-BH-4518",
      driver: "संतोष वाघमारे (Santosh Waghmare)",
      type: "हायड्रॉलिक टिप्पर (२.५ MT)",
      housesTotal: 1420,
      collected: Math.round(1420 * (progress / 100)),
      speed: "20 km/h",
      fuel: "68%",
      eta: "01:05 PM"
    }
  };

  const curr = wardsData[activeWard];

  useEffect(() => {
    let timer = null;
    if (isSimulating) {
      timer = setInterval(() => {
        setProgress((prev) => (prev >= 98 ? 40 : prev + 1));
      }, 1200);
    }
    return () => clearInterval(timer);
  }, [isSimulating]);

  const triggerAlert = (type) => {
    soundManager.playAlertTone();
    setAlertState(type);
    setTimeout(() => {
      setAlertState(null);
    }, 4000);
  };

  return (
    <div className="slide-content slide-mandate-demo animate-fade-in">
      <div className="slide-header-box">
        <div className="mandate-tag-pill">
          <span className="pill-number">थेट प्रात्यक्षिक</span>
          <span className="pill-title">जीपीएस मॉनिटरिंग सिस्टीम व रूट प्लॅनिंग डेमो</span>
        </div>
        <h2 className="slide-main-heading">
          {isMr
            ? 'जालना शहर प्रभाग बीट मॅप्स, रिअल-टाइम व्हेईकल ट्रॅकिंग व जिओ-फेन्सिंग थेट प्रदर्शन'
            : 'Live Ward Beat Maps, Real-Time Vehicle Tracking & Telemetry Simulation'}
        </h2>
        <p className="slide-lead-desc">
          {isMr
            ? 'निविदेत नमूद सूचनेनुसार मनपा अधिकाऱ्यांसमोर सादर केलेली थेट क्लाऊड-बेस्ड जीपीएस ट्रॅकिंग सिस्टीम.'
            : 'As mandated by the Municipal Commissioner letter, demonstrating live GPS telemetry, geofence, and route progress.'}
        </p>
      </div>

      <div className="slide-two-col-layout">
        {/* Left Column: Interactive GIS Map Simulation */}
        <div className="layout-col">
          <div className="content-card primary-border map-simulation-card">
            <div className="map-toolbar">
              <div className="map-ward-selector">
                <span className="sel-lbl">{isMr ? 'प्रभाग निवडा:' : 'Select Ward:'}</span>
                <select
                  value={activeWard}
                  onChange={(e) => {
                    setActiveWard(e.target.value);
                    soundManager.playLaserClick();
                  }}
                  className="ward-select-dropdown"
                >
                  <option value="ward1">प्रभाग ०१ (गांधी चौक / स्टेशन रोड)</option>
                  <option value="ward2">प्रभाग ०२ (जुना जालना / सराफा)</option>
                  <option value="ward3">प्रभाग ०३ (मस्तगड / भाजी मंडई)</option>
                </select>
              </div>

              <div className="sim-controls">
                <button
                  className="btn-sim-toggle"
                  onClick={() => setIsSimulating(!isSimulating)}
                  title={isSimulating ? 'Pause Simulation' : 'Run Simulation'}
                >
                  {isSimulating ? <Pause size={14} /> : <Play size={14} fill="currentColor" />}
                  <span>{isSimulating ? 'Pause' : 'Play'}</span>
                </button>
                <button
                  className="btn-sim-reset"
                  onClick={() => setProgress(35)}
                  title="Reset Progress"
                >
                  <RotateCcw size={14} />
                </button>
              </div>
            </div>

            {/* Simulated Canvas Map Graphic */}
            <div className="simulated-map-viewport">
              <div className="grid-overlay" />

              {/* Road Network Graphic */}
              <svg className="map-roads-svg" viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg">
                {/* Background Roads */}
                <path d="M 40 80 Q 200 40 460 70" stroke="rgba(255,255,255,0.2)" strokeWidth="18" fill="none" />
                <path d="M 80 20 L 120 300" stroke="rgba(255,255,255,0.18)" strokeWidth="14" fill="none" />
                <path d="M 250 30 L 250 300" stroke="rgba(255,255,255,0.22)" strokeWidth="22" fill="none" />
                <path d="M 400 40 L 370 290" stroke="rgba(255,255,255,0.18)" strokeWidth="14" fill="none" />
                <path d="M 40 220 C 180 240 320 200 460 230" stroke="rgba(255,255,255,0.2)" strokeWidth="16" fill="none" />

                {/* Geofence Boundary polygon */}
                <polygon
                  points="50,40 450,50 430,280 70,270"
                  fill="rgba(34, 197, 94, 0.06)"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                />

                {/* Active Route Completed (Green Trail) */}
                <path
                  d="M 80 60 Q 150 70 250 80 L 250 210 Q 180 220 120 220"
                  stroke="#22c55e"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="8,2"
                />

                {/* Moving Vehicle Icon Position based on progress */}
                <circle
                  cx={80 + (progress / 100) * 320}
                  cy={100 + Math.sin(progress / 10) * 40}
                  r="12"
                  fill="#ea580c"
                />
                <circle
                  cx={80 + (progress / 100) * 320}
                  cy={100 + Math.sin(progress / 10) * 40}
                  r="20"
                  fill="rgba(234, 88, 12, 0.3)"
                  className="animate-ping"
                />
              </svg>

              {/* Map Pins / LandMarks */}
              <div className="map-landmark pin-station">
                <MapPin size={14} className="text-orange-500" />
                <span>गांधी चौक (Gandhi Chowk)</span>
              </div>
              <div className="map-landmark pin-depot">
                <ShieldCheck size={14} className="text-green-500" />
                <span>MRF केंद्र (MRF Plant)</span>
              </div>

              {/* Live Vehicle Badge floating on map */}
              <div
                className="live-vehicle-floating-tag"
                style={{
                  left: `${20 + progress * 0.6}%`,
                  top: `${35 + Math.sin(progress / 10) * 12}%`
                }}
              >
                <Radio size={12} className="text-green-400 animate-pulse" />
                <span>{curr.vehicle} ({curr.speed})</span>
              </div>

              {/* Alert Popover if triggered */}
              {alertState && (
                <div className="map-alert-toast animate-bounce">
                  <AlertTriangle size={16} className="text-white" />
                  <span>
                    {alertState === 'geofence' && 'जिओ-फेन्स उल्लंघन सूचना! वाहन प्रभाग मर्यादेबाहेर गेले.'}
                    {alertState === 'breakdown' && 'वाहन बिघाड अलर्ट! १५ मिनिटांत पर्यायी बॅकअप वाहन रवाना.'}
                    {alertState === 'missed' && 'अलर्ट: गल्ली क्र. ४ मधील ५ घरे अद्याप संकलन प्रलंबित.'}
                  </span>
                </div>
              )}
            </div>

            {/* Route completion progress bar */}
            <div className="route-progress-wrap">
              <div className="route-prog-header">
                <span className="route-prog-title font-bold">
                  {isMr ? 'आजचा प्रभाग मार्ग पूर्णता दर:' : 'Today Beat Route Completion:'}
                </span>
                <span className="route-prog-val font-mono font-bold text-green-400">{progress}%</span>
              </div>
              <div className="route-prog-track">
                <div className="route-prog-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Telematics & Interactive Action Triggers */}
        <div className="layout-col">
          <div className="content-card">
            <div className="card-top-icon">
              <Gauge size={22} className="text-orange-500" />
              <h3 className="card-h3">
                {isMr ? 'थेट वाहन टेलिमॅटिक्स माहिती (Live Telemetry)' : 'Live Vehicle Telemetry Panel'}
              </h3>
            </div>

            <div className="telematics-details-card">
              <div className="tele-row">
                <span className="lbl">{isMr ? 'सक्रिय प्रभाग:' : 'Active Ward:'}</span>
                <span className="val font-bold text-white">{curr.name}</span>
              </div>
              <div className="tele-row">
                <span className="lbl">{isMr ? 'वाहन क्रमांक:' : 'Vehicle Reg:'}</span>
                <span className="val font-mono text-orange-400 font-bold">{curr.vehicle}</span>
              </div>
              <div className="tele-row">
                <span className="lbl">{isMr ? 'चालकाचे नाव:' : 'Driver Name:'}</span>
                <span className="val">{curr.driver}</span>
              </div>
              <div className="tele-row">
                <span className="lbl">{isMr ? 'वाहन प्रकार:' : 'Vehicle Type:'}</span>
                <span className="val">{curr.type}</span>
              </div>
              <div className="tele-row">
                <span className="lbl">{isMr ? 'घरोघरी संकलन स्थिती:' : 'Houses Covered:'}</span>
                <span className="val text-green-400 font-bold">
                  {curr.collected} / {curr.housesTotal} घरे ({progress}%)
                </span>
              </div>
              <div className="tele-row">
                <span className="lbl">{isMr ? 'चालू गती / इंधन पातळी:' : 'Speed / Fuel Status:'}</span>
                <span className="val font-mono">
                  {curr.speed} &bull; <Fuel size={14} className="inline text-orange-400" /> {curr.fuel}
                </span>
              </div>
              <div className="tele-row">
                <span className="lbl">{isMr ? 'अपेक्षित पूर्ण वेळ (ETA):' : 'Estimated Completion:'}</span>
                <span className="val font-mono text-white">{curr.eta}</span>
              </div>
            </div>

            {/* Test Trigger Buttons for Presentation Simulation */}
            <div className="demo-triggers-section">
              <h4 className="triggers-title">
                <Radio size={16} className="text-green-500" />
                <span>{isMr ? 'थेट चाचणी व सिम्युलेशन बटणे:' : 'Live Command Simulation Actions:'}</span>
              </h4>
              <div className="triggers-buttons-row">
                <button
                  className="btn-trigger-action warning"
                  onClick={() => triggerAlert('geofence')}
                >
                  <AlertTriangle size={14} />
                  <span>जिओ-फेन्स उल्लंघन चाचणी</span>
                </button>
                <button
                  className="btn-trigger-action danger"
                  onClick={() => triggerAlert('breakdown')}
                >
                  <ShieldCheck size={14} />
                  <span>ब्रेकडाऊन १५-मि. बॅकअप चाचणी</span>
                </button>
                <button
                  className="btn-trigger-action info"
                  onClick={() => triggerAlert('missed')}
                >
                  <CheckCircle2 size={14} />
                  <span>सुटलेले घर अलर्ट चाचणी</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
