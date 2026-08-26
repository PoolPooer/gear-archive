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
        amount: 479.79,
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
        date: '2018',

        type: 'Hardware',

        title: 'Fender F-stamped neck plate',

        description: 'Replaced the stock neck plate with a Fender F-stamped neck plate.',

        cost: 11.68,

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

  status: 'Sold',

  modified: true,

  serial: null,

  serialRecorded: true,

  acquired: '2013',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 752.10,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Pickups: 'Stock',
    Bridge: 'Stock',
    Tuners: 'Stock',
    NeckPlate: 'Stock'
  },

  currentSpec: {
    Pickups: 'Stock',
    Bridge: 'Stock',
    Tuners: 'Stock',
    NeckPlate: 'Fender F-stamped neck plate'
  },

  financials: {

    acquisition: {
      amount: 752.10,
      currency: 'EUR',
      approximate: false,
      personalSpend: true,
      note: 'Purchased from an American eBay seller'
    },

    importCosts: {
      amount: 300,
      currency: 'EUR',
      approximate: true
    },

    modificationSpend: {
      amount: 11.68,
      currency: 'EUR'
    },

    sale: {
      amount: 944.26,
      currency: 'EUR',
      date: 'October 2023',
      destination: 'Canada',
      shippingCost: null
    }

  },

  history: [

    {
      date: 'Oct 2023',
      type: 'Sale',
      title: 'Sold',
      description: 'Sold and shipped to the buyer in Canada.',
      cost: -944.26,
      currency: 'EUR'
    },

    {
      date: '2018',
      type: 'Hardware',
      title: 'Fender F-stamped neck plate',
      description: 'Replaced the stock neck plate with a Fender F-stamped neck plate.',
      cost: 11.68,
      currency: 'EUR'
    },

    {
      date: '2013',
      type: 'Import',
      title: 'Import and customs fees',
      description: 'Import and customs charges paid when the guitar arrived in Ireland.',
      cost: 300,
      currency: 'EUR',
      approximate: true
    },

    {
      date: '2013',
      type: 'Acquisition',
      title: 'Purchased from US eBay seller',
      description: 'Purchased from an American store on eBay.',
      cost: 752.10,
      currency: 'EUR',
      personalSpend: true
    }

  ]

  },

  {
  
  id: 'powercaster-2019',

  kind: 'guitar',

  brand: 'Fender',

  model: 'Alternate Reality Powercaster',

  year: 2019,

  finish: 'Surf Green',

  origin: 'Mexico',

  status: 'Owned',

  modified: true,

  serial: null,

  serialRecorded: true,

  acquired: '5 Jul 2019',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 800,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    BridgePickup: 'Fender Atomic Humbucker',
    NeckPickup: 'Fender MP-90 Single-Coil',
    Bridge: 'Stock',
    Tuners: 'Stock',
    Pickguard: 'Stock',
    Knobs: 'Stock',
    StrapPins: 'Stock'
  },

  currentSpec: {
    BridgePickup: 'DiMarzio DP100 BK/CR',
    NeckPickup: 'Lollar P-90 Soap Bar High Wind Bridge',
    Bridge: 'Stock',
    Tuners: 'Fender Strat/Tele Locking Tuner 6-pk — Chrome',
    Pickguard: 'WD Custom Powercaster #05W — Tortoise Shell/White',
    Knobs: 'D10 Knob Dwyer II by OAIModifications',
    StrapPins: 'Planet Waves PWEEP202 Elliptical End Pins — Chrome',
    Strap: 'Ernie Ball Rainbow Polypro Guitar Strap',
    Strings: 'Ernie Ball Ultra Slinky 10–48'
  },

  financials: {

    acquisition: {
      amount: 800,
      currency: 'EUR',
      approximate: false,
      personalSpend: true,
      note: 'Purchased in Waterford, Ireland'
    },

    modificationSpend: {
      amount: 376.35,
      currency: 'EUR'
    }

  },

  history: [

    {
      date: '29 May 2025',
      type: 'Electronics',
      title: 'Lollar P-90 installed',
      description: 'Replaced the stock Fender MP-90 neck pickup with a Lollar P-90 Soap Bar High Wind Bridge pickup.',
      cost: 98.58,
      currency: 'EUR'
    },

    {
      date: '27 Apr 2025',
      type: 'Electronics',
      title: 'DiMarzio bridge pickup installed',
      description: 'Replaced the stock Fender Atomic bridge humbucker with a DiMarzio DP100 BK/CR.',
      cost: 124.00,
      currency: 'EUR'
    },

    {
      date: 'Aug 2023',
      type: 'Hardware',
      title: 'Fender locking tuners installed',
      description: 'Replaced the stock tuners with Fender Strat/Tele Locking Tuner 6-pk — Chrome.',
      cost: 53.99,
      currency: 'EUR'
    },

    {
      date: '29 Jul 2023',
      type: 'Hardware',
      title: 'Replacement pickguard screws',
      description: 'Purchased replacement pickguard screws in both black and chrome.',
      cost: 9.21,
      currency: 'EUR'
    },

    {
      date: '24 Jul 2023',
      type: 'Hardware',
      title: 'Planet Waves elliptical end pins',
      description: 'Installed Planet Waves PWEEP202 Elliptical End Pins — Chrome.',
      cost: 8.98,
      currency: 'EUR'
    },

    {
      date: '6 May 2023',
      type: 'Cosmetic / Hardware',
      title: 'WD Custom tortoise shell pickguard',
      description: 'Installed WD Custom Pickguard for Fender 2019-Present Made in Mexico Alternate Reality Powercaster #05W — Tortoise Shell/White.',
      cost: 47.10,
      currency: 'EUR'
    },

    {
      date: '4 Nov 2020',
      type: 'Cosmetic / Hardware',
      title: 'Replacement control knobs',
      description: 'Installed D10 Knob Dwyer II replacement knobs by OAIModifications.',
      cost: 24.33,
      currency: 'EUR'
    },

    {
      date: '8 Jul 2019',
      type: 'Accessory',
      title: 'Ernie Ball Rainbow Polypro strap',
      description: 'Purchased Ernie Ball Rainbow Polypro Guitar Strap.',
      cost: 10.16,
      currency: 'EUR'
    },

    {
      date: '5 Jul 2019',
      type: 'Acquisition',
      title: 'Purchased in Waterford',
      description: 'Purchased in Waterford, Ireland.',
      cost: 800,
      currency: 'EUR',
      personalSpend: true
    }

  ]

  },

  {
  id: 'ibanez-540pii-1989',

  kind: 'guitar',

  brand: 'Ibanez',

  model: '540PII-SH',

  year: 1989,

  finish: 'Fire Alarm Red',

  origin: 'FujiGen Gakki, Nagano, Japan',

  status: 'Sold',

  modified: true,

  serial: null,

  serialRecorded: true,

  acquired: 'Apr 2021',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 350,
    currency: 'EUR',
    approximate: true
  },

  originalSpec: {
    BodyType: 'Solid body',
    BodyMaterial: 'Basswood',
    NeckJoint: 'Cutaway Heel',
    NeckType: 'Wizard',
    NeckMaterial: '1-piece maple',
    ScaleLength: '648 mm / 25½"',
    Fingerboard: 'Rosewood with binding',
    Inlays: 'Sharktooth',
    Frets: '24 jumbo',
    Nut: 'Top-Lok III',
    Bridge: 'Ibanez Edge tremolo — 10.8 mm string spacing',
    Pickguard: 'Pearl white',
    Hardware: 'Cosmo black',
    MachineHeads: 'Gotoh SG38',
    PickupConfiguration: 'HS',
    BridgePickup: 'IBZ/USA F3 humbucker',
    NeckPickup: 'IBZ/USA C2 single-coil',
    Controls: 'Single volume / 3-way toggle pickup selector',
    OutputJack: '¼" stereo barrel — side mounted',
    StringGauge: '.009 / .011 / .016 / .024 / .032 / .042'
  },

  currentSpec: {
    Body: 'Basswood',
    Neck: '1-piece maple Wizard',
    Fingerboard: '24-fret rosewood with binding',
    Bridge: 'Original Ibanez Edge tremolo',
    TremoloArm: 'Red Bishop MAGIK-ARM RBAH2B2',
    Nut: 'Ibanez Top Lok III BK 2TL1X43B replacement — original retained',
    MachineHeads: 'Original Gotoh SG38',
    BridgePickup: 'Original IBZ/USA F3 humbucker',
    NeckPickup: 'Original IBZ/USA C2 single-coil',
    PickupSelector: 'Replacement 3-way selector — identical functioning replacement',
    Strings: '9 gauge'
  },

  financials: {

    acquisition: {
      amount: 350,
      currency: 'EUR',
      approximate: true,
      personalSpend: true,
      note: 'Purchased from a local music shop in Waterford'
    },

    modificationSpend: {
      amount: 116.89,
      currency: 'EUR'
    },

    sale: {
      amount: 1330.00,
      currency: 'EUR',
      date: '15 Jul 2023',
      destination: 'New Zealand',
      shippingCost: null
    }

  },

  provenance: {
    manufactureDate: 'July 1989',
    factory: 'FujiGen Gakki',
    location: 'Nagano, Japan',
    previousOwners: 1,
    prePurchaseHistory: 'According to the sale listing, the guitar had been in the local Waterford music shop for roughly 20 years before purchase in April 2021.'
  },

  condition: {
    overall: 'Good vintage condition with cosmetic wear',
    frets: 'Minimal fret wear considering age',
    body: 'Cosmetic damage and marks present',
    neck: 'Small marks present',
    repairs: 'Replacement nut fitted; original retained',
    setup: 'Set up with 9 gauge strings, low action and intonation set during ownership'
  },

  history: [

    {
      date: '15 Jul 2023',
      type: 'Sale',
      title: 'Sold',
      description: 'Sold and shipped to the buyer in New Zealand.',
      cost: -1330.00,
      currency: 'EUR'
    },

    {
      date: '8 Oct 2021',
      type: 'Electronics / Hardware',
      title: '3-way pickup selector replaced',
      description: 'Replaced the 3-way pickup selector with an identical functioning replacement.',
      cost: 8.00,
      currency: 'EUR'
    },

    {
      date: '22 Sep 2021',
      type: 'Hardware',
      title: 'Ibanez Top Lok III replacement nut',
      description: 'Installed an Ibanez Top Lok III BK 2TL1X43B replacement locking nut. Original nut retained.',
      cost: 54.89,
      currency: 'EUR'
    },

    {
      date: '20 Sep 2021',
      type: 'Hardware',
      title: 'Red Bishop MAGIK-ARM purchased',
      description: 'Purchased a Red Bishop MAGIK-ARM for Ibanez EDGE / Lo-Pro EDGE (RBAH2B2) from Japan as a compatible replacement tremolo arm.',
      cost: 54.00,
      currency: 'EUR'
    },

    {
      date: 'Apr 2021',
      type: 'Acquisition',
      title: 'Purchased in Waterford',
      description: 'Purchased from a local music shop in Waterford, Ireland, where the guitar had reportedly been for roughly 20 years.',
      cost: 350.00,
      currency: 'EUR',
      approximate: true,
      personalSpend: true
    },

    {
      date: 'Jul 1989',
      type: 'Manufacture',
      title: 'Manufactured in Japan',
      description: 'Manufactured at FujiGen Gakki in Nagano, Japan.'
    }

  ]

},

 {
  id: 'strat-o-sonic-2023',

  kind: 'guitar',

  brand: 'Squier',

  model: 'Paranormal Strat-O-Sonic',

  year: 2023,

  finish: 'Crimson Red Transparent',

  origin: 'China',

  status: 'Sold',

  modified: true,

  serial: null,

  serialRecorded: true,

  acquired: '14 Oct 2023',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 400,
    currency: 'EUR',
    approximate: true
  },

  originalSpec: {
    Pickups: 'Stock Squier pickups',
    Switching: 'Stock switching configuration',
    Bridge: 'Stock wraparound bridge',
    Tuners: 'Stock',
    NeckFinish: 'Gloss',
    Hardware: 'Stock'
  },

  currentSpec: {
    Pickups: 'Fender Black Dove P-90 Soapbar pickups',
    Switching: 'Classic 3-way switching',
    Bridge: 'TonePros AVT2M Compensated Wraparound',
    Tuners: 'Musiclily Pro R15J-13 Vintage 6-inline Split Shaft Tuners — Off White Button',
    NeckFinish: 'Gloss removed',
    Hardware: 'Black screws and nuts'
  },

  financials: {

    acquisition: {
      amount: 400,
      currency: 'EUR',
      approximate: true,
      personalSpend: true,
      note: 'Approximate purchase price'
    },

    modificationSpend: {
      amount: 317.00,
      currency: 'EUR',
      approximate: true
    },

    sale: {
      amount: 439.00,
      currency: 'EUR',
      date: '6 Dec 2025',
      destination: 'USA',
      shippingCost: null
    }

  },

  history: [

    {
      date: '6 Dec 2025',
      type: 'Sale',
      title: 'Sold',
      description: 'Sold and shipped to the buyer in the United States.',
      cost: -439.00,
      currency: 'EUR'
    },

    {
      date: '14 May 2024',
      type: 'Hardware',
      title: 'Black hardware conversion',
      description: 'Replaced screws and nuts with black hardware.',
      cost: 5.00,
      currency: 'EUR'
    },

    {
      date: '13 May 2024',
      type: 'Hardware',
      title: 'TonePros bridge installed',
      description: 'Replaced the stock bridge with a TonePros AVT2M Compensated Wraparound bridge.',
      cost: 130.00,
      currency: 'EUR'
    },

    {
      date: '12 May 2024',
      type: 'Hardware',
      title: 'Musiclily vintage tuners installed',
      description: 'Replaced the stock machine heads with Musiclily Pro R15J-13 Vintage 6-inline Split Shaft Tuners with Off White Buttons.',
      cost: 22.00,
      currency: 'EUR'
    },

    {
      date: '~16 Oct 2023',
      type: 'Neck / Finish',
      title: 'Neck gloss removed',
      description: 'Removed the gloss finish from the neck for a smoother satin-style feel.',
      cost: null
    },

    {
      date: 'Oct 2023',
      type: 'Electronics',
      title: 'Fender Black Dove P-90 conversion',
      description: 'Replaced the stock pickups with Fender Black Dove P-90 soapbars, matching the pickup specification of the early-2000s Fender Stratosonic. Electronics were converted to classic 3-way switching.',
      cost: 160.00,
      currency: 'EUR',
      approximate: true
    },

    {
      date: '14 Oct 2023',
      type: 'Acquisition',
      title: 'Purchased',
      description: 'Purchased on 14 October 2023.',
      cost: 400.00,
      currency: 'EUR',
      approximate: true,
      personalSpend: true
    }

  ]

  },

  {
  id: 'melody-maker-1964',

  kind: 'guitar',

  brand: 'Gibson',

  model: 'Melody Maker D',

  year: 1964,

  finish: 'Cherry Red',

  origin: 'Kalamazoo, Michigan, USA',

  status: 'Owned',

  modified: true,

  serial: null,

  serialRecorded: true,

  acquired: '12 Sep 2025',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 1965.63,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Pickups: 'Original Gibson pickups',
    Electronics: 'Original electronics',
    Bridge: 'Vintage Leo Quan Badass bridge fitted at time of purchase; original Gibson wrap-around tailpiece included',
    Body: 'Mahogany slab body',
    Neck: 'Mahogany neck',
    Fingerboard: 'Brazilian rosewood — as described in original Reverb listing',
    NutWidth: '1-9/16 inch',
    Weight: '5 lb 9 oz',
    Tremolo: 'None; listing notes guitar never had one'
  },

  currentSpec: {
    Pickups: 'Original Gibson pickups',
    Electronics: 'Original electronics',
    Bridge: 'Vintage Leo Quan Badass bridge',
    Strings: 'D’Addario NYXL 10–46',
    VolumeToneKnobs: 'Replacement knobs',
    OriginalTailpiece: 'Original Gibson wrap-around tailpiece retained'
  },

  financials: {

    acquisition: {
      amount: 1965.63,
      currency: 'EUR',
      approximate: false,
      personalSpend: true,
      note: 'Purchased via Reverb · final price including tax'
    },

    modificationSpend: {
      amount: 0,
      currency: 'EUR',
      note: 'Replacement knob cost not yet recorded'
    }

  },

  listingDetails: {

    pickupReadings: {
      Bridge: '7.42',
      Middle: '3.61',
      Neck: '7.04'
    },

    conditionAtPurchase: [
      'No breaks, cracks or repairs reported in listing',
      'Minor fret wear',
      'A few dings on the back of the neck and body',
      'Light buckle indentations on the back',
      'Small melt/stand mark noted by seller',
      'Nitro finish described as glossy and clear with no checking',
      'Wear visible around pickup covers'
    ],

    provenance: 'Seller described the buyer as becoming the third owner.',

    case: '1970s Gretsch Committee rectangular hard shell case with keys',

    sellerNotes: 'Original listing described the guitar as lightweight, strong-output, and in particularly good condition for a 1964 Melody Maker.'

  },

  history: [

    {
      date: '12 Sep 2025',
      type: 'Acquisition',
      title: 'Purchased via Reverb',
      description: 'Purchased as a 1964 Gibson Melody Maker with original electronics, vintage Leo Quan Badass bridge fitted, original Gibson wrap-around tailpiece included, and a 1970s Gretsch Committee hard shell case.',
      cost: 1965.63,
      currency: 'EUR',
      personalSpend: true
    },

    {
      date: 'Date unknown',
      type: 'Cosmetic / Hardware',
      title: 'Volume and tone knobs replaced',
      description: 'Replaced the volume and tone control knobs.',
      cost: null
    }

  ]

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
  },

  {
  id: 'fender-tone-master-twin-reverb',

  kind: 'amp',

  brand: 'Fender',

  model: 'Tone Master Twin Reverb',

  year: '',

  finish: 'Black',

  origin: '',

  status: 'Owned',

  modified: false,

  serial: null,

  serialRecorded: false,

  acquired: '6 Dec 2022',

  acquisitionType: 'Purchased / Trade-in',

  originalPrice: {
    amount: 1250,
    currency: 'EUR',
    approximate: false
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {

    acquisition: {
      amount: 1250,
      currency: 'EUR',
      approximate: false,
      personalSpend: true,
      note: 'Purchased from local music shop in Waterford'
    },

    tradeIn: {
      amount: 150,
      currency: 'EUR',
      item: 'Boss Katana 50'
    },

    cashPaid: {
      amount: 1100,
      currency: 'EUR'
    },

    modificationSpend: {
      amount: 0,
      currency: 'EUR'
    }

  },

  history: [

    {
      date: '6 Dec 2022',
      type: 'Acquisition',
      title: 'Purchased in Waterford',
      description: 'Purchased from a local music shop in Waterford for €1,250. A Boss Katana 50 was traded against the purchase for €150.',
      cost: 1250,
      currency: 'EUR',
      personalSpend: true
    },

    {
      date: '6 Dec 2022',
      type: 'Trade-in',
      title: 'Boss Katana 50 traded in',
      description: 'Boss Katana 50 accepted as part-exchange with a trade-in value of €150, leaving €1,100 to pay toward the Tone Master Twin Reverb.',
      cost: -150,
      currency: 'EUR'
    }

  ]
},


  {
  id: 'boss-katana-50',

  kind: 'amp',

  brand: 'Boss',

  model: 'Katana 50',

  year: '',

  finish: 'Black',

  origin: '',

  status: 'Traded',

  modified: false,

  serial: null,

  serialRecorded: false,

  acquired: '2017',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 350,
    currency: 'EUR',
    approximate: false
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {

    acquisition: {
      amount: 350,
      currency: 'EUR',
      approximate: false,
      personalSpend: true,
      note: 'Purchased from local music shop in Waterford'
    },

    tradeIn: {
      amount: 150,
      currency: 'EUR',
      date: '6 Dec 2022',
      toward: 'Fender Tone Master Twin Reverb'
    }

  },

  history: [

    {
      date: '6 Dec 2022',
      type: 'Trade-in',
      title: 'Traded toward Fender Tone Master Twin Reverb',
      description: 'Traded back to the local Waterford music shop toward the purchase of a Fender Tone Master Twin Reverb.',
      cost: -150,
      currency: 'EUR'
    },

    {
      date: '2017',
      type: 'Acquisition',
      title: 'Purchased in Waterford',
      description: 'Purchased from a local music shop in Waterford.',
      cost: 350,
      currency: 'EUR',
      personalSpend: true
    }

  ]

},

];