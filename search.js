// ── Autocomplete suggestions ──────────────────────────────────────────────
const suggestions = [
  'Home', 'Business Hours', 'Reservations',
  'Contact', 'Gallery', 'Specials', 'Mains', 'Beverages'
];

const searchInput = document.getElementById('searchBox');

if (searchInput) {
  searchInput.addEventListener('input', function () {
    clearSuggestions();
    const val = this.value.toLowerCase();
    if (!val) return;

    const list = document.createElement('ul');
    list.className = 'autocomplete-list';

    suggestions.forEach(item => {
      if (!item.toLowerCase().includes(val)) return;
      const li = document.createElement('li');
      li.textContent = item;
      li.addEventListener('click', () => {
        searchInput.value = item;
        clearSuggestions();
      });
      list.appendChild(li);
    });

    if (list.children.length) this.parentNode.appendChild(list);
  });

  document.addEventListener('click', e => {
    if (!searchInput.parentNode.contains(e.target)) clearSuggestions();
  });
}

function clearSuggestions() {
  document.querySelectorAll('.autocomplete-list').forEach(el => el.remove());
}

// ── Search redirect ───────────────────────────────────────────────────────
function searchSite() {
  const q = document.getElementById('searchBox').value.toLowerCase().trim();
  if (!q) { alert('Please enter a search term'); return; }

  const routes = [
    { keywords: ['specials'],                       page: 'Specials.html' },
    { keywords: ['mains'],                          page: 'Mains.html' },
    { keywords: ['beverages', 'drinks'],            page: 'Beverages.html' },
    { keywords: ['menu', 'food'],                   page: 'Specials.html' },
    { keywords: ['reservation', 'booking', 'book'], page: 'reservations.html' },
    { keywords: ['gallery', 'photos'],              page: 'gallery.html' },
    { keywords: ['contact', 'phone', 'email'],      page: 'contact.html' },
    { keywords: ['hours', 'open', 'close'],         page: 'business_hours.html' },
    { keywords: ['home'],                           page: 'index.html' },
    { keywords: ['login', 'sign in'],               page: 'login.html' },
  ];

  const match = routes.find(r => r.keywords.some(k => q.includes(k)));
  if (match) {
    window.location = match.page;
  } else {
    alert('No page found for "' + q + '"');
  }
}

// ── Click-toggle dropdown ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-dropdown-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const dropdown = btn.closest('.nav-dropdown');
      const isOpen = dropdown.classList.contains('open');
      document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
      if (!isOpen) dropdown.classList.add('open');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
  });
});

function sendMessage() {
  const msg = document.getElementById("contact-conf");
  msg.style.display = "block";
}


    // External video function
function playExternalVideo() {
        window.open("https://www.instagram.com/reel/DVb3z9DDBBy/", "_blank");
    }

    // Optional: Make the whole placeholder clickable too 
document.addEventListener("DOMContentLoaded", function() {
        const placeholder = document.getElementById("videoPlaceholder");
        if (placeholder) {
            placeholder.addEventListener("click", playExternalVideo);
        }
    });

  // Select all thumbnails
  const thumbnails = document.querySelectorAll('.gallery-thumb img');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalImg = modalOverlay.querySelector('img');
  const closeBtn = modalOverlay.querySelector('.close-btn');

  // Click on thumbnail to open modal
  thumbnails.forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;  // Use clicked image src
      modalImg.alt = img.alt;  // Keep alt text
      modalOverlay.style.display = 'flex';
    });
  });