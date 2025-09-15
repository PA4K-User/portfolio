import ContentContainer from "../../components/ContentContainer";
import About from "../About";
import { data } from "../../contents/experience.js";
import Footer from "../Footer";

const RightSection = () => {
    return (
      <div className=" grid gap-y-12 px-5">
        <About/>
        <ContentContainer
          sectionTitle = "Experience"
          data = {data}
        /> 
        <Footer/>              
      </div>      
    )
}

export default RightSection;