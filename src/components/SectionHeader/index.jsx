// Boxed section title from Figma "Section Header" (1:892): thick black frame, wide tracking.
const SectionHeader = ({ title = "", tone = "dark" }) => {
    const toneClass = tone === "light" ? "border-surface-fg text-surface-fg" : "border-line text-fg";

    return (
        <h2 className={`mx-auto w-fit min-w-[14rem] border-[6px] px-8 py-4 text-center font-heading text-xl font-bold uppercase tracking-heading sm:min-w-[20rem] sm:text-2xl lg:border-8 lg:py-6 lg:text-3xl ${toneClass}`}>
            {/* trailing letter-spacing would push the text off-centre */}
            <span className="-mr-[0.35em]">{title}</span>
        </h2>
    )
}

export default SectionHeader;
