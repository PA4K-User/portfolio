import ContentContainer from "../../components/ContentContainer";
import About from "../About";
import { data } from "../../contents/experience.js";
import Footer from "../Footer";

const RightSection = () => {
    return (
      <main className="flex flex-col gap-14 pb-10 sm:gap-16 sm:pb-14 lg:w-[58%] lg:gap-20 lg:py-20">
        <About/>
        <ContentContainer
          sectionTitle="Experience"
          data={data}
        />
        <Footer/>
      </main>
    )
}

export default RightSection;
