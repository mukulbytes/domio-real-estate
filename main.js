import { properties, destinations, team, testimonials, tickerItems } from "./data.js";
import { initCursor } from "./js/cursor.js";

// ── Init ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    renderTicker();
    renderProperties("all");
    renderDestinations();
    renderTestimonials();
    renderTeam();
    setupEventListeners();
})

// ── Navbar ─────────────────────────────────────────────
window.addEventListener("scroll", () => document.getElementById("navbar").classList.toggle("scrolled", scrollY > 60));

// ── Mobile Menu ────────────────────────────────────────
function toggleMM() {
    document.getElementById("mobileMenu").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}
function closeMM() {
    document.getElementById("mobileMenu").classList.remove("open");
    document.getElementById("hamburger").classList.remove("open");
}

// ── Event Listeners Setup ───────────────────────────────
function setupEventListeners() {
    // Hamburger menu
    document.getElementById("hamburger").addEventListener("click", toggleMM);
    
    // Mobile menu links
    document.querySelectorAll(".mobile-menu-link").forEach((link) => {
        link.addEventListener("click", closeMM);
    });
    
    // Search button
    document.getElementById("searchBtn").addEventListener("click", doSearch);
    
    // Filter tabs
    document.querySelectorAll(".filter-tab").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const filter = e.target.dataset.filter;
            document.querySelectorAll(".filter-tab").forEach((t) => t.classList.remove("active"));
            e.target.classList.add("active");
            currentFilter = filter;
            renderProperties(filter);
        });
    });
    
    // Load more button
    document.getElementById("loadMoreBtn").addEventListener("click", loadMore);
    
    // Subscribe button
    document.getElementById("subscribeBtn").addEventListener("click", subscribe);
    
    // Event delegation for dynamically generated elements
    document.getElementById("propertiesGrid").addEventListener("click", (e) => {
        const card = e.target.closest(".property-card");
        const cta = e.target.closest(".property-cta");
        if (card || cta) {
            e.preventDefault();
            const name = card?.dataset.propertyName || cta?.dataset.propertyName;
            if (name) openProperty(name);
        }
    });
    
    document.getElementById("worldGrid").addEventListener("click", (e) => {
        const card = e.target.closest(".dest-card");
        if (card) {
            const city = card.dataset.city;
            const country = card.dataset.country;
            showToast("Destination", `Exploring ${city}, ${country}…`);
        }
    });
    
    document.getElementById("teamGrid").addEventListener("click", (e) => {
        const card = e.target.closest(".team-card");
        if (card) {
            const name = card.dataset.memberName;
            showToast("Agent Profile", `Loading profile for ${name}…`);
        }
    });
}


// ── Reveal ─────────────────────────────────────────────
const obs = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add("visible");
                obs.unobserve(e.target);
            }
        });
    },
    { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

// ── Toast ──────────────────────────────────────────────
function showToast(title, msg) {
    const t = document.getElementById("toast");
    t.innerHTML = `<strong>${title}</strong>${msg}`;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 4000);
}

// ── Render Ticker ───────────────────────────────────────
function renderTicker() {
    const t = document.getElementById("tickerTrack");
    const doubled = [...tickerItems, ...tickerItems];
    t.innerHTML = doubled
        .map(
            (item) => `
          <div class="ticker-item">
            ${item.loc} <span>${item.price}</span>
          </div>
        `,
        )
        .join("");
}

