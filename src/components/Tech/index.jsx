const Tech = ({isHighlight, data}) => {
    return (
        <div className=" flex gap-4 text-sm my-auto">
            {
                data.map((e, i) => (
                    <div key={`${e}-tech-${i}`} className={` bg-green-700 font-bold px-2 py-1 rounded-md ${isHighlight? " text-white": ""}`}>{e}</div>
                ))
            }                              
        </div>
    )
}

export default Tech;