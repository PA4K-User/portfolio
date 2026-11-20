import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { data } from "../../contents/header";

const initials = data.name.split(" ").map((w) => w[0]).join("");

// Fixed top bar. Transparent over the hero; turns into the dark
// "Navbar after scroll" bar (Figma 1:891) once the page has scrolled.
const TopBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-surface shadow-tile" : "bg-transparent"}`}>
            {/* scrolled height (h-14) must match scroll-padding-top in index.css */}
            <div className={`mx-auto flex max-w-7xl items-center justify-center gap-6 px-5 transition-all duration-300 sm:justify-between sm:px-8 lg:px-16 ${scrolled ? "h-14" : "h-20 lg:h-28"}`}>
                <a
                    href="#top"
                    aria-label="Back to top"
                    className={`hidden font-display text-2xl font-extrabold tracking-tight transition-colors sm:block lg:text-3xl ${scrolled ? "text-surface-fg" : "text-fg"}`}
                >
                    {initials}
                </a>
                <Navbar solid={scrolled} />
            </div>
        </div>
    )
}

export default TopBar;
