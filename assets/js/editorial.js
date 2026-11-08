
(() => {
  const root = document.getElementById('software-examples');
  if (!root) return;
  const buttons = root.querySelectorAll('[data-language-button]');
  function setLanguage(language) {
    root.dataset.language = language;
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.languageButton === language)));
    root.querySelectorAll('[data-code-language]').forEach(panel => { panel.hidden = panel.dataset.codeLanguage !== language; });
  }
  buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.languageButton)));
  const exampleButtons = root.querySelectorAll('[data-example-button]');
  const examples = root.querySelectorAll('.s3-example');
  let selectedExample = 'two-arm';
  function selectExample(name) {
    selectedExample = selectedExample === name ? null : name;
    exampleButtons.forEach(button => button.setAttribute('aria-expanded', String(button.dataset.exampleButton === selectedExample)));
    examples.forEach(example => { example.hidden = example.id !== 's3-' + selectedExample; });
    root.querySelector('[data-example-note]').hidden = selectedExample === null;
    root.querySelector('.s3-picker-hint').hidden = selectedExample !== null;
  }
  exampleButtons.forEach(button => button.addEventListener('click', () => selectExample(button.dataset.exampleButton)));
  setLanguage('r');

})();
