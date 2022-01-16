function convertArrayToObject(students) {
    let newArr = [];
    
    for (let i = 0; i < students.length; i++){
        let studentObject = {};
        studentObject.name = students[i][0];
        studentObject.skill = students[i][1];
        studentObject.scores = students[i][2];
        newArr.push(studentObject);
    }
    return newArr;
}

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

console.log(convertArrayToObject(students));
