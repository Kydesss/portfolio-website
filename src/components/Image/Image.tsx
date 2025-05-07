import "./Image.css";

interface ImageProps {
    image: string;
    className: string;
    alt: string;
}

function Image({ className, image, alt }: ImageProps) {
    return (
        <div className={className + "placeholder"}>
            <img src={image} alt={alt} className="placeholder-img" />
        </div>
    );
}

export default Image;
