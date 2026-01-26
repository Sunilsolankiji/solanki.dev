import Header from './components/header';
import Hero from './components/sections/hero';
import About from './components/sections/about';
import Projects from './components/sections/projects';
import Skills from './components/sections/skills';
import Contact from './components/sections/contact';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 w-100">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
