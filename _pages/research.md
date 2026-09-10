---
layout: splash
permalink: /research/
title: "Research"
description: "Research by Juan C. Yamin on econometric methods for decisions made with noisy data, and on the political economy of development."
---

<style>
  :root,
  html[data-theme="dark"] {
    --global-base-color: #f7f7f4;
    --global-bg-color: #f7f7f4;
    --global-footer-bg-color: #efeee9;
    --global-link-color: #8f1d2c;
    --global-link-color-hover: #5e111c;
    --global-link-color-visited: #8f1d2c;
    --global-masthead-link-color: #201b18;
    --global-masthead-link-color-hover: #8f1d2c;
    --global-text-color: #201b18;
    --global-text-color-light: #6b6660;
    --global-border-color: #d8d6cf;
    color-scheme: light;
  }

  body {
    background: #f7f7f4;
  }

  .masthead {
    background: rgba(247, 247, 244, 0.96);
  }

  .greedy-nav,
  #site-nav {
    background: transparent;
  }

  .page__content .r2 {
    color: #201b18;
    margin: -0.5rem auto 0;
    max-width: 640px;
    text-align: left;
  }

  .page__content .r2 * {
    box-sizing: border-box;
  }

  .page__content .r2 a {
    color: #201b18;
    text-decoration: none;
  }

  .page__content .r2 a:hover {
    color: #5e111c;
    text-decoration: none;
  }

  .page__content .r2 p {
    color: #3f3a35;
    font-size: 17px;
    line-height: 1.65;
    margin: 0 0 1rem;
  }

  .page__content .r2-header {
    border-bottom: 1px solid #d8d6cf;
    padding: 1.6rem 0 1.1rem;
  }

  .page__content .r2 .r2-label {
    color: #8f1d2c;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.1em;
    line-height: 1.3;
    margin: 0 0 1.45rem;
    text-transform: uppercase;
  }

  .page__content .r2 h1,
  .page__content .r2 h2,
  .page__content .r2 h3 {
    border: 0;
    color: #201b18;
    font-family: Georgia, "Times New Roman", serif;
    font-weight: 500;
    letter-spacing: 0;
    margin: 0;
    padding: 0;
  }

  .page__content .r2 h1 {
    font-size: 44px;
    line-height: 1;
    margin: 0 0 1.15rem;
  }

  .page__content .r2 p.r2-intro {
    color: #46413b;
    font-size: 18px;
    line-height: 1.7;
    max-width: 640px;
  }

  .page__content .r2-section {
    border-bottom: 1px solid #d8d6cf;
    padding: 1.1rem 0;
  }

  .page__content .r2-section-featured {
    border-top: 2px solid #8f1d2c;
    margin-top: 0.75rem;
    padding-top: 1.1rem;
  }

  .page__content .r2-section-head {
    margin: 0;
    max-width: 640px;
  }

  .page__content .r2-paper {
    margin: 0;
    padding: 2.2rem 0 0;
  }

  .page__content .r2-paper:first-of-type {
    padding-top: 0;
  }

  .page__content .r2-paper + .r2-paper {
    border-top: 1px solid #dedbd4;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  }

  .page__content .r2-paper-title {
    font-size: 30px;
    line-height: 1.16;
    margin: 0 0 0.75rem;
    max-width: 640px;
  }

  .page__content .r2-paper-featured .r2-paper-title {
    font-size: 31px;
    max-width: 640px;
  }

  .page__content .r2 p.r2-status {
    color: #8f1d2c;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.015em;
    line-height: 1.4;
    margin: 0 0 0.35rem;
  }

  .page__content .r2 p.r2-status em {
    font-style: italic;
  }

  .page__content .r2 p.r2-coauthors {
    color: #6b6660;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.45;
    margin: -0.1rem 0 0.35rem;
  }

  .page__content .r2 p.r2-question {
    color: #2d2824;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 20px;
    font-style: italic;
    line-height: 1.45;
    margin: 0.6rem 0 0.7rem;
    max-width: 640px;
  }

  .page__content .r2-summary {
    max-width: 640px;
  }

  .page__content .r2-summary p {
    color: #3f3a35;
    font-size: 17px;
    line-height: 1.65;
  }

  .page__content .r2-links {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.15rem 1.15rem;
    margin: 0.8rem 0 0.2rem;
  }

  .page__content .r2-links a {
    align-items: center;
    border-bottom: 1px solid currentColor;
    color: #201b18;
    display: inline-flex;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.35;
    min-height: 44px;
    padding: 0.38rem 0 0.22rem;
  }

  .page__content .r2-links a.r2-primary {
    color: #8f1d2c;
  }

  .page__content .r2-links a.r2-internal {
    color: #8f1d2c;
  }

  .page__content .r2-links a.r2-primary:after {
    content: " \2192";
  }

  .page__content .r2-abstract {
    margin: 0.35rem 0 0;
    max-width: 640px;
  }

  .page__content .r2-abstract summary {
    align-items: center;
    border-bottom: 1px solid currentColor;
    color: #8f1d2c;
    cursor: pointer;
    display: inline-flex;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.35;
    list-style: none;
    min-height: 44px;
    padding: 0.38rem 0 0.22rem;
  }

  .page__content .r2-abstract summary::-webkit-details-marker {
    display: none;
  }

  .page__content .r2-abstract summary:after {
    content: " +";
    margin-left: 0.15rem;
  }

  .page__content .r2-abstract[open] summary:after {
    content: " -";
  }

  .page__content .r2-abstract summary:focus {
    outline: 2px solid rgba(143, 29, 44, 0.35);
    outline-offset: 4px;
  }

  .page__content .r2-abstract-body {
    border-left: 2px solid #d8d6cf;
    margin: 0.85rem 0 0.3rem;
    padding-left: 1rem;
  }

  .page__content .r2-abstract-body p {
    color: #4a443e;
    font-size: 16px;
    line-height: 1.65;
  }

  .page__content .r2-presentations {
    margin: 1.35rem 0 0;
    max-width: 640px;
  }

  .page__content .r2-presentation-row {
    border-top: 1px solid #dedbd4;
    display: grid;
    gap: 1.1rem;
    grid-template-columns: 4.5rem minmax(0, 1fr);
    padding: 1.1rem 0;
  }

  .page__content .r2 p.r2-year {
    color: #8f1d2c;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.45;
    margin: 0;
  }

  .page__content .r2 p.r2-venue {
    color: #3f3a35;
    font-size: 17px;
    font-weight: 650;
    line-height: 1.5;
    margin: 0 0 0.15rem;
  }

  .page__content .r2 p.r2-talk {
    color: #6b6660;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
  }

  .page__content .r2 .r2-presentation-note {
    color: #8f1d2c;
    font-style: italic;
  }

  @media (max-width: 780px) {
    .page__content .r2-header {
      padding: 2.75rem 0 2.3rem;
    }

    .page__content .r2-section {
      padding: 2.45rem 0;
    }

    .page__content .r2-section-featured {
      margin-top: 1.75rem;
      padding-top: 2.25rem;
    }

    .page__content .r2-paper + .r2-paper {
      margin-top: 2.25rem;
      padding-top: 2.25rem;
    }
  }

  @media (max-width: 520px) {
    .page__content .r2 {
      margin-top: 0;
    }

    .page__content .r2 h1 {
      font-size: 38px;
    }

    .page__content .r2 .r2-label {
      font-size: 14px;
    }

    .page__content .r2 p.r2-intro {
      font-size: 16px;
    }

    .page__content .r2-paper-title {
      font-size: 25px;
    }

    .page__content .r2-paper-featured .r2-paper-title {
      font-size: 26px;
    }

    .page__content .r2 p.r2-question {
      font-size: 17px;
    }

    .page__content .r2 p,
    .page__content .r2-summary p {
      font-size: 16px;
    }

    .page__content .r2 p.r2-status,
    .page__content .r2 p.r2-coauthors,
    .page__content .r2-abstract-body p,
    .page__content .r2 p.r2-year,
    .page__content .r2 p.r2-talk {
      font-size: 15px;
    }

    .page__content .r2 p.r2-venue,
    .page__content .r2-links a,
    .page__content .r2-abstract summary {
      font-size: 16px;
    }

    .page__content .r2-links {
      gap: 0.6rem 1rem;
    }

    .page__content .r2-presentation-row {
      gap: 0.1rem;
      grid-template-columns: 1fr;
    }
  }

  .page__content .r2-links .r2-abstract { margin: 0; max-width: none; }
  .page__content .r2-links .r2-abstract[open] { flex: 1 0 100%; }

  /* --- plain typographic list: no buttons ---------------------------------- */
  .page__content .r2 { max-width: 1060px; }
  /* Section labels move into a left rail, mirroring the year rail the presentations section
     already uses. This fills the page width while the text column stays at a readable measure —
     a wider paragraph cannot: 1280px of 17px text is ~130 characters per line. */
  .page__content .r2-section { display: grid; grid-template-columns: 300px minmax(0, 1fr);
    gap: 0 4rem; }
  /* optical alignment: sit the 15px label on the same baseline as the 22px title */
  .page__content .r2 .r2-label { grid-column: 1; grid-row: 1; text-align: right; margin: 0.06rem 0 0; }
  .page__content .r2-section > .r2-paper,
  .page__content .r2-section > .r2-presentations { grid-column: 2; }
  @media (max-width: 1000px) {
    .page__content .r2-section { display: block; }
    .page__content .r2 .r2-label { text-align: left; margin: 1.1rem 0 0.5rem; }
    .page__content .r2-header { padding-left: 0; }
  }
  .page__content .r2 { margin-top: -1.2rem; }
  .page__content .r2-header { border-bottom: 0; padding: 0.35rem 0 0.15rem 0; }
  @media (min-width: 1001px) { .page__content .r2-header { padding-left: calc(300px + 4rem); } }
  .page__content .r2 h1 { font-size: 33px; margin-bottom: 0.28rem; }
  .page__content .r2 p.r2-intro { font-size: 17px; max-width: none; margin-bottom: 0; }
  .page__content .r2-section:first-of-type .r2-label { margin-top: 0.5rem; }
  .page__content .r2 p.r2-answer { color: #46413b; font-size: 17px; line-height: 1.6;
    margin: 0.28rem 0 0; max-width: none; }
  .page__content .r2-section { border-bottom: 0; padding: 0; }
  .page__content .r2 .r2-label { font-size: 15px; font-weight: 700; letter-spacing: 0.09em;
    margin: 0.35rem 0 0.6rem; }
  .page__content .r2-paper { margin: 0 0 2.4rem; max-width: none; }
  .page__content .r2-paper + .r2-paper { border-top: 0; margin-top: 0; padding-top: 0; }
  .page__content .r2-paper-title { font-size: 22px; font-weight: 500; line-height: 1.25;
    margin: 0 0 0.15rem; max-width: none; }
  .page__content .r2-paper-title a { color: #201b18; border-bottom: 1px solid #d3cec5; }
  .page__content .r2-paper-title a:hover { color: #8f1d2c; border-bottom-color: currentColor; }
  .page__content .r2 p.r2-meta { color: #6b6660; font-size: 15.5px; line-height: 1.45;
    margin: 0 0 0.15rem; max-width: none; }
  /* reading text is capped at ~78 characters; only titles use the full 860px */
  .page__content .r2 p.r2-question { font-size: 17.5px; line-height: 1.5; color: #46413b;
    margin: 0.7rem 0 0; max-width: none; }
  /* links become small bracketed plain text, not buttons */
  .page__content .r2-links { gap: 0 1rem; margin: 0.3rem 0 0; }
  .page__content .r2-links a,
  .page__content .r2-abstract summary { border-bottom: 0; color: #8f1d2c; font-size: 15px;
    font-weight: 400; line-height: 1.5; min-height: 0; padding: 0; }
  .page__content .r2-links a:hover,
  .page__content .r2-abstract summary:hover { color: #5e111c; text-decoration: underline; }
  .page__content .r2-links a::before,
  .page__content .r2-abstract summary::before { content: none; }
  .page__content .r2-links a::after,
  .page__content .r2-links a.r2-primary::after,
  .page__content .r2-abstract summary::after,
  .page__content .r2-abstract[open] summary::after { content: none; }
  .page__content .r2-abstract { margin: 0; max-width: none; }
  .page__content .r2-abstract[open] { flex: 1 0 100%; }
  .page__content .r2-abstract-body { max-width: none; padding-top: 0.35rem; }
  .page__content .r2-abstract-body p { font-size: 15.5px; line-height: 1.62; }
  .page__content .r2-presentations { max-width: none; margin-top: 0.4rem; }
  .page__content .r2-presentation-row { gap: 1.1rem; padding: 0.75rem 0; }
  .page__content .r2 p.r2-year { font-size: 13px; font-weight: 700; letter-spacing: 0.04em; }
  .page__content .r2 p.r2-venue { font-size: 16px; font-weight: 600; color: #201b18;
    line-height: 1.45; margin: 0 0 0.1rem; }
  .page__content .r2 p.r2-talk { font-size: 15px; color: #6b6660; line-height: 1.45; }
  .page__content .r2-presentation-note { font-size: 14px; }
  @media (max-width: 900px) {
    .page__content .r2-paper-title { font-size: 21px; }
  }
  /* LAST in the cascade on purpose: an earlier `margin` shorthand on .r2-label kept overriding
     margin-top, so the 15px rail label sat 9px below the 22px title baseline. */
  @media (min-width: 1001px) {
    .page__content .r2 .r2-label,
    .page__content .r2 .r2-section:first-of-type .r2-label { margin-top: 0.06rem; margin-bottom: 0; }
  }
</style>

<main class="r2" id="research">
<header class="r2-header" aria-labelledby="research-title">
    <h1 id="research-title">Research</h1>
  </header>
  <section class="r2-section">
    <p class="r2-label">Job Market Paper</p>
    <article class="r2-paper" id="poverty-targeting">
      <h2 class="r2-paper-title"><a href="https://arxiv.org/abs/2506.18188">Poverty Targeting with Imperfect Information</a></h2>
      <p class="r2-question">Is it enough to target the households that look poorest?</p>
      <p class="r2-answer">Some households look especially poor because their incomes are underestimated. I develop a targeting method that accounts for this uncertainty. In simulations, it achieves the same poverty reduction as standard targeting with 6.7 percent less spending.</p>
      <nav class="r2-links" aria-label="Poverty Targeting with Imperfect Information links">
        <details class="r2-abstract"><summary>Abstract</summary>
          <div class="r2-abstract-body"><p>
            A key challenge for targeted antipoverty programs in developing countries is that policymakers must rely on estimated rather than observed income, which leads to substantial targeting errors. This paper studies how noisy income estimates should be translated into feasible transfers. I formulate this as a statistical decision problem in which a policymaker chooses transfers to minimize a poverty-targeting loss subject to a fixed budget and the constraint that transfers cannot be negative. I show that the standard plug-in rule, which treats estimated incomes as true, is inadmissible. I develop a nonparametric empirical Bayes targeting rule that assigns transfers using posterior distributions of poverty gaps. Although the budget and no-taxation constraints make the targeting rule nonsmooth, Bayes regret is governed by the accuracy of the posterior functionals that determine the oracle allocation. In simulations using household survey data from nine African countries, the empirical Bayes rule reaches substantially more poor households, systematically improves poverty reduction over plug-in OLS, and typically outperforms the machine-learning benchmark.
          </p></div>
        </details>
        <a href="https://arxiv.org/abs/2506.18188">arXiv</a>
      </nav>
    </article>
  </section>
  <section class="r2-section">
    <p class="r2-label">Working Papers</p>
    <article class="r2-paper" id="when-and-how-to-pilot">
      <h2 class="r2-paper-title"><a href="https://arxiv.org/abs/2607.16982">When and How to Pilot: Design Rules for Two-Wave Experiments</a></h2>
      <p class="r2-meta">Submitted</p>
      <p class="r2-question">How much should a small pilot change the experiment that follows?</p>
      <p class="r2-answer">A pilot can help researchers choose a more efficient split between treatment and control, but a small pilot can also mislead. I develop a method that guards against overreacting to limited evidence and approaches the optimal split as the pilot grows.</p>
      <nav class="r2-links" aria-label="When and How to Pilot: Design Rules for Two-Wave Experiments links">
        <details class="r2-abstract"><summary>Abstract</summary>
          <div class="r2-abstract-body"><p>
            Experimenters often run pilots, but how much a small pilot should shape the main-wave design has no settled answer. This paper shows how noisy pilot evidence should guide treatment assignment probabilities in two-wave experiments. Two canonical rules mark the extremes. Balanced assignment guards against worst cases but ignores evidence that one arm is noisier. Feasible Neyman allocation adapts, but with a finite pilot it can overreact to noise, producing arbitrarily large precision losses. I propose a Conditional Minimax Regret (CMR) rule that minimizes worst-case regret over a finite-sample confidence set for the treatment and control variances. CMR retains balance&rsquo;s worst-case protection with high probability, converges to the Neyman allocation as the pilot grows, and attains the minimax-regret rate up to constants. It extends to multi-arm and stratified designs, and simulations calibrated to four field experiments show it avoids feasible Neyman&rsquo;s severe small-pilot losses while matching its large-pilot gains.
          </p></div>
        </details>
        <a href="https://arxiv.org/abs/2607.16982">arXiv</a>
        <a href="/software/">Software</a>
      </nav>
    </article>
    <article class="r2-paper" id="two-way-effects">
      <h2 class="r2-paper-title">Two-Way Effects Models: A Nonparametric Empirical Bayes Approach</h2>
      <p class="r2-meta">with Cole Davis</p>
      <p class="r2-question">How should we estimate worker and firm effects when the two are sorted?</p>
      <p class="r2-answer">Wage decompositions split pay into worker and firm components, and existing methods assume the two are unrelated. We develop a method that lets the distribution of worker effects depend on the firm, so estimates reflect the sorting that occurs.</p>
      <nav class="r2-links" aria-label="Two-Way Effects Models: A Nonparametric Empirical Bayes Approach links">
        <details class="r2-abstract"><summary>Abstract</summary>
          <div class="r2-abstract-body"><p>
            Researchers use AKM models to decompose wages into worker effects and firm wage premia. The resulting fixed-effect estimates are often noisy because firm effects are identified by worker mobility, and conventional empirical Bayes approaches rely on parametric prior assumptions. We develop a nonparametric empirical Bayes framework in which the distribution of worker effects varies with latent firm effects. This allows worker and firm effects to be sorted, and it induces dependence among workers attached to the same reference firm. We propose a feasible estimation procedure, characterize the resulting shrinkage rules, and define an oracle benchmark that respects the hierarchical structure of AKM effects. Simulations show mean squared error close to an oracle benchmark and improvements over i.i.d.-based methods.
          </p></div>
        </details>
        <a href="mailto:juan_yamin_silva@brown.edu?subject=Two-Way%20Effects%20draft">Draft on request</a>
      </nav>
    </article>
  </section>
  <section class="r2-section">
    <p class="r2-label">Publications</p>
    <article class="r2-paper" id="birds-of-a-feather">
      <h2 class="r2-paper-title"><a href="/files/subnational-alignment-corruption.pdf">Birds of a Feather Collude Together: Subnational Alignment and Corruption</a></h2>
      <p class="r2-meta">with Leopoldo Fergusson, Arturo Harker, and Carlos Molina &middot; Conditionally accepted, <em>American Political Science Review</em></p>
      <p class="r2-question">Does partisan alignment across levels of government facilitate corruption?</p>
      <p class="r2-answer">Same-party mayors and governors can collude rather than check each other. Using close elections in Colombia, aligned municipalities report 0.3 standard deviations more students than they enrol, claiming education transfers with no gain in schooling.</p>
      <nav class="r2-links" aria-label="Birds of a Feather Collude Together: Subnational Alignment and Corruption links">
        <details class="r2-abstract"><summary>Abstract</summary>
          <div class="r2-abstract-body"><p>
            We examine how subnational partisan alignment influences corruption in clientelistic environments, focusing on the fabrication of &ldquo;ghost&rdquo; students to inflate education transfers to local governments in Colombia. Using a Regression Discontinuity Design, we find that partisan alignment between municipal mayors and departmental governors increases ghost students by 0.3 standard deviations, without improving genuine enrollment or student performance. Alignment also leads to more discretionary hiring, patronage-based outsourcing, and increased electoral fraud risk. The effects are strongest in municipalities with weaker institutions and entrenched clientelism. Alignment also raises the likelihood that mayors&rsquo; relatives are appointed to departmental posts and governors&rsquo; relatives to municipal posts, consistent with reciprocal patronage. These findings support the view that resource diversion benefits politicians with few benefits for local constituencies. Aligned politicians also experience better future electoral prospects, suggesting a breakdown in accountability. Our results highlight how clientelistic networks distort public service delivery, reinforcing the persistence of political corruption.
          </p></div>
        </details>
        <a href="/files/subnational-alignment-corruption.pdf">PDF</a>
      </nav>
    </article>
  </section>
<section class="r2-section" aria-labelledby="presentations-title">
    <div class="r2-section-head">
      <p class="r2-label" id="presentations-title">Selected Presentations</p>
    </div>

    <div class="r2-presentations">
      <div class="r2-presentation-row">
        <p class="r2-year">2026</p>
        <div>
          <p class="r2-venue">Midwest Econometrics Group Annual Meeting, Cincinnati</p>
          <p class="r2-talk">
            Poverty Targeting with Imperfect Information<br>
            <span class="r2-presentation-note">Accepted for presentation &middot; October 9&ndash;10, 2026</span>
          </p>
        </div>
      </div>
      <div class="r2-presentation-row">
        <p class="r2-year">2025</p>
        <div>
          <p class="r2-venue">World Congress of the Econometric Society, Seoul</p>
          <p class="r2-talk">Poverty Targeting with Imperfect Information</p>
        </div>
      </div>
      <div class="r2-presentation-row">
        <p class="r2-year">2025</p>
        <div>
          <p class="r2-venue">Advances with Field Experiments (AFE), Chicago</p>
          <p class="r2-talk">When and How to Pilot: Design Rules for Two-Wave Experiments</p>
        </div>
      </div>
    </div>
  </section>
</main>
