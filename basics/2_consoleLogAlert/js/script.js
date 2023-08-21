"use strict";

// Console.log and alert

alert('hello');

const res = confirm('Are you here?');
console.log(res)

const ans = +prompt('How old are you?', '18'); // dynamic typing
console.log(typeof(ans))

const ans2 = [];

ans2[0] = prompt('Name:', 'John');
ans2[1] = prompt('Surname:', 'Watson');
ans2[2] = +prompt('Age:', '40');

document.write(ans2);

const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';
alert(`Hello, ${user}`)