export default function AboutImage() {
    return (
        <div className="flex justify-center w-full max-w-75 md:max-w-70">
            <img
                src="/mark/cruise_pic.JPG"
                className="w-full max-w-xs md:max-w-sm rounded-md bg-secondary object-cover"
                alt="Mark Garcia"
                loading="lazy"
            />
        </div>
    );
}