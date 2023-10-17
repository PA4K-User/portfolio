const Picture = ({picture, title}) => {
    return (
        <div className="flex justify-center mt-5">
            <img src={picture} alt={title} className="w-5/6 rounded-md "/>
        </div>
    )
}

export default Picture;