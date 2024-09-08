var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayPhone = document.getElementById('display-phone');
var displayEducation = document.getElementById('display-education');
var displayExperience = document.getElementById('display-experience');
var displaySkills = document.getElementById('display-skills');
var downloadBtn = document.getElementById('download-btn');
// Handle form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Populate the resume with user data
    displayName.textContent = name;
    displayEmail.textContent = "Email: ".concat(email);
    displayPhone.textContent = "Phone: ".concat(phone);
    displayEducation.textContent = education;
    displayExperience.textContent = experience;
    displaySkills.textContent = skills;
    // Show the resume section
    resumeDisplay.classList.remove('hidden');
});
// Handle resume download
downloadBtn.addEventListener('click', function () {
    var resume = resumeDisplay.innerHTML;
    var blob = new Blob([resume], { type: 'text/html' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.html';
    link.click();
});
