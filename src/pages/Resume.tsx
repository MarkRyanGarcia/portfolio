import { useEffect } from "react";
import { linkStyle } from "../lib/styles";


export default function Resume() {
    const resumeUrl = "https://docs.google.com/viewerng/viewer?url=https://raw.githubusercontent.com/MarkRyanGarcia/Resume/main/Mark_Garcia_Resume.pdf";

    useEffect(() => {
        window.location.href = resumeUrl;
    }, []);

    return (
        <div className="flex flex-col items-center justify-center text-primary text-center space-y-4">
            <p>Redirecting to resume...</p>
            <p>
                If you are not automatically redirected,{" "}
                <a
                    href={resumeUrl}
                    className={linkStyle}
                >
                    click this link
                </a>
            </p>
        </div>
    );
}