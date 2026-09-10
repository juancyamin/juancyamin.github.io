---
layout: splash
permalink: /
title: "Juan C. Yamin"
description: "Econometrician and 2026-27 Economics Job Market Candidate"
redirect_from:
  - /about/
  - /about.html
---

<style>
  :root, html[data-theme="dark"] {
    --global-base-color:#f7f7f4; --global-bg-color:#f7f7f4; --global-footer-bg-color:#e8e6df;
    --global-link-color:#8f1d2c; --global-link-color-hover:#5e111c; --global-link-color-visited:#8f1d2c;
    --global-masthead-link-color:#201b18; --global-masthead-link-color-hover:#8f1d2c;
    --global-text-color:#201b18; --global-text-color-light:#6b6660; --global-border-color:#d8d6cf; color-scheme:light;
    --mast:63px;
  }
  html,body{margin:0;padding:0;background:#f7f7f4}
  html{scroll-snap-type:y mandatory;scroll-padding-top:var(--mast);scroll-behavior:smooth}
  .masthead{position:sticky;top:0;z-index:30;background:#f7f7f4;height:var(--mast);box-sizing:border-box}
  .greedy-nav,#site-nav{background:transparent}
  #main{padding:0;margin:0;max-width:none}
  #main article,.page__content{margin:0;padding:0}
  .page__footer{display:none}

  .page__content .d2{color:#201b18;margin:0;max-width:none;text-align:left}
  .page__content .d2 a{color:#8f1d2c;text-decoration:none}
  .page__content .d2 a:hover{color:#5e111c}
  .page__content .d2 p{color:#3f3a35;font-size:.97rem;line-height:1.6;margin:0 0 .85rem}

  /* Fill the screen, but grow with the content; reserve room for the next-block cue. */
  .page__content .d2-band{position:relative;box-sizing:border-box;min-height:calc(100vh - var(--mast));overflow:visible;
    scroll-snap-align:start;scroll-snap-stop:always;display:flex;flex-direction:column;justify-content:center;
    margin:0;padding:1.4rem 1.5rem 5rem}
  .page__content .d2-band-tint{background:#efeee9}
  .page__content .d2-band > .d2-inner{width:100%;max-width:980px;margin:0 auto}
  .page__content .d2-two{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:3.5rem;align-items:start}
  .page__content .d2-two-jmp{grid-template-columns:minmax(0,5fr) minmax(0,6fr)}
  .page__content .d2-two-sw{grid-template-columns:minmax(0,4fr) minmax(0,5fr);gap:2.6rem}

  /* next-block cue (hero and every block but the last) */
  .page__content .d2-next{position:absolute;left:50%;bottom:.9rem;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:.25rem;
    color:#8f1d2c;font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;white-space:nowrap}
  .page__content .d2-next svg{width:22px;height:22px;stroke:#8f1d2c;fill:none;stroke-width:2;display:block;animation:d2bob 2.2s ease-in-out infinite}
  .page__content .d2-next:hover{color:#5e111c}
  @keyframes d2bob{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}

  /* labels, headings */
  .page__content .d2 p.d2-kicker,.page__content .d2 p.d2-label{color:#8f1d2c;font-size:.82rem;font-weight:700;letter-spacing:.1em;line-height:1.3;margin:0 0 .7rem;text-transform:uppercase}
  .page__content .d2 h1{color:#201b18;font-family:Georgia,"Times New Roman",serif;font-size:clamp(3rem,6vw,3.9rem);font-weight:500;letter-spacing:0;line-height:1;margin:0 0 1.3rem}
  .page__content .d2 h2{border:0;color:#201b18;font-family:Georgia,"Times New Roman",serif;font-size:clamp(1.8rem,3.2vw,2.3rem);font-weight:500;letter-spacing:0;line-height:1.12;margin:0 0 .8rem;padding:0}
  .page__content .d2 h2 a,.page__content .d2-entry h3 a{color:#201b18}
  .page__content .d2 h2 a:hover,.page__content .d2-entry h3 a:hover{color:#8f1d2c}
  .page__content .d2 p.d2-standfirst{color:#2d2824;font-family:Georgia,"Times New Roman",serif;font-size:clamp(1.06rem,1.6vw,1.2rem);font-weight:600;line-height:1.45;margin:0 0 .7rem}

  /* hero */
  .page__content .d2-hero-grid{align-items:center;display:grid;gap:2.5rem;grid-template-columns:minmax(0,1fr) minmax(190px,220px)}
  .page__content .d2 p.d2-intro{color:#2d2824;font-family:Georgia,"Times New Roman",serif;font-size:clamp(1.08rem,1.7vw,1.28rem);line-height:1.5;max-width:640px;margin:0 0 .8rem}
  .page__content .d2 p.d2-committee{color:#6b6660;font-size:.95rem;line-height:1.5;margin:.5rem 0 .4rem}
  .page__content .d2 p.d2-committee a{color:#3f3a35;border-bottom:1px solid #c9c6bd}
  .page__content .d2 p.d2-committee a:hover{color:#8f1d2c;border-color:currentColor}
  .page__content .d2-photo{margin:0;width:100%} .page__content .d2-photo img{display:block;height:auto;width:100%}
  .page__content .d2-link-row{align-items:center;display:flex;flex-wrap:wrap;gap:.2rem 1.25rem;margin-top:1.1rem}
  .page__content .d2-link-row a{align-items:center;border-bottom:1px solid currentColor;color:#201b18;display:inline-flex;font-size:.95rem;font-weight:700;line-height:1.35;min-height:2.35rem;padding:.38rem 0 .2rem}
  .page__content .d2-link-row a.d2-primary{color:#8f1d2c}
  .page__content .d2-link-row a.d2-primary.d2-internal:after{content:" \2192"}
  .page__content .d2-profile-row{align-items:center;display:flex;flex-wrap:wrap;gap:.1rem 1.1rem;margin-top:.35rem}
  .page__content .d2-profile-row a{align-items:center;border-bottom:1px solid currentColor;color:#201b18;display:inline-flex;font-size:.9rem;font-weight:600;line-height:1.35;min-height:2.25rem;padding:.32rem 0 .18rem}

  /* JMP block: separate the heading, abstract, and results with room to breathe. */
  .page__content .d2 .d2-band-jmp{padding-bottom:4.5rem}
  .page__content .d2-jmp-head{text-align:center;max-width:1080px;margin:0 auto 1rem}
  .page__content .d2 .d2-jmp-head h2{font-size:clamp(1.55rem,3vw,2.15rem);margin-bottom:.65rem}
  .page__content .d2 .d2-jmp-head p.d2-label{margin-bottom:.65rem}
  .page__content .d2-abstract{max-width:920px;margin:0 auto}
  .page__content .d2 p.d2-abstract-label{color:#8f1d2c;font-size:.71rem;font-weight:700;letter-spacing:.12em;
    text-transform:uppercase;text-align:center;margin:0 0 .5rem}
  .page__content .d2-abstract p.d2-abstract-body{text-align:left;margin:0;color:#3f3a35}
  .page__content .d2-band-jmp > .d2-inner{max-width:1080px}
  .page__content .d2 .d2-jmp-head .d2-standfirst{font-size:clamp(1rem,1.6vw,1.15rem);margin:0 auto .4rem;max-width:none}
  .page__content .d2-colhead{color:#8f1d2c;font-size:.71rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
    margin:0 0 .45rem;padding-bottom:.35rem;border-bottom:1px solid #d3d0c7}
  .page__content .d2-results{text-align:center;max-width:920px;margin:.95rem auto 0}
  .page__content .d2 p.d2-lead{color:#5b5650;font-size:.9rem;margin:0 auto .5rem;max-width:640px}
  .page__content .d2-stats{display:grid;grid-template-columns:1fr 1fr;gap:2.4rem;border-top:2px solid #8f1d2c;padding-top:.7rem;margin:0}
  .page__content .d2-stat-n{display:block;font-family:Georgia,"Times New Roman",serif;font-size:2.4rem;line-height:1;color:#8f1d2c;margin-bottom:.3rem}
  .page__content .d2-stats p{font-size:.88rem;line-height:1.45;color:#5b5650;margin:0 auto;max-width:30ch}
  .page__content .d2-link-center{justify-content:center;margin-top:.65rem}
  .page__content .d2-link-center a{min-height:1.9rem;padding:.25rem 0 .15rem}

  /* Other Research: stacked papers with a shared reading width. */
  .page__content #other-research > .d2-inner{max-width:840px}
  .page__content #other-research .d2-section-head{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1.65rem}
  .page__content #other-research .d2-section-head h2{margin-bottom:0}
  .page__content #other-research .d2-section-head > .d2-link-row{margin:0;flex-shrink:0}
  .page__content #other-research .d2-section-head .d2-link-row a{min-height:0}
  .page__content #other-research .d2-entry{display:block}
  .page__content #other-research .d2-entry + .d2-entry{margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid #d8d6cf}
  .page__content #other-research .d2-entry h3{color:#201b18;font-family:Georgia,"Times New Roman",serif;font-size:1.28rem;font-weight:600;line-height:1.25;margin:0 0 .3rem}
  .page__content #other-research .d2-entry p.d2-meta{color:#6b6660;font-size:.9rem;line-height:1.5;margin:0 0 .35rem}
  .page__content #other-research .d2-entry > p{margin-bottom:.35rem}
  .page__content #other-research .d2-entry .d2-link-row{margin-top:0}
  .page__content #other-research .d2-entry .d2-link-row a{font-size:.9rem;min-height:2.1rem}
  @media (max-width:780px){
    .page__content #other-research .d2-section-head{align-items:flex-start;flex-direction:column}
    .page__content #other-research .d2-entry + .d2-entry{margin-top:1.6rem;padding-top:1.6rem}
  }

  /* Software: light code panel, matches the page palette */
  .page__content .d2-codebox{background:#fbfaf7;border:1px solid #ddd9cf;border-radius:6px;overflow:hidden;margin:0 0 1rem}
  .page__content .d2 p.d2-code-head{background:#f2f0e9;border-bottom:1px solid #e4e0d6;color:#8b857c;font-size:.68rem;font-weight:700;
    letter-spacing:.12em;text-transform:uppercase;margin:0;padding:.45rem .95rem}
  .page__content .d2-code{background:transparent;color:#35302b;font:.85rem/1.7 Menlo,Consolas,"Liberation Mono",monospace;
    padding:.85rem .95rem;margin:0;overflow-x:auto;white-space:pre}
  .page__content .d2-code .c{color:#a6a096}
  .page__content .d2-code .s{color:#8f1d2c}
  .page__content .d2-foot{position:absolute;left:0;right:0;bottom:0;padding:.7rem 1.5rem;background:#e8e6df;color:#6b6660;font-size:.78rem}
  .page__content .d2-foot .d2-inner{max-width:980px;margin:0 auto}

  /* Short laptop windows: tighten the content while preserving the cue's clearance. */
  @media (min-width:781px) and (min-height:601px) and (max-height:760px){
    .page__content .d2-band{padding:1rem 1.5rem 5rem}
    .page__content .d2 p{font-size:.89rem;line-height:1.45;margin-bottom:.5rem}
    .page__content .d2-two{gap:2.6rem}
    .page__content .d2 p.d2-standfirst{font-size:1rem;margin-bottom:.45rem}
    .page__content .d2 h2{font-size:1.75rem;margin-bottom:.5rem}
    .page__content .d2-jmp-head{margin-bottom:.85rem}
    .page__content .d2-results{margin-top:.85rem}
    .page__content .d2 p.d2-lead{font-size:.84rem}
    .page__content .d2-stat-n{font-size:1.85rem;margin-bottom:.2rem}
    .page__content .d2-stats{padding-top:.65rem}
    .page__content .d2-link-center{margin-top:.65rem}
    .page__content .d2-stats p{font-size:.84rem}
    .page__content .d2-colhead{margin-bottom:.45rem;padding-bottom:.3rem}
    .page__content .d2-code{font-size:.78rem;line-height:1.55}
  }

  /* Keep the research blocks compact in shorter desktop windows. */
  @media (min-width:781px) and (min-height:601px) and (max-height:680px){
    .page__content #other-research{padding-top:.65rem;padding-bottom:4.5rem}
    .page__content #other-research .d2-section-head{margin-bottom:1.1rem}
    .page__content #other-research .d2-entry + .d2-entry{margin-top:1rem;padding-top:1rem}
    .page__content #other-research .d2-entry .d2-link-row a{min-height:1.9rem}
    .page__content .d2 .d2-band-jmp{padding-top:.55rem;padding-bottom:4.2rem}
    .page__content .d2-jmp-head{margin-bottom:.25rem}
    .page__content .d2 .d2-jmp-head h2{margin-bottom:.3rem}
    .page__content .d2 .d2-jmp-head p.d2-label{margin-bottom:.25rem}
    .page__content .d2 .d2-jmp-head .d2-standfirst{margin-bottom:.2rem}
    .page__content .d2 p.d2-abstract-label{margin-bottom:.15rem}
    .page__content .d2-abstract p.d2-abstract-body{line-height:1.4}
    .page__content .d2-results{margin-top:.25rem}
    .page__content .d2 p.d2-lead{margin-bottom:.25rem}
    .page__content .d2-stats{padding-top:.3rem}
    .page__content .d2-stat-n{margin-bottom:.1rem}
    .page__content .d2-stats p{line-height:1.35}
    .page__content .d2-link-center{margin-top:.15rem}
    .page__content .d2-link-center a{min-height:1.7rem}
  }

  /* phones and short windows: ordinary scrolling, single column */
  @media (max-width:780px), (max-height:600px){
    html{scroll-snap-type:none}
    .page__content .d2-band{height:auto;min-height:0;overflow:visible;padding:2.5rem 1.2rem}
    .page__content .d2 .d2-band-jmp{padding-bottom:2.5rem}
    .page__content .d2-next{display:none}
    .page__content .d2-two,.page__content .d2-two-jmp,.page__content .d2-two-sw{grid-template-columns:minmax(0,1fr);gap:1.6rem}
    .page__content .d2-hero-grid,.page__content .d2-two > *{min-width:0}
    .page__content .d2-hero-grid{gap:1.4rem;grid-template-columns:1fr}
    .page__content .d2-photo{max-width:150px;order:-1}
    .page__content .d2-foot{position:static;margin:2rem -1.2rem -2.5rem}
  }
</style>

<main class="d2" id="home">

  <section class="d2-band" id="top" aria-labelledby="home-title">
    <div class="d2-inner d2-hero-grid">
      <div>
        <p class="d2-kicker">2026&ndash;27 Economics Job Market Candidate</p>
        <h1 id="home-title">Juan C. Yamin</h1>
        <p class="d2-intro">I am a Ph.D. candidate in the Department of Economics at Brown University, with primary interests in applied econometrics.</p>
        <p class="d2-intro">I develop methods for using data to improve economic decisions. My work brings together statistical decision theory, causal inference, and experimental design.</p>
        <p class="d2-committee">Dissertation committee:
          <a href="https://economics.brown.edu/people/toru-kitagawa">Toru Kitagawa</a>,
          <a href="https://soonwookwon.github.io/">Soonwoo Kwon</a>, and
          <a href="https://economics.brown.edu/people/jonathan-roth">Jonathan Roth</a></p>
        <nav class="d2-link-row" aria-label="Main links">
          <a class="d2-primary d2-internal" href="/files/Juan_Yamin_CV.pdf">CV</a>
          <a class="d2-primary d2-internal" href="https://arxiv.org/abs/2506.18188">Job Market Paper</a>
          <a class="d2-primary d2-internal" href="mailto:juan_yamin_silva@brown.edu">Email</a>
        </nav>
        <nav class="d2-profile-row" aria-label="Profile links">
          <a href="https://scholar.google.com/citations?user=KWtxYJgAAAAJ">Google Scholar</a>
          <a href="https://github.com/juancyamin">GitHub</a>
          <a href="https://www.linkedin.com/in/juan-c-yamin/">LinkedIn</a>
        </nav>
      </div>
      <figure class="d2-photo"><img src="/images/profile.jpg" alt="Juan C. Yamin"></figure>
    </div>
    <a class="d2-next" href="#job-market-paper"><span>Job Market Paper</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9l8 8 8-8"/></svg></a>
  </section>

  <section class="d2-band d2-band-tint d2-band-jmp" id="job-market-paper" aria-labelledby="jmp-title">
    <div class="d2-inner">
      <header class="d2-jmp-head">
        <p class="d2-label">Job Market Paper</p>
        <h2 id="jmp-title"><a href="https://arxiv.org/abs/2506.18188">Poverty Targeting with Imperfect Information</a></h2>
        <p class="d2-standfirst">Better targeting needs better decisions, not just better income predictions.</p>
      </header>
      <div class="d2-abstract">
        <p class="d2-abstract-label">Abstract</p>
        <p class="d2-abstract-body">A key challenge for targeted antipoverty programs in developing countries is that policymakers must rely on estimated rather than observed income, which leads to substantial targeting errors. This paper studies how noisy income estimates should be translated into feasible transfers. I formulate this as a statistical decision problem in which a policymaker chooses transfers to minimize a poverty-targeting loss subject to a fixed budget and the constraint that transfers cannot be negative. I show that the standard plug-in rule, which treats estimated incomes as true, is inadmissible. I develop a nonparametric empirical Bayes targeting rule that assigns transfers using posterior distributions of poverty gaps. Although the budget and no-taxation constraints make the targeting rule nonsmooth, Bayes regret is governed by the accuracy of the posterior functionals that determine the oracle allocation.</p>
      </div>
      <div class="d2-results">
        <p class="d2-lead">In simulations from nine African countries, relative to plug-in OLS targeting:</p>
        <div class="d2-stats">
          <div><span class="d2-stat-n">1.8&times;</span><p>as many poor people reached, for the same budget</p></div>
          <div><span class="d2-stat-n">6.7%</span><p>less spending to achieve the same poverty-gap reduction</p></div>
        </div>
        <nav class="d2-link-row d2-link-center" aria-label="Job market paper links">
          <a class="d2-primary" href="https://arxiv.org/abs/2506.18188">Paper (arXiv)</a>
        </nav>
      </div>
    </div>
    <a class="d2-next" href="#other-research"><span>Other Research</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9l8 8 8-8"/></svg></a>
  </section>

  <section class="d2-band" id="other-research" aria-labelledby="other-title">
    <div class="d2-inner">
      <div class="d2-section-head">
        <h2 id="other-title">Other Research</h2>
        <nav class="d2-link-row" aria-label="Research links">
          <a class="d2-primary d2-internal" href="/research/">All research</a>
        </nav>
      </div>
      <div class="d2-research-list">
        <article class="d2-entry">
          <h3><a href="/research/#when-and-how-to-pilot">When and How to Pilot</a></h3>
          <p>Many experiments run in two waves: a small pilot, then a larger main wave. The pilot can inform how to split that main wave between treatment and control, but its variance estimates are themselves noisy. I develop a Conditional Minimax Regret rule that uses the pilot evidence while accounting for that uncertainty, with a finite-sample bound on the precision the chosen split can lose.</p>
          <nav class="d2-link-row" aria-label="Pilot paper links">
            <a class="d2-primary" href="https://arxiv.org/abs/2607.16982">Paper (arXiv)</a>
            <a href="#software">Software</a>
          </nav>
        </article>
        <article class="d2-entry">
          <h3><a href="/research/#birds-of-a-feather">Birds of a Feather Collude Together</a></h3>
          <p class="d2-meta">with Leopoldo Fergusson, Arturo Harker, and Carlos Molina<br>Conditionally accepted, <em>American Political Science Review</em></p>
          <p>Using close elections in Colombia, we study whether partisan alignment between mayors and governors facilitates corruption. Alignment increases the fabrication of student enrollment used to obtain education transfers, without improving actual enrollment or student performance.</p>
          <nav class="d2-link-row" aria-label="Corruption paper links">
            <a class="d2-primary" href="/files/subnational-alignment-corruption.pdf">Paper (PDF)</a>
          </nav>
        </article>
      </div>
    </div>
    <a class="d2-next" href="#software"><span>Software</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9l8 8 8-8"/></svg></a>
  </section>

  <section class="d2-band d2-band-tint" id="software" aria-labelledby="software-title">
    <div class="d2-inner d2-two d2-two-sw">
      <div>
        <p class="d2-label">Software</p>
        <h2 id="software-title">cmrdesign</h2>
        <p>cmrdesign is an R and Python package that implements the design rules from <em>When and How to Pilot</em>. Given pilot outcomes and treatment assignments, it recommends how to split the main experiment between treatment and control. It also reports a finite-sample bound on how much precision that split can lose relative to the best allocation. The package is available on CRAN and PyPI.</p>
        <nav class="d2-link-row" aria-label="Software links">
          <a class="d2-primary d2-internal" href="/software/">Software</a>
          <a href="https://juancyamin.github.io/cmrdesign/">Documentation</a>
          <a href="https://github.com/juancyamin/cmrdesign">GitHub</a>
        </nav>
      </div>
      <div>
        <div class="d2-codebox">
        <p class="d2-code-head">R</p>
<pre class="d2-code">install.packages(<span class="s">"cmrdesign"</span>)
library(cmrdesign)
fit &lt;- cmr_two_arm(y, d, alpha = 0.05,
                   method = <span class="s">"auto"</span>)
fit$pi     <span class="c"># share of the main wave to treat</span>
fit$U_CMR  <span class="c"># bound on precision lost vs. best split</span></pre>
        </div>
        <div class="d2-codebox">
        <p class="d2-code-head">Python</p>
<pre class="d2-code">pip install cmrdesign
import cmrdesign as cmr
fit = cmr.cmr_two_arm(y, d, alpha=0.05,
                      method=<span class="s">"auto"</span>)
fit.pi     <span class="c"># share of the main wave to treat</span>
fit.U_CMR  <span class="c"># bound on precision lost vs. best split</span></pre>
        </div>
      </div>
    </div>
    <div class="d2-foot"><div class="d2-inner">&copy; 2026 Juan C. Yamin</div></div>
  </section>

</main>
