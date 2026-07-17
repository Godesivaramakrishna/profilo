import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [color, setColor] = useState<"blue" | "pink">("blue");

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (ringRef.current) {
        ringRef.current.style.left = `${clientX}px`;
        ringRef.current.style.top = `${clientY}px`;
      }

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive =
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("input") ||
        target?.closest("textarea") ||
        target?.closest('[role="button"]');

      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  // Toggle color every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prev) => (prev === "blue" ? "pink" : "blue"));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const colorConfig = {
    blue: {
      border: "rgba(59, 130, 246, 0.8)",
      glow: "rgba(59, 130, 246, 0.8)",
    },
    pink: {
      border: "rgba(236, 72, 153, 0.8)",
      glow: "rgba(236, 72, 153, 0.8)",
    },
  };

  const currentColor = colorConfig[color];

  return (
    <>
      {/* Hide default cursor */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* Ring cursor - Reduced size */}
      <motion.div
        ref={ringRef}
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          width: isHovering ? "28px" : "24px",
          height: isHovering ? "28px" : "24px",
        }}
        transition={{ duration: 0.2 }}
        style={{
          border: `2px solid ${currentColor.border}`,
          borderRadius: "50%",
          boxShadow: `0 0 25px ${currentColor.glow}, inset 0 0 15px ${currentColor.glow}20`,
          transform: "translate(-50%, -50%)",
          backdropFilter: "blur(3px)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;
