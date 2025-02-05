const dynamicSection = document.getElementById('dynamic-section');

const projects = [
    {
        title: "Customer Segmentation",
        images: ["17.png"],
        description: "This project transforms transactional data into a customer-centric dataset, applying K-Means for customer segmentation and Isolation Forest for outlier detection.",
        category: "Python",
        link: "https://github.com/SophieKhachatrian/Customer-Segmentation/blob/main/Customer%20Segmentation.ipynb"
    },
    {
        title: "Process Performance Dashboard",
        images: ["2.png"],
        description: "Monitors task progress, SLA adherence, and resolution efficiency. Key insights include task distribution, breach times, linked issues and revisited statuses to optimize workflow efficiency.",
        category: "Power BI",
        link: ""
    },
    {
        title: "Performance Dashboard",
        images: ["4.png"],
        description: "Monitors resolution times, issue delays, and task completion. Key insights include breached vs. achieved tasks, component distribution, and assignee performance to enhance support efficiency.",
        category: "Power BI",
        link: ""
    },
    {
        title: "YouTube Video Statistics ",
        images: ["11.jpeg"], 
        description: "The project aims to gain insights into the factors affecting a videos popularity and whether these aspects differ across videos. This understanding can enable content creators and YouTube channel owners to optimize their video content and enhance their performance on the platform.",
        category: "Python",
        link: "https://github.com/SophieKhachatrian/Python-Project-Youtube-Analysis/blob/main/Final_project.ipynb"
    },
    {
        title: "Sport App Creation & Analysis",
        images: ["12.jpg"],
        description: "A comprehensive dashboard for analyzing social media data, including sentiment distribution, engagement metrics, and trend analysis.",
        category: "SQL",
        link: "https://github.com/SophieKhachatrian/SQL-SportApp-Project"
    },
    {
        title: "E-Commerce Sales Analysis Dashboard",
        images: ["13.png"],
        description: "An insightful dashboard for analyzing e-commerce performance, including KPIs, customer segmentation, seasonal trends, and category-wise sales.",
        category: "R",
        link: "https://github.com/SophieKhachatrian/R-Project-Political-Events"
    },
    {
        title: "Team Sprint Dashboard",
        images: ["1.png"],
        description: "Tracks sprint tasks, issue distribution, priorities, and overdue sprints, providing insights for workflow optimization.",
        category: "Power BI",
        link: "" // Leave blank if no link
    },
    
    {
        title: "Monthly Sales Trends",
        images: ["5.png"],
        description: "Dashboard analyzing monthly sales trends, top-selling products, and revenue insights.",
        category: "Power BI",
        link: ""
    }
];

function renderPortfolio(filter = "All") {
    let filteredProjects = projects;
    if (filter !== "All") {
        filteredProjects = projects.filter(project => project.category === filter);
    }

    dynamicSection.innerHTML = `
        <h2>Portfolio</h2>
        <div class="filters">
            <button onclick="renderPortfolio('All')">All</button>
            <button onclick="renderPortfolio('Python')">Python</button>
            <button onclick="renderPortfolio('Power BI')">Power BI</button>
            <button onclick="renderPortfolio('SQL')">SQL</button>
            <button onclick="renderPortfolio('R')">R</button>
        </div>
        <div class="portfolio">
            ${filteredProjects
                .map(
                    (project, index) => `
                <div class="portfolio-item">
                    <div class="slider-container">
                        <div class="slider">
                            ${project.images
                                .map(
                                    image => `<img src="${image}" alt="${project.title}">`
                                )
                                .join("")}
                        </div>
                    </div>
                    <div class="content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="#" onclick="${
                            project.link
                                ? `window.open('${project.link}', '_blank')`
                                : `openModal(projects[${index}])`
                        }">View Project</a>
                    </div>
                </div>
            `
                )
                .join("")}
        </div>
    `;
}

function openModal(project) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTechnologies = document.getElementById('modal-technologies');
    const modalImage = document.getElementById('modal-image');

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalTechnologies.innerHTML = `<strong>Category:</strong> ${project.category}`;
    modalImage.innerHTML = project.images
        .map(image => `<img src="${image}" alt="${project.title}" style="max-width: 100%; height: auto;">`)
        .join("");

    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
}

