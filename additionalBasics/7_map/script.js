"use strict";

const user = {
    name: "Elina",
    surname: "Soboleva",
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

console.log("'Name' type is " + typeof(Object.keys(user)[0])); // "string

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 1500, 2500];

const map = new Map(); 
const map2 = new Map([
    [{paper: 400}, 8000]
]); 

map.set(shops[0], 5000)
   .set(shops[1], 15000)
   .set(shops[2], 25000);

shops.forEach((shop, i) => {
    map2.set(shop, budget[i]);
})

console.log(map); //Map(3) {  {rice: 500} => 5000, ..., {bread: 50} => 25000}
console.log(map2); //Map(4) {  {paper: 400} => 8000, ..., {bread: 50} => 25000}

console.log(map.get(shops[0])); // 5000
console.log(map.has(shops[0])); // true

map.delete(shops[0]);
console.log(map.has(shops[0])); // false

map.clear();
console.log(map.size); // 0

console.log(map2.keys()); // MapIterator  {{…}, {…}, {…}, {…}}

const goods = [];

for (let shop of map2.keys()) {
    console.log(shop); // {paper: 400} ... {bread: 50} 
    goods.push(Object.keys(shop)[0]);
};

console.log(goods); // ['paper', ..., 'bread']

for (let price of map2.values()) {
    console.log(price); // 8000 ... 2500
} ;

for (let i of map2.entries()) {
    console.log(i); // [{paper: 400}, 8000] ... [{…}, 2500] 
}; 

for (let [shop, price] of map2.entries()) {
    console.log(price, shop); // 8000 {paper: 400} ... 2500 {bread: 50}
};

map2.forEach((value, key, map) => {
    console.log(key, value); // {paper: 400} 8000 ... {bread: 50} 2500
});

const userMap = new Map(Object.entries(user));
console.log(userMap); // Map(3) {'name' => 'Elina', 'surname' => 'Soboleva', 'showMyPublicData' => ƒ ()}

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj); // {name => 'Elina', surname => 'Soboleva', showMyPublicData => ƒ ()}