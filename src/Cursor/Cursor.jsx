import "./Cursor.css";
import { useEffect, useState } from "react";

const Cursor = () => {
    const [cursorX, setCursorX] = useState(0)
    const [cursorY, setCursorY] = useState(0)
    const [isMouseOnscreen, setIsMouseOnscreen] = useState(false)
    useEffect(() => {

        function handleMouseMove(e) {
            setCursorX(e.pageX);
            setCursorY(e.pageY);
        }

        // Handle mouseout event
        function handleMouseOut() {
            setIsMouseOnscreen(true);
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            // Clean up event listeners on component unmount
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
        }
    }, [])
    return (
        <>
            {isMouseOnscreen ? <div className="cursor" style={{ transform: `translate(${cursorX}px,${cursorY}px)` }} ></div > : ""}
        </>
    );
};

export default Cursor;