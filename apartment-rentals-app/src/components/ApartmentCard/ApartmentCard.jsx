import './ApartmentCard.css'

const ApartmentCard = ({ id, city, name, bathrooms, price, review_scores_rating, removeApartment }) => {

    const customStyle = {
        background: review_scores_rating >= 95 ? '#e0ffbb' : 'white'
    }

    return (

        <article className="ApartmentCard" style={customStyle}>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9516e180691313.5ce82f4b6d95f.jpg" alt="Apartment" />
            <div className="details">
                <h3>{name}</h3>
                <hr />
                <p>Precio por noche: {price}€ | {bathrooms} baños | Ciudad: {city}</p>
                <p>Puntuación: {review_scores_rating} de media</p>
            </div>
            <button onClick={() => removeApartment(id)}>Eliminar propiedad</button>
        </article>
    )
}

export default ApartmentCard