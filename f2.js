function add(x) {
    return function(a) {
        return x + a;
    };
}

const addWith10 = add(10);

// console.log(typeof addWith10);
console.log(addWith10(100));
