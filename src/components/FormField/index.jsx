// Form input from Figma "Contact" (1:141): thick black left + bottom rule, label shown as the placeholder.
// The real <label> is kept for screen readers; the error message renders underneath.
const FormField = ({ id, label = "", required = false, error = "", multiline = false, ...props }) => {
    const Tag = multiline ? "textarea" : "input";
    const errorId = `${id}-error`;

    return (
        <div>
            <label htmlFor={id} className="sr-only">{label}{required ? " (required)" : ""}</label>
            <Tag
                id={id}
                name={id}
                placeholder={`${label}${required ? "*" : ""}`}
                aria-required={required || undefined}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? errorId : undefined}
                className={`block w-full border-b-[5px] border-l-[5px] border-line bg-transparent px-4 text-base text-fg outline-none transition-colors placeholder:font-heading placeholder:text-sm placeholder:font-bold placeholder:uppercase placeholder:tracking-[0.04em] placeholder:text-subtle focus:bg-white/50 aria-invalid:border-red-600 ${multiline ? "h-44 resize-none py-3" : "h-12 pt-2"}`}
                {...props}
            />
            {error && (
                <p id={errorId} className="mt-2 font-heading text-xs font-semibold text-red-600">{error}</p>
            )}
        </div>
    )
}

export default FormField;
