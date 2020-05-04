import React, { useState, useEffect } from 'react'

export default function WindowSize() {
  const [[windowX, windowY], setWindowSize] = useState([window.innerWidth, window.innerHeight])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let timeoutId
    const handleResize = () => {
      setWindowSize([windowX, windowY]);
      setVisible(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setVisible(false), 1000);
    }
    window.addEventListener('resize',handleResize)
  }, []);

  return (
    <div className={`window-size ${visible ? '' : 'hidden'}`}>
      {windowWidth} x {windowHeight}
    </div>
  );
}
