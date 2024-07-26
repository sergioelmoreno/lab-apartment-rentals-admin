import { Link } from 'react-router-dom';
import './ApartmentCard.css'

const ApartmentCard = ({ name, description, rate, id, removeApartment }) => {

  return (

    <li style={{
      backgroundColor: rate >= 80 ? 'gray' : ''
    }}>
      <h1>{name}</h1>
      <p>{description}</p>
      <p><strong>{rate < 80 ? "bad reviewed" : "good reviewed"}</strong></p>
      <hr />
      <div className='card-footer'>
        <Link to={`/apartment/${id}`} className='btn'>See details</Link>
        <button onClick={() => removeApartment(id)}>Remove Apartment</button>
      </div>
    </li>

  );
}

export default ApartmentCard