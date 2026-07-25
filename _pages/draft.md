---
layout: splash
permalink: /draft/
title: "Draft Homepage"
description: "Private draft homepage preview for Juan C. Yamin."
sitemap: false
noindex: true
---

<style>
  :root {
    --global-bg-color: #f7f3ec;
    --global-footer-bg-color: #efe7dc;
    --global-link-color: #8f1d2c;
    --global-link-color-hover: #5e111c;
    --global-link-color-visited: #8f1d2c;
    --global-masthead-link-color: #201b18;
    --global-masthead-link-color-hover: #8f1d2c;
    --global-text-color: #201b18;
    --global-text-color-light: #6f6760;
    --global-border-color: #dfd4c6;
  }

  body {
    background: #f7f3ec;
  }

  .masthead {
    background: rgba(247, 243, 236, 0.96);
  }

  .draft-home {
    color: #201b18;
    font-size: 1.03rem;
    line-height: 1.65;
    margin: -0.75rem auto 0;
    max-width: 1100px;
  }

  .draft-home a {
    color: #8f1d2c;
    text-decoration: none;
  }

  .draft-home a:hover {
    color: #5e111c;
    text-decoration: underline;
  }

  .draft-hero {
    display: grid;
    gap: 2.5rem;
    grid-template-columns: minmax(0, 1.35fr) minmax(260px, 0.65fr);
    min-height: 470px;
    padding: 3.75rem 0 3.25rem;
    align-items: center;
    border-bottom: 1px solid #dfd4c6;
  }

  .draft-kicker,
  .draft-section-label {
    color: #8f1d2c;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    margin: 0 0 0.9rem;
    text-transform: uppercase;
  }

  .draft-hero h1 {
    color: #201b18;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(2.6rem, 7vw, 5.2rem);
    font-weight: 500;
    line-height: 0.98;
    margin: 0 0 1.15rem;
  }

  .draft-fields {
    color: #3d3631;
    font-size: 1.05rem;
    font-weight: 650;
    margin: 0 0 1.6rem;
  }

  .draft-statement {
    color: #2b2521;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.45rem, 3vw, 2.15rem);
    line-height: 1.25;
    margin: 0 0 1.2rem;
    max-width: 780px;
  }

  .draft-intro {
    color: #514942;
    max-width: 720px;
  }

  .draft-actions,
  .draft-link-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
    margin-top: 1.8rem;
  }

  .draft-button,
  .draft-text-link {
    align-items: center;
    border-radius: 999px;
    display: inline-flex;
    font-weight: 700;
    line-height: 1;
    min-height: 2.45rem;
    padding: 0.72rem 1rem;
  }

  .draft-button {
    background: #8f1d2c;
    color: #fff !important;
  }

  .draft-button:hover {
    background: #5e111c;
    color: #fff !important;
    text-decoration: none !important;
  }

  .draft-text-link {
    border: 1px solid #cbbbaa;
    color: #201b18 !important;
  }

  .draft-text-link:hover {
    border-color: #8f1d2c;
    color: #8f1d2c !important;
    text-decoration: none !important;
  }

  .draft-portrait {
    justify-self: end;
    position: relative;
    width: min(320px, 100%);
  }

  .draft-portrait:before {
    background: #b5975b;
    content: "";
    height: 100%;
    left: -18px;
    position: absolute;
    top: 18px;
    width: 100%;
    z-index: 0;
  }

  .draft-portrait img {
    aspect-ratio: 4 / 5;
    display: block;
    object-fit: cover;
    object-position: center top;
    position: relative;
    width: 100%;
    z-index: 1;
  }

  .draft-band {
    background: #fffaf3;
    border-bottom: 1px solid #dfd4c6;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    padding: 3rem calc(50vw - 50%);
  }

  .draft-section {
    border-bottom: 1px solid #dfd4c6;
    padding: 3rem 0;
  }

  .draft-section h2 {
    border: 0;
    color: #201b18;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.7rem, 3.5vw, 2.6rem);
    font-weight: 500;
    line-height: 1.1;
    margin: 0 0 1rem;
    padding: 0;
  }

  .draft-paper-meta {
    color: #6f6760;
    font-size: 0.96rem;
    font-weight: 650;
    margin: -0.3rem 0 1.25rem;
  }

  .draft-feature-grid,
  .draft-agenda-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: minmax(0, 0.95fr) minmax(260px, 0.55fr);
  }

  .draft-feature-copy p,
  .draft-section p {
    max-width: 760px;
  }

  .draft-note {
    border-left: 4px solid #8f1d2c;
    color: #453d37;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.25rem;
    line-height: 1.35;
    margin: 0;
    padding-left: 1.2rem;
  }

  .draft-mini-list {
    display: grid;
    gap: 1.35rem;
    margin-top: 0.35rem;
  }

  .draft-mini-item h3 {
    color: #201b18;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.25rem;
    line-height: 1.2;
    margin: 0 0 0.35rem;
  }

  .draft-mini-item p {
    color: #5c544d;
    font-size: 0.96rem;
    margin: 0;
  }

  .draft-software {
    display: grid;
    gap: 2rem;
    grid-template-columns: minmax(0, 0.7fr) minmax(260px, 0.8fr);
  }

  .draft-code-sample {
    background: #201b18;
    color: #f7f3ec;
    font-family: Monaco, Consolas, "Lucida Console", monospace;
    font-size: 0.82rem;
    line-height: 1.6;
    margin: 0;
    overflow-x: auto;
    padding: 1.2rem;
  }

  @media (max-width: 850px) {
    .draft-hero,
    .draft-feature-grid,
    .draft-agenda-grid,
    .draft-software {
      grid-template-columns: 1fr;
    }

    .draft-hero {
      padding-top: 2rem;
    }

    .draft-portrait {
      justify-self: start;
      max-width: 260px;
    }
  }

  @media (max-width: 520px) {
    .draft-home {
      font-size: 0.98rem;
    }

    .draft-actions,
    .draft-link-row {
      gap: 0.65rem;
    }

    .draft-button,
    .draft-text-link {
      width: 100%;
      justify-content: center;
    }
  }
