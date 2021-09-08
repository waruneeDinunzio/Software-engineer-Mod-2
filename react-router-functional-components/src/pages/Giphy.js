//import React from 'react';
import React, { useState } from 'react';
const Giphy = () => {
    const [gifURL, setGifURL] = useState('')

    const randomGIF = () => {
        fetch('http://api.giphy.com/v1/gifs/random?api_key=HHiDPTwY7dRIc0R3yPU9in7tSMVF9Ero')
        .then(response => response.json())
        .then(gif => setGifURL(gif.data.fixed_height_downsampled_url))
        //.then(gif => console.log(gif))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Random GIF</h1>
            <button onClick={()=> randomGIF()}>Random</button>
            <div>
               <img src={gifURL} alt="random gif" />
            </div>
        </div>
    );
};

export default Giphy;