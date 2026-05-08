---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

Below are current projects and selected papers.

<hr />

<ul>

  <li style="margin-bottom: 2em;">
    <b style="font-size: 110%;">Birds of a Feather Collude Together: Subnational Alignment and Corruption</b><br>
    <span style="font-size: small;"><i>Joint with Leopoldo Fergusson, Arturo Harker, and Carlos Molina</i></span><br>
    <span style="font-size: small;">
      [<a href="https://ideas.repec.org/p/col/000089/020732.html" target="_blank">Paper</a>]
      <i>(Conditionally accepted at APSR)</i>
    </span><br>
    <details style="margin-top: 0.3em;">
      <summary>
        <span style="font-size: small; color: #9e2a11;">Abstract [+]</span>
      </summary>
      <p style="margin-top: 0.5em;">
        <span style="font-size: small;">
          We examine how subnational partisan alignment influences corruption in clientelistic environments, focusing on the fabrication of &ldquo;ghost&rdquo; students to inflate education transfers to local governments in Colombia.
          Using a Regression Discontinuity Design, we find that partisan alignment between municipal mayors and departmental governors increases ghost students by 0.3 standard deviations, without improving genuine enrollment or student performance.
          Alignment also leads to more discretionary hiring, patronage-based outsourcing, and increased electoral fraud risk.
          The effects are strongest in municipalities with weaker institutions and entrenched clientelism.
          Alignment also raises the likelihood that mayors&rsquo; relatives are appointed to departmental posts and governors&rsquo; relatives to municipal posts, consistent with reciprocal patronage.
          These findings support the view that resource diversion benefits politicians with few benefits for local constituencies.
          Aligned politicians also experience better future electoral prospects, suggesting a breakdown in accountability.
          Our results highlight how clientelistic networks distort public service delivery, reinforcing the persistence of political corruption.
        </span>
      </p>
    </details>
  </li>

  <li style="margin-bottom: 2em;">
    <b style="font-size: 110%;">Poverty Targeting with Imperfect Information</b><br>
    <span style="font-size: small;">
      [<a href="https://arxiv.org/pdf/2506.18188v2" target="_blank">Paper</a>]
      [<a href="https://www.dropbox.com/scl/fi/mjyca26ok6wqingkm8ov8/WorldCongress.pdf?rlkey=j3nogjv01fxski68wil45uhq8&raw=1" target="_blank">Slides – World Congress</a>]
      <i>(Submitted)</i>
    </span><br>
    <details style="margin-top: 0.3em;">
      <summary>
        <span style="font-size: small; color: #9e2a11;">Abstract [+]</span>
      </summary>
      <p style="margin-top: 0.5em;">
        <span style="font-size: small;">
          A key challenge for targeted antipoverty programs in developing countries is that policymakers must rely on estimated rather than observed income, which leads to substantial targeting errors.
          The policy problem is not only to predict income, but to decide how noisy income estimates should be translated into feasible transfers.
          I formulate this as a statistical decision problem in which a policymaker chooses transfers to minimize a poverty-targeting loss subject to a fixed budget and a no-taxation constraint.
          I show that the standard plug-in rule, which treats estimated incomes as true, is inadmissible.
          I develop a nonparametric empirical Bayes targeting rule that assigns transfers using posterior distributions of true poverty gaps.
          Although the budget and no-taxation constraints make the targeting rule nonsmooth, Bayes regret is governed by the accuracy of the posterior functionals that determine the oracle allocation.
          In simulations using household survey data from nine African countries, the empirical Bayes rule reaches substantially more poor households and systematically improves poverty reduction relative to plug-in OLS and machine-learning benchmarks.
        </span>
      </p>
    </details>
  </li>

  <li style="margin-bottom: 2em;">
    <b style="font-size: 110%;">When and How to Pilot: Statistical Decision Theory for Two-Wave Experiments</b><br>
    <span style="font-size: small;">
      [<i>Draft available upon request</i>]
      [<a href="https://www.dropbox.com/scl/fi/opvdv4bvfzwl2coo9fk0o/Slides_v2.pdf?rlkey=uvbogtgk75qvx6431m0bveiow&raw=1" target="_blank">Slides – AFE 2025</a>]
    </span><br>
    <details style="margin-top: 0.3em;">
      <summary>
        <span style="font-size: small; color: #9e2a11;">Abstract [+]</span>
      </summary>
      <p style="margin-top: 0.5em;">
        <span style="font-size: small;">
          This paper develops a statistical decision theory framework for selecting the treatment assignment probability in two-wave experimental designs with finite samples.
          While the Neyman allocation minimizes the estimator's variance when outcome variances are known, its feasible version, estimated from a small pilot sample, can perform poorly.
          I show that the minimax regret-optimal rule corresponds to balanced assignment, entirely ignoring pilot data.
          Building on this insight, I propose a Confidence-Calibrated Minimax Regret (CCMR) rule that uses the pilot to construct a data-driven set of plausible variance configurations and then minimizes worst-case regret over that restricted space.
          The CCMR rule coincides with the balanced assignment when the pilot is uninformative, but converges to the feasible Neyman allocation (FNA) with increasing pilot size.
          This structure guarantees, with high probability, uniformly bounded regret in finite samples and vanishing regret in the limit.
          I extend the framework in three directions: (i) incorporating known variance ordering; (ii) generalizing to multi-arm designs; and (iii) selecting the optimal pilot sample size.
          Simulations show that the CCMR rule consistently outperforms the FNA, particularly when the pilot sample is small.
        </span>
      </p>
    </details>
  </li>

  <li style="margin-bottom: 2em;">
    <b style="font-size: 110%;">Two-Way Effects Models: a Nonparametric Empirical Bayes Approach</b><br>
    <span style="font-size: small;"><i>Joint with Cole Davis</i></span><br>
    <span style="font-size: small;">
      [<i>Draft available upon request</i>]
    </span><br>
    <details style="margin-top: 0.3em;">
      <summary>
        <span style="font-size: small; color: #9e2a11;">Abstract [+]</span>
      </summary>
      <p style="margin-top: 0.5em;">
        <span style="font-size: small;">
          Researchers estimate two-way effects models to decompose outcomes into unit and cluster components, such as workers and firms, teachers and schools, or individuals and regions.
          Existing empirical Bayes approaches for this setting rely on parametric prior assumptions.
          We develop a nonparametric empirical Bayes framework that allows the distribution of unit effects to vary with latent cluster effects, so unit and cluster components need not be independent and units within a cluster can be correlated.
          We propose a feasible estimation procedure and characterize the resulting shrinkage rules.
          Simulations show mean squared error close to an oracle benchmark and improvements over i.i.d.-based methods.
        </span>
      </p>
    </details>
  </li>

</ul>
