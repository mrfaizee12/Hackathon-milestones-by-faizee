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
    var resumeOutput = "\n        <div class=\"resume-container\">\n            <div class=\"left-section\">\n                ".concat(data.profilePicture ? "<img src=\"".concat(data.profilePicture, "\" class=\"profile-picture\" />") : '', "\n                <h1>").concat(data.name, "</h1>\n                <h3>Career Objective</h3>\n                <p>To secure an employment opportunity with a progressive organization...</p>\n                <h3>Certifications</h3>\n                <p>MS Office: From Faith Computer Institute</p>\n                <p>AI, Web 3.0 & Metaverse: From Governor House Karachi (Ongoing)</p>\n            </div>\n            <div class=\"right-section\">\n                <h3>Personal Information</h3>\n                <p><strong>Email:</strong> ").concat(data.email, "</p>\n                <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n                <p><strong>Date of Birth:</strong> ").concat(data.dob, "</p>\n                <p><strong>Address:</strong> ").concat(data.address, "</p>\n                \n                <h3>Education</h3>\n                <p>School: ").concat(data.school, " (").concat(data.schoolYear, ")</p>\n                <p>Intermediate: ").concat(data.college, " (").concat(data.collegeYear, ")</p>\n                <p>University: ").concat(data.university, " (").concat(data.universityYear, ")</p>\n                \n                <h3>Languages</h3>\n                <p>").concat(data.languages.join(', '), "</p>\n                \n                <h3>Skills</h3>\n                <p>").concat(data.skills.join(', '), "</p>\n                \n                <h3>Work Experience</h3>\n                <p>").concat(data.experience, "</p>\n            </div>\n        </div>\n    ");
    document.getElementById('resumeOutput').innerHTML = resumeOutput;
}
