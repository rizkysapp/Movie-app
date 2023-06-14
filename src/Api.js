import axios from 'axios'

const baseURL = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

export const  getMovie = async () => {
    const movie = await axios.get(`${baseURL}/movie/popular?page=1&api_key=${apiKey}`)
    return movie.data.results
}

export const  searchMovie = async (e) => {
    const movie = await axios.get(`${baseURL}/search/movie?query=${e}&page=1&api_key=${apiKey}`)
    return movie.data
}