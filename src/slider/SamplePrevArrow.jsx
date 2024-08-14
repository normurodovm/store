export const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "red",
                left: "10px", // Positioning arrow
                zIndex: 1,
                borderRadius: "50%",
            }}
            onClick={onClick}
        />
    );
};
