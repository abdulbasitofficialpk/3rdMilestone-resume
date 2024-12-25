const form = document.getElementById("Resumeform") as HTMLFormElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;

form.addEventListener("submit", function (event: Event) {
    event.preventDefault(); 

    const name = (document.getElementById("nameID") as HTMLInputElement).value;
    const email = (document.getElementById("emailID") as HTMLInputElement).value;
    const phone = (document.getElementById("phoneID") as HTMLInputElement).value;
    const experience = (document.getElementById("experienceID") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skillsID") as HTMLTextAreaElement).value;

    const resumeContent = `
        <h2>${name}'s Resume</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Experience:</h3>
        <p>${experience}</p>
        <h3>Skills:</h3>
        <p>${skills}</p>
    `;

    resumeOutput.innerHTML = resumeContent;
});
