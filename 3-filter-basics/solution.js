const grades = [5, 1, 1.3, 3.7, 1.7, 2.1, 2.4, 4.1, 6];

// Your code below
const gradesLowerThan3 = grades.filter((grade) => {
  return grade < 3;
});

console.log(gradesLowerThan3);

const gradesHigherThan3 = grades.filter((grade) => {
  return grade >= 3;
});

console.log(gradesHigherThan3);
