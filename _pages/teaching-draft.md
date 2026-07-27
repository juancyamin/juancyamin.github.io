---
layout: splash
permalink: /teaching-draft/
title: "Teaching Draft"
description: "Private draft teaching page preview for Juan C. Yamin."
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

  .page__content .t2 {
    color: #201b18;
    margin: -0.5rem auto 0;
    max-width: 980px;
    text-align: left;
  }

  .page__content .t2 * {
    box-sizing: border-box;
  }

  .page__content .t2 a {
    color: #201b18;
    text-decoration: none;
  }

  .page__content .t2 a:hover {
    color: #5e111c;
    text-decoration: none;
  }

  .page__content .t2 p {
    color: #3f3a35;
    font-size: 17px;
    line-height: 1.65;
    margin: 0 0 1rem;
  }

  .page__content .t2-header {
    border-bottom: 1px solid #d8d6cf;
    padding: 3.75rem 0 2.8rem;
  }

  .page__content .t2 h1,
  .page__content .t2 h2,
  .page__content .t2 h3 {
    border: 0;
    color: #201b18;
    font-family: Georgia, "Times New Roman", serif;
    font-weight: 500;
    letter-spacing: 0;
    margin: 0;
    padding: 0;
  }

  .page__content .t2 h1 {
    font-size: 44px;
    line-height: 1;
    margin: 0 0 1.15rem;
  }

  .page__content .t2 h2 {
    font-size: 34px;
    line-height: 1.12;
    margin: 0 0 0.75rem;
    max-width: 640px;
  }

  .page__content .t2 h3 {
    font-size: 21px;
    line-height: 1.25;
    margin: 0 0 0.45rem;
  }

  .page__content .t2 p.t2-intro {
    color: #46413b;
    font-size: 18px;
    line-height: 1.7;
    max-width: 640px;
  }

  .page__content .t2-signals {
    display: grid;
    gap: 1.4rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 2.25rem 0 0;
    max-width: 900px;
  }

  .page__content .t2-signal {
    border-top: 2px solid #8f1d2c;
    padding-top: 0.85rem;
  }

  .page__content .t2 p.t2-label,
  .page__content .t2 th {
    color: #8f1d2c;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.08em;
    line-height: 1.35;
    margin: 0 0 0.4rem;
    text-transform: uppercase;
  }

  .page__content .t2 p.t2-signal-text {
    color: #3f3a35;
    font-size: 16px;
    line-height: 1.55;
    margin: 0;
  }

  .page__content .t2-section {
    border-bottom: 1px solid #d8d6cf;
    padding: 2.85rem 0;
  }

  .page__content .t2-section-featured {
    border-top: 2px solid #8f1d2c;
    margin-top: 1.95rem;
    padding-top: 2.45rem;
  }

  .page__content .t2-copy {
    margin: 0;
    max-width: 640px;
  }

  .page__content .t2-copy p {
    color: #3f3a35;
    font-size: 17px;
    line-height: 1.65;
  }

  .page__content .t2-table-wrap {
    margin: 1.6rem 0 0;
    max-width: 980px;
    overflow-x: auto;
  }

  .page__content .t2-course-table {
    background: transparent;
    border: 0;
    border-collapse: collapse;
    color: #3f3a35;
    font-size: 16px;
    line-height: 1.45;
    margin: 0;
    min-width: 760px;
    width: 100%;
  }

  .page__content .t2 table.t2-course-table thead,
  .page__content .t2 table.t2-course-table tbody,
  .page__content .t2 table.t2-course-table tr,
  .page__content .t2 table.t2-course-table th,
  .page__content .t2 table.t2-course-table td {
    background: transparent;
  }

  .page__content .t2-course-table th {
    border: 0;
    padding: 0 0.9rem 0.7rem 0;
    text-align: left;
  }

  .page__content .t2-course-table td {
    border-top: 1px solid #dedbd4;
    border-right: 0;
    border-bottom: 0;
    border-left: 0;
    color: #3f3a35;
    padding: 0.9rem 0.9rem 0.9rem 0;
    text-align: left;
    vertical-align: top;
  }

  .page__content .t2-course-table td:nth-child(2),
  .page__content .t2-course-table td:nth-child(4),
  .page__content .t2-course-table td:nth-child(5) {
    white-space: nowrap;
  }

  .page__content .t2-course-code {
    color: #8f1d2c;
    display: block;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 1.3;
    margin: 0 0 0.15rem;
    text-transform: uppercase;
  }

  .page__content .t2-course-title {
    color: #201b18;
    display: block;
    font-weight: 650;
  }

  .page__content .t2-links {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.15rem 1.15rem;
    margin: 0;
  }

  .page__content .t2-links a,
  .page__content .t2-material-list a {
    align-items: center;
    border-bottom: 1px solid currentColor;
    color: #201b18;
    display: inline-flex;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.35;
    min-height: 44px;
    padding: 0.38rem 0 0.22rem;
  }

  .page__content .t2-links a.t2-internal,
  .page__content .t2-material-list a.t2-internal {
    color: #8f1d2c;
  }

  .page__content .t2 p.t2-note {
    color: #6b6660;
    font-size: 15px;
    line-height: 1.55;
    margin: 0.95rem 0 0;
    max-width: 640px;
  }

  .page__content .t2-previous {
    margin: 2.25rem 0 0;
    max-width: 760px;
  }

  .page__content .t2-previous h3 {
    font-size: 22px;
    margin-bottom: 0.95rem;
  }

  .page__content .t2-previous-row {
    border-top: 1px solid #dedbd4;
    display: grid;
    gap: 0.5rem 1.1rem;
    grid-template-columns: minmax(0, 1fr) minmax(130px, 0.35fr);
    padding: 0.85rem 0;
  }

  .page__content .t2 p.t2-previous-title {
    color: #201b18;
    font-size: 16px;
    font-weight: 650;
    line-height: 1.45;
    margin: 0;
  }

  .page__content .t2 p.t2-previous-meta {
    color: #6b6660;
    font-size: 15px;
    line-height: 1.45;
    margin: 0;
  }

  .page__content .t2-materials {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 1.7rem 0 0;
    max-width: 980px;
  }

  .page__content .t2-material-group {
    border-top: 2px solid #8f1d2c;
    min-width: 0;
    padding-top: 1rem;
  }

  .page__content .t2-material-group h3 {
    font-size: 21px;
    line-height: 1.25;
    margin-bottom: 0.95rem;
  }

  .page__content .t2-material-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .page__content .t2-material-list li {
    border-top: 1px solid #dedbd4;
    margin: 0;
    padding: 0.85rem 0 0.95rem;
  }

  .page__content .t2-material-list li:first-child {
    border-top: 0;
    padding-top: 0;
  }

  .page__content .t2 p.t2-material-meta {
    color: #6b6660;
    font-size: 14px;
    line-height: 1.5;
    margin: -0.1rem 0 0;
  }

  .page__content .t2 p.t2-material-meta a {
    border-bottom: 1px solid currentColor;
    color: #201b18;
    font-weight: 650;
  }

  .page__content .t2-section-final {
    border-bottom: 0;
  }

  @media (max-width: 780px) {
    .page__content .t2-header {
      padding: 2.75rem 0 2.3rem;
    }

    .page__content .t2-section {
      padding: 2.45rem 0;
    }

    .page__content .t2-section-featured {
      margin-top: 1.75rem;
      padding-top: 2.25rem;
    }

    .page__content .t2-signals,
    .page__content .t2-materials {
      grid-template-columns: 1fr;
      max-width: 640px;
    }

    .page__content .t2-previous-row {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 520px) {
    .page__content .t2 {
      margin-top: 0;
    }

    .page__content .t2 h1 {
      font-size: 38px;
    }

    .page__content .t2 h2 {
      font-size: 29px;
    }

    .page__content .t2 h3,
    .page__content .t2-material-group h3,
    .page__content .t2-previous h3 {
      font-size: 20px;
    }

    .page__content .t2 p.t2-intro,
    .page__content .t2 p,
    .page__content .t2-copy p {
      font-size: 16px;
    }

    .page__content .t2 p.t2-label,
    .page__content .t2 th,
    .page__content .t2 p.t2-note,
    .page__content .t2 p.t2-previous-meta,
    .page__content .t2 p.t2-material-meta {
      font-size: 14px;
    }

    .page__content .t2-course-table {
      min-width: 0;
    }

    .page__content .t2-course-table thead {
      display: none;
    }

    .page__content .t2-course-table,
    .page__content .t2-course-table tbody,
    .page__content .t2-course-table tr,
    .page__content .t2-course-table td {
      display: block;
      width: 100%;
    }

    .page__content .t2-course-table tr {
      border-top: 2px solid #8f1d2c;
      padding: 0.85rem 0;
    }

    .page__content .t2-course-table tr:first-child {
      border-top: 0;
      padding-top: 0;
    }

    .page__content .t2-course-table td {
      border: 0;
      padding: 0.12rem 0;
      white-space: normal;
    }

    .page__content .t2-course-table td:nth-child(2),
    .page__content .t2-course-table td:nth-child(4),
    .page__content .t2-course-table td:nth-child(5) {
      white-space: normal;
    }

    .page__content .t2-course-table td:before {
      color: #8f1d2c;
      content: attr(data-label);
      display: block;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.08em;
      line-height: 1.3;
      margin: 0.35rem 0 0.1rem;
      text-transform: uppercase;
    }

    .page__content .t2-links {
      gap: 0.6rem 1rem;
    }

    .page__content .t2-links a,
    .page__content .t2-material-list a {
      font-size: 16px;
    }
  }
</style>

<main class="t2" id="teaching-draft">
  <header class="t2-header" aria-labelledby="teaching-title">
    <h1 id="teaching-title">Teaching</h1>
    <p class="t2-intro">
      I have taught econometrics and applied data courses at Brown University, including both halves of the Ph.D. econometrics sequence. My sections emphasize derivations, implementation, and the judgment needed to use empirical methods carefully.
    </p>
    <div class="t2-signals" aria-label="Teaching summary">
      <article class="t2-signal">
        <p class="t2-label">Ph.D. Sequence</p>
        <p class="t2-signal-text">Applied Econometrics I with Toru Kitagawa and Applied Econometrics II with Peter Hull.</p>
      </article>
      <article class="t2-signal">
        <p class="t2-label">Benchmarked Feedback</p>
        <p class="t2-signal-text">Student evaluations are linked where available; Brown prints department benchmarks on each form.</p>
      </article>
      <article class="t2-signal">
        <p class="t2-label">Materials</p>
        <p class="t2-signal-text">Selected notes and slides cover staggered-adoption DiD, empirical Bayes, and applied econometrics.</p>
      </article>
    </div>
  </header>

  <section class="t2-section t2-section-featured" aria-labelledby="courses-title">
    <h2 id="courses-title">Courses</h2>
    <div class="t2-copy">
      <p>
        At Brown, I have served as a teaching assistant for graduate econometrics and undergraduate applied data analysis. Earlier teaching at Universidad de los Andes is listed below.
      </p>
    </div>
    <div class="t2-table-wrap">
      <table class="t2-course-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Level</th>
            <th>Instructor</th>
            <th>Term</th>
            <th>Evaluation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Course">
              <span class="t2-course-code">ECON 2400</span>
              <span class="t2-course-title">Applied Econometrics II</span>
            </td>
            <td data-label="Level">Ph.D.</td>
            <td data-label="Instructor">Peter Hull</td>
            <td data-label="Term">Spring 2026</td>
            <td data-label="Evaluation">
              <nav class="t2-links" aria-label="ECON 2400 evaluation">
                <a class="t2-internal" href="/files/econ2400_evaluation.pdf">PDF</a>
              </nav>
            </td>
          </tr>
          <tr>
            <td data-label="Course">
              <span class="t2-course-code">ECON 2390</span>
              <span class="t2-course-title">Applied Econometrics I</span>
            </td>
            <td data-label="Level">Ph.D.</td>
            <td data-label="Instructor">Toru Kitagawa</td>
            <td data-label="Term">Fall 2024</td>
            <td data-label="Evaluation">
              <nav class="t2-links" aria-label="ECON 2390 evaluation">
                <a class="t2-internal" href="/files/econ2390_evaluation_fall2024.pdf">PDF</a>
              </nav>
            </td>
          </tr>
          <tr>
            <td data-label="Course">
              <span class="t2-course-code">ECON 1000</span>
              <span class="t2-course-title">Using Big Data to Solve Economic and Social Problems</span>
            </td>
            <td data-label="Level">Undergraduate</td>
            <td data-label="Instructor">John N. Friedman</td>
            <td data-label="Term">Fall 2023</td>
            <td data-label="Evaluation">
              <nav class="t2-links" aria-label="ECON 1000 Fall 2023 evaluation">
                <a class="t2-internal" href="/files/econ1000_evaluation_fall2023.pdf">PDF</a>
              </nav>
            </td>
          </tr>
          <tr>
            <td data-label="Course">
              <span class="t2-course-code">ECON 1000</span>
              <span class="t2-course-title">Using Big Data to Solve Economic and Social Problems</span>
            </td>
            <td data-label="Level">Undergraduate</td>
            <td data-label="Instructor">John N. Friedman</td>
            <td data-label="Term">Fall 2022</td>
            <td data-label="Evaluation">Not available</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="t2-note">
      Evaluation PDFs include Brown, division, and department benchmarks when reported by the university.
    </p>

    <div class="t2-previous" aria-labelledby="previous-title">
      <h3 id="previous-title">Previous Teaching</h3>
      <div class="t2-previous-row">
        <div>
          <p class="t2-previous-title">Political Underpinnings of Prosperity and Poverty</p>
          <p class="t2-previous-meta">Teaching assistant for James Robinson, Universidad de los Andes</p>
        </div>
        <p class="t2-previous-meta">Graduate</p>
      </div>
      <div class="t2-previous-row">
        <div>
          <p class="t2-previous-title">Advanced Econometrics</p>
          <p class="t2-previous-meta">Teaching assistant for Raquel Bernal, Universidad de los Andes</p>
        </div>
        <p class="t2-previous-meta">Graduate</p>
      </div>
      <div class="t2-previous-row">
        <div>
          <p class="t2-previous-title">Thinking Problems</p>
          <p class="t2-previous-meta">Teaching assistant for Tomas Rodriguez, Universidad de los Andes</p>
        </div>
        <p class="t2-previous-meta">Undergraduate</p>
      </div>
    </div>
  </section>

  <section class="t2-section" aria-labelledby="materials-title">
    <h2 id="materials-title">Selected Materials</h2>
    <div class="t2-copy">
      <p>
        Selected materials from Brown TA sessions. Source attributions are included where the sessions build from existing lecture materials.
      </p>
    </div>
    <div class="t2-materials">
      <article class="t2-material-group">
        <h3>Staggered-Adoption DiD</h3>
        <ul class="t2-material-list">
          <li>
            <a class="t2-internal" href="/files/econ2400_ta_session_1.pdf">Part I</a>
            <p class="t2-material-meta">ECON 2400, Spring 2026. Adapted from teaching materials by <a href="https://sites.google.com/view/borusyak/home">Kirill Borusyak</a>.</p>
          </li>
          <li>
            <a class="t2-internal" href="/files/econ2400_ta_session_2.pdf">Part II</a>
            <p class="t2-material-meta">ECON 2400, Spring 2026. Adapted from <a href="https://github.com/borusyak/are213">ARE 213 materials</a>.</p>
          </li>
        </ul>
      </article>
      <article class="t2-material-group">
        <h3>Empirical Bayes</h3>
        <ul class="t2-material-list">
          <li>
            <a class="t2-internal" href="/files/econ2400_ta_session_3.pdf">Fundamentals</a>
            <p class="t2-material-meta">ECON 2400, Spring 2026. Based on NBER SI Methods lectures by <a href="https://www.nber.org/conferences/si-2022-methods-lectures-empirical-bayes-methods-theory-and-application">Jiaying Gu and Christopher R. Walters</a>.</p>
          </li>
          <li>
            <a class="t2-internal" href="/files/econ2400_ta_session_4.pdf">Empirical Applications</a>
            <p class="t2-material-meta">ECON 2400, Spring 2026. Based on NBER SI Methods lectures by <a href="https://www.nber.org/conferences/si-2022-methods-lectures-empirical-bayes-methods-theory-and-application">Jiaying Gu and Christopher R. Walters</a>.</p>
          </li>
        </ul>
      </article>
      <article class="t2-material-group">
        <h3>Applied Econometrics I</h3>
        <ul class="t2-material-list">
          <li>
            <a class="t2-internal" href="/files/econ2390_review_session_1.pdf">Midterm and Problem Set 1</a>
            <p class="t2-material-meta">ECON 2390, Fall 2024.</p>
          </li>
          <li>
            <a class="t2-internal" href="/files/econ2390_review_session_2.pdf">Problem Set 2</a>
            <p class="t2-material-meta">ECON 2390, Fall 2024.</p>
          </li>
        </ul>
      </article>
    </div>
  </section>

  <section class="t2-section t2-section-final" aria-labelledby="prepared-title">
    <h2 id="prepared-title">Prepared to Teach</h2>
    <div class="t2-copy">
      <p>
        Prepared to teach econometrics at the undergraduate and graduate levels, causal inference, experimental design, introductory statistics, and a new course on data-driven decision-making for policy and experiments.
      </p>
    </div>
  </section>
</main>
