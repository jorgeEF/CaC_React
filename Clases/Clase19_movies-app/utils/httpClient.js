const API = "https://api.themoviedb.org/3/"

export const get = (path) => {

    return fetch (API+path,{
        headers: {        
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjM0YzBmZDc4NjQ4N2RkMTg0OWM4NjVkNjQyZTJlOCIsInN1YiI6IjVjNzcyZjBkMGUwYTI2NWU2YzU3NTFiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gCzF1CXH5rdYq-Ufx_i4zv1C3OA5FuEKxCEOU5xv-m4",
        "Content-Type": "application/json;charset=utf-8"
        }
    }).then((results)=>results.json())
}



