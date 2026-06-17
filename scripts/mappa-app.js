const puntiVendita = window.puntiVendita || [];

const catene = [
  { nome: "Signorvino", logo: "./assets/logo-signorvino.svg" },
  { nome: "Poke House", logo: "./assets/logo-poke-house.svg" },
  { nome: "All'antico Vinaio", logo: "./assets/logo-all-antico-vinaio.svg" },
  { nome: "Enilive Caf\u00e9", logo: "./assets/logo-enilive-cafe.svg" },
  { nome: "Autogrill", logo: "./assets/logo-autogrill.svg" },
  { nome: "Eataly", logo: "./assets/logo-eataly.svg" },
];

const REGIONI_GEOJSON_URL = 'https://raw.githubusercontent.com/openpolis/geojson-italy/master/geojson/limits_IT_regions.geojson';

const regioni = [
  { nome: "Valle d'Aosta", bounds: [[45.45, 6.80], [46.05, 7.95]] },
  { nome: "Piemonte", bounds: [[44.05, 6.62], [46.48, 9.22]] },
  { nome: "Liguria", bounds: [[43.73, 7.45], [44.72, 10.08]] },
  { nome: "Lombardia", bounds: [[44.67, 8.50], [46.64, 11.42]] },
  { nome: "Trentino-Alto Adige", bounds: [[45.65, 10.38], [47.10, 12.50]] },
  { nome: "Veneto", bounds: [[44.78, 10.62], [46.70, 13.10]] },
  { nome: "Friuli Venezia Giulia", bounds: [[45.55, 12.32], [46.65, 13.92]] },
  { nome: "Emilia-Romagna", bounds: [[43.68, 9.18], [45.18, 12.78]] },
  { nome: "Toscana", bounds: [[42.24, 9.68], [44.48, 12.38]] },
  { nome: "Marche", bounds: [[42.68, 12.18], [43.98, 13.92]] },
  { nome: "Umbria", bounds: [[42.36, 11.88], [43.62, 13.28]] },
  { nome: "Lazio", bounds: [[40.78, 11.45], [42.85, 14.05]] },
  { nome: "Abruzzo", bounds: [[41.68, 13.02], [42.92, 14.82]] },
  { nome: "Molise", bounds: [[41.35, 13.88], [42.10, 15.25]] },
  { nome: "Campania", bounds: [[39.98, 13.75], [41.52, 15.82]] },
  { nome: "Puglia", bounds: [[39.78, 14.90], [42.30, 18.55]] },
  { nome: "Basilicata", bounds: [[39.88, 15.32], [41.16, 16.88]] },
  { nome: "Calabria", bounds: [[37.88, 15.58], [40.24, 17.25]] },
  { nome: "Sicilia", bounds: [[36.60, 12.25], [38.36, 15.72]] },
  { nome: "Sardegna", bounds: [[38.82, 8.05], [41.32, 9.85]] },
];

puntiVendita.forEach((punto) => {
  punto.regione = punto.regione || trovaRegione(punto);
});

const map = L.map('map', {
  center: [42.5, 12.5],
  zoom: 6,
  zoomControl: true,
});

L.tileLayer('https://api.thunderforest.com/transport/{z}/{x}/{y}{r}.png?apikey={apikey}', {
    attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    apikey: '47bccb9c7c7544298ab56077e11068f0', 
    maxZoom: 22
  }).addTo(map);

map.on('popupopen', () => {
  centerPopupInMap();
});

function createIcon(isActive = false, idx = 0) {
  const animationDelay = Math.min(Math.max(idx, 0) * .05, 1.5).toFixed(2);

  return L.divIcon({
    className: 'store-map-icon',
    html: `
      <div class="map-marker">
        <img class="map-marker-img" src="./assets/${isActive ? 'icon-location-2.svg' : 'icon-location.svg'}" alt="" aria-hidden="true" style="animation-delay: ${animationDelay}s;" />
      </div>`,
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -22],
  });
}

const defaultMarkerSrc = './assets/icon-location.svg';
const activeMarkerSrc = './assets/icon-location-2.svg';
const hoverMarkerSrc = './assets/icon-location-active.svg';
const sidebar = document.getElementById('sidebar');
const counter = document.getElementById('counter');
const mapMessage = document.getElementById('map-message');
const searchWrapper = document.createElement('div');
searchWrapper.className = 'search-wrapper';
searchWrapper.innerHTML = `
  <label class="search-label">
    <span class="search-label-text">Cerca negozio</span>
    <input class="search-input" type="search" placeholder="Inserisci il nome dello store" aria-label="Cerca negozio" />
  </label>
`;
sidebar.appendChild(searchWrapper);

