function generateResume() {
    var data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        dob: document.getElementById('dob').value,
        address: document.getElementById('address').value,
        profilePicture: document.getElementById('profilePicture').files[0]
            ? URL.createObjectURL(document.getElementById('profilePicture').files[0])
            : '',
        school: document.getElementById('school').value,
        schoolYear: document.getElementById('schoolYear').value,
        college: document.getElementById('college').value,
        collegeYear: document.getElementById('collegeYear').value,
        university: document.getElementById('university').value,
        universityYear: document.getElementById('universityYear').value,
        languages: document.getElementById('languages').value.split(','),
        skills: document.getElementById('skills').value.split(','),
        experience: document.getElementById('experience').value,
    };
    var resumeOutput = "\n        <div class=\"resume-container\">\n            <div class=\"left-section\">\n                ".concat(data.profilePicture ? "<img src=\"".concat(data.profilePicture, "\" class=\"profile-picture\" />") : '', "\n                <h1 contenteditable=\"true\">").concat(data.name, "</h1>\n                <h3>Career Objective</h3>\n                <p contenteditable=\"true\">To secure an employment opportunity with a progressive organization...</p>\n                <h3>Certifications</h3>\n                <p contenteditable=\"true\">MS Office: From Faith Computer Institute</p>\n                <p contenteditable=\"true\">AI, Web 3.0 & Metaverse: From Governor House Karachi (Ongoing)</p>\n            </div>\n            <div class=\"right-section\">\n                <h3>Personal Information</h3>\n                <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(data.email, "</span></p>\n                <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(data.phone, "</span></p>\n                <p><strong>Date of Birth:</strong> <span contenteditable=\"true\">").concat(data.dob, "</span></p>\n                <p><strong>Address:</strong> <span contenteditable=\"true\">").concat(data.address, "</span></p>\n                \n                <h3>Education</h3>\n                <p contenteditable=\"true\">School: ").concat(data.school, " (").concat(data.schoolYear, ")</p>\n                <p contenteditable=\"true\">Intermediate: ").concat(data.college, " (").concat(data.collegeYear, ")</p>\n                <p contenteditable=\"true\">University: ").concat(data.university, " (").concat(data.universityYear, ")</p>\n                \n                <h3>Languages</h3>\n                <p contenteditable=\"true\">").concat(data.languages.join(', '), "</p>\n                \n                <h3>Skills</h3>\n                <p contenteditable=\"true\">").concat(data.skills.join(', '), "</p>\n                \n                <h3>Work Experience</h3>\n                <p contenteditable=\"true\">").concat(data.experience, "</p>\n            </div>\n        </div>\n    ");
    document.getElementById('resumeOutput').innerHTML = resumeOutput;
}
// Attach the event listener after DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    var generateButton = document.querySelector("button");
    generateButton.addEventListener("click", generateResume);
});
