const typingTexts = [
    "Web Developer",
    "Front-End Developer",
    "Back-End Developer",
    "Mobile Developer"
];
let textIndex = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");
let currentText = typingTexts[textIndex];
let typingSpeed = 100; // Speed of typing

function type() {
    typingElement.classList.add('cursor'); // Show the cursor

    if (charIndex < currentText.length) {
        typingElement.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(deleteText, 1000); // Wait 1 second before deleting
    }
}

function deleteText() {
    if (charIndex > 0) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, typingSpeed);
    } else {
        textIndex = (textIndex + 1) % typingTexts.length; // Move to the next text
        currentText = typingTexts[textIndex];
        typingElement.classList.remove('cursor'); // Hide the cursor when no text
        setTimeout(type, 500); // Wait before typing the next text
    }
}

// Start the typing effect
type();

// Function to change active link based on scroll position
function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3 && pageYOffset < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Add event listener for scrolling
window.addEventListener('scroll', updateActiveLink);

// Toggle navbar for mobile view
const toggleButton = document.getElementById('toggle-btn');
const navbar = document.getElementById('navbar');
const navLinks = navbar.querySelectorAll('ul li a'); // Select all navigation links

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle the active class on the navbar
});

// Add click event to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active'); // Remove active class when a link is clicked
    });
});

// Function to handle the navbar background change based on scroll
function handleNavbarBackground() {
    const header = document.querySelector('header');
    const homeSection = document.getElementById('home');
    const homeSectionHeight = homeSection.offsetHeight;

    if (window.pageYOffset > homeSectionHeight - 100) {
        header.classList.add('scrolled'); // Add solid background when scrolled
    } else {
        header.classList.remove('scrolled'); // Transparent background when in home section
    }
}

// Add event listener for scroll to change the navbar background
window.addEventListener('scroll', handleNavbarBackground);

// Trigger the background check on load in case the page starts scrolled
window.addEventListener('load', handleNavbarBackground);
// JavaScript to animate skill bars when the page is loaded
window.addEventListener('load', function() {
    // Select all elements with class "skill-level"
    var skillBars = document.querySelectorAll('.skill-level');
    
    // Iterate through each skill bar
    skillBars.forEach(function(skillBar) {
        // Get the percentage from the "data-percentage" attribute
        var percentage = skillBar.getAttribute('data-percentage');
        
        // Set the width to the percentage value after 500ms (for smooth loading effect)
        setTimeout(function() {
            skillBar.style.width = percentage;
        }, 500);
    });
});
// Animate the programming level bars on page load
window.addEventListener('load', function() {
    // Select all elements with class "programming-level"
    var programmingBars = document.querySelectorAll('.programming-level');
    
    // Iterate through each programming bar
    programmingBars.forEach(function(programmingBar) {
        // Get the percentage from the "data-percentage" attribute
        var percentage = programmingBar.getAttribute('data-percentage');
        
        // Set the width to the percentage value after a short delay
        setTimeout(function() {
            programmingBar.style.width = percentage;
        }, 500);
    });
});
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Wrap around if the index goes out of bounds
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Move the slides
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

// Show the first slide initially
showSlide(currentIndex);
// Select the sections
const portfolioSection = document.getElementById('portfolio');
const projectsSection = document.getElementById('projects');
const familySection = document.getElementById('family'); // Select the family section
const friendsSection = document.getElementById('friends'); // Select the friends section

// Create an observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add active class when the section is in view
            entry.target.classList.add('active');
        } else {
            // Remove active class when not in view (optional)
            entry.target.classList.remove('active');
        }
    });
}, { threshold: 0.1 }); // Trigger when 10% of the section is visible

// Start observing the sections
observer.observe(portfolioSection);
observer.observe(projectsSection);
observer.observe(familySection); // Observe the family section
observer.observe(friendsSection); // Observe the friends section
