const list = document.getElementById('gearList');
const stats = document.getElementById('stats');
const collectionCount = document.getElementById('collectionCount');
const collectionView = document.getElementById('collectionView');
const detailView = document.getElementById('detailView');
const filterButtons = [...document.querySelectorAll('.filter')];

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, ch => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#039;',
    '"': '&quot;'
  }[ch]));
}

function formatCurrency(amount, currency = 'EUR', approximate = false) {
  if (amount === null || amount === undefined || amount === '') {
    return '—';
  }

  const formatted = new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Number(amount));

  return approximate ? `~${formatted}` : formatted;
}

function getModificationSpend(item) {
  if (item.financials?.modificationSpend?.amount != null) {
    return Number(item.financials.modificationSpend.amount);
  }

  return (item.history || [])
    .filter(event =>
      event.cost != null &&
      event.type !== 'Acquisition' &&
      !event.type.startsWith('Maintenance')
    )
    .reduce((total, event) => total + Number(event.cost), 0);
}

function renderStats() {
  const guitars = gear.filter(i => i.kind === 'guitar').length;
  const acoustics = gear.filter(i => i.kind === 'acoustic').length;
  const basses = gear.filter(i => i.kind === 'bass').length;
  const amps = gear.filter(i => i.kind === 'amp').length;
  const pedals = gear.filter(i => i.kind === 'pedal').length;
  const microphones = gear.filter(i => i.kind === 'microphone').length;
  const recording = gear.filter(i => i.kind === 'recording').length;
  const accessories = gear.filter(i => i.kind === 'accessory').length;

  const totalKnownModificationSpend = gear.reduce(
    (total, item) => total + getModificationSpend(item),
    0
  );

  stats.innerHTML = `
    <div class="stat">
      <div class="stat-label">Items</div>
      <div class="stat-value">${gear.length}</div>
    </div>

    <div class="stat">
      <div class="stat-label">Guitars</div>
      <div class="stat-value">${guitar}</div>
    </div>

    <div class="stat">
      <div class="stat-label">Acoustics</div>
      <div class="stat-value">${acoustics}</div>
    </div>

    <div class="stat">
      <div class="stat-label">Bass</div>
      <div class="stat-value">${bass}</div>
    </div>

    <div class="stat">
      <div class="stat-label">Amps</div>
      <div class="stat-value">${amp}</div>
    </div>

    <div class="stat">
      <div class="stat-label">Pedals</div>
      <div class="stat-value">${pedal}</div>
    </div>

    <div class="stat">
      <div class="stat-label">Microphones</div>
      <div class="stat-value">${microphone}</div>
    </div>

    <div class="stat">
      <div class="stat-label">Recording</div>
      <div class="stat-value">${recording}</div>
    </div>

    <div class="stat">
      <div class="stat-label">Accessories</div>
      <div class="stat-value">${accessory}</div>
    </div>

    <div class="stat">
      <div class="stat-label">Known modification spend</div>
      <div class="stat-value small">
        ${formatCurrency(totalKnownModificationSpend)}
      </div>
    </div>
  `;
}

function renderCollection(filter = 'all') {
  const visible = gear.filter(
    item => filter === 'all' || item.kind === filter
  );

  collectionCount.textContent =
  `${visible.length} item${visible.length === 1 ? '' : 's'}`;

  list.innerHTML = visible.map(item => {
    const details = [
      item.year,
      item.finish,
      item.origin
    ].filter(Boolean).join(' · ');

    const note = item.note ? ` · ${item.note}` : '';

    const clickable = item.history ? 'button' : 'div';

    const detailAttr = item.history
      ? `data-id="${escapeHtml(item.id)}"`
      : '';

    return `
      <${clickable}
        class="gear-row ${item.modified ? 'featured' : ''}"
        ${detailAttr}
      >
        <div class="gear-icon">
          ${escapeHtml(item.brand.slice(0, 1))}
        </div>

        <div>
          <div class="gear-name">
            ${escapeHtml(item.brand)} ${escapeHtml(item.model)}
          </div>

          <div class="gear-meta">
            ${escapeHtml(details + note)}
          </div>
        </div>

        <div class="gear-status">
          ${escapeHtml(item.status)}
          ${item.modified ? '<br><span>Modified</span>' : ''}
        </div>

        <div>
          ${item.history ? '→' : ''}
        </div>
      </${clickable}>
    `;
  }).join('');

  document.querySelectorAll('[data-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      showDetail(btn.dataset.id);
    });
  });
}

function rowsFromObject(obj = {}) {
  return Object.entries(obj).map(([key, value]) => `
    <div class="data-row">
      <dt>${escapeHtml(key)}</dt>
      <dd>${escapeHtml(value)}</dd>
    </div>
  `).join('');
}

function formatSerial(item) {
  if (item.serial) {
    return escapeHtml(item.serial);
  }

  if (item.serialRecorded) {
    return 'On file';
  }

  return '—';
}

function formatOriginalPrice(item) {
  if (!item.originalPrice) {
    return '—';
  }

  if (typeof item.originalPrice === 'object') {
    return formatCurrency(
      item.originalPrice.amount,
      item.originalPrice.currency || 'EUR',
      item.originalPrice.approximate
    );
  }

  return escapeHtml(item.originalPrice);
}

