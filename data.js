// PUBLIC GEAR DATA
// Do not store serial numbers, receipts, addresses,
// seller contact details, or other private inventory information here.

const gear = [

  {

    id: 'fender-cyclone-hh-2004',

    kind: 'guitar',

    brand: 'Fender',

    model: 'Cyclone HH',

    year: 2004,

    finish: 'Black',

    origin: 'Mexico',

    status: 'Owned',

    modified: true,

    // Serial number is recorded privately but is not stored
    // in the public repository.
    serial: null,

    serialRecorded: true,

    acquired: '~August 2004',

    acquisitionType: 'Birthday gift',

    originalPrice: {
      amount: 800,
      currency: 'EUR',
      approximate: true
    },

    originalSpec: {

      Pickups: 'Fender Santa Ana / Atomic II humbuckers',

      Bridge: 'Stock',

      Tuners: 'Vintage-style closed-back tuners',

      Hardware: 'Stock / nickel'

    },

    currentSpec: {

      Pickups: 'EMG JR “Daemonum” Set F-Spaced ZEB',

      Bridge: 'Wilkinson WVC-SB-BK Black Steel Tremolo',

      Tuners: 'Fender Locking Stratocaster/Telecaster — Black',

      Strings: 'D’Addario NYXL 10–46'

    },

    financials: {

      acquisition: {
        amount: 800,
        currency: 'EUR',
        approximate: true,
        personalSpend: false,
        note: 'Birthday gift'
      },

      modificationSpend: {
        amount: 468.11,
        currency: 'EUR'
      }

    },

    history: [

      {

        date: '30 Jul 2026',

        type: 'Maintenance',

        title: 'String change',

        description: 'D’Addario NYXL 10–46 installed.',

        cost: null

      },

      {

        date: 'Oct 2023',

        type: 'Hardware',

        title: 'Black strap pins & string trees',

        description: 'Planet Waves Elliptical End Pins and Alnicov black string trees.',

        cost: 14.29,

        currency: 'EUR'

      },

      {

        date: '2023',

        type: 'Hardware · Permanent alteration',

        title: 'Fender locking tuners',

        description: 'Installed black locking tuners. Original tuner holes were drilled wider to accommodate them.',

        cost: 80.13,

        currency: 'EUR'

      },

      {

        date: '2023',

        type: 'Hardware',

        title: 'Wilkinson bridge + black control plate',

        description: 'Installed Wilkinson WVC-SB-BK tremolo and AP-8668-003 black control plate.',

        cost: 135.69,

        currency: 'EUR'

      },

      {

        date: '2022',

        type: 'Electronics · Permanent alteration',

        title: 'EMG JR “Daemonum” conversion',

        description: 'Replaced the original Fender humbuckers. Pickguard modified and body cavity enlarged with a Dremel for wiring.',

        cost: 238.00,

        currency: 'EUR'

      },

      {

        date: '~Aug 2004',

        type: 'Acquisition',

        title: 'Received as birthday gift',

        description: 'Purchased in the USA by my uncle and brought to Ireland.',

        cost: 800,

        currency: 'EUR',

        approximate: true,

        personalSpend: false

      }

    ]

  },

  {
    id: 'mustang-2011',
    kind: 'guitar',
    brand: 'Fender',
    model: 'Classic Series ’65 Mustang',
    year: 2011,
    finish: 'Daphne Blue',
    origin: 'Japan',
    status: 'Owned'
  },

  {
    id: 'powercaster-2019',
    kind: 'guitar',
    brand: 'Fender',
    model: 'Alternate Reality Powercaster',
    year: 2019,
    finish: 'Surf Green',
    origin: 'Mexico',
    status: 'Owned'
  },

  {
    id: 'ibanez-540pii-1989',
    kind: 'guitar',
    brand: 'Ibanez',
    model: '540PII-SH',
    year: 1989,
    finish: 'Fire Alarm Red',
    origin: '',
    status: 'Owned'
  },

  {
    id: 'strat-o-sonic-2023',
    kind: 'guitar',
    brand: 'Squier',
    model: 'Paranormal Strat-O-Sonic',
    year: 2023,
    finish: 'Crimson Red Transparent',
    origin: 'China',
    status: 'Owned'
  },

  {
    id: 'melody-maker-1964',
    kind: 'guitar',
    brand: 'Gibson',
    model: 'Melody Maker D',
    year: 1964,
    finish: 'Cherry Red',
    origin: 'Kalamazoo, Michigan, USA',
    status: 'Owned'
  },

  {
    id: 'geddy-lee-jazz-bass-2007',
    kind: 'bass',
    brand: 'Fender',
    model: 'Geddy Lee Jazz Bass',
    year: 2007,
    finish: 'Black',
    origin: 'Japan',
    status: 'Owned'
  },

  {
    id: 'jackson-js32-rhoads',
    kind: 'guitar',
    brand: 'Jackson',
    model: 'JS32 Rhoads AH',
    year: '',
    finish: 'Ivory',
    origin: 'China',
    status: 'Owned',
    note: 'Purchased 2024'
  },

  {
    id: 'squier-se-2002',
    kind: 'guitar',
    brand: 'Squier',
    model: 'Stratocaster SE',
    year: 2002,
    finish: 'Sunburst',
    origin: '',
    status: 'Owned'
  },

  {
    id: 'custom-jazzmaster-2022',
    kind: 'guitar',
    brand: 'Custom',
    model: 'Jazzmaster',
    year: 2022,
    finish: 'Natural finish',
    origin: '',
    status: 'Owned'
  }

];