/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - The This keyword will firstly bind/adhere to the window when in a browser, giving This a global context.
* 2. Implicit Binding - Implicit Binding occurs when dot notation is used to invoke a function. Whatever is to the left of the dot (when invoked) automatically becomes the context for This.
* 3. New Binding - Used with a constructor function (object creator). This refers to the moment when the object is created and returned.
* 4. Explicit Binding -  Occurs when .call(), .apply(), or .bind() are used on a function. You must explicitly pass in a This context.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const myFunction = function() {
    console.log(this);
}

myFunction() 

// Principle 2

// code example for Implicit Binding
const person = {
    name: "Austin",
    age: 27,
    location: "gym",
    workout: function() {
        return `${this.name} is ${this.age} years old and needs to workout at the ${this.location}`;
    }
}

//my .workout() method is invoked and person becomes the context for This (This is bound to my person object)
console.log(person.workout());


// Principle 3

// code example for New Binding

// constructor function below
function Country(food) {
    this.food = food;
    this.eat = function() {
        console.log(`This country likes to eat ${this.food}`);
    }
}

const america = new Country('pizza');
const asia = new Country('stir-fry');

// the new object is created and This is bound
america.eat();
asia.eat();


// Principle 4

// code example for Explicit Binding
const human = {
    name: "Austin"
}

const alien = {
    name: "Xenu"
}

const skills = ["eating","coding","sleeping"]

function introduce(skills) {
    return `Hi, my name is ${this.name} and these are my skills: ${skills}`;
}

//This is bound explicitly when .call() is used
console.log(introduce.call(human, skills));