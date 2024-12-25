var form = document.getElementById("Resumeform");
var resumeOutput = document.getElementById("resumeOutput");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("nameID").value;
    var email = document.getElementById("emailID").value;
    var phone = document.getElementById("phoneID").value;
    var experience = document.getElementById("experienceID").value;
    var skills = document.getElementById("skillsID").value;
    var resumeContent = "\n        <h2>".concat(name, "'s Resume</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Experience:</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills:</h3>\n        <p>").concat(skills, "</p>\n    ");
    resumeOutput.innerHTML = resumeContent;
});
