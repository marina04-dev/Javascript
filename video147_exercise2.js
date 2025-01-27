// Exercise 2: Function's Methods
let utils = {
    count: function(value) {
        let cnt = 0;
        for (let i=0; i<this.length; i++) {
            if (this[i]===value) {
                cnt++;
            }
        }
        return cnt;
    }
}

let data = {
    0: 1,
    1: 2,
    2: 1,
    length: 3
}

console.log(utils.count.call(data, 1));
