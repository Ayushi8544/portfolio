document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Your message has been sent successfully!");
        // You can add actual form submission logic here
    } else {
        alert("Please fill in all fields.");
    }
});

function showProjectDetails(projectName) {
    let demoLink = '';
    let repoLink = '';
    let imageUrl = '';
    
    if (projectName === 'weather') {
        demoLink = 'https://ayushi8544.github.io/weatherapp/'; // Replace with actual demo URL
        repoLink = 'https://github.com/your-username/weather-app'; // Replace with actual repo URL
        imageUrl = 'https://play-lh.googleusercontent.com/ASLF3Ze14IVg07ZFFnaj_q-1-94uFujM5oxKStt2sJIaDfUdshf2yHttlQ_2oTyv6Q'; // Replace with actual image URL
    } else if (projectName === 'todo') {
        demoLink = 'https://your-todo-app-demo-link.com'; // Replace with actual demo URL
        repoLink = 'https://github.com/your-username/todo-list'; // Replace with actual repo URL
        imageUrl = 'https://i.ytimg.com/vi/G0jO8kUrg-I/sddefault.jpg'; // Replace with actual image URL
    }

    // Display the project details (demo link, repo link, and image)
    alert(`Project: ${projectName}\n\nLive Demo: ${demoLink}\nRepo: ${repoLink}`);
    
    // Optionally, you could display the image on the page or in a modal
    let imageContainer = document.createElement('div');
    imageContainer.innerHTML = `<h3>Project Image:</h3><img src="${imageUrl}" alt="${projectName}" width="300" height="200">`;
    document.body.appendChild(imageContainer);
}