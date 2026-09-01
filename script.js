const list = document.getElementById('gearList');
const stats = document.getElementById('stats');
const collectionCount = document.getElementById('collectionCount');
const collectionView = document.getElementById('collectionView');
const detailView = document.getElementById('detailView');
const filterButtons = [...document.querySelectorAll('.filter')];

const collectionStatus =
  document.getElementById('collectionStatus');

const collectionSearch =
  document.getElementById('collectionSearch');

const collectionSort =
  document.getElementById('collectionSort');

let currentCategory = 'all';
let currentStatus = 'all';
let currentSearch = '';
let currentSort = 'acquired-asc';

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
  const owned = gear.filter(
    item => item.status === 'Owned'
  ).length;

  const past = gear.length - owned;

  const datedItems = gear
    .filter(item => item.acquiredSort)
    .map(item => String(item.acquiredSort).slice(0, 4));

  const firstYear = datedItems.length
    ? Math.min(...datedItems)
    : null;

  const lastYear = datedItems.length
    ? Math.max(...datedItems)
    : null;

  stats.innerHTML = `
    <span>
      <strong>${gear.length}</strong> items archived
    </span>

    <span class="summary-divider">·</span>

    <span>
      <strong>${owned}</strong> owned
    </span>

    <span class="summary-divider">·</span>

    <span>
      <strong>${past}</strong> past
    </span>

    ${
      firstYear && lastYear
        ? `
          <span class="summary-divider">·</span>

          <span>
            ${firstYear}—${lastYear}
          </span>
        `
        : ''
    }
  `;
}

 function matchesStatus(item) {
  if (currentStatus === 'owned') {
    return item.status === 'Owned';
  }

  if (currentStatus === 'past') {
    return item.status !== 'Owned';
  }

  return true;
}

function matchesSearch(item) {
  if (!currentSearch) {
    return true;
  }

  const searchable = [
    item.brand,
    item.model,
    item.year,
    item.finish,
    item.origin,
    item.status,
    item.subtype
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return searchable.includes(currentSearch);
}

function sortGear(items) {
  return [...items].sort((a, b) => {
    if (currentSort === 'brand-asc') {
      const aName = `${a.brand || ''} ${a.model || ''}`;
      const bName = `${b.brand || ''} ${b.model || ''}`;

      return aName.localeCompare(bName);
    }

    const aDate = a.acquiredSort || '';
    const bDate = b.acquiredSort || '';

    if (!aDate && !bDate) {
      return 0;
    }

    if (!aDate) {
      return 1;
    }

    if (!bDate) {
      return -1;
    }

    if (currentSort === 'acquired-desc') {
      return bDate.localeCompare(aDate);
    }

    return aDate.localeCompare(bDate);
  });
}

function getAcquisitionYear(item) {
  if (!item.acquiredSort) {
    return 'Date unknown';
  }

  return String(item.acquiredSort).slice(0, 4);
}

function getKindLabel(item) {
  const labels = {
    guitar: 'Guitar',
    acoustic: 'Acoustic',
    bass: 'Bass',
    amp: 'Amplifier',
    pedal: 'Pedal',
    microphone: 'Microphone',
    recording: 'Recording',
    accessory: 'Accessory'
  };

  return labels[item.kind] || item.kind || 'Gear';
} 

function renderCollection() {
  let visible = gear.filter(item => {
    const categoryMatch =
      currentCategory === 'all' ||
      item.kind === currentCategory;

    return (
      categoryMatch &&
      matchesStatus(item) &&
      matchesSearch(item)
    );
  });

  visible = sortGear(visible);

  collectionCount.textContent =
    `${visible.length} item${visible.length === 1 ? '' : 's'}`;

  if (!visible.length) {
    list.innerHTML = `
      <div class="empty-state">
        No gear matches these filters.
      </div>
    `;

    return;
  }

  const groupByYear =
    currentSort === 'acquired-asc' ||
    currentSort === 'acquired-desc';

  let lastYear = null;

  list.innerHTML = visible.map(item => {
    const acquisitionYear =
      getAcquisitionYear(item);

    let yearHeading = '';

    if (
      groupByYear &&
      acquisitionYear !== lastYear
    ) {
      yearHeading = `
        <div class="year-divider">
          <span>
            ${escapeHtml(acquisitionYear)}
          </span>
        </div>
      `;

      lastYear = acquisitionYear;
    }

    const details = [
      getKindLabel(item),

      item.year
        ? `${item.yearApproximate ? '~' : ''}${item.year}`
        : '',

      item.finish
    ]
      .filter(Boolean)
      .join(' · ');

    return `
      ${yearHeading}

      <button
        class="gear-row"
        data-id="${escapeHtml(item.id)}"
        type="button"
      >
        <div class="gear-main">
          <div class="gear-name">
            ${escapeHtml(item.brand)}
            ${escapeHtml(item.model)}
          </div>

          <div class="gear-meta">
            ${escapeHtml(details)}
          </div>
        </div>

        <div class="gear-status">
          <span class="status-text">
            ${escapeHtml(item.status)}
          </span>

          ${
            item.modified
              ? `
                <span class="modified-label">
                  Modified
                </span>
              `
              : ''
          }
        </div>

        <div
          class="gear-arrow"
          aria-hidden="true"
        >
          →
        </div>
      </button>
    `;
  }).join('');

  document
    .querySelectorAll('.gear-row[data-id]')
    .forEach(button => {
      button.addEventListener('click', () => {
        showDetail(button.dataset.id);
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

    <section class="financial-record">
  <div class="section-heading">
    <h3>Financial record</h3>
  </div>

  <dl class="financial-list">
    <div class="financial-row">
      <dt>Acquisition value</dt>
      <dd>${acquisitionValue}</dd>
    </div>

    <div class="financial-row">
      <dt>Personal acquisition spend</dt>
      <dd>
        ${formatCurrency(personalAcquisitionSpend)}
      </dd>
    </div>

    ${
      additionalSpend
        ? `
          <div class="financial-row">
            <dt>Additional spend</dt>
            <dd>
              ${formatCurrency(additionalSpend)}
            </dd>
          </div>
        `
        : ''
    }

    ${
      recoveries
        ? `
          <div class="financial-row">
            <dt>Recoveries</dt>
            <dd>
              −${formatCurrency(recoveries)}
            </dd>
          </div>
        `
        : ''
    }

    <div class="financial-row financial-total">
      <dt>Known net cost</dt>
      <dd>
        ${formatCurrency(knownNetCost)}
      </dd>
    </div>
  </dl>
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

    currentCategory = button.dataset.filter;

    detailView.classList.add('hidden');
    collectionView.classList.remove('hidden');

    renderCollection();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

collectionStatus.addEventListener(
  'change',
  event => {
    currentStatus = event.target.value;
    renderCollection();
  }
);

collectionSearch.addEventListener(
  'input',
  event => {
    currentSearch = event.target.value
      .trim()
      .toLowerCase();

    renderCollection();
  }
);

collectionSort.addEventListener(
  'change',
  event => {
    currentSort = event.target.value;
    renderCollection();
  }
);

renderStats();
renderCollection();