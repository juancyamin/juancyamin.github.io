---
layout: splash
permalink: /software/
title: "Software"
description: "Open-source R and Python software by Juan C. Yamin for Conditional Minimax Regret experimental design."
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

  .page__content .s2-copy-wide {
    max-width: 900px;
  }

  .page__content .s2-copy a,
  .page__content .s2-note a {
    border-bottom: 1px solid currentColor;
    color: #201b18;
    font-weight: 650;
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

  .page__content .s2-demo,
  .page__content .s2-install {
    display: grid;
    gap: 1.35rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 2rem 0 0;
    max-width: 900px;
  }

  .page__content .s2-demo {
    margin: 1.45rem 0 1.55rem;
  }

  .page__content .s2-demo article,
  .page__content .s2-install article {
    border-top: 2px solid #8f1d2c;
    min-width: 0;
    padding-top: 1rem;
  }

  .page__content .s2-table-wrap {
    margin: 1.55rem 0 0;
    max-width: 900px;
  }

  .page__content .s2-function-table {
    border-collapse: collapse;
    color: #3f3a35;
    font-size: 16px;
    line-height: 1.45;
    margin: 0;
    width: 100%;
  }

  .page__content .s2-function-table th {
    color: #8f1d2c;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: 0 0.85rem 0.65rem 0;
    text-align: left;
    text-transform: uppercase;
  }

  .page__content .s2-function-table td {
    border-top: 1px solid #dedbd4;
    color: #3f3a35;
    padding: 0.82rem 0.85rem 0.82rem 0;
    text-align: left;
    vertical-align: top;
  }

  .page__content .s2-function-table td:nth-child(2),
  .page__content .s2-function-table td:nth-child(3) {
    white-space: nowrap;
  }

  .page__content .s2 code,
  .page__content .s2 .s2-code-name {
    color: #8f1d2c;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
    font-size: 0.92em;
    font-weight: 700;
  }

  .page__content .s2 code {
    background: transparent;
    border: 0;
    padding: 0;
  }

  .page__content .s2 pre.s2-code {
    background: #fbfaf6;
    border: 1px solid #d8d6cf;
    border-left: 2px solid #8f1d2c;
    color: #2d2824;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
    font-size: 14px;
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

  .page__content .s2 p.s2-code-caption {
    color: #8f1d2c;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1.4;
    margin: 0.75rem 0 -0.35rem;
  }

  .page__content .s2-citation {
    margin: 0.55rem 0 0;
    max-width: 900px;
  }

  .page__content .s2-citation summary {
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

  .page__content .s2-citation summary::-webkit-details-marker {
    display: none;
  }

  .page__content .s2-citation summary:after {
    content: " +";
    margin-left: 0.15rem;
  }

  .page__content .s2-citation[open] summary:after {
    content: " -";
  }

  .page__content .s2-citation summary:focus {
    outline: 2px solid rgba(143, 29, 44, 0.35);
    outline-offset: 4px;
  }

  .page__content .s2-citation pre.s2-code {
    overflow-wrap: anywhere;
    white-space: pre-wrap;
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

    .page__content .s2-demo,
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
    .page__content .s2 p {
      font-size: 16px;
    }

    .page__content .s2 p.s2-status,
    .page__content .s2 p.s2-note,
    .page__content .s2 p.s2-code-caption {
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
      font-size: 13px;
    }

    .page__content .s2-function-table thead {
      display: none;
    }

    .page__content .s2-function-table,
    .page__content .s2-function-table tbody,
    .page__content .s2-function-table tr,
    .page__content .s2-function-table td {
      display: block;
      width: 100%;
    }

    .page__content .s2-function-table tr {
      border-top: 2px solid #8f1d2c;
      padding: 0.85rem 0;
    }

    .page__content .s2-function-table tr:first-child {
      border-top: 0;
      padding-top: 0;
    }

    .page__content .s2-function-table td {
      border-top: 0;
      padding: 0.12rem 0;
      white-space: normal;
    }

    .page__content .s2-function-table td:nth-child(2),
    .page__content .s2-function-table td:nth-child(3) {
      white-space: normal;
    }

    .page__content .s2-function-table td:before {
      color: #8f1d2c;
      content: attr(data-label);
      display: block;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.08em;
      line-height: 1.3;
      margin: 0.25rem 0 0.1rem;
      text-transform: uppercase;
    }
  }
</style>

<main class="s2" id="software">
  <header class="s2-header" aria-labelledby="software-title">
    <h1 id="software-title">Software</h1>
    <p class="s2-intro">
      I maintain open-source tools that turn econometric methods into documented, auditable research workflows. The main project is <span class="s2-code-name">cmrdesign</span>, an R and Python package for deciding how a pilot, staged experiment, or A/B-test ramp-up should shape the experiment that follows.
    </p>
  </header>

  <section class="s2-section s2-section-featured" aria-labelledby="cmrdesign-title">
    <div class="s2-section-head">
      <p class="s2-label">Package</p>
      <h2 id="cmrdesign-title">cmrdesign</h2>
      <p class="s2-status">R package on R-universe &middot; Python alpha on PyPI &middot; MIT License</p>
      <p class="s2-standfirst">Give the package pilot outcomes and treatment labels; it recommends a main-wave treatment allocation and reports a finite-sample regret certificate.</p>
    </div>
    <div class="s2-demo" aria-label="cmrdesign quick start">
      <article>
        <h3>R</h3>
        <pre class="s2-code"><code>fit <- cmr_two_arm(
  y, d, alpha = 0.05, method = "auto"
)
fit$pi     # main-wave share
fit$U_CMR  # regret certificate</code></pre>
      </article>
      <article>
        <h3>Python</h3>
        <pre class="s2-code"><code>fit = cmr.cmr_two_arm(
    y, d, alpha=0.05, method="auto"
)
fit.pi     # main-wave share
fit.U_CMR  # regret certificate</code></pre>
      </article>
    </div>
    <div class="s2-copy">
      <p>
        <span class="s2-code-name">cmrdesign</span> implements Conditional Minimax Regret design rules from <em>When and How to Pilot</em>. Use it when a pilot, staged experiment, or A/B-test ramp-up contains outcomes and treatment labels, and the next task is choosing a treatment allocation for the larger main wave.
      </p>
      <p>
        Balanced assignment ignores pilot variance information; feasible Neyman allocation can overreact to a small pilot. CMR adapts only when the pilot is informative enough. The same workflow applies to field pilots, staged experiments, and A/B tests in which a small ramp-up precedes the full experiment.
      </p>
      <p>
        The R and Python APIs are intended to be parallel: shared JSON fixtures check common cases across languages, and separate validation scripts compare selected outputs with independent reference calculations. GitHub Actions runs the R and Python test suites, fixture checks, validation checks, and the pkgdown documentation build.
      </p>
    </div>
    <nav class="s2-links" aria-label="cmrdesign links">
      <a class="s2-primary" href="https://juancyamin.github.io/cmrdesign/">Documentation</a>
      <a href="https://github.com/juancyamin/cmrdesign">GitHub</a>
      <a href="https://arxiv.org/abs/2607.16982">Paper</a>
    </nav>
  </section>

  <section class="s2-section" aria-labelledby="install-title">
    <div class="s2-section-head">
      <p class="s2-label">Install</p>
      <h2 id="install-title">Install from R or Python</h2>
    </div>
    <div class="s2-install">
      <article>
        <h3>R</h3>
        <p class="s2-code-caption">Current release</p>
        <pre class="s2-code"><code>install.packages(
  "cmrdesign",
  repos = c(
    "https://juancyamin.r-universe.dev",
    "https://cloud.r-project.org"
  )
)</code></pre>
        <p class="s2-code-caption">Development version</p>
        <pre class="s2-code"><code>remotes::install_github(
  "juancyamin/cmrdesign",
  subdir = "r"
)</code></pre>
        <p class="s2-note">Current R package: <a href="https://juancyamin.r-universe.dev/cmrdesign">R-universe</a>.</p>
      </article>
      <article>
        <h3>Python</h3>
        <p class="s2-code-caption">Current alpha</p>
        <pre class="s2-code"><code>python -m pip install --pre cmrdesign</code></pre>
        <p class="s2-code-caption">Development version</p>
        <pre class="s2-code"><code>python -m pip install \
"cmrdesign @ git+https://github.com/\
juancyamin/cmrdesign.git\
#subdirectory=python"</code></pre>
        <p class="s2-note">Current Python package: <a href="https://pypi.org/project/cmrdesign/">PyPI</a>. The Python release is alpha while the API stabilizes.</p>
      </article>
    </div>
  </section>

  <section class="s2-section" aria-labelledby="workflows-title">
    <div class="s2-section-head">
      <p class="s2-label">Coverage</p>
      <h2 id="workflows-title">Which function should I use?</h2>
      <div class="s2-copy s2-copy-wide">
        <p>
          The applied functions estimate the uncertainty in pilot variances, solve the CMR design problem, and return allocations that can be realized as integer treatment counts for the main experiment.
        </p>
      </div>
    </div>
    <div class="s2-table-wrap">
      <table class="s2-function-table">
        <thead>
          <tr>
            <th scope="col">Design</th>
            <th scope="col">Function</th>
            <th scope="col">Main inputs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Design">One treatment and one control</td>
            <td data-label="Function"><code>cmr_two_arm()</code></td>
            <td data-label="Main inputs"><code>y</code>, <code>d</code></td>
          </tr>
          <tr>
            <td data-label="Design">Raw unbounded outcomes</td>
            <td data-label="Function"><code>cmr_unbounded()</code></td>
            <td data-label="Main inputs"><code>y</code>, <code>d</code>, <code>psi</code></td>
          </tr>
          <tr>
            <td data-label="Design">Multiple treatments with one control</td>
            <td data-label="Function"><code>cmr_multiarm()</code></td>
            <td data-label="Main inputs"><code>y</code>, <code>arm</code>, <code>control_arm</code></td>
          </tr>
          <tr>
            <td data-label="Design">Known strata</td>
            <td data-label="Function"><code>cmr_stratified()</code></td>
            <td data-label="Main inputs"><code>y</code>, <code>d</code>, <code>strata</code>, <code>strata_share</code></td>
          </tr>
          <tr>
            <td data-label="Design">Multiple outcomes per unit</td>
            <td data-label="Function"><code>cmr_multiple_outcomes()</code></td>
            <td data-label="Main inputs">outcome matrix <code>y</code>, <code>d</code>, <code>weights</code></td>
          </tr>
          <tr>
            <td data-label="Design">Proxy or delayed primary outcome</td>
            <td data-label="Function"><code>cmr_proxy()</code></td>
            <td data-label="Main inputs"><code>proxy_y</code>, <code>d</code>, bridge constant <code>zeta</code></td>
          </tr>
          <tr>
            <td data-label="Design">Pilot/main-wave sample-size planning</td>
            <td data-label="Function"><code>cmr_plan()</code></td>
            <td data-label="Main inputs">total <code>n</code>, pilot SD guesses</td>
          </tr>
          <tr>
            <td data-label="Design">Integer counts from CMR shares</td>
            <td data-label="Function"><code>realize_allocation()</code></td>
            <td data-label="Main inputs">a CMR result, <code>n_main</code></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="s2-section" aria-labelledby="scope-title">
    <div class="s2-section-head">
      <p class="s2-label">Interpretation</p>
      <h2 id="scope-title">Design, not estimation</h2>
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

  <section class="s2-section" aria-labelledby="citation-title">
    <div class="s2-section-head">
      <p class="s2-label">Citation</p>
      <h2 id="citation-title">Cite the paper and software</h2>
    </div>
    <div class="s2-copy">
      <p>
        <strong>Cite as:</strong> Yamin, J. C. (2026). <em>When and How to Pilot: Design Rules for Two-Wave Experiments</em>. arXiv:2607.16982. Software: <span class="s2-code-name">cmrdesign</span> (R and Python).
      </p>
    </div>
    <details class="s2-citation">
      <summary>BibTeX</summary>
      <pre class="s2-code"><code>@misc{yamin2026pilot,
  title = {When and How to Pilot:
           Design Rules for Two-Wave Experiments},
  author = {Yamin, Juan C.},
  year = {2026},
  doi = {10.48550/arXiv.2607.16982},
  url = {https://arxiv.org/abs/2607.16982}
}

@manual{cmrdesign2026,
  title = {cmrdesign:
           Conditional Minimax Regret Design Rules},
  author = {Yamin, Juan C.},
  year = {2026},
  note = {R and Python software},
  url = {https://juancyamin.github.io/cmrdesign/}
}</code></pre>
    </details>
  </section>
</main>
