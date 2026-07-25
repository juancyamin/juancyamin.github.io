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

  .greedy-nav,
  #site-nav {
    background: transparent;
  }

  .page__content .d2 {
    color: #201b18;
    margin: -0.5rem auto 0;
    max-width: 980px;
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
    align-items: center;
    border-bottom: 1px solid #d8d6cf;
    display: grid;
    gap: 3rem;
    grid-template-columns: minmax(0, 1fr) minmax(190px, 240px);
    margin: 0 auto;
    padding: 4.6rem 0 4.25rem;
    text-align: left;
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
    font-size: clamp(3rem, 6vw, 3.75rem);
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1;
    margin: 0 0 1.35rem;
  }

  .page__content .d2 p.d2-statement {
    color: #201b18;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.12rem, 2vw, 1.45rem);
    line-height: 1.35;
    margin: 0 0 1.2rem;
    max-width: 620px;
  }

  .page__content .d2 p.d2-fields {
    color: #5b5650;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.045em;
    line-height: 1.45;
    margin: 0 0 1.45rem;
    max-width: none;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .page__content .d2 p.d2-intro {
    color: #46413b;
    font-size: 1rem;
    line-height: 1.7;
    max-width: 640px;
  }

  .page__content .d2-photo {
    margin: 0;
    width: 100%;
  }

  .page__content .d2-photo img {
    display: block;
    height: auto;
    width: 100%;
  }

  .page__content .d2-link-row {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 1.25rem;
    justify-content: flex-start;
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
    text-align: left;
  }

  .page__content .d2-section-inner {
    margin: 0;
    max-width: none;
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
    max-width: 820px;
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
    color: #2d2824;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.06rem, 2vw, 1.22rem);
    font-weight: 600;
    line-height: 1.45;
    margin: 1.35rem 0 1.55rem;
    max-width: 650px;
    padding: 0;
  }

  .page__content .d2-copy {
    margin: 0;
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
    margin: 2.3rem 0 0;
    max-width: 900px;
    text-align: left;
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

  .page__content .d2-agenda p.d2-status {
    color: #8f1d2c;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.035em;
    line-height: 1.35;
    margin: 0 0 0.45rem;
    text-transform: uppercase;
  }

  @media (max-width: 780px) {
    .page__content .d2-hero {
      gap: 2rem;
      grid-template-columns: 1fr;
      padding: 3rem 0 3.2rem;
    }

    .page__content .d2-photo {
      max-width: 190px;
    }

    .page__content .d2 p.d2-fields {
      white-space: normal;
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
      gap: 0.8rem;
    }
  }
</style>

<main class="d2" id="draft-home">
  <section class="d2-hero" aria-labelledby="draft-home-title">
    <div class="d2-hero-copy">
      <p class="d2-kicker">2026&ndash;27 Economics Job Market Candidate</p>
      <h1 id="draft-home-title">Juan C. Yamin</h1>
      <p class="d2-statement">I develop methods that help researchers and policymakers make better use of data for real-world decisions.</p>
      <p class="d2-fields">Applied Econometrics &middot; Statistical Decision Theory &middot; Experimental Design</p>
      <p class="d2-intro">
        I am an applied econometrician and Ph.D. candidate in Economics at Brown University.
      </p>
      <nav class="d2-link-row" aria-label="Homepage links">
        <a class="d2-primary" href="/research/">Research</a>
        <a href="/files/cv.pdf">CV</a>
        <a href="mailto:juan_yamin_silva@brown.edu">Email</a>
      </nav>
    </div>
    <figure class="d2-photo">
      <img src="/images/profile.jpg" alt="Juan C. Yamin">
    </figure>
  </section>

  <section class="d2-section" id="featured-research" aria-labelledby="featured-research-title">
    <div class="d2-section-inner">
      <p class="d2-label">Featured Research</p>
      <h2 id="featured-research-title">Poverty Targeting with Imperfect Information</h2>
      <p class="d2-meta">Submitted</p>
      <p class="d2-standfirst">
        Better targeting requires not only better income predictions, but better decisions about how to act on them.
      </p>
      <div class="d2-copy">
        <p>
          Cash transfer programs often target households using income estimates from surveys, censuses, or proxy means tests. The standard approach takes those estimates at face value and allocates transfers to the households that look poorest. But extreme estimates can reflect noise as well as extreme poverty, causing programs to concentrate scarce transfers on too few households and miss others who are genuinely poor.
        </p>
        <p>
          I show that this plug-in rule is inadmissible and develop a nonparametric empirical Bayes rule that uses the same data, budget, and prediction model but first learns how much to trust each estimate. In simulations across nine African countries, the rule reaches 45.6 poor households per 1,000 people, compared with 25.5 under the standard approach&mdash;nearly 80 percent more.
        </p>
      </div>
      <nav class="d2-link-row" aria-label="Featured research links">
        <a class="d2-primary" href="https://arxiv.org/pdf/2506.18188v2">Paper</a>
      </nav>
    </div>
  </section>

  <section class="d2-section" aria-labelledby="research-agenda-title">
    <div class="d2-section-inner">
      <p class="d2-label">Current Research</p>
      <h2 id="research-agenda-title">Experimental design, empirical Bayes methods, and political economy of development.</h2>
      <div class="d2-copy">
        <p>
          Beyond the featured paper, my current work studies how empirical methods can improve decisions in experiments, high-dimensional models, and public institutions.
        </p>
      </div>
      <div class="d2-agenda">
        <article>
          <h3>When and How to Pilot</h3>
          <p class="d2-status">Working paper</p>
          <p>Design rules for two-wave experiments, studying how noisy pilot estimates of treatment and control variances should guide the experiment that follows.</p>
        </article>
        <article>
          <h3>Two-Way Effects Models</h3>
          <p class="d2-status">With Cole Davis</p>
          <p>A nonparametric empirical Bayes approach to estimating worker and firm effects when the distribution of individual effects may vary with latent firm components.</p>
        </article>
        <article>
          <h3>Subnational Alignment and Corruption</h3>
          <p class="d2-status">Conditionally accepted at the American Political Science Review</p>
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
          Open-source R and Python tools for using pilot data to choose treatment allocations in two-wave experiments.
        </p>
      </div>
      <nav class="d2-link-row" aria-label="Software links">
        <a class="d2-primary" href="https://juancyamin.github.io/cmrdesign/">Documentation</a>
        <a href="https://github.com/juancyamin/cmrdesign">GitHub</a>
        <a href="https://juancyamin.r-universe.dev/cmrdesign">R Package</a>
        <a href="https://pypi.org/project/cmrdesign/">Python Package</a>
      </nav>
    </div>
  </section>
</main>
