const Fighter = require("./src/Fighter.js");
const Shield = require("./src/Shield.js");
const Weapon = require("./src/Weapon.js");

const Gladius = new Weapon("Gladius", 10);
const Aspis = new Shield("Aspis", 5);

const heracles = new Fighter("🧔 Heracles", 20, 6);
heracles.equipWeapon(Gladius);
heracles.equipShield(Aspis);

const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);


const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};


const score = (fighter1, fighter2) => {
  return fighter1.isAlive() ? {
    winner: fighter1,
    loser: fighter2,
  } : {
    winner: fighter2,
    loser: fighter1
  };
};

console.log(heracles.weapon);
console.log(heracles.shield);

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