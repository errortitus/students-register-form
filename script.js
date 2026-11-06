const inputName = document.getElementById("inputName");
const inputAge = document.getElementById("inputAge");
const inputCourse = document.getElementById("inputCourse");
const inputEmail = document.getElementById("inputEmail");
const btnSave = document.getElementById("btnSave");
const studentList = document.getElementById("studentList");

// Function to delete pre-existing or hardcoded rows
function initialDelete(button) {
    button.closest("tr").remove();
}

btnSave.addEventListener("click", function () {
    // Basic validation to prevent adding empty fields
    if (!inputName.value || !inputAge.value || !inputEmail.value) {
        alert("Please fill out all fields!");
        return;
    }

    // Get the selected value from radio inputs safely
    const selectedGender = document.querySelector('input[name="gender"]:checked').value;

    var newStudent = document.createElement("tr");
    newStudent.innerHTML = `
        <td>${inputName.value}</td>
        <td>${inputAge.value}</td>
        <td>${inputCourse.value}</td>
        <td>${selectedGender}</td>
        <td>${inputEmail.value}</td>
        <td><button type="button" class="btnDel">Delete</button></td>
    `;
    
    studentList.appendChild(newStudent);

    // Attach event listener to the newly created row's delete button
    newStudent.querySelector(".btnDel").addEventListener("click", function () {
        newStudent.remove();
    });

    // Clear form inputs after saving
    inputName.value = "";
    inputAge.value = "";
    inputEmail.value = "";
    document.querySelector('input[name="gender"][value="Male"]').checked = true;
});