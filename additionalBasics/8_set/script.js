"use strict";

const arr = [1, 1, 2, 2, 4, 5, 6, 5];

const set = new Set(arr);

console.log(set); // {1, 2, 4, 5, 6}

const students = ["Alex", "Ann", "Mary", "Alex"];

const studentsSet = new Set(students);

console.log(studentsSet); // {'Alex', 'Ann', 'Mary'}

studentsSet.add("Ellie")
           .add("Mary");

console.log(studentsSet); //  {'Alex', 'Ann', 'Mary', 'Ellie'}


studentsSet.delete('Ellie');
console.log(studentsSet); //  {'Alex', 'Ann', 'Mary'}

console.log(studentsSet.has('Ellie')); // false

set.clear();
console.log(set); // Set(0) {size: 0}

console.log(studentsSet.size); 3

for (let value of studentsSet) console.log(value); // Alex Ann Mary

studentsSet.forEach((value, valueAgaing, studentsSet) => {
    console.log(value, valueAgaing); // Alex Alex ... Mary Mary
})

console.log(studentsSet.values()); // {'Alex', 'Ann', 'Mary'}

studentsSet.keys(); // обратная совместимость с map
console.log(studentsSet.keys()); //  {'Alex', 'Ann', 'Mary'}

console.log(studentsSet.entries()); // {'Alex' => 'Alex', 'Ann' => 'Ann', 'Mary' => 'Mary'}

function unique(arr) {
    return  Array.from(new Set(arr));
}

console.log(unique(students)); //  ['Alex', 'Ann', 'Mary'], [[Prototype]]: Array(0)