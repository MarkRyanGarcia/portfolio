import { useState } from "react";

interface ContactFormState {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
}

export function useContactForm() {
    const [state, setState] = useState<ContactFormState>({
        isLoading: false,
        isError: false,
        isSuccess: false,
    });

    async function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setState({ isLoading: true, isError: false, isSuccess: false });

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: formData.get("name") as string,
            contact: formData.get("contact") as string,
            message: formData.get("message") as string,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Failed to send message");

            setState({ isLoading: false, isError: false, isSuccess: true });
            form.reset();
        } catch {
            setState({ isLoading: false, isError: true, isSuccess: false });
        }
    }

    return { ...state, submitForm };
}
