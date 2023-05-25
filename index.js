const Fighter = require("./src/Fighter.js");
const Shield = require("./src/Shield.js");
const Weapon = require("./src/Weapon.js");

const sword = new Weapon("Excalibur ⚔️", 10);
const shield = new Shield("Shield 🛡️", 10);
const sword1 = new Weapon("",0);
const shield1 = new Shield("",0)

/** Create Heracles  */
const heracles = new Fighter("🧔 Heracles", 20, 6, sword, shield);

/** Create the opponent  */
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12,sword1,shield1);

/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive() ? {
    winner: fighter1,
    loser: fighter2,
  } : {
    winner: fighter2,
    loser: fighter1
  };
};

// Let's fight !!!
{
  let round = 0;

  while (heracles.isAlive() && boar.isAlive()) {
      console.log(`🕛 Round #${round}`);

      heracles.fight(boar);
      console.log(roundDisplay(heracles, boar));

      boar.fight(heracles);
      console.log(roundDisplay(boar, heracles));

      round++;
  }

  const result = score(heracles, boar);

  console.log(`💀 ${result.loser.name} is dead`);
  console.log(`🏆 ${result.winner.name} wins (💙 ${result.winner.life} )`);
}