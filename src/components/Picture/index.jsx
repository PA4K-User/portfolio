const Picture = ({picture, title}) => {
    return (
        <img src={picture} alt={title} loading="lazy" className="aspect-video w-full rounded-md border border-line object-cover"/>
    )
}

export default Picture;
