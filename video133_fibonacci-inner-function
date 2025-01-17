function fibonacci(n) {
    function rec(n) {
        if (n===0) {
            return 0;
        }
        else if (n===1) {
            return 1;
        }
        else {
            return rec(n-1)+rec(n-2);        
            
        }
    }
    if (Number.isNaN(n) || Number.isInteger(n) || n<0) {
        return undefined;
    }
    else {
        return rec(n);
    }
}
