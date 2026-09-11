---
layout: splash
permalink: /software/
title: "Software"
description: "Open-source R and Python software by Juan C. Yamin for Conditional Minimax Regret experimental design."
---

<style>
  :root,
  html[data-theme="dark"] {
    --global-base-color: #f8f9fa;
    --global-bg-color: #f8f9fa;
    --global-footer-bg-color: #eef1f4;
    --global-link-color: #2b587a;
    --global-link-color-hover: #173b56;
    --global-link-color-visited: #2b587a;
    --global-masthead-link-color: #202833;
    --global-masthead-link-color-hover: #2b587a;
    --global-text-color: #202833;
    --global-text-color-light: #5d6975;
    --global-border-color: #d6dce2;
    color-scheme: light;
  }

  body {
    background: #f8f9fa;
  }

  .masthead {
    background: rgba(248, 249, 250, 0.96);
  }

  .greedy-nav,
  #site-nav {
    background: transparent;
  }

  /* Keep the footer in normal flow, without the theme's sticky-footer reserve. */
  body { padding-bottom: 0; margin-bottom: 0 !important; }
  #main { max-width: none; margin: 0; padding: 0; }
  #main > .splash, #main .page__content { margin: 0; padding: 0; }
  .page__footer { position: static; margin-top: 0; }

  .page__content .s2 {
    --s2-bg: #f8f9fa;
    --s2-ink: #202833;
    --s2-copy: #444e59;
    --s2-muted: #5d6975;
    --s2-blue: #2b587a;
    --s2-hover: #173b56;
    --s2-border: #d6dce2;
    --s2-code-head: #e8edf2;
    color-scheme: light;
    background: var(--s2-bg);
    color: var(--s2-copy);
    font: 15.5px/1.55 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    text-align: left;
    width: calc(100% - 64px); max-width: 940px; margin: 0 auto; padding: 24px 0 60px;
  }
  .page__content .s2 * { box-sizing: border-box; }
  .page__content .s2 p { font: inherit; margin: 0; }
  .page__content .s2 a { color: var(--s2-blue); font-weight: 400; text-decoration: none; }
  .page__content .s2 a:hover { color: var(--s2-hover); text-decoration: underline; }
  .page__content .s2 h1,
  .page__content .s2 h2,
  .page__content .s2 h3 { border: 0; padding: 0; }
  .page__content .s2 h1 {
    font: 500 33px/1.1 Georgia, "Times New Roman", serif; color: var(--s2-ink);
    margin: 0 0 38px; letter-spacing: 0;
  }
  .page__content .s2 h2 {
    font: 500 26px/1.2 Georgia, "Times New Roman", serif; color: var(--s2-ink);
    margin: 0 0 6px; letter-spacing: 0;
  }
  .page__content .s2 .s2-status {
    display: flex; flex-wrap: wrap; gap: 0 9px; color: var(--s2-muted); font-size: 14px; margin: 0 0 19px;
  }
  .page__content .s2 .s2-description { max-width: 720px; margin: 0; line-height: 1.65; }
  .page__content .s2 .s2-link-row {
    display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 20px; margin-top: 17px;
    font-size: 15px;
  }
  .page__content .s2 .s2-citation { min-width: 0; }
  .page__content .s2 .s2-citation summary {
    color: var(--s2-blue); cursor: pointer; list-style: none; width: fit-content; font-size: 15px;
  }
  .page__content .s2 .s2-citation summary::-webkit-details-marker { display: none; }
  .page__content .s2 .s2-citation summary::after { content: " +"; }
  .page__content .s2 .s2-citation[open] > summary::after { content: " −"; }
  .page__content .s2 .s2-citation summary:hover { color: var(--s2-hover); text-decoration: underline; }
  .page__content .s2 .s2-citation[open] { flex: 1 0 100%; }
  .page__content .s2 code {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
    background: transparent; border: 0; padding: 0;
  }
  .page__content .s2 .s2-citation pre {
    margin: 12px 0 0; padding: 15px 17px; border: 1px solid var(--s2-border); border-radius: 6px;
    font: 12.5px/1.6 "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
    white-space: pre-wrap; overflow-wrap: anywhere; color: var(--s2-copy); background: var(--s2-bg);
  }
  .page__content .s2 .s2-citation pre code { font: inherit; color: inherit; }
  .page__content .s2 .s2-examples { margin-top: 32px; }
  .page__content .s2 .s2-inputs { font-size: 14px; color: var(--s2-muted); margin: 0 0 13px; }
  .page__content .s2 .s2-inputs code { color: var(--s2-blue); font-size: 13px; }
  .page__content .s2 .s2-code-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; }
  .page__content .s2 .s2-codebox { border: 1px solid var(--s2-border); border-radius: 6px; min-width: 0; overflow: hidden; }
  .page__content .s2 .s2-codebox h3 {
    font: 500 13px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    margin: 0; padding: 8px 15px; color: var(--s2-muted); background: var(--s2-code-head);
    border-bottom: 1px solid var(--s2-border);
  }
  .page__content .s2 .s2-codebox pre {
    margin: 0; padding: 14px 15px; color: var(--s2-ink); background: var(--s2-bg);
    font: 12.5px/1.7 "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
    white-space: pre-wrap; overflow-wrap: anywhere;
  }
  .page__content .s2 .s2-codebox pre.s2-install { border-bottom: 1px solid var(--s2-border); padding-top: 11px; padding-bottom: 11px; }
  .page__content .s2 .s2-codebox code { font: inherit; color: inherit; }
  .page__content .s2 .s2-string { color: var(--s2-blue); }
  .page__content .s2 .s2-comment { color: var(--s2-muted); }
  @media (max-width: 720px) {
    .page__content .s2 .s2-code-grid { grid-template-columns: 1fr; }
    .page__content .s2 { max-width: 620px; }
  }
  @media (max-width: 600px) {
    .page__content .s2 { width: calc(100% - 40px); padding-top: 27px; padding-bottom: 42px; }
    .page__content .s2 h1 { margin-bottom: 31px; }
    .page__content .s2 .s2-link-row { gap: 4px 17px; }
    .page__content .s2 .s2-codebox pre { padding-left: 12px; padding-right: 12px; }
  }
  @media (pointer: coarse) {
    .page__content .s2 .s2-link-row > a,
    .page__content .s2 .s2-status a,
    .page__content .s2 .s2-citation > summary { display: inline-flex; align-items: center; min-height: 44px; }
    .page__content .s2 .s2-status { align-items: center; }
  }
