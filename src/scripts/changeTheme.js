document.addEventListener('DOMContentLoaded', () => {
    const moonToggle = document.getElementById('moon-toggle');
    const sunToggle = document.getElementById('sun-toggle');
  
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
  
    const activateDarkMode = () => {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    };
  
    const activateLightMode = () => {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    };
  
    moonToggle.addEventListener('click', activateDarkMode);
    sunToggle.addEventListener('click', activateLightMode);
  });
  