---
layout: splash
permalink: /research-draft/
title: "Research Draft"
description: "Private draft research page preview for Juan C. Yamin."
sitemap: false
noindex: true
---

<style>
  html,
  html[data-theme="dark"] {
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
    max-width: 980px;
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
    padding: 3.75rem 0 2.8rem;
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
    padding: 2.85rem 0;
  }

  .page__content .r2-section-featured {
    border-top: 2px solid #8f1d2c;
    margin-top: 1.95rem;
    padding-top: 2.45rem;
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
    margin-top: 2.65rem;
    padding-top: 2.65rem;
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
    margin: 1.15rem 0 1.25rem;
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
    margin: 1.25rem 0 0.25rem;
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
    max-width: 780px;
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
</style>

<main class="r2" id="research-draft">
  <header class="r2-header" aria-labelledby="research-title">
    <h1 id="research-title">Research</h1>
    <p class="r2-intro">
      My research develops methods for policy targeting, experimental design, and empirical Bayes estimation. A related line of work studies the political economy of development, with a focus on corruption and accountability.
    </p>
  </header>

  <section class="r2-section r2-section-featured" aria-labelledby="featured-paper-title">
    <div class="r2-section-head">
      <h2 class="r2-label" id="featured-paper-title">Featured Paper</h2>
    </div>
    <article class="r2-paper r2-paper-featured" id="poverty-targeting">
      <h3 class="r2-paper-title" id="poverty-targeting-title">Poverty Targeting with Imperfect Information</h3>
      <p class="r2-status">Submitted</p>
      <p class="r2-question">How should an anti-poverty transfer budget be allocated when policymakers must rely on estimated incomes?</p>
      <div class="r2-summary">
        <p>
          I formulate poverty targeting as a statistical decision problem and show that the standard plug-in rule, which treats estimated income as true, is inadmissible: another allocation rule does at least as well in every case, and strictly better in some. I develop a nonparametric empirical Bayes rule that assigns transfers using posterior distributions of poverty gaps. In simulations using household survey data from nine African countries, the rule reaches 45.6 poor households per 1,000 people, compared with 25.5 under standard targeting&mdash;nearly 80 percent more.
        </p>
      </div>
      <nav class="r2-links" aria-label="Poverty Targeting links">
        <a class="r2-primary" href="https://arxiv.org/abs/2506.18188">Paper</a>
        <a href="https://www.dropbox.com/scl/fi/mjyca26ok6wqingkm8ov8/WorldCongress.pdf?rlkey=j3nogjv01fxski68wil45uhq8&amp;raw=1">World Congress Slides</a>
      </nav>
      <details class="r2-abstract">
        <summary>Abstract</summary>
        <div class="r2-abstract-body">
          <p>
            A key challenge for targeted antipoverty programs in developing countries is that policymakers must rely on estimated rather than observed income, which leads to substantial targeting errors. The policy problem is not only to predict income, but to decide how income estimates should be translated into feasible transfers. I formulate this as a statistical decision problem in which a policymaker chooses transfers to minimize a poverty-targeting loss subject to a fixed budget and a no-taxation constraint. I show that the standard plug-in rule, which treats estimated incomes as true, is inadmissible. I develop a nonparametric empirical Bayes targeting rule that assigns transfers using posterior distributions of true poverty gaps. Although the budget and no-taxation constraints make the targeting rule nonsmooth, Bayes regret is governed by the accuracy of the posterior functionals that determine the oracle allocation. In simulations using household survey data from nine African countries, the empirical Bayes rule reaches substantially more poor households and systematically improves poverty reduction relative to plug-in OLS and machine-learning benchmarks.
          </p>
        </div>
      </details>
    </article>
  </section>

  <section class="r2-section" aria-labelledby="working-papers-title">
    <div class="r2-section-head">
      <h2 class="r2-label" id="working-papers-title">Working Papers</h2>
    </div>

    <article class="r2-paper" id="when-and-how-to-pilot">
      <h3 class="r2-paper-title">When and How to Pilot: Design Rules for Two-Wave Experiments</h3>
      <p class="r2-status">Working paper</p>
      <p class="r2-question">How much should a small first wave change the experiment that follows?</p>
      <div class="r2-summary">
        <p>
          Balanced assignment ignores evidence from the first wave about outcome variances, while feasible Neyman allocation can overreact to small-sample variation. I develop a Conditional Minimax Regret rule that adapts only when the pilot provides sufficient evidence. The rule retains balance&rsquo;s worst-case protection with high probability, converges to Neyman allocation as the pilot grows, extends to multi-arm and stratified designs, and avoids feasible Neyman&rsquo;s severe small-pilot losses in simulations calibrated to four field experiments.
        </p>
      </div>
      <nav class="r2-links" aria-label="When and How to Pilot links">
        <a class="r2-primary" href="https://arxiv.org/abs/2607.16982">Paper</a>
        <a href="https://www.dropbox.com/scl/fi/opvdv4bvfzwl2coo9fk0o/Slides_v2.pdf?rlkey=uvbogtgk75qvx6431m0bveiow&amp;raw=1">AFE 2025 Slides</a>
        <a href="https://juancyamin.github.io/cmrdesign/">Software</a>
      </nav>
      <details class="r2-abstract">
        <summary>Abstract</summary>
        <div class="r2-abstract-body">
          <p>
            Experimenters often run pilots, but how much a small pilot should shape the main-wave design has no settled answer. This paper shows how pilot evidence should guide treatment assignment probabilities in two-wave experiments. Two canonical rules mark the extremes. Balanced assignment guards against worst cases but ignores evidence that one arm is noisier. Feasible Neyman allocation adapts, but with a finite pilot it can overreact to noise, producing arbitrarily large precision losses. This paper proposes a Conditional Minimax Regret (CMR) rule that minimizes worst-case regret over a finite-sample confidence set for the treatment and control variances. CMR retains balance&rsquo;s worst-case protection with high probability, converges to the Neyman allocation as the pilot grows, and attains the minimax-regret rate up to constants. It extends to multi-arm and stratified designs, and simulations calibrated to four field experiments show it avoids feasible Neyman&rsquo;s severe small-pilot losses while capturing most of its large-pilot gains.
          </p>
        </div>
      </details>
    </article>

    <article class="r2-paper" id="two-way-effects">
      <h3 class="r2-paper-title">Two-Way Effects Models: A Nonparametric Empirical Bayes Approach</h3>
      <p class="r2-coauthors">with Cole Davis</p>
      <p class="r2-status">Working paper</p>
      <p class="r2-question">How should two-way effects be estimated when the latent components may be dependent?</p>
      <div class="r2-summary">
        <p>
          We develop a nonparametric empirical Bayes framework for decomposing outcomes into unit and cluster components, such as workers and firms, teachers and schools, or individuals and regions. Unlike existing empirical Bayes methods that impose parametric structure or independence between the two latent components, the framework allows the distribution of unit effects to vary with latent cluster effects and studies the resulting shrinkage rules.
        </p>
      </div>
      <nav class="r2-links" aria-label="Two-Way Effects links">
        <a href="mailto:juan_yamin_silva@brown.edu?subject=Two-Way%20Effects%20draft">Request draft</a>
      </nav>
      <details class="r2-abstract">
        <summary>Abstract</summary>
        <div class="r2-abstract-body">
          <p>
            Researchers estimate two-way effects models to decompose outcomes into unit and cluster components, such as workers and firms, teachers and schools, or individuals and regions. Existing empirical Bayes approaches for this setting rely on parametric prior assumptions. We develop a nonparametric empirical Bayes framework that allows the distribution of unit effects to vary with latent cluster effects, so unit and cluster components need not be independent and units within a cluster can be correlated. We propose a feasible estimation procedure and characterize the resulting shrinkage rules. Simulations show mean squared error close to an oracle benchmark and improvements over i.i.d.-based methods.
          </p>
        </div>
      </details>
    </article>
  </section>

  <section class="r2-section" aria-labelledby="other-papers-title">
    <div class="r2-section-head">
      <h2 class="r2-label" id="other-papers-title">Other Papers</h2>
    </div>

    <article class="r2-paper" id="birds-of-a-feather">
      <h3 class="r2-paper-title">Birds of a Feather Collude Together: Subnational Alignment and Corruption</h3>
      <p class="r2-coauthors">with Leopoldo Fergusson, Arturo Harker, and Carlos Molina</p>
      <p class="r2-status">Conditionally accepted at the <em>American Political Science Review</em></p>
      <p class="r2-question">Does partisan alignment across levels of government facilitate corruption?</p>
      <div class="r2-summary">
        <p>
          We use close elections in Colombia to study how partisan alignment between municipal mayors and departmental governors affects corruption and public-service delivery. Alignment increases reported ghost enrollment by 0.3 standard deviations, without improvements in genuine enrollment or student performance, and also increases discretionary hiring, patronage-based outsourcing, and electoral-fraud risk.
        </p>
      </div>
      <nav class="r2-links" aria-label="Subnational Alignment and Corruption links">
        <a class="r2-primary" href="https://ideas.repec.org/p/col/000089/020732.html">Paper</a>
      </nav>
      <details class="r2-abstract">
        <summary>Abstract</summary>
        <div class="r2-abstract-body">
          <p>
            We examine how subnational partisan alignment influences corruption in clientelistic environments, focusing on the fabrication of &ldquo;ghost&rdquo; students to inflate education transfers to local governments in Colombia. Using a Regression Discontinuity Design, we find that partisan alignment between municipal mayors and departmental governors increases ghost students by 0.3 standard deviations, without improving genuine enrollment or student performance. Alignment also leads to more discretionary hiring, patronage-based outsourcing, and increased electoral fraud risk. The effects are strongest in municipalities with weaker institutions and entrenched clientelism. Alignment also raises the likelihood that mayors&rsquo; relatives are appointed to departmental posts and governors&rsquo; relatives to municipal posts, consistent with reciprocal patronage. These findings support the view that resource diversion benefits politicians with few benefits for local constituencies. Aligned politicians also experience better future electoral prospects, suggesting a breakdown in accountability. Our results highlight how clientelistic networks distort public service delivery, reinforcing the persistence of political corruption.
          </p>
        </div>
      </details>
    </article>
  </section>

  <section class="r2-section" aria-labelledby="presentations-title">
    <div class="r2-section-head">
      <h2 class="r2-label" id="presentations-title">Presentations</h2>
    </div>

    <div class="r2-presentations">
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
