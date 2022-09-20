
// You are making a mapping application. 

// Write an enum that defines the directions: 
// North, South, East, West

enum Direction {
	N = 'North',
	S = 'South',
	E = 'East', 
	W = 'West'
}

// Should having a heading property type Direction

class MapPosition {
	heading: Direction

	constructor(heading: Direction = Direction.E) {
		this.heading = heading
	}

	// takes a new Direction as an argument
	move(newDirection: Direction): void {
		// set the direction on your property 
		// Print the new direction
		this.heading = newDirection
		console.log(this.heading)
	}

	// Should return a string and print:
	// "you are heading <direction>"
	describe(): string {
		return `you are heading ${this.heading}`
	}
}

const location = new MapPosition()
console.log(location.describe())
// Might output:
// "You are heading north"
location.move(Direction.W)
console.log(location.describe())



export default MapPosition