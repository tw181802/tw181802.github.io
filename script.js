document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading time
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('portfolio-container').classList.remove('hidden');
            document.getElementById('portfolio-container').style.opacity = '1';
        }, 500); // Fade out duration
    }, 2000); // Adjust time as needed

    // Theme toggle
   document.getElementById('theme-toggle').addEventListener('click', () => {
        const body = document.body;
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            document.getElementById('theme-stylesheet').setAttribute('href', 'dark-mode.css');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            document.getElementById('theme-stylesheet').setAttribute('href', 'light-mode.css');
        }
    });

    // About Me section typing effect
    const aboutMeContent = `root@trentwilliams:~#: whoami
Welcome to my portfolio!
My name is Trent.
I'm a passionate cybersecurity expert and developer with experience in various technologies.
I love coding and solving complex problems.
Feel free to explore my projects and skills.`;

    let index = 0;
    const typingSpeed = 50; // Speed of typing effect

    function typeWriter() {
        if (index < aboutMeContent.length) {
            document.getElementById('about-me-content').textContent += aboutMeContent.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter();
});
