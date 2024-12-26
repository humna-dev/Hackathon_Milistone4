document.addEventListener('DOMContentLoaded', function () {
    var generateBtn = document.getElementById('generate-btn');
    var generatedResume = document.getElementById('generated-resume');
    if (generateBtn && generatedResume) {
        generateBtn.addEventListener('click', function () {
            console.log("Button clicked"); // Debugging
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var degree = document.getElementById('degree').value;
            var institution = document.getElementById('institution').value;
            var graduationDate = document.getElementById('graduation-date').value;
            var jobTitle = document.getElementById('job-title').value;
            var company = document.getElementById('company').value;
            var duration = document.getElementById('duration').value;
            var description = document.getElementById('description').value;
            var skills = document.getElementById('skills-text').value;
            console.log("Resume data:", name, email, phone, degree, institution, graduationDate, jobTitle, company, duration, description, skills); // Debugging
            generatedResume.innerHTML = "\n                <h2>".concat(name, "</h2>\n                <section>\n                    <h3>Personal Information</h3>\n                    <p>Email: ").concat(email, "</p>\n                    <p>Phone: ").concat(phone, "</p>\n                </section>\n                <section>\n                    <h3>Education</h3>\n                    <p>Degree: ").concat(degree, "</p>\n                    <p>Institution: ").concat(institution, "</p>\n                    <p>Graduation Date: ").concat(graduationDate, "</p>\n                </section>\n                <section>\n                    <h3>Work Experience</h3>\n                    <p>Job Title: ").concat(jobTitle, "</p>\n                    <p>Company: ").concat(company, "</p>\n                    <p>Duration: ").concat(duration, "</p>\n                    <p>Description: ").concat(description, "</p>\n                </section>\n                <section>\n                    <h3>Skills</h3>\n                    <p>").concat(skills, "</p>\n                </section>\n            ");
        });
    }
    else {
        console.error('Button or Resume container not found');
    }
});
