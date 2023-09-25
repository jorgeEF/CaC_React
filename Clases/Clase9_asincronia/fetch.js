const getNameFetch = (idPost) => {
    // hacemos un fetch a un endpoint
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    // a esa respuesta res la convertimos a json
    .then((res) => {
        //console.log(res);
        return res.json()
    })
    // de ese json mostramos lo que necesitamos
    .then((post) =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then((res) =>{
        return res.json()        
            .then((user) =>{
            console.log(`el usuario es: ${user.name}`)
            })
        })
    })
}

getNameFetch(48);