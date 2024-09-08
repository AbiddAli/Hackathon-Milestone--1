const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

const displayName = document.getElementById('display-name') as HTMLHeadingElement;
const displayEmail = document.getElementById('display-email') as HTMLParagraphElement;
const displayPhone = document.getElementById('display-phone') as HTMLParagraphElement;
const displayEducation = document.getElementById('display-education') as HTMLParagraphElement;
const displayExperience = document.getElementById('display-experience') as HTMLParagraphElement;
const displaySkills = document.getElementById('display-skills') as HTMLParagraphElement;

const downloadBtn = document.getElementById('download-btn') as HTMLButtonElement;

// Handle form submission
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Populate the resume with user data
  displayName.textContent = name;
  displayEmail.textContent = `Email: ${email}`;
  displayPhone.textContent = `Phone: ${phone}`;
  displayEducation.textContent = education;
  displayExperience.textContent = experience;
  displaySkills.textContent = skills;

  // Show the resume section
  resumeDisplay.classList.remove('hidden');
});

// Handle resume download
downloadBtn.addEventListener('click', () => {
  const resume = resumeDisplay.innerHTML;
  const blob = new Blob([resume], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'resume.html';
  link.click();
});