document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Simulate sending the message (or send to a server via AJAX)
        alert("Your message has been sent successfully!");
        // Reset the form
        document.getElementById('contactForm').reset();
    } else {
        alert("Please fill in all fields.");
    }
});
function showProjectDetails(projectName) {
    let demoLink = '';
    let repoLink = '';
    let imageUrl = '';
    
    if (projectName === 'weather') {
        demoLink = 'https://ayushi8544.github.io/weatherapp/';
        repoLink = 'https://github.com/your-username/weather-app';
        imageUrl = 'https://play-lh.googleusercontent.com/ASLF3Ze14IVg07ZFFnaj_q-1-94uFujM5oxKStt2sJIaDfUdshf2yHttlQ_2oTyv6Q';
    } else if (projectName === 'todo') {
        demoLink = 'https://your-todo-app-demo-link.com';
        repoLink = 'https://github.com/your-username/todo-list';
        imageUrl = 'https://i.ytimg.com/vi/G0jO8kUrg-I/sddefault.jpg';
    }

    // Display project details in a modal
    const modalContent = `
        <div class="modal-overlay">
            <div class="modal">
                <h2>Project: ${projectName}</h2>
                <img src="${imageUrl}" alt="${projectName}" width="300" height="200">
                <p><strong>Live Demo:</strong> <a href="${demoLink}" target="_blank">${demoLink}</a></p>
                <p><strong>Repo Link:</strong> <a href="${repoLink}" target="_blank">${repoLink}</a></p>
                <button class="close-modal">Close</button>
            </div>
        </div>
    `;

    // Insert modal content into the body
    document.body.insertAdjacentHTML('beforeend', modalContent);

    // Add close functionality
    document.querySelector('.close-modal').addEventListener('click', function() {
        document.querySelector('.modal-overlay').remove();
    });
}
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

function downloadAndOpen() {
    // Google Drive direct download link
    const resumeDownloadUrl = "https://drive.google.com/uc?export=download&id=1pFpoig5O61RJhRChzUCYZ2hN3G_i3eQ1"; // Use your file ID
    
    // Open the resume link in a new tab
    window.open("https://drive.google.com/file/d/1pFpoig5O61RJhRChzUCYZ2hN3G_i3eQ1/view?usp=sharing", "_blank");

    // Create a dynamic link to download the resume
    const link = document.createElement('a');
    link.href = resumeDownloadUrl;  // Direct download URL
    link.download = "Resume.pdf"; // Optional: Change the filename as needed
    
    // Append the link to the body, trigger a click to start the download, and remove it after the click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
}

