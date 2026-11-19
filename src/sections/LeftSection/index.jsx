import Header from "../Header";
import Navbar from "../Navbar";
import Contact from "../Contact";
import ThemeToggle from "../../components/ThemeToggle";

const LeftSection = () => {
    return (
        <header className="py-10 sm:py-14 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[42%] lg:flex-col lg:justify-between lg:py-20">
            <div>
                <Header/>
                <Navbar/>
            </div>
            <div className="mt-8 flex items-center justify-between lg:mt-0">
                <Contact/>
                <ThemeToggle/>
            </div>
        </header>
    )
}

export default LeftSection;
