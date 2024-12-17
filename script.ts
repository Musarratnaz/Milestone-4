// // Get the form and inputs
// const form = document.getElementById('resume-form') as HTMLFormElement;

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
document.getElementById("generateBtn")?.addEventListener("click", function () {
  const picture = (document.getElementById("picture") as HTMLInputElement)
    ?.files?.[0];
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLTextAreaElement)
    .value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;
  const experience = (
    document.getElementById("experience") as HTMLTextAreaElement
  ).value;

  let pictureURL = "";
  if (picture) {
    pictureURL = URL.createObjectURL(picture);
  }

  // Generate the resume content with slide-in animation
  const generatedResume = `
        <div class="resume-slide-left">
            <h2>${name}</h2>
            <img src="${pictureURL}" alt="Profile Picture" width="100" height="100"><br>
            <strong>Phone:</strong> ${phone}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Address:</strong> ${address}<br><br>
            <strong>Skills:</strong> <div id="skillsList">${skills}</div><br>
            <button id="addSkillBtn" class="button-hover">Add More Skills</button>
            <div id="additionalSkills"></div><br>
            <strong>Education:</strong> <div id="educationList">${education}</div><br>
            <button id="addEducationBtn" class="button-hover">Add More Education</button>
            <div id="additionalEducation"></div><br>
            <strong>Experience:</strong> <div id="experienceList">${experience}</div><br>
            <button id="addExperienceBtn" class="button-hover">Add More Experience</button>
            <div id="additionalExperience"></div><br>
        </div>
    `;

  // Insert generated resume into the DOM
  const resumeContainer = document.getElementById(
    "generatedResume"
  ) as HTMLElement;
  resumeContainer.innerHTML = generatedResume;
  resumeContainer.classList.add("slide-from-left"); // Add slide-in effect class

  // Add event listeners for dynamically added buttons
  addDynamicEventListeners();
});

// Function to handle dynamic event listeners for "Add More" buttons
function addDynamicEventListeners() {
  // Event Listener for Adding More Skills
  document
    .getElementById("addSkillBtn")
    ?.addEventListener("click", function () {
      const additionalSkillsDiv = document.getElementById(
        "additionalSkills"
      ) as HTMLElement;
      const newSkillInput = document.createElement("input");
      newSkillInput.type = "text";
      newSkillInput.placeholder = "Additional Skill";
      newSkillInput.classList.add("input-field");
      additionalSkillsDiv?.appendChild(newSkillInput);

      // Smoothly scroll to the new skill input field
      newSkillInput.scrollIntoView({ behavior: "smooth", block: "center" });

      newSkillInput.addEventListener("change", function () {
        const skillsList = document.getElementById("skillsList") as HTMLElement;
        if (skillsList) {
          skillsList.innerHTML += `<br>${newSkillInput.value}`;
        }
      });
    });

  // Event Listener for Adding More Education
  document
    .getElementById("addEducationBtn")
    ?.addEventListener("click", function () {
      const additionalEducationDiv = document.getElementById(
        "additionalEducation"
      ) as HTMLElement;
      const newEducationInput = document.createElement("textarea");
      newEducationInput.placeholder = "Additional Education";
      newEducationInput.classList.add("input-field");
      additionalEducationDiv?.appendChild(newEducationInput);

      // Smoothly scroll to the new education input field
      newEducationInput.scrollIntoView({ behavior: "smooth", block: "center" });

      newEducationInput.addEventListener("change", function () {
        const educationList = document.getElementById(
          "educationList"
        ) as HTMLElement;
        if (educationList) {
          educationList.innerHTML += `<br>${newEducationInput.value}`;
        }
      });
    });

  // Event Listener for Adding More Experience
  document
    .getElementById("addExperienceBtn")
    ?.addEventListener("click", function () {
      const additionalExperienceDiv = document.getElementById(
        "additionalExperience"
      ) as HTMLElement;
      const newExperienceInput = document.createElement("textarea");
      newExperienceInput.placeholder = "Additional Experience";
      newExperienceInput.classList.add("input-field");
      additionalExperienceDiv?.appendChild(newExperienceInput);

      // Smoothly scroll to the new experience input field
      newExperienceInput.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      newExperienceInput.addEventListener("change", function () {
        const experienceList = document.getElementById(
          "experienceList"
        ) as HTMLElement;
        if (experienceList) {
          experienceList.innerHTML += `<br>${newExperienceInput.value}`;
        }
      });
    });
}
