// Injects the shared nav and footer, and highlights the active link
(function () {
  const pages = [
    { href: 'index.html',      label: 'Home' },
    { href: 'about.html',      label: 'About' },
    { href: 'experience.html', label: 'Experience' },
    { href: 'projects.html',   label: 'Projects' },
    { href: 'skills.html',     label: 'Skills' },
    { href: 'education.html',  label: 'Education' },
    { href: 'contact.html',    label: 'Contact' },
  ];

  const current = window.location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
    <nav>
      <a class="nav-logo" href="index.html">ID / portfolio</a>
      <ul class="nav-links">
        ${pages.slice(1).map(p => `
          <li><a href="${p.href}" class="${current === p.href ? 'active' : ''}">${p.label}</a></li>
        `).join('')}
      </ul>
    </nav>
  `;

  const footerHTML = `
    <footer>
      <div>Built with HTML/CSS &middot; Deployed via GitHub Pages &middot; Ishayu Das &copy; 2025</div>
    </footer>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Fade-in observer
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
})();