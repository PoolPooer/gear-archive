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
    serial: 'MZ4103912',
    acquired: '~August 2004',
    acquisitionType: 'Birthday gift',
    originalPrice: '~€800',
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
      acquisition: '~€800',
      acquisitionNote: 'Gift · not personal spend',
      eurMods: '€373.69',
      usdMods: '$92.99',
      gbpMods: '£12.24'
    },
    history: [
      {
        date: '30 Jul 2026',
        type: 'Maintenance',
        title: 'String change',
        description: 'D’Addario NYXL 10–46 installed.'
      },
      {
        date: 'Oct 2023',
        type: 'Hardware',
        title: 'Black strap pins & string trees',
        description: 'Planet Waves Elliptical End Pins and Alnicov black string trees · £12.24.'
      },
      {
        date: '2023',
        type: 'Hardware · Permanent alteration',
        title: 'Fender locking tuners',
        description: 'Installed black locking tuners. Original tuner holes were drilled wider to accommodate them · $92.99.'
      },
      {
        date: '2023',
        type: 'Hardware',
        title: 'Wilkinson bridge + black control plate',
        description: 'Installed Wilkinson WVC-SB-BK tremolo and AP-8668-003 black control plate · €135.69.'
      },
      {
        date: '2022',
        type: 'Electronics · Permanent alteration',
        title: 'EMG JR “Daemonum” conversion',
        description: 'Replaced the original Fender humbuckers. Pickguard modified and body cavity enlarged with a Dremel for wiring · €238.00.'
      },
      {
        date: '~Aug 2004',
        type: 'Acquisition',
        title: 'Received as birthday gift',
        description: 'Purchased in the USA by my uncle and brought to Ireland. Approximate original price: €800.'
      }
    ]
  },
  { id:'mustang-2011', kind:'guitar', brand:'Fender', model:'Classic Series ’65 Mustang', year:2011, finish:'Daphne Blue', origin:'Japan', status:'Owned' },
  { id:'powercaster-2019', kind:'guitar', brand:'Fender', model:'Alternate Reality Powercaster', year:2019, finish:'Surf Green', origin:'Mexico', status:'Owned' },
  { id:'ibanez-540pii-1989', kind:'guitar', brand:'Ibanez', model:'540PII-SH', year:1989, finish:'Fire Alarm Red', origin:'', status:'Owned' },
  { id:'strat-o-sonic-2023', kind:'guitar', brand:'Squier', model:'Paranormal Strat-O-Sonic', year:2023, finish:'Crimson Red Transparent', origin:'China', status:'Owned' },
  { id:'melody-maker-1964', kind:'guitar', brand:'Gibson', model:'Melody Maker D', year:1964, finish:'Cherry Red', origin:'Kalamazoo, Michigan, USA', status:'Owned' },
  { id:'geddy-lee-jazz-bass-2007', kind:'bass', brand:'Fender', model:'Geddy Lee Jazz Bass', year:2007, finish:'Black', origin:'Japan', status:'Owned' },
  { id:'jackson-js32-rhoads', kind:'guitar', brand:'Jackson', model:'JS32 Rhoads AH', year:'', finish:'Ivory', origin:'China', status:'Owned', note:'Purchased 2024' },
  { id:'squier-se-2002', kind:'guitar', brand:'Squier', model:'Stratocaster SE', year:2002, finish:'Sunburst', origin:'', status:'Owned' },
  { id:'custom-jazzmaster-2022', kind:'guitar', brand:'Custom', model:'Jazzmaster', year:2022, finish:'Natural finish', origin:'', status:'Owned' }
];
