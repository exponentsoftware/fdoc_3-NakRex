//returns the length of the student object;
function objectLength(student) {
    let objLen = Object.keys(student).length;
    return objLen;
}

//returns the length of the skill object keys or values
function skillLength(student) {
    return Object.keys(student.skills).length;
}
//check if object include graphicsDesign property
function checkGraphicDesignProprty(student) {
    let graphicdesign = Object.keys(student).filter(element => element == 'graphicsDesign')
    if (graphicdesign.length > 0)
        return true;
        return false;
}
//iterate through student property
function keysOfObject(student) {
    let keys = Object.keys(student);
    return keys;
}

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

// console.log(objectLength(student))
// console.log(skillLength(student));
console.log(checkGraphicDesignProprty(student));