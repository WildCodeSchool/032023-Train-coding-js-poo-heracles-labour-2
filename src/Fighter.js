
const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.weapon = null;
        this.shield = null;
        this.life = MAX_LIFE;
    }

    fight(defender) {
        const attackPoints = this.getDamage();

        const damages = Math.max(attackPoints - (defender.dexterity + defender.getDefense(defender)), 0);

        defender.life = Math.max(defender.life - damages, 0);
    }

    equipWeapon(Weapon) {
        this.weapon = Weapon;}
    equipShield(Shield) {
        this.shield = Shield;}


    getDamage() {
        if (this.weapon === null) {
        return this.strength;
    }else {return this.getRandomInt(this.weapon.damage + this.strength);
    }
    }

    getDefense(defender) {
        if (defender.shield === null) {
            return 0;
        } else {
            return defender.shield.defense
        }
    }

    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }

    isAlive() {
        return this.life > 0;
    }
}

module.exports = Fighter;
