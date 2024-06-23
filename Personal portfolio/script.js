// JavaScript for handling project details display

// Sample project data (you can replace this with your actual project details)
const projects = {
    project1: {
        name: "A study of Image Fusion Algorithms using Deep learning",
        description: "The purpose of this project is to select the optimal picture fusion method, which will aid in the application of effective image fusion methods in the medical industry.",
        imageUrl: "project1.jpg" // Replace with your image URL
    },
    project2: {
        name: "Unified Local Shops",
        description: "The project aims to bring together various local shops and businesses under one platform, making it easier for customers to find and purchase products/services from local establishments. Here we used Database to store the data and NodeJS for connectivity.",
        imageUrl: "project2.jpg" // Replace with your image URL
    },
    project3: {
        name: "Travel Buddy Robot using UI Path",
        description: "Users input their travel details, including the source, travel date, and email ID. The robot then autonomously searches for the corresponding flight information, extracts relevant data, and compiles it into an Excel file.",
        imageUrl: "project3.jpg" // Replace with your image URL
    }
};

function showProject(projectName) {
    const project = projects[projectName];

    if (project) {
        const projectDetails = document.getElementById("project-details");
        projectDetails.innerHTML = `
            <div class="project-details show">
                <h2>${project.name}</h2>
                <img src="${project.imageUrl}" alt="${project.name}" class="project-image">
                <p>${project.description}</p>
            </div>
        `;
    }
}