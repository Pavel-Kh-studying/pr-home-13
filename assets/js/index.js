'use strict';

class User {
  constructor(name, surname) {
    this._name = name;
    this._surname = surname; 
  }

  get name() {
    return this._name;
  }
 
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
      return;
    }
    throw new TypeError('Argument is not a String');
  }

  get surname() {
    return this._surname;
  }
    
  set surname(surname) {
    if (typeof surname === 'string') {
      this._surname = surname;
      return;
    }
    throw new TypeError('Argument is not a String');
  }

  getFullName() {
    return `${this._name} ${this._surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this._year = year;
  }

  get year() {
    return this._year;
  }
 
  set year(year) {
    if (typeof year === 'number' && year <= new Date().getFullYear()) {
      this._year = year;
      return;
    }
    throw new TypeError('Argument is not a Number');
  }

  getCourse() {
    const course = new Date().getFullYear() - this._year;

    for (let i = 1; i <= 5; i++) {
      if (course === i) {
        return console.log(`Student is studying on ${i} course`);
      }
    }
    return console.log('Student is not studying'); 
  }
}

const q = new User('q', 'qqqq');
const w = new Student('e', 'eeee', 2019);