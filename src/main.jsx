import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboutsection from './components/Aboutsection'
import Helpyou from './components/Helpyou'
import TeamSection from './components/Experts'
import Testimonials from './components/Testimonials'
import GrowSection from './components/Growsection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Aboutsection  />
    <Helpyou />
    <TeamSection />
    <Testimonials />
    <GrowSection />
    <Newsletter />
    <Footer />
  </StrictMode>,
)
