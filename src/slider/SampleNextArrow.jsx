export const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "red",
                right: "10px", // Positioning arrow
                zIndex: 1,
                borderRadius: "50%",
            }}
            onClick={onClick}
        />
    );
};