import './styles/PokeCard.css';

const PokeCard = (props) => {
    const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
    const imgAlt = `Image of ${props.name}`;
    return (
        <div className="PokeCard-container">
            <h3 className="PokeCard-name">{props.name}</h3>
            <img className="PokeCard-image" src={imgURL} alt={imgAlt}/>
            <p>
                Type: {props.type}
                <br />
                EXP: {props.exp}
            </p>
        </div>
    )
}

export default PokeCard;