class Weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = 10;
    }

    getDamage(){
        return this.damage;
    }
}
module.exports = Weapon;