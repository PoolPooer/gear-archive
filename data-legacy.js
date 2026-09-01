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
  id: 'jackson-js32-rhoads',

  kind: 'guitar',

  brand: 'Jackson',

  model: 'JS32 Rhoads AH',

  year: '2023',

  finish: 'Ivory',

  origin: 'China',

  status: 'Owned',

  modified: true,

  project: true,

  serial: null,

  serialRecorded: true,

  acquired: '19 Jun 2024',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 366,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Pickups: 'Stock bridge and neck pickups',
    PickupSelector: 'Stock pickup selector',
    Controls: 'Volume and tone controls',
    Bridge: 'Stock',
    Nut: 'Stock',
    PickupRing: 'Stock',
    Hardware: 'Stock'
  },

  currentSpec: {
    BridgePickup: 'Seymour Duncan SH-8B Invader — Black',
    NeckPickup: 'Removed',
    PickupSelector: 'Removed',
    Controls: 'Single volume control',
    VolumePotLocation: 'Moved to former tone-control position',
    VolumeKnob: 'Chrome replacement knob — details pending',
    Bridge: 'Gotoh GE1996T 33 mm — Black',
    Nut: 'Gotoh GHL-2B',
    PickupRing: 'Spray-painted blue',
    CosmeticDetails: 'Sticker pack applied'
  },

  financials: {

    acquisition: {
      amount: 366,
      currency: 'EUR',
      approximate: false,
      personalSpend: true,
      note: 'Purchased B-Stock from Thomann'
    },

    modificationSpend: {
      amount: 452.16,
      currency: 'EUR',
      note: 'Known spend only; chrome volume knob cost still to be added'
    }

  },

  projectDetails: {
    inspiration: 'Wes Borland',
    goal: 'Project guitar built to visually and functionally resemble elements of one of Wes Borland’s guitars.',
    approach: [
      'Simplified electronics to bridge pickup and single volume control',
      'Removed neck pickup and pickup selector',
      'Moved volume control to former tone-control position',
      'Changed major hardware to black Gotoh components',
      'Painted pickup ring blue',
      'Added sticker graphics'
    ]
  },

  history: [

    {
      date: '7 Apr 2025',
      type: 'Hardware',
      title: 'Gotoh bridge and locking nut upgrade',
      description: 'Replaced the stock bridge and nut with a Gotoh GE1996T 33 mm bridge in black and Gotoh GHL-2B locking nut.',
      cost: 280.00,
      currency: 'EUR'
    },

    {
      date: 'Date unknown',
      type: 'Cosmetic / Hardware',
      title: 'Chrome volume knob installed',
      description: 'Installed a chrome replacement volume knob.',
      cost: null,
      currency: 'EUR'
    },

    {
      date: 'Date unknown',
      type: 'Cosmetic',
      title: 'Pickup ring painted blue',
      description: 'Removed the pickup ring, spray-painted it blue, and remounted it.',
      cost: null
    },

    {
      date: 'Date unknown',
      type: 'Electronics · Permanent alteration',
      title: 'Electronics simplified',
      description: 'Removed the neck pickup, pickup selector and tone control. Moved the volume pot to the former tone-control position, leaving the guitar with a bridge pickup and single volume control.',
      cost: null
    },

    {
      date: '4 Jul 2024',
      type: 'Cosmetic',
      title: 'Sticker pack purchased',
      description: 'Purchased a sticker pack for the Wes Borland-inspired visual treatment.',
      cost: 23.16,
      currency: 'EUR'
    },

    {
      date: '19 Jun 2024',
      type: 'Electronics',
      title: 'Seymour Duncan Invader purchased',
      description: 'Purchased a Seymour Duncan SH-8B BK Invader bridge pickup for the project.',
      cost: 149.00,
      currency: 'EUR'
    },

    {
      date: '19 Jun 2024',
      type: 'Acquisition',
      title: 'Purchased B-Stock from Thomann',
      description: 'Purchased a Jackson JS32 Rhoads AH in Ivory as B-Stock from Thomann.',
      cost: 366.00,
      currency: 'EUR',
      personalSpend: true
    }

  ]

},

  {
  id: 'squier-affinity-stratocaster-early-2000s',

  kind: 'guitar',

  brand: 'Squier',

  model: 'Affinity Series Stratocaster',

  year: '2001–2002',

  yearApproximate: true,

  finish: 'Sunburst',

  origin: '',

  status: 'Traded',

  modified: true,

  serial: null,

  serialRecorded: false,

  acquired: '~2001–2002',

  acquisitionType: 'Christmas / birthday gift',

  originalPrice: {
    amount: null,
    currency: 'EUR',
    approximate: true
  },

  identification: {
    exactModel: 'Squier Affinity Series Stratocaster',
    yearConfirmed: false,
    notes: 'Received as part of a Squier starter pack around 2001–2002. Exact production year, country of manufacture and serial number are unknown.'
  },

  originalSpec: {
    BodyStyle: 'Stratocaster',
    Finish: 'Sunburst',
    Pickguard: 'White',
    PickupConfiguration: 'SSS — 3 single-coil pickups',
    Bridge: 'Stratocaster-style tremolo',
    Fingerboard: 'Dark wood — likely rosewood',
    Neck: 'Maple',
    Hardware: 'Chrome',
    Controls: 'Master volume, 2 tone controls and pickup selector'
  },

  currentSpec: {
    BodyStyle: 'Stratocaster',
    Finish: 'Sunburst',
    Pickguard: 'White',
    PickupConfiguration: 'SSS — 3 single-coil pickups',
    Bridge: 'Stratocaster-style tremolo',
    Fingerboard: 'Dark wood',
    Neck: 'Maple',
    Hardware: 'Chrome',
    TremoloBlock: 'Replacement following broken tremolo arm repair'
  },

  financials: {

    acquisition: {
      amount: null,
      currency: 'EUR',
      approximate: true,
      personalSpend: false,
      note: 'Received as a Christmas / birthday gift'
    },

    maintenanceSpend: {
      amount: 50,
      currency: 'EUR',
      note: 'Tremolo block repair / replacement'
    },

    tradeIn: {
      amount: null,
      currency: 'EUR',
      date: null,
      toward: 'Bass guitar — details to be added',
      note: 'Exact trade-in value unknown; remembered as likely no more than approximately €80'
    }

  },

  packageDetails: {
    type: 'Squier starter pack',
    included: [
      'Squier Affinity Series Stratocaster',
      'Small practice amplifier',
      'Gig bag',
      'Guitar strap'
    ],
    notes: 'Exact starter pack and amplifier model unknown.'
  },

  history: [

    {
      date: 'Date unknown',
      type: 'Trade-in',
      title: 'Traded toward bass guitar',
      description: 'Traded toward the purchase of a bass guitar. Exact trade-in value is unknown; remembered as likely no more than approximately €80.',
      cost: null,
      currency: 'EUR'
    },

    {
      date: 'Date unknown',
      type: 'Repair',
      title: 'Tremolo block replaced',
      description: 'The tremolo arm snapped inside the bridge block. The broken section had to be drilled out and the tremolo block was replaced.',
      cost: 50.00,
      currency: 'EUR'
    },

    {
      date: '~2001–2002',
      type: 'Acquisition',
      title: 'Received as Christmas / birthday gift',
      description: 'Received while young as part of a Squier starter pack containing the Affinity Series Stratocaster, a small practice amplifier, gig bag and guitar strap.',
      cost: null,
      currency: 'EUR',
      personalSpend: false
    }

  ]

},

  {
  id: 'custom-jazzmaster-2022',

  kind: 'guitar',

  brand: 'Custom',

  model: 'Jazzmaster',

  year: 2022,

  finish: 'Natural / Olivewood with red sparkle epoxy accents',

  origin: 'Custom build',

  status: 'Owned',

  modified: true,

  project: true,

  serial: null,

  serialRecorded: false,

  acquired: '2021–2022',

  acquisitionType: 'Custom build',

  originalPrice: {
    amount: 1535,
    currency: 'EUR',
    approximate: false,
    note: 'Known build and associated accessory cost'
  },

  originalSpec: {
    BuildType: 'Custom Jazzmaster-style project guitar',

    Body: 'Ceccarini Guitars custom Jazzmaster-style body',
    BodyWood: 'Ash — 3-piece',
    TopWood: 'Olivewood',
    BodyFinish: 'Oil and carnauba wax',
    BodyAccents: 'Red / sparkle epoxy-filled accents',
    BodyContours: 'Arm and belly contours',
    ElectronicsRouting: 'Rear routed electronics with backplate',
    JackRouting: '22 mm side-mounted jack hole',

    Neck: 'Warmoth Jazzmaster replacement neck — Gibson scale conversion',
    NeckShaft: 'Roasted maple',
    Fretboard: 'Pau ferro',
    FretboardRadius: '9.5"–14" compound',
    NeckProfile: 'Standard Thin',
    NutWidth: '1-11/16" / 43 mm',
    Frets: '22 × 6105 narrow/tall nickel',
    NeckFinish: 'Clear satin nitro',
    Nut: 'White Corian',
    NeckHeel: 'Strat-style 4-bolt',

    Pickups: 'Electrical Guitar Company JM500 / Travis Bean TB500 hybrid set',
    PickupCovers: 'Black',
    PickupConfiguration: '2 × single-coil hybrid JM/TB500',

    Controls: 'Independent volume and tone controls for each pickup',
    Pots: '4 × 500k pots',
    PickupSelector: '3-way toggle switch',
    OutputJack: 'Side-mounted jack',

    Bridge: 'B-162-N — Nickel finish',
    BridgeStuds: 'M8',
    BridgeStudSpacing: '74 mm',
    BridgeStringSpacing: '52 mm',
    BridgeRadius: '16"',
    BridgeAnchorDiameter: '11 mm',
    BridgeAnchorLength: '23 mm',
    BridgeStudTopDiameter: '6 mm',

    Tailpiece: 'Boston T-70-AN aluminium stop tailpiece — Nickel',

    Tuners: 'Vintage-style closed-back chrome machine heads',
    StrapPins: 'Planet Waves PWEEP202 Elliptical End Pins — Chrome',
    Knobs: 'Count Blankula D10 knobs',

    Strings: 'Ernie Ball Skinny Top Heavy Bottom 10–52',

    Weight: 'Approx. 3.6 kg / 7.9 lbs'
  },

  currentSpec: {
    Body: 'Ceccarini Guitars ash Jazzmaster body with olivewood top',
    Finish: 'Oil and carnauba wax',
    Accents: 'Red / sparkle epoxy-filled details',

    Neck: 'Warmoth roasted maple Jazzmaster neck — Gibson scale conversion',
    Fretboard: 'Pau ferro',
    Radius: '9.5"–14" compound',
    Frets: '22 × 6105 narrow/tall',
    Headstock: 'Custom decals added October 2022',

    Pickups: 'Electrical Guitar Company JM500 / Travis Bean TB500 hybrid set — Black',
    Controls: 'Independent volume and tone controls for each pickup',
    Pots: '4 × 500k',
    PickupSelector: '3-way toggle',

    Bridge: 'B-162-N — Nickel',
    Tailpiece: 'Boston T-70-AN aluminium stop tailpiece — Nickel',

    Tuners: 'Vintage-style closed-back chrome machine heads',
    StrapPins: 'Planet Waves PWEEP202 Elliptical End Pins — Chrome',
    Strap: 'Ernie Ball Burgundy Polypro Pickholder Strap',
    Knobs: 'Count Blankula D10',
    OutputJack: 'Side-mounted',

    Strings: 'Ernie Ball Skinny Top Heavy Bottom 10–52',

    Weight: 'Approx. 3.6 kg / 7.9 lbs'
  },

  financials: {

    acquisition: {
      amount: 1535,
      currency: 'EUR',
      approximate: false,
      personalSpend: true,
      note: 'Known component, assembly and associated accessory cost for custom build'
    },

    modificationSpend: {
      amount: 9,
      currency: 'EUR',
      note: 'Post-build hardware spend'
    },

    buildSpend: {
      amount: 1515,
      currency: 'EUR'
    },

    accessorySpend: {
      amount: 11,
      currency: 'EUR'
    }

  },

  projectDetails: {
    projectType: 'Custom build',

    goal: 'Build a unique Jazzmaster-style guitar using boutique/custom components rather than modifying an existing production instrument.',

    bodyBuilder: 'Ceccarini Guitars',

    neckBuilder: 'Warmoth',

    pickupBuilder: 'Electrical Guitar Company',

    finalAssembly: 'Local music shop in Waterford',

    buildPeriod: 'Sep 2021 – Feb 2022',

    knownComponentCosts: [
      {
        component: 'Ceccarini Guitars Custom Raw Body Jazzmaster',
        cost: 500.00,
        currency: 'EUR'
      },
      {
        component: 'Electrical Guitar Company JM500 / Travis Bean TB500 pickup set',
        cost: 300.00,
        currency: 'EUR'
      },
      {
        component: 'Warmoth Jazzmaster Gibson-scale conversion neck',
        cost: 400.00,
        currency: 'EUR'
      },
      {
        component: 'Count Blankula D10 knobs',
        cost: 65.00,
        currency: 'EUR'
      },
      {
        component: 'B-162-N bridge',
        cost: 30.00,
        currency: 'EUR'
      },
      {
        component: 'Boston T-70-AN aluminium stop tailpiece',
        cost: 20.00,
        currency: 'EUR'
      },
      {
        component: 'Electronics, tuners and final assembly',
        cost: 200.00,
        currency: 'EUR'
      }
    ]
  },

  pickupDetails: {
    model: 'Electrical Guitar Company JM500 / Travis Bean TB500 hybrid',

    magnets: 'Alnico 5 slug pole pieces',

    wiring: 'Thermax Teflon-coated pure silver-plated coax cable',

    polarity: 'Non-RWRP',

    constructionNotes: 'Hybrid JM/TB500 design using enlarged magnetic substructures intended to redirect and concentrate the magnetic field.'
  },

  dimensions: {
    overallLength: '40 inches',
    bodyLength: '19 inches',
    bodyDepth: '4.2 cm',
    lowerBoutWidth: null,
    middleBoutWidth: null,
    upperBoutWidth: null
  },

  history: [

    {
      date: '24 Jul 2023',
      type: 'Hardware',
      title: 'Planet Waves elliptical end pins installed',
      description: 'Installed Planet Waves PWEEP202 Elliptical End Pins — Chrome.',
      cost: 9.00,
      currency: 'EUR'
    },

    {
      date: 'Oct 2022',
      type: 'Cosmetic',
      title: 'Headstock decals added',
      description: 'Added custom decals to the Warmoth headstock.',
      cost: 0,
      currency: 'EUR'
    },

    {
      date: '22 Apr 2022',
      type: 'Build / Hardware',
      title: 'Count Blankula D10 knobs acquired',
      description: 'Purchased Count Blankula D10 control knobs.',
      cost: 65.00,
      currency: 'EUR'
    },

    {
      date: 'Feb 2022',
      type: 'Build / Assembly',
      title: 'Final assembly completed',
      description: 'Final build and assembly completed by the local music shop in Waterford. Installed four 500k pots, 3-way toggle switch, side-mounted output jack and vintage-style closed-back chrome machine heads.',
      cost: 200.00,
      currency: 'EUR'
    },

    {
      date: '24 Dec 2021',
      type: 'Accessory',
      title: 'Ernie Ball Burgundy Polypro Pickholder Strap',
      description: 'Purchased an Ernie Ball Burgundy Polypro Pickholder Strap for the guitar.',
      cost: 11.00,
      currency: 'EUR'
    },

    {
      date: '8 Dec 2021',
      type: 'Build / Neck',
      title: 'Warmoth conversion neck acquired',
      description: 'Purchased Warmoth Jazzmaster replacement neck with Gibson scale conversion, roasted maple shaft, pau ferro fingerboard and clear satin nitro finish.',
      cost: 400.00,
      currency: 'EUR'
    },

    {
      date: '28 Oct 2021',
      type: 'Build / Electronics',
      title: 'Electrical Guitar Company pickups acquired',
      description: 'Purchased the EGC JM500 / Travis Bean TB500 hybrid pickup set with black covers.',
      cost: 300.00,
      currency: 'EUR'
    },

    {
      date: '25 Oct 2021',
      type: 'Build / Body',
      title: 'Ceccarini Jazzmaster body completed',
      description: 'Custom Ceccarini Guitars Jazzmaster-style body completed using a three-piece ash body with olivewood top, red sparkle epoxy accents, oil and carnauba wax finish, rear-routed electronics, arm and belly contours, and side-mounted jack routing.',
      cost: 500.00,
      currency: 'EUR'
    },

    {
      date: '27 Sep 2021',
      type: 'Build / Hardware',
      title: 'Bridge and tailpiece acquired',
      description: 'Purchased the B-162-N nickel bridge and Boston T-70-AN aluminium stop tailpiece.',
      cost: 50.00,
      currency: 'EUR'
    }

  ]

},

