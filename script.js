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

function numberOrZero(value) {
  if (value === null || value === undefined || value === '') {
    return 0;
  }

  const number = Number(value);

  return Number.isFinite(number) ? number : 0;
}

function getAdditionalSpend(item) {
  const spend = item.financials?.additionalSpend || {};

  return Object.values(spend).reduce(
    (total, value) => total + numberOrZero(value),
    0
  );
}

function getModificationSpend(item) {
  return numberOrZero(
    item.financials?.additionalSpend?.modifications
  );
}

function getAcquisitionOffsets(item) {
  return (item.financials?.acquisition?.offsets || [])
    .reduce(
      (total, offset) =>
        total + numberOrZero(offset.amount),
      0
    );
}

function getPersonalAcquisitionSpend(item) {
  const acquisition = item.financials?.acquisition;

  if (!acquisition || acquisition.personalSpend === false) {
    return 0;
  }

  return Math.max(
    0,
    numberOrZero(acquisition.amount) -
    getAcquisitionOffsets(item)
  );
}

function getRecoveries(item) {
  return (item.financials?.recoveries || [])
    .reduce(
      (total, recovery) =>
        total + numberOrZero(recovery.amount),
      0
    );
}

function getDisposalRecovery(item) {
  const disposal = item.financials?.disposal;

  if (!disposal) {
    return 0;
  }

  return numberOrZero(disposal.amount);
}

function getKnownPersonalSpend(item) {
  return (
    getPersonalAcquisitionSpend(item) +
    getAdditionalSpend(item)
  );
}

function getKnownNetCost(item) {
  return (
    getKnownPersonalSpend(item) -
    getRecoveries(item) -
    getDisposalRecovery(item)
  );
}

function getSortValue(item) {
  if (!item.acquiredSort) {
    return '9999-99-99';
  }

  return item.acquiredSort;
}

