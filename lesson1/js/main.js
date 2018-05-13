// Первое задание
function loop(times, callback) {
    times = times || 0;
    callback = callback || null;
    
    if(callback) {
        for (let i = 0; i < times; i++) {
            callback();
        }
    }
}

function isCallback() {
    console.log('Loop function');
}

// loop(5, isCallback);

// Второе задание
function calculateArea(figure, paramArr) {
    let area;
    switch (figure) {
        case 'triangle':
            area = (paramArr[0] * paramArr[1]) / 2;
            break;
        case 'rectangle':
            area = paramArr[0] * paramArr[1];
            break;
        case 'circle':
            area = Math.floor(Math.PI * Math.pow(paramArr[0], 2));
            break;
    }
    return {
        area: area,
        figure: figure,
        input: paramArr
    };
}

// console.log(calculateArea('triangle', [4, 10]));
// console.log(calculateArea('rectangle', [5, 7]));
// console.log(calculateArea('circle', [8]));

// Третье задание
class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo() {
        return `${this.name} ${this.age} ${this.dateOfBirth}`;
    }
}

class Employee extends Human {
    constructor(salary, department, name, age, dateOfBirth) {
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }

    displayInfo() {
        return super.displayInfo() + ` ${this.salary} ${this.department}`;
    }
}

class Manager extends Employee {
    constructor(salary, department, name, age, dateOfBirth) {
        super(salary, department, name, age, dateOfBirth);
        this.developers = [];
    }

    addDeveloper(developer) {
        this.developers.push(developer);
    }

    removeDeveloper(position) {
        this.developers.splice(position, 1);
    }

    get develop() {
        return this.developers;
    }
}

class Developer extends Employee {
    constructor(salary, department, name, age, dateOfBirth) {
        super(salary, department, name, age, dateOfBirth);
    }
}

// Четвёртое задание
// -------------------------------

// Пятое задание
let dataArray = [];
let promises = [];
let resolveFunc = (i) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://jsonplaceholder.typicode.com/users/' + i, true);
    xhr.onreadystatechange = () => {if (xhr.readyState === 4 && xhr.status === 200) dataArray.push(xhr.responseText)};
    xhr.send();
};

let rejectFunc = () => {
    return false;
};

for (let i = 1; i <= 10; i++) {
    promises.push(new Promise((resolve, reject) => {
        resolve(i);
        reject();
    }).then(resolveFunc, rejectFunc));
}

Promise.all([promises]).then(() => {
    console.log(dataArray);
});