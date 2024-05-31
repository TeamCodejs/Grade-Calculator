function calculateGrade() {
    const marksInput = document.getElementById("marks");
    const marks = parseFloat(marksInput.value);

    if (isNaN(marks) || marks < 0) {
        alert("Enter positive marks");
        return;
    }

    let grade;

    if (marks >= 25) {
        grade = "A";
    } else if (marks >= 19) {
        grade = "B";
    } else if (marks >= 15) {
        grade = "C";
    } else if (marks >= 9) {
        grade = "D";
    } else {
        grade = "F";
    }

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Your grade is: ${grade}`;
}