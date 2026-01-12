export default function AboutImage() {
    return (
        <div className="flex justify-center w-full max-w-75 md:max-w-70 mx-auto">
            <img
                src="/mark/cruise_pic.JPG"
                className="w-full rounded-md bg-secondary object-cover"
                alt="Mark Garcia"
                loading="lazy"
            />
        </div>
    );
}