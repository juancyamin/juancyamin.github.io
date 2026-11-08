---
layout: editorial
permalink: /research/
title: "Research"
description: "Research papers by Juan C. Yamin, with abstracts, papers and presentation information."
---

<div class="editorial-document">
<a class="skip-link" href="#main-content">Skip to content</a>
<div class="site inner-page"><header class="mast">
    <p class="name"><a href="/">Juan C. Yamin</a></p>
    <nav class="pages" aria-label="Main navigation">
      <a href="/research/" aria-current="page">Research</a>
      <a href="/software/">Software</a>
      <a href="/teaching/">Teaching</a>
    </nav>
  </header><nav class="contact" aria-label="CV and contact links">
        <a href="https://juancyamin.github.io/files/Juan_Yamin_CV.pdf" target="_blank" rel="noopener">CV</a>
        <a href="mailto:juan_yamin_silva@brown.edu">Email</a>
        <a href="https://scholar.google.com/citations?user=KWtxYJgAAAAJ" target="_blank" rel="noopener">Google Scholar</a>
        <a href="https://github.com/juancyamin" target="_blank" rel="noopener">GitHub</a>
        <a href="https://www.linkedin.com/in/juan-c-yamin/" target="_blank" rel="noopener">LinkedIn</a>
      </nav><main id="main-content"><h1 class="page-title">Research</h1><section class="content-grid"><div class="section-label"><h2>Working papers</h2></div><div class="content-column"><article class="research-paper" id="poverty-targeting">
      <h3 class="paper-title"><a href="https://juancyamin.github.io/files/poverty-targeting-with-imperfect-information.pdf" target="_blank" rel="noopener">Poverty Targeting with Imperfect Information</a></h3>
      <p class="metadata">Best Student Paper Award, MEG 2026</p>
      <p class="question">Is it enough to target the households that look poorest?</p>
      <p class="answer">Some households look especially poor because their incomes are underestimated. I develop a targeting method that accounts for this uncertainty. In simulations, it achieves the same poverty reduction as standard targeting with 6.1 percent less spending.</p>
      <nav class="paper-links" aria-label="Poverty Targeting with Imperfect Information links"><a href="https://juancyamin.github.io/files/poverty-targeting-with-imperfect-information.pdf" target="_blank" rel="noopener">Paper</a>
        <details class="abstract"><summary>Abstract</summary>
          <div class="abstract-body"><p>
            How should antipoverty programs allocate transfers when household income is known only through noisy predictions? I formulate this as a statistical decision problem in which a policymaker chooses nonnegative transfers within a fixed budget to minimize squared deviations of post-transfer income from the poverty line. I show that the standard plug-in rule, which treats predictions as exact, is inadmissible. I then develop a nonparametric empirical Bayes allocation rule that replaces the estimated gaps with posterior mean poverty gaps. The rule's Bayes regret vanishes at least as fast as the mean squared error in estimating posterior mean poverty gaps, despite the budget and nonnegativity constraints. The approach extends, with weaker guarantees, to a policymaker who cares only about how far households remain below the poverty line after transfers and to programs that pay a fixed set of benefit amounts. In simulations using household surveys from nine African countries, the empirical Bayes rule reaches about 1.8 times as many poor people as plug-in OLS with the same budget, and it achieves the same average poverty gap reduction with 6.1% less spending or a 42% smaller training sample.
          </p></div>
        </details>
        <a href="https://arxiv.org/abs/2506.18188" target="_blank" rel="noopener">arXiv</a>
      </nav>
    </article><article class="research-paper" id="when-and-how-to-pilot">
      <h3 class="paper-title"><a href="https://juancyamin.github.io/files/when-and-how-to-pilot.pdf" target="_blank" rel="noopener">When and How to Pilot: Design Rules for Two-Wave Experiments</a></h3>
      <p class="question">How much should a small pilot change the experiment that follows?</p>
      <p class="answer">A pilot can help researchers choose a more efficient split between treatment and control, but a small pilot can also mislead. I develop a method that guards against overreacting to limited evidence and approaches the optimal split as the pilot grows.</p>
      <nav class="paper-links" aria-label="When and How to Pilot: Design Rules for Two-Wave Experiments links"><a href="https://juancyamin.github.io/files/when-and-how-to-pilot.pdf" target="_blank" rel="noopener">Paper</a>
        <details class="abstract"><summary>Abstract</summary>
          <div class="abstract-body"><p>
            Experimenters often run pilots, but how much a small pilot should shape the main-wave design has no settled answer. This paper shows how noisy pilot evidence should guide treatment assignment probabilities in two-wave experiments. Two canonical rules mark the extremes. Balanced assignment guards against worst cases but ignores evidence that one arm is noisier. Feasible Neyman allocation adapts, but with a finite pilot it can overreact to noise, producing arbitrarily large precision losses. I propose a Conditional Minimax Regret (CMR) rule that minimizes worst-case regret over a finite-sample confidence set for the treatment and control variances. CMR retains balance’s worst-case protection with high probability, converges to the Neyman allocation as the pilot grows, and attains the minimax-regret rate up to constants. It extends to multi-arm and stratified designs, and simulations calibrated to four field experiments show it avoids feasible Neyman’s severe small-pilot losses while matching its large-pilot gains.
          </p></div>
        </details>
        <a href="https://arxiv.org/abs/2607.16982" target="_blank" rel="noopener">arXiv</a>
        <a href="https://juancyamin.github.io/files/when-and-how-to-pilot-code-2026-extended-abstract.pdf" target="_blank" rel="noopener">CODE@MIT Abstract</a>
        <a href="/software/">Software</a>
      </nav>
    </article><article class="research-paper" id="two-way-effects">
      <h3 class="paper-title">Two-Way Effects Models: A Nonparametric Empirical Bayes Approach</h3>
      <p class="metadata">with Cole Davis</p>
      <p class="question">How should we estimate worker and firm effects when the two are sorted?</p>
      <p class="answer">Wage decompositions split pay into worker and firm components, but workers are not randomly assigned to firms. We develop a method that lets the distribution of worker effects depend on the firm, allowing estimates to reflect this sorting.</p>
      <nav class="paper-links" aria-label="Two-Way Effects Models: A Nonparametric Empirical Bayes Approach links">
        <details class="abstract"><summary>Abstract</summary>
          <div class="abstract-body"><p>
            Researchers use AKM models to decompose wages into worker effects and firm wage premia. The resulting fixed-effect estimates are often noisy because firm effects are identified by worker mobility, and conventional empirical Bayes approaches rely on parametric prior assumptions. We develop a nonparametric empirical Bayes framework in which the distribution of worker effects varies with latent firm effects. This allows worker and firm effects to be sorted, and it induces dependence among workers attached to the same reference firm. We propose a feasible estimation procedure, characterize the resulting shrinkage rules, and define an oracle benchmark that respects the hierarchical structure of AKM effects. Simulations show mean squared error close to an oracle benchmark and improvements over i.i.d.-based methods.
          </p></div>
        </details>
        <a href="mailto:juan_yamin_silva@brown.edu?subject=Two-Way%20Effects%20draft">Draft on request</a>
      </nav>
    </article></div></section><section class="content-grid"><div class="section-label"><h2>Publications</h2></div><div class="content-column"><article class="research-paper" id="birds-of-a-feather">
      <h3 class="paper-title"><a href="https://juancyamin.github.io/files/subnational-alignment-corruption.pdf" target="_blank" rel="noopener">Birds of a Feather Collude Together: Subnational Alignment and Corruption</a></h3>
      <p class="metadata">with Leopoldo Fergusson, Arturo Harker, and Carlos Molina</p>
      <p class="metadata">Forthcoming, <em>American Political Science Review</em></p>
      <p class="question">Does partisan alignment across levels of government facilitate corruption?</p>
      <p class="answer">Using close elections in Colombia, we find that partisan alignment between mayors and governors increases the fabrication of “ghost” students to obtain education transfers. Actual enrollment and student performance do not improve.</p>
      <nav class="paper-links" aria-label="Birds of a Feather Collude Together: Subnational Alignment and Corruption links">
        <details class="abstract"><summary>Abstract</summary>
          <div class="abstract-body"><p>
            We examine how subnational partisan alignment influences corruption in clientelistic environments, focusing on the fabrication of “ghost” students to inflate education transfers to local governments in Colombia. Using a Regression Discontinuity Design, we find that partisan alignment between municipal mayors and departmental governors increases ghost students by 0.3 standard deviations, without improving genuine enrollment or student performance. Alignment also leads to more discretionary hiring, patronage-based outsourcing, and increased electoral fraud risk. The effects are strongest in municipalities with weaker institutions and entrenched clientelism. Alignment also raises the likelihood that mayors’ relatives are appointed to departmental posts and governors’ relatives to municipal posts, consistent with reciprocal patronage. These findings support the view that resource diversion benefits politicians with few benefits for local constituencies. Aligned politicians also experience better future electoral prospects, suggesting a breakdown in accountability. Our results highlight how clientelistic networks distort public service delivery, reinforcing the persistence of political corruption.
          </p></div>
        </details>
        <a href="https://juancyamin.github.io/files/subnational-alignment-corruption.pdf" target="_blank" rel="noopener">PDF</a>
      </nav>
    </article></div></section><section class="content-grid"><div class="section-label"><h2>Selected presentations</h2></div><div class="content-column"><div class="presentations">
      <div class="talk">
        <p class="talk-year">2026</p>
        <div>
          <p class="talk-venue">Conference on Digital Experimentation (CODE@MIT), Cambridge</p>
          <p class="talk-paper">
            When and How to Pilot: Design Rules for Two-Wave Experiments<br>
            <span class="metadata">Accepted for presentation · November 13–14, 2026</span>
          </p>
        </div>
      </div>
      <div class="talk">
        <p class="talk-year">2026</p>
        <div>
          <p class="talk-venue">Midwest Econometrics Group Annual Meeting, Cincinnati</p>
          <p class="talk-paper">
            Poverty Targeting with Imperfect Information
          </p>
        </div>
      </div>
      <div class="talk">
        <p class="talk-year">2025</p>
        <div>
          <p class="talk-venue">World Congress of the Econometric Society, Seoul</p>
          <p class="talk-paper">Poverty Targeting with Imperfect Information</p>
        </div>
      </div>
      <div class="talk">
        <p class="talk-year">2025</p>
        <div>
          <p class="talk-venue">Advances with Field Experiments (AFE), Chicago</p>
          <p class="talk-paper">When and How to Pilot: Design Rules for Two-Wave Experiments</p>
        </div>
      </div>
    </div></div></section></main></div>
</div>
