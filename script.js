/* ============================================================
   script.js — A Day Written for Hana
   ============================================================ */

/* ─── Section Navigation ─────────────────────────────── */
const sections = ['welcome','countdown','letter','gallery','appreciation','messages','wishcatcher','timecapsule','celebration'];

function navigateTo(id) {
  sections.forEach(s => {
    const el = document.getElementById(s);
    if (el) el.classList.add('hidden');
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.remove('hidden');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Update sidebar active state
  sections.forEach(s => {
    const link = document.getElementById('nav-' + s);
    if (link) link.classList.toggle('active', s === id);
  });

  // Section-specific init
  if (id === 'wishcatcher') initButterflyField();
  if (id === 'celebration') launchConfetti();

  // Close mobile sidebar
  closeMobileSidebar();
}

/* ─── Mobile Sidebar ─────────────────────────────────── */
const mobileBtn = document.getElementById('mobileMenuBtn');
const sidebar   = document.getElementById('sidebar');
const overlay   = document.getElementById('sidebarOverlay');

if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  });
}

if (overlay) {
  overlay.addEventListener('click', closeMobileSidebar);
}

function closeMobileSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
}

/* ─── Envelope / Letter Section ─────────────────────── */
let envelopeOpened = false;

function openEnvelope() {
  if (envelopeOpened) return;
  envelopeOpened = true;

  const flap    = document.getElementById('envelopeFlap');
  const content = document.getElementById('letterContent');

  if (flap)    flap.classList.add('open');
  if (content) content.classList.add('revealed');
}

/* ─── Time Capsule Envelope ──────────────────────────── */
let capsuleOpened = false;

function toggleCapsule() {
  capsuleOpened = !capsuleOpened;
  const flap = document.getElementById('tcFlap');
  if (flap) flap.classList.toggle('open', capsuleOpened);
}

function saveCapsule() {
  showToast('🔒 Your note has been sealed in the vault!');
}

function editCapsule() {
  showToast('✏️ Edit mode coming soon...');
}

/* ─── Message Wall: Post Note ─────────────────────────── */
function submitNote(e) {
  e.preventDefault();
  const name    = document.getElementById('noteName').value.trim();
  const message = document.getElementById('noteMessage').value.trim();
  if (!name || !message) return;

  const grid = document.getElementById('messagesGrid');
  if (!grid) return;

  const card = document.createElement('div');
  card.className = 'message-card';
  card.innerHTML = `
    <div class="quote-mark">"</div>
    <p class="message-text">${escapeHTML(message)}</p>
    <div class="message-from">— ${escapeHTML(name.toUpperCase())}</div>
    <span class="message-icon">♡</span>
  `;
  card.style.animation = 'fadeInUp 0.5s ease both';
  grid.appendChild(card);

  document.getElementById('noteForm').reset();
  showToast('💌 Your memory has been added to Hana\'s book!');
}

function escapeHTML(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ─── Wish Catcher: Butterfly Field ────────────────────── */
const wishes = [
  "May every dream you carry bloom into something beautiful. 🌷",
  "Wishing you a year full of unexpected delights. ✨",
  "May this chapter of your life be your favourite yet. 📖",
  "The world is more magical because you are in it. 🦋",
  "May joy find you in every quiet, ordinary moment. ☀️",
  "Here's to a year of new horizons and cherished memories. 🌅",
  "Your kindness ripples further than you know, Hana. 💛",
  "May you always find your way back to what you love. 🌿",
  "Laughter, adventure, and lots of good cake await you! 🎂",
  "You deserve every beautiful thing heading your way. 🌸"
];

let wishCount = 0;
let butterflyInterval = null;

function initButterflyField() {
  const field = document.getElementById('butterflyField');
  if (!field || field.dataset.initialized) return;
  field.dataset.initialized = 'true';

  // Spawn butterflies periodically
  spawnButterfly(field);
  butterflyInterval = setInterval(() => spawnButterfly(field), 1800);
}

function spawnButterfly(field) {
  const fly = document.createElement('span');
  fly.className = 'floating-butterfly';
  fly.textContent = '🦋';
  fly.style.left  = Math.random() * 85 + '%';
  fly.style.top   = Math.random() * 70 + '%';
  fly.style.animationDuration = (3 + Math.random() * 4) + 's';
  fly.style.animationDelay    = (Math.random() * 2) + 's';
  fly.style.fontSize           = (1.2 + Math.random() * 1.2) + 'rem';
  fly.style.opacity            = (0.4 + Math.random() * 0.5).toString();

  fly.addEventListener('click', () => catchButterfly(fly));
  field.appendChild(fly);

  // Auto-remove after 12s if not caught
  setTimeout(() => { if (fly.parentNode) fly.parentNode.removeChild(fly); }, 12000);
}

function catchButterfly(fly) {
  fly.classList.add('caught');
  wishCount++;

  const counterEl = document.getElementById('counterNum');
  if (counterEl) counterEl.textContent = wishCount;

  const wish = wishes[(wishCount - 1) % wishes.length];
  showWishPopup(wish);

  setTimeout(() => {
    if (fly.parentNode) fly.parentNode.removeChild(fly);
  }, 500);
}

function showWishPopup(text) {
  const popup = document.getElementById('wishPopup');
  if (!popup) return;

  popup.textContent = text;
  popup.classList.remove('hidden');

  clearTimeout(popup._timeout);
  popup._timeout = setTimeout(() => popup.classList.add('hidden'), 3500);
}

/* ─── Confetti ─────────────────────────────────────────── */
const confettiColors = ['#c9a84c','#d8c3a5','#f0e0d1','#6c5c44','#cfc5b9','#edddce','#f6dfc0','#ffffff'];

function launchConfetti() {
  const container = document.getElementById('confettiContainer');
  if (!container || container.dataset.launched) return;
  container.dataset.launched = 'true';

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${-Math.random() * 20}%;
      background: ${confettiColors[Math.floor(Math.random() * confettiColors.length)]};
      width: ${4 + Math.random() * 8}px;
      height: ${4 + Math.random() * 8}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '1px'};
      animation-duration: ${3 + Math.random() * 5}s;
      animation-delay: ${Math.random() * 3}s;
    `;
    container.appendChild(piece);
  }
}

/* ─── Toast Notification ──────────────────────────────── */
function showToast(msg) {
  let toast = document.getElementById('toastEl');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastEl';
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--primary)',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      fontFamily: "'Source Serif 4', serif",
      fontSize: '0.9rem',
      zIndex: '9999',
      boxShadow: '0 4px 20px rgba(60,48,32,0.2)',
      transition: 'opacity 0.3s',
      maxWidth: '360px',
      textAlign: 'center'
    });
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.style.opacity = '0', 3000);
}

/* ─── Scroll-based sidebar highlight ─────────────────── */
// Auto-navigate based on hash on load
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash && sections.includes(hash)) {
    navigateTo(hash);
  }
});

// Make sidebar links also handle hash navigation
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const id = href ? href.replace('#', '') : null;
    if (id && sections.includes(id)) navigateTo(id);
  });
});

// Also handle topnav anchor clicks
document.querySelectorAll('.topnav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href').replace('#', '');
    if (id && sections.includes(id)) navigateTo(id);
  });
});
