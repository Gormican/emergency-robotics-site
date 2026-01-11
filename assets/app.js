
(function(){
  const order = ["index.html","problem.html","solution.html","roadmap.html","advisors.html","team.html","contact.html"];
  const path = location.pathname.split('/').pop() || "index.html";
  const idx = order.indexOf(path) >= 0 ? order.indexOf(path) : 0;
  const prev = order[(idx - 1 + order.length) % order.length];
  const next = order[(idx + 1) % order.length];
  const prevEl = document.getElementById('prevLink');
  const nextEl = document.getElementById('nextLink');
  if(prevEl) prevEl.href = prev;
  if(nextEl) nextEl.href = next;
  const links = document.querySelectorAll('.menu a');
  links.forEach(a => { const href = a.getAttribute('href'); if(href === path || (path==='index.html' && href==='index.html')) a.classList.add('current'); });
  const overlay = document.getElementById('overlayMenu');
  const openBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeMenu');
  if(openBtn && overlay){ openBtn.onclick = () => overlay.style.display='block'; }
  if(closeBtn && overlay){ closeBtn.onclick = () => overlay.style.display='none'; }
  overlay?.addEventListener('click', (e)=>{ if(e.target === overlay) overlay.style.display='none'; });
})();
