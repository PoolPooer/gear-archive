const list = document.getElementById('gearList');
const stats = document.getElementById('stats');
const collectionCount = document.getElementById('collectionCount');
const collectionView = document.getElementById('collectionView');
const detailView = document.getElementById('detailView');
const filterButtons = [...document.querySelectorAll('.filter')];

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[ch]));
}

function renderStats() {
  const guitars = gear.filter(i => i.kind === 'guitar').length;
  const basses = gear.filter(i => i.kind === 'bass').length;
  stats.innerHTML = `
    <div class="stat"><div class="stat-label">Instruments</div><div class="stat-value">${gear.length}</div></div>
    <div class="stat"><div class="stat-label">Guitars</div><div class="stat-value">${guitars}</div></div>
    <div class="stat"><div class="stat-label">Bass</div><div class="stat-value">${basses}</div></div>
    <div class="stat"><div class="stat-label">Known Cyclone mods</div><div class="stat-value small">€373.69 + $92.99 + £12.24</div></div>
  `;
}

function renderCollection(filter = 'all') {
  const visible = gear.filter(item => filter === 'all' || item.kind === filter);
  collectionCount.textContent = `${visible.length} instrument${visible.length === 1 ? '' : 's'}`;

  list.innerHTML = visible.map(item => {
    const details = [item.year, item.finish, item.origin].filter(Boolean).join(' · ');
    const note = item.note ? ` · ${item.note}` : '';
    const clickable = item.history ? 'button' : 'div';
    const detailAttr = item.history ? `data-id="${escapeHtml(item.id)}"` : '';
    return `
      <${clickable} class="gear-row ${item.modified ? 'featured' : ''}" ${detailAttr}>
        <div class="gear-icon">${escapeHtml(item.brand.slice(0,1))}</div>
        <div>
          <div class="gear-name">${escapeHtml(item.brand)} ${escapeHtml(item.model)}</div>
          <div class="gear-meta">${escapeHtml(details + note)}</div>
        </div>
        <div class="gear-status">${escapeHtml(item.status)}${item.modified ? '<br><span>Modified</span>' : ''}</div>
        <div>${item.history ? '→' : ''}</div>
      </${clickable}>
    `;
  }).join('');

  document.querySelectorAll('[data-id]').forEach(btn => {
    btn.addEventListener('click', () => showDetail(btn.dataset.id));
  });
}

function rowsFromObject(obj) {
  return Object.entries(obj).map(([key, value]) => `
    <div class="data-row"><dt>${escapeHtml(key)}</dt><dd>${escapeHtml(value)}</dd></div>
  `).join('');
}

function showDetail(id) {
  const item = gear.find(i => i.id === id);
  if (!item) return;

  detailView.innerHTML = `
    <button class="back" id="backButton">← Back to collection</button>

    <div class="hero">
      <div class="photo-placeholder">
        <div><div class="photo-mark">${escapeHtml(item.brand.slice(0,1))}</div><div>Your guitar photo goes here</div></div>
      </div>
      <div>
        <span class="badge">${escapeHtml(item.status)}</span>
        <p class="eyebrow" style="margin-top:18px">${escapeHtml(item.brand)} · ${escapeHtml(item.year)}</p>
        <h2 class="detail-title">${escapeHtml(item.model)}</h2>
        <p class="detail-subtitle">${escapeHtml(item.finish)} · Made in ${escapeHtml(item.origin)}</p>
        <dl class="meta-grid">
          <div><dt>Serial</dt><dd>${escapeHtml(item.serial)}</dd></div>
          <div><dt>Acquired</dt><dd>${escapeHtml(item.acquired)}</dd></div>
          <div><dt>Acquisition</dt><dd>${escapeHtml(item.acquisitionType)}</dd></div>
          <div><dt>Original price</dt><dd>${escapeHtml(item.originalPrice)}</dd></div>
        </dl>
      </div>
    </div>

    <div class="two-col">
      <section>
        <h3>Current setup</h3>
        <dl class="data-list">${rowsFromObject(item.currentSpec)}</dl>
      </section>
      <section>
        <h3>Original → current</h3>
        <dl class="data-list">
          ${Object.keys(item.originalSpec).map(key => `<div class="data-row"><dt>${escapeHtml(key)}</dt><dd>${escapeHtml(item.originalSpec[key])} → ${escapeHtml(item.currentSpec[key] || 'Current configuration')}</dd></div>`).join('')}
        </dl>
      </section>
    </div>

    <section class="timeline-wrap">
      <div class="section-heading"><h3>History</h3><span>Acquisition · modifications · maintenance</span></div>
      <div class="timeline">
        ${item.history.map(event => `
          <article class="event">
            <div class="event-meta">${escapeHtml(event.date)} · ${escapeHtml(event.type)}</div>
            <div class="event-title">${escapeHtml(event.title)}</div>
            <div class="event-desc">${escapeHtml(event.description)}</div>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="financials">
      <h3>Financial record</h3>
      <div class="stats">
        <div class="stat"><div class="stat-label">Acquisition value</div><div class="stat-value">${escapeHtml(item.financials.acquisition)}</div><div class="gear-meta">${escapeHtml(item.financials.acquisitionNote)}</div></div>
        <div class="stat"><div class="stat-label">Known EUR mods</div><div class="stat-value">${escapeHtml(item.financials.eurMods)}</div></div>
        <div class="stat"><div class="stat-label">Known USD mods</div><div class="stat-value">${escapeHtml(item.financials.usdMods)}</div></div>
        <div class="stat"><div class="stat-label">Known GBP mods</div><div class="stat-value">${escapeHtml(item.financials.gbpMods)}</div></div>
      </div>
    </section>
  `;

  collectionView.classList.add('hidden');
  detailView.classList.remove('hidden');
  document.getElementById('backButton').addEventListener('click', () => {
    detailView.classList.add('hidden');
    collectionView.classList.remove('hidden');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    renderCollection(button.dataset.filter);
  });
});

renderStats();
renderCollection();
