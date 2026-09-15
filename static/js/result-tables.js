'use strict';
// Standalone: include this script and <div id="result-tables"></div>.
// Data is embedded for file:// use; regenerate/verify with export_result_tables.py.
// The parent site supplies styling for the generic classes used below.
(() => {
  // BEGIN GENERATED RESULT DATA
  const DATA = {"schema_version":1,"source":{"path":"paper/main.tex","sha256":"2e40b8a7a191999d7da2a4dc224fa78d20281794b921de1d81cc606509bc563f","generator":"proj_page/scripts/export_result_tables.py"},"value_format":"Strings preserve exact manuscript precision; — denotes unreported values. Raw TeX cells provide row-level provenance.","tables":[{"id":"push-wm","tab":"Push WM","title":"Push-digit · World model","columns":["Method / context interactions k","Training regimes (%) ↑","All five regimes (%) ↑","Held-out regime, k=8 (%) ↑"],"rows":[{"cells":["Cosmos-Predict2","25.00","—","—"],"source_cells":["Cosmos-Predict2","~\\num{25.00}","---","---"]},{"cells":["Two-stage history, k=2","28.00","21.67","—"],"source_cells":["Two-stage hist., $k=2$","~\\num{28.00}","~\\num{21.67}","---"]},{"cells":["Two-stage history, k=4","29.96","21.87","—"],"source_cells":["Two-stage hist., $k=4$","~\\num{29.96}","~\\num{21.87}","---"]},{"cells":["Two-stage history, k=8","31.96","23.83","16.83"],"source_cells":["Two-stage hist., $k=8$","~\\num{31.96}","~\\num{23.83}","~\\num{16.83}"]},{"cells":["DDM, k=2","37.58","29.00","—"],"source_cells":["\\method{}, $k=2$","~\\num{37.58}","~\\num{29.00}","---"]},{"cells":["DDM, k=4","41.46","32.20","—"],"source_cells":["\\method{}, $k=4$","~\\num{41.46}","~\\num{32.20}","---"]},{"cells":["DDM, k=8","44.25","34.90","24.33"],"source_cells":["\\textbf{\\method{}, $k=8$}","\\textbf{\\num{44.25}}","\\textbf{\\num{34.90}}","\\textbf{\\num{24.33}}"]}],"notes":["Dynamics identification chooses the counterfactual future closest to the predicted future in latent space. It tests dynamics sensitivity, not recovery of a named parameter. Higher is better.","600 matched windows: four training regimes (2,400 trials; chance 25%) or all five regimes (3,000 trials; chance 20%). Held-out is the y+1.75 cm slice of the five-regime evaluation, with same-regime context at k=8; this dynamics value is excluded from training.","k is the number of complete, same-regime context interactions; the query is excluded. Two-stage history and DDM share the reference warm start, context budget, encoder path, store, and optimization. WM uses standard dense future supervision.","All experiments are in simulation. Each model is trained once; reported intervals describe evaluation-unit variation, not variation across training runs. Values retain the manuscript's printed precision. — means not reported, not zero."],"provenance":{"label":"tab:wm","line":481,"sha256":"65d94919d68ea503315dd766f4fe0b910c1ca1e89bc3486ed2ea5db8e1732f04"}},{"id":"toss-wm","tab":"Toss WM","title":"Toss-cube · World model","columns":["Method / context interactions k","Warm start","Windowed latent MSE ↓","Yaw identification (%) ↑"],"rows":[{"cells":["Cosmos-Predict2","pretrained","0.0437","14.29"],"source_cells":["Cosmos-Predict2","pretrained","~\\num{0.0437}","~\\num{14.29}"]},{"cells":["IIDA+, k=8","pretrained","0.0297","56.55"],"source_cells":["\\iidap{}, $k=8$","pretrained","~\\num{0.0297}","~\\num{56.55}"]},{"cells":["Two-stage history, k=2","reference","0.0268","63.69"],"source_cells":["Two-stage hist., $k=2$","reference","~\\num{0.0268}","~\\num{63.69}"]},{"cells":["Two-stage history, k=4","reference","0.0269","60.71"],"source_cells":["Two-stage hist., $k=4$","reference","~\\num{0.0269}","~\\num{60.71}"]},{"cells":["Two-stage history, k=8","reference","0.0269","62.50"],"source_cells":["Two-stage hist., $k=8$","reference","~\\num{0.0269}","~\\num{62.50}"]},{"cells":["DDM, k=2","reference","0.0257","63.69"],"source_cells":["\\method{}, $k=2$","reference","~\\num{0.0257}","~\\num{63.69}"]},{"cells":["DDM, k=4","reference","0.0255","63.69"],"source_cells":["\\method{}, $k=4$","reference","~\\num{0.0255}","~\\num{63.69}"]},{"cells":["DDM, k=8","reference","0.0250","66.67"],"source_cells":["\\textbf{\\method{}, $k=8$}","reference","\\textbf{\\num{0.0250}}","\\textbf{\\num{66.67}}"]}],"notes":["168 evaluation rows. Windowed latent MSE (WMSE) is measured in a 14 × 14 region centered on the true cube, with identical windows for all methods; lower is better. This is not full-frame pixel error.","Yaw identification distinguishes seven yaw-damping values within the held-out swing-damping row; chance is 14.29%. Higher is better. k counts complete same-regime context interactions.","Warm start is reproduced from the table: pretrained versus the trained dynamics-blind reference. IIDA+ is a scaled pretrained history baseline, not an exact reproduction of IIDA. Cosmos-Predict2, IIDA+, and reference-warm-started rows are evaluated at 3,000, 7,500, and 10,000 iterations, respectively.","All experiments are in simulation. Each model is trained once; reported intervals describe evaluation-unit variation, not variation across training runs. Values retain the manuscript's printed precision. — means not reported, not zero."],"provenance":{"label":"tab:toss-wm","line":530,"sha256":"08248638a04b909561360dd85ed74f7df07654a0241cc569d7a7811124e790c0"}},{"id":"push-wam","tab":"Push WAM","title":"Push-digit · World-action model","columns":["Method / context interactions k","Success (%) ↑","95% confidence interval (%)","Δ vs matched dense CP (pp; p)"],"rows":[{"cells":["DDM, k=2","55.13","[50.8,59.5]","+9.9 (2e-07)"],"source_cells":["\\method{}, $k=2$","~\\num{55.13}","{\\scriptsize[50.8,59.5]}","~\\num{+9.9}\\,{\\scriptsize(2e-07)}"]},{"cells":["DDM, k=4","55.75","[51.3,60.1]","+10.5 (1e-07)"],"source_cells":["\\method{}, $k=4$","~\\num{55.75}","{\\scriptsize[51.3,60.1]}","~\\num{+10.5}\\,{\\scriptsize(1e-07)}"]},{"cells":["DDM, k=8","57.63","[53.4,61.9]","+12.4 (2.6e-10)"],"source_cells":["\\textbf{\\method{}, $k=8$}","\\textbf{\\num{57.63}}","{\\scriptsize[53.4,61.9]}","~\\num{+12.4}\\,{\\scriptsize(2.6e-10)}"]},{"cells":["DDM k=8, RDD=0","45.25","—","—"],"source_cells":["\\quad \\method{} $k=8$, RDD$=0$","~\\num{45.25}","---","---"]},{"cells":["Two-stage history, k=2","46.37","[41.6,51.0]","+1.1 (0.57)"],"source_cells":["Two-stage hist., $k=2$","~\\num{46.37}","{\\scriptsize[41.6,51.0]}","~\\num{+1.1}\\,{\\scriptsize(0.57)}"]},{"cells":["Two-stage history, k=4","45.75","[41.4,50.1]","+0.5 (0.84)"],"source_cells":["Two-stage hist., $k=4$","~\\num{45.75}","{\\scriptsize[41.4,50.1]}","~\\num{+0.5}\\,{\\scriptsize(0.84)}"]},{"cells":["Two-stage history, k=8","46.75","[42.4,51.1]","+1.5 (0.46)"],"source_cells":["Two-stage hist., $k=8$","~\\num{46.75}","{\\scriptsize[42.4,51.1]}","~\\num{+1.5}\\,{\\scriptsize(0.46)}"]},{"cells":["IPA Policy+, k=8","54.13","—","—"],"source_cells":["\\ipap{}, $k=8$","~\\num{54.13}","---","---"]},{"cells":["Dynamics oracle","75.12","[71.1,79.0]","+29.9 (4e-47)"],"source_cells":["Dynamics oracle","~\\num{75.12}","{\\scriptsize[71.1,79.0]}","~\\num{+29.9}\\,{\\scriptsize(4e-47)}"]},{"cells":["Cosmos Policy (matched dense target)","45.25","[40.8,49.8]","—"],"source_cells":["Cosmos Policy (matched)","~\\num{45.25}","{\\scriptsize[40.8,49.8]}","---"]}],"notes":["800 evaluations from 200 held-out goal windows over the four training dynamics regimes. One sampled action is executed open-loop; success requires both position error \u003c1.5 cm and yaw error \u003c2°. Higher is better.","Cosmos Policy (matched dense target) is the context-free reference used for these controlled WAM comparisons. The default controlled WAM models share dense future targets; it is distinct from the regular repeated-terminal Cosmos Policy in the RoboCasa table. k counts complete context interactions.","95% intervals cluster over goal windows; p-values use paired McNemar tests. Δ is in percentage points versus matched dense Cosmos Policy, printed to one decimal exactly as in the table (for example, +12.4; the prose reports +12.38). Unreported intervals and comparisons remain —.","RDD=0 evaluates the same DDM k=8 checkpoint with its residual descriptor zeroed; its 45.25% success merely equals the CP rate numerically. The dynamics oracle supplies ground-truth dynamics through the same modulation interface. IPA Policy+ uses complete interactions and is a scaled adaptation; its 12,000-iteration result is descriptive, versus 10,000 iterations for the matched models.","All experiments are in simulation. Each model is trained once; reported intervals describe evaluation-unit variation, not variation across training runs. Values retain the manuscript's printed precision. — means not reported, not zero."],"provenance":{"label":"tab:policy","line":603,"sha256":"ea01f6e1488d70f1fa8a65911b7aec1c56dd80489e6382d43a09db50895658fc"}},{"id":"toss-wam","tab":"Toss WAM","title":"Toss-cube · World-action model","columns":["Method / context interactions k","Unseen goals (cm; n=480) ↓","Unseen dynamics (cm; n=616) ↓"],"rows":[{"cells":["Cosmos Policy (matched dense target)","10.42","7.08"],"source_cells":["Cosmos Policy (matched)","~\\num{10.42}","~\\num{7.08}"]},{"cells":["Two-stage history, k=2","1.29","3.03"],"source_cells":["Two-stage hist., $k=2$","\\textbf{\\num{1.29}}","~\\num{3.03}"]},{"cells":["Two-stage history, k=4","1.29","3.05"],"source_cells":["Two-stage hist., $k=4$","\\textbf{\\num{1.29}}","~\\num{3.05}"]},{"cells":["Two-stage history, k=8","1.36","3.05"],"source_cells":["Two-stage hist., $k=8$","~\\num{1.36}","~\\num{3.05}"]},{"cells":["DDM, k=2","1.40","3.08"],"source_cells":["\\method{}, $k=2$","~\\num{1.40}","~\\num{3.08}"]},{"cells":["DDM, k=4","1.36","3.03"],"source_cells":["\\method{}, $k=4$","~\\num{1.36}","~\\num{3.03}"]},{"cells":["DDM, k=8","1.38","2.95"],"source_cells":["\\textbf{\\method{}, $k=8$}","~\\num{1.38}","\\textbf{\\num{2.95}}"]}],"notes":["Oracle-relative landing regret, not raw goal distance: generated actions are snapped to the nearest of 180 pre-rolled candidate actions and scored relative to the oracle in the same dynamics regime. Lower is better; the lookup protocol has an empirical floor of 1.2 cm.","Unseen goals: 480 pairs over 24 trained dynamics regimes. Unseen dynamics: 616 pairs over 11 held-out regimes. k counts complete same-regime context interactions.","Cosmos Policy (matched dense target) is the context-free reference. Controlled WAM comparisons share dense targets; two-stage history and DDM share the reference warm start, context budget, encoder path, store, and optimization. No confidence intervals are reported in this table.","All experiments are in simulation. Each model is trained once; reported intervals describe evaluation-unit variation, not variation across training runs. Values retain the manuscript's printed precision. — means not reported, not zero."],"provenance":{"label":"tab:toss-wam","line":654,"sha256":"c93e61d42978d257c03d4049d35ad25161b70434f2e6df38a479d1b855e94e78"}},{"id":"robocasa","tab":"RoboCasa · 24 tasks","title":"RoboCasa · 24-task world-action model evaluation","columns":["Task","Cosmos Policy (%) ↑","DDM-pred (%) ↑","Δ (pp)"],"rows":[{"cells":["PnP Counter→Cab.","22.0","17.3","-4.7"],"source_cells":["PnP Counter$\\to$Cab.","~\\num{22.0}","~\\num{17.3}","~\\num{-4.7}"]},{"cells":["PnP Cab.→Counter","9.3","12.7","+3.4"],"source_cells":["PnP Cab.$\\to$Counter","~\\num{9.3}","\\textbf{\\num{12.7}}","\\textbf{\\num{+3.4}}"]},{"cells":["PnP Counter→Sink","16.0","23.3","+7.3"],"source_cells":["PnP Counter$\\to$Sink","~\\num{16.0}","\\textbf{\\num{23.3}}","\\textbf{\\num{+7.3}}"]},{"cells":["PnP Sink→Counter","25.3","27.3","+2.0"],"source_cells":["PnP Sink$\\to$Counter","~\\num{25.3}","\\textbf{\\num{27.3}}","\\textbf{\\num{+2.0}}"]},{"cells":["PnP Counter→Micro.","4.7","10.7","+6.0"],"source_cells":["PnP Counter$\\to$Micro.","~\\num{4.7}","\\textbf{\\num{10.7}}","\\textbf{\\num{+6.0}}"]},{"cells":["PnP Micro.→Counter","13.3","19.3","+6.0"],"source_cells":["PnP Micro.$\\to$Counter","~\\num{13.3}","\\textbf{\\num{19.3}}","\\textbf{\\num{+6.0}}"]},{"cells":["PnP Counter→Stove","6.7","11.3","+4.6"],"source_cells":["PnP Counter$\\to$Stove","~\\num{6.7}","\\textbf{\\num{11.3}}","\\textbf{\\num{+4.6}}"]},{"cells":["PnP Stove→Counter","9.3","12.0","+2.7"],"source_cells":["PnP Stove$\\to$Counter","~\\num{9.3}","\\textbf{\\num{12.0}}","\\textbf{\\num{+2.7}}"]},{"cells":["Open single door","42.7","48.0","+5.3"],"source_cells":["Open single door","~\\num{42.7}","\\textbf{\\num{48.0}}","\\textbf{\\num{+5.3}}"]},{"cells":["Close single door","64.7","81.3","+16.6"],"source_cells":["Close single door","~\\num{64.7}","\\textbf{\\num{81.3}}","\\textbf{\\num{+16.6}}"]},{"cells":["Open double door","48.7","71.3","+22.6"],"source_cells":["Open double door","~\\num{48.7}","\\textbf{\\num{71.3}}","\\textbf{\\num{+22.6}}"]},{"cells":["Close double door","45.3","52.0","+6.7"],"source_cells":["Close double door","~\\num{45.3}","\\textbf{\\num{52.0}}","\\textbf{\\num{+6.7}}"]},{"cells":["Open drawer","44.0","51.3","+7.3"],"source_cells":["Open drawer","~\\num{44.0}","\\textbf{\\num{51.3}}","\\textbf{\\num{+7.3}}"]},{"cells":["Close drawer","93.3","95.3","+2.0"],"source_cells":["Close drawer","~\\num{93.3}","\\textbf{\\num{95.3}}","\\textbf{\\num{+2.0}}"]},{"cells":["Turn on stove","34.0","36.0","+2.0"],"source_cells":["Turn on stove","~\\num{34.0}","\\textbf{\\num{36.0}}","\\textbf{\\num{+2.0}}"]},{"cells":["Turn off stove","17.3","16.7","-0.6"],"source_cells":["Turn off stove","~\\num{17.3}","~\\num{16.7}","~\\num{-0.6}"]},{"cells":["Turn on sink faucet","70.7","46.7","-24.0"],"source_cells":["Turn on sink faucet","~\\num{70.7}","~\\num{46.7}","~\\num{-24.0}"]},{"cells":["Turn off sink faucet","72.7","79.3","+6.6"],"source_cells":["Turn off sink faucet","~\\num{72.7}","\\textbf{\\num{79.3}}","\\textbf{\\num{+6.6}}"]},{"cells":["Turn sink spout","78.0","78.7","+0.7"],"source_cells":["Turn sink spout","~\\num{78.0}","\\textbf{\\num{78.7}}","\\textbf{\\num{+0.7}}"]},{"cells":["Coffee: setup mug","8.7","8.7","0.0"],"source_cells":["Coffee: setup mug","~\\num{8.7}","~\\num{8.7}","~\\num{0.0}"]},{"cells":["Coffee: serve mug","32.7","34.0","+1.3"],"source_cells":["Coffee: serve mug","~\\num{32.7}","\\textbf{\\num{34.0}}","\\textbf{\\num{+1.3}}"]},{"cells":["Coffee: press button","40.0","54.7","+14.7"],"source_cells":["Coffee: press button","~\\num{40.0}","\\textbf{\\num{54.7}}","\\textbf{\\num{+14.7}}"]},{"cells":["Turn on microwave","33.3","32.0","-1.3"],"source_cells":["Turn on microwave","~\\num{33.3}","~\\num{32.0}","~\\num{-1.3}"]},{"cells":["Turn off microwave","77.3","58.0","-19.3"],"source_cells":["Turn off microwave","~\\num{77.3}","~\\num{58.0}","~\\num{-19.3}"]},{"cells":["Mean (24 tasks)","37.9","40.7","+2.8"],"source_cells":["\\textbf{Mean (24 tasks)}","~\\num{37.9}","\\textbf{\\num{40.7}}","\\textbf{\\num{+2.8}}"]}],"notes":["Task success and the unweighted 24-task macro average; higher is better. Δ is DDM-pred minus Cosmos Policy in percentage points. PnP = pick-and-place; Cab. = cabinet; Micro. = microwave.","Regular Cosmos Policy uses repeated-terminal future supervision. DDM-pred changes only that target to four distributed future observations within the same latent budget. This comparison has no DDM-cond residual conditioning and no controlled dynamics shifts; it is separate from the matched dense CP references in the controlled WAM tables.","Both arms train for 100,000 iterations on eight H100 GPUs. This is a descriptive single-checkpoint comparison, with no confidence intervals or significance tests reported. 18 tasks improve, 1 ties, and 5 decline. Macro averages and deltas retain the manuscript's printed precision.","All experiments are in simulation. Each model is trained once; reported intervals describe evaluation-unit variation, not variation across training runs. Values retain the manuscript's printed precision. — means not reported, not zero."],"provenance":{"label":"tab:robocasa","line":697,"sha256":"9e1c128d49b3930b68c56ebe4dd1093e0860a42c0c92e94b53b3ee63d1d35d8a"}}]};
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
        // Preserve the manuscript's emphasis, including history wins on toss WAM.
        // A DDM label alone never implies that its metric is the best result.
        if (row.source_cells[index].includes('\\textbf')) cell.append(element('strong', value));
        else cell.textContent = value;
        if (index === 0 && /^DDM\b/.test(value)) cell.className = 'ddm-method';
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
