function add (a, b) {
    return a + b;
}

// console.log(add(4, 5));

setTimeout(function(){ console.log('Xong') }, 1000);

function abcd (dk, func1, func2) {
    if(dk) {
        func1();
    }else {
        func2();
    }
}

const a = console.log;
a('Hello world');

function getTotal(n) {
    let total = 0
    for (let i = 0; i <= n; i++) {
        total = total + i;
    } 
    return total;   
}

console.log(getTotal(100));