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
                <h1>${data.name}</h1>
                <h3>Career Objective</h3>
                <p>To secure an employment opportunity with a progressive organization...</p>
                <h3>Certifications</h3>
                <p>MS Office: From Faith Computer Institute</p>
                <p>AI, Web 3.0 & Metaverse: From Governor House Karachi (Ongoing)</p>
            </div>
            <div class="right-section">
                <h3>Personal Information</h3>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Date of Birth:</strong> ${data.dob}</p>
                <p><strong>Address:</strong> ${data.address}</p>
                
                <h3>Education</h3>
                <p>School: ${data.school} (${data.schoolYear})</p>
                <p>Intermediate: ${data.college} (${data.collegeYear})</p>
                <p>University: ${data.university} (${data.universityYear})</p>
                
                <h3>Languages</h3>
                <p>${data.languages.join(', ')}</p>
                
                <h3>Skills</h3>
                <p>${data.skills.join(', ')}</p>
                
                <h3>Work Experience</h3>
                <p>${data.experience}</p>
            </div>
        </div>
    `;

    document.getElementById('resumeOutput').innerHTML = resumeOutput;
}
