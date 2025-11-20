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



class WritingUtensil {
  #sentences = []
  constructor(color, permanence, lineThickness) {
    this.color = color,
      this.permanence = permanence,
      this.lineThickness = lineThickness
  }
  write(sentence) {
    if (this.permanence) {
      this.#sentences.push(sentence)
      return `You wrote ${sentence} in a ${this.lineThickness} permanent ${this.color}`
    } else {
      this.#sentences.push(sentence)
      return `You wrote ${sentence} in a ${this.lineThickness} ${this.color}`
    }
  }
  erase(sentence) {
    if (this.permanence) {
      console.log(`You can't erase permanent ink?`)
    } else {
      if (this.#sentences.includes(sentence)) {
        this.#sentences.splice(this.#sentences.indexOf(sentence), 1)
      } else {
        console.log(`You never wrote this sentence?`);
      }
    }
  }
  get getSentences() {
    return [...this.#sentences]
  }
}

class Pen extends WritingUtensil {
  #sentences = [];
  constructor(color, permanence, lineThickness) {
    super(color, permanence, lineThickness)
    this.uses = 10;
  }
  write() {
    this.uses -= 1;
    return `${super.write()} pen.`;
  }
}