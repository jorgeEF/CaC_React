import "./Card.css"

function Card({apellido, nacimiento, clubes, mundial, late}){
    return(
        <>
        <h2 className={mundial?"oro":"plata"}>{apellido}</h2>
        <small>{nacimiento}</small>
        <p>{clubes}</p>
        <p>{mundial?"Ganó un Mundial":"Sigue Participando"}</p>
        <p>{late?"Late✅":"Nola❌"}</p>
        </>
    )
}

export default Card