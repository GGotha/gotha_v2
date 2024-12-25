
import { Hero } from '../components/Hero';
import { About } from '../components/About/About';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer/Footer';

export const HomePage = () => (
  <div className="bg-white min-h-screen">
    <Header />
    <main className="pt-16">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
);
