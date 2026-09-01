# Gear Archive

A personal archive for documenting my music gear collection, including current and previously owned equipment.

The project tracks acquisition details, specifications, modifications, maintenance history, associated costs, and sales while providing a simple visual record of the collection.

**Live site:** https://poolpooer.github.io/gear-archive/

## Current Status

The project is in active development.

The core archive structure is complete and deployed through GitHub Pages. The collection currently contains 53 records spanning guitars, basses, amplifiers, pedals, acoustics, microphones, recording equipment, and accessories.

Historical acquisition, modification, maintenance, sale, trade, and financial data is being progressively reconstructed and added where records are available.

The current focus is validating the collection data and refining the archive interface before adding original photography.

## What is tracked

Each gear record can include:

- Manufacturer and model
- Year
- Finish
- Country of manufacture
- Ownership status
- Acquisition date and cost
- Original specifications
- Current specifications
- Modifications and upgrades
- Maintenance history
- Modification and accessory expenditure
- Import/customs costs
- Sale information
- Lifetime personal expenditure

Financial records are normalised to EUR for consistent collection-wide tracking.

## Privacy

This is a public repository.

Sensitive inventory information is intentionally excluded from the public dataset. Serial numbers may be marked as **On file**, but the actual serial numbers are not stored in the repository.

Private records such as serial numbers, receipts, addresses, and seller information should never be committed.

## Project Structure

```text
gear-archive/
├── index.html
├── styles.css
├── script.js
├── data.js
├── README.md
└── .gitignore
```

The project currently uses plain HTML, CSS, and JavaScript with no external framework or build process.

Collection data is stored in `data.js`.

## Run Locally

The site can be opened directly using `index.html`.

Alternatively, run a local web server from the repository:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Adding Gear

Gear records are currently stored as objects in the `gear` array inside `data.js`.

Records can contain basic collection information as well as detailed specifications, financial records, and chronological history entries.

History entries use a normalized set of event types including:

- Acquisition
- Modification
- Maintenance
- Repair
- Accessory
- Provenance
- Manufacture
- Build
- Sale
- Trade
- Disposal

Costs are stored as numeric EUR values so that totals can be calculated automatically by the site.

## GitHub Pages

The site is automatically published from the `main` branch using GitHub Pages.

Changes pushed to `main` are deployed to:

https://poolpooer.github.io/gear-archive/

## Planned Work

### Collection Data

- Complete records for the remaining guitars and basses.
- Add maintenance history as work is carried out.
- Expand records for previously owned and sold equipment.

### Photography & Design

- Add original photographs for each instrument.
- Replace placeholder artwork with collection photography.
- Refine collection cards and individual gear pages.
- Improve responsive/mobile presentation.


### Financial Tracking

- Separate modification, maintenance, accessory, import, and acquisition expenditure.
- Track sale proceeds and net lifetime ownership cost.
- Add collection-wide expenditure statistics.
- Add current versus sold collection summaries.

### Future Architecture

As the collection grows, move individual gear records out of the central `data.js` file into a more maintainable structured data format.