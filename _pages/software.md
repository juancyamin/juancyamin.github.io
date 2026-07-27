---
layout: splash
permalink: /software/
title: "Software"
description: "Software by Juan C. Yamin."
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

  .page__content .s2 {
    color: #201b18;
    margin: -0.5rem auto 0;
    max-width: 980px;
    text-align: left;
  }

  .page__content .s2 * {
    box-sizing: border-box;
  }

  .page__content .s2 a {
    color: #201b18;
    text-decoration: none;
  }

  .page__content .s2 a:hover {
    color: #5e111c;
    text-decoration: none;
  }

  .page__content .s2 p {
    color: #3f3a35;
    font-size: 17px;
    line-height: 1.65;
    margin: 0 0 1rem;
  }

  .page__content .s2-header {
    border-bottom: 1px solid #d8d6cf;
    padding: 3.75rem 0 2.8rem;
  }

  .page__content .s2 .s2-label {
    color: #8f1d2c;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.1em;
    line-height: 1.3;
    margin: 0 0 1.45rem;
    text-transform: uppercase;
  }

  .page__content .s2 h1,
  .page__content .s2 h2,
  .page__content .s2 h3 {
    border: 0;
    color: #201b18;
    font-family: Georgia, "Times New Roman", serif;
    font-weight: 500;
    letter-spacing: 0;
    margin: 0;
    padding: 0;
  }

  .page__content .s2 h1 {
    font-size: 44px;
    line-height: 1;
    margin: 0 0 1.15rem;
  }

  .page__content .s2 h2 {
    font-size: 34px;
    line-height: 1.12;
    margin: 0 0 0.7rem;
    max-width: 640px;
  }

  .page__content .s2 h3 {
    font-size: 19px;
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 0.65rem;
  }

  .page__content .s2 p.s2-intro {
    color: #46413b;
    font-size: 18px;
    line-height: 1.7;
    max-width: 640px;
  }

  .page__content .s2-section {
    border-bottom: 1px solid #d8d6cf;
    padding: 2.85rem 0;
  }

  .page__content .s2-section-featured {
    border-top: 2px solid #8f1d2c;
    margin-top: 1.95rem;
    padding-top: 2.45rem;
  }

  .page__content .s2-section-head {
    margin: 0;
    max-width: 640px;
  }

  .page__content .s2 p.s2-status {
    color: #8f1d2c;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.015em;
    line-height: 1.4;
    margin: 0 0 1.1rem;
  }

  .page__content .s2 p.s2-standfirst {
    color: #2d2824;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 21px;
    font-style: italic;
    line-height: 1.45;
    margin: 1.15rem 0 1.25rem;
    max-width: 640px;
  }

  .page__content .s2-copy {
    margin: 0;
    max-width: 640px;
    text-align: left;
  }

  .page__content .s2-copy p {
    color: #3f3a35;
  }

  .page__content .s2-links {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.15rem 1.15rem;
    margin: 1.25rem 0 0.25rem;
  }

  .page__content .s2-links a {
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

  .page__content .s2-links a.s2-primary,
  .page__content .s2-links a.s2-internal {
    color: #8f1d2c;
  }

  .page__content .s2-links a.s2-primary:after {
    content: " \2192";
  }

  .page__content .s2-grid {
    display: grid;
    gap: 1.35rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 2rem 0 0;
    max-width: 900px;
  }

  .page__content .s2-grid article {
    border-top: 2px solid #8f1d2c;
    padding-top: 1rem;
  }

  .page__content .s2-grid p {
    color: #5b5650;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
  }

  .page__content .s2-install {
    display: grid;
    gap: 1.35rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 2rem 0 0;
    max-width: 900px;
  }

  .page__content .s2-install article {
    border-top: 2px solid #8f1d2c;
    min-width: 0;
    padding-top: 1rem;
  }

  .page__content .s2 pre.s2-code {
    background: #fbfaf6;
    border: 1px solid #d8d6cf;
    border-left: 2px solid #8f1d2c;
    color: #2d2824;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
    font-size: 13px;
    line-height: 1.55;
    margin: 0.85rem 0 0.7rem;
    max-width: 100%;
    overflow-x: auto;
    padding: 0.95rem 1rem;
    white-space: pre;
  }

  .page__content .s2 pre.s2-code code {
    background: transparent;
    border: 0;
    color: inherit;
    font: inherit;
    padding: 0;
  }

  .page__content .s2 p.s2-note {
    color: #6b6660;
    font-size: 15px;
    line-height: 1.55;
    margin: 0;
  }

  .page__content .s2 .s2-code-name {
    color: #8f1d2c;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
    font-size: 0.92em;
    font-weight: 700;
  }

  @media (max-width: 780px) {
    .page__content .s2-header {
      padding: 2.75rem 0 2.3rem;
    }

    .page__content .s2-section {
      padding: 2.45rem 0;
    }

    .page__content .s2-section-featured {
      margin-top: 1.75rem;
      padding-top: 2.25rem;
    }

    .page__content .s2-grid,
    .page__content .s2-install {
      grid-template-columns: 1fr;
      max-width: 640px;
    }
  }

  @media (max-width: 520px) {
    .page__content .s2 {
      margin-top: 0;
    }

    .page__content .s2 h1 {
      font-size: 38px;
    }

    .page__content .s2 h2 {
      font-size: 29px;
    }

    .page__content .s2 .s2-label {
      font-size: 14px;
    }

    .page__content .s2 p.s2-intro,
    .page__content .s2 p,
    .page__content .s2-grid p {
      font-size: 16px;
    }

    .page__content .s2 p.s2-status,
    .page__content .s2 p.s2-note {
      font-size: 15px;
    }

    .page__content .s2 p.s2-standfirst {
      font-size: 18px;
    }

    .page__content .s2-links {
      gap: 0.6rem 1rem;
    }

    .page__content .s2-links a {
      font-size: 16px;
    }

    .page__content .s2 pre.s2-code {
      font-size: 12px;
    }
  }
</style>

<main class="s2" id="software">
  <header class="s2-header" aria-labelledby="software-title">
    <h1 id="software-title">Software</h1>
    <p class="s2-intro">
      I maintain open-source tools that translate econometric methods into auditable research workflows. The main project is <span class="s2-code-name">cmrdesign</span>, an R and Python package for pilot-informed experimental design.
    </p>
  </header>

  <section class="s2-section s2-section-featured" aria-labelledby="cmrdesign-title">
    <div class="s2-section-head">
      <p class="s2-label">Package</p>
      <h2 id="cmrdesign-title">cmrdesign</h2>
      <p class="s2-status">R 0.1.0 on R-universe &middot; Python 0.1.0a2 on PyPI &middot; MIT License</p>
      <p class="s2-standfirst">R and Python tools for choosing main-wave treatment allocations after pilot data.</p>
    </div>
    <div class="s2-copy">
      <p>
        <span class="s2-code-name">cmrdesign</span> implements Conditional Minimax Regret design rules from <em>When and How to Pilot</em>. Given pilot outcomes and assignment labels, it recommends treatment shares for the main wave and reports a worst-case regret certificate.
      </p>
      <p>
        The package is built for applied researchers running two-wave randomized experiments: settings where a small first wave informs the design of a larger follow-up experiment. That includes field pilots as well as digital experiments in which a small ramp-up precedes the full test.
      </p>
    </div>
    <nav class="s2-links" aria-label="cmrdesign links">
      <a class="s2-primary s2-internal" href="/cmrdesign/">Documentation</a>
      <a href="https://github.com/juancyamin/cmrdesign">GitHub</a>
      <a href="https://juancyamin.r-universe.dev/cmrdesign">R Package</a>
      <a href="https://pypi.org/project/cmrdesign/">Python Package</a>
      <a href="https://arxiv.org/abs/2607.16982">Paper</a>
    </nav>
  </section>

  <section class="s2-section" aria-labelledby="install-title">
    <div class="s2-section-head">
      <p class="s2-label">Install</p>
      <h2 id="install-title">Use It From R or Python</h2>
    </div>
    <div class="s2-install">
      <article>
        <h3>R</h3>
        <pre class="s2-code"><code>install.packages(
  "cmrdesign",
  repos = c(
    "https://juancyamin.r-universe.dev",
    "https://cloud.r-project.org"
  )
)</code></pre>
        <p class="s2-note">The R package is available from R-universe.</p>
      </article>
      <article>
        <h3>Python</h3>
        <pre class="s2-code"><code>python -m pip install --pre cmrdesign</code></pre>
        <p class="s2-note">The Python package is currently released as an alpha on PyPI.</p>
      </article>
    </div>
  </section>

  <section class="s2-section" aria-labelledby="workflows-title">
    <div class="s2-section-head">
      <p class="s2-label">Workflows</p>
      <h2 id="workflows-title">What It Supports</h2>
      <div class="s2-copy">
        <p>
          The applied functions estimate the uncertainty in pilot variances, solve the CMR design problem, and return allocations that can be realized as integer treatment counts for the main experiment.
        </p>
      </div>
    </div>
    <div class="s2-grid">
      <article>
        <h3>Core Design Rules</h3>
        <p>Two-arm designs with bounded, binary, or unbounded outcomes, including realized allocation counts for a planned main-wave sample size.</p>
      </article>
      <article>
        <h3>Experimental Extensions</h3>
        <p>Multi-arm, stratified, multiple-outcome, and proxy-outcome settings, using the same pilot-to-main-wave logic.</p>
      </article>
      <article>
        <h3>Pilot Planning</h3>
        <p>Tools for assessing whether a proposed pilot size is likely to justify adaptive allocation before the main wave begins.</p>
      </article>
      <article>
        <h3>Auditing and Diagnostics</h3>
        <p>Lower-level confidence-rectangle and regret helpers for checking the design certificate and reproducing calculations.</p>
      </article>
    </div>
  </section>

  <section class="s2-section" aria-labelledby="scope-title">
    <div class="s2-section-head">
      <p class="s2-label">Scope</p>
      <h2 id="scope-title">A Design Tool</h2>
    </div>
    <div class="s2-copy">
      <p>
        <span class="s2-code-name">cmrdesign</span> is a design package, not a treatment-effect estimator. Its regret certificate describes allocation risk relative to an oracle design; it is not a confidence interval for a treatment effect.
      </p>
      <p>
        The repository contains software, examples, tests, and documentation. Paper replication code and raw empirical calibration workflows are separate from the package.
      </p>
    </div>
  </section>
</main>
