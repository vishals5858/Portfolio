// Initialize Lucide icons
lucide.createIcons();

// Data
// Updated Programming Skills data with logos
const programmingSkills = [
   
    { 
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    { 
        name: 'R',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg'
    }
];

const toolsFrameworks = [
    { 
        name: 'MySQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'
    },
    { 
        name: 'Power BI',
        logo: 'https://cdn.worldvectorlogo.com/logos/power-bi-1.svg'
    },
    { 
        name: 'Tableau',
        logo: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg'
    },
    { 
        name: 'Excel',
        logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg'
    }
    

];
const projects = [
    {
        title: "Maharashtra Politics Analysis",
        points: [
            "Tools: Power BI | SQL | Advanced Excel",
            "Techniques: Voter Demographics, Trend Analysis",
            "Outcome: Predicted voter turnout with 85% accuracy",
            "Business Impact: Helped political parties target the right voter groups."
        ]
    },
    {
        title: "Zomato Sales Analytics",
        date: "Nov 2023",
        points: [
            "Techniques: Customer Segmentation, Revenue Optimization",
            "Outcome: Increased revenue by 20%",
            "Business Impact: Optimized delivery time and pricing strategy."
        ]
    },
    {
        title: " CRM Customer Churn Analysis ",
        date: "Aug 2024",
        points: [
            "Tools: Tableau | SQL | Excel",
            "Techniques: Churn Prediction, Customer Segmentation ",
            "Outcome: Improved retention by 20%",
            "Business Impact: Suggested loyalty programs for high-risk customers."
        ]
    },
    {
        title: "Bank Loan Risk Analysis",
        date: "April 2022",
        points: [
            "Tools: Power BI | SQL | Advanced Excel",
            "Techniques: Risk Assessment, Loan Default Prediction",
            "Outcome: Reduced loan default by 25%",
            "Business Impact: Faster loan processing with 35% automation."
        ]
    }
];

const certifications = [
    {
        title: "Master in Data Analytics ExcelR (2024)",
        issuer: "ExcelR (2024)",
        date: "July 2024"
        
        
    },
    {
        title: "NASSCOM Data Science Certification  ",
        issuer: "Future Skills Prime (2024)",
        date: "July 2024"
    
    }
    
];

const achievements = [
    
];
// Helper function to create elements with classes
function createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    return element;
}
function populateProgrammingSkills() {
    const container = document.getElementById('programming-skills');
    programmingSkills.forEach(skill => {
        const skillCard = createElement('div', 'skill-card card');
        skillCard.innerHTML = `
            <img 
                src="${skill.logo}" 
                alt="${skill.name} logo" 
                class="skill-logo"
                onerror="this.onerror=null; this.src='/placeholder-logo.png';"
            >
            <span class="skill-name">${skill.name}</span>
        `;
        container.appendChild(skillCard);
    });
}

// Updated function to populate Tools & Frameworks with logos
function populateToolsFrameworks() {
    const container = document.getElementById('tools-frameworks');
    toolsFrameworks.forEach(tool => {
        const toolCard = createElement('div', 'skill-card card');
        toolCard.innerHTML = `
            <img 
                src="${tool.logo}" 
                alt="${tool.name} logo" 
                class="skill-logo"
                onerror="this.onerror=null; this.src='/placeholder-logo.png';"
            >
            <span class="skill-name">${tool.name}</span>
        `;
        container.appendChild(toolCard);
    });
}


// Populate Projects
function populateProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectCard = createElement('div', 'project-card card');
        
        const header = createElement('div', 'project-header');
        header.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <span class="project-date">${project.date}</span>
        `;

        const pointsList = createElement('ul', 'project-points');
        project.points.forEach(point => {
            const listItem = createElement('li', 'project-point');
            listItem.innerHTML = `
                <div class="point-bullet"></div>
                <span>${point}</span>
            `;
            pointsList.appendChild(listItem);
        });

        projectCard.appendChild(header);
        projectCard.appendChild(pointsList);
        container.appendChild(projectCard);
    });
}

// Populate Certifications
function populateCertifications() {
    const container = document.getElementById('certifications-container');
    certifications.forEach(cert => {
        const certCard = createElement('div', 'certification-card card');
        certCard.innerHTML = `
            <div class="cert-header">
                <h3 class="cert-title">${cert.title}</h3>
                <span class="cert-date">${cert.date}</span>
            </div>
            <p class="cert-issuer">Issued by: ${cert.issuer}</p>
            ${cert.credentialLink ? `
                <a href="${cert.credentialLink}" target="_blank" rel="noopener noreferrer" class="cert-link">
                    View Credential
                    <i data-lucide="external-link" class="cert-link-icon"></i>
                </a>
            ` : ''}
        `;
        container.appendChild(certCard);
    });
    lucide.createIcons();
}

// Populate Achievements
function populateAchievements() {
    const container = document.getElementById('achievements-container');

    achievements.forEach(achievement => {
        // Create a card element
        const achievementCard = document.createElement('div');
        achievementCard.classList.add('achievement-card');

        // Populate the card's HTML content
        achievementCard.innerHTML = `
            <div class="achievement-image-container">
                <img 
                    src="${achievement.image}" 
                    alt="${achievement.title}" 
                    class="achievement-image"
                    onerror="this.onerror=null; this.src='/api/placeholder/400/300';"
                >
                <div class="achievement-overlay">
                    <h3 class="achievement-title">${achievement.title}</h3>
                    <p class="achievement-description">${achievement.description}</p>
                </div>
            </div>
            <div class="achievement-details">
                <span class="achievement-date">
                    <i data-lucide="calendar" class="achievement-icon"></i>
                    ${achievement.date}
                </span>
                <span class="achievement-organizer">
                    <i data-lucide="building" class="achievement-icon"></i>
                    ${achievement.organizer}
                </span>
                ${achievement.certificate ? `
                    <a href="${achievement.certificate}" class="achievement-certificate-link" target="_blank" rel="noopener noreferrer">
                        <i data-lucide="award" class="achievement-icon"></i>
                        View Certificate
                    </a>
                ` : ''}
            </div>
        `;

        // Append the card to the container
        container.appendChild(achievementCard);
    });

    // Reinitialize Lucide icons for the newly added content
    lucide.createIcons();
}

// Add scroll animation
function addScrollAnimation() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach(section => {
        section.classList.add('scroll-animation');
        observer.observe(section);
    });
}

// Add hover effects
function addHoverEffects() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize theme toggle
function initializeThemeToggle() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
}

// Handle mobile menu
function initializeMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateProgrammingSkills();
    populateToolsFrameworks();
    populateProjects();
    populateCertifications();
    populateAchievements();
    addScrollAnimation();
    addHoverEffects();
    initializeThemeToggle();
    initializeMobileMenu();
    
    // Reinitialize Lucide icons after dynamic content is added
    lucide.createIcons();
});

// Handle window resize events
window.addEventListener('resize', () => {
    // Add any responsive adjustments here if needed
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