// ============================================================
// BASSES
// ============================================================

{
  id: 'aria-sb303',

  kind: 'bass',

  brand: 'Aria',

  model: 'SB-303',

  year: '',

  yearApproximate: true,

  finish: 'Red satin',

  origin: 'Korea',

  status: 'Traded',

  modified: false,

  serial: null,

  serialRecorded: false,

  acquired: '2005',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 650,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: '4-string fretted bass',
    Finish: 'Red satin',
    Neck: 'Painted / colour-matched neck',
    Fingerboard: 'Dark wood',
    Frets: '24',
    Electronics: 'Active',
    Pickups: '2 × black pickups',
    Controls: '2 × volume, 2 × tone',
    PickupSelector: '3-way selector'
  },

  currentSpec: {
    Configuration: 'Stock',
    Electronics: 'Active',
    Frets: '24',
    Controls: '2 × volume, 2 × tone',
    PickupSelector: '3-way selector'
  },

  financials: {
    acquisition: {
      amount: 650,
      currency: 'EUR',
      personalSpend: true,
      note: 'Purchased from local music shop'
    },

    tradeIn: {
      amount: null,
      currency: 'EUR',
      date: 'Jun 2007',
      toward: 'Fender Geddy Lee Jazz Bass',
      note: 'Trade-in value currently unknown'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  notes: 'Active Korean-made Aria SB-series bass. Purchased in 2005 and later traded toward the Fender Geddy Lee Jazz Bass.',

  history: [
    {
      date: 'Jun 2007',
      type: 'Trade-in',
      title: 'Traded toward Fender Geddy Lee Jazz Bass',
      description: 'Traded to the local music shop toward the purchase of the Fender Geddy Lee Jazz Bass. Exact trade-in value is currently unknown.',
      cost: null,
      currency: 'EUR'
    },

    {
      date: '2005',
      type: 'Acquisition',
      title: 'Purchased',
      description: 'Purchased from the local music shop.',
      cost: 650,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'aria-sb40f-fretless',

  kind: 'bass',

  brand: 'Aria',

  model: 'SB-40F',

  year: '',

  yearApproximate: true,

  finish: 'Black',

  origin: '',

  status: 'Traded',

  modified: false,

  serial: null,

  serialRecorded: false,

  acquired: '~2008',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 350,
    currency: 'EUR',
    approximate: true
  },

  originalSpec: {
    Configuration: '4-string fretless bass',
    Finish: 'Black',
    Fingerboard: 'Unlined fretless fingerboard',
    Electronics: 'Stock',
    Hardware: 'Stock'
  },

  currentSpec: {
    Configuration: '4-string fretless bass',
    Finish: 'Black',
    Fingerboard: 'Unlined fretless fingerboard',
    Electronics: 'Stock',
    Hardware: 'Stock',
    Strings: 'Flatwound'
  },

  financials: {
    acquisition: {
      amount: 350,
      currency: 'EUR',
      approximate: true,
      personalSpend: true,
      note: 'Purchased from local music shop'
    },

    tradeIn: {
      amount: null,
      currency: 'EUR',
      date: null,
      toward: 'Unknown amp or pedal',
      note: 'Believed to have been traded toward an amp or pedal. Exact item, date and trade-in value currently unknown.'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  notes: 'Affordable fretless bass kept completely stock during ownership. Typically used with flatwound strings. Eventually believed to have been traded toward another piece of gear.',

  history: [
    {
      date: 'Date unknown',
      type: 'Trade-in',
      title: 'Traded toward other gear',
      description: 'Believed to have been traded toward the purchase of an amp or pedal. Exact item, date and trade-in value are currently unknown.',
      cost: null,
      currency: 'EUR'
    },

    {
      date: '~2008',
      type: 'Acquisition',
      title: 'Purchased',
      description: 'Purchased from the local music shop for approximately €350.',
      cost: 350,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'fender-geddy-lee-jazz-bass-2007',

  kind: 'bass',

  brand: 'Fender',

  model: 'Geddy Lee Signature Jazz Bass',

  year: 2007,

  finish: 'Originally Black / Currently Natural',

  origin: 'Japan',

  status: 'Owned',

  modified: true,

  serial: null,

  serialRecorded: true,

  acquired: 'June 2007',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 1200,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Model: 'Geddy Lee Signature Jazz Bass',
    BodyShape: 'Jazz Bass',
    BodyType: 'Solid body',
    BodyWood: 'Alder',
    BodyFinish: 'Gloss',
    Finish: 'Black',

    NeckWood: 'Maple',
    NeckShape: 'Thin C profile',
    ScaleLength: '34"',
    NeckJoint: 'Bolt-on',

    NutMaterial: 'Synthetic bone',
    NutWidth: '1.5"',

    Fingerboard: 'Maple',
    FingerboardRadius: '9.5"',
    FingerboardInlays: 'Black blocks',
    FingerboardBinding: 'Black',

    Frets: '20 medium jumbo',

    Pickups: 'Fender vintage Jazz Bass single coils',
    Controls: '2 × volume, master tone',

    Bridge: 'BadAss II High Mass',

    Tuners: '70s vintage-style open gear',

    Hardware: 'Chrome'
  },

  currentSpec: {
    BodyShape: 'Jazz Bass',
    BodyWood: 'Alder',
    Finish: 'Natural — Tru-Oil',

    Neck: '2019 Fender replacement Jazz Bass neck',
    NeckMaterial: 'Maple',
    NeckShape: 'Mid ’60s C',
    NeckThickness: '1st fret: .815" / 20.70 mm · 12th fret: 1.0" / 25.40 mm',
    NeckMounting: '4-bolt',

    Fingerboard: 'Pau Ferro',
    FingerboardRadius: '9.5" / 241 mm',
    PositionInlays: 'White dots',
    SideDots: 'White',

    Frets: '20 medium jumbo',

    Nut: 'Pre-slotted synthetic bone',
    NutMaterial: 'Synthetic bone',
    NutWidth: '1.5" / 38.1 mm',

    TrussRod: 'Vintage-style adjustment',

    Pickups: 'Original Fender vintage Jazz Bass single coils',
    PickupCovers: 'Solid black covers without exposed pole-piece holes',

    Controls: '2 × volume, master tone',

    Bridge: 'BadAss II High Mass',

    Hardware: 'Chrome'
  },

  financials: {
    acquisition: {
      amount: 1200,
      currency: 'EUR',
      personalSpend: true,
      note: 'Purchased from local music shop'
    },

    modificationSpend: {
      amount: 434,
      currency: 'EUR',
      note: 'Known documented modification spend only'
    },

    sales: {
      originalNeck: {
        amount: 339.25,
        currency: 'EUR',
        date: '16 Mar 2023',
        destination: 'USA',
        platform: 'Reverb'
      }
    },

    knownSpend: {
      amount: 1634,
      currency: 'EUR',
      note: 'Purchase price plus currently known modification costs'
    },

    knownNetInvestment: {
      amount: 1294.75,
      currency: 'EUR',
      note: 'Known gross spend less €339.25 recovered from sale of original neck'
    }
  },

  modificationCosts: [
    {
      component: 'Solid black pickup covers',
      cost: 14,
      currency: 'EUR',
      date: '2016'
    },

    {
      component: 'Black pickguard',
      cost: 20,
      currency: 'EUR',
      date: '2016',
      note: 'Replacement pickguard did not fit particularly well'
    },

    {
      component: '2019 Fender replacement Jazz Bass neck',
      cost: 400,
      currency: 'EUR',
      date: 'Jun 2020'
    }
  ],

  images: {
    cover: null,
    gallery: []
  },

  notes: 'Long-term bass purchased in 2007 and extensively changed cosmetically over its ownership while retaining the original pickups, controls and bridge. Originally black, refinished bright blue around 2012, then stripped to natural alder and finished with Tru-Oil in 2020. The original Geddy Lee signature neck was eventually sold separately in 2023.',

  history: [
    {
      date: '16 Mar 2023',
      type: 'Sale',
      title: 'Original Geddy Lee neck sold',
      description: 'Original maple Geddy Lee Signature Jazz Bass neck sold separately through Reverb and shipped to a buyer in the USA.',
      cost: -339.25,
      currency: 'EUR'
    },

    {
      date: 'Jun 2020',
      type: 'Hardware · Major modification',
      title: '2019 Fender replacement neck installed',
      description: 'Bass reassembled with a more modern Fender replacement Jazz Bass neck. Maple neck with Mid ’60s C profile, 9.5-inch-radius pau ferro fingerboard, 20 medium jumbo frets, white dot inlays and synthetic bone nut.',
      cost: 400,
      currency: 'EUR'
    },

    {
      date: 'May 2020',
      type: 'Finish · Permanent alteration',
      title: 'Blue finish removed and body refinished natural',
      description: 'Stripped the blue paint from the body and sanded it back to reveal the natural alder. Applied two coats of Tru-Oil to create the current natural finish.',
      cost: null,
      currency: 'EUR'
    },

    {
      date: '2016',
      type: 'Hardware',
      title: 'Black pickup covers installed',
      description: 'Replaced the original pickup covers with solid black covers without exposed pole-piece holes.',
      cost: 14,
      currency: 'EUR'
    },

    {
      date: '2016',
      type: 'Hardware',
      title: 'Black pickguard installed',
      description: 'Installed a replacement black pickguard. Fit was imperfect.',
      cost: 20,
      currency: 'EUR'
    },

    {
      date: '~2012',
      type: 'Finish · Permanent alteration',
      title: 'Body refinished bright blue',
      description: 'Original black finish was stripped from the body by a friend and the body was refinished in bright blue.',
      cost: null,
      currency: 'EUR'
    },

    {
      date: 'Jun 2007',
      type: 'Acquisition',
      title: 'Purchased',
      description: 'Purchased from the local music shop for €1,200. The Aria SB-303 was traded toward the purchase.',
      cost: 1200,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

// ============================================================
// AMPS
// ============================================================

{
  id: 'fender-frontman-10g',

  kind: 'amp',

  brand: 'Fender',

  model: 'Frontman 10G',

  year: '~2001–2002',

  yearApproximate: true,

  status: 'Traded',

  modified: false,

  acquired: '~2001–2002',

  acquisitionType: 'Part of guitar starter pack',

  originalPrice: {
    amount: null,
    currency: 'EUR',
    approximate: true
  },

  originalSpec: {
    Type: 'Guitar practice amplifier',
    Power: '10W'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: null,
      currency: 'EUR',
      approximate: true,
      personalSpend: false,
      note: 'Included with Squier Affinity Stratocaster starter pack'
    },

    tradeIn: {
      amount: null,
      currency: 'EUR',
      date: null,
      toward: 'Unknown gear',
      note: 'Eventually traded toward another piece of gear. Exact details currently unknown.'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  notes: 'First guitar amplifier. Supplied as part of the Squier Affinity Stratocaster starter pack.',

  history: [
    {
      date: 'Date unknown',
      type: 'Trade-in',
      title: 'Traded toward other gear',
      description: 'Eventually traded toward another piece of gear. Exact date, item and trade value are currently unknown.',
      cost: null,
      currency: 'EUR'
    },

    {
      date: '~2001–2002',
      type: 'Acquisition',
      title: 'Received with Squier starter pack',
      description: '10W Fender Frontman practice amplifier supplied with the Squier Affinity Stratocaster starter pack.',
      cost: null,
      currency: 'EUR',
      personalSpend: false
    }
  ]
},

{
  id: 'avalanche-bass-practice-amp',

  kind: 'amp',

  brand: 'Avalanche',

  model: 'Unknown 10W Bass Amp',

  year: '~2005',

  yearApproximate: true,

  status: 'Previously owned',

  modified: false,

  acquired: '~2005',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: null,
    currency: 'EUR',
    approximate: true
  },

  originalSpec: {
    Type: 'Bass practice amplifier',
    Power: 'Approximately 10W'
  },

  financials: {
    acquisition: {
      amount: null,
      currency: 'EUR',
      approximate: true,
      personalSpend: true,
      note: 'Purchased from local music shop around the same period as the Aria SB-303'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  notes: 'Small bass practice amplifier believed to have been branded Avalanche. Exact model, price and specifications are currently unknown.',

  history: [
    {
      date: '~2005',
      type: 'Acquisition',
      title: 'Purchased',
      description: 'Small approximately 10W bass practice amplifier purchased from the local music shop around the same period as the Aria SB-303.',
      cost: null,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'fender-guitar-amp-mid-2000s',

  kind: 'amp',

  brand: 'Fender',

  model: 'Unknown — possibly Champ 100',

  year: '',

  yearApproximate: true,

  status: 'Previously owned',

  modified: false,

  acquired: '~2004–2005',

  acquisitionType: 'Used purchase',

  originalPrice: {
    amount: 350,
    currency: 'EUR',
    approximate: true
  },

  originalSpec: {
    Type: 'Guitar combo amplifier'
  },

  financials: {
    acquisition: {
      amount: 350,
      currency: 'EUR',
      approximate: true,
      personalSpend: true,
      note: 'Purchased used through local music shop; believed to have already had at least two previous owners'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  identification: {
    exactModel: 'Unknown',
    possibleModel: 'Fender Champ 100',
    confidence: 'Low',
    notes: 'Model remembered as possibly being a Fender Champ 100. Identification should be verified before treating this as the exact model.'
  },

  notes: 'Used Fender guitar amplifier purchased through the local music shop around 2004–2005 for approximately €350. Believed to have been third-hand.',

  history: [
    {
      date: '~2004–2005',
      type: 'Acquisition',
      title: 'Purchased used',
      description: 'Purchased through the local music shop for approximately €350. Believed to have already had at least two previous owners.',
      cost: 350,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'genz-benz-shuttle-3',

  kind: 'amp',

  subtype: 'Bass amp head',

  brand: 'Genz Benz',

  model: 'Shuttle 3.0',

  year: '',

  status: 'Owned',

  modified: false,

  acquired: 'Date unknown',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: null,
    currency: 'EUR',
    approximate: true
  },

  originalSpec: {
    Type: 'Bass amplifier head'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: null,
      currency: 'EUR',
      approximate: true,
      personalSpend: true,
      note: 'Purchase date and price to be added'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  notes: 'Originally used with a large speaker cabinet believed to have been a 1×15. The original cabinet was later sold due to its size, while the Shuttle 3.0 head was retained.',

  history: [
    {
      date: 'Date unknown',
      type: 'Acquisition',
      title: 'Purchased',
      description: 'Genz Benz Shuttle 3.0 bass amplifier head. Originally paired with a large speaker cabinet believed to have been a 1×15.',
      cost: null,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'genz-benz-bass-cab',

  kind: 'amp',

  subtype: 'Bass speaker cabinet',

  brand: 'Genz Benz',

  model: 'Unknown',

  year: '',

  status: 'Sold',

  modified: false,

  acquired: 'Date unknown',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: null,
    currency: 'EUR',
    approximate: true
  },

  originalSpec: {
    Type: 'Bass speaker cabinet',
    Configuration: 'Believed to be 1×15'
  },

  financials: {
    acquisition: {
      amount: null,
      currency: 'EUR',
      approximate: true,
      personalSpend: true
    },

    sale: {
      amount: null,
      currency: 'EUR',
      date: null,
      note: 'Sold because the cabinet was too large for convenient storage'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  notes: 'Originally paired with the Genz Benz Shuttle 3.0. Believed to have been a 1×15 cabinet. Sold because of its physical size and storage requirements.',

  history: [
    {
      date: 'Date unknown',
      type: 'Sale',
      title: 'Cabinet sold',
      description: 'Sold because the cabinet was too large for convenient storage. The Genz Benz Shuttle 3.0 amplifier head was retained.',
      cost: null,
      currency: 'EUR'
    }
  ]
},

{
  id: 'fender-rumble-bass-cab',

  kind: 'amp',

  subtype: 'Bass speaker cabinet',

  brand: 'Fender',

  model: 'Rumble — exact model unknown',

  year: '',

  status: 'Owned',

  modified: false,

  acquired: 'Date unknown',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: null,
    currency: 'EUR',
    approximate: true
  },

  originalSpec: {
    Type: 'Bass speaker cabinet'
  },

  currentSpec: {
    Configuration: 'Stock',
    Use: 'Paired with Genz Benz Shuttle 3.0'
  },

  financials: {
    acquisition: {
      amount: null,
      currency: 'EUR',
      approximate: true,
      personalSpend: true
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  notes: 'Purchased as a more practical replacement for the larger Genz Benz cabinet and used with the Genz Benz Shuttle 3.0 head.',

  history: [
    {
      date: 'Date unknown',
      type: 'Acquisition',
      title: 'Purchased',
      description: 'Purchased to replace the larger Genz Benz bass cabinet and paired with the retained Shuttle 3.0 amplifier head.',
      cost: null,
      currency: 'EUR',
      personalSpend: true
    }
  ]
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

// ============================================================
// PEDALS
// ============================================================

{
  id: 'boss-jb-2',
  kind: 'pedal',
  brand: 'Boss',
  model: 'JB-2',
  status: 'Owned',
  modified: false,
  acquired: '2015',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 200,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 200,
      currency: 'EUR',
      personalSpend: true
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '2015',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 200,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'mxr-carbon-copy',
  kind: 'pedal',
  brand: 'MXR',
  model: 'Carbon Copy',
  status: 'Owned',
  modified: false,
  acquired: '2013',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 180,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 180,
      currency: 'EUR',
      personalSpend: true
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '2013',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 180,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'boss-dd-3-digital-delay',
  kind: 'pedal',
  brand: 'Boss',
  model: 'DD-3 Digital Delay',
  status: 'Owned',
  modified: false,
  acquired: '5 Nov 2020',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 159,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 159,
      currency: 'EUR',
      personalSpend: true
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '5 Nov 2020',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 159,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'death-by-audio-fuzz-gun',
  kind: 'pedal',
  brand: 'Death By Audio',
  model: 'Fuzz Gun',
  status: 'Owned',
  modified: false,
  acquired: '1 Nov 2023',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 200.34,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 200.34,
      currency: 'EUR',
      personalSpend: true
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '1 Nov 2023',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 200.34,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'death-by-audio-thee-fuzz-warr-overload',
  kind: 'pedal',
  brand: 'Death By Audio',
  model: 'Thee Fuzz Warr Overload',
  status: 'Owned',
  modified: false,
  acquired: 'Oct 2023',
  acquisitionType: 'Gift',

  originalPrice: {
    amount: 600,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock',
    Provenance: 'Signed by John Dwyer'
  },

  financials: {
    acquisition: {
      amount: 600,
      currency: 'EUR',
      personalSpend: false,
      note: 'Gift'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '14 Jun 2025',
      type: 'Provenance',
      title: 'Signed',
      description: 'Pedal signed by John Dwyer.',
      cost: 0,
      currency: 'EUR'
    },

    {
      date: 'Oct 2023',
      type: 'Acquisition',
      title: 'Received as gift',
      cost: 600,
      currency: 'EUR',
      personalSpend: false
    }
  ]
},

{
  id: 'greer-southland-harmonic-overdrive',
  kind: 'pedal',
  brand: 'Greer',
  model: 'Southland Harmonic Overdrive',
  status: 'Owned',
  modified: false,
  acquired: '22 May 2023',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 212,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 212,
      currency: 'EUR',
      personalSpend: true
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '22 May 2023',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 212,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'electro-harmonix-mel9',
  kind: 'pedal',
  brand: 'Electro-Harmonix',
  model: 'MEL9',
  status: 'Owned',
  modified: false,
  acquired: '19 May 2023',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 222.16,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 222.16,
      currency: 'EUR',
      personalSpend: true
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '19 May 2023',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 222.16,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'jhs-morning-glory-pedal-movie-exclusive',
  kind: 'pedal',
  brand: 'JHS',
  model: 'Morning Glory — Pedal Movie Exclusive',
  status: 'Sold',
  modified: false,
  acquired: '6 May 2021',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 303.01,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 303.01,
      currency: 'EUR',
      personalSpend: true
    },

    sale: {
      amount: 350,
      currency: 'EUR',
      date: '14 Nov 2022'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '14 Nov 2022',
      type: 'Sale',
      title: 'Sold',
      cost: -350,
      currency: 'EUR'
    },

    {
      date: '6 May 2021',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 303.01,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'audio-event-super-war-dance',
  kind: 'pedal',
  brand: 'Audio Event',
  model: 'Super War Dance',
  status: 'Owned',
  modified: false,
  acquired: '8 Dec 2020',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 159.54,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 159.54,
      currency: 'EUR',
      personalSpend: true
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '8 Dec 2020',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 159.54,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'jhs-smiley-legends-of-fuzz',
  kind: 'pedal',
  brand: 'JHS',
  model: 'Smiley — Legends of Fuzz',
  status: 'Sold',
  modified: false,
  acquired: '16 May 2020',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 197.69,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 197.69,
      currency: 'EUR',
      personalSpend: true
    },

    sale: {
      amount: 110,
      currency: 'EUR',
      date: '24 Nov 2025'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '24 Nov 2025',
      type: 'Sale',
      title: 'Sold',
      cost: -110,
      currency: 'EUR'
    },

    {
      date: '16 May 2020',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 197.69,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'boss-ge-7',
  kind: 'pedal',
  brand: 'Boss',
  model: 'GE-7 Equalizer',
  status: 'Sold',
  modified: false,
  acquired: 'Mar 2016',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 110,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 110,
      currency: 'EUR',
      personalSpend: true
    },

    sale: {
      amount: 95,
      currency: 'EUR',
      date: '14 Aug 2026'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '14 Aug 2026',
      type: 'Sale',
      title: 'Sold',
      cost: -95,
      currency: 'EUR'
    },

    {
      date: 'Mar 2016',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 110,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'mxr-m107-phase-100',
  kind: 'pedal',
  brand: 'MXR',
  model: 'M107 Phase 100',
  status: 'Sold',
  modified: false,
  acquired: 'May 2017',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 180,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 180,
      currency: 'EUR',
      personalSpend: true
    },

    sale: {
      amount: 119,
      currency: 'EUR',
      date: '12 Mar 2026'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '12 Mar 2026',
      type: 'Sale',
      title: 'Sold',
      cost: -119,
      currency: 'EUR'
    },

    {
      date: 'May 2017',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 180,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'boss-os-2',
  kind: 'pedal',
  brand: 'Boss',
  model: 'OS-2 OverDrive / Distortion',
  status: 'Sold',
  modified: false,
  acquired: '~2002',
  acquisitionType: 'Gift',

  originalPrice: {
    amount: null,
    currency: 'EUR',
    approximate: true
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: null,
      currency: 'EUR',
      approximate: true,
      personalSpend: false,
      note: 'Received as gift around 2002'
    },

    sale: {
      amount: 50,
      currency: 'EUR',
      date: '14 Oct 2023'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '14 Oct 2023',
      type: 'Sale',
      title: 'Sold',
      cost: -50,
      currency: 'EUR'
    },

    {
      date: '~2002',
      type: 'Acquisition',
      title: 'Received as gift',
      cost: null,
      currency: 'EUR',
      personalSpend: false
    }
  ]
},

{
  id: 'zvex-fuzz-factory-vexter-2018',
  kind: 'pedal',
  brand: 'ZVex',
  model: 'Fuzz Factory Vexter Series',
  year: 2018,
  status: 'Sold',
  modified: false,
  acquired: '25 Nov 2018',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 199,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 199,
      currency: 'EUR',
      personalSpend: true
    },

    sale: {
      amount: 185,
      currency: 'EUR',
      date: '20 Feb 2023'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '20 Feb 2023',
      type: 'Sale',
      title: 'Sold',
      cost: -185,
      currency: 'EUR'
    },

    {
      date: '25 Nov 2018',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 199,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'universal-audio-uafx-dream-65',
  kind: 'pedal',
  brand: 'Universal Audio',
  model: 'UAFX Dream ’65',
  status: 'Owned',
  modified: false,
  acquired: '16 Apr 2026',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 349,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 349,
      currency: 'EUR',
      personalSpend: true
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '16 Apr 2026',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 349,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'tc-electronic-polytune-3-noir',
  kind: 'pedal',
  brand: 'TC Electronic',
  model: 'PolyTune 3 Noir',
  status: 'Owned',
  modified: false,
  acquired: '22 Mar 2025',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 89,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 89,
      currency: 'EUR',
      personalSpend: true
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '22 Mar 2025',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 89,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'ehx-jhs-big-muff-2',
  kind: 'pedal',
  brand: 'Electro-Harmonix / JHS',
  model: 'Big Muff 2',
  status: 'Owned',
  modified: false,
  acquired: '23 Dec 2025',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 236.90,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 236.90,
      currency: 'EUR',
      personalSpend: true
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '23 Dec 2025',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 236.90,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'earthquaker-devices-hoof-reaper-v2',
  kind: 'pedal',
  brand: 'EarthQuaker Devices',
  model: 'Hoof Reaper V2',
  status: 'Owned',
  modified: false,
  acquired: 'Aug 2022',
  acquisitionType: 'Gift',

  originalPrice: {
    amount: 400,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 400,
      currency: 'EUR',
      personalSpend: false,
      note: 'Birthday gift'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: 'Aug 2022',
      type: 'Acquisition',
      title: 'Received as birthday gift',
      cost: 400,
      currency: 'EUR',
      personalSpend: false
    }
  ]
},

{
  id: 'dunlop-cry-baby-mini',
  kind: 'pedal',
  brand: 'Dunlop',
  model: 'Cry Baby Mini',
  status: 'Owned',
  modified: false,
  acquired: '1 Mar 2026',
  acquisitionType: 'Purchased / Trade-in',

  originalPrice: {
    amount: 80,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 80,
      currency: 'EUR',
      personalSpend: true
    },

    tradeIn: {
      amount: 50,
      currency: 'EUR',
      item: 'Dunlop Cry Baby Classic GCB95F'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '1 Mar 2026',
      type: 'Trade-in',
      title: 'Cry Baby Classic traded toward purchase',
      description: 'Dunlop Cry Baby Classic GCB95F received a €50 trade-in value toward the Cry Baby Mini.',
      cost: -50,
      currency: 'EUR'
    },

    {
      date: '1 Mar 2026',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 80,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'dunlop-crybaby-classic-gcb95f',
  kind: 'pedal',
  brand: 'Dunlop',
  model: 'Cry Baby Classic GCB95F',
  status: 'Traded',
  modified: false,
  acquired: '29 Jun 2018',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 140,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 140,
      currency: 'EUR',
      personalSpend: true
    },

    tradeIn: {
      amount: 50,
      currency: 'EUR',
      date: '1 Mar 2026',
      toward: 'Dunlop Cry Baby Mini'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '1 Mar 2026',
      type: 'Trade-in',
      title: 'Traded toward Cry Baby Mini',
      cost: -50,
      currency: 'EUR'
    },

    {
      date: '29 Jun 2018',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 140,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'quite-theory-prelude',
  kind: 'pedal',
  brand: 'Quite Theory',
  model: 'Prelude',
  status: 'Owned',
  modified: false,
  acquired: '1 Feb 2020',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 220,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 220,
      currency: 'EUR',
      personalSpend: true
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '1 Feb 2020',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 220,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'boss-tu-3',
  kind: 'pedal',
  brand: 'Boss',
  model: 'TU-3',
  status: 'Owned',
  modified: false,
  acquired: 'Jan 2018',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 110,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 110,
      currency: 'EUR',
      personalSpend: true
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: 'Jan 2018',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 110,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'boss-me-50b',
  kind: 'pedal',
  subtype: 'Multi-effects',
  brand: 'Boss',
  model: 'ME-50B',
  status: 'Sold',
  modified: false,
  acquired: 'Dec 2005',
  acquisitionType: 'Christmas gift',

  originalPrice: {
    amount: 300,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 300,
      currency: 'EUR',
      personalSpend: false,
      note: 'Christmas present'
    },

    sale: {
      amount: 150,
      currency: 'EUR',
      date: '2021'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '2021',
      type: 'Sale',
      title: 'Sold',
      cost: -150,
      currency: 'EUR'
    },

    {
      date: 'Dec 2005',
      type: 'Acquisition',
      title: 'Received as Christmas gift',
      cost: 300,
      currency: 'EUR',
      personalSpend: false
    }
  ]
},

{
  id: 'korg-ax-10g',
  kind: 'pedal',
  subtype: 'Multi-effects',
  brand: 'Korg',
  model: 'AX-10G',
  status: 'Traded',
  modified: false,
  acquired: '1 Dec 2004',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 200,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Configuration: 'Stock'
  },

  currentSpec: {
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 200,
      currency: 'EUR',
      personalSpend: true
    },

    tradeIn: {
      amount: null,
      currency: 'EUR',
      date: null,
      toward: 'Bass guitar — details to be added',
      note: 'Believed to have been traded toward a bass guitar; exact value unknown'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: 'Date unknown',
      type: 'Trade-in',
      title: 'Traded toward bass guitar',
      description: 'Believed to have been traded toward the purchase of a bass guitar. Exact trade value is unknown.',
      cost: null,
      currency: 'EUR'
    },

    {
      date: '1 Dec 2004',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 200,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},


// ============================================================
// ACCESSORIES — PEDAL POWER
// ============================================================

{
  id: 'cioks-dc7',
  kind: 'accessory',
  subtype: 'Pedal power supply',
  brand: 'Cioks',
  model: 'DC7',
  status: 'Owned',
  modified: false,
  acquired: '12 Oct 2024',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 239,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Type: 'Pedal power supply',
    Configuration: 'Stock'
  },

  currentSpec: {
    Type: 'Pedal power supply',
    Configuration: 'Stock'
  },

  financials: {
    acquisition: {
      amount: 239,
      currency: 'EUR',
      personalSpend: true
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '12 Oct 2024',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 239,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'harley-benton-powerplant-iso-2-pro',
  kind: 'accessory',
  subtype: 'Pedal power supply',
  brand: 'Harley Benton',
  model: 'PowerPlant ISO-2 Pro',
  status: 'Disposed',
  modified: false,
  acquired: '19 Jan 2020',
  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 70,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Type: 'Pedal power supply',
    Configuration: 'Stock'
  },

  currentSpec: {
    Type: 'Pedal power supply',
    Condition: 'Failed / no longer working'
  },

  financials: {
    acquisition: {
      amount: 70,
      currency: 'EUR',
      personalSpend: true
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: 'Date unknown',
      type: 'Failure',
      title: 'Power supply stopped working',
      description: 'Unit stopped working and was subsequently disposed of.',
      cost: null,
      currency: 'EUR'
    },

    {
      date: '19 Jan 2020',
      type: 'Acquisition',
      title: 'Purchased',
      cost: 70,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'encore-w225',

  kind: 'acoustic',

  brand: 'Encore',

  model: 'W225',

  year: '~2001',

  yearApproximate: true,

  finish: '',

  origin: '',

  status: 'Owned',

  modified: false,

  serial: null,

  serialRecorded: false,

  acquired: '~2001',

  acquisitionType: 'Unknown / Gift',

  originalPrice: {
    amount: null,
    currency: 'EUR',
    approximate: true
  },

  notes: 'First guitar owned. Further acquisition and specification details to be added.',

  financials: {
    acquisition: {
      amount: null,
      currency: 'EUR',
      approximate: true,
      personalSpend: false,
      note: 'Acquisition details currently unknown'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '~2001',
      type: 'Acquisition',
      title: 'First guitar',
      description: 'Encore W225 acoustic guitar. First guitar owned; further details to be added.',
      cost: null,
      currency: 'EUR',
      personalSpend: false
    }
  ]
},

{
  id: 'tanglewood-tw133-asm',

  kind: 'acoustic',

  brand: 'Tanglewood',

  model: 'TW133-ASM',

  year: '',

  finish: 'Mahogany',

  origin: '',

  status: 'Owned',

  modified: false,

  serial: null,

  serialRecorded: false,

  acquired: '2010',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: null,
    currency: 'EUR',
    approximate: true
  },

  originalSpec: {
    BodyStyle: 'Parlor'
  },

  currentSpec: {
    BodyStyle: 'Parlor'
  },

  notes: 'Tanglewood TW133-ASM Mahogany Parlor Acoustic Guitar. Further details to be added.',

  financials: {
    acquisition: {
      amount: null,
      currency: 'EUR',
      approximate: true,
      personalSpend: true,
      note: 'Purchase price currently unknown'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '2010',
      type: 'Acquisition',
      title: 'Purchased',
      description: 'Tanglewood TW133-ASM Mahogany Parlor Acoustic Guitar. Further purchase details to be added.',
      cost: null,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

// ============================================================
// MICROPHONES
// ============================================================

{
  id: 'shure-520dx',

  kind: 'microphones',

  brand: 'Shure',

  model: '520DX Green Bullet',

  status: 'Owned',

  modified: false,

  acquired: '8 Aug 2023',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 122,
    currency: 'EUR',
    approximate: false
  },

  financials: {
    acquisition: {
      amount: 122,
      currency: 'EUR',
      personalSpend: true,
      retailer: 'Amazon'
    },

    accessories: {
      amount: 26,
      currency: 'EUR',
      note: 'Ammo Clip microphone holder'
    },

    knownSpend: {
      amount: 148,
      currency: 'EUR'
    }
  },

  accessories: [
    {
      item: 'Ammo Clip microphone holder',
      description: 'Holder used to attach the microphone to a microphone stand.',
      cost: 26,
      currency: 'EUR',
      date: '8 Aug 2023'
    }
  ],

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '8 Aug 2023',
      type: 'Accessory',
      title: 'Ammo Clip holder purchased',
      description: 'Microphone holder purchased for attaching the 520DX to a microphone stand.',
      cost: 26,
      currency: 'EUR'
    },

    {
      date: '8 Aug 2023',
      type: 'Acquisition',
      title: 'Purchased',
      description: 'Purchased from Amazon.',
      cost: 122,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'superlux-r102',

  kind: 'microphones',

  brand: 'Superlux',

  model: 'R102',

  status: 'Owned',

  modified: false,

  acquired: '1 Dec 2021',

  acquisitionType: 'Purchased as bundle',

  originalPrice: {
    amount: 169,
    currency: 'EUR',
    approximate: false
  },

  originalSpec: {
    Type: 'Ribbon microphone'
  },

  financials: {
    acquisition: {
      amount: 169,
      currency: 'EUR',
      personalSpend: true,
      retailer: 'Thomann',
      note: 'Bundle price including stand and cable'
    }
  },

  accessories: [
    {
      item: 'Millenium DS100',
      type: 'Microphone stand',
      cost: null,
      currency: 'EUR',
      note: 'Included in €169 bundle'
    },

    {
      item: 'Cordial CAM 9 BK',
      type: 'Microphone cable',
      cost: null,
      currency: 'EUR',
      note: 'Included in €169 bundle'
    }
  ],

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '1 Dec 2021',
      type: 'Acquisition',
      title: 'Purchased as recording bundle',
      description: 'Superlux R102 ribbon microphone purchased from Thomann as a €169 bundle with a Millenium DS100 stand and Cordial CAM 9 BK cable.',
      cost: 169,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

// ============================================================
// RECORDING
// ============================================================

{
  id: 'focusrite-scarlett-solo-3rd-gen',

  kind: 'recording',

  subtype: 'Audio interface',

  brand: 'Focusrite',

  model: 'Scarlett Solo 3rd Gen',

  status: 'Owned',

  modified: false,

  acquired: '1 Dec 2021',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: 105,
    currency: 'EUR',
    approximate: false
  },

  financials: {
    acquisition: {
      amount: 105,
      currency: 'EUR',
      personalSpend: true,
      retailer: 'Thomann'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  history: [
    {
      date: '1 Dec 2021',
      type: 'Acquisition',
      title: 'Purchased',
      description: 'Purchased from Thomann.',
      cost: 105,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

{
  id: 'boss-br-600',

  kind: 'recording',

  subtype: 'Digital multitrack recorder',

  brand: 'Boss',

  model: 'BR-600',

  status: 'Sold',

  modified: false,

  acquired: 'Date unknown',

  acquisitionType: 'Purchased',

  originalPrice: {
    amount: null,
    currency: 'EUR',
    approximate: true
  },

  financials: {
    acquisition: {
      amount: null,
      currency: 'EUR',
      approximate: true,
      personalSpend: true,
      note: 'Purchased from local music shop; exact date and price currently unknown'
    },

    sale: {
      amount: 110,
      currency: 'EUR',
      date: '11 Feb 2024'
    }
  },

  images: {
    cover: null,
    gallery: []
  },

  notes: 'Digital multitrack recorder purchased from the local music shop. Original purchase date and price currently unknown.',

  history: [
    {
      date: '11 Feb 2024',
      type: 'Sale',
      title: 'Sold',
      description: 'Boss BR-600 sold for €110.',
      cost: -110,
      currency: 'EUR'
    },

    {
      date: 'Date unknown',
      type: 'Acquisition',
      title: 'Purchased',
      description: 'Purchased from the local music shop. Exact purchase date and price are currently unknown.',
      cost: null,
      currency: 'EUR',
      personalSpend: true
    }
  ]
},

];