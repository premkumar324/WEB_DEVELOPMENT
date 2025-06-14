function Projects() {
    const projects = [
      { title: 'E-commerce Website', description: 'A fully responsive e-commerce web app.' },
      { title: 'Portfolio Website', description: 'A personal portfolio built with React and Tailwind.' },
      { title: 'Blog Platform', description: 'A blog platform with authentication and comments.' },
    ];
  
    return (
      <section id="projects" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  