import { useState, useCallback } from "react";
import { FiDownload } from "react-icons/fi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

const RESUME_URL = "https://raw.githubusercontent.com/MarkRyanGarcia/Resume/main/Mark_Garcia_Resume.pdf";

export default function Resume() {
    const [error, setError] = useState(false);

    const onLoadError = useCallback(() => {
        setError(true);
    }, []);

    return (
        <div className="flex flex-col items-center px-4 text-primary">

            <div className="flex items-center justify-between w-full max-w-[850px] mb-4">
                <h1 className="text-2xl font-bold">Mark_Garcia_Resume.pdf</h1>

                <a
                    href={RESUME_URL}
                    download="Mark_Garcia_Resume.pdf"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded border-tertiary border-1 text-tertiary text-base font-medium hover:bg-tertiary hover:text-base transition-colors"
                >
                    <FiDownload size={16} />
                    Download
                </a>
            </div>

            {/* PDF Viewer */}
            {error ? (
                <p className="text-red-500">
                    Could not load the PDF.{" "}
                    <a
                        href={RESUME_URL}
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Open it directly
                    </a>
                    .
                </p>
            ) : (
                <div className="shadow-xl rounded overflow-hidden">
                    <Document
                        file={RESUME_URL}
                        onLoadError={onLoadError}
                        loading={
                            <div className="flex items-center justify-center w-[680px] h-96 text-primary">
                                Loading PDF…
                            </div>
                        }
                    >
                        <Page
                            pageNumber={1}
                            width={Math.min(850, window.innerWidth - 32)}
                            renderTextLayer={true}
                            renderAnnotationLayer={true}
                        />
                    </Document>
                </div>
            )}
        </div>
    );
}
