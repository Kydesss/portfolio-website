import "./Tag.css";

interface TagProps {
    tag: string;
}
function Tag({ tag }: TagProps) {
    return (
        <div className="tag">
            <span className="tag-text">{tag}</span>
        </div>
    );
}

export default Tag;