</style>

<main class="s2" id="software">
    <h1 id="software-title">Software</h1>
    <article aria-labelledby="cmrdesign-title">
      <h2 id="cmrdesign-title">cmrdesign</h2>
      <p class="s2-status">
        <a href="https://cran.r-project.org/package=cmrdesign" target="_blank" rel="noopener">R on CRAN</a>
        <span aria-hidden="true">·</span>
        <a href="https://pypi.org/project/cmrdesign/" target="_blank" rel="noopener">Python on PyPI</a>
      </p>
      <p class="s2-description">cmrdesign is an R and Python package that implements the design rules from <em>When and How to Pilot</em>. Given pilot outcomes and treatment assignments, it recommends how to split the main experiment between treatment and control. It also reports a finite-sample bound on how much precision that split can lose relative to the best allocation.</p>
      <div class="s2-link-row" role="group" aria-label="cmrdesign resources">
        <a href="https://juancyamin.github.io/cmrdesign/" target="_blank" rel="noopener">Documentation</a>
        <a href="https://github.com/juancyamin/cmrdesign" target="_blank" rel="noopener">GitHub</a>
        <a href="https://arxiv.org/abs/2607.16982" target="_blank" rel="noopener">Paper</a>
        <details class="s2-citation" id="citation-title">
          <summary>Citation</summary>
          <pre><code>@misc{yamin2026pilot,
  title = {When and How to Pilot: Design Rules for Two-Wave Experiments},
  author = {Yamin, Juan C.},
  year = {2026},
  doi = {10.48550/arXiv.2607.16982},
  url = {https://arxiv.org/abs/2607.16982}
}

@manual{cmrdesign2026,
  title = {cmrdesign: Conditional Minimax Regret Design Rules},
  author = {Yamin, Juan C.},
  year = {2026},
  note = {R and Python software},
  url = {https://juancyamin.github.io/cmrdesign/}
}</code></pre>
        </details>
      </div>
      <section class="s2-examples" id="install-title" aria-label="R and Python examples">
        <div class="s2-example-body">
          <p class="s2-inputs">In these examples, <code>y</code> contains pilot outcomes and <code>d</code> contains treatment assignments.</p>
          <div class="s2-code-grid">
            <section class="s2-codebox" aria-labelledby="s2-r-label">
              <h3 id="s2-r-label">R</h3>
              <pre class="s2-install" aria-label="Install in R"><code>install.packages(<span class="s2-string">"cmrdesign"</span>)</code></pre>
              <pre><code>library(cmrdesign)
fit &lt;- cmr_two_arm(
  y, d, alpha = 0.05, method = <span class="s2-string">"auto"</span>
)
fit$pi     <span class="s2-comment"># share of the main wave to treat</span>
fit$U_CMR  <span class="s2-comment"># bound on precision lost vs. best split</span></code></pre>
            </section>
            <section class="s2-codebox" aria-labelledby="s2-python-label">
              <h3 id="s2-python-label">Python</h3>
              <pre class="s2-install" aria-label="Install from the terminal"><code>python -m pip install cmrdesign</code></pre>
              <pre><code>import cmrdesign as cmr
fit = cmr.cmr_two_arm(
  y, d, alpha=0.05, method=<span class="s2-string">"auto"</span>
)
fit.pi     <span class="s2-comment"># share of the main wave to treat</span>
fit.U_CMR  <span class="s2-comment"># bound on precision lost vs. best split</span></code></pre>
            </section>
          </div>
        </div>
      </section>
    </article>
  </main>
