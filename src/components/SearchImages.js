import React, { useState } from 'react';
import "..//App.css";

const SearchImages = ({setSelectedImage}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    if (!searchTerm.trim()) {
      alert('Please enter a search term');
      return;
    }
    try{
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=gFpon4-uhJSTZZU630AwHyW3jAus7WaSKHiQKG9J-1Y`);
      if(!response.ok) {
        throw new Error('Failed to fetch images');
      }
      const data = await response.json();
      setImages(data.results);
    }catch(error) {
      console.error('Error fetching images:', error);
      alert('Error fetching images. Please try again later'); 
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search for images" 
      />
      <button onClick={fetchImages}>Search</button>

      <div className='images'>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.urls.small} alt={image.alt_description} />
            <button onClick={() => setSelectedImage(image.urls.regular)}>
              Add Captions
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchImages;
