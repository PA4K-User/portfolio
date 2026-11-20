// Decorative "—— ///// ——" divider from Figma (separatorBlack).
const Separator = ({ className = "" }) => {
    return (
        <div aria-hidden="true" className={`flex items-center justify-center gap-2 text-fg ${className}`}>
            <span className="h-0.5 w-12 bg-current" />
            <svg width="40" height="10" viewBox="0 0 40 10" fill="none">
                <polyline points="0,9 5,1 10,9 15,1 20,9 25,1 30,9 35,1 40,9" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="h-0.5 w-12 bg-current" />
        </div>
    )
}

export default Separator;
