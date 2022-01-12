"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//global variable for interface
const validationObj = {};
function Required(target, name) {
    //target is pointing the constructor
    console.log(target);
    const className = target.constructor.name;
    // retrieving all properties name in an array
    validationObj[className] = Object.assign(Object.assign({}, validationObj[className]), { [name]: ['required'] //... is a spread operator to append data
     });
    console.log(validationObj);
}
//7--create a function to implement validation
function validate(obj) {
    let validatorName = validationObj[obj.constructor.name];
    console.log(validatorName);
    //implement validation
    if (!validatorName) {
        return true;
    }
    let isValid = true;
    for (const prop in validatorName) {
        console.log(prop);
        for (const validator of validatorName[prop]) {
            console.log(validator);
            //check condition
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                
            }
        }
    }
    return isValid;
}
//1-- creating class
class Login {
    constructor(_title, _pass) {
        this.title = _title;
        this.pass = _pass;
    }
}
__decorate([
    Required
], Login.prototype, "title", void 0);
//2 --create a html page --demovalidation
//3--add addEvent Listener ('',event)=>method
const form = document.getElementById('loginf');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const titleEl = document.getElementById('uname');
    const passEl = document.getElementById('passw');
    //value from elements
    var title = titleEl.value;
    var pass = passEl.value;
    //create an object of course
    const courseObj = new Login(title, pass);
    //validate() 
    if (!validate(courseObj)) { //isValid == false
        alert("input value are Not valid");
        console.log(courseObj);
        return;
    }
    else
    {
        if (title == "Sumeeth" && pass == "1234") {
            alert("You have successfully logged in.");
            window.open("dashboard.html");
        } else {
            const loginErrorMsg = document.getElementById("p");
            loginErrorMsg.innerHTML="Username Password Incorrect";
        }
    }
    
});

