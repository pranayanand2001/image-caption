import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const CanvasEditor = ({ imageUrl }) => {
const canvasRef = useRef(null); // Reference to the canvas element
const fabricCanvas = useRef(null); // Reference to fabric's canvas instance

// Initialize the Fabric.js canvas when the component mounts or image URL changes
useEffect(() => {
  if (canvasRef.current) {
    // Initialize fabric.js canvas once
    fabricCanvas.current = new fabric.Canvas(canvasRef.current);

    // Clear the canvas before rendering the image
    fabricCanvas.current.clear();

    // Load the image onto the canvas
    if (imageUrl) {
      fabric.Image.fromURL(imageUrl, (img) => {
        img.set({ left: 50, top: 50 });
        img.scaleToWidth(500); // Adjust this size to your needs
        fabricCanvas.current.add(img); 
        fabricCanvas.current.renderAll(); 
      }, {crossOrigin: 'anonymus' }); // CrossOrigin
    }
  }

  // Clean up on component unmount to avoid memory leaks
  return () => {
    if (fabricCanvas.current) {
      fabricCanvas.current.dispose();
    }
  };
}, [imageUrl]);

// Function to add text to the canvas
const addText = () => {
  const text = new fabric.Textbox('Your Caption Here', {
    left: 100,
    top: 100,
    fill: 'black',
    fontSize: 24,
  });
  fabricCanvas.current.add(text); 
  fabricCanvas.current.renderAll(); 
};

// Function to add a shape
const addShape = (shapeType) => {
  let shape;
  if (shapeType === 'circle') {
    shape = new fabric.Circle({
      radius: 50,
      fill: 'blue',
      left: 150,
      top: 150,
    });
  } else if (shapeType === 'rectangle') {
    shape = new fabric.Rect({
      width: 100,
      height: 50,
      fill: 'green',
      left: 200,
      top: 200,
    });
  }
  if (shape) {
    fabricCanvas.current.add(shape); 
    fabricCanvas.current.renderAll(); 
  }
};

// Function to download the image
const downloadImage = () => {
  try {
  const dataURL = fabricCanvas.current.toDataURL({
    format: 'png',
    quality: 1,
  });
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'modified-image.png';
  link.click(); // Trigger the download
}catch (error) {
  console.error('Error downloading image:', error);
  alert('Unable to download the image due to cross-origin restrictions.');
}
};

// Function to log all canvas layers and their attributes
const logCanvasLayers = () => {
const objects = fabricCanvas.current.getObjects(); // Get all objects on the canvas
const layers = objects.map((obj, index) => {
return {
  id: index + 1, 
  type: obj.type, 
  left: obj.left, // X-coordinate
  top: obj.top, // Y-coordinate
  width: obj.width * obj.scaleX, 
  height: obj.height * obj.scaleY, 
  fill: obj.fill, 
  text: obj.text || null, 
};
});
console.log('Canvas Layers:', layers);
};

return (
  <div>
    <div>
      <button onClick={addText}>Add Text</button>
      <button onClick={() => addShape('circle')}>Add Circle</button>
      <button onClick={() => addShape('rectangle')}>Add Rectangle</button>
      <button onClick={downloadImage}>Download Image</button>
      <button onClick={logCanvasLayers}>Log Canvas Layers</button>
    </div>

    {/* The canvas element for image editing */}
    <canvas ref={canvasRef} width={800} height={600}></canvas>
  </div>
);
};

export default CanvasEditor;
