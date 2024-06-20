// LihatPeta.jsx
import React from 'react';

const LihatPeta = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <iframe 
        src="https://www.arcgis.com/apps/View/index.html?appid=27b7119dc6754d3e9e584a4fa71e5744" 
        title="Peta"
        className="w-full h-full max-w-8xl max-h-[100vh] border border-gray-300 shadow-lg"
      />
    </div>
  );
}

export default LihatPeta;