const searchInput = searchWrapper.querySelector('.search-input');
searchInput.addEventListener('input', () => applySearchFilter(searchInput.value));

const brandList = document.createElement('div');
const markers = [];
let activeIdx = null;
let selectedRegionLayer = null;

brandList.className = 'brand-list';
sidebar.appendChild(brandList);

catene.forEach((catena) => {
  const puntiCatena = puntiVendita.filter((p) => p.catena === catena.nome);
  const section = document.createElement('section');
  section.className = 'brand-section';
  section.dataset.catena = catena.nome;
  section.innerHTML = `
    <button class="brand-toggle" type="button" aria-expanded="false">
      <img class="brand-logo" src="${catena.logo}" alt="${catena.nome}" />
      <span>
        <span class="brand-name">${catena.nome}</span>
        <span class="brand-count">${puntiCatena.length} punti vendita</span>
      </span>
      <span class="brand-chevron" aria-hidden="true">&#8964;</span>
    </button>
    <div class="store-list"></div>`;

  const list = section.querySelector('.store-list');

  if (puntiCatena.length === 0) {
    list.innerHTML = '<p class="empty-brand">Nessun punto vendita inserito.</p>';
  } else {
    puntiCatena.forEach((punto) => {
      list.appendChild(createStoreCard(punto, puntiVendita.indexOf(punto)));
    });
  }

  section.querySelector('.brand-toggle').addEventListener('click', () => {
    const isOpen = section.classList.toggle('open');
    section.querySelector('.brand-toggle').setAttribute('aria-expanded', String(isOpen));

    if (isOpen) {
      closeOtherBrands(section);
      selectedRegionLayer = clearSelectedRegion(selectedRegionLayer);
      showByCatena(catena.nome);
    } else {
      resetMapSelection();
    }
  });

  brandList.appendChild(section);
});

loadRegionShapes();
updateCounter(0, 'Selezione richiesta');

function createStoreCard(p, idx) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'store-card';
  card.dataset.idx = idx;
  card.innerHTML = `
    <div class="store-icon">
      <img src="./assets/icon-location.svg" alt="" aria-hidden="true" data-default-src="./assets/icon-location.svg" data-active-src="./assets/icon-location-active.svg" />
    </div>
    <div class="store-info">
      <h3>${escapeHtml(p.nome)}</h3>
      <p>${escapeHtml(p.indirizzo)}</p>
    </div>`;
  card.addEventListener('click', () => {
    const markerIdx = markers.findIndex((item) => item.storeIdx === idx);
    if (markerIdx >= 0) {
      map.once('moveend', () => setActive(markerIdx));
      map.flyTo([p.lat, p.lng], 13, { duration: 1 });
    }
  });
  card.addEventListener('mouseenter', () => setMarkerHoverByStoreIdx(idx, true));
  card.addEventListener('mouseleave', () => setMarkerHoverByStoreIdx(idx, false));
  return card;
}

function applySearchFilter(query) {
  const searchTerm = String(query || '').trim().toLowerCase();

  if (!searchTerm) {
    document.querySelectorAll('.brand-section').forEach((section) => {
      section.style.display = '';
      section.classList.remove('open');
      section.querySelector('.brand-toggle').setAttribute('aria-expanded', 'false');
      section.querySelectorAll('.store-card').forEach((card) => {
        card.style.display = '';
      });
    });

    resetMapSelection();
    return;
  }

  closeOtherBrands();
  const visibleCards = [];

  document.querySelectorAll('.brand-section').forEach((section) => {
    let sectionMatches = 0;

    section.querySelectorAll('.store-card').forEach((card) => {
      const title = card.querySelector('.store-info h3')?.textContent?.toLowerCase() || '';
      const isMatch = title.includes(searchTerm);
      card.style.display = isMatch ? '' : 'none';

      if (isMatch) {
        sectionMatches += 1;
        visibleCards.push(card);
      }
    });

    if (sectionMatches > 0) {
      section.style.display = '';
      section.classList.add('open');
      section.querySelector('.brand-toggle').setAttribute('aria-expanded', 'true');
    } else {
      section.style.display = 'none';
      section.classList.remove('open');
      section.querySelector('.brand-toggle').setAttribute('aria-expanded', 'false');
    }
  });

  const resultCount = visibleCards.length;
  updateCounter(resultCount, resultCount === 1 ? 'risultato ricerca' : 'risultati ricerca');

  if (resultCount > 0) {
    mapMessage.classList.add('hidden');
    renderMarkers(visibleCards.map((card) => ({ punto: puntiVendita[Number(card.dataset.idx)], idx: Number(card.dataset.idx) })));
  } else {
    renderMarkers([]);
    mapMessage.textContent = 'Nessun negozio trovato';
    mapMessage.classList.remove('hidden');
  }
}

