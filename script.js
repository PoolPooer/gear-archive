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
let currentSort = 'acquired-desc';


/* ----------------------------------------
   Formatting helpers
---------------------------------------- */

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, ch => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#039;',
    '"': '&quot;'
  }[ch]));
}

function formatCurrency(
  amount,
  currency = 'EUR',
  approximate = false
) {
  if (
    amount === null ||
    amount === undefined ||
    amount === ''
  ) {
    return '—';
  }

  const formatted = new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Number(amount));

  return approximate
    ? `~${formatted}`
    : formatted;
}

function numberOrZero(value) {
  if (
    value === null ||
    value === undefined ||
    value === ''
  ) {
    return 0;
  }

  const number = Number(value);

  return Number.isFinite(number)
    ? number
    : 0;
}


/* ----------------------------------------
   Financial calculations
---------------------------------------- */

function getAdditionalSpend(item) {
  const spend =
    item.financials?.additionalSpend || {};

  return Object.values(spend).reduce(
    (total, value) =>
      total + numberOrZero(value),
    0
  );
}

function getAcquisitionOffsets(item) {
  return (
    item.financials?.acquisition?.offsets || []
  ).reduce(
    (total, offset) =>
      total + numberOrZero(offset.amount),
    0
  );
}

function getPersonalAcquisitionSpend(item) {
  const acquisition =
    item.financials?.acquisition;

  if (
    !acquisition ||
    acquisition.personalSpend === false
  ) {
    return 0;
  }

  return Math.max(
    0,
    numberOrZero(acquisition.amount) -
      getAcquisitionOffsets(item)
  );
}

function getRecoveries(item) {
  return (
    item.financials?.recoveries || []
  ).reduce(
    (total, recovery) =>
      total + numberOrZero(recovery.amount),
    0
  );
}

