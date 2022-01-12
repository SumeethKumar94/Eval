
interface validationConfig {

    [property: string]: {
        [validationProperty: string]: string[];

    };

}


//global variable for interface
const validationObj: validationConfig = {}


function Required(target: any, name: string) {

    //target is pointing the constructor
    console.log(target);
    const className = target.constructor.name;
    // retrieving all properties name in an array
    validationObj[className] = {
        ...validationObj[className], [name]: ['required']  //... is a spread operator to append data
    };

    console.log(validationObj);
}




//7--create a function to implement validation
function validate(obj: any) {
    let validatorName = validationObj[obj.constructor.name];
    console.log(validatorName);

    //implement validation
    if (!validatorName) {
        return true;
    }


    let isValid = true;

    for (const prop in validatorName) {
        console.log(prop);
        for(const validator of validatorName[prop]){
            console.log(validator);

            //check condition
            switch(validator){
                case 'required':
                    isValid = isValid && !! obj[prop];
                break;

            }
        }
    }
    return isValid;
}




//1-- creating class
class Course {

    //property                  //property decorator component
    @Required
    title: string;
    pass:string;

  
    constructor(_title: string, _pass: string) {
        this.title = _title;
        this.pass = _pass;
    }

}


//2 --create a html page --demovalidation
//3--add addEvent Listener ('',event)=>method

const form = document.querySelector('lform')!;
form.addEventListener('submit', (event) => {

    event.preventDefault();

    //get all elements
    const titleEl = document.getElementById('uname') as HTMLInputElement;
    const passEl = document.getElementById('passw') as HTMLInputElement;


    //value from elements
    const title = titleEl.value;
    const pass = passEl.value;

    //create an object of course
    const courseObj = new Course(title,pass);


    //validate() 
    if (!validate(courseObj)) {           //isValid == false
        alert("input value are Not valid");
        return;
    }
    console.log(courseObj);


})






