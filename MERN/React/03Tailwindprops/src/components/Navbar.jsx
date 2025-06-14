import { useState } from 'react';

function Navbar({name }) {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">{name}</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <ul
          className={`lg:flex lg:items-center lg:gap-6 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
