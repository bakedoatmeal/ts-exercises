// We need a Kaiju class
// All Kaiju have name, power and type. 
// Type can be: lizard, flying, or ape. 

enum KaijuType { 
	lizard, 
	flying,
	ape
}

class Kaiju {
	name: string
	power: string
	type: KaijuType

	constructor(name: string, power: string, type: KaijuType) {
		this.name = name
		this.power = power
		this.type =	type
	}	

}

export {
	Kaiju, 
	KaijuType
}
