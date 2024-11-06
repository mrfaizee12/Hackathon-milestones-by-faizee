interface ResumeData {
    name: string;
    email: string;
    phone: string;
    dob: string;
    address: string;
    profilePicture: string;
    school: string;
    schoolYear: string;
    college: string;
    collegeYear: string;
    university: string;
    universityYear: string;
    languages: string[];
    skills: string[];
    experience: string;
}

function generateResume() {
    const data: ResumeData = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        phone: (document.getElementById('phone') as HTMLInputElement).value,
        dob: (document.getElementById('dob') as HTMLInputElement).value,
        address: (document.getElementById('address') as HTMLInputElement).value,
        profilePicture: (document.getElementById('profilePicture') as HTMLInputElement).files[0]
            ? URL.createObjectURL((document.getElementById('profilePicture') as HTMLInputElement).files[0])
            : '',
        school: (document.getElementById('school') as HTMLInputElement).value,
        schoolYear: (document.getElementById('schoolYear') as HTMLInputElement).value,
        college: (document.getElementById('college') as HTMLInputElement).value,
        collegeYear: (document.getElementById('collegeYear') as HTMLInputElement).value,
        university: (document.getElementById('university') as HTMLInputElement).value,
        universityYear: (document.getElementById('universityYear') as HTMLInputElement).value,
        languages: (document.getElementById('languages') as HTMLInputElement).value.split(','),
        skills: (document.getElementById('skills') as HTMLInputElement).value.split(','),
        experience: (document.getElementById('experience') as HTMLInputElement).value,
    };

    const resumeOutput = `
        <div class="resume-container">
            <div class="left-section">
                ${data.profilePicture ? `<img src="${data.profilePicture}" class="profile-picture" />` : ''}
                <h1 contenteditable="true">${data.name}</h1>
                <h3>Career Objective</h3>
                <p contenteditable="true">To secure an employment opportunity with a progressive organization...</p>
                <h3>Certifications</h3>
                <p contenteditable="true">MS Office: From Faith Computer Institute</p>
                <p contenteditable="true">AI, Web 3.0 & Metaverse: From Governor House Karachi (Ongoing)</p>
            </div>
            <div class="right-section">
                <h3>Personal Information</h3>
                <p><strong>Email:</strong> <span contenteditable="true">${data.email}</span></p>
                <p><strong>Phone:</strong> <span contenteditable="true">${data.phone}</span></p>
                <p><strong>Date of Birth:</strong> <span contenteditable="true">${data.dob}</span></p>
                <p><strong>Address:</strong> <span contenteditable="true">${data.address}</span></p>
                
                <h3>Education</h3>
                <p contenteditable="true">School: ${data.school} (${data.schoolYear})</p>
                <p contenteditable="true">Intermediate: ${data.college} (${data.collegeYear})</p>
                <p contenteditable="true">University: ${data.university} (${data.universityYear})</p>
                
                <h3>Languages</h3>
                <p contenteditable="true">${data.languages.join(', ')}</p>
                
                <h3>Skills</h3>
                <p contenteditable="true">${data.skills.join(', ')}</p>
                
                <h3>Work Experience</h3>
                <p contenteditable="true">${data.experience}</p>
            </div>
        </div>
    `;

    document.getElementById('resumeOutput').innerHTML = resumeOutput;
}

// Attach the event listener after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.querySelector("button") as HTMLButtonElement;
    generateButton.addEventListener("click", generateResume);
});
