class Circle {
    #c;
    #metric;
    constructor(c,metric) {
        this.#c = c;
        this.#metric = metric;
    }
    
    get c() {
        return this.#c;
    }
    
    set c(val) {
        this.#c = val;
    }
    
    get perimeterCm() {
        if (this.metric === "cm") {
            return 2*Math.PI * this.#c
        }
        else {
            return 2*Math.PI * Circle.inToCm(this.#c);
        }
    }
    
    get perimeterIn() {
        if (this.metric === "in") {
            return 2*Math.PI * this.#c
        }
        else {
            return 2*Math.PI * Circle.cmToIn(this.#c);
        }
    }
    
    static inToCm(inches) {
        return inches*2.54;
    }
    
    static cmToIn(cm) {
        return cm/2.54;
    }
}

let circle = new Circle(1,"cm");
console.log(circle.perimeterCm, circle.perimeterIn)
circle.c = 2;
console.log(circle.perimeterCm, circle.perimeterIn)
