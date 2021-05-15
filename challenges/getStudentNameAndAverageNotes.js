/* 
  INSTRUCTIONS: 
  Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like 
  { name: "John", avgNote: 4 }. 
  If student has no notes (an empty array) then let's assume avgNote: 0.

  EXAMPLE: 
  [{ name: "John", notes: [3, 5, 4]}] ➞ [{ name: "John", avgNote: 4 }] 

*/

const getStudentNameAndAverageNotes = (arr) => {
  const result = [];
  const getAverage = (notesArr) => {
    return notesArr.length < 1
      ? 0
      : notesArr.reduce((acc, cur) => (acc += cur)) / notesArr.length;
  };

  for (const student of arr) {
    result.push({ name: student.name, avgNote: getAverage(student.notes) });
  }

  return result;
};

module.exports = getStudentNameAndAverageNotes;
