"use strict";
// You are making a mapping application. 
exports.__esModule = true;
// Write an enum that defines the directions: 
// North, South, East, West
var Direction;
(function (Direction) {
    Direction["N"] = "North";
    Direction["S"] = "South";
    Direction["E"] = "East";
    Direction["W"] = "West";
})(Direction || (Direction = {}));
// Should having a heading property type Direction
var MapPosition = /** @class */ (function () {
    function MapPosition(heading) {
        if (heading === void 0) { heading = Direction.E; }
        this.heading = heading;
    }
    // takes a new Direction as an argument
    MapPosition.prototype.move = function (newDirection) {
        // set the direction on your property 
        // Print the new direction
        this.heading = newDirection;
        console.log(this.heading);
    };
    // Should return a string and print:
    // "you are heading <direction>"
    MapPosition.prototype.describe = function () {
        return "you are heading ".concat(this.heading);
    };
    return MapPosition;
}());
var location = new MapPosition();
console.log(location.describe());
// Might output:
// "You are heading north"
location.move(Direction.W);
console.log(location.describe());
exports["default"] = MapPosition;
