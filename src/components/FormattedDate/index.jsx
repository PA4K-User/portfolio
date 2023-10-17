const FormattedDate = ({isHighlight,Children}) => {
    return (
        <div>
            <span className={`text-sm ${isHighlight? "text-primaryTitle": ""}`}>{Children}</span>
        </div>
    )
}

export default FormattedDate;