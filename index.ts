
// ---------------Problem-----------------------------------------
// Q:2 Write a program that takes the age of a person 
// as input and determines whether they are a child (0-12),
//teenager (13-19), adult (20-59) or senior citizen (60 years and above)

// To take input from user inquirer is imported

import inquirer from "inquirer";

// OnceMore function defined and called ask user to run program again.

async function onceMore():Promise<boolean>{
    const userOption=await inquirer.prompt([{
        name:"this",
        type:"string",
        message:"Do you Want to know the Group of another Person? if Yes enter 'y' or to exit fpress any other key."
    }])
    if (userOption.this=="y"){
        return true;
    }else{
        return false;
    }
}

console.log("This program tells user about the AGE GROUP of a person.")
console.log("User Inputs the Age of a Person, program reponds with Age Group")
do{
    var again:boolean=true;
    const person=await inquirer.prompt([{
        name:"age",
        type:"number",
        message:"Person's Age:"
    }]);
    // console.log(person.age);
    if (person.age<0){
        console.log("Age can't be a negative Number, Please enter a Valid Age")
        continue;
    }else{
        if (person.age >=0 && person.age<=12){
            console.log("This person blelongs to Child Group");
            again= await onceMore();
            
        }else if (person.age > 12 && person.age<=19){
            console.log("This person blelongs to Teenage Group")
            again=await onceMore();
            
        }else if (person.age >19 && person.age <=59){
            console.log("This person blelongs to Adult Group")
            again=await onceMore();
        }else if (person.age >=60){
            console.log("This person blelongs to Senior Citizen Group")
            again=await onceMore();
        }else{
            console.log("You have not entered a valid Number please enter a Number which is greater than zero.")
            again=await onceMore();

        }
    }

}while(again);
