---
layout: splash
permalink: /draft/
title: "Draft Homepage"
description: "Private draft homepage preview for Juan C. Yamin."
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

  .page__content .d2 {
    color: #201b18;
    margin: -0.5rem auto 0;
    max-width: 920px;
  }

  .page__content .d2 a {
    color: #8f1d2c;
    text-decoration: none;
  }

  .page__content .d2 a:hover {
    color: #5e111c;
    text-decoration: none;
  }

  .page__content .d2 p {
    color: #3f3a35;
    font-size: 1rem;
    line-height: 1.65;
    margin: 0 0 1rem;
  }

  .page__content .d2-hero {
    border-bottom: 1px solid #d8d6cf;
    margin: 0 auto;
    padding: 4.75rem 0 4.4rem;
    text-align: center;
  }

  .page__content .d2-rule {
    background: #8f1d2c;
    height: 2px;
    margin: 0 auto 2rem;
    width: 76px;
  }

  .page__content .d2 p.d2-kicker,
  .page__content .d2 p.d2-label {
    color: #8f1d2c;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    line-height: 1.3;
    margin: 0 0 1.05rem;
    text-transform: uppercase;
  }

  .page__content .d2 h1 {
    color: #201b18;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(3rem, 7vw, 3.9rem);
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1;
    margin: 0 0 1.35rem;
  }

  .page__content .d2 p.d2-statement {
    color: #201b18;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.75rem, 4.3vw, 2.35rem);
    line-height: 1.22;
    margin: 0 auto 1.35rem;
    max-width: 760px;
  }

  .page__content .d2 p.d2-fields {
    color: #5b5650;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.055em;
    line-height: 1.6;
    margin: 0 auto 1.55rem;
    max-width: 760px;
    text-transform: uppercase;
  }

  .page__content .d2 p.d2-intro {
    color: #46413b;
    font-size: 1.05rem;
    line-height: 1.7;
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
  }

  .page__content .d2-link-row {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 1.25rem;
    justify-content: center;
    margin-top: 1.7rem;
  }

  .page__content .d2-link-row a {
    border-bottom: 1px solid currentColor;
    color: #201b18;
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1.35;
    padding-bottom: 0.08rem;
  }

  .page__content .d2-link-row a.d2-primary {
    color: #8f1d2c;
  }

  .page__content .d2-link-row a.d2-primary:after {
    content: " \2192";
  }

  .page__content .d2-section {
    border-bottom: 1px solid #d8d6cf;
    padding: 4.25rem 0;
    text-align: center;
  }

  .page__content .d2-section-inner {
    margin: 0 auto;
    max-width: 760px;
  }

  .page__content .d2 h2 {
    border: 0;
    color: #201b18;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.9rem, 4vw, 2.55rem);
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.12;
    margin: 0 0 0.8rem;
    padding: 0;
  }

  .page__content .d2 p.d2-meta {
    color: #6b6660;
    font-size: 0.88rem;
    font-weight: 700;
    letter-spacing: 0.035em;
    line-height: 1.4;
    margin: 0 0 1.3rem;
    text-transform: uppercase;
  }

  .page__content .d2 p.d2-standfirst {
    border-bottom: 1px solid #d8d6cf;
    border-top: 1px solid #d8d6cf;
    color: #2d2824;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.18rem, 2.6vw, 1.45rem);
    line-height: 1.38;
    margin: 1.45rem auto 1.65rem;
    max-width: 680px;
    padding: 1rem 0;
  }

  .page__content .d2-copy {
    margin: 0 auto;
    max-width: 720px;
    text-align: left;
  }

  .page__content .d2-copy p {
    color: #3f3a35;
  }

  .page__content .d2-agenda {
    display: grid;
    gap: 1.3rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 2.3rem auto 0;
    max-width: 900px;
    text-align: center;
  }

  .page__content .d2-agenda article {
    border-top: 2px solid #8f1d2c;
    padding-top: 1rem;
  }

  .page__content .d2-agenda h3 {
    color: #201b18;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.12rem;
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 0.55rem;
  }

  .page__content .d2-agenda p {
    color: #5b5650;
    font-size: 0.9rem;
    line-height: 1.55;
    margin: 0;
  }

  .page__content .d2-software-note {
    background: #ffffff;
    border-left: 3px solid #8f1d2c;
    color: #4a4540;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 1.75rem auto 0;
    max-width: 640px;
    padding: 1rem 1.15rem;
    text-align: left;
  }

  @media (max-width: 780px) {
    .page__content .d2-hero {
      padding: 3rem 0 3.2rem;
    }

    .page__content .d2-section {
      padding: 3.2rem 0;
    }

    .page__content .d2-agenda {
      grid-template-columns: 1fr;
      max-width: 560px;
      text-align: left;
    }
  }

  @media (max-width: 520px) {
    .page__content .d2 {
      margin-top: 0;
    }

    .page__content .d2-link-row {
      align-items: center;
      flex-direction: column;
      gap: 0.8rem;
    }
  }
