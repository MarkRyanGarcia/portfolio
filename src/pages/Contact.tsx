export default function Contact() {
    async function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;

        const data = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };

        await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        alert("Message sent!");
        form.reset();
    }

    return (
        <form onSubmit={submitForm} className="flex flex-col gap-4 max-w-md">
            <input name="name" placeholder="Name" required />
            <input name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required />
            <button type="submit">Send</button>
        </form>
    );
}