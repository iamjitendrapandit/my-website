import { useState, useEffect } from 'react';
import { Terminal, Code, Shield, Award, Mail, Linkedin, Globe, Github, ChevronRight, Send, MapPin, Phone } from 'lucide-react';

function App() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Jitendra Pandit — Cybersecurity Enthusiast & Offensive Security Learner.";
  const [showCursor, setShowCursor] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const skills = [
    'Kali Linux',
    'Linux',
    'Bash Scripting',
    'Offensive Security',
    'Network Security',
    'Penetration Testing',
    'VAPT',
    'Bug Bounty'
  ];

  const projects = [
    {
      title: 'Enterprise VAPT Project',
      description: 'Comprehensive Vulnerability Assessment and Penetration Testing for enterprise networks',
      tech: ['Nmap', 'Metasploit', 'Burp Suite'],
      link: '#'
    },
    {
      title: 'Penetration Testing Lab',
      description: 'Custom-built virtual lab environment for practicing offensive security techniques',
      tech: ['VirtualBox', 'Kali Linux', 'Docker'],
      link: '#'
    },
    {
      title: 'CTF Writeups Collection',
      description: 'Detailed writeups and walkthroughs for various Capture The Flag competitions',
      tech: ['Python', 'Cryptography', 'Web Exploitation'],
      link: '#'
    },
    {
      title: 'Network Security Scanner',
      description: 'Automated tool for identifying common network vulnerabilities and misconfigurations',
      tech: ['Python', 'Scapy', 'Nmap'],
      link: '#'
    }
  ];

  const certifications = [
    { name: 'TryHackMe', level: 'Active Learner', color: 'from-red-500 to-red-700' },
    { name: 'Hack The Box', level: 'Hacker', color: 'from-green-500 to-green-700' }
  ];

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:jiten.pandit60@gmail.com?subject=From ${formData.name}&body=${formData.message}`;
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 z-50"></div>

      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-green-500/20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-green-500" />
              <span className="text-xl font-bold text-green-500 font-mono">jitendra@security:~$</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-green-500 transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-green-500 transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-green-500 transition-colors">Projects</a>
              <a href="#certifications" className="text-gray-300 hover:text-green-500 transition-colors">Certifications</a>
              <a href="#contact" className="text-gray-300 hover:text-green-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-8 relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-green-500 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center animate-float">
                  <Shield className="w-24 h-24 text-green-500 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="mb-6 font-mono text-2xl sm:text-3xl md:text-4xl text-green-400 min-h-[3rem]">
              <span>{typedText}</span>
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </div>

            <p className="text-xl sm:text-2xl text-gray-300 mb-4 animate-fade-in">Final Year Computer Science Student</p>
            <p className="text-lg text-blue-400 mb-2 animate-fade-in animation-delay-200">VP — Cybersecurity Club</p>

            <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-400">
              <a href="#projects" className="group px-6 py-3 bg-green-500/10 border border-green-500 rounded-lg hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-500/50 transition-all flex items-center space-x-2 transform hover:scale-105">
                <Code className="w-5 h-5" />
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="group px-6 py-3 bg-blue-500/10 border border-blue-500 rounded-lg hover:bg-blue-500/20 hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center space-x-2 transform hover:scale-105">
                <Mail className="w-5 h-5" />
                <span>Get in Touch</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-2 font-mono flex items-center">
                <Terminal className="w-8 h-8 mr-3" />
                ./about_me
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-blue-500"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 border border-green-500/20 rounded-lg p-8 hover:border-green-500/50 transition-all">
                <h3 className="text-2xl font-bold text-blue-400 mb-4 font-mono">whoami</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a final-year Computer Science student with a deep passion for cybersecurity and offensive security.
                  As Vice President of my college's Cybersecurity Club, I lead initiatives to promote security awareness
                  and hands-on learning experiences.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  During my internship at Cipherstrix, I gained practical experience in vulnerability assessment,
                  penetration testing, and security auditing. I'm constantly expanding my skills through CTF challenges,
                  bug bounty programs, and self-directed learning on platforms like TryHackMe and Hack The Box.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My goal is to contribute to making the digital world more secure, one vulnerability at a time.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-blue-500/20 rounded-lg p-8 hover:border-blue-500/50 transition-all">
                <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">skills --list</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-black/50 border border-gray-700 rounded px-4 py-2 text-gray-300 hover:border-green-500 hover:text-green-400 transition-all cursor-default"
                    >
                      <span className="text-green-500 mr-2">›</span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto w-full">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-2 font-mono flex items-center">
                <Code className="w-8 h-8 mr-3" />
                ./projects
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-green-500"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                      {project.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto w-full">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-2 font-mono flex items-center">
                <Award className="w-8 h-8 mr-3" />
                ./certifications
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-blue-500"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/50 border border-gray-700 rounded-lg p-8 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition-all text-center transform hover:scale-105 hover:-translate-y-2"
                >
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">{cert.name}</h3>
                  <p className="text-gray-400">{cert.level}</p>
                </div>
              ))}

              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all text-center transform hover:scale-105 hover:-translate-y-2 group">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <iframe src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4174079" style={{border: 'none', width: '100%', height: '100%', borderRadius: '50%'}} title="TryHackMe Badge"></iframe>
                </div>
                <h3 className="text-xl font-bold text-orange-400 mb-2">TryHackMe Badge</h3>
                <p className="text-gray-400">Profile Badge</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto w-full">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-2 font-mono flex items-center justify-center">
                <Mail className="w-8 h-8 mr-3" />
                ./connect
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
            </div>

            <p className="text-xl text-gray-300 mb-12 text-center">
              Let's collaborate on making the digital world more secure
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-900/50 border border-green-500/20 rounded-lg p-8 hover:border-green-500/50 transition-all transform hover:scale-105 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-green-400 mb-6 font-mono">Send a Message</h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:shadow-lg focus:shadow-green-500/30 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:shadow-lg focus:shadow-green-500/30 transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleContactChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:shadow-lg focus:shadow-green-500/30 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-green-500/10 border border-green-500 rounded-lg hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-500/50 transition-all text-green-400 font-semibold flex items-center justify-center space-x-2 group transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </button>
                  {submitted && (
                    <p className="text-green-400 text-sm animate-pulse">Message sent successfully!</p>
                  )}
                </form>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900/50 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/50 transition-all transform hover:scale-105 hover:-translate-y-2">
                  <div className="flex items-center space-x-3 mb-3">
                    <Mail className="w-6 h-6 text-blue-500" />
                    <h4 className="text-lg font-bold text-blue-400 font-mono">Email</h4>
                  </div>
                  <a href="mailto:jiten.pandit60@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors break-all">
                    jiten.pandit60@gmail.com
                  </a>
                </div>

                <div className="bg-gray-900/50 border border-green-500/20 rounded-lg p-6 hover:border-green-500/50 transition-all transform hover:scale-105 hover:-translate-y-2">
                  <div className="flex items-center space-x-3 mb-3">
                    <Linkedin className="w-6 h-6 text-blue-500" />
                    <h4 className="text-lg font-bold text-green-400 font-mono">LinkedIn</h4>
                  </div>
                  <a href="https://www.linkedin.com/in/jitendra-pandit-6a177238a/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                    Jitendra Pandit
                  </a>
                </div>

                <div className="bg-gray-900/50 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:-translate-y-2">
                  <div className="flex items-center space-x-3 mb-3">
                    <Globe className="w-6 h-6 text-cyan-500" />
                    <h4 className="text-lg font-bold text-cyan-400 font-mono">Website</h4>
                  </div>
                  <a href="https://jitendrapandit.com.np" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    jitendrapandit.com.np
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-green-500/20 bg-black/80 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 font-mono">
            <span className="text-green-500">jitendra@security</span>:~$ © 2024 Jitendra Pandit. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">Designed for offensive security, built with passion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
