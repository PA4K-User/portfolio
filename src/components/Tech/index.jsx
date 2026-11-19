const Tech = ({data}) => {
    return (
        <ul className="mt-2 flex flex-wrap gap-2">
            {
                data.map((e, i) => (
                    <li key={`${e}-tech-${i}`} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{e}</li>
                ))
            }
        </ul>
    )
}

export default Tech;
