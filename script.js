(() => {
  const toggle = document.querySelector('.language-toggle');
  const textNodes = document.querySelectorAll('[data-en][data-zh]');
  let language = 'en';

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language === 'zh' ? 'zh-Hans' : 'en';
    textNodes.forEach((node) => {
      node.textContent = node.dataset[language];
    });
    toggle.setAttribute('aria-pressed', String(language === 'zh'));
    toggle.setAttribute('aria-label', language === 'zh' ? '切换到英文' : '切换到中文');
  }

  toggle.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
})();
