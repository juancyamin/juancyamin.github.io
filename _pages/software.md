---
layout: editorial
permalink: /software/
title: "Software"
description: "cmrdesign software for pilot-informed experimental design, with R and Python worked examples."
---

<div class="editorial-document">
<a class="skip-link" href="#main-content">Skip to content</a>
<div class="site inner-page"><header class="mast">
    <p class="name"><a href="/">Juan C. Yamin</a></p>
    <nav class="pages" aria-label="Main navigation">
      <a href="/research/">Research</a>
      <a href="/software/" aria-current="page">Software</a>
      <a href="/teaching/">Teaching</a>
    </nav>
  </header><nav class="contact" aria-label="CV and contact links">
        <a href="https://juancyamin.github.io/files/Juan_Yamin_CV.pdf" target="_blank" rel="noopener">CV</a>
        <a href="mailto:juan_yamin_silva@brown.edu">Email</a>
        <a href="https://scholar.google.com/citations?user=KWtxYJgAAAAJ" target="_blank" rel="noopener">Google Scholar</a>
        <a href="https://github.com/juancyamin" target="_blank" rel="noopener">GitHub</a>
        <a href="https://www.linkedin.com/in/juan-c-yamin/" target="_blank" rel="noopener">LinkedIn</a>
      </nav><main id="main-content"><h1 class="page-title">Software</h1><section class="content-grid"><div class="section-label"><h2>R and Python</h2></div><div class="content-column"><div id="software-examples" data-language="r">

  <div class="s3-main">

    <section aria-labelledby="s3-package-title">
      <h2 id="s3-package-title">cmrdesign</h2>
      <div class="s3-availability"><a href="https://cran.r-project.org/package=cmrdesign" target="_blank" rel="noopener">R on CRAN</a><span aria-hidden="true">·</span><a href="https://pypi.org/project/cmrdesign/" target="_blank" rel="noopener">Python on PyPI</a></div>
      <p class="s3-intro">Use pilot data to decide how to allocate the next wave of an experiment. <strong>cmrdesign</strong> implements the methods in <em>When and How to Pilot</em>, from a treatment–control split to designs with several arms, strata, or outcomes. It also includes tools for planning pilot sizes.</p>
      <div class="s3-resources">
        <a href="https://juancyamin.github.io/cmrdesign/" target="_blank" rel="noopener">Documentation</a>
        <a href="https://github.com/juancyamin/cmrdesign" target="_blank" rel="noopener">GitHub</a>
        <a href="https://juancyamin.github.io/files/when-and-how-to-pilot.pdf" target="_blank" rel="noopener">Paper</a>
        <details class="s3-citation"><summary>Citation</summary><pre><code>@misc{yamin2026pilot,
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
  note = {R and Python software, version 0.1.0},
  url = {https://juancyamin.github.io/cmrdesign/}
}</code></pre></details>
      </div>
      <div class="s3-worked-head">
        <h2>Worked examples</h2>
        <div class="s3-language" role="group" aria-label="Code language">
          <button type="button" data-language-button="r" aria-pressed="true">R</button>
          <button type="button" data-language-button="python" aria-pressed="false">Python</button>
        </div>
      </div>
      <div class="s3-install">
        <span class="s3-small-label">Install once</span>
        <code data-code-language="r">install.packages("cmrdesign")</code>
        <code data-code-language="python" hidden>python -m pip install cmrdesign</code>
        <a href="https://juancyamin.github.io/cmrdesign/#quick-start" target="_blank" rel="noopener">Two-arm quick start ↗</a>
      </div>
      <div class="s3-example-picker" role="group" aria-label="Choose a worked example">
        <button type="button" data-example-button="two-arm" aria-expanded="true" aria-controls="s3-two-arm">Two arms</button>
        <button type="button" data-example-button="binary" aria-expanded="false" aria-controls="s3-binary">Binary outcomes</button>
        <button type="button" data-example-button="unbounded" aria-expanded="false" aria-controls="s3-unbounded">Unbounded outcomes</button>
        <button type="button" data-example-button="multiarm" aria-expanded="false" aria-controls="s3-multiarm">Multiple arms</button>
        <button type="button" data-example-button="stratified" aria-expanded="false" aria-controls="s3-stratified">Stratified experiments</button>
        <button type="button" data-example-button="outcomes" aria-expanded="false" aria-controls="s3-outcomes">Multiple outcomes</button>
        <button type="button" data-example-button="proxy" aria-expanded="false" aria-controls="s3-proxy">Proxy outcomes</button>
        <button type="button" data-example-button="planning" aria-expanded="false" aria-controls="s3-planning">Pilot planning</button>
      </div>
      <p class="s3-picker-hint" hidden>Choose an example to see its code and results.</p>

      <section class="s3-example" id="s3-two-arm" aria-labelledby="s3-two-arm-title">
        <p class="s3-eyebrow">Two arms</p>
        <h3 id="s3-two-arm-title">One treatment, one control</h3>
        <p class="s3-scenario">Start with the standard setting: a pilot with 200 observations in each arm and an outcome known to lie between 0 and 1. Use the pilot to choose the treatment–control split for 1,000 main-wave participants.</p>
        <div class="s3-example-grid">
          <div class="s3-code-pane">
            <details class="s3-data"><summary>Example data · 400 pilot observations</summary>
              <p>The illustrative treatment outcomes are more variable than the control outcomes. The 0–1 bounds are known in advance.</p>
              <pre data-code-language="r"><code>z &lt;- rep(c(0.05, 0.15, 0.35, 0.65, 0.95), 40)
d &lt;- rep(c(1, 0), each = 200)
y &lt;- c(z, 0.4 + 0.2 * z)</code></pre>
              <pre data-code-language="python" hidden><code>import numpy as np

z = np.tile([0.05, 0.15, 0.35, 0.65, 0.95], 40)
d = np.repeat([1, 0], 200)
y = np.r_[z, 0.4 + 0.2 * z]</code></pre>
            </details>
            <pre class="s3-code-main" data-code-language="r"><code>library(cmrdesign)

fit &lt;- cmr_two_arm(
  y, d, alpha = 0.05, method = <span class="s3-string">"bounded"</span>
)

allocation &lt;- realize_allocation(
  fit, n_main = 1000
)
allocation$counts</code></pre>
            <pre class="s3-code-main" data-code-language="python" hidden><code>import cmrdesign as cmr

fit = cmr.cmr_two_arm(
    y, d, alpha=0.05, method=<span class="s3-string">"bounded"</span>
)

allocation = cmr.realize_allocation(
    fit, n_main=1000
)
print(allocation.counts)</code></pre>
          </div>
          <div class="s3-result">
            <h4>Main-wave allocation</h4>
            <p class="s3-sub">Number of participants · 1,000 total</p>
            <table class="s3-table" aria-label="Two-arm participant counts"><thead><tr><th scope="col">Assignment</th><th scope="col">Participants</th></tr></thead><tbody><tr><td>Treatment</td><td>692</td></tr><tr><td>Control</td><td>308</td></tr></tbody></table>
            <p class="s3-explanation">The rule allocates more observations to the more variable arm while accounting for uncertainty in the pilot variance estimates.</p>
            <p class="s3-caption">For an outcome on another bounded scale, supply its known bounds when normalizing.</p>
            <a class="s3-guide" href="https://juancyamin.github.io/cmrdesign/reference/cmr_two_arm.html" target="_blank" rel="noopener">Two-arm documentation ↗</a>
          </div>
        </div>
      </section>

      <section class="s3-example" id="s3-binary" aria-labelledby="s3-binary-title" hidden>
        <p class="s3-eyebrow">Binary outcomes</p>
        <h3 id="s3-binary-title">When the outcome is zero or one</h3>
        <p class="s3-scenario">The pilot records a binary outcome, such as take-up. Exact Bernoulli confidence bounds use the outcome’s structure to inform the main-wave allocation.</p>
        <div class="s3-example-grid">
          <div class="s3-code-pane">
            <details class="s3-data"><summary>Example data · 400 pilot observations</summary>
              <p>100 successes out of 200 in treatment, and 20 out of 200 in control.</p>
              <pre data-code-language="r"><code>d &lt;- rep(c(1, 0), each = 200)
y &lt;- c(rep(1, 100), rep(0, 100),
       rep(1, 20), rep(0, 180))</code></pre>
              <pre data-code-language="python" hidden><code>import numpy as np

d = np.repeat([1, 0], 200)
y = np.r_[np.ones(100), np.zeros(100),
          np.ones(20), np.zeros(180)]</code></pre>
            </details>
            <pre class="s3-code-main" data-code-language="r"><code>library(cmrdesign)

fit &lt;- cmr_two_arm(
  y, d, alpha = 0.05, method = <span class="s3-string">"bernoulli"</span>
)

allocation &lt;- realize_allocation(
  fit, n_main = 1000
)
allocation$counts</code></pre>
            <pre class="s3-code-main" data-code-language="python" hidden><code>import cmrdesign as cmr

fit = cmr.cmr_two_arm(
    y, d, alpha=0.05, method=<span class="s3-string">"bernoulli"</span>
)

allocation = cmr.realize_allocation(
    fit, n_main=1000
)
print(allocation.counts)</code></pre>
          </div>
          <div class="s3-result">
            <h4>Main-wave allocation</h4><p class="s3-sub">Number of participants · 1,000 total</p>
            <table class="s3-table" aria-label="Binary-outcome participant counts"><thead><tr><th scope="col">Assignment</th><th scope="col">Participants</th></tr></thead><tbody><tr><td>Treatment</td><td>625</td></tr><tr><td>Control</td><td>375</td></tr></tbody></table>
            <p class="s3-explanation">The confidence set uses exact bounds for the binary success probabilities. With outcomes coded 0/1, <code>method = "auto"</code> selects this method too.</p>
            <a class="s3-guide" href="https://juancyamin.github.io/cmrdesign/articles/binary-outcomes.html" target="_blank" rel="noopener">Binary-outcome guide ↗</a>
          </div>
        </div>
      </section>

      <section class="s3-example" id="s3-unbounded" aria-labelledby="s3-unbounded-title" hidden>
        <p class="s3-eyebrow">Unbounded outcomes</p>
        <h3 id="s3-unbounded-title">Work with outcomes on their original scale</h3>
        <p class="s3-scenario">For a raw outcome without known support bounds, use a kurtosis assumption to construct the variance confidence set. Here we assume a kurtosis bound of 3 in each arm and plan a main wave of 10,000 observations.</p>
        <div class="s3-example-grid">
          <div class="s3-code-pane">
            <details class="s3-data"><summary>Example data · 2,000 pilot observations</summary>
              <p>Fixed normal-quantile values create reproducible illustrative outcomes, with different scales across arms.</p>
              <pre data-code-language="r"><code>u &lt;- (((0:999) * 137) %% 1000 + 0.5) / 1000
z &lt;- qnorm(u)
d &lt;- rep(c(1, 0), each = 1000)
y &lt;- c(50 + 13 * z, 50 + 8 * rev(z))</code></pre>
              <pre data-code-language="python" hidden><code>import numpy as np
from statistics import NormalDist

u = ((np.arange(1000) * 137) % 1000 + 0.5) / 1000
z = np.array([NormalDist().inv_cdf(p) for p in u])
d = np.repeat([1, 0], 1000)
y = np.r_[50 + 13 * z, 50 + 8 * z[::-1]]</code></pre>
            </details>
            <pre class="s3-code-main" data-code-language="r"><code>library(cmrdesign)

fit &lt;- cmr_unbounded(
  y, d, psi = 3, alpha = 0.05
)

allocation &lt;- realize_allocation(
  fit, n_main = 10000
)
allocation$counts</code></pre>
            <pre class="s3-code-main" data-code-language="python" hidden><code>import cmrdesign as cmr

fit = cmr.cmr_unbounded(
    y, d, psi=3, alpha=0.05
)

allocation = cmr.realize_allocation(
    fit, n_main=10000
)
print(allocation.counts)</code></pre>
          </div>
          <div class="s3-result">
            <h4>Main-wave allocation</h4><p class="s3-sub">Number of participants · 10,000 total</p>
            <table class="s3-table" aria-label="Unbounded-outcome participant counts"><thead><tr><th scope="col">Assignment</th><th scope="col">Participants</th></tr></thead><tbody><tr><td>Treatment</td><td>6,241</td></tr><tr><td>Control</td><td>3,759</td></tr></tbody></table>
            <p class="s3-explanation">The median-of-means construction replaces known support bounds with a supplied kurtosis bound, <code>psi</code>. That bound needs an independent justification.</p>
            <p class="s3-caption">Small pilots can return balanced assignment without a finite regret certificate.</p>
            <a class="s3-guide" href="https://juancyamin.github.io/cmrdesign/reference/cmr_unbounded.html" target="_blank" rel="noopener">Unbounded-outcome documentation ↗</a>
          </div>
        </div>
      </section>

      <section class="s3-example" id="s3-outcomes" aria-labelledby="s3-outcomes-title" hidden>
        <p class="s3-eyebrow">Multiple outcomes</p>
        <h3 id="s3-outcomes-title">Choose one allocation for several outcomes</h3>
        <p class="s3-scenario">An experiment has two co-primary binary outcomes. Give them weights of 0.6 and 0.4, then choose a treatment–control split that accounts for both.</p>
        <div class="s3-example-grid">
          <div class="s3-code-pane">
            <details class="s3-data"><summary>Example data · 400 units, two outcomes</summary>
              <p>Rows are pilot participants and columns are outcomes; each participant has one treatment indicator.</p>
              <pre data-code-language="r"><code>d &lt;- rep(c(1, 0), each = 200)
y1 &lt;- c(rep(1, 100), rep(0, 100),
        rep(1, 20), rep(0, 180))
y2 &lt;- c(rep(1, 40), rep(0, 160),
        rep(1, 80), rep(0, 120))
y &lt;- cbind(y1, y2)</code></pre>
              <pre data-code-language="python" hidden><code>import numpy as np

d = np.repeat([1, 0], 200)
y1 = np.r_[np.ones(100), np.zeros(100),
           np.ones(20), np.zeros(180)]
y2 = np.r_[np.ones(40), np.zeros(160),
           np.ones(80), np.zeros(120)]
y = np.column_stack([y1, y2])</code></pre>
            </details>
            <pre class="s3-code-main" data-code-language="r"><code>library(cmrdesign)

fit &lt;- cmr_multiple_outcomes(
  y, d, weights = c(0.6, 0.4),
  estimand = <span class="s3-string">"coprimary"</span>,
  alpha = 0.05, method = <span class="s3-string">"auto"</span>
)

allocation &lt;- realize_allocation(
  fit, n_main = 1000
)
allocation$counts</code></pre>
            <pre class="s3-code-main" data-code-language="python" hidden><code>import cmrdesign as cmr

fit = cmr.cmr_multiple_outcomes(
    y, d, weights=[0.6, 0.4],
    estimand=<span class="s3-string">"coprimary"</span>,
    alpha=0.05, method=<span class="s3-string">"auto"</span>
)

allocation = cmr.realize_allocation(
    fit, n_main=1000
)
print(allocation.counts)</code></pre>
          </div>
          <div class="s3-result">
            <h4>Main-wave allocation</h4><p class="s3-sub">Number of participants · 1,000 total</p>
            <table class="s3-table" aria-label="Multiple-outcome participant counts"><thead><tr><th scope="col">Assignment</th><th scope="col">Participants</th></tr></thead><tbody><tr><td>Treatment</td><td>545</td></tr><tr><td>Control</td><td>455</td></tr></tbody></table>
            <p class="s3-explanation">The co-primary setting weights the variances of separate outcome estimators. Choose the outcome weights to reflect the study’s priorities.</p>
            <p class="s3-caption">For a single weighted outcome index, use the package’s separate <code>estimand = "index"</code> option.</p>
            <a class="s3-guide" href="https://juancyamin.github.io/cmrdesign/reference/cmr_multiple_outcomes.html" target="_blank" rel="noopener">Multiple-outcome documentation ↗</a>
          </div>
        </div>
      </section>

      <section class="s3-example" id="s3-proxy" aria-labelledby="s3-proxy-title" hidden>
        <p class="s3-eyebrow">Proxy outcomes</p>
        <h3 id="s3-proxy-title">Plan before the primary outcome is observed</h3>
        <p class="s3-scenario">Only a short-run proxy is available in the pilot. Assume the primary and proxy outcomes lie in [0, 1], and their standard deviations differ by at most 0.05 in each arm.</p>
        <div class="s3-example-grid">
          <div class="s3-code-pane">
            <details class="s3-data"><summary>Example data · 400 proxy observations</summary>
              <p>The binary proxy has 100 successes in treatment and 20 in control, each out of 200 observations. The bridge bound is supplied separately.</p>
              <pre data-code-language="r"><code>d &lt;- rep(c(1, 0), each = 200)
proxy_y &lt;- c(rep(1, 100), rep(0, 100),
             rep(1, 20), rep(0, 180))</code></pre>
              <pre data-code-language="python" hidden><code>import numpy as np

d = np.repeat([1, 0], 200)
proxy_y = np.r_[np.ones(100), np.zeros(100),
                np.ones(20), np.zeros(180)]</code></pre>
            </details>
            <pre class="s3-code-main" data-code-language="r"><code>library(cmrdesign)

fit &lt;- cmr_proxy(
  proxy_y, d, zeta = 0.05,
  alpha = 0.05, method = <span class="s3-string">"auto"</span>
)

allocation &lt;- realize_allocation(
  fit, n_main = 1000
)
allocation$counts</code></pre>
            <pre class="s3-code-main" data-code-language="python" hidden><code>import cmrdesign as cmr

fit = cmr.cmr_proxy(
    proxy_y, d, zeta=0.05,
    alpha=0.05, method=<span class="s3-string">"auto"</span>
)

allocation = cmr.realize_allocation(
    fit, n_main=1000
)
print(allocation.counts)</code></pre>
          </div>
          <div class="s3-result">
            <h4>Main-wave allocation</h4><p class="s3-sub">Number of participants · 1,000 total</p>
            <table class="s3-table" aria-label="Proxy-outcome participant counts"><thead><tr><th scope="col">Assignment</th><th scope="col">Participants</th></tr></thead><tbody><tr><td>Treatment</td><td>613</td></tr><tr><td>Control</td><td>387</td></tr></tbody></table>
            <p class="s3-explanation">The bridge radius, <code>zeta</code>, widens the uncertainty set before choosing an allocation for the primary outcome. Its value needs substantive or external evidence.</p>
            <a class="s3-guide" href="https://juancyamin.github.io/cmrdesign/reference/cmr_proxy.html" target="_blank" rel="noopener">Proxy-outcome documentation ↗</a>
          </div>
        </div>
      </section>

      <section class="s3-example" id="s3-multiarm" aria-labelledby="s3-multiarm-title" hidden>
        <p class="s3-eyebrow">Multiple arms</p>
        <h3 id="s3-multiarm-title">Several treatments, one control</h3>
        <p class="s3-scenario">A pilot compares two treatments with a shared control. Use its binary outcomes to allocate 1,000 main-wave participants across the three arms.</p>
        <div class="s3-example-grid">
          <div class="s3-code-pane">
            <details class="s3-data"><summary>Example data · 600 pilot observations</summary>
              <p>Illustrative 0/1 data: 20, 60, and 100 successes out of 200 observations in control, treatment 1, and treatment 2.</p>
              <pre data-code-language="r"><code>arm &lt;- rep(0:2, each = 200)
y &lt;- unlist(lapply(c(20, 60, 100), function(k) {
  c(rep(1, k), rep(0, 200 - k))
}))</code></pre>
              <pre data-code-language="python" hidden><code>import numpy as np

arm = np.repeat([0, 1, 2], 200)
y = np.concatenate([
    np.r_[np.ones(k), np.zeros(200 - k)]
    for k in [20, 60, 100]
])</code></pre>
            </details>
            <pre class="s3-code-main" data-code-language="r"><code>library(cmrdesign)

fit &lt;- cmr_multiarm(
  y, arm, control_arm = 0,
  alpha = 0.05, method = <span class="s3-string">"auto"</span>
)

allocation &lt;- realize_allocation(
  fit, n_main = 1000
)
allocation$counts</code></pre>
            <pre class="s3-code-main" data-code-language="python" hidden><code>import cmrdesign as cmr

fit = cmr.cmr_multiarm(
    y, arm, control_arm=0,
    alpha=0.05, method=<span class="s3-string">"auto"</span>
)

allocation = cmr.realize_allocation(
    fit, n_main=1000
)
print(allocation.counts)</code></pre>
          </div>
          <div class="s3-result">
            <h4>Main-wave allocation</h4>
            <p class="s3-sub">Number of participants · 1,000 total</p>
            <div role="img" aria-label="Allocation: control 308 participants, treatment 1 331, treatment 2 361.">
              <div class="s3-bar-row"><div class="s3-bar-label"><span>Control</span><strong>308</strong></div><div class="s3-bar-track"><div class="s3-bar" style="width:30.8%"></div></div></div>
              <div class="s3-bar-row"><div class="s3-bar-label"><span>Treatment 1</span><strong>331</strong></div><div class="s3-bar-track"><div class="s3-bar" style="width:33.1%"></div></div></div>
              <div class="s3-bar-row"><div class="s3-bar-label"><span>Treatment 2</span><strong>361</strong></div><div class="s3-bar-track"><div class="s3-bar" style="width:36.1%"></div></div></div>
            </div>
            <p class="s3-explanation">The rule accounts for uncertainty in each arm’s variance. <code>realize_allocation()</code> turns the recommended shares into whole participant counts.</p>
            <a class="s3-guide" href="https://juancyamin.github.io/cmrdesign/reference/cmr_multiarm.html" target="_blank" rel="noopener">Multi-arm documentation ↗</a>
          </div>
        </div>
      </section>

      <section class="s3-example" id="s3-stratified" aria-labelledby="s3-stratified-title" hidden>
        <p class="s3-eyebrow">Stratified experiments</p>
        <h3 id="s3-stratified-title">Allocate across groups as well as treatments</h3>
        <p class="s3-scenario">The target population is 60% urban and 40% rural. With pilot outcomes from both groups, choose how to allocate 1,000 main-wave observations across the four treatment-by-stratum cells.</p>
        <div class="s3-example-grid">
          <div class="s3-code-pane">
            <details class="s3-data"><summary>Example data · 480 pilot observations</summary>
              <p>Each cell has 120 binary observations. Success counts are 6 and 30 in urban treatment/control, and 54 and 12 in rural treatment/control.</p>
              <pre data-code-language="r"><code>strata &lt;- rep(c(<span class="s3-string">"Urban"</span>, <span class="s3-string">"Rural"</span>), each = 240)
d &lt;- rep(rep(c(1, 0), each = 120), 2)
y &lt;- unlist(lapply(c(6, 30, 54, 12), function(k) {
  c(rep(1, k), rep(0, 120 - k))
}))</code></pre>
              <pre data-code-language="python" hidden><code>import numpy as np

strata = np.repeat([<span class="s3-string">"Urban"</span>, <span class="s3-string">"Rural"</span>], 240)
d = np.tile(np.repeat([1, 0], 120), 2)
y = np.concatenate([
    np.r_[np.ones(k), np.zeros(120 - k)]
    for k in [6, 30, 54, 12]
])</code></pre>
            </details>
            <pre class="s3-code-main" data-code-language="r"><code>library(cmrdesign)

fit &lt;- cmr_stratified(
  y, d, strata,
  strata_share = c(Urban = 0.6, Rural = 0.4),
  alpha = 0.05, method = <span class="s3-string">"auto"</span>
)

allocation &lt;- realize_allocation(
  fit, n_main = 1000
)
allocation$counts</code></pre>
            <pre class="s3-code-main" data-code-language="python" hidden><code>import cmrdesign as cmr

fit = cmr.cmr_stratified(
    y, d, strata,
    strata_share={<span class="s3-string">"Urban"</span>: 0.6, <span class="s3-string">"Rural"</span>: 0.4},
    alpha=0.05, method=<span class="s3-string">"auto"</span>
)

allocation = cmr.realize_allocation(
    fit, n_main=1000
)
print(allocation.counts)</code></pre>
          </div>
          <div class="s3-result">
            <h4>Main-wave allocation</h4>
            <p class="s3-sub">Number of participants · 1,000 total</p>
            <table class="s3-table" aria-label="Participant counts by stratum and assignment">
              <thead><tr><th scope="col">Stratum</th><th scope="col">Treatment</th><th scope="col">Control</th><th scope="col">Total</th></tr></thead>
              <tbody><tr><td>Urban</td><td>193</td><td>357</td><td>550</td></tr><tr><td>Rural</td><td>274</td><td>176</td><td>450</td></tr></tbody>
              <tfoot><tr><td>Total</td><td>467</td><td>533</td><td>1,000</td></tr></tfoot>
            </table>
            <p class="s3-explanation">Population shares define the target. The recommended sample shares can differ: here, 55% of observations go to the urban stratum and 45% to the rural stratum.</p>
            <a class="s3-guide" href="https://juancyamin.github.io/cmrdesign/reference/cmr_stratified.html" target="_blank" rel="noopener">Stratified-design documentation ↗</a>
          </div>
        </div>
      </section>

      <section class="s3-example" id="s3-planning" aria-labelledby="s3-planning-title" hidden>
        <p class="s3-eyebrow">Pilot planning</p>
        <h3 id="s3-planning-title">How much of the sample should go to a pilot?</h3>
        <p class="s3-scenario">Before collecting data, suppose you have a budget of 3,000 observations. Prior studies suggest treatment and control standard deviations of 0.18 and 0.28 for an outcome bounded between 0 and 1.</p>
        <div class="s3-example-grid">
          <div class="s3-code-pane">
            <pre class="s3-code-main" data-code-language="r"><code>library(cmrdesign)

plan &lt;- cmr_plan(
  n = 3000, sigma1 = 0.18, sigma0 = 0.28,
  alpha = 0.05, method = <span class="s3-string">"bounded"</span>,
  accounting = <span class="s3-string">"design_only"</span>,
  desired_pilot = 120
)

plan$recommendation
plan$desired_status</code></pre>
            <pre class="s3-code-main" data-code-language="python" hidden><code>import cmrdesign as cmr

plan = cmr.cmr_plan(
    n=3000, sigma1=0.18, sigma0=0.28,
    alpha=0.05, method=<span class="s3-string">"bounded"</span>,
    accounting=<span class="s3-string">"design_only"</span>,
    desired_pilot=120
)

print(plan[<span class="s3-string">"recommendation"</span>])
print(plan[<span class="s3-string">"desired_status"</span>])</code></pre>
          </div>
          <div class="s3-result">
            <h4>Candidate pilot sizes</h4>
            <p class="s3-range-number">72–134</p>
            <p class="s3-range-unit">observations, in even increments</p>
            <p class="s3-proposal">A proposed pilot of <strong>120</strong> is inside this range.</p>
            <p class="s3-explanation">These sizes pass necessary conditions for adaptation to be worthwhile. The range does not establish an optimal size or guarantee a gain.</p>
            <p class="s3-caption">This example counts pilot observations as a cost to the main wave. Pooled analysis uses different accounting.</p>
            <a class="s3-guide" href="https://juancyamin.github.io/cmrdesign/articles/pilot-planning.html" target="_blank" rel="noopener">Pilot-planning guide ↗</a>
          </div>
        </div>
      </section>
      <p class="s3-bottom" data-example-note>Examples use cmrdesign 0.1.0 and illustrative data. For assumptions, regret certificates, and further examples, see the <a href="https://juancyamin.github.io/cmrdesign/" target="_blank" rel="noopener">documentation</a>.</p>
    </section>
  </div>
</div></div></section></main></div>
</div>
