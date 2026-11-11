# Gear Archive

A personal historical archive of musical instruments and equipment, documenting both the gear I own today and the equipment I've owned, modified, traded, or sold over the years.

Rather than a marketplace or conventional inventory system, Gear Archive is a chronological, photographic record of a collection: what each item was, how it changed, and where it went.

**[View the live archive](https://poolpooer.github.io/gear-archive/)**

## Current Status

The archive is functional and publicly available through GitHub Pages. It currently contains **56 records across nine categories**:

- Guitars
- Acoustic guitars
- Basses
- Amplifiers
- Pedals
- Microphones
- Recording equipment
- Keyboards & MIDI
- Accessories

The core interface and record structure are established. Current work focuses on completing historical details, checking consistency across records, and filling gaps in photography and provenance.

Some acquisition dates, costs, and historical details are approximate or unknown. These are recorded as such rather than presented as verified facts.

## Archive Features

### Explore the collection

- Browse equipment by category
- Search by manufacturer, model, and other recorded attributes
- Filter between currently owned and previously owned equipment
- Sort by acquisition date (newest or oldest first) or manufacturer
- Switch between chronological list and photographic grid views
- Open individual records with dedicated details and history
- Navigate directly to records using shareable URL fragments

The archive summary shows the number of items, owned and past equipment, and the acquisition-year range represented by dated records.

### Equipment records

Depending on available information, each record can document:

- Manufacturer, model, production year, finish, and country of manufacture
- Acquisition date, source, and original purchase price
- Ownership status, including owned, sold, traded, or disposed equipment
- Original specifications and subsequent configuration changes
- Modifications, upgrades, maintenance, and repairs
- Dated historical events and provenance notes
- Photographs of the instrument or equipment over time, including as-acquired and modified configurations
- Sale or trade information and associated costs

Records are intentionally uneven in detail where the surviving evidence differs. An unknown value is preferable to an invented one.

### Financial history

The archive can record acquisition expenditure, modifications, maintenance, accessories, import fees, recoveries, and disposal proceeds. The site calculates **known personal expenditure and net ownership cost** from the available figures.

Financial amounts are recorded in EUR in the current dataset. Missing amounts are not estimates of zero expenditure, and approximate historical figures are marked accordingly. These figures are a personal historical record, not a current market valuation.

## Design Approach

The visual direction is inspired by personal archives, museum catalogues, and older musical-instrument catalogues, with restrained contemporary typography and a focus on legibility.

The site is deliberately lightweight: **plain HTML, CSS, and JavaScript**, without a frontend framework or build step. The existing collection is published as a read-only website rather than a multi-user inventory application.

## Project Structure

```text
gear-archive/
├── index.html          # Page structure and collection controls
├── styles.css          # Layout, typography, responsive styling
├── script.js           # Filtering, rendering, navigation, calculations
├── data.js             # Public equipment records
├── assets/
│   └── images/         # Catalogue and historical photographs
├── README.md
└── .gitignore
```

The collection is stored in the `gear` array in `data.js`. Each entry has a unique ID and a singular `kind` used for category filtering. The human-readable `acquired` field is paired with `acquiredSort` for chronological ordering.

## Run Locally

Clone the repository and start a local web server:

```bash
git clone https://github.com/PoolPooer/gear-archive.git
cd gear-archive
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000).

No dependency installation or build process is required.

## Adding or Updating Gear

Edit the `gear` array in `data.js` and follow the structure of an existing record. Include only fields supported by available evidence.

Historical events use types such as Acquisition, Modification, Maintenance, Repair, Accessory, Provenance, Manufacture, Build, Sale, Trade, and Disposal.

Where applicable, financial details live under `financials`, with separate acquisition, additional-spend, recovery, and disposal records. Catalogue and gallery images are referenced from `assets/images/`; records without photographs can use the existing placeholder presentation.

After editing, check JavaScript syntax and inspect the diff:

```bash
node --check data.js
node --check script.js
git diff --check
```

Then verify category filters, chronology, ownership status, detail pages, and images in a browser.

## Privacy and Provenance

**This is a public repository and a public archive.**

Serial numbers, receipts, personal addresses, seller contact details, and other sensitive inventory information must **not** be committed to the repository. Records may indicate that documentation is held privately without publishing it.

The archive distinguishes confirmed details from approximate dates, historical recollections, and information that remains unknown.

## Publishing

The site is published through GitHub Pages from the `main` branch:

**https://poolpooer.github.io/gear-archive/**

Changes merged into `main` are reflected on the public site after GitHub Pages deploys them.

## Remaining Work

- Complete and refine the Accessories section
- Run a collection-wide data consistency and provenance audit
- Add missing photographs, including catalogue images for the Alesis QX49 and Akai MPK Mini Play MK3
- Continue documenting maintenance and changes as they occur
- Perform a final check of mobile layouts, filters, chronology, galleries, and detail pages

Longer-term improvements to data authoring or storage can be evaluated if the archive's maintenance needs change. They are not prerequisites for the current static site.

## Scope

Gear Archive is a personal project and historical record, not a storefront, gear valuation service, or public inventory-management product. A potential multi-user version would be a separate product effort rather than a change to the purpose of this archive.