// ── Render Properties ───────────────────────────────────
let currentFilter = "all";
function renderProperties(filter) {
    const grid = document.getElementById("propertiesGrid");
    const filtered = filter === "all" ? properties : properties.filter((p) => p.type === filter);
    grid.innerHTML = filtered
        .map(
            (p) => `
          <div class="property-card" data-property-name="${p.name}">
            <div class="property-img">
              <div style="position:absolute;inset:0;width:100%;height:100%;">
                <img src="assets/property-images/${p.img}.png" style="width:100%;height:100%;object-fit:cover;font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted2);"/>
              </div>
              ${p.badge ? `<div class="property-badge">${p.badge}</div>` : ""}
              <div class="property-country">${p.loc}</div>
            </div>
            <div class="property-info">
              <div class="property-name">${p.name}</div>
              <div class="property-location">${p.loc}</div>
              <div class="property-meta">
                <div class="property-meta-item"><span class="property-meta-dot"></span>${p.beds} Beds</div>
                <div class="property-meta-item"><span class="property-meta-dot"></span>${p.baths} Baths</div>
                <div class="property-meta-item"><span class="property-meta-dot"></span>${p.sqft} sq ft</div>
              </div>
              <div class="property-footer">
                <div class="property-price">${p.price}</div>
                <a href="#" class="property-cta" data-property-name="${p.name}">View</a>
              </div>
            </div>
          </div>
        `,
        )
        .join("");
}

function openProperty(name) {
    showToast("Opening Property", `Loading details for ${name}…`);
}

function loadMore() {
    showToast("Loading", "Fetching more properties from our global portfolio…");
}

// ── Render Destinations ─────────────────────────────────
function renderDestinations() {
    const grid = document.getElementById("worldGrid");
    grid.innerHTML = destinations
        .map(
            (d) => `
          <div class="dest-card" data-city="${d.city}" data-country="${d.country}">
            <div class="dest-img">
              <div style="position:absolute;inset:0;width:100%;height:100%;">
                <img src="assets/destination-images/${d.img}.png" style="width:100%;height:100%;object-fit:cover;"/>
              </div>
              <div style="position:absolute;inset:0;background:linear-gradient(to top, rgba(9, 9, 7, 0.85) 0%, rgba(9, 9, 7, 0.2) 70%);z-index:1;"></div>
              <div class="dest-info">
                <div class="dest-city">${d.city}</div>
                <div class="dest-country">${d.country}</div>
                <div class="dest-count">${d.count} properties</div>
              </div>
              <div class="dest-arrow">→</div>
            </div>
          </div>
        `,
        )
        .join("");
}

// ── Render Testimonials ─────────────────────────────────
function renderTestimonials() {
    const grid = document.getElementById("testiGrid");
    grid.innerHTML = testimonials
        .map(
            (t) => `
          <div class="testi-card">
            <span class="testi-open-quote">"</span>
            <div class="testi-quote">${t.quote}</div>
            <div class="testi-author">
              <div class="testi-avatar">${t.initials}</div>
              <div>
                <div class="testi-name">${t.name}</div>
                <div class="testi-role">${t.role}</div>
              </div>
            </div>
          </div>
        `,
        )
        .join("");
}

// ── Render Team ─────────────────────────────────────────
function renderTeam() {
    const grid = document.getElementById("teamGrid");
    grid.innerHTML = team
        .map(
            (m) => `
          <div class="team-card" data-member-name="${m.name}">
            <div class="team-photo">
              <img src="assets/team-images/${m.img}.png" alt="${m.name}" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div class="team-info">
              <div class="team-name">${m.name}</div>
              <div class="team-title-role">${m.role}</div>
              <div class="team-markets">${m.markets}</div>
            </div>
          </div>
        `,
        )
        .join("");
}

// ── Subscribe ───────────────────────────────────────────
function subscribe() {
    const val = document.getElementById("nlEmail").value.trim();
    if (!val || !val.includes("@")) {
        showToast("Error", "Please enter a valid email address.");
        return;
    }
    document.getElementById("nlEmail").value = "";
    showToast("Subscribed", "Welcome to DOMIO. Expect only the finest.");
}

// ── Search ──────────────────────────────────────────────
function doSearch() {
    showToast("Searching", "Scanning our global portfolio for matching properties…");
    setTimeout(() => document.getElementById("properties").scrollIntoView({ behavior: "smooth" }), 800);
}

