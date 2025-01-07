import React from 'react';
import { Github, Linkedin, Mail, Moon, Code2, Briefcase, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Juan Desarrollador
          </h1>
          <p className="text-xl text-gray-400 mb-8">Frontend Developer & UI Designer</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8">
            <User className="text-blue-400 mr-2" />
            <h2 className="text-3xl font-bold">Sobre Mí</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Soy un desarrollador frontend apasionado por crear experiencias web hermosas y funcionales.
                Me especializo en React y disfruto transformando diseños en código limpio y eficiente.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors">
                Descargar CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8">
            <Code2 className="text-blue-400 mr-2" />
            <h2 className="text-3xl font-bold">Habilidades</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Git', 'Node.js', 'TypeScript'].map((skill) => (
              <div key={skill} className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
                <p className="text-lg font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8">
            <Briefcase className="text-blue-400 mr-2" />
            <h2 className="text-3xl font-bold">Proyectos</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
                <img
                  src={`https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Proyecto {project}</h3>
                  <p className="text-gray-400 mb-4">
                    Una breve descripción del proyecto y las tecnologías utilizadas.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                      Ver Demo
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                      Código
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Juan Desarrollador. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;