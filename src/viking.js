class Soldier {
  constructor (health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack () {
    return this.strength
  };

  recieveDamage (damage) {
    this.health = this.health - damage;
  };  
}

class Viking extends Soldier {
  constructor (name, health, strength) {
    super (health, strength);    
    this.name = name;    
        
  }

  recieveDamage (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      console.log(`${this.name} has recieved ${damage} points of damage`)
    } else {
      console.log (`${this.name} has died in act of combat`)
    }
  }

  battleCry() {
    console.log('Odin owns you all!')
  }
}

class Saxon extends Soldier {
  constructor (health, strength) {
  super(health, strength)
}
    
  recieveDamage (damage) {
    this.health = this.health - damage;    
    if (this.health > 0) {
      console.log(`A Saxon has recieved ${damage} points of damage`)
    } else {
      console.log (`A Saxon has died in act of combat`)
    }
  }  
}

class War {
  constructor () {
  this.vikingArmy = [];
  this.saxonArmy = [];
  }
  
  addViking(viking) {
   this.vikingArmy.push(viking);    
  }

  addSaxon(Saxon) {
   this.saxonArmy.push(Saxon);    
  }

  vikingAttack() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    let randomViking = this.vikingArmy [randomVikingIndex];
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let randomSaxon = this.saxonArmy [randomSaxonIndex];
    let strengthOfViking = randomViking.strength
    
    let vikingAttackResult = randomSaxon.recieveDamage(strengthOfViking)    
    
    if(randomSaxon.health <= 0){
      this.saxonArmy.splice(randomSaxonIndex, 1)
    }
    return vikingAttackResult;
  }

    saxonAttack() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    let randomViking = this.vikingArmy [randomVikingIndex];
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let randomSaxon = this.saxonArmy [randomSaxonIndex];
    let strengthOfSaxon = randomSaxon.strength
    
      
    let saxonAttackResult = randomViking.recieveDamage(strengthOfSaxon)
    
      
      if(randomViking.health <= 0){
      this.vikingArmy.splice(randomVikingIndex, 1)
      }
      return saxonAttackResult;
    }
  
    showStatus() {
  if (this.saxonArmy.length === 0) {
    console.log ('Vikings have won the war of the century!')
  } else if (this.vikingArmy.length === 0) {
    console.log ('Saxons have fought for their lives and survived another day...')
  } else {
    console.log ('Vikings and Sanxons are still in the thick of battle')
  }
 }  
}

const ragnar = new Viking ('Ragnar', 100, 75)
const bjorn = new Viking ('Bjorn' , 90, 70)
const genericSaxon = new Saxon (80,50)

ragnar.battleCry()

const war1 = new War();
war1.addViking(ragnar);
war1.addViking(bjorn);
war1.addSaxon(genericSaxon)
war1.addSaxon(genericSaxon)
war1.saxonAttack()
war1.showStatus()
war1.saxonAttack()
war1.showStatus()
war1.vikingAttack()
war1.showStatus()
war1.saxonAttack()
war1.showStatus()
war1.vikingAttack()
war1.showStatus()
war1.saxonAttack()
war1.showStatus()

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
