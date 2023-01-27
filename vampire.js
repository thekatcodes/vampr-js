class Vampire {
	constructor(name, yearConverted) {
		this.name = name;
		this.yearConverted = yearConverted;
		this.offspring = [];
		this.creator = null;
	}

	/** Simple tree methods **/

	// Adds the vampire as an offspring of this vampire
	addOffspring(vampire) {
		this.offspring.push(vampire);
		vampire.creator = this;
	}

	// Returns the total number of vampires created by that vampire
	get numberOfOffspring() {
		return this.offspring.length;
	}

	// Returns the number of vampires away from the original vampire this vampire is
	get numberOfVampiresFromOriginal() {
		let numberOfVamp = 0;
		let currentVamp = this;

		while (currentVamp.creator) {
			currentVamp = currentVamp.creator;
			numberOfVamp++;
		}
		return numberOfVamp;
	}

	// Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
	isMoreSeniorThan(vampire) {
		if (
			this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal
		) {
			return true;
		} else {
			return false;
		}
	}

	/** Stretch **/

	// Returns the closest common ancestor of two vampires.
	// The closest common anscestor should be the more senior vampire if a direct ancestor is used.
	// For example:
	// * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
	// * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
	closestCommonAncestor(vampire) {}
}

//root
const original = new Vampire("Original", 1200);

const bart = new Vampire("Bart", 1250);
const ansel = new Vampire("Ansel", 1250);

const elgort = new Vampire("Elgort", 1300);
const sarah = new Vampire("Sarah", 1300);

const andrew = new Vampire("Andrew", 1400);

//add offspring
original.addOffspring(bart);
original.addOffspring(ansel);
ansel.addOffspring(elgort);
ansel.addOffspring(sarah);
elgort.addOffspring(andrew);

module.exports = Vampire;
