import axios from "axios"
export const GET_URL_START = 'GET_URL_START'
export const GET_URL_SUCCESS = 'GET_URL_SUCCESS'
export const GET_URL_FAIL = 'GET_URL_FAIL'

const fetchGIF = async () => {
    dispatch({ type: GET_URL_START})
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