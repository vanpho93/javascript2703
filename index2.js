const a = 100;
const b = 'Khoa Pham';

// console.log(typeof a);
// console.log(typeof b);

const arr = [1, '5', 3, 5, 4, 3];

console.log('MANG:', arr.join(', '));

console.log(arr.indexOf(3));

// arr.unshift(1000);
// console.log('MANG:', arr.join(', '));
arr.splice(3, 0, 'Khoa Pham', 'React Native');
console.log('MANG:', arr.join(', '));

