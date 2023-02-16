const submissions = [
    {name: "Jane", score: 95, date: "2020-01-24", passed: true},
    {name: "Joe", score: 77, date: "2018-05-14", passed: true},
    {name: "Jack", score: 59, date: "2019-07-05", passed: false},
    {name: "Jill", score: 88, date: "2020-04-22", passed: true}
];

// //2 ............ lost
// const addSubmission = (array, newName, newScore, newDate) => {
//     const newSubmission = { //object
//         name: newName,
//         score: newScore,
//         date: newDate,
//         passed: newScore >= 60
// }
// array.push(newSubmission);
// //or array.push({name: newName,
// //         score: newScore,
// //         date: newDate,
// //         passed: newScore >= 60)
// // } to make it shorter
    

// //#3
// // const deleteSubmissionByIndex = (array, index) => {
// //     submissions.splice(array, index);
// //     //Matt is writing array.splice(index, 1)
// //     //deleteSubmissionsByIndex(submissions, 2) to remove Jack
// // } //IT WORKS!!!!

// // // deleteSubmissionByIndex(2, 1);
// // console.log(submissions); 

// //#4
// const deleteSubmissionByName = (array, name) => {
//     const index = array.findIndex(submission => submission.name === name);

//     console.log(index, 1);
// }
// deleteSubmissionByName(submissions, 'Jack');

// //#5
// const editSubmission = (array, index, score) => {
// array[index].score = score;
// array[index].passed = score >= 60;
// }

// //#6

// function findSubmissionByName(array, name) {

//     return submission = array.find(submission => submission.name === name);
// }
// const found = findSubmissionByName(submission, 'Jack');
// console.log(found);

// //#7
// const findLowestScore = (array) => {
//     array.forEach(submission => {
//         let lowest = array[0]; //looping through first score in loop, because it's the first one we are trying
//         if (submission.score < lowest.score) {
//             lowest = submission;
//         }
//     });
//     return lowest;
// }
// console.log(findLowestScore(submissions))

//#8
const findAverageScore = (array) => {
    for (let submission of array) {
        total = total + submission.score;

    }
    return total / array.length
}
console.log(findAverageScore(submissions));

//#9
const filterPassing = (array) => {
   return array.filter(submission => submission.passed === true);
}
console.log(filterPassing(submissions));
return array.filter(submission => submission.score >=90);
//#10
const filter90AndAbove = (array) => {

}