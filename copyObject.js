function editObject(student) {
    let newStudent = Object.create(student);
    let frontend = {skill: 'BootStrap',level: 8};
    let backend = { skill: 'express', level: 9 };
    let database = { skill: 'SQL', level: 8 };
    let datascience = 'SQL';
    newStudent.skills.frontEnd.push(frontend);
    newStudent.skills.backEnd.push(backend);
    newStudent.skills.dataBase.push(database);
    newStudent.skills.dataScience.push(datascience);
    return newStudent;
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

editObject(student);
