function Skills() {
    const skills = ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'];
  
    return (
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Skills</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;
  