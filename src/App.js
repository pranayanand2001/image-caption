import React, { useState } from 'react';
import SearchImages from './components/SearchImages';
import CanvasEditor from './components/CanvasEditor';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <p>Name : PRANAY ANAND</p>
      <p>email: pranayanand.sm@gmail.com</p>
      <h1>Image Caption App</h1>
      {!selectedImage ? (
        <SearchImages setSelectedImage={setSelectedImage} />
      ) : (
        <CanvasEditor imageUrl={selectedImage} />
      )}
    </div>
  );
};

export default App;
