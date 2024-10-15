// Better Dark mode toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');


function switchTheme(e) {
  if (e.target.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Check for saved user preference, if any, on load of the website
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.classList[currentTheme === 'dark' ? 'add' : 'remove']('dark-mode');

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}