function getDisposalRecovery(item) {
  const disposal =
    item.financials?.disposal;

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


/* ----------------------------------------
   Archive summary
---------------------------------------- */

function renderStats() {
  const owned = gear.filter(
    item => item.status === 'Owned'
  ).length;

  const past = gear.length - owned;

  const datedItems = gear
    .filter(item => item.acquiredSort)
    .map(item =>
      String(item.acquiredSort).slice(0, 4)
    );

  const firstYear = datedItems.length
    ? Math.min(...datedItems)
    : null;

  const lastYear = datedItems.length
    ? Math.max(...datedItems)
    : null;

  stats.innerHTML = `
    <span>
      <strong>${gear.length}</strong>
      items archived
    </span>

    <span class="summary-divider">·</span>

    <span>
      <strong>${owned}</strong>
      owned
    </span>

    <span class="summary-divider">·</span>

    <span>
      <strong>${past}</strong>
      past
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


/* ----------------------------------------
   Filtering / searching / sorting
---------------------------------------- */

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
      const aName =
        `${a.brand || ''} ${a.model || ''}`;

      const bName =
        `${b.brand || ''} ${b.model || ''}`;

      return aName.localeCompare(bName);
    }

    const aDate =
      a.acquiredSort || '';

    const bDate =
      b.acquiredSort || '';

    if (!aDate && !bDate) {
      return 0;
    }

    /*
     * Items without a known acquisition
     * date always remain at the end.
     */
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

  return String(
    item.acquiredSort
  ).slice(0, 4);
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

  return (
    labels[item.kind] ||
    item.kind ||
    'Gear'
  );
}


/* ----------------------------------------
   Collection
---------------------------------------- */

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
    `${visible.length} item${
      visible.length === 1 ? '' : 's'
    }`;

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

  list.innerHTML = visible
    .map(item => {
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
          <div class="gear-brand">
            ${escapeHtml(item.brand)}
          </div>

          <div class="gear-name">
            ${escapeHtml(item.model)}
          </div>

          <div class="gear-meta">
            ${escapeHtml(details)}
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
    })
    .join('');

  document
    .querySelectorAll('.gear-row[data-id]')
    .forEach(button => {
      button.addEventListener(
        'click',
        () => {
          showDetail(
            button.dataset.id
          );
        }
      );
    });
}


/* ----------------------------------------
   Detail helpers
---------------------------------------- */

function rowsFromObject(obj = {}) {
  const entries =
    Object.entries(obj || {});

  if (!entries.length) {
    return `
      <div class="data-row">
        <dt>Details</dt>
        <dd>—</dd>
      </div>
    `;
  }

  return entries
    .map(([key, value]) => `
      <div class="data-row">
        <dt>${escapeHtml(key)}</dt>
        <dd>${escapeHtml(value)}</dd>
      </div>
    `)
    .join('');
}

function formatSerial(item) {
  /*
   * Public archive privacy rule:
   * serial values should not normally
   * be present in data.js.
   */
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

  if (
    typeof item.originalPrice === 'object'
  ) {
    return formatCurrency(
      item.originalPrice.amount,
      item.originalPrice.currency || 'EUR',
      item.originalPrice.approximate
    );
  }

  return escapeHtml(
    item.originalPrice
  );
}

function renderHistoryEvent(event) {
  const costLine =
    event.cost != null
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

  const categoryLine =
    event.category
      ? ` · ${escapeHtml(event.category)}`
      : '';

  return `
    <article class="event">
      <div class="event-meta">
        ${escapeHtml(
          event.date || 'Date unknown'
        )}
        ·
        ${escapeHtml(
          event.type || 'Event'
        )}
        ${categoryLine}
      </div>

      <div class="event-title">
        ${escapeHtml(
          event.title || ''
        )}
      </div>

      ${
        event.description
          ? `
            <div class="event-desc">
              ${escapeHtml(
                event.description
              )}
            </div>
          `
          : ''
      }

      ${costLine}
    </article>
  `;
}


/* ----------------------------------------
   Detail page
---------------------------------------- */

function showDetail(id) {
  const item = gear.find(
    i => i.id === id
  );

  if (!item) {
    return;
  }

  const acquisition =
    item.financials?.acquisition;

  const acquisitionValue =
    acquisition
      ? formatCurrency(
          acquisition.amount,
          acquisition.currency || 'EUR',
          acquisition.approximate
        )
      : formatOriginalPrice(item);

  const additionalSpend =
    getAdditionalSpend(item);

  const personalAcquisitionSpend =
    getPersonalAcquisitionSpend(item);

  const recoveries =
    getRecoveries(item) +
    getDisposalRecovery(item);

  const knownNetCost =
    getKnownNetCost(item);

  const hasCover =
    typeof item.images?.cover === 'string' &&
    item.images.cover.trim();

  const historyMarkup =
    (item.history || [])
      .map(renderHistoryEvent)
      .join('') ||
    `
      <p class="event-desc">
        No history recorded yet.
      </p>
    `;

  detailView.innerHTML = `
    <button
      class="back"
      id="backButton"
      type="button"
    >
      ← Back to collection
    </button>

    <div class="hero">
      <div class="detail-media">

        ${
          hasCover
            ? `
              <img
                class="detail-cover"
                src="${escapeHtml(item.images.cover)}"
                alt="${escapeHtml(
                  [
                    item.brand,
                    item.model,
                    item.finish
                  ]
                    .filter(Boolean)
                    .join(' · ')
                )}"
                decoding="async"
              />
            `
            : ''
        }

        <div
          class="photo-placeholder${
            hasCover ? ' hidden' : ''
          }"
        >
          <div>
            <div class="photo-mark">
              ${escapeHtml(
                item.brand?.slice(0, 1) || '?'
              )}
            </div>

            <div>
              Your gear photo goes here
            </div>
          </div>
        </div>

      </div>

      <div class="hero-info">
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
              ? ` · ${escapeHtml(
                  `${
                    item.yearApproximate
                      ? '~'
                      : ''
                  }${item.year}`
                )}`
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
            <dd>
              ${formatSerial(item)}
            </dd>
          </div>

          <div>
            <dt>Acquired</dt>
            <dd>
              ${escapeHtml(
                item.acquired || '—'
              )}
            </dd>
          </div>

          <div>
            <dt>Acquisition</dt>
            <dd>
              ${escapeHtml(
                item.acquisitionType || '—'
              )}
            </dd>
          </div>

          <div>
            <dt>Original price</dt>
            <dd>
              ${formatOriginalPrice(item)}
            </dd>
          </div>
        </dl>
      </div>
    </div>

    ${
      item.kind === 'guitar'
        ? `
          <div class="two-col">

            <section>
              <h3>
                As acquired
              </h3>

              <dl class="data-list">
                ${rowsFromObject(
                  item.originalSpec
                )}
              </dl>
            </section>

            <section>
              <h3>
                Current setup
              </h3>

              <dl class="data-list">
                ${rowsFromObject(
                  item.currentSpec
                )}
              </dl>
            </section>

          </div>
        `
        : ''
    }

    <section class="timeline-wrap">
      <div class="section-heading">
        <h3>
          History
        </h3>

        <span>
          Acquisition · provenance ·
          modifications · maintenance ·
          disposal
        </span>
      </div>

      <div class="timeline">
        ${historyMarkup}
      </div>
    </section>

    <section class="financial-record">
      <div class="section-heading">
        <h3>
          Financial record
        </h3>
      </div>

      <dl class="financial-list">

        <div class="financial-row">
          <dt>
            Acquisition value
          </dt>

          <dd>
            ${acquisitionValue}
          </dd>
        </div>

        <div class="financial-row">
          <dt>
            Personal acquisition spend
          </dt>

          <dd>
            ${formatCurrency(
              personalAcquisitionSpend
            )}
          </dd>
        </div>

        ${
          additionalSpend
            ? `
              <div class="financial-row">
                <dt>
                  Additional spend
                </dt>

                <dd>
                  ${formatCurrency(
                    additionalSpend
                  )}
                </dd>
              </div>
            `
            : ''
        }

        ${
          recoveries
            ? `
              <div class="financial-row">
                <dt>
                  Recoveries
                </dt>

                <dd>
                  −${formatCurrency(
                    recoveries
                  )}
                </dd>
              </div>
            `
            : ''
        }

        <div
          class="financial-row financial-total"
        >
          <dt>
            Known net cost
          </dt>

          <dd>
            ${formatCurrency(
              knownNetCost
            )}
          </dd>
        </div>

      </dl>
    </section>
  `;


  /* Broken or missing cover image fallback */

  const cover =
    detailView.querySelector(
      '.detail-cover'
    );

  if (cover) {
    const showPlaceholder = () => {
      cover.classList.add('hidden');

      detailView
        .querySelector(
          '.photo-placeholder'
        )
        ?.classList.remove('hidden');
    };

    cover.addEventListener(
      'error',
      showPlaceholder,
      { once: true }
    );

    if (
      cover.complete &&
      !cover.naturalWidth
    ) {
      showPlaceholder();
    }
  }


  /* Switch from collection to record */

  collectionView.classList.add(
    'hidden'
  );

  detailView.classList.remove(
    'hidden'
  );

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  const backButton =
    document.getElementById(
      'backButton'
    );

  backButton.focus({
    preventScroll: true
  });

  backButton.addEventListener(
    'click',
    () => {
      detailView.classList.add(
        'hidden'
      );

      collectionView.classList.remove(
        'hidden'
      );

      const originatingRow = [
        ...document.querySelectorAll(
          '.gear-row'
        )
      ].find(
        row =>
          row.dataset.id === id
      );

      originatingRow?.focus({
        preventScroll: true
      });
    }
  );
}


/* ----------------------------------------
   Category navigation
---------------------------------------- */

filterButtons.forEach(button => {
  button.addEventListener(
    'click',
    () => {
      filterButtons.forEach(b => {
        b.classList.remove(
          'active'
        );

        b.setAttribute(
          'aria-pressed',
          'false'
        );
      });

      button.classList.add(
        'active'
      );

      button.setAttribute(
        'aria-pressed',
        'true'
      );

      currentCategory =
        button.dataset.filter;

      detailView.classList.add(
        'hidden'
      );

      collectionView.classList.remove(
        'hidden'
      );

      renderCollection();

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  );
});


/* ----------------------------------------
   Collection controls
---------------------------------------- */

collectionStatus.addEventListener(
  'change',
  event => {
    currentStatus =
      event.target.value;

    renderCollection();
  }
);

collectionSearch.addEventListener(
  'input',
  event => {
    currentSearch =
      event.target.value
        .trim()
        .toLowerCase();

    renderCollection();
  }
);

collectionSort.addEventListener(
  'change',
  event => {
    currentSort =
      event.target.value;

    renderCollection();
  }
);


/* ----------------------------------------
   Initial render
---------------------------------------- */

renderStats();
renderCollection();


/* ----------------------------------------
   Presentation-only select enhancement

   Native select values and change
   handlers above remain authoritative.
---------------------------------------- */

document
  .querySelectorAll(
    '.collection-controls select'
  )
  .forEach(select => {

    const wrapper =
      document.createElement('div');

    wrapper.className =
      'archive-select';


    const trigger =
      document.createElement('button');

    trigger.type = 'button';
    trigger.className =
      'select-trigger';

    trigger.id =
      `${select.id}-trigger`;

    trigger.setAttribute(
      'aria-haspopup',
      'listbox'
    );

    trigger.setAttribute(
      'aria-expanded',
      'false'
    );


    const label =
      document.querySelector(
        `label[for="${select.id}"]`
      );


    const menu =
      document.createElement('div');

    menu.className =
      'select-menu';

    menu.id =
      `${select.id}-menu`;

    menu.setAttribute(
      'role',
      'listbox'
    );

    menu.tabIndex = -1;
    menu.hidden = true;

    trigger.setAttribute(
      'aria-controls',
      menu.id
    );


    const options =
      [...select.options];

    let activeIndex =
      select.selectedIndex;

    let typed = '';
    let typedAt = 0;


    if (label) {
      label.id =
        `${select.id}-label`;

      label.htmlFor =
        trigger.id;

      trigger.setAttribute(
        'aria-labelledby',
        `${label.id} ${trigger.id}`
      );

      menu.setAttribute(
        'aria-labelledby',
        label.id
      );
    }


    const rows =
      options.map(
        (option, index) => {
          const row =
            document.createElement(
              'div'
            );

          row.className =
            'select-option';

          row.id =
            `${select.id}-option-${index}`;

          row.setAttribute(
            'role',
            'option'
          );

          row.textContent =
            option.textContent.trim();

          row.addEventListener(
            'click',
            () => choose(index)
          );

          row.addEventListener(
            'pointermove',
            () => highlight(index)
          );

          menu.append(row);

          return row;
        }
      );


    function sync() {
      trigger.textContent =
        options[
          select.selectedIndex
        ].textContent.trim();

      rows.forEach(
        (row, index) => {
          row.setAttribute(
            'aria-selected',
            String(
              index ===
              select.selectedIndex
            )
          );
        }
      );
    }


    function highlight(index) {
      activeIndex = index;

      rows.forEach(
        (row, rowIndex) => {
          row.classList.toggle(
            'option-active',
            rowIndex === index
          );
        }
      );

      menu.setAttribute(
        'aria-activedescendant',
        rows[index].id
      );

      rows[index].scrollIntoView({
        block: 'nearest'
      });
    }


    function open() {
      menu.hidden = false;

      trigger.setAttribute(
        'aria-expanded',
        'true'
      );

      highlight(
        select.selectedIndex
      );

      menu.focus({
        preventScroll: true
      });
    }


    function close(
      restoreFocus = false
    ) {
      menu.hidden = true;

      trigger.setAttribute(
        'aria-expanded',
        'false'
      );

      if (restoreFocus) {
        trigger.focus({
          preventScroll: true
        });
      }
    }


    function choose(index) {
      select.selectedIndex =
        index;

      sync();

      select.dispatchEvent(
        new Event(
          'change',
          { bubbles: true }
        )
      );

      close(true);
    }


    trigger.addEventListener(
      'click',
      () => {
        menu.hidden
          ? open()
          : close(true);
      }
    );


    trigger.addEventListener(
      'keydown',
      event => {
        if (
          [
            'ArrowDown',
            'ArrowUp',
            'Home',
            'End'
          ].includes(event.key)
        ) {
          event.preventDefault();

          open();

          if (
            event.key === 'Home'
          ) {
            highlight(0);
          }

          if (
            event.key === 'End'
          ) {
            highlight(
              options.length - 1
            );
          }
        }
      }
    );


    menu.addEventListener(
      'keydown',
      event => {

        if (event.key === 'Tab') {
          close();

          trigger.focus({
            preventScroll: true
          });

          return;
        }

        if (
          event.key === 'Escape'
        ) {
          event.preventDefault();

          close(true);

          return;
        }

        if (
          ['Enter', ' ']
            .includes(event.key)
        ) {
          event.preventDefault();

          choose(activeIndex);

          return;
        }

        if (
          [
            'ArrowDown',
            'ArrowUp',
            'Home',
            'End'
          ].includes(event.key)
        ) {
          event.preventDefault();

          const next =
            event.key === 'Home'
              ? 0
              : event.key === 'End'
                ? options.length - 1
                : (
                    activeIndex +
                    (
                      event.key ===
                      'ArrowDown'
                        ? 1
                        : -1
                    ) +
                    options.length
                  ) %
                  options.length;

          highlight(next);
        }

        else if (
          event.key.length === 1 &&
          !event.ctrlKey &&
          !event.metaKey &&
          !event.altKey
        ) {
          event.preventDefault();

          typed =
            Date.now() - typedAt > 600
              ? event.key
              : typed + event.key;

          typedAt = Date.now();

          const index =
            options.findIndex(
              option =>
                option.textContent
                  .trim()
                  .toLowerCase()
                  .startsWith(
                    typed.toLowerCase()
                  )
            );

          if (index >= 0) {
            highlight(index);
          }
        }
      }
    );


    document.addEventListener(
      'pointerdown',
      event => {
        if (
          !wrapper.contains(
            event.target
          )
        ) {
          close();
        }
      }
    );


    wrapper.addEventListener(
      'focusout',
      event => {
        if (
          !wrapper.contains(
            event.relatedTarget
          )
        ) {
          close();
        }
      }
    );


    select.addEventListener(
      'change',
      sync
    );


    select.before(wrapper);

    wrapper.append(
      trigger,
      menu
    );

    select.hidden = true;

    sync();
  });