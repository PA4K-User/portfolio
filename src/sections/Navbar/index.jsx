import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navs = [
  { title:"About", sectionId: "About-section"},
  { title:"Experience", sectionId: "Experience-section"},
]

const Navbar = () => {

  const handleClick = (sectionId) => {    
    document.getElementById(sectionId).scrollIntoView({behavior:"smooth"})
  }

    return (       
      <div className=' hidden lg:flex flex-col gap-3 font-semibold mt-7'>
        {
          navs.map((e, i) => (
            <div 
              key={`nav-${e}-${i}`}
              onClick={() => handleClick(e.sectionId)}
              className="text-gray-400 cursor-pointer hover:text-white hover:scale-110 transition-all"
            >
              <FontAwesomeIcon className=' mr-2 text-primaryTitle' icon={faArrowRight}/>
              {e.title}
            </div>
          ))
        }                       
      </div>
        
    )
}

export default Navbar;