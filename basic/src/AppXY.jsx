import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [position, setPosition] = useState({x: 0, y: 0}); // Manage status by grouping associated data into objects

  return (
    <div className="container" onPointerMove={(e) => {
      // setPosition({x: e.clientX, y: e.clientY});

      // What if it can only move horizontally?
      setPosition(prev => ({...prev, x: e.clientX}));
    }}>
      <div className="pointer" style={{transform: `translate(${position.x}px, ${position.y}px)`}} />
    </div>
  )
}
