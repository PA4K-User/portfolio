import { useState } from "react";
import { data } from "../../contents/contact";
import SectionHeader from "../../components/SectionHeader";
import Separator from "../../components/Separator";
import FormField from "../../components/FormField";

const fields = [
    { id: "name", label: "Enter your name", type: "text", autoComplete: "name" },
    { id: "email", label: "Enter your email", type: "email", autoComplete: "email" },
    { id: "phone", label: "Phone number", type: "tel", autoComplete: "tel" },
    { id: "message", label: "Your message", multiline: true },
];

const empty = { name: "", email: "", phone: "", message: "" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s()-]{9,}$/;

const validate = (values) => {
    const errors = {};
    if (!values.name.trim()) errors.name = "Please enter your name.";
    if (!values.email.trim()) errors.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email.trim())) errors.email = "Please enter a valid email address.";
    if (!values.phone.trim()) errors.phone = "Please enter your phone number.";
    else if (!PHONE_RE.test(values.phone.trim())) errors.phone = "Please enter a valid phone number.";
    if (!values.message.trim()) errors.message = "Please enter a message.";
    return errors;
};

// Figma "Contact" (1:141). The navbar "Contact me" button scrolls here.
const ContactForm = () => {
    const [values, setValues] = useState(empty);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleChange = (e) => {
        const next = { ...values, [e.target.name]: e.target.value };
        setValues(next);
        // after the first submit attempt, errors update live as the visitor fixes them
        if (submitted) setErrors(validate(next));
        if (status === "success" || status === "error") setStatus("idle");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const found = validate(values);
        setErrors(found);
        setSubmitted(true);

        const firstInvalid = fields.find(({ id }) => found[id]);
        if (firstInvalid) {
            document.getElementById(firstInvalid.id)?.focus();
            return;
        }

        setStatus("sending");
        try {
            const res = await fetch(data.endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    name: values.name.trim(),
                    email: values.email.trim(),
                    phone: values.phone.trim(),
                    message: values.message.trim(),
                    _subject: `Portfolio contact from ${values.name.trim()}`,
                    _replyto: values.email.trim(),
                    _template: "table",
                }),
            });
            const json = await res.json().catch(() => ({}));
            if (!res.ok || String(json.success) !== "true") throw new Error(json.message || "Request failed");

            setStatus("success");
            setValues(empty);
            setErrors({});
            setSubmitted(false);
        } catch {
            setStatus("error");
        }
    };

    const sending = status === "sending";

    return (
        <section id="Contact-section" className="bg-glow px-5 py-20 sm:px-8 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
                <SectionHeader title={data.title} />
                <p className="mt-10 text-sm leading-body text-fg/80 sm:text-base lg:mt-14">{data.description}</p>
                <Separator className="mt-10 lg:mt-14" />
            </div>

            <form noValidate onSubmit={handleSubmit} className="mx-auto mt-14 flex max-w-[38rem] flex-col gap-10 lg:mt-20 lg:gap-12">
                {fields.map(({ id, ...field }) => (
                    <FormField
                        key={id}
                        id={id}
                        required
                        value={values[id]}
                        onChange={handleChange}
                        error={errors[id]}
                        disabled={sending}
                        {...field}
                    />
                ))}

                <div className="flex flex-col items-center gap-5">
                    <button
                        type="submit"
                        disabled={sending}
                        className="border-x-[3px] border-line px-12 py-2.5 font-heading text-base font-bold uppercase tracking-[0.1em] transition-colors hover:bg-fg hover:text-surface-fg disabled:cursor-wait disabled:opacity-60 cursor-pointer"
                    >
                        {sending ? "Sending…" : "Submit"}
                    </button>

                    <p aria-live="polite" className="min-h-5 text-center text-sm font-semibold">
                        {status === "success" && <span className="text-green-700">Thank you! Your message has been sent.</span>}
                        {status === "error" && (
                            <span className="text-red-600">
                                Something went wrong. Please try again or email me at{" "}
                                <a href={`mailto:${data.email}`} className="underline">{data.email}</a>.
                            </span>
                        )}
                    </p>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;
