import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import ProjectSection from '../components/ProjectSection';
import Footer from '../components/Footer';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <Box sx={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <Navbar />

      <main>
        <Hero />
        <Marquee />

        <Box id="about">
          <About />
        </Box>

        <Box id="work">
          {projects.map((project, index) => (
            <ProjectSection key={project.id} project={project} index={index} />
          ))}
        </Box>
      </main>

      <Footer />
    </Box>
  );
}