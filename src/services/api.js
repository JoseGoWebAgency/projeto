import axios from 'axios';
import minhaKey from './config'



const api = axios.create({
    baseURL:'http://www.omdbapi.com/?apikey='+ minhaKey +'=harry'
})

export default api