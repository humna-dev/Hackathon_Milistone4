document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;
    const generatedResume = document.getElementById('generated-resume') as HTMLDivElement;

    if (generateBtn && generatedResume) {
        generateBtn.addEventListener('click', () => {
            console.log("Button clicked");  // Debugging
            const name = (document.getElementById('name') as HTMLInputElement).value;
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const phone = (document.getElementById('phone') as HTMLInputElement).value;
            const degree = (document.getElementById('degree') as HTMLInputElement).value;
            const institution = (document.getElementById('institution') as HTMLInputElement).value;
            const graduationDate = (document.getElementById('graduation-date') as HTMLInputElement).value;
            const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
            const company = (document.getElementById('company') as HTMLInputElement).value;
            const duration = (document.getElementById('duration') as HTMLInputElement).value;
            const description = (document.getElementById('description') as HTMLTextAreaElement).value;
            const skills = (document.getElementById('skills-text') as HTMLTextAreaElement).value;

            console.log("Resume data:", name, email, phone, degree, institution, graduationDate, jobTitle, company, duration, description, skills);  // Debugging

            generatedResume.innerHTML = `
                <h2>${name}</h2>
                <section>
                    <h3>Personal Information</h3>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                </section>
                <section>
                    <h3>Education</h3>
                    <p>Degree: ${degree}</p>
                    <p>Institution: ${institution}</p>
                    <p>Graduation Date: ${graduationDate}</p>
                </section>
                <section>
                    <h3>Work Experience</h3>
                    <p>Job Title: ${jobTitle}</p>
                    <p>Company: ${company}</p>
                    <p>Duration: ${duration}</p>
                    <p>Description: ${description}</p>
                </section>
                <section>
                    <h3>Skills</h3>
                    <p>${skills}</p>
                </section>
            `;
        });
    } else {
        console.error('Button or Resume container not found');
    }
});
