"use strict";

// Recursion

function pow(x, n) {
    let result = 1;

    for(let i=0; i < n; i++) {
        result *= x;
    }
    return result;
} 

console.log(pow(2, 2));

function pow1(x, n) {
    if( n === 1) {
        return x;
    } else {
        return x * pow1(x, n-1);
    }
} 

console.log(pow1(2, 2));

function factorial(x) {
    if (x==1) {
        return 1;
    } else {
        return x*factorial(x-1);
    }
}

console.log(factorial(5));

function fibanachi(x) {
    if(x==1 || x==2) {
        return 1;
    } else {
        return fibanachi(x-1) + fibanachi(x-2);
    }
}

console.log(fibanachi(2));

function akkerman(m, n) {
    if(m==0) {
        return n+1;
    }
    else if(m>0 & n==0) {
            return akkerman(m-1, 1)
        }
    else if(m>0 & n>0) {
        return(akkerman(m-1, akkerman(m, n-1)))
    }
}

console.log(akkerman(2, 2));

let ans = 0;

function sum(x) {
    if(x<10) {
        return ans+x;
    } else {
        ans += x%10;
        return sum(parseInt(x/10));
    }
}

console.log(sum(200));

let students = {
    js: [{ 
        name: "John",
        progress: 100
    }, {
        name: "Ivan",
        progress: 60
    }],

    html: {
        basic: [{ 
            name: "Peter",
            progress: 20
        }, {
        name: "Ann", 
        progress: 18
        }],

        pro: [{
        name: "Sam",
        progress: 10
        }]
    }
}

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        
        return total;
    }
}

const res = getTotalProgressByRecursion(students);
console.log(res[0]/res[1]);



function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }
    return total / students;
}


console.log(getTotalProgressByIteration(students));