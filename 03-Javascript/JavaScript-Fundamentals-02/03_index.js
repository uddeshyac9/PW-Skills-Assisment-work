const students = [
    {
        name: "Abhay",
        marks:64,
    },
    {
        name: "Harshul",
        marks:68,
    },
    {
        name: "Uddeshya",
        marks:94,
    },
    {
        name: "Satvik",
        marks:92,
    },

]

function checkResults(studentName) {
    const student = students.find(student => student.name === studentName);
    if (student) {
        if (student.marks > 90) {
          console.log(`Congratulations! ${studentName} cleared the exam with marks above 90.`);
        } else {
          console.log("Sorry, you did not clear the exam.");
        }
      } else {
        console.log("Student not found.");
      }
    }
checkResults("Uddeshya")
