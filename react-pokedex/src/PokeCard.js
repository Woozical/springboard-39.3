const PokeCard = (props) => {
    const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
    const imgAlt = `Image of ${props.name}`;
    return (
        <div>
            <b>{props.name}</b>
            <img src={imgURL} alt={imgAlt}/>
            <p>Type: {props.type}</p>
            <p>EXP: {props.exp}</p>
        </div>
    )
}

export default PokeCard;