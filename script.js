// // Get the form and inputs
// const form = document.getElementById('resume-form') as HTMLFormElement;
var _a;
// // Input fields for form
// const nameInput = document.getElementById('name') as HTMLInputElement;
// const emailInput = document.getElementById('email') as HTMLInputElement;
// const degreeInput = document.getElementById('degree') as HTMLInputElement;
// const schoolInput = document.getElementById('school') as HTMLInputElement;
// const gradYearInput = document.getElementById('grade-year') as HTMLInputElement;
// const workExperienceInput = document.getElementById('work-experience') as HTMLTextAreaElement;
// const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
// // Resume display fields
// const resumeName = document.getElementById('resume-name') as HTMLElement;
// const resumeEmail = document.getElementById('resume-email') as HTMLElement;
// const resumeDegree = document.getElementById('resume-degree') as HTMLElement;
// const resumeSchool = document.getElementById('resume-school') as HTMLElement;
// const resumeGradYear = document.getElementById('resume-grade-year') as HTMLElement;
// const resumeWorkExperience = document.getElementById('resume-work-experience') as HTMLElement;
// const resumeSkills = document.getElementById('resume-skills') as HTMLElement;
// // Generate resume button
// const generateResumeButton = document.getElementById('generate-resume') as HTMLButtonElement;
// // Event listener for the "Generate Resume" button
// generateResumeButton.addEventListener('click', () => {
//     // Update resume fields with user input
//     resumeName.textContent = nameInput.value || 'please provided your data  ';
//     resumeEmail.textContent = emailInput.value || 'Please provided your data';
//     resumeDegree.textContent = degreeInput.value || 'Please provided your data';
//     resumeSchool.textContent = schoolInput.value || 'Please provided your data';
//     resumeGradYear.textContent = gradYearInput.value || 'Please provided your data';
//     resumeWorkExperience.textContent = workExperienceInput.value || 'Please provided your data';
//     resumeSkills.textContent = skillsInput.value || 'Please provided your data';
//     // Show the resume section after the button click
//     document.getElementById('resume')!.style.display = 'block';
// });
// // Optional: Add input event listeners for real-time updating
// form.querySelectorAll('input, textarea').forEach((input) => {
//     input.addEventListener('input', () => {
//         generateResumeButton.click();
//     });
// });
// Function to handle generating the resume with slide-in effect
(_a = document.getElementById("generateBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a, _b;
    var picture = (_b = (_a = document.getElementById("picture")) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b[0];
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address")
        .value;
    var skills = document.getElementById("skills").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var pictureURL = "";
    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    }
    // Generate the resume content with slide-in animation
    var generatedResume = "\n        <div class=\"resume-slide-left\">\n            <h2>".concat(name, "</h2>\n            <img src=\"").concat(pictureURL, "\" alt=\"Profile Picture\" width=\"100\" height=\"100\"><br>\n            <strong>Phone:</strong> ").concat(phone, "<br>\n            <strong>Email:</strong> ").concat(email, "<br>\n            <strong>Address:</strong> ").concat(address, "<br><br>\n            <strong>Skills:</strong> <div id=\"skillsList\">").concat(skills, "</div><br>\n            <button id=\"addSkillBtn\" class=\"button-hover\">Add More Skills</button>\n            <div id=\"additionalSkills\"></div><br>\n            <strong>Education:</strong> <div id=\"educationList\">").concat(education, "</div><br>\n            <button id=\"addEducationBtn\" class=\"button-hover\">Add More Education</button>\n            <div id=\"additionalEducation\"></div><br>\n            <strong>Experience:</strong> <div id=\"experienceList\">").concat(experience, "</div><br>\n            <button id=\"addExperienceBtn\" class=\"button-hover\">Add More Experience</button>\n            <div id=\"additionalExperience\"></div><br>\n        </div>\n    ");
    // Insert generated resume into the DOM
    var resumeContainer = document.getElementById("generatedResume");
    resumeContainer.innerHTML = generatedResume;
    resumeContainer.classList.add("slide-from-left"); // Add slide-in effect class
    // Add event listeners for dynamically added buttons
    addDynamicEventListeners();
});
// Function to handle dynamic event listeners for "Add More" buttons
function addDynamicEventListeners() {
    var _a, _b, _c;
    // Event Listener for Adding More Skills
    (_a = document
        .getElementById("addSkillBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var additionalSkillsDiv = document.getElementById("additionalSkills");
        var newSkillInput = document.createElement("input");
        newSkillInput.type = "text";
        newSkillInput.placeholder = "Additional Skill";
        newSkillInput.classList.add("input-field");
        additionalSkillsDiv === null || additionalSkillsDiv === void 0 ? void 0 : additionalSkillsDiv.appendChild(newSkillInput);
        // Smoothly scroll to the new skill input field
        newSkillInput.scrollIntoView({ behavior: "smooth", block: "center" });
        newSkillInput.addEventListener("change", function () {
            var skillsList = document.getElementById("skillsList");
            if (skillsList) {
                skillsList.innerHTML += "<br>".concat(newSkillInput.value);
            }
        });
    });
    // Event Listener for Adding More Education
    (_b = document
        .getElementById("addEducationBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        var additionalEducationDiv = document.getElementById("additionalEducation");
        var newEducationInput = document.createElement("textarea");
        newEducationInput.placeholder = "Additional Education";
        newEducationInput.classList.add("input-field");
        additionalEducationDiv === null || additionalEducationDiv === void 0 ? void 0 : additionalEducationDiv.appendChild(newEducationInput);
        // Smoothly scroll to the new education input field
        newEducationInput.scrollIntoView({ behavior: "smooth", block: "center" });
        newEducationInput.addEventListener("change", function () {
            var educationList = document.getElementById("educationList");
            if (educationList) {
                educationList.innerHTML += "<br>".concat(newEducationInput.value);
            }
        });
    });
    // Event Listener for Adding More Experience
    (_c = document
        .getElementById("addExperienceBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
        var additionalExperienceDiv = document.getElementById("additionalExperience");
        var newExperienceInput = document.createElement("textarea");
        newExperienceInput.placeholder = "Additional Experience";
        newExperienceInput.classList.add("input-field");
        additionalExperienceDiv === null || additionalExperienceDiv === void 0 ? void 0 : additionalExperienceDiv.appendChild(newExperienceInput);
        // Smoothly scroll to the new experience input field
        newExperienceInput.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        newExperienceInput.addEventListener("change", function () {
            var experienceList = document.getElementById("experienceList");
            if (experienceList) {
                experienceList.innerHTML += "<br>".concat(newExperienceInput.value);
            }
        });
    });
}
