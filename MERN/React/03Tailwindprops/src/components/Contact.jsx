function Contact() {
    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-6">Feel free to reach out for collaborations or just a friendly chat!</p>
          <a
            href="mailto:your.email@example.com"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700"
          >
            Contact Me
          </a>
        </div>
      </section>
    );
  }
  
  export default Contact;
  