// Show specific section
function showContent(section) {
    if (section === 'about') {
        dynamicSection.innerHTML = `
            <h2>About Me</h2>
            <div class="content">
    <p>
        Ever wondered what would happen if you gave your data a voice? Let me amplify it, decode its story, and unlock insights that could elevate your business.
    </p>
    <p>
        I’m Sofi Khachatryan, a dynamic blend of diverse skills and passions. I mix technical expertise with creative problem-solving, leadership with strategic thinking, and curiosity with a relentless drive to learn. I’m not just about crunching numbers—I transform data into a powerful tool that shapes decisions, drives growth, and inspires innovation.
    </p>
    <p>
        With a mindset that thrives on turning complexity into clarity, I approach every project with an eye for the big picture and the details. Whether it’s building interactive dashboards, leading a team, or planning future steps, I bring a unique perspective that connects the dots between data and meaningful action.
    </p>
    <p>
        I’m always growing, always exploring new ways to look at problems, and always ready to tackle the next challenge head-on. Ready to see what your data can truly do? Let’s make it happen.
    </p>
    <p>
        <strong>Explore my projects below and download my CV to see how I can bring value to your team.</strong>
    </p>
</div>
        `;
    } else if (section === 'resume') {
        dynamicSection.innerHTML = `
            <h2>Resume</h2>
            <div class="resume-section">
                <h3>Education</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <h4>American University of Armenia</h4>
                        <p>Major: Data Science, 2022-2026</p>
                    </div>
                </div>
                <h3>Experience</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <h4>Business Intelligence Analyst</h4>
                        <p>SoftConstruct, Yerevan, Armenia (August 2024 – Present)</p>
                        <ul>
                            <li>Managing data extraction, transformation, and integration, ensuring seamless system connections.</li>
                            <li>Developing and delivering interactive dashboards and reports, providing real-time insights for decision-making.</li>
                            <li>Researching and applying advanced analytics tools and methods to identify trends and optimize business performance.</li>
                            <li>Collaborating with cross-functional teams to define business metrics, ensuring alignment with organizational goals.</li>
                            <li>Writing detailed technical documentations to communicateacross team members</li>
                        </ul>
                    </div>
                    <div class="timeline-item">
                        <h4>AUA EPIC Resident, Startup Team Leader</h4>
                        <p>June 2023</p>
                        <ul>
                            <li>Led the development of an innovative educational platform, achieving market-product alignment, customer validation, and MVP creation.</li>
                        </ul>
                    </div>
                </div>
                <h3>Skills</h3>
                <div class="skills">
                    <div class="skill">
                        <span>Python</span>
                        <div class="skill-bar"><span style="width: 90%;"></span></div>
                    </div>
                    <div class="skill">
                        <span>SQL</span>
                        <div class="skill-bar"><span style="width: 95%;"></span></div>
                    </div>
                    <div class="skill">
                        <span>Power BI / Tableau</span>
                        <div class="skill-bar"><span style="width: 85%;"></span></div>
                    </div>
                    <div class="skill">
                        <span>R</span>
                        <div class="skill-bar"><span style="width: 70%;"></span></div>
                    </div>
                </div>
                <h3>Certifications</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <h4>Data Analyst Associate</h4>
                        <p>DataCamp, 2024</p>
                    </div>
                    <div class="timeline-item">
                        <h4>Machine Learning Specialization</h4>
                        <p>Coursera, Present</p>
                    </div>
                    <div class="timeline-item">
                        <h4>Data Analyst Bootcamp</h4>
                        <p>Alexander Freberg, 2023</p>
                    </div>
                    <div class="timeline-item">
                        <h4>SQL for Data Science</h4>
                        <p>GreatLearning Academy, 2023</p>
                    </div>
                </div>
            </div>
        `;
    } else if (section === 'portfolio') {
        renderPortfolio();
    }
}

showContent('about');
