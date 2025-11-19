/**
 * Creature Class
 * 
 * A superclass for magical creatures with name and habitat.
 */

class Creature {
  constructor(name, habitat) {
    this.name = name
    this.habitat = habitat
  }
  describe() {
    return `${this.name} lives in the ${this.habitat}.`
  }
  sleep() {
    return `${this.name} falls asleep in the ${this.habitat}. 😴`
  }
}

/**
 * Dragon Class
 * 
 * A subclass of Creature that can breathe fire.
 */

class Dragon extends Creature {
  constructor(name, habitat, firePower) {
    super(name, habitat)
    this.firePower = firePower
  }
  specialMove() {
    return `${this.name} breathes fire with ${this.firePower} intensity! 🔥`
  }
}

/**
 * Unicorn Class
 * 
 * A subclass of Creature that can heal with sparkles.
 */

class Unicorn extends Creature {
  constructor(name, habitat, sparkleLevel) {
    super(name, habitat)
    this.sparkleLevel = sparkleLevel
  }
  specialMove() {
    return `${this.name} heals allies with a sparkle level of ${this.sparkleLevel}! ✨`
  }
}

// Export the classes for testing
module.exports = { Creature, Dragon, Unicorn };