function loadRegionShapes() {
  fetch(REGIONI_GEOJSON_URL)
    .then((response) => {
      if (!response.ok) throw new Error('GeoJSON regioni non disponibile');
      return response.json();
    })
    .then((geojson) => {
      L.geoJSON(geojson, {
        style: {
          className: 'region-shape',
          color: '#cf0505',
          weight: 1.2,
          opacity: 0,
          fillColor: '#cf0505',
          fillOpacity: 0,
        },
        onEachFeature: (feature, layer) => {
          const nomeRegione = normalizzaNomeRegione(feature.properties.reg_name || feature.properties.name || "");

          layer.on('mouseover', () => {
            if (selectedRegionLayer !== layer) {
              layer.setStyle({ opacity: .8, fillOpacity: .16 });
            }
          });

          layer.on('mouseout', () => {
            if (selectedRegionLayer !== layer) {
              layer.setStyle({ opacity: 0, fillOpacity: 0 });
            }
          });

          layer.on('click', () => {
            closeOtherBrands();
            selectedRegionLayer = clearSelectedRegion(selectedRegionLayer);
            selectedRegionLayer = layer;
            layer.setStyle({ opacity: .95, fillOpacity: .22 });
            showByRegione(nomeRegione);
          });
        },
      }).addTo(map);
    })
    .catch((error) => {
      console.warn(error);
    });
}

function renderMarkers(punti) {
  clearActive();
  markers.forEach((item) => item.marker.remove());
  markers.length = 0;

  punti.forEach(({ punto, idx }, markerIdx) => {
    const marker = L.marker([punto.lat, punto.lng], { icon: createIcon(false, markerIdx) }).addTo(map);
    const popupHTML = `
      <div class="popup-inner">
        <p class="popup-name">${escapeHtml(punto.nome)}</p>
        <p class="popup-address">${escapeHtml(punto.indirizzo)}</p>
        ${createPopupDetails(punto)}
      </div>`;

    marker.bindPopup(popupHTML, { maxWidth: 300, autoPan: false });
    marker.on('click', () => {
      const markerIdx = markers.findIndex((item) => item.marker === marker);
      setActive(markerIdx);
      scrollSidebarCardIntoView(markerIdx);
    });
    marker.on('mouseover', () => setMarkerHover(markers.findIndex((item) => item.marker === marker), true));
    marker.on('mouseout', () => setMarkerHover(markers.findIndex((item) => item.marker === marker), false));
    marker.on('popupclose', () => {
      const markerIdx = markers.findIndex((item) => item.marker === marker);
      if (activeIdx === markerIdx) clearActive();
    });

    markers.push({ marker, storeIdx: idx });
  });

  if (markers.length > 0) {
    const group = L.featureGroup(markers.map((item) => item.marker));
    map.fitBounds(group.getBounds().pad(.18), { maxZoom: 12 });
  }
}

function showByCatena(nomeCatena) {
  const punti = puntiVendita
    .map((punto, idx) => ({ punto, idx }))
    .filter(({ punto }) => punto.catena === nomeCatena);
  mapMessage.classList.toggle('hidden', punti.length > 0);
  renderMarkers(punti);
  updateCounter(punti.length, nomeCatena);
}

function showByRegione(nomeRegione) {
  const punti = puntiVendita
    .map((punto, idx) => ({ punto, idx }))
    .filter(({ punto }) => punto.regione === nomeRegione);
  mapMessage.classList.toggle('hidden', punti.length > 0);
  renderMarkers(punti);
  updateCounter(punti.length, nomeRegione);
}

function resetMapSelection() {
  selectedRegionLayer = clearSelectedRegion(selectedRegionLayer);
  renderMarkers([]);
  mapMessage.classList.remove('hidden');
  updateCounter(0, 'Selezione richiesta');
}

