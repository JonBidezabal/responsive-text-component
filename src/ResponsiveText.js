import React, { useState, useEffect } from 'react';

const ResponsiveText = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const fontSize = windowWidth / 10;

  const gradientStyle = {
    background: `linear-gradient(to right, #ff8a00, #e52e71)`,
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    fontSize: `${fontSize}px`,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <div style={gradientStyle}>
      Responsive Gradient Text
    </div>
  );
};

export default ResponsiveText;