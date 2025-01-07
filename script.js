document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    const addProjectBtn = document.getElementById('add-project');
    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const projectForm = document.getElementById('project-form');

    // Load projects from localStorage
    const loadProjects = () => {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        projectsContainer.innerHTML = '';
        projects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsContainer.appendChild(projectCard);
        });
    };

    // Create project card
    const createProjectCard = (project) => {
        const card = document.createElement('div');
        card.className = 'project-card fade-in';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.demo}" class="btn-link" target="_blank">Ver Demo</a>
                    <a href="${project.code}" class="btn-link" target="_blank">Código</a>
                </div>
            </div>
        `;
        return card;
    };

    // Show modal
    addProjectBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close modal
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        projectForm.reset();
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            projectForm.reset();
        }
    });

    // Handle form submission
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newProject = {
            title: document.getElementById('project-title').value,
            description: document.getElementById('project-description').value,
            image: document.getElementById('project-image').value,
            demo: document.getElementById('project-demo').value,
            code: document.getElementById('project-code').value
        };

        // Save to localStorage
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        projects.push(newProject);
        localStorage.setItem('projects', JSON.stringify(projects));

        // Add to DOM
        const projectCard = createProjectCard(newProject);
        projectsContainer.appendChild(projectCard);

        // Close modal and reset form
        modal.style.display = 'none';
        projectForm.reset();
    });

    // Initial load
    loadProjects();
});