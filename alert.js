function getUserInfo() {
    let name = prompt("Enter your name:");
    while (!name) {
        alert("Name cannot be empty. Please enter your name.");
        name = prompt("Enter your name:");
    }

    let profession = prompt("Enter your profession:");
    while (!profession) {
        alert("Profession cannot be empty. Please enter your profession.");
        profession = prompt("Enter your profession:");
    }

    let photoUrl = prompt("Enter the URL of your profile picture:");
    while (!photoUrl) {
        alert("URL of your profile picture cannot be empty. Please enter a valid URL.");
        photoUrl = prompt("Enter the URL of your profile picture:");
    }

    let aboutMe = prompt("Tell us about yourself:");
    while (!aboutMe) {
        alert("About Me section cannot be empty. Please enter some details about yourself.");
        aboutMe = prompt("Tell us about yourself:");
    }

    let skills = prompt("Enter your skills (comma-separated):");
    while (!skills) {
        alert("Skills cannot be empty. Please enter at least one skill.");
        skills = prompt("Enter your skills (comma-separated):");
    }

    const bioData = {
        name: name,
        profession: profession,
        photoUrl: photoUrl,
        aboutMe: aboutMe,
        skills: skills.split(',').map(skill => skill.trim())
    };

    alert(`Name: ${bioData.name}\nProfession: ${bioData.profession}\nAbout Me: ${bioData.aboutMe}\nSkills: ${bioData.skills.join(', ')}`);
    console.log("User Bio:", bioData);
    
    displayBio(bioData);
}

function displayBio(bioData) {
    document.getElementById("bio").innerHTML = `
        <h2>${bioData.name}</h2>
        <h3>${bioData.profession}</h3>
        <img src="${bioData.photoUrl}" alt="Profile Picture">
    `;
    document.getElementById("about-me-text").textContent = bioData.aboutMe;
    
    const skillsList = document.getElementById("skills-list");
    skillsList.innerHTML = "";
    bioData.skills.forEach(skill => {
        let li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });
}

function updateBio() {
    getUserInfo();
}

getUserInfo();
