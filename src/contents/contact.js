// Contact form content. Messages are delivered by FormSubmit (https://formsubmit.co) — no backend needed.
// The very first submission sends an activation email to `email`; confirm it once before messages arrive.
const email = "siwaphon08@gmail.com";

export const data = {
    title: "Contact",
    description:
        "Have a project in mind, a role to talk about, or just want to say hi? \
         Fill in the form below and I'll get back to you as soon as I can.",
    email,
    endpoint: `https://formsubmit.co/ajax/${email}`,
};
