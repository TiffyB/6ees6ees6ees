class ForagerBee extends Bee {
  constructor(age, job) {
  	super(age, job)
  	this.age = 10
  	this.canFly = true
  	this.job = "find pollen"
  	this.treasureChest = []
  }
  forage(treasure) {
  	this.treasureChest.push(treasure);
  }
};
