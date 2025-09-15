const Picture = ({picture, title}) => {
    return (
        <div className="flex justify-center w-200 h-50">
            <img src={picture} alt={title} className="rounded-md"/>
        </div>
    )
}

export default Picture;