function renderStats() {
  const counts = {
    guitar: gear.filter(i => i.kind === 'guitar').length,
    acoustic: gear.filter(i => i.kind === 'acoustic').length,
    bass: gear.filter(i => i.kind === 'bass').length,
    amp: gear.filter(i => i.kind === 'amp').length,
    pedal: gear.filter(i => i.kind === 'pedal').length,
    microphone: gear.filter(i => i.kind === 'microphone').length,
    recording: gear.filter(i => i.kind === 'recording').length,
    accessory: gear.filter(i => i.kind === 'accessory').length
  };

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
      <div class="stat-value">${counts.guitar}</div>
    </div>

    <div class="stat">
      <div class="stat-label">Acoustics</div>
      <div class="stat-value">${counts.acoustic}</div>
    </div>

    <div class="stat">
      <div class="stat-label">Bass</div>
      <div class="stat-value">${counts.bass}</div>
    </div>

    <div class="stat">
      <div class="stat-label">Amps</div>
      <div class="stat-value">${counts.amp}</div>
    </div>

    <div class="stat">
      <div class="stat-label">Pedals</div>
      <div class="stat-value">${counts.pedal}</div>
    </div>

    <div class="stat">
      <div class="stat-label">Microphones</div>
      <div class="stat-value">${counts.microphone}</div>
    </div>

    <div class="stat">
      <div class="stat-label">Recording</div>
      <div class="stat-value">${counts.recording}</div>
    </div>

    <div class="stat">
      <div class="stat-label">Accessories</div>
      <div class="stat-value">${counts.accessory}</div>
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
  const visible = gear
    .filter(item => filter === 'all' || item.kind === filter)
    .sort((a, b) =>
      getSortValue(a).localeCompare(getSortValue(b))
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
          ${escapeHtml(item.brand?.slice(0, 1) || '?')}
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
  const entries = Object.entries(obj || {});

  if (!entries.length) {
    return `
      <div class="data-row">
        <dt>Details</dt>
        <dd>—</dd>
      </div>
    `;
  }

  return entries.map(([key, value]) => `
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
        ${
          event.personalSpend === false
            ? ' · not personal spend'
            : ''
        }
      </div>
    `
    : '';

  const categoryLine = event.category
    ? ` · ${escapeHtml(event.category)}`
    : '';

  return `
    <article class="event">
      <div class="event-meta">
        ${escapeHtml(event.date || 'Date unknown')}
        ·
        ${escapeHtml(event.type || 'Event')}
        ${categoryLine}
      </div>

      <div class="event-title">
        ${escapeHtml(event.title || '')}
      </div>

      ${
        event.description
          ? `
            <div class="event-desc">
              ${escapeHtml(event.description)}
            </div>
          `
          : ''
      }

      ${costLine}
    </article>
  `;
}

function renderOriginalToCurrent(item) {
  const original = item.originalSpec || {};
  const current = item.currentSpec || {};

  const keys = [
    ...new Set([
      ...Object.keys(original),
      ...Object.keys(current)
    ])
  ];

  if (!keys.length) {
    return `
      <div class="data-row">
        <dt>Details</dt>
        <dd>—</dd>
      </div>
    `;
  }

  return keys.map(key => {
    const originalValue = original[key] ?? '—';
    const currentValue = current[key] ?? originalValue;

    return `
      <div class="data-row">
        <dt>${escapeHtml(key)}</dt>
        <dd>
          ${escapeHtml(originalValue)}
          →
          ${escapeHtml(currentValue)}
        </dd>
      </div>
    `;
  }).join('');
}

function showDetail(id) {
  const item = gear.find(i => i.id === id);

  if (!item) {
    return;
  }

  const acquisition = item.financials?.acquisition;

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

  const modificationSpend = getModificationSpend(item);
  const additionalSpend = getAdditionalSpend(item);
  const personalAcquisitionSpend = getPersonalAcquisitionSpend(item);
  const knownPersonalSpend = getKnownPersonalSpend(item);
  const recoveries =
    getRecoveries(item) + getDisposalRecovery(item);
  const knownNetCost = getKnownNetCost(item);

  detailView.innerHTML = `
    <button class="back" id="backButton">
      ← Back to collection
    </button>

    <div class="hero">
      <div class="photo-placeholder">
        <div>
          <div class="photo-mark">
            ${escapeHtml(item.brand?.slice(0, 1) || '?')}
          </div>

          <div>
            Your gear photo goes here
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
          ${
            item.year
              ? ` · ${escapeHtml(item.year)}`
              : ''
          }
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

  ${
    item.kind === 'guitar'
    ? `
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
            ${renderOriginalToCurrent(item)}
          </dl>
        </section>
      </div>
    `
    : ''  
    }

    <section class="timeline-wrap">
      <div class="section-heading">
        <h3>History</h3>

        <span>
        Acquisition · provenance · modifications · maintenance · disposal
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
      <h3>Financial record</h3>

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
            Personal acquisition spend
          </div>

          <div class="stat-value">
            ${formatCurrency(personalAcquisitionSpend)}
          </div>
        </div>

        <div class="stat">
          <div class="stat-label">
            Known additional spend
          </div>

          <div class="stat-value">
            ${formatCurrency(additionalSpend)}
          </div>

          ${
            modificationSpend
              ? `
                <div class="gear-meta">
                  ${formatCurrency(modificationSpend)} modifications
                </div>
              `
              : ''
          }
        </div>

        <div class="stat">
          <div class="stat-label">
            Known personal spend
          </div>

          <div class="stat-value">
            ${formatCurrency(knownPersonalSpend)}
          </div>
        </div>

        <div class="stat">
          <div class="stat-label">
            Known recoveries
          </div>

          <div class="stat-value">
            ${formatCurrency(recoveries)}
          </div>
        </div>

        <div class="stat">
          <div class="stat-label">
            Known net cost
          </div>

          <div class="stat-value">
            ${formatCurrency(knownNetCost)}
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

    // Return to the collection if we're currently
    // viewing an individual gear item.
    detailView.classList.add('hidden');
    collectionView.classList.remove('hidden');

    renderCollection(
      button.dataset.filter
    );

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

renderStats();
renderCollection();