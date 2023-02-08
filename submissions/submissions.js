const submissions = [
    {name: "Jane", score: 95, date: "2020-01-24", passed: true},
    {name: "Joe", score: 77, date: "2018-05-14", passed: true},
    {name: "Jack", score: 59, date: "2019-07-05", passed: false},
    {name: "Jill", score: 88, date: "2020-04-22", passed: true}
];

//2 ............ lost
const addSubmission = (array, newName, newScore, newDate) => {
    const newSubmission = { //object
        name: newName,
        score: newScore,
        date: newDate,
        passed: true
    //     if (score >=60) {
    //     passed = true;
    // } else {
    //     passed = false;
    // }
}
}
    

//#3
const deleteSubmissionByIndex = (array, index) => {
    submissions.splice(array, index);
} //IT WORKS!!!!

// deleteSubmissionByIndex(2, 1);
console.log(submissions); 

//#4
const deleteSubmissionByName = (array, name) => {
    submissions.splice(array, name);
}

//#5
const editSubmission = (array, index, score) => {

}

//#6

function findSubmissionByName(array, name) {
    return array.find((item) => item.name === name)
    // for (let item of array) {
    //     if (item.name === name) {
    //         return item;
    //     }
    // }
}
console.log(findSubmissionByName(submissions, "Jill"));

//#7
const findLowestScore = (array) => {
    //will need a loop
}

//#8
const findAverageScore = (array) => {
    //for of loop
}

//#9
const filterPassing = (array) => {
    //might be doable
}

//#10
const filter90AndAbove = (array) => {

}