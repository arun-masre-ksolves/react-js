import React, { useState } from 'react';

function ImageSlider() {
    let imageData = ["image1", "image2", "image3", "image4"]
    const [previousImage, setPreviousImage] = useState([]);
    const [nextImage, setNextImage] = useState([]);

    function handlePreviousImage(){
        setPreviousImage(previousImage-1);
    }

    function handleNextImage(){
        setNextImage(nextImage+1);
    }


    return (
    <div>
        <button onClick={handlePreviousImage}>Previous</button>
        <h1>{imageData[0]}</h1>
        <button onClick={handleNextImage}>Next</button>
    </div>
  );
}

export default ImageSlider;
