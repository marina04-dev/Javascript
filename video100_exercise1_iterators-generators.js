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
    
    *[Symbol.iterator]() {
        yield this.x;
        yield this.y;
    }
}
