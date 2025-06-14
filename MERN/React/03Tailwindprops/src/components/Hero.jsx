function Hero() {
    return (
      <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-5xl font-bold">Hello, I'm [Your Name]</h1>
        <p className="text-xl mt-4">A Passionate Developer Specializing in Full Stack Development</p>
        <a
          href="#contact"
          className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100"
        >
          Contact Me
        </a>
      </section>
    );
  }
  
  export default Hero;
  