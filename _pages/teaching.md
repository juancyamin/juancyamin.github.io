---
layout: splash
permalink: /teaching/
title: "Teaching"
description: "Teaching experience, student evaluations, and econometrics materials by Juan C. Yamin."
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


  /* Let the approved page spacing control the splash layout. */
  /* The footer is in normal flow here; disable the theme script's sticky-footer reserve. */
  body { padding-bottom: 0; margin-bottom: 0 !important; }
  #main { max-width: none; margin: 0; padding: 0; }
  #main > .splash, #main .page__content { margin: 0; padding: 0; }
  .page__footer { position: static; margin-top: 0; }
  .page__content .t2 { text-align: left; }
  .page__content .t2 h1,
  .page__content .t2 h2,
  .page__content .t2 h3 { border: 0; padding: 0; }
  .page__content .t2 a { font-weight: 400; }

  .page__content .t2 {
    --t2-bg: #f8f9fa;
    --t2-ink: #202833;
    --t2-copy: #444e59;
    --t2-muted: #5d6975;
    --t2-blue: #2b587a;
    --t2-hover: #173b56;
    --t2-border: #d6dce2;
    --t2-rail: 260px;
    --t2-rail-gap: 56px;
    --t2-course-gap: 42px;
    color-scheme: light;
    background: var(--t2-bg);
    color: var(--t2-copy);
    font: 15.5px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  }
  .page__content .t2 * { box-sizing: border-box; }
  .page__content .t2 a {
    color: var(--t2-blue); text-decoration: none;
  }
  .page__content .t2 a:hover { color: var(--t2-hover); text-decoration: underline; }
  .page__content .t2 {
    width: calc(100% - 64px); max-width: 1060px; margin: 0 auto; padding: 24px 0 60px;
  }
  .page__content .t2 .t2-page-header {
    padding-left: calc(var(--t2-rail) + var(--t2-rail-gap)); margin-bottom: 32px;
  }
  .page__content .t2 h1 {
    font: 500 33px/1.1 Georgia, "Times New Roman", serif; color: var(--t2-ink);
    margin: 0; padding: 0; letter-spacing: 0;
  }
  .page__content .t2 .t2-institution {
    display: grid; grid-template-columns: var(--t2-rail) minmax(0, 1fr); gap: 0 var(--t2-rail-gap);
  }
  .page__content .t2 .t2-institution + .t2-institution { margin-top: 42px; }
  .page__content .t2 .t2-institution-label { text-align: right; padding-top: 3px; }
  .page__content .t2 .t2-institution-label h2 {
    color: var(--t2-blue); font: 700 15px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    text-transform: uppercase; letter-spacing: .09em; margin: 0 0 5px;
  }
  .page__content .t2 .t2-institution-label p {
    font-size: 14px; line-height: 1.5; color: var(--t2-muted); margin: 0;
  }
  .page__content .t2 .t2-courses { min-width: 0; }
  .page__content .t2 .t2-course + .t2-course { margin-top: var(--t2-course-gap); }
  .page__content .t2 .t2-course h3 {
    color: var(--t2-ink); font: 500 22px/1.25 Georgia, "Times New Roman", serif;
    margin: 0 0 5px; letter-spacing: 0;
  }
  .page__content .t2 .t2-meta {
    color: var(--t2-muted); font-size: 15px; line-height: 1.5; margin: 0 0 7px;
  }
  .page__content .t2 .t2-evaluation {
    color: var(--t2-copy); font-size: 15px; line-height: 1.55;
    display: flex; flex-wrap: wrap; align-items: baseline; gap: 2px 14px; margin: 0;
  }
  .page__content .t2 .t2-evaluation strong { color: var(--t2-ink); font-weight: 600; }
  .page__content .t2 .t2-scores {
    display: flex; flex-wrap: wrap; gap: 2px 14px; max-width: 100%;
  }
  .page__content .t2 .t2-materials { margin: 0; min-width: 0; }
  .page__content .t2 .t2-materials[open] { flex: 1 0 100%; }
  .page__content .t2 .t2-materials summary {
    color: var(--t2-blue); font-size: 15px; line-height: 1.5;
    cursor: pointer; width: fit-content; list-style: none;
  }
  .page__content .t2 .t2-materials summary::-webkit-details-marker { display: none; }
  .page__content .t2 .t2-materials summary::after { content: " +"; }
  .page__content .t2 .t2-materials[open] summary::after { content: " −"; }
  .page__content .t2 .t2-materials summary:hover { color: var(--t2-hover); text-decoration: underline; }
  .page__content .t2 .t2-material-body { margin-top: 9px; }
  .page__content .t2 .t2-topic + .t2-topic { margin-top: 12px; }
  .page__content .t2 .t2-topic-line { margin: 0; font-size: 15.5px; line-height: 1.5; }
  .page__content .t2 .t2-topic-line .t2-topic-links { display: inline-flex; flex-wrap: wrap; gap: 0 10px; margin-left: 5px; }
  .page__content .t2 .t2-credit {
    color: var(--t2-muted); font-size: 13px; line-height: 1.45; margin: 3px 0 0;
  }
  @media (min-width: 1200px) {
    .page__content .t2 { --t2-rail: 300px; --t2-rail-gap: 72px; }
  }
  @media (max-width: 850px) {
    .page__content .t2 .t2-page-header { padding-left: 0; }
    .page__content .t2 .t2-institution { display: block; }
    .page__content .t2 .t2-institution-label { text-align: left; padding-top: 0; margin-bottom: 24px; }
    .page__content .t2 .t2-institution-label p { display: inline; }
    .page__content .t2 .t2-institution-label p + p::before { content: " · "; }
    .page__content .t2 { max-width: 688px; }
  }
  @media (max-width: 600px) {
    .page__content .t2 { width: calc(100% - 40px); padding-top: 27px; padding-bottom: 42px; }
    .page__content .t2 .t2-page-header { margin-bottom: 31px; }
    .page__content .t2 .t2-course h3 { font-size: 21px; }
    .page__content .t2 .t2-evaluation { gap: 2px 12px; }
    .page__content .t2 .t2-scores { flex-basis: 100%; gap: 2px 12px; }
    .page__content .t2 .t2-topic-line .t2-topic-links { margin-left: 0; }
  }
  @media (pointer: coarse) {
    .page__content .t2 .t2-evaluation a,
    .page__content .t2 .t2-materials summary,
    .page__content .t2 .t2-topic-line a { display: inline-flex; align-items: center; min-height: 44px; }
  }

