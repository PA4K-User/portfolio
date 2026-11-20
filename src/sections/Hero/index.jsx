import Header from "../Header";
import Contact from "../Contact";

// Figma "Hero" (1:3): grey left side with intro, black diagonal panel on the right (desktop).
// The logo + navbar live in the fixed <TopBar/>; the extra top padding leaves room for it.
const Hero = () => {
    return (
        <header id="top" className="relative overflow-hidden bg-hero">
            {/* Photo slot in the design — kept as a plain black panel until there is a picture */}
            <div
                aria-hidden="true"
                className="absolute inset-y-0 right-0 hidden w-[60%] bg-fg [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] lg:block"
            />

            <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 sm:pt-36 lg:px-16 lg:pb-40 lg:pt-56">
                <div className="lg:max-w-[42%]">
                    <Header />
                    <div className="mt-10 lg:mt-14">
                        <Contact />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero;
