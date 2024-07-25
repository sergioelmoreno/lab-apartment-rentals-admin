import { Link, useParams } from "react-router-dom";
import { results as apartmentsList } from '../../data/rentals.json'


const ApartmentDetailsPage = () => {

  const { apartment_id } = useParams()
  const selectedApartment = apartmentsList.find(apartment => apartment.id === apartment_id)
  console.log(selectedApartment)
  const { id, country, name, description, house_rules, host_name, bathrooms, beds, price } = selectedApartment
  return (
    <section className="ApartmentDetailsPage">
      <Link to='/'>Back to Home</Link>
      <hr />
      <h1>{name}</h1>
      <p><strong>Price: {price} per day</strong></p>
      <p><small>{country}</small></p>
      <p>Host: {host_name}</p>
      <p>Description: {description}</p>
      <p>House Rules: {house_rules}</p>
      <p>Bathrooms: {bathrooms}</p>
      <p>Beds: {beds}</p>
    </section>

  )
}

export default ApartmentDetailsPage