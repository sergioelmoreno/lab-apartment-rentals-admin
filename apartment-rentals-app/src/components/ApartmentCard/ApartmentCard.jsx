import { Link } from 'react-router-dom';
import './ApartmentCard.css'

const ApartmentCard = ({ name, description, rate, id, removeApartment }) => {

  return (
    <li>
      <p>{name}</p>
      <p>{description}</p>
      <p><strong>{rate < 80 ? "bad reviewed" : "good reviewed"}</strong></p>
      <hr />
      <Link to={`/apartment/${id}`}>See details</Link>
      <button onClick={() => removeApartment(id)}>Delete Apartment</button>
      <hr />

    </li>

  );
}

export default ApartmentCard