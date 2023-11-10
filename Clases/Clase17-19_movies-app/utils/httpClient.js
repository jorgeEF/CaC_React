const API = "https://api.themoviedb.org/3/"
const API_KEY = import.meta.env.VITE_API_KEY;
//console.log(API_KEY);

export const get = (path) => {

    return fetch (API+path,{
        headers: {        
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json;charset=utf-8"
        }
    }).then((results)=>results.json())
}



