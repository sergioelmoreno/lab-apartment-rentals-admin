import { Link } from 'react-router-dom';
import './ApartmentCard.css'

const ApartmentCard = ({ name, description, review_scores_rating, id, removeApartment }) => {

  return (
    <li style={{ border: review_scores_rating >= 80 ? '1px solid rebeccapurple' : null }}>
      <h2 style={{ color: review_scores_rating >= 80 ? 'rebeccapurple' : null }}>{name}</h2>
      <p>{description}</p>
      <p><strong>{`Rating: ${review_scores_rating} ${review_scores_rating < 80 ? "bad reviewed" : "Good reviewed!!"}`}</strong></p>
      <hr />
      <div className='card-footer'>
        <Link to={`/apartment/${id}`} className='btn'>See details</Link>
        <button onClick={() => removeApartment(id)}>Remove Apartment</button>
      </div>
    </li>

  );
}

export default ApartmentCard