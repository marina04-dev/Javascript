// Point
class Point {
    #x;
    #y;
    
    constructor(x,y) {
        this.#x = x;
        this.#y = y;
    }
    
    get x() {
        return this.#x;
    }
    
    set x(value) {
        this.#x = value;
    }
    
    get y() {
        return this.#y;
    }
    
    set y(value) {
        this.#y = value;
    }
    
}

// Line
class Line {
    #pointA;
    #pointB;
    
    constructor(pointA,pointB) {
        this.#pointA = pointA;
        this.#pointB = pointB;
    }
    
    get pointA() {
        return this.#pointA;
    }
    
    set pointA(value) {
        this.#pointA = value;
    }
    
    get pointB() {
        return this.#pointB;
    }
    
    set pointB(value) {
        this.#pointB = value;
    }
    
    
    get length() {
        return Math.sqrt((this.pointA.x-this.pointB.x)**2 + (this.pointA.y-this.pointB.y)**2);
    }
}

let line = new Line(new Point(1,1), new Point(4,5));
console.log(line, line.length);
