const titleOfStory = "The Journey of Reflection: A Life Unveiled";

let fname = prompt("input your name:");

let gender = prompt("input your gender:");

let age = parseInt(prompt("input your age:")); 

let geographicalArea = prompt("input the geographical area:");

let nameOfWife = prompt("input name of wife:");

let numberOfSiblings = parseInt(prompt("input number of siblings:"));

let parentsName = prompt("input parents name:");

let favouriteFood = prompt("input favourite food:");

let numberOfChildren = parseInt(prompt("input number of children:"));

let placeOfWork = prompt("place of work:");

let positionAtWork = prompt("input position at work:");

let yearsOfExperience = parseInt(prompt("input years of experience:"));

let goalsInLife = prompt("input goals in life:");

let religion = prompt("input religion:");


function dynamicStory() { 

    let preface = ` My name is ${fname}. I am a ${gender}. I am ${age} years old. The title of my story is ${titleOfStory}. 
    
    `

    let story = ` Once upon a time, in ${geographicalArea}, there lived a  ${age} -year-old ${gender} named ${fname}. ${fname} was blessed with a loving wife named ${nameOfWife} 
    and had ${numberOfSiblings} siblings. ${parentsName} were proud parents, watching their child grow. 
    
    In their free time, ${fname} enjoyed savoring ${favouriteFood} and spending quality time with their ${numberOfChildren} children. At work, ${fname} held the position of ${positionAtWork} at ${placeOfWork}, bringing ${yearsOfExperience} years of expertise to their role. 
    
    With ambitious goals in life, driven by their ${religion} beliefs, ${fname} strived to make a positive impact in the world.` ;


    let fullStory = preface + story;

    let result = alert(fullStory);

    return result;


}


   dynamicStory();










