import './App.css'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'

function App() {
  return (
    <div className='mx-auto min-h-screen w-full max-w-[120rem] px-5 sm:px-8 md:px-12 lg:flex lg:justify-between lg:gap-16 lg:px-16 xl:gap-24 xl:px-24'>
      <LeftSection/>
      <RightSection/>
    </div>
  )
}

export default App
