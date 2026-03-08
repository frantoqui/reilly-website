import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import ProjectSection from '../components/ProjectSection';
import SocialMediaSection from '../components/SocialMediaSection';
import WebpagesSection from '../components/WebpagesSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
import { projects } from '../data/projects';
import { socialPosts, webpages, newsletters } from '../data/socialPosts';

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

        <SocialMediaSection posts={socialPosts} />
        <WebpagesSection pages={webpages} />
        <NewsletterSection newsletters={newsletters} />
      </main>

      <Footer />
    </Box>
  );
}