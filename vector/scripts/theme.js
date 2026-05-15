(function () {
  var key = 'vector-theme';
  var root = document.documentElement;

  function getTheme() {
    return localStorage.getItem(key) || 'dark';
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(key, theme);
    document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
      button.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
      button.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
    });
  }

  setTheme(getTheme());

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-theme-toggle]');
    if (!button) {
      return;
    }
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  });
}());