</style>

<main class="d2" id="draft-home">
  <section class="d2-hero" aria-labelledby="draft-home-title">
    <div class="d2-rule"></div>
    <p class="d2-kicker">2026-27 Economics Job Market Candidate</p>
    <h1 id="draft-home-title">Juan C. Yamin</h1>
    <p class="d2-statement">My research asks how empirical evidence should guide decisions.</p>
    <p class="d2-fields">Applied Econometrics &middot; Statistical Decision Theory &middot; Experimental Design &middot; Causal Inference</p>
    <p class="d2-intro">
      I am an econometrician and Ph.D. candidate in Economics at Brown University. A common theme across my work is how decisions should respond when the available data are informative but not definitive.
    </p>
    <nav class="d2-link-row" aria-label="Homepage links">
      <a class="d2-primary" href="#featured-research">Featured Research</a>
      <a href="/files/cv.pdf">CV</a>
      <a href="mailto:juan_yamin_silva@brown.edu">Email</a>
    </nav>
  </section>

  <section class="d2-section" id="featured-research" aria-labelledby="featured-research-title">
    <div class="d2-section-inner">
      <p class="d2-label">Featured Research</p>
      <h2 id="featured-research-title">Poverty Targeting with Imperfect Information</h2>
      <p class="d2-meta">Solo-authored working paper</p>
      <p class="d2-standfirst">
        The question is not only how to predict need, but how evidence about need should be turned into policy.
      </p>
      <div class="d2-copy">
        <p>
          Targeted antipoverty programs often rely on estimated rather than observed income. I study how a policymaker should translate those estimates into feasible transfers when the goal is to reduce poverty subject to a fixed budget.
        </p>
        <p>
          I formulate the targeting problem as a statistical decision problem and develop a nonparametric empirical Bayes rule that assigns transfers using posterior distributions of poverty gaps. In simulations using household survey data from nine African countries, the rule reaches more poor households and improves poverty reduction relative to plug-in OLS and machine-learning benchmarks.
        </p>
      </div>
      <nav class="d2-link-row" aria-label="Featured research links">
        <a class="d2-primary" href="https://arxiv.org/pdf/2506.18188v2">Paper</a>
        <a href="https://www.dropbox.com/scl/fi/mjyca26ok6wqingkm8ov8/WorldCongress.pdf?rlkey=j3nogjv01fxski68wil45uhq8&amp;raw=1">Slides</a>
      </nav>
    </div>
  </section>

  <section class="d2-section" aria-labelledby="research-agenda-title">
    <div class="d2-section-inner">
      <p class="d2-label">Research Agenda</p>
      <h2 id="research-agenda-title">Decisions from evidence that is useful but uncertain.</h2>
      <div class="d2-copy">
        <p>
          My current projects study decision problems in policy targeting, experimental design, and empirical Bayes estimation. Together, they ask how researchers and policymakers should act on evidence that informs a choice without mechanically determining it.
        </p>
      </div>
      <div class="d2-agenda">
        <article>
          <h3>When and How to Pilot</h3>
          <p>Design rules for two-wave experiments when pilot evidence is informative but easy to overreact to.</p>
        </article>
        <article>
          <h3>Two-Way Effects Models</h3>
          <p>A nonparametric empirical Bayes approach to shrinkage in models with unit and cluster components.</p>
        </article>
        <article>
          <h3>Subnational Alignment and Corruption</h3>
          <p>Evidence on how partisan alignment shapes corruption and accountability in Colombian local government.</p>
        </article>
      </div>
      <nav class="d2-link-row" aria-label="Research links">
        <a class="d2-primary" href="/research/">All research</a>
      </nav>
    </div>
  </section>

  <section class="d2-section" aria-labelledby="software-title">
    <div class="d2-section-inner">
      <p class="d2-label">Software</p>
      <h2 id="software-title">cmrdesign</h2>
      <div class="d2-copy">
        <p>
          I develop software for conditional minimax-regret experimental design, accompanying my work on two-wave experiments.
        </p>
      </div>
      <nav class="d2-link-row" aria-label="Software links">
        <a class="d2-primary" href="https://juancyamin.github.io/cmrdesign/">Documentation</a>
        <a href="https://github.com/juancyamin/cmrdesign">GitHub</a>
        <a href="https://pypi.org/project/cmrdesign/">Python Package</a>
      </nav>
      <p class="d2-software-note">
        This section is intentionally small for now: enough to signal that the method is implemented, without turning the homepage into package documentation.
      </p>
    </div>
  </section>
</main>
