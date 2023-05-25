const Fighter = require("./src/Fighter.js");
const Weapon = require("./src/Weapon.js");
const Shield = require("./src/Shield.js");

/** Create Heracles  */
const heracles = new Fighter("🧔 Heracles", 20, 6);
const sword = new Weapon("Epée", 10);
const shield = new Shield(10);
heracles.weapon = sword;
heracles.shield = shield;

/** Create the opponent  */
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

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
function fight(fighter1, fighter2) {
  {
    let round = 0;

    while (fighter1.isAlive() && fighter2.isAlive()) {
      console.log(`🕛 Round #${round}`);

      fighter1.fight(fighter2);
      console.log(roundDisplay(fighter1, fighter2));

      fighter2.fight(fighter1);
      console.log(roundDisplay(fighter2, fighter1));

      round++;
    }

    const result = score(fighter1, fighter2);

    console.log(`💀 ${result.loser.name} is dead`);
    console.log(`🏆 ${result.winner.name} wins (💙 ${result.winner.life} )`);
    return result.winner;
  }

}

const scoring = {
  heraclesWins: 0,
  boarWins: 0
}
for (let i = 0; i < 10; i++) {
  const heracles = new Fighter("🧔 Heracles", 20, 6);
  const sword = new Weapon("Epée", 10);
  const shield = new Shield(10);
  heracles.weapon = sword;
  heracles.shield = shield;

  /** Create the opponent  */
  const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

  let res = fight(heracles, boar);
  if (res.name === heracles.name) {
    scoring.heraclesWins++;
  } else {
    scoring.boarWins++;
  }
}

console.log(scoring);