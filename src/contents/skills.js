// Tech stack from src/assets/Resume.pdf (Skills + Personal Projects).
// `logo` = brand mark from simple-icons; `icon` = generic FontAwesome icon for tech without an official logo.
import {
    siHtml5, siCss, siTailwindcss, siMui, siJavascript, siTypescript, siReact, siNextdotjs,
    siRedux, siNodedotjs, siExpress, siClaude, siGit, siGithub,
} from "simple-icons";
import {
    faPaw, faDatabase, faServer, faFileLines, faPlug, faTerminal, faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

export const data = {
    title: "Skills",
    groups: [
        {
            title: "Frontend",
            items: [
                { name: "HTML", logo: siHtml5 },
                { name: "CSS", logo: siCss },
                { name: "Tailwind", logo: siTailwindcss },
                { name: "MUI", logo: siMui },
                { name: "JavaScript", logo: siJavascript },
                { name: "TypeScript", logo: siTypescript },
                { name: "React", logo: siReact },
                { name: "Next.js", logo: siNextdotjs },
            ],
        },
        {
            title: "State Management",
            items: [
                { name: "Redux Toolkit", logo: siRedux },
                { name: "Zustand", icon: faPaw },
            ],
        },
        {
            title: "Backend & Data",
            items: [
                { name: "Node.js", logo: siNodedotjs },
                { name: "Express", logo: siExpress },
                { name: "SQL", icon: faDatabase },
                { name: "Oracle PL/SQL", icon: faServer },
                { name: "Jasper Report", icon: faFileLines },
            ],
        },
        {
            title: "AI & Tooling",
            items: [
                { name: "Claude Code", logo: siClaude },
                { name: "Codex", icon: faTerminal },
                { name: "OpenAI API", icon: faPlug },
                { name: "RAG", icon: faBookOpen },
                { name: "Git", logo: siGit },
                { name: "GitHub", logo: siGithub },
            ],
        },
    ],
};
