const Tech = ({data}) => {
    return (
        <ul className="mt-2 flex flex-wrap gap-2 lg:justify-center">
            {
                data.map((e, i) => (
                    <li key={`${e}-tech-${i}`} className="border border-surface-fg/40 px-2.5 py-1 font-heading text-[11px] font-semibold uppercase tracking-wider text-surface-fg">{e}</li>
                ))
            }
        </ul>
    )
}

export default Tech;
