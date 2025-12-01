import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // --- DADOS DO PORTFÓLIO (Edite aqui) ---
  const personalInfo = {
    name: "Lucas Alves",
    role: "Desenvolvedor Full Stack",
    about: "Sou um estudante apaixonada por tecnologia e desenvolvimento web. Foco em criar experiências digitais rápidas, acessíveis e visualmente impactantes. Adoro resolver problemas complexos com código limpo.",
    email: "contato@seumail.com",
    github: "https://github.com/seuuser",
    linkedin: "https://linkedin.com/in/seuuser"
  };

  const skills = [
    "Next.js", "React", "JavaScript", "TypeScript", 
    "Node.js", "Tailwind CSS", "PostgreSQL", "Git"
  ];

  const projects = [
    {
      title: "Projeto 1",
      description: "Uma breve descrição do que esse projeto faz e as tecnologias usadas.",
      tech: ["Next.js", "Prisma"],
      link: "#"
    },
    {
      title: "Projeto 2",
      description: "Sistema de gestão criado para resolver problemas de produtividade.",
      tech: ["React", "Node.js"],
      link: "#"
    },
    {
      title: "Projeto 3",
      description: "Landing page de alta conversão com animações fluidas.",
      tech: ["HTML", "CSS", "JS"],
      link: "#"
    }
  ];

  // --- RENDERIZAÇÃO DA PÁGINA ---
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500 selection:text-cyan-900">
      
      {/* HEADER / NAV */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Portfólio.
          </h1>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="#about" className="hover:text-cyan-400 transition-colors">Sobre</Link>
            <Link href="#skills" className="hover:text-cyan-400 transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-cyan-400 transition-colors">Projetos</Link>
            <Link href="#contact" className="hover:text-cyan-400 transition-colors">Contato</Link>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-800 text-cyan-400 text-sm font-medium border border-slate-700">
            Disponível para novos projetos
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Olá, eu sou <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.about}
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link 
              href="#contact"
              className="px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all shadow-lg shadow-cyan-500/20"
            >
              Entre em contato
            </Link>
            <Link 
              href={personalInfo.github}
              target="_blank"
              className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-all"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-4">
            Tecnologias & Ferramentas
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="px-5 py-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-750 transition-all cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-12 border-l-4 border-cyan-500 pl-4">
            Projetos em Destaque
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/5"
              >
                {/* Placeholder para imagem do projeto */}
                <div className="h-48 bg-slate-800 flex items-center justify-center text-slate-600">
                  [Imagem do Projeto]
                </div>
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs text-cyan-300 bg-cyan-950/50 px-2 py-1 rounded border border-cyan-900">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-slate-900/50 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-3xl font-bold text-white">Vamos trabalhar juntos?</h3>
          <p className="text-slate-400">
            Estou sempre aberta a novas oportunidades e desafios. 
            Mande uma mensagem e vamos conversar sobre tecnologia!
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 px-8 py-4 bg-slate-800 rounded-xl hover:bg-slate-700 border border-slate-700 transition-all w-full md:w-auto justify-center"
            >
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span>{personalInfo.email}</span>
            </a>
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              className="flex items-center gap-3 px-8 py-4 bg-blue-900/20 rounded-xl hover:bg-blue-900/30 border border-blue-900/50 transition-all w-full md:w-auto justify-center"
            >
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900">
        <p>© {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}