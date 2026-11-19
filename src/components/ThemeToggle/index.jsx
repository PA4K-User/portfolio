import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const getInitial = () => {
    try {
        const saved = localStorage.getItem("theme");
        if (saved === "light" || saved === "dark") return saved;
    } catch { /* storage unavailable */ }
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        const t = getInitial();
        document.documentElement.dataset.theme = t;
        return t;
    });

    const toggle = () => {
        const next = theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        try { localStorage.setItem("theme", next); } catch { /* ignore */ }
        setTheme(next);
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-fg hover:border-fg cursor-pointer"
        >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
        </button>
    );
};

export default ThemeToggle;