</style>

<main class="t2" id="teaching">
  <header class="t2-page-header"><h1 id="teaching-title">Teaching</h1></header>
  <section class="t2-institution" id="courses-title" aria-labelledby="t2-brown-label">
    <div class="t2-institution-label">
      <h2 id="t2-brown-label">Brown University</h2>
      <p>Teaching assistant</p>
    </div>
    <div class="t2-courses">
      <article class="t2-course">
        <h3>Applied Econometrics II</h3>
        <p class="t2-meta">ECON 2400 · Ph.D. · Peter Hull · Spring 2026</p>
        <div class="t2-evaluation">
          <div class="t2-scores">
            <span><strong>4.92/5</strong> (13 responses)</span>
            <span>Dept. mean 4.53</span>
          </div>
          <a href="/files/econ2400_evaluation_spring2026.pdf" target="_blank" rel="noopener" aria-label="Applied Econometrics II evaluation PDF">Evaluation</a>
          <details class="t2-materials" id="materials-title">
            <summary>Teaching materials</summary>
            <div class="t2-material-body">
              <div class="t2-topic">
                <p class="t2-topic-line">Staggered-adoption difference-in-differences:
                  <span class="t2-topic-links">
                    <a href="/files/econ2400_ta_session_1.pdf" target="_blank" rel="noopener" aria-label="Staggered-adoption difference-in-differences, Part I PDF">Part I</a>
                    <a href="/files/econ2400_ta_session_2.pdf" target="_blank" rel="noopener" aria-label="Staggered-adoption difference-in-differences, Part II PDF">Part II</a>
                  </span>
                </p>
                <p class="t2-credit">Adapted from Kirill Borusyak’s ARE 213 teaching materials.</p>
              </div>
              <div class="t2-topic">
                <p class="t2-topic-line">Empirical Bayes:
                  <span class="t2-topic-links">
                    <a href="/files/econ2400_ta_session_3.pdf" target="_blank" rel="noopener" aria-label="Empirical Bayes fundamentals PDF">Fundamentals</a>
                    <a href="/files/econ2400_ta_session_4.pdf" target="_blank" rel="noopener" aria-label="Empirical Bayes empirical applications PDF">Applications</a>
                  </span>
                </p>
                <p class="t2-credit">Based on NBER SI Methods lectures by Jiaying Gu and Christopher R. Walters.</p>
              </div>
            </div>
          </details>
        </div>
      </article>

      <article class="t2-course">
        <h3>Applied Econometrics I</h3>
        <p class="t2-meta">ECON 2390 · Ph.D. · Toru Kitagawa · Fall 2024</p>
        <div class="t2-evaluation">
          <div class="t2-scores">
            <span><strong>4.90/5</strong> (10 responses)</span>
            <span>Dept. mean 4.52</span>
          </div>
          <a href="/files/econ2390_evaluation_fall2024.pdf" target="_blank" rel="noopener" aria-label="Applied Econometrics I evaluation PDF">Evaluation</a>
          <details class="t2-materials">
            <summary>Teaching materials</summary>
            <div class="t2-material-body">
              <div class="t2-topic">
                <p class="t2-topic-line"><a href="/files/econ2390_review_session_1.pdf" target="_blank" rel="noopener">Regression, matching, and doubly robust estimation</a></p>
                <p class="t2-credit">Midterm and Problem Set 1 review.</p>
              </div>
              <div class="t2-topic">
                <p class="t2-topic-line"><a href="/files/econ2390_review_session_2.pdf" target="_blank" rel="noopener">Regression discontinuity and instrumental variables</a></p>
                <p class="t2-credit">Problem Set 2 review.</p>
              </div>
            </div>
          </details>
        </div>
      </article>

      <article class="t2-course">
        <h3>Using Big Data to Solve Economic and Social Problems</h3>
        <p class="t2-meta">ECON 1000 · Undergraduate · John N. Friedman · Fall 2022 and 2023</p>
        <p class="t2-evaluation">
          <span>Fall 2023: <strong>4.10/5</strong> (40 responses)</span>
          <span>Dept. mean 4.57</span>
          <a href="/files/econ1000_evaluation_fall2023.pdf" target="_blank" rel="noopener" aria-label="Using Big Data Fall 2023 evaluation PDF">Evaluation</a>
        </p>
      </article>

    </div>
  </section>

  <section class="t2-institution" id="previous-title" aria-labelledby="t2-andes-label">
    <div class="t2-institution-label">
      <h2 id="t2-andes-label">Universidad de los Andes</h2>
      <p>Teaching assistant</p>
      <p>August 2018 – June 2020</p>
    </div>
    <div class="t2-courses">
      <article class="t2-course">
        <h3>Advanced Econometrics</h3>
        <p class="t2-meta">Graduate · Raquel Bernal</p>
      </article>
      <article class="t2-course">
        <h3>Political Underpinnings of Prosperity and Poverty</h3>
        <p class="t2-meta">Graduate · James A. Robinson</p>
      </article>
      <article class="t2-course">
        <h3>Thinking Problems</h3>
        <p class="t2-meta">Undergraduate · Tomás Rodríguez</p>
      </article>
    </div>
  </section>
</main>
