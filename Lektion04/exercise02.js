//Objectoriented programming
function Person (firstName, lastName, dob){ //constructor function
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
   /* this.getBirthYear = function(){
        return this.dob.getFullYear()
    }
    this.getFullName = function(){
        return this.firstName + " " + this.lastName 
        //return `${this.firstName} ${this.lastName}`
    }
    */
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear()
}
//instantiate object
const person1 = new Person('John','Doe', '4-6-1989')
const person2 = new Person('Adam','Wang', '4-5-1990')
console.log(person1.dob.toLocaleDateString())
console.log(person1.getBirthYear())
console.log(person2.getFullName())
console.log(person1)

//Class 
//works same as above
class Person2 {
    constructor (firstName, lastName, dob){ //constructor function
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }

    getBirthYear2(){
        return this.dob.getFullYear()
    }

    getFullName2(){
        turn `${this.firstName} ${this.lastName}`
    }
}