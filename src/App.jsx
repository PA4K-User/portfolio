import './App.css'
import TopBar from './sections/TopBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import ContactForm from './sections/ContactForm'
import Footer from './sections/Footer'
import ContentContainer from './components/ContentContainer'
import { data } from './contents/experience.js'

function App() {
  return (
    <>
      <TopBar/>
      <Hero/>
      <main>
        {/* one shared glow behind both light sections, so there is no seam between them */}
        <div className="bg-glow">
          <About/>
          <Skills/>
        </div>
        <ContentContainer
          sectionTitle="Experience"
          data={data}
        />
        <ContactForm/>
      </main>
      <Footer/>
    </>
  )
}

export default App
