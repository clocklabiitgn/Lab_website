/* =========================================================================
   CLOCK Lab website — site engine
   -------------------------------------------------------------------------
   You should not need to edit this file. All CONTENT lives either in the
   DEFAULTS block below (the built-in fallback) or, once connected, in your
   Google Sheet. See EDITING_GUIDE.md.
   ========================================================================= */
(function () {
  'use strict';

  /* ---------- built-in fallback content (used until a Google Sheet is set,
       and as a safety net if the sheet can't be reached) ---------- */
  var DEFAULTS = {
    home: {
      heroSub: 'Computational Lab of Circadian Komplexes',
      heroIntro: 'We study how molecular clocks keep time inside living cells — combining integrative structural modeling, mathematical modeling and network biology to understand the dynamics of biomacromolecules across a 24‑hour cycle.',
      piName: 'Prof. Ashutosh Srivastava',
      piRole: 'Principal Investigator',
      piBio: 'Works at the interface of structural biology, biophysics and computation to understand circadian rhythms and the dynamics of macromolecular complexes.',
      piPhoto: '',
      groupPhoto: '',
      piScholar: '',
      piEmail: 'ashutosh.s@iitgn.ac.in',
      joinText: 'We welcome candidates with a background in computer science, physics, bioinformatics or structural biology, with an inclination toward interdisciplinary research. Ph.D. positions are filled through the IIT Gandhinagar admissions process.',
      hiringText: '',
      contactAddress: 'Biological Sciences & Engineering\nIIT Gandhinagar, Palaj\nGandhinagar, Gujarat 382055, India',
      contactEmail: 'ashutosh.s@iitgn.ac.in',
      accentColor: '#7fd8c8'
    },
    research: [
      { key: 'clock', title: 'Circadian Clock Proteins', label: 'Clock proteins', description: 'REV-ERB nuclear receptors, cryptochromes CRY1/CRY2, and core clock kinases: we study how these molecules change shape to switch the clock on and off, and how those changes can be tuned pharmacologically.', image: 'https://iitgncompbio.files.wordpress.com/2021/06/schematic.png' },
      { key: 'structural', title: 'Structural Dynamics & Integrative Modeling', label: 'Structural dynamics', description: 'Cryo-EM, NMR, XRD, SAXS and XFEL data rarely tell the whole story alone. We combine them with molecular dynamics and computational modeling to reconstruct how large biomolecular assemblies move.', image: 'https://iitgncompbio.files.wordpress.com/2021/06/integrative_modeling-1.png' },
      { key: 'network', title: 'Network & Mathematical Biology', label: 'Network & math biology', description: 'Graph-theoretic and mathematical models of allostery and multilayer biological systems reveal how local structural change propagates into system-level behavior.', image: 'https://iitgncompbio.files.wordpress.com/2021/06/multilayer_net.png' }
    ],
    members: [
      { name: 'Shashank Singh', category: 'PhD Student', bio: 'Builds large-scale ODE models of the plant circadian regulatory network to understand how feedback loops and environmental inputs generate robust ~24-hour rhythms and seasonal adaptation.', photo: '', linkedin: '', scholar: 'https://scholar.google.com/citations?user=BgdFXVMAAAAJ&hl=en', github: '', themes: ['clock', 'network'] },
      { name: 'Shriyansh Srivastava', category: 'PhD Student', bio: 'Explores how circadian rhythms, gene networks and muscle biology intersect — from small-molecule mechanisms to the structural interplay between MYOD1 and BMAL1.', photo: '', linkedin: 'https://www.linkedin.com/in/shriyansh-srivastava-shrey-he-him-372218126/', scholar: 'https://scholar.google.com/citations?user=yd78qMMAAAAJ&hl=en', github: '', themes: ['clock', 'structural', 'network'] },
      { name: 'Karthik Sudarsanam', category: 'PhD Student', bio: 'Studies macromolecular structure and dynamics computationally, focused on the core clock transcription factor that regulates circadian rhythm.', photo: '', linkedin: 'https://www.linkedin.com/in/karthik-sudarsanam-8597a21a4/?originalSubdomain=in', scholar: 'https://scholar.google.com/citations?user=ZkWiIsYAAAAJ&hl=en', github: '', themes: ['clock', 'structural'] },
      { name: 'Yashasvi Rao', category: 'PhD Student', bio: 'Uses molecular dynamics and wet-lab methods to compare ligand-bound and unbound REV-ERB isoform structures, refining how these nuclear receptors act as repressors.', photo: '', linkedin: '', scholar: '', github: '', themes: ['clock', 'structural'] },
      { name: 'Pooja Roham', category: 'PhD Student', bio: 'Studies the circadian clock as a target in oral cancer, combining computational and experimental approaches toward better treatment and diagnosis.', photo: '', linkedin: '', scholar: '', github: '', themes: ['clock', 'structural'] },
      { name: 'Prithvinath Gollakota', category: 'PhD Student', bio: 'Runs all-atom molecular dynamics simulations of Tau aggregation in Tauopathies, aiming to identify small-molecule modulators that disrupt aggregation pathways.', photo: '', linkedin: 'https://in.linkedin.com/in/gollakota-prithvinath-5b912a12a', scholar: '', github: '', themes: ['structural'] },
      { name: 'Shreya', category: 'M.Tech Student', bio: 'Investigates the activation mechanism of the allatostatin receptor, an insect GPCR and emerging pest-control target, using molecular dynamics and docking.', photo: '', linkedin: '', scholar: '', github: '', themes: ['structural'] },
      { name: 'Bibhu Sahoo', category: 'M.Tech Student', bio: 'Develops ODE and nonlinear-dynamics models of plant gene regulatory networks to understand their response to natural light and temperature.', photo: '', linkedin: '', scholar: '', github: '', themes: ['clock', 'network'] },
      { name: 'Kaushal S', category: 'M.Tech Student', bio: 'Studies REV-ERB protein structure and interaction mechanisms, combining computational biology with drug-design approaches.', photo: '', linkedin: 'https://www.linkedin.com/in/kaushal-s-68952025a/', scholar: '', github: '', themes: ['clock', 'structural'] }
    ],
    alumni: [
      { name: 'Aditi Moharana' },
      { name: 'Vaishnavi Tiwari' },
      { name: 'Vidushi' },
      { name: 'Nitya' }
    ],
    publications: [
      { year: '2024', title: 'Decoding the plant clock: a review of mathematical models for the circadian regulatory network', authors: 'Singh SK, Srivastava A', journal: 'Plant Molecular Biology, 114, 93', link: 'https://doi.org/10.1007/s11103-024-01493-2', themes: ['clock', 'network'] },
      { year: '2024', title: 'Investigating REV-ERBβ Binding Pocket Dynamics with Implications for Rational Design of Small Molecule Modulators', authors: 'Srivastava S, Thakur R, Srivastava A', journal: 'bioRxiv, 2024.04.13.589008', link: 'https://doi.org/10.1101/2024.04.13.589008', themes: ['clock', 'structural'] },
      { year: '2024', title: 'Influence of Protein Nativity on the Stability of Bovine Serum Albumin Coated Microbubbles', authors: 'Dhara P, Shah N, Sundaram V, Srivastava A, Solovev AA, Mei Y, Gorin DA, Dey KK', journal: 'iScience, 109286', link: '', themes: ['structural'] },
      { year: '2022', title: 'Network approach to understand biological systems: From single to multilayer networks', authors: 'Chaudhuri S, Srivastava A', journal: 'Journal of Biosciences, 47(4), 1–18', link: '', themes: ['network'] },
      { year: '2022', title: 'Light-Control over Casein Kinase 1δ Activity with Photopharmacology: A Clear Case for Arylazopyrazole-Based Inhibitors', authors: 'Schulte AM, Kolarski D, Sundaram V, Srivastava A, Tama F, Feringa BL, Szymanski W', journal: 'International Journal of Molecular Sciences, 23(10), 5326', link: '', themes: ['clock', 'structural'] },
      { year: '2022', title: 'Virtual screening of phytochemicals from Indian medicinal plants against the endonuclease domain of SFTS virus L polymerase', authors: 'Vivek-Ananth RP, Sahoo AK, Srivastava A, Samal A', journal: 'RSC Advances, 12(10), 6234–6247', link: '', themes: ['structural'] },
      { year: '2021', title: 'Structural differences in the FAD-binding pockets and lid loops of mammalian CRY1 and CRY2 for isoform-selective regulation', authors: 'Miller S, Srivastava A, Nagai Y, Aikawa Y, Tama F, Hirota T', journal: 'PNAS, 118(26), e2026191118', link: '', themes: ['clock', 'structural'] },
      { year: '2021', title: 'Reversible Modulation of Circadian Time with Chronophotopharmacology', authors: 'Kolarski D, Miró Vinyals C, Sugiyama A, Itami K, Srivastava A, Tama F, Szymanski W, Hirota T, Feringa BL', journal: 'Nature Communications, 12, 3164', link: '', themes: ['clock'] },
      { year: '2021', title: 'Photopharmacological Manipulation of Mammalian CRY1 for Regulation of the Circadian Clock', authors: 'Kolarski D, Miller S, Oshima T, Nagai Y, Aoki Y, Kobauri P, Srivastava A, et al.', journal: 'Journal of the American Chemical Society, 143(4), 2078–2087', link: '', themes: ['clock', 'structural'] },
      { year: '2020', title: 'Small conformational changes underlie evolution of resistance to NNRTI in HIV Reverse Transcriptase', authors: 'Srivastava A, Birari V, Sinha S', journal: 'Biophysical Journal, 118, 2489–2501', link: '', themes: ['structural'] },
      { year: '2020', title: 'Isoform-selective regulation of mammalian cryptochromes', authors: 'Miller S, Son YL, Aikawa Y, Makino E, Nagai Y, Srivastava A, et al.', journal: 'Nature Chemical Biology, 16, 676–685', link: '', themes: ['clock', 'structural'] },
      { year: '2020', title: 'Dynamics at the serine loop underlie differential affinity of cryptochromes for CLOCK:BMAL1 to control circadian timing', authors: 'Fribourgh J, Srivastava A, Sandate C, et al.', journal: 'eLife, 9, e55275', link: '', themes: ['clock', 'structural'] },
      { year: '2020', title: 'Integrative/Hybrid modeling approaches for studying biomolecules', authors: 'Srivastava A, Tiwari SP, Miyashita O, Tama F', journal: 'Journal of Molecular Biology, 432, 2846–2860', link: '', themes: ['structural'] },
      { year: '2019', title: 'Bipartite anchoring of SCREAM enforces stomatal initiation by coupling MAP Kinases to SPEECHLESS', authors: 'Putarjunan A, Ruble J, Srivastava A, et al.', journal: 'Nature Plants, 5, 742–754', link: '', themes: ['network'] },
      { year: '2019', title: 'Cell-based screen identifies a new potent and highly selective CK2 inhibitor for modulation of circadian rhythms and cancer cell growth', authors: 'Oshima T, Niwa Y, Kuwata K, Srivastava A, et al.', journal: 'Science Advances, 5(1), eaau9060', link: '', themes: ['clock'] },
      { year: '2018', title: 'Role of computational methods in going beyond X-ray crystallography to explore protein structure and dynamics', authors: 'Srivastava A, Nagai T, Srivastava A, Miyashita O, Tama F', journal: 'International Journal of Molecular Sciences, 19(11), 3401', link: '', themes: ['structural'] },
      { year: '2018', title: 'Conformational dynamics of human protein kinase CK2α and its effect on function and inhibition', authors: 'Srivastava A, Hirota T, Irle S, Tama F', journal: 'Proteins, 86, 344–353', link: '', themes: ['structural'] },
      { year: '2017', title: 'Uncoupling of ammonia channel as a mechanism of allosteric inhibition in anthranilate synthase of Serratia marcescens: dynamic and graph theoretic analysis', authors: 'Srivastava A, Sinha S', journal: 'Molecular BioSystems, 13, 142–155', link: '', themes: ['network', 'structural'] },
      { year: '2014', title: 'Thermostability of In Vitro Evolved Bacillus subtilis Lipase A: A Network and Dynamics Perspective', authors: 'Srivastava A, Sinha S', journal: 'PLoS ONE, 9(8), e102856', link: '', themes: ['network', 'structural'] }
    ],
    news: [
      
    ]
  };

  /* ---------- state + config ---------- */
  var CONTENT = DEFAULTS;
  var THEME_LABELS = {};
  var state = { activeMember: null, activeThemes: [] };
  var revealed = {};
  var CALM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- helpers ---------- */
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function slug(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }
  function initials(name) {
    var p = String(name || '').trim().split(/\s+/);
    return ((p[0] || '')[0] || '') + (p.length > 1 ? (p[p.length-1][0] || '') : '');
  }
  function splitThemes(s) {
    if (Array.isArray(s)) return s;
    return String(s || '').split(/[,;/]+/).map(function (x) { return x.trim().toLowerCase(); }).filter(Boolean);
  }
  function roleLabel(cat) {
    var c = String(cat || '').toLowerCase();
    if (c.indexOf('postdoc') > -1) return 'Postdoctoral Researcher';
    if (c.indexOf('phd') > -1 || c.indexOf('ph.d') > -1) return 'PhD Scholar';
    if (c.indexOf('tech') > -1) return 'M.Tech Student';
    if (c.indexOf('staff') > -1) return 'Research Staff';
    return cat || 'Member';
  }
  function groupOf(cat) {
    var c = String(cat || '').toLowerCase();
    if (c.indexOf('postdoc') > -1) return 'postdoc';
    if (c.indexOf('phd') > -1 || c.indexOf('ph.d') > -1) return 'phd';
    if (c.indexOf('tech') > -1) return 'mtech';
    if (c.indexOf('staff') > -1) return 'staff';
    return 'other';
  }
  var GROUP_ORDER = [
    { key: 'postdoc', label: 'Postdoctoral Researchers' },
    { key: 'phd', label: 'PhD Scholars' },
    { key: 'mtech', label: 'M.Tech Students' },
    { key: 'staff', label: 'Research Staff' },
    { key: 'other', label: 'Members' }
  ];

  function avatarHTML(name, photo, cls) {
    if (photo) return '<img class="avatar ' + cls + '" src="' + esc(photo) + '" alt="' + esc(name) + '">';
    return '<div class="avatar ' + cls + '">' + esc(initials(name).toUpperCase()) + '</div>';
  }

  /* ---------- theme labels derived from Research rows ---------- */
  function buildThemeLabels() {
    THEME_LABELS = {};
    CONTENT.research.forEach(function (r) {
      if (r.key) THEME_LABELS[r.key] = r.label || r.title || r.key;
    });
  }

  /* ============================ RENDERING ============================ */

  function renderHome() {
    var h = CONTENT.home || {};
    $('heroSub').textContent = h.heroSub || '';
    $('heroIntro').textContent = h.heroIntro || '';
    $('heroPi').textContent = h.piName ? ('Led by ' + h.piName) : '';
    $('joinText').textContent = h.joinText || '';

    var jb = $('joinBtns');
    jb.innerHTML = '';
    if (h.contactEmail) {
      jb.innerHTML += '<a class="btn-ink" href="mailto:' + esc(h.contactEmail) + '">Email with CV &amp; research interests</a>';
    }
    jb.innerHTML += '<a class="btn-out" href="https://iitgn.ac.in" target="_blank" rel="noopener">IITGN admissions</a>';

    var addr = $('contactAddr');
    addr.innerHTML = esc(h.contactAddress || '').replace(/\n/g, '<br>');
    var em = $('contactEmail');
    em.textContent = h.contactEmail || '';
    em.href = 'mailto:' + (h.contactEmail || '');

    $('footer').textContent = 'CLOCK Lab — Computational Biology @ IIT Gandhinagar · ' + (new Date()).getFullYear();

    if (h.accentColor) document.documentElement.style.setProperty('--accent', h.accentColor);
  }

  function renderNews() {
    var box = $('news-strip');
    var items = (CONTENT.news || []).filter(function (n) { return n.title; });
    if (!items.length) { box.innerHTML = ''; return; }
    box.innerHTML = items.slice(0, 3).map(function (n) {
      var inner = (n.date ? '<b>' + esc(n.date) + '</b>' : '') + esc(n.title);
      return n.link
        ? '<a class="news-pill" href="' + esc(n.link) + '" target="_blank" rel="noopener">' + inner + '</a>'
        : '<span class="news-pill">' + inner + '</span>';
    }).join('');
  }

  function membersForTheme(key) {
    return CONTENT.members.filter(function (m) { return (m.themes || []).indexOf(key) > -1; });
  }

  function renderResearch() {
    var box = $('research-cards');
    box.innerHTML = CONTENT.research.map(function (r, idx) {
      var hl = state.activeThemes.indexOf(r.key) > -1;
      var who = membersForTheme(r.key);
      var dots = [0,1,2,3].map(function (d) {
        var sz = 8 + d, op = (0.85 - d * 0.12).toFixed(2), dur = 9 + d * 2;
        return '<div class="ring" style="transform:rotate(' + (d*90) + 'deg)">' +
                 '<div class="spin" style="animation-duration:' + dur + 's">' +
                   '<div class="dot" style="width:' + sz + 'px;height:' + sz + 'px;opacity:' + op + '"></div>' +
                 '</div></div>';
      }).join('');
      var whoHTML = who.length ? (
        '<div class="whobox"><div class="wholabel">Worked on by</div><div>' +
        who.map(function (m) { return '<button class="chip" data-goto-member="' + esc(slug(m.name)) + '">' + esc(m.name) + ' →</button>'; }).join('') +
        '</div></div>'
      ) : '';
      return '<div class="rcard' + (hl ? ' hl' : '') + '" id="research-' + esc(r.key) + '">' +
        '<div class="rcard-img">' + (r.image ? '<img src="' + esc(r.image) + '" alt="' + esc(r.title) + '">' : '') + '</div>' +
        '<div class="rcard-body">' +
          '<div class="orbit" data-idx="' + idx + '">' + dots + '</div>' +
          '<h3>' + esc(r.title) + '</h3>' +
          '<p>' + esc(r.description) + '</p>' +
          whoHTML +
        '</div></div>';
    }).join('');
  }

  function renderPeople() {
    var h = CONTENT.home || {};
    var gp = $('group-photo');
    if (h.groupPhoto) {
      gp.innerHTML = '<img src="' + esc(h.groupPhoto) + '" alt="The CLOCK Lab group">';
      gp.style.display = 'block';
    } else {
      gp.innerHTML = ''; gp.style.display = 'none';
    }
    $('pi-row').innerHTML =
      avatarHTML(h.piName, h.piPhoto, 'pi-avatar') +
      '<div class="pi-info">' +
        '<h3>' + esc(h.piName || '') + '</h3>' +
        '<div class="role">' + esc(h.piRole || 'Principal Investigator') + '</div>' +
        '<p>' + esc(h.piBio || '') + '</p>' +
        '<div class="linkrow">' +
          (h.piScholar ? '<a href="' + esc(h.piScholar) + '" target="_blank" rel="noopener">Google Scholar</a>' : '') +
          (h.piEmail ? '<a href="mailto:' + esc(h.piEmail) + '">Email</a>' : '') +
        '</div>' +
      '</div>';

    var groups = {};
    CONTENT.members.forEach(function (m) {
      var g = groupOf(m.category);
      (groups[g] = groups[g] || []).push(m);
    });

    var html = '';
    GROUP_ORDER.forEach(function (grp) {
      var list = groups[grp.key];
      if (!list || !list.length) return;
      html += '<div class="group-label">' + esc(grp.label) + '</div><div class="people-grid">';
      html += list.map(function (m) {
        var id = slug(m.name);
        var active = state.activeMember === m.name;
        var links = [];
        if (m.linkedin) links.push('<a href="' + esc(m.linkedin) + '" target="_blank" rel="noopener" data-stop>LinkedIn</a>');
        if (m.scholar) links.push('<a href="' + esc(m.scholar) + '" target="_blank" rel="noopener" data-stop>Scholar</a>');
        if (m.github) links.push('<a href="' + esc(m.github) + '" target="_blank" rel="noopener" data-stop>GitHub</a>');
        var pills = (m.themes || []).map(function (k) {
          return '<button class="pill' + (state.activeThemes.indexOf(k) > -1 ? ' on' : '') + '" data-theme="' + esc(k) + '" data-stop>' + esc(THEME_LABELS[k] || k) + '</button>';
        }).join('');
        return '<div class="pcard' + (active ? ' active' : '') + '" id="member-' + esc(id) + '" data-member="' + esc(m.name) + '">' +
          avatarHTML(m.name, m.photo, 'm-avatar') +
          '<h4>' + esc(m.name) + '</h4>' +
          '<div class="role">' + esc(roleLabel(m.category)) + '</div>' +
          '<p>' + esc(m.bio || '') + '</p>' +
          '<div style="margin-bottom:12px">' + pills + '</div>' +
          (links.length ? '<div class="linkrow">' + links.join('') + '</div>' : '') +
          '<button class="pubbtn" data-pubs="' + esc(m.name) + '" data-stop>PUBLICATIONS →</button>' +
        '</div>';
      }).join('');
      html += '</div>';
    });
    $('people-groups').innerHTML = html;

    // alumni
    var al = (CONTENT.alumni || []).filter(function (a) { return a.name; });
    $('alumni-wrap').innerHTML = al.length
      ? '<div class="group-label">Alumni</div><div class="alumni-list">' +
        al.map(function (a) { return '<span>' + esc(a.name) + '</span>'; }).join('') + '</div>'
      : '';

    // hiring
    var h2 = CONTENT.home || {};
    $('hiring-wrap').innerHTML = h2.hiringText
      ? '<div class="hiring"><div><div class="tag">WE\'RE HIRING</div><div class="txt">' + esc(h2.hiringText) + '</div></div>' +
        '<a class="btn-solid" href="mailto:' + esc(h2.contactEmail || '') + '">Get in touch →</a></div>'
      : '';
  }

  function renderPubs() {
    var box = $('pub-list');
    box.innerHTML = CONTENT.publications.map(function (p, idx) {
      var hl = (p.themes || []).some(function (k) { return state.activeThemes.indexOf(k) > -1; });
      var titleHTML = p.link
        ? '<a href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(p.title) + '</a>'
        : esc(p.title);
      var pills = (p.themes || []).map(function (k) {
        return '<button class="pubpill' + (state.activeThemes.indexOf(k) > -1 ? ' on' : '') + '" data-theme="' + esc(k) + '">' + esc(THEME_LABELS[k] || k) + '</button>';
      }).join('');
      return '<div class="pubrow' + (hl ? ' hl' : '') + '" id="pub-' + idx + '">' +
        '<div class="pubyear">' + esc(p.year) + '</div>' +
        '<div><div class="pubtitle">' + titleHTML + '</div>' +
          '<div class="pubauth">' + esc(p.authors) + '</div>' +
          '<div class="pubjour">' + esc(p.journal) + '</div>' +
          '<div>' + pills + '</div>' +
        '</div></div>';
    }).join('');
  }

  function renderFilterBar() {
    var bar = $('filterbar');
    var on = !!state.activeMember || state.activeThemes.length > 0;
    bar.classList.toggle('show', on);
    if (!on) return;
    var labels = state.activeThemes.map(function (k) { return THEME_LABELS[k] || k; }).join(' · ');
    $('fb-txt').innerHTML = state.activeMember
      ? esc('Showing ' + state.activeMember + "'s work") + ' <em>· ' + esc(labels) + '</em>'
      : '<em>Filtered by ' + esc(labels) + '</em>';
    var count = CONTENT.publications.filter(function (p) {
      return (p.themes || []).some(function (k) { return state.activeThemes.indexOf(k) > -1; });
    }).length;
    $('fb-pubs').textContent = count + ' paper' + (count === 1 ? '' : 's') + ' →';
  }

  function renderDynamic() { renderResearch(); renderPeople(); renderPubs(); renderFilterBar(); }

  /* ---------- interactions (event delegation) ---------- */
  function scrollToId(id) {
    var el = $(id); if (!el) return;
    var top = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }
  function toggleMember(name) {
    var m = CONTENT.members.filter(function (x) { return x.name === name; })[0];
    if (!m) return;
    if (state.activeMember === name) { state.activeMember = null; state.activeThemes = []; }
    else { state.activeMember = name; state.activeThemes = (m.themes || []).slice(); }
    renderDynamic();
  }
  function selectMemberPubs(name) {
    var m = CONTENT.members.filter(function (x) { return x.name === name; })[0];
    if (!m) return;
    state.activeMember = name; state.activeThemes = (m.themes || []).slice();
    renderDynamic(); scrollToId('publications');
  }
  function selectTheme(key) {
    var only = state.activeThemes.length === 1 && state.activeThemes[0] === key;
    if (only) { state.activeThemes = []; state.activeMember = null; }
    else { state.activeThemes = [key]; state.activeMember = null; }
    renderDynamic(); scrollToId('research-' + key);
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-goto-member],[data-theme],[data-pubs],[data-member],[data-stop]');
    if (!t) return;
    if (t.hasAttribute('data-goto-member')) { var id = t.getAttribute('data-goto-member'); var mm = CONTENT.members.filter(function(x){return slug(x.name)===id;})[0]; if (mm){ state.activeMember=mm.name; state.activeThemes=(mm.themes||[]).slice(); renderDynamic(); scrollToId('member-'+id);} return; }
    if (t.hasAttribute('data-theme')) { e.preventDefault(); selectTheme(t.getAttribute('data-theme')); return; }
    if (t.hasAttribute('data-pubs')) { e.preventDefault(); selectMemberPubs(t.getAttribute('data-pubs')); return; }
    if (t.tagName === 'A' && t.hasAttribute('data-stop')) { e.stopPropagation(); return; }
    if (t.hasAttribute('data-member')) { toggleMember(t.getAttribute('data-member')); return; }
  });

  $('fb-clear').addEventListener('click', function () { state.activeMember = null; state.activeThemes = []; renderDynamic(); });
  $('fb-pubs').addEventListener('click', function () { scrollToId('publications'); });
  $('fb-research').addEventListener('click', function () { if (state.activeThemes[0]) scrollToId('research-' + state.activeThemes[0]); });

  // card hover parallax
  document.addEventListener('mousemove', function (e) {
    if (CALM) return;
    var orbit = e.target.closest('.orbit'); if (!orbit) return;
    var r = orbit.getBoundingClientRect();
    var x = (e.clientX - r.left) / r.width - 0.5;
    var y = (e.clientY - r.top) / r.height - 0.5;
    orbit.style.transform = 'translate(' + (x*10).toFixed(1) + 'px,' + (y*10).toFixed(1) + 'px)';
  });
  document.addEventListener('mouseout', function (e) {
    var orbit = e.target.closest('.orbit'); if (orbit) orbit.style.transform = 'translate(0,0)';
  });

  /* ---------- circadian sky engine (scroll-driven) ---------- */
  var SKY_STOPS = [
    { h:0, top:'#070b1f', bottom:'#141b3d', sun:0, moon:1, stars:1 },
    { h:3, top:'#0b1030', bottom:'#1c2550', sun:0, moon:1, stars:1 },
    { h:5, top:'#2b2354', bottom:'#7a4a6b', sun:0.1, moon:0.4, stars:0.6 },
    { h:6.5, top:'#e88a5c', bottom:'#f6c37a', sun:0.85, moon:0, stars:0.05 },
    { h:9, top:'#5f9fd6', bottom:'#bfe0ee', sun:1, moon:0, stars:0 },
    { h:12, top:'#3f8fd6', bottom:'#a9d8ea', sun:1, moon:0, stars:0 },
    { h:15, top:'#4a86c9', bottom:'#cfe0b8', sun:1, moon:0, stars:0 },
    { h:17.5, top:'#e2703e', bottom:'#f3b45f', sun:0.9, moon:0, stars:0.05 },
    { h:19, top:'#5b3c66', bottom:'#c15b4a', sun:0.25, moon:0.3, stars:0.3 },
    { h:21, top:'#20204a', bottom:'#4a3565', sun:0, moon:0.8, stars:0.7 },
    { h:24, top:'#070b1f', bottom:'#141b3d', sun:0, moon:1, stars:1 }
  ];
  function hexRgb(hex){ var h=hex.replace('#',''); if(h.length===3)h=h.split('').map(function(c){return c+c;}).join(''); var n=parseInt(h,16); return [(n>>16)&255,(n>>8)&255,n&255]; }
  function mix(a,b,t){ var ca=hexRgb(a),cb=hexRgb(b); return 'rgb('+Math.round(ca[0]+(cb[0]-ca[0])*t)+','+Math.round(ca[1]+(cb[1]-ca[1])*t)+','+Math.round(ca[2]+(cb[2]-ca[2])*t)+')'; }
  function sky(hour){
    var h=((hour%24)+24)%24, i=0;
    while(i<SKY_STOPS.length-2 && SKY_STOPS[i+1].h<=h) i++;
    var s0=SKY_STOPS[i], s1=SKY_STOPS[i+1], span=(s1.h-s0.h)||1, t=Math.min(1,Math.max(0,(h-s0.h)/span));
    var lp=function(a,b){return a+(b-a)*t;};
    return { top:mix(s0.top,s1.top,t), bottom:mix(s0.bottom,s1.bottom,t), sun:lp(s0.sun,s1.sun), moon:lp(s0.moon,s1.moon), stars:lp(s0.stars,s1.stars) };
  }
  var STARS = [];
  (function initStars(){
    var box=$('stars'), frag=document.createDocumentFragment();
    for(var i=0;i<16;i++){
      var l=(i*37+5)%96, t=(i*53+7)%55, size=1.5+(i%3);
      var b=document.createElement('b');
      b.style.left=l+'%'; b.style.top=t+'%'; b.style.width=size+'px'; b.style.height=size+'px';
      if(!CALM){ b.style.animation='twinkle '+(3+i%4)+'s ease-in-out infinite'; b.style.animationDelay=(i*0.3).toFixed(1)+'s'; }
      STARS.push({el:b,size:size}); frag.appendChild(b);
    }
    box.appendChild(frag);
  })();
  var raf=null;
  function updateSky(){
    raf=null;
    var max=Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    var prog=Math.min(1,Math.max(0, window.scrollY/max));
    var hour=5+prog*19;
    var c=sky(hour);
    var dayFrac=Math.min(1,Math.max(0,(hour-6)/12));
    var nightFrac=Math.min(1,Math.max(0,(((hour-18+24)%24))/12));
    $('sky').style.background='linear-gradient(180deg,'+c.top+' 0%,'+c.bottom+' 100%)';
    var sun=$('sun'); sun.style.opacity=c.sun.toFixed(2); sun.style.left=(dayFrac*88+6).toFixed(1)+'%'; sun.style.top=(92-Math.sin(dayFrac*Math.PI)*74).toFixed(1)+'%';
    var moon=$('moon'); moon.style.opacity=c.moon.toFixed(2); moon.style.left=(nightFrac*88+6).toFixed(1)+'%'; moon.style.top=(92-Math.sin(nightFrac*Math.PI)*74).toFixed(1)+'%';
    STARS.forEach(function(s){ s.el.style.opacity=(c.stars*(0.5+s.size/6)).toFixed(2); });
  }
  function onScroll(){ if(!raf) raf=requestAnimationFrame(updateSky); }
  window.addEventListener('scroll', onScroll, { passive:true });
  window.addEventListener('resize', onScroll);

  /* ---------- title clock (live local time) ---------- */
  function tick(){
    var now=new Date(), h=now.getHours()%12, m=now.getMinutes(), s=now.getSeconds();
    $('handH').style.transform='translate(-50%,-100%) rotate('+(((h+m/60)/12)*360).toFixed(1)+'deg)';
    $('handM').style.transform='translate(-50%,-100%) rotate('+(((m+s/60)/60)*360).toFixed(1)+'deg)';
  }

  /* ---------- section reveal ---------- */
  function initReveal(){
    var cards=document.querySelectorAll('.card');
    if(CALM){ cards.forEach(function(c){c.classList.add('visible');}); return; }
    if(!('IntersectionObserver' in window)){ cards.forEach(function(c){c.classList.add('visible');}); return; }
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('visible'); io.unobserve(en.target); } });
    },{ threshold:0.12 });
    cards.forEach(function(c){ io.observe(c); });
  }

  /* ============================ GOOGLE SHEETS ============================ */
  function gvizUrl(id, tab){
    return 'https://docs.google.com/spreadsheets/d/' + id + '/gviz/tq?tqx=out:json&headers=1&sheet=' + encodeURIComponent(tab);
  }
  function fetchTab(id, tab){
    return fetch(gvizUrl(id, tab)).then(function(r){ return r.text(); }).then(function(text){
      var a=text.indexOf('{'), b=text.lastIndexOf('}');
      if(a<0||b<0) throw new Error('bad gviz for '+tab);
      var json=JSON.parse(text.slice(a,b+1));
      var cols=(json.table.cols||[]).map(function(c){ return String(c.label||'').trim(); });
      return (json.table.rows||[]).map(function(row){
        var o={};
        (row.c||[]).forEach(function(cell,i){
          var key=cols[i]; if(!key) return;
          var v = cell ? (cell.f != null ? cell.f : cell.v) : '';
          o[key]= v==null ? '' : v;
        });
        return o;
      }).filter(function(o){ return Object.keys(o).some(function(k){ return String(o[k]).trim()!==''; }); });
    });
  }
  function pick(o, names){ for(var i=0;i<names.length;i++){ for(var k in o){ if(k.toLowerCase().replace(/[^a-z]/g,'')===names[i]){ return o[k]; } } } return ''; }

  function loadFromSheet(id){
    var tabs=['Home','Research','Members','Alumni','Publications','News'];
    Promise.all(tabs.map(function(t){ return fetchTab(id,t).catch(function(){ return null; }); }))
    .then(function(res){
      var home=res[0], research=res[1], members=res[2], alumni=res[3], pubs=res[4], news=res[5];
      var next=JSON.parse(JSON.stringify(DEFAULTS));

      if(home && home.length){
        var hm={};
        home.forEach(function(row){ var f=pick(row,['field'])||row[Object.keys(row)[0]]; var v=pick(row,['value'])||row[Object.keys(row)[1]]; if(f) hm[String(f).trim()]=v; });
        Object.keys(hm).forEach(function(k){ next.home[k]=hm[k]; });
      }
      if(research && research.length){
        next.research=research.map(function(r){ return {
          key: String(pick(r,['key'])||'').trim().toLowerCase(),
          title: pick(r,['title']), label: pick(r,['label']),
          description: pick(r,['description','desc']), image: pick(r,['image','img'])
        }; }).filter(function(r){ return r.key && r.title; });
      }
      if(members && members.length){
        next.members=members.map(function(m){ return {
          name: pick(m,['name']), category: pick(m,['category','role']),
          bio: pick(m,['bio']) || pick(m,['researcharea','research']),
          photo: pick(m,['photo','image']),
          linkedin: pick(m,['linkedin','linkedinprofile']),
          scholar: pick(m,['googlescholar','scholar']),
          github: pick(m,['github']),
          themes: splitThemes(pick(m,['themes','theme']))
        }; }).filter(function(m){ return m.name; });
      }
      if(alumni && alumni.length){ next.alumni=alumni.map(function(a){ return { name: pick(a,['name']) }; }).filter(function(a){return a.name;}); }
      if(pubs && pubs.length){
        next.publications=pubs.map(function(p){ return {
          year: String(pick(p,['year'])||'').replace(/\.0$/,''),
          title: pick(p,['title']), authors: pick(p,['authors','author']),
          journal: pick(p,['journal']), link: pick(p,['link','doi','url']),
          themes: splitThemes(pick(p,['themes','theme']))
        }; }).filter(function(p){ return p.title; });
      }
      if(news && news.length){
        next.news=news.map(function(n){ return { date:String(pick(n,['date'])||'').replace(/\.0$/,''), title:pick(n,['title','text']), link:pick(n,['link','url']) }; }).filter(function(n){return n.title;});
      }

      CONTENT=next;
      buildThemeLabels();
      renderHome(); renderNews(); renderDynamic();
    })
    .catch(function(err){ console.warn('CLOCK: using built-in content (sheet load failed):', err); });
  }

  /* ============================ BOOT ============================ */
  if(CALM) document.body.classList.add('calm');
  buildThemeLabels();
  renderHome(); renderNews(); renderDynamic();
  initReveal();
  updateSky();
  tick(); setInterval(tick, 1000);

  var cfg = window.CLOCK_CONFIG || {};
  if (cfg.sheetId && String(cfg.sheetId).trim()) loadFromSheet(String(cfg.sheetId).trim());
})();
