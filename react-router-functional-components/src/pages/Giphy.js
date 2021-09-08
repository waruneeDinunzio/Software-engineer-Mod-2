//import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Giphy = () => {
    const [gifURL, setGifURL] = useState('')

    // const randomGIF = () => {
    //     fetch('http://api.giphy.com/v1/gifs/random?api_key=HHiDPTwY7dRIc0R3yPU9in7tSMVF9Ero')
    //     .then(response => response.json())
    //     .then(gif => setGifURL(gif.data.fixed_height_downsampled_url))
    //     //.then(gif => console.log(gif))
    //     .catch(err => console.log(err))
    // }
    useEffect(()=> {
        console.log('Hey we mounted our Giphy component')
        const fetchGIF = async () => {
            try{
                //ajax call 
                // you can only use await inside async functions
                const response = await axios.get(
                    'http://api.giphy.com/v1/gifs/random?api_key=HHiDPTwY7dRIc0R3yPU9in7tSMVF9Ero'
                )
                console.log(response)
                    setGifURL(response.data.data.fixed_height_downsampled_url)
            } catch(error) {
                console.log(error)
            }
        }
      fetchGIF()  
    }, [])


    return (
        <div>
            <h1>Random GIF</h1>
            <button >Random</button>
            <div>
               <img src={gifURL} alt="random gif" />
            </div>
        </div>
    );
};

export default Giphy;