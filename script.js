function enrollStudent() {

    let studentId = document.getElementById("studentId").value;
    let fullName = document.getElementById("fullName").value;
    let course = document.getElementById("course").value;
    let semester = document.getElementById("semester").value;
    let requirement = document.getElementById("requirement");

    if(studentId == "" || fullName == "" || course == "" || semester == ""){
        alert("Please fill in all fields.");
        return;
    }

    let fileName = "No File";

    if(requirement.files.length > 0){
        fileName = requirement.files[0].name;
    }

    let table = document.getElementById("studentTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = studentId;
    row.insertCell(1).innerHTML = fullName;
    row.insertCell(2).innerHTML = course;
    row.insertCell(3).innerHTML = semester;
    row.insertCell(4).innerHTML = fileName;

    let action = row.insertCell(5);

    action.innerHTML =
    '<button class="deleteBtn" onclick="deleteStudent(this)">Delete</button>';

    document.getElementById("studentId").value = "";
    document.getElementById("fullName").value = "";
    document.getElementById("course").selectedIndex = 0;
    document.getElementById("semester").selectedIndex = 0;
    document.getElementById("requirement").value = "";

    alert("Student Enrolled Successfully!");
}

function deleteStudent(button){

    let row = button.parentNode.parentNode;

    row.parentNode.removeChild(row);

}