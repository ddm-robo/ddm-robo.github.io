'use strict';
// Standalone: include this script and <div id="result-tables"></div>.
// Data is embedded for file:// use; regenerate/verify with export_result_tables.py.
// The parent site supplies styling for the generic classes used below.
(() => {
  // BEGIN GENERATED RESULT DATA
  const DATA = {"schema_version":1,"source":{"path":"paper/main_clean.tex","sha256":"d9f0b587c81d07a8b4637a9faa67b972dfdd23ed6ce517967451d653d30361e1","generator":"proj_page/scripts/export_result_tables.py"},"value_format":"Strings preserve exact manuscript precision; — denotes unreported values. Raw TeX cells provide row-level provenance.","tables":[{"id":"push-wm","tab":"Push WM","title":"Push-digit · World model","columns":["Method / context interactions k","Latent MSE ↓","Training regimes (%) ↑","All five regimes (%) ↑","Held-out regime, k=8 (%) ↑"],"rows":[{"cells":["Cosmos-Predict2","—","25.00","—","—"],"source_cells":["Cosmos-Predict2","---","~\\num{25.00}","---","---"]},{"cells":["IIDA+, k=2","0.0184","28.00","21.67","—"],"source_cells":["\\iidap{}, $k=2$","~\\num{0.0184}","~\\num{28.00}","~\\num{21.67}","---"]},{"cells":["IIDA+, k=4","0.0181","29.96","21.87","—"],"source_cells":["\\iidap{}, $k=4$","~\\num{0.0181}","~\\num{29.96}","~\\num{21.87}","---"]},{"cells":["IIDA+, k=8","0.0171","31.96","23.83","16.83"],"source_cells":["\\iidap{}, $k=8$","~\\num{0.0171}","~\\num{31.96}","~\\num{23.83}","~\\num{16.83}"]},{"cells":["DDM, k=2","0.0158","37.58","29.00","—"],"source_cells":["\\method{}, $k=2$","~\\num{0.0158}","~\\num{37.58}","~\\num{29.00}","---"]},{"cells":["DDM, k=4","0.0133","41.46","32.20","—"],"source_cells":["\\method{}, $k=4$","~\\num{0.0133}","~\\num{41.46}","~\\num{32.20}","---"]},{"cells":["DDM, k=8","0.0125","44.25","34.90","24.33"],"source_cells":["\\textbf{\\method{}, $k=8$}","\\textbf{\\num{0.0125}}","\\textbf{\\num{44.25}}","\\textbf{\\num{34.90}}","\\textbf{\\num{24.33}}"]}],"notes":["Per-element latent MSE measures future-prediction error; lower is better. Dynamics identification accuracy is reported separately; higher is better.","Identification tests four training regimes (chance 25%) or all five regimes (chance 20%). Held-out is the y+1.75 cm slice of the five-regime evaluation, with same-regime context at k=8; this dynamics value is excluded from training.","Dynamics identification selects the counterfactual future closest to the prediction in latent space. It measures dynamics sensitivity, not named-parameter recovery. Matched variants use identical query inputs, batch position, and sampler noise, so a dynamics-blind prediction is identical across variants and identification is structurally at chance (1 / number of tested regimes). Future-prediction MSE measures latent error against the realized future; it is distinct from identification accuracy and from the qualitative figures' RGB error.","k counts distinct, preceding same-regime context interactions, excluding the query. IIDA+ (WM) and IPA Policy+ (WAM) encode realized futures; DDM encodes residuals. These enhanced history baselines match DDM's context budget, reference warm start, context encoder, optimization, evaluation, and iteration-matched checkpoints.","These five tables report simulation results. The manuscript's real-world chair-pushing check is separate and is not included here. Values retain the manuscript's printed precision. — means not reported, not zero."],"provenance":{"label":"tab:wm","line":351,"sha256":"d350b9cf06696a73297720a9ed5cce0370361880ab7ea3f52fb274a6f836c46e"}},{"id":"toss-wm","tab":"Toss WM","title":"Toss-cube · World model","columns":["Method / context interactions k","Windowed latent MSE ↓","Yaw identification (%) ↑"],"rows":[{"cells":["Cosmos-Predict2","0.0437","14.29"],"source_cells":["Cosmos-Predict2","~\\num{0.0437}","~\\num{14.29}"]},{"cells":["IIDA+, k=2","0.0268","63.69"],"source_cells":["\\iidap{}, $k=2$","~\\num{0.0268}","~\\num{63.69}"]},{"cells":["IIDA+, k=4","0.0269","60.71"],"source_cells":["\\iidap{}, $k=4$","~\\num{0.0269}","~\\num{60.71}"]},{"cells":["IIDA+, k=8","0.0269","62.50"],"source_cells":["\\iidap{}, $k=8$","~\\num{0.0269}","~\\num{62.50}"]},{"cells":["DDM, k=2","0.0257","63.69"],"source_cells":["\\method{}, $k=2$","~\\num{0.0257}","~\\num{63.69}"]},{"cells":["DDM, k=4","0.0255","63.69"],"source_cells":["\\method{}, $k=4$","~\\num{0.0255}","~\\num{63.69}"]},{"cells":["DDM, k=8","0.0250","66.67"],"source_cells":["\\textbf{\\method{}, $k=8$}","\\textbf{\\num{0.0250}}","\\textbf{\\num{66.67}}"]}],"notes":["Windowed latent MSE (WMSE) measures future-prediction error in a 14 × 14 region centered on the true cube, with identical windows for all methods; lower is better. This prevents the static background from dominating the score.","Yaw identification distinguishes seven yaw-damping values within the held-out swing-damping row; chance is 14.29%. Higher is better. k counts complete same-regime context interactions.","Dynamics identification selects the counterfactual future closest to the prediction in latent space. It measures dynamics sensitivity, not named-parameter recovery. Matched variants use identical query inputs, batch position, and sampler noise, so a dynamics-blind prediction is identical across variants and identification is structurally at chance (1 / number of tested regimes). Future-prediction MSE measures latent error against the realized future; it is distinct from identification accuracy and from the qualitative figures' RGB error.","k counts distinct, preceding same-regime context interactions, excluding the query. IIDA+ (WM) and IPA Policy+ (WAM) encode realized futures; DDM encodes residuals. These enhanced history baselines match DDM's context budget, reference warm start, context encoder, optimization, evaluation, and iteration-matched checkpoints.","These five tables report simulation results. The manuscript's real-world chair-pushing check is separate and is not included here. Values retain the manuscript's printed precision. — means not reported, not zero."],"provenance":{"label":"tab:toss-wm","line":377,"sha256":"abec4154b11be491102393101c1495cf37e75b34fba185cda9e09cd1af93144a"}},{"id":"push-wam","tab":"Push WAM","title":"Push-digit · World-action model","columns":["Method / context interactions k","Success (%) ↑","Δ vs matched dense CP (pp)"],"rows":[{"cells":["Cosmos Policy (matched dense target)","45.25","—"],"source_cells":["Cosmos Policy (matched)","~\\num{45.25}","---"]},{"cells":["IPA Policy+, k=2","46.37","+1.1"],"source_cells":["\\ipap{}, $k=2$","~\\num{46.37}","~\\num{+1.1}"]},{"cells":["IPA Policy+, k=4","45.75","+0.5"],"source_cells":["\\ipap{}, $k=4$","~\\num{45.75}","~\\num{+0.5}"]},{"cells":["IPA Policy+, k=8","46.75","+1.5"],"source_cells":["\\ipap{}, $k=8$","~\\num{46.75}","~\\num{+1.5}"]},{"cells":["DDM, k=2","55.13","+9.9"],"source_cells":["\\method{}, $k=2$","~\\num{55.13}","~\\num{+9.9}"]},{"cells":["DDM, k=4","55.75","+10.5"],"source_cells":["\\method{}, $k=4$","~\\num{55.75}","~\\num{+10.5}"]},{"cells":["DDM, k=8","57.63","+12.4"],"source_cells":["\\textbf{\\method{}, $k=8$}","\\textbf{\\num{57.63}}","\\textbf{\\num{+12.4}}"]},{"cells":["DDM k=8, RDD=0","45.25","—"],"source_cells":["\\quad \\method{} $k=8$, RDD$=0$","~\\num{45.25}","---"]},{"cells":["Dynamics oracle","75.12","+29.9"],"source_cells":["Dynamics oracle","~\\num{75.12}","~\\num{+29.9}"]}],"notes":["Held-out goal windows over the four training dynamics regimes. One sampled action is executed open-loop; success requires reaching within 1.5 cm and 2° of the goal. Higher is better.","Cosmos Policy (matched dense target) is the context-free reference used for these controlled WAM comparisons. The default controlled WAM models share dense future targets; it is distinct from the regular repeated-terminal Cosmos Policy in the RoboCasa table. k counts complete context interactions.","Δ is in percentage points versus matched dense Cosmos Policy, printed to one decimal exactly as in the table (for example, +12.4). The printed table reports no confidence intervals or p-values; unreported comparisons remain —.","RDD=0 evaluates the same DDM k=8 checkpoint with its residual descriptor zeroed, returning success to 45.25%. The dynamics oracle supplies ground-truth dynamics through the same modulation interface.","k counts distinct, preceding same-regime context interactions, excluding the query. IIDA+ (WM) and IPA Policy+ (WAM) encode realized futures; DDM encodes residuals. These enhanced history baselines match DDM's context budget, reference warm start, context encoder, optimization, evaluation, and iteration-matched checkpoints.","These five tables report simulation results. The manuscript's real-world chair-pushing check is separate and is not included here. Values retain the manuscript's printed precision. — means not reported, not zero."],"provenance":{"label":"tab:policy","line":571,"sha256":"c63bd6b89b6f3881191a30efd33d83fc8bd5b6d78e6e3a70871066d4da7c8730"}},{"id":"toss-wam","tab":"Toss WAM","title":"Toss-cube · World-action model","columns":["Method / context interactions k","Unseen goals (cm) ↓","Unseen dynamics (cm) ↓"],"rows":[{"cells":["Cosmos Policy (matched dense target)","10.42","7.08"],"source_cells":["Cosmos Policy (matched)","~\\num{10.42}","~\\num{7.08}"]},{"cells":["IPA Policy+, k=2","1.29","3.03"],"source_cells":["\\ipap{}, $k=2$","\\textbf{\\num{1.29}}","~\\num{3.03}"]},{"cells":["IPA Policy+, k=4","1.29","3.05"],"source_cells":["\\ipap{}, $k=4$","\\textbf{\\num{1.29}}","~\\num{3.05}"]},{"cells":["IPA Policy+, k=8","1.36","3.05"],"source_cells":["\\ipap{}, $k=8$","~\\num{1.36}","~\\num{3.05}"]},{"cells":["DDM, k=2","1.40","3.08"],"source_cells":["\\method{}, $k=2$","~\\num{1.40}","~\\num{3.08}"]},{"cells":["DDM, k=4","1.36","3.03"],"source_cells":["\\method{}, $k=4$","~\\num{1.36}","~\\num{3.03}"]},{"cells":["DDM, k=8","1.38","2.95"],"source_cells":["\\textbf{\\method{}, $k=8$}","~\\num{1.38}","\\textbf{\\num{2.95}}"]}],"notes":["Landing regret subtracts the best bank-action landing distance from the policy's landing-to-goal distance in the same regime. Generated actions are snapped to the nearest pre-rolled action before scoring. Lower is better; the lookup protocol has an empirical floor of 1.2 cm.","Unseen goals use held-out locations over 24 trained dynamics regimes. Unseen dynamics retain training goals over 11 held-out regimes. The two columns measure different evaluation settings and are not directly ordered.","Cosmos Policy (matched dense target) is the context-free reference and shares DDM's dense future supervision. No confidence intervals are reported in this table.","k counts distinct, preceding same-regime context interactions, excluding the query. IIDA+ (WM) and IPA Policy+ (WAM) encode realized futures; DDM encodes residuals. These enhanced history baselines match DDM's context budget, reference warm start, context encoder, optimization, evaluation, and iteration-matched checkpoints.","These five tables report simulation results. The manuscript's real-world chair-pushing check is separate and is not included here. Values retain the manuscript's printed precision. — means not reported, not zero."],"provenance":{"label":"tab:toss-wam","line":620,"sha256":"3fea698e688fe0423832c8be8a0b42847ce17dbdcd95c3f9dd18d3606c4c41ca"}},{"id":"robocasa","tab":"RoboCasa · 24 tasks","title":"RoboCasa · 24-task world-action model evaluation","columns":["Task","Cosmos Policy (%) ↑","DDM-pred (%) ↑","Δ (pp)"],"rows":[{"cells":["PnP Counter→Cab.","22.0","17.3","-4.7"],"source_cells":["PnP Counter$\\to$Cab.","~\\num{22.0}","~\\num{17.3}","~\\num{-4.7}"]},{"cells":["PnP Cab.→Counter","9.3","12.7","+3.4"],"source_cells":["PnP Cab.$\\to$Counter","~\\num{9.3}","\\textbf{\\num{12.7}}","\\textbf{\\num{+3.4}}"]},{"cells":["PnP Counter→Sink","16.0","23.3","+7.3"],"source_cells":["PnP Counter$\\to$Sink","~\\num{16.0}","\\textbf{\\num{23.3}}","\\textbf{\\num{+7.3}}"]},{"cells":["PnP Sink→Counter","25.3","27.3","+2.0"],"source_cells":["PnP Sink$\\to$Counter","~\\num{25.3}","\\textbf{\\num{27.3}}","\\textbf{\\num{+2.0}}"]},{"cells":["PnP Counter→Micro.","4.7","10.7","+6.0"],"source_cells":["PnP Counter$\\to$Micro.","~\\num{4.7}","\\textbf{\\num{10.7}}","\\textbf{\\num{+6.0}}"]},{"cells":["PnP Micro.→Counter","13.3","19.3","+6.0"],"source_cells":["PnP Micro.$\\to$Counter","~\\num{13.3}","\\textbf{\\num{19.3}}","\\textbf{\\num{+6.0}}"]},{"cells":["PnP Counter→Stove","6.7","11.3","+4.6"],"source_cells":["PnP Counter$\\to$Stove","~\\num{6.7}","\\textbf{\\num{11.3}}","\\textbf{\\num{+4.6}}"]},{"cells":["PnP Stove→Counter","9.3","12.0","+2.7"],"source_cells":["PnP Stove$\\to$Counter","~\\num{9.3}","\\textbf{\\num{12.0}}","\\textbf{\\num{+2.7}}"]},{"cells":["Open single door","42.7","48.0","+5.3"],"source_cells":["Open single door","~\\num{42.7}","\\textbf{\\num{48.0}}","\\textbf{\\num{+5.3}}"]},{"cells":["Close single door","64.7","81.3","+16.6"],"source_cells":["Close single door","~\\num{64.7}","\\textbf{\\num{81.3}}","\\textbf{\\num{+16.6}}"]},{"cells":["Open double door","48.7","71.3","+22.6"],"source_cells":["Open double door","~\\num{48.7}","\\textbf{\\num{71.3}}","\\textbf{\\num{+22.6}}"]},{"cells":["Close double door","45.3","52.0","+6.7"],"source_cells":["Close double door","~\\num{45.3}","\\textbf{\\num{52.0}}","\\textbf{\\num{+6.7}}"]},{"cells":["Open drawer","44.0","51.3","+7.3"],"source_cells":["Open drawer","~\\num{44.0}","\\textbf{\\num{51.3}}","\\textbf{\\num{+7.3}}"]},{"cells":["Close drawer","93.3","95.3","+2.0"],"source_cells":["Close drawer","~\\num{93.3}","\\textbf{\\num{95.3}}","\\textbf{\\num{+2.0}}"]},{"cells":["Turn on stove","34.0","36.0","+2.0"],"source_cells":["Turn on stove","~\\num{34.0}","\\textbf{\\num{36.0}}","\\textbf{\\num{+2.0}}"]},{"cells":["Turn off stove","17.3","16.7","-0.6"],"source_cells":["Turn off stove","~\\num{17.3}","~\\num{16.7}","~\\num{-0.6}"]},{"cells":["Turn on sink faucet","70.7","46.7","-24.0"],"source_cells":["Turn on sink faucet","~\\num{70.7}","~\\num{46.7}","~\\num{-24.0}"]},{"cells":["Turn off sink faucet","72.7","79.3","+6.6"],"source_cells":["Turn off sink faucet","~\\num{72.7}","\\textbf{\\num{79.3}}","\\textbf{\\num{+6.6}}"]},{"cells":["Turn sink spout","78.0","78.7","+0.7"],"source_cells":["Turn sink spout","~\\num{78.0}","\\textbf{\\num{78.7}}","\\textbf{\\num{+0.7}}"]},{"cells":["Coffee: setup mug","8.7","8.7","0.0"],"source_cells":["Coffee: setup mug","~\\num{8.7}","~\\num{8.7}","~\\num{0.0}"]},{"cells":["Coffee: serve mug","32.7","34.0","+1.3"],"source_cells":["Coffee: serve mug","~\\num{32.7}","\\textbf{\\num{34.0}}","\\textbf{\\num{+1.3}}"]},{"cells":["Coffee: press button","40.0","54.7","+14.7"],"source_cells":["Coffee: press button","~\\num{40.0}","\\textbf{\\num{54.7}}","\\textbf{\\num{+14.7}}"]},{"cells":["Turn on microwave","33.3","32.0","-1.3"],"source_cells":["Turn on microwave","~\\num{33.3}","~\\num{32.0}","~\\num{-1.3}"]},{"cells":["Turn off microwave","77.3","58.0","-19.3"],"source_cells":["Turn off microwave","~\\num{77.3}","~\\num{58.0}","~\\num{-19.3}"]},{"cells":["Mean (24 tasks)","37.9","40.7","+2.8"],"source_cells":["\\textbf{Mean (24 tasks)}","~\\num{37.9}","\\textbf{\\num{40.7}}","\\textbf{\\num{+2.8}}"]}],"notes":["Task success and the unweighted 24-task macro average; higher is better. Δ is DDM-pred minus Cosmos Policy in percentage points. PnP = pick-and-place; Cab. = cabinet; Micro. = microwave.","Regular Cosmos Policy uses repeated-terminal future supervision. DDM-pred changes only that target to four distributed future observations within the same latent budget. This comparison has no DDM-cond residual conditioning and no controlled dynamics shifts; it is separate from the matched dense CP references in the controlled WAM tables.","Both arms train for 100,000 iterations on eight H100 GPUs. This is a descriptive comparison, with no confidence intervals or significance tests reported in the table. 18 tasks improve, 1 ties, and 5 decline. Macro averages and deltas retain the manuscript's printed precision.","These five tables report simulation results. The manuscript's real-world chair-pushing check is separate and is not included here. Values retain the manuscript's printed precision. — means not reported, not zero."],"provenance":{"label":"tab:robocasa","line":661,"sha256":"765d3ffc51c6aeb0f8cfc0715e265bf11f296f6ccf7d1b12b4e5c3f3eab64882"}}]};
  // END GENERATED RESULT DATA

  // Capture the script URL now: currentScript is null in DOMContentLoaded callbacks.
  const scriptURL = document.currentScript && document.currentScript.src;
  const downloadURL = scriptURL
    ? new URL('../data/result-tables.json', scriptURL).href
    : new URL('static/data/result-tables.json', document.baseURI).href;

  function element(tag, text, attributes = {}) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
    return node;
  }

  function tableContent(config, panel) {
    const noteID = `${panel.id}-notes`;
    const scroll = element('div', undefined, {
      class: 'table-scroll', tabindex: '0', role: 'region',
      'aria-label': `${config.title}: scrollable results table`
    });
    const table = element('table', undefined, {'aria-describedby': noteID});
    table.append(element('caption', config.title));
    const head = element('thead');
    const headings = element('tr');
    config.columns.forEach(label => headings.append(element('th', label, {scope: 'col'})));
    head.append(headings);
    const body = element('tbody');
    config.rows.forEach(row => {
      const tr = element('tr');
      row.cells.forEach((value, index) => {
        const cell = element(index === 0 ? 'th' : 'td', undefined,
          index === 0 ? {scope: 'row'} : {});
        // Reset generic table/header weights; only printed TeX emphasis is bold.
        // This includes IPA Policy+ wins on toss WAM, not every DDM method label.
        cell.style.fontWeight = '400';
        if (row.source_cells[index].includes('\\textbf')) cell.append(element('strong', value));
        else cell.textContent = value;
        if (value === '—') cell.setAttribute('aria-label', 'Not reported');
        tr.append(cell);
      });
      body.append(tr);
    });
    table.append(head, body);
    scroll.append(table);
    const notes = element('div', undefined, {class: 'table-note', id: noteID});
    notes.append(element('p', config.notes[0]));
    const details = element('details');
    details.append(element('summary', 'Evaluation protocol & caveats'));
    config.notes.slice(1).forEach(note => details.append(element('p', note)));
    details.append(element('p', `Source: ${DATA.source.path}, ${config.provenance.label}.`));
    notes.append(details);
    panel.append(scroll, notes);
  }

  function mount() {
    const root = document.getElementById('result-tables');
    if (!root || root.dataset.resultTablesMounted === 'true') return;
    root.dataset.resultTablesMounted = 'true';
    const tabs = element('div', undefined, {
      class: 'result-tabs', role: 'tablist', 'aria-label': 'Results by task and model'
    });
    const panels = DATA.tables.map(config => element('div', undefined, {
      class: 'result-table-panel', id: `result-tables-panel-${config.id}`,
      role: 'tabpanel', 'aria-labelledby': `result-tables-tab-${config.id}`, tabindex: '0'
    }));
    const buttons = DATA.tables.map((config, index) => {
      const button = element('button', config.tab, {
        type: 'button', role: 'tab', id: `result-tables-tab-${config.id}`,
        'aria-controls': panels[index].id
      });
      button.addEventListener('click', () => select(index));
      button.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % buttons.length;
        else if (event.key === 'ArrowLeft') next = (index + buttons.length - 1) % buttons.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = buttons.length - 1;
        else return; // Native buttons handle Enter and Space.
        event.preventDefault();
        select(next);
        buttons[next].focus();
      });
      tabs.append(button);
      return button;
    });

    function select(index) {
      buttons.forEach((button, i) => {
        const active = i === index;
        button.setAttribute('aria-selected', String(active));
        button.tabIndex = active ? 0 : -1;
        panels[i].hidden = !active;
        // Only the selected panel contains a full table. Tab buttons stay mounted.
        if (!active) panels[i].replaceChildren();
      });
      if (!panels[index].children.length) tableContent(DATA.tables[index], panels[index]);
    }

    const download = element('p', undefined, {class: 'table-note'});
    // Browsers may ignore download for file:// links. A local Blob downloads the
    // same JSON without fetching; the browser releases it when the page closes.
    const downloadHref = new URL(downloadURL).protocol === 'file:'
      ? URL.createObjectURL(new Blob([JSON.stringify(DATA, null, 2) + '\n'], {type: 'application/json'}))
      : downloadURL;
    download.append(element('a', 'Download all five tables (JSON)', {
      href: downloadHref, download: 'result-tables.json'
    }));
    root.replaceChildren(tabs, ...panels, download);
    select(0);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, {once: true});
  } else {
    mount();
  }
})();