function setActive(idx) {
  if (idx < 0 || !markers[idx]) return;
  clearActive();
  activeIdx = idx;
  markers[idx].marker.setIcon(createIcon(true, idx));
  markers[idx].marker.openPopup();
  const activeCard = document.querySelector(`.store-card[data-idx="${markers[idx].storeIdx}"]`);
  if (activeCard) {
    const activeCardIcon = activeCard.querySelector('.store-icon img');
    activeCard.classList.add('active');
    activeCardIcon.src = activeCardIcon.dataset.activeSrc;
  }
}

function centerPopupInMap() {
  const recenter = () => {
    const popupElement = document.querySelector('.leaflet-popup');
    if (!popupElement) return;

    const mapRect = map.getContainer().getBoundingClientRect();
    const popupRect = popupElement.getBoundingClientRect();
    const popupCenterX = popupRect.left + (popupRect.width / 2);
    const popupCenterY = popupRect.top + (popupRect.height / 2);
    const mapCenterX = mapRect.left + (mapRect.width / 2);
    const mapCenterY = mapRect.top + (mapRect.height / 2);

    map.panBy([popupCenterX - mapCenterX, popupCenterY - mapCenterY], {
      animate: true,
      duration: .35,
    });
  };

  requestAnimationFrame(() => requestAnimationFrame(recenter));
  window.setTimeout(recenter, 320);
}

function scrollSidebarCardIntoView(markerIdx) {
  if (markerIdx < 0 || !markers[markerIdx]) return;

  const activeCard = document.querySelector(`.store-card[data-idx="${markers[markerIdx].storeIdx}"]`);
  if (!activeCard) return;

  const sidebarRect = sidebar.getBoundingClientRect();
  const cardRect = activeCard.getBoundingClientRect();
  const cardOffset = cardRect.top - sidebarRect.top + sidebar.scrollTop;
  const centeredOffset = cardOffset - (sidebar.clientHeight / 2) + (activeCard.offsetHeight / 2);
  const maxScrollTop = sidebar.scrollHeight - sidebar.clientHeight;

  sidebar.scrollTo({ top: Math.max(0, Math.min(centeredOffset, maxScrollTop)), behavior: 'smooth' });
}

function clearActive() {
  if (activeIdx !== null && markers[activeIdx]) {
    markers[activeIdx].marker.setIcon(createIcon(false, activeIdx));
    const activeCard = document.querySelector(`.store-card[data-idx="${markers[activeIdx].storeIdx}"]`);
    if (activeCard) {
      const activeCardIcon = activeCard.querySelector('.store-icon img');
      activeCard.classList.remove('active');
      activeCardIcon.src = activeCardIcon.dataset.defaultSrc;
    }
  }
  activeIdx = null;
}

function setMarkerHoverByStoreIdx(storeIdx, isHovered) {
  const markerIdx = markers.findIndex((item) => item.storeIdx === storeIdx);
  setMarkerHover(markerIdx, isHovered);
}

function setMarkerHover(markerIdx, isHovered) {
  const markerItem = markers[markerIdx];
  if (!markerItem) return;

  const markerElement = markerItem.marker.getElement();
  if (!markerElement) return;

  const markerImage = markerElement.querySelector('.map-marker-img');
  if (markerImage) {
    markerImage.src = isHovered
      ? hoverMarkerSrc
      : activeIdx === markerIdx
        ? activeMarkerSrc
        : defaultMarkerSrc;
  }

  markerElement.classList.toggle('marker-hover', isHovered);
  markerItem.marker.setZIndexOffset(isHovered ? 1000 : 0);
}

function closeOtherBrands(activeSection = null) {
  document.querySelectorAll('.brand-section').forEach((section) => {
    if (section !== activeSection) {
      section.classList.remove('open');
      section.querySelector('.brand-toggle').setAttribute('aria-expanded', 'false');
    }
  });
}

function clearSelectedRegion(layer) {
  if (layer) {
    layer.setStyle({ opacity: 0, fillOpacity: 0 });
  }
  return null;
}

function createPopupDetails(punto) {
  const telefono = typeof punto.telefono === 'string' ? punto.telefono.trim() : "";
  const orari = formatOrari(punto.orari);
  const details = [];

  if (telefono) {
    details.push(`
      <div>
        <span class="popup-detail-title">Telefono</span>
        <span>${escapeHtml(telefono)}</span>
      </div>`);
  }

  if (orari) {
    details.push(`
      <div>
        <span class="popup-detail-title">Orari</span>
        <div class="popup-hours">${orari}</div>
      </div>`);
  }

  return details.length ? `<div class="popup-details">${details.join('')}</div>` : "";
}

