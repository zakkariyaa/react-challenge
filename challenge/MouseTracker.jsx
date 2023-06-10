import { useState, useEffect } from 'react';

const MouseTracker = () => {
  const [mousePos, setMousePos] = useState({ clientX: 0, clientY: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos((prevPos) => {
        return { ...prevPos, clientX: event.clientX, clientY: event.clientY };
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <output>
      {mousePos.clientX},{mousePos.clientY}
    </output>
  );
};

export default MouseTracker;
