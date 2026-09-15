'use strict';
(() => {
  const state = {model:'wm', task:'push', time:4, condition:'A', full:false};
  const $ = id => document.getElementById(id);
  const media = name => `static/media/${name}.webp`;
  const wm = {
    push: {
      kicker:'Hidden center of mass', times:['0.35','0.70','1.05','1.40'],
      note:'DDM follows the digit’s translation and rotation more closely in this selected example. RGB difference maps below use the same scale; they are visual diagnostics, not the latent residual used for conditioning.',
      protocol:'Push example q50, center-of-mass offset −1.75 cm; DDM uses 8 context interactions. This case was selected from 12 inspected examples for a large foreground localization advantage. Predictions are from Cosmos-Predict2 and DDM, with a shared action. Crops are identical across methods at each timestamp; “Full frame” restores the original 224 × 224 observations. RGB error is mean absolute channel error in 8-bit units, saturated at 64. These selected pixels do not substitute for the aggregate dynamics-identification evaluation.'
    },
    toss: {
      kicker:'Hidden robot damping', times:['0.30','0.60','0.90','1.20'],
      note:'DDM better localizes the cube in this selected example. This is not a uniform photometric improvement: full-frame RGB MAE increases from 2.310 to 2.581 at the final timestamp. The benchmark reports local latent error separately.',
      protocol:'Toss example bs13_by10_a173; DDM uses 8 context interactions. Selected from 4 inspected examples for a large foreground localization advantage. Times are measured from swing start. All displayed images are recorded observations or model predictions, with a shared action and matched crops at each timestamp. “Full frame” restores the original 224 × 224 image. Difference maps are mean absolute RGB error on the same 0–64 scale; they are not RDDs.'
    }
  };
  const wam = {
    push:{
      kicker:'Hidden center of mass', conditions:{A:'Center-of-mass offset: 0 cm',B:'Center-of-mass offset: −1.75 cm'},
      metrics:{A:{reference:[5.99372,10.36168],ddm:[0.71251,0.09558]},B:{reference:[6.75175,9.31854],ddm:[0.78619,0.99519]}},
      note:'Same initial observation and goal across both dynamics conditions. Each method produces one open-loop action. DDM reaches the position and orientation thresholds in both selected cases; the goal overlay is for visualization.',
      protocol:'Goal window 505, episode 012/t25, rows 58 and 458. From 800 evaluation rows, feasible condition pairs were ranked for a large minimum position-error advantage with DDM succeeding and Cosmos Policy failing in both conditions. Success requires BOTH position error <1.5 cm and yaw error <2°. Replays reproduce the cached final states; the common crop is [66,90,198,184] in 224 × 224 source frames. The Cosmos Policy reference uses a matched dense target. These are intentionally selected examples, not average performance.'
    },
    toss:{
      kicker:'Hidden robot damping', conditions:{A:'Damping (swing, yaw): (16, 26)',B:'Damping (swing, yaw): (16, 30)'},
      metrics:{A:{reference:[25.68413],ddm:[1.07610]},B:{reference:[27.05908],ddm:[1.92011]}},
      note:'Distance is measured at the cube’s first floor contact, relative to the shared goal marker. DDM lands closer in both selected conditions. These distances are not the oracle-relative regret reported in the aggregate table.',
      protocol:'Goal 91 at (1.419806, −0.496938) m; conditions bs16_by26 and bs16_by30. Selected from 480 evaluation rows for a large method gap with both DDM landing errors ≤3 cm. Actions use the evaluation’s nearest-of-180 candidate rule. Cosmos Policy selects candidate 45 and DDM selects 100 in both displayed conditions; this example does not demonstrate a change of action between conditions. The Cosmos Policy reference uses a matched dense target. Contact-state replays reproduce the recorded results. The crop [66,99,150,159] is shared across outcomes, and the goal marker is a visualization overlay.'
    }
  };
  function press(selector,key,value){document.querySelectorAll(selector).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset[key]===value)));}
  function imageTag(name,alt,className='output-image'){return `<img class="${className}" src="${media(name)}" width="224" height="224" alt="${alt}">`;}
  function render(){
    const {task,model,time,condition,full}=state, suffix=full?'-full':'';
    press('[data-model]','model',model);press('[data-task]','task',task);press('[data-condition]','condition',condition);
    $('wm-controls').hidden=model!=='wm';$('wam-controls').hidden=model!=='wam';$('error-legend').hidden=model!=='wm';
    $('comparison').className=`comparison ${model}`;
    $('observation').src=media(model==='wm'?`${task}-wm-observation`:`${task}-wam-${condition}-initial`);
    $('observation').alt=`${task==='push'?'Push-digit':'Toss-cube'} ${model==='wm'?'current observation':'initial observation with visual goal'}`;
    $('observation-caption').textContent=model==='wm'?'Current observation':'Initial state + goal';
    $('query-caption').textContent=model==='wm'?'One recorded action, shared by both predictors':'One shared goal, one action per method';
    const config = model==='wm'?wm[task]:wam[task];
    $('example-kicker').textContent=config.kicker;
    $('task-context').textContent=task==='toss'?'Robot damping varies; cube properties are fixed.':'Hidden center of mass varies; appearance stays the same.';
    $('example-title').textContent=model==='wm'?'Same action. Which future?':'Same goal. Where does the action lead?';
    $('example-note').textContent=config.note;
    $('example-protocol').replaceChildren(Object.assign(document.createElement('p'),{textContent:config.protocol}));
    if(model==='wm'){
      // Keep existing timestamp buttons alive during updates so keyboard focus is preserved.
      const buttons=$('time-buttons');
      if(!buttons.children.length) for(let i=1;i<=4;i++){
        const b=document.createElement('button');b.type='button';b.dataset.time=String(i);
        b.addEventListener('click',()=>{state.time=i;render();});buttons.append(b);
      }
      [...buttons.children].forEach((b,i)=>{b.textContent=config.times[i]+' s';b.setAttribute('aria-pressed',String(time===i+1));b.setAttribute('aria-label',`Show future at ${config.times[i]} seconds`);});
      $('comparison').innerHTML=['actual','reference','ddm'].map(method=>{
        const label={actual:'Actual future',reference:'Cosmos-Predict2',ddm:'DDM'}[method];
        const descriptor={actual:'Simulator',reference:'Blind reference',ddm:'8 interactions'}[method];
        const main=imageTag(`${task}-wm-${method}-${time}${suffix}`,`${label}, ${task} at ${config.times[time-1]} seconds`);
        const bottom=method==='actual'?'<p class="actual-explanation">Simulator observation</p>':`<p class="diff-label">Difference from actual</p>${imageTag(`${task}-wm-${method}-diff-${time}${suffix}`,`${label} absolute RGB difference from actual future`,'error-image')}`;
        return `<article class="output-card ${method}"><h4 class="output-heading">${label}<span>${descriptor}</span></h4>${main}${bottom}</article>`;
      }).join('');
    }else{
      $('condition-detail').textContent=config.conditions[condition];
      $('comparison').innerHTML=['reference','ddm'].map(method=>{
        const values=config.metrics[condition][method];
        const label=method==='reference'?'Cosmos Policy':'DDM';
        const image=imageTag(`${task}-wam-${condition}-${method}${suffix}`,`${label} ${task} final outcome, dynamics condition ${condition}`);
        const metric=task==='push'?`<div class="metric-line"><span>Position error</span><strong>${values[0].toFixed(2)} <small>cm</small></strong></div><div class="metric-line"><span>Yaw error</span><strong>${values[1].toFixed(2)}<small>°</small></strong></div>`:`<div class="metric-line"><span>First-contact goal distance</span><strong>${values[0].toFixed(2)} <small>cm</small></strong></div>`;
        return `<article class="output-card ${method}"><h4 class="output-heading">${label}<span>${method==='reference'?'Matched dense target':'8 interactions'}</span></h4>${image}${metric}</article>`;
      }).join('');
    }
  }
  document.querySelectorAll('[data-model]').forEach(b=>b.addEventListener('click',()=>{state.model=b.dataset.model;render();}));
  document.querySelectorAll('[data-task]').forEach(b=>b.addEventListener('click',()=>{state.task=b.dataset.task;render();}));
  document.querySelectorAll('[data-condition]').forEach(b=>b.addEventListener('click',()=>{state.condition=b.dataset.condition;render();}));
  $('full-frame').addEventListener('change',e=>{state.full=e.target.checked;render();});
  render();
})();