function formatOrari(orari) {
  if (!orari || typeof orari !== 'object') return "";

  const giorni = [
    ['lunedi', 'Lun'],
    ['martedi', 'Mar'],
    ['mercoledi', 'Mer'],
    ['giovedi', 'Gio'],
    ['venerdi', 'Ven'],
    ['sabato', 'Sab'],
    ['domenica', 'Dom'],
  ];

  return giorni
    .filter(([key]) => typeof orari[key] === 'string' && orari[key].trim())
    .map(([key, label]) => `<span>${label}</span><span>${escapeHtml(orari[key].trim())}</span>`)
    .join('');
}

function updateCounter(total, label) {
  counter.innerHTML = `<strong>${total}</strong> punti vendita &middot; ${escapeHtml(label)}`;
}

function trovaRegione(punto) {
  const regioneDaProvincia = trovaRegioneDaProvincia(punto.indirizzo || "");
  if (regioneDaProvincia) return regioneDaProvincia;

  const regione = regioni.find((item) => {
    const [[south, west], [north, east]] = item.bounds;
    return punto.lat >= south && punto.lat <= north && punto.lng >= west && punto.lng <= east;
  });

  return regione ? regione.nome : "";
}

function trovaRegioneDaProvincia(indirizzo) {
  const match = indirizzo.match(/\b(AG|AL|AN|AO|AP|AQ|AR|AT|AV|BA|BG|BI|BL|BN|BO|BR|BS|BT|BZ|CA|CB|CE|CH|CL|CN|CO|CR|CS|CT|CZ|EN|FC|FE|FG|FI|FM|FR|GE|GO|GR|IM|IS|KR|LC|LE|LI|LO|LT|LU|MB|MC|ME|MI|MN|MO|MS|MT|NA|NO|NU|OR|PA|PC|PD|PE|PG|PI|PN|PO|PR|PT|PU|PV|PZ|RA|RC|RE|RG|RI|RM|RN|RO|SA|SI|SO|SP|SR|SS|SU|SV|TA|TE|TN|TO|TP|TR|TS|TV|UD|VA|VB|VC|VE|VI|VR|VT|VV)\b/);
  if (!match) return "";

  const province = {
    "Abruzzo": ["AQ", "CH", "PE", "TE"],
    "Basilicata": ["MT", "PZ"],
    "Calabria": ["CS", "CZ", "KR", "RC", "VV"],
    "Campania": ["AV", "BN", "CE", "NA", "SA"],
    "Emilia-Romagna": ["BO", "FC", "FE", "MO", "PC", "PR", "RA", "RE", "RN"],
    "Friuli Venezia Giulia": ["GO", "PN", "TS", "UD"],
    "Lazio": ["FR", "LT", "RI", "RM", "VT"],
    "Liguria": ["GE", "IM", "SP", "SV"],
    "Lombardia": ["BG", "BS", "CO", "CR", "LC", "LO", "MB", "MI", "MN", "PV", "SO", "VA"],
    "Marche": ["AN", "AP", "FM", "MC", "PU"],
    "Molise": ["CB", "IS"],
    "Piemonte": ["AL", "AT", "BI", "CN", "NO", "TO", "VB", "VC"],
    "Puglia": ["BA", "BR", "BT", "FG", "LE", "TA"],
    "Sardegna": ["CA", "NU", "OR", "SS", "SU"],
    "Sicilia": ["AG", "CL", "CT", "EN", "ME", "PA", "RG", "SR", "TP"],
    "Toscana": ["AR", "FI", "GR", "LI", "LU", "MS", "PI", "PO", "PT", "SI"],
    "Trentino-Alto Adige": ["BZ", "TN"],
    "Umbria": ["PG", "TR"],
    "Valle d'Aosta": ["AO"],
    "Veneto": ["BL", "PD", "RO", "TV", "VE", "VI", "VR"],
  };

  return Object.keys(province).find((regione) => province[regione].includes(match[1])) || "";
}

function normalizzaNomeRegione(nome) {
  return String(nome)
    .replace('Trentino-Alto Adige/Sudtirol', 'Trentino-Alto Adige')
    .replace('Trentino-Alto Adige/S\u00fcdtirol', 'Trentino-Alto Adige')
    .replace("Valle d'Aosta/Vall\u00e9e d'Aoste", "Valle d'Aosta")
    .replace('Friuli-Venezia Giulia', 'Friuli Venezia Giulia');
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }[char]));
}
