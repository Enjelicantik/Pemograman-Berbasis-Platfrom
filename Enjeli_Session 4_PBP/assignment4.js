let studentsScore = [
    {
        name: 'Andi',
        score: 90
    },
    {
        name: 'Rudi',
        score: 80
    },
    {
        name: 'Dira',
        score: 100
    },
]

let maxScore = 0;
let maxStudent = '';

for (let i = 0; i < studentsScore.length; i++) {
    if (studentsScore[i].score > maxScore) {
        maxScore = studentsScore[i].score;
        maxStudent = studentsScore[i].name;
    }
}

console.log(`The student with the highest score is ${maxStudent} with a score of ${maxScore}`);