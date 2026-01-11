export default function AboutImage() {
    return (
        <div className="flex justify-center w-full md:w-[40%]">
            <img
                src="/mark/mark.png"
                className="w-full max-w-xs md:max-w-sm rounded-md bg-secondary object-cover"
                alt="Mark Garcia"
                loading="lazy"
            />
        </div>
    );
}