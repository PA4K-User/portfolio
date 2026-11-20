import { useEffect, useState } from "react";

const navs = [
  { title: "About me", sectionId: "About-section" },
  { title: "Skills", sectionId: "Skills-section" },
  { title: "Experience", sectionId: "Experience-section" },
]

// `solid`: true when sitting on the dark scrolled bar → always light text.
const Navbar = ({ solid = false }) => {
  const [active, setActive] = useState(navs[0].sectionId);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    navs.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav aria-label="Sections" className={`transition-colors ${solid ? "text-surface-fg" : "text-fg lg:text-surface-fg"}`}>
      <ul className="flex items-center gap-4 sm:gap-8 lg:gap-10">
        {navs.map(({ title, sectionId }) => {
          const isActive = active === sectionId;
          return (
            <li key={sectionId}>
              <button
                type="button"
                onClick={() => handleClick(sectionId)}
                aria-current={isActive ? "true" : undefined}
                className={`border-b-2 pb-1 font-heading text-[11px] font-semibold cursor-pointer transition-all sm:text-sm ${isActive ? "border-current" : "border-transparent opacity-75 hover:opacity-100"}`}
              >
                {title}
              </button>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            onClick={() => handleClick("Contact-section")}
            className="rounded-full bg-surface-fg px-3 py-1.5 font-heading text-[11px] font-bold uppercase text-fg shadow-tile cursor-pointer transition-colors hover:bg-tile sm:px-5 sm:py-2 sm:text-xs"
          >
            Contact me
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
