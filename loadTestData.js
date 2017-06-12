import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  db.collection('torches').insertMany([
    { id: 1, categoryName: 'Electric', torchName: 'Flash Light',
      description: `
LONG LASTING: Energy-efficient high-powered rechargeable flashlight is environment-friendly and cost-efficient. LED torch bulbs last more than 100,000 hours. 100% satisfaction and money-back guarantee.
5 LIGHT MODES: Adjustable focus flashlight range for different usage, stretching to adjust 5 Modes, high brightness; Medium brightness; low brightness; Strobe (intermittent flashing); SOS (emergency signal).
PORTABLE USE: Handheld flash light is small enough to fit into your pocket size, handbag, or car compartment, so you can take it wherever, whenever.
RECHARGEABLE：The tactical strobe flashlight is powered by 1pc 18650 Lithium-ion Battery with built-in protection (included) or 3pcs AAA Battery (not included). A bonus little keychain flashlight is included.
HIGH-POWER: Outlite tactical flashlight is made from air-craft Grade light aluminum and can withstand extremes of temperatures, from freezing to boiling. This waterproof flashlight is also made shock resistant.
      `,
      nameIds: [101, 102] },
    { id: 2, categoryName: 'Fire', torchName: 'Fire on a Stick',
      description: `
Literally just a stick on fire, the best kind of torch.
      `,
      nameIds: [] },
    { id: 3, categoryName: 'Gas Torch', torchName: 'Butane Gas Torch',
    description: `
PROFESSIONAL QUALITY CULINARY TORCH - Used in the finest restaurants. Ideal for caramelizing sugar atop creme brulee, glazing a baked ham, searing a steak, roasting bell peppers, melting cheese and toasting bread crumbs.
      `,
      nameIds: [103, 104, 105] },
    { id: 4, categoryName: 'LED', torchName: 'LED Flash Light',
    description: `
Super Bright 300 Lumens (Max Output) LED Producing An Intense Beam of Light up to 600 feet
      `,
      nameIds: [] }
  ]).then(response => {
    console.info('Torches', response.insertedCount);
    db.collection('names').insertMany([
      { id: 101, name: 'Mind Assembly', timestamp: new Date() },
      { id: 102, name: 'Brain Scaffold', timestamp: new Date() },
      { id: 103, name: 'Cash View', timestamp: new Date() },
      { id: 104, name: 'Currency Map', timestamp: new Date() },
      { id: 105, name: 'Cash Board', timestamp: new Date() },
      { id: 106, name: 'RootLib', timestamp: new Date() },
    ]).then(response => {
      console.info('Names', response.insertedCount);
      db.close();
    });
  });
});