function renderHistoryEvent(event) {
  const costLine = event.cost != null
    ? `
      <div class="event-cost">
        ${formatCurrency(
          event.cost,
          event.currency || 'EUR',
          event.approximate
        )}
        ${event.personalSpend === false
          ? ' · not personal spend'
          : ''}
      </div>
    `
    : '';

  return `
    <article class="event">

      <div class="event-meta">
        ${escapeHtml(event.date)} · ${escapeHtml(event.type)}
      </div>

      <div class="event-title">
        ${escapeHtml(event.title)}
      </div>

      <div class="event-desc">
        ${escapeHtml(event.description)}
      </div>

      ${costLine}

    </article>
  `;
}

function showDetail(id) {
  const item = gear.find(i => i.id === id);

  if (!item) {
    return;
  }

  const acquisition = item.financials?.acquisition;

  const modificationSpend = getModificationSpend(item);

  const acquisitionValue = acquisition
    ? formatCurrency(
        acquisition.amount,
        acquisition.currency || 'EUR',
        acquisition.approximate
      )
    : formatOriginalPrice(item);

  const acquisitionNote = acquisition?.note
    ? `${acquisition.note}${
        acquisition.personalSpend === false
          ? ' · not personal spend'
          : ''
      }`
    : '';

  const personalAcquisitionSpend =
    acquisition && acquisition.personalSpend !== false
      ? Number(acquisition.amount || 0)
      : 0;

  detailView.innerHTML = `

    <button class="back" id="backButton">
      ← Back to collection
    </button>

    <div class="hero">

      <div class="photo-placeholder">
        <div>

          <div class="photo-mark">
            ${escapeHtml(item.brand.slice(0, 1))}
          </div>

          <div>
            Your guitar photo goes here
          </div>

        </div>
      </div>

      <div>

        <span class="badge">
          ${escapeHtml(item.status)}
        </span>

        <p
          class="eyebrow"
          style="margin-top:18px"
        >
          ${escapeHtml(item.brand)}
          ${item.year
            ? ` · ${escapeHtml(item.year)}`
            : ''}
        </p>

        <h2 class="detail-title">
          ${escapeHtml(item.model)}
        </h2>

        <p class="detail-subtitle">
          ${
            [
              item.finish,
              item.origin
                ? `Made in ${item.origin}`
                : ''
            ]
              .filter(Boolean)
              .map(escapeHtml)
              .join(' · ')
          }
        </p>

        <dl class="meta-grid">

          <div>
            <dt>Serial</dt>
            <dd>${formatSerial(item)}</dd>
          </div>

          <div>
            <dt>Acquired</dt>
            <dd>${escapeHtml(item.acquired || '—')}</dd>
          </div>

          <div>
            <dt>Acquisition</dt>
            <dd>
              ${escapeHtml(item.acquisitionType || '—')}
            </dd>
          </div>

          <div>
            <dt>Original price</dt>
            <dd>${formatOriginalPrice(item)}</dd>
          </div>

        </dl>

      </div>
    </div>

    <div class="two-col">

      <section>

        <h3>Current setup</h3>

        <dl class="data-list">
          ${rowsFromObject(item.currentSpec)}
        </dl>

      </section>

      <section>

        <h3>Original → current</h3>

        <dl class="data-list">

          ${
            Object.keys(item.originalSpec || {})
              .map(key => `
                <div class="data-row">

                  <dt>
                    ${escapeHtml(key)}
                  </dt>

                  <dd>
                    ${escapeHtml(item.originalSpec[key])}
                    →
                    ${escapeHtml(
                      item.currentSpec?.[key] ||
                      'Current configuration'
                    )}
                  </dd>

                </div>
              `)
              .join('')
          }

        </dl>

      </section>

    </div>

    <section class="timeline-wrap">

      <div class="section-heading">

        <h3>
          History
        </h3>

        <span>
          Acquisition · modifications · maintenance
        </span>

      </div>

      <div class="timeline">

        ${
          (item.history || [])
            .map(renderHistoryEvent)
            .join('')
        }

      </div>

    </section>

    <section class="financials">

      <h3>
        Financial record
      </h3>

      <div class="stats">

        <div class="stat">

          <div class="stat-label">
            Acquisition value
          </div>

          <div class="stat-value">
            ${acquisitionValue}
          </div>

          ${
            acquisitionNote
              ? `
                <div class="gear-meta">
                  ${escapeHtml(acquisitionNote)}
                </div>
              `
              : ''
          }

        </div>

        <div class="stat">

          <div class="stat-label">
            Known modification spend
          </div>

          <div class="stat-value">
            ${formatCurrency(modificationSpend)}
          </div>

        </div>

        <div class="stat">

          <div class="stat-label">
            Personal acquisition spend
          </div>

          <div class="stat-value">
            ${formatCurrency(personalAcquisitionSpend)}
          </div>

        </div>

        <div class="stat">

          <div class="stat-label">
            Known personal spend
          </div>

          <div class="stat-value">
            ${
              formatCurrency(
                modificationSpend +
                personalAcquisitionSpend
              )
            }
          </div>

        </div>

      </div>

    </section>
  `;

  collectionView.classList.add('hidden');

  detailView.classList.remove('hidden');

  document
    .getElementById('backButton')
    .addEventListener('click', () => {

      detailView.classList.add('hidden');

      collectionView.classList.remove('hidden');

    });

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

filterButtons.forEach(button => {

  button.addEventListener('click', () => {

    filterButtons.forEach(b =>
      b.classList.remove('active')
    );

    button.classList.add('active');

    renderCollection(
      button.dataset.filter
    );

  });

});

renderStats();

renderCollection();