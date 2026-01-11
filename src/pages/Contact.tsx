export default function Contact() {
    async function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: formData.get("name") as string,
            contact: formData.get("contact") as string,
            message: formData.get("message") as string,
        };

        await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        alert("Message sent!");
        form.reset();
    }

    return (
        <div className="flex justify-center w-full pt-10 md:pt-0">
            <form
                onSubmit={submitForm}
                className="flex w-full max-w-lg flex-col gap-6 rounded-xl border border-secondary bg-base-2 p-8 shadow-lg"
            >
                <h2 className="text-2xl font-bold text-primary">
                    Contact <span className="text-tertiary">Me</span>
                </h2>

                <div className="flex flex-col gap-2">
                    <label className="text-secondary">Name</label>
                    <input
                        name="name"
                        placeholder="Your name"
                        required
                        className="rounded-md border border-secondary bg-base px-4 py-2 text-primary placeholder:text-secondary focus:border-tertiary focus:outline-none"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-secondary">How should I contact you?</label>
                    <input
                        name="contact"
                        placeholder="Email, Discord, LinkedIn, etc."
                        required
                        className="rounded-md border border-secondary bg-base px-4 py-2 text-primary placeholder:text-secondary focus:border-tertiary focus:outline-none"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-secondary">Message</label>
                    <textarea
                        name="message"
                        placeholder="Write your message here..."
                        rows={5}
                        required
                        className="resize-none rounded-md border border-secondary bg-base px-4 py-2 text-primary placeholder:text-secondary focus:border-tertiary focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-2 rounded-md bg-tertiary px-6 py-2 font-semibold text-base transition-colors duration-300 ease-in-out hover:bg-primary"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}