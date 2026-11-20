const Picture = ({picture, title}) => {
    return (
        <img src={picture} alt={title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
    )
}

export default Picture;