</style>

<main class="draft-home" id="draft-home">
  <section class="draft-hero" aria-labelledby="draft-home-title">
    <div>
      <p class="draft-kicker">2026-27 Economics Job Market Candidate</p>
      <h1 id="draft-home-title">Juan C. Yamin</h1>
      <p class="draft-fields">Applied Econometrics &middot; Statistical Decision Theory &middot; Experimental Design &middot; Causal Inference</p>
      <p class="draft-statement">My research asks how empirical evidence should guide decisions.</p>
      <p class="draft-intro">
        I am an econometrician and Ph.D. candidate in Economics at Brown University. A common theme across my work is how decisions should respond when the available data are informative but not definitive.
      </p>
      <p class="draft-actions">
        <a class="draft-button" href="#featured-research">Featured Research</a>
        <a class="draft-text-link" href="/files/cv.pdf">CV</a>
        <a class="draft-text-link" href="mailto:juan_yamin_silva@brown.edu">Email</a>
      </p>
    </div>
    <figure class="draft-portrait">
      <img src="/images/profile.jpg" alt="Juan C. Yamin">
    </figure>
  </section>

  <section class="draft-band" id="featured-research" aria-labelledby="featured-research-title">
    <div class="draft-feature-grid">
      <div class="draft-feature-copy">
        <p class="draft-section-label">Featured Research</p>
        <h2 id="featured-research-title">Poverty Targeting with Imperfect Information</h2>
        <p class="draft-paper-meta">Solo-authored working paper</p>
        <p>
          Targeted antipoverty programs often rely on estimated rather than observed income. I study how a policymaker should translate those estimates into feasible transfers when the goal is to reduce poverty subject to a fixed budget.
        </p>
        <p>
          I formulate the targeting problem as a statistical decision problem and develop a nonparametric empirical Bayes rule that assigns transfers using posterior distributions of poverty gaps. In simulations using household survey data from nine African countries, the rule reaches more poor households and improves poverty reduction relative to plug-in OLS and machine-learning benchmarks.
        </p>
        <p class="draft-link-row">
          <a class="draft-button" href="https://arxiv.org/pdf/2506.18188v2">Paper</a>
          <a class="draft-text-link" href="https://www.dropbox.com/scl/fi/mjyca26ok6wqingkm8ov8/WorldCongress.pdf?rlkey=j3nogjv01fxski68wil45uhq8&amp;raw=1">Slides</a>
        </p>
      </div>
      <p class="draft-note">
        The question is not only how to predict need, but how evidence about need should be turned into policy.
      </p>
    </div>
  </section>

  <section class="draft-section" aria-labelledby="research-agenda-title">
    <div class="draft-agenda-grid">
      <div>
        <p class="draft-section-label">Research Agenda</p>
        <h2 id="research-agenda-title">Decisions from evidence that is useful but uncertain.</h2>
        <p>
          My current projects study decision problems in policy targeting, experimental design, and empirical Bayes estimation. Together, they ask how researchers and policymakers should act on evidence that informs a choice without mechanically determining it.
        </p>
        <p class="draft-link-row">
          <a class="draft-text-link" href="/research/">All research</a>
        </p>
      </div>
      <div class="draft-mini-list">
        <article class="draft-mini-item">
          <h3>When and How to Pilot</h3>
          <p>Design rules for two-wave experiments when pilot evidence is informative but easy to overreact to.</p>
        </article>
        <article class="draft-mini-item">
          <h3>Two-Way Effects Models</h3>
          <p>A nonparametric empirical Bayes approach to shrinkage in models with unit and cluster components.</p>
        </article>
        <article class="draft-mini-item">
          <h3>Subnational Alignment and Corruption</h3>
          <p>Evidence on how partisan alignment shapes corruption and accountability in Colombian local government.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="draft-section" aria-labelledby="software-title">
    <div class="draft-software">
      <div>
        <p class="draft-section-label">Software</p>
        <h2 id="software-title">cmrdesign</h2>
        <p>
          I develop software for conditional minimax-regret experimental design, accompanying my work on two-wave experiments.
        </p>
        <p class="draft-link-row">
          <a class="draft-button" href="https://juancyamin.github.io/cmrdesign/">Documentation</a>
          <a class="draft-text-link" href="https://github.com/juancyamin/cmrdesign">GitHub</a>
          <a class="draft-text-link" href="https://pypi.org/project/cmrdesign/">Python Package</a>
        </p>
      </div>
      <pre class="draft-code-sample"><code>from cmrdesign import cmr_two_arm

allocation = cmr_two_arm(pilot_data)
print(allocation)</code></pre>
    </div>
  </section>
</main>
