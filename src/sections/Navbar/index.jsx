import { useEffect, useState } from "react";

const navs = [
  { title: "About", sectionId: "About-section" },
  { title: "Experience", sectionId: "Experience-section" },
]

const Navbar = () => {
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
    <nav aria-label="Sections" className="mt-14 hidden lg:block">
      <ul className="flex flex-col gap-4">
        {navs.map(({ title, sectionId }) => {
          const isActive = active === sectionId;
          return (
            <li key={sectionId}>
              <button
                type="button"
                onClick={() => handleClick(sectionId)}
                aria-current={isActive ? "true" : undefined}
                className={`group flex items-center gap-4 text-xs font-semibold uppercase tracking-widest cursor-pointer transition-colors ${isActive ? "text-fg" : "text-muted hover:text-fg"}`}
              >
                <span className={`h-px transition-all ${isActive ? "w-16 bg-fg" : "w-8 bg-muted group-hover:w-16 group-hover:bg-fg"}`} />
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default Navbar;
