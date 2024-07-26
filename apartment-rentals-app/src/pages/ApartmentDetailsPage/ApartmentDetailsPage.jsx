import { Link, useParams } from "react-router-dom";



const ApartmentDetailsPage = ({ apartments }) => {

  const { apartment_id } = useParams()
  const selectedApartment = apartments.find(apartment => apartment.id === apartment_id)
  console.log(selectedApartment)
  const { id, country, name, description, house_rules, host_name, bathrooms, beds, price } = selectedApartment
  return (
    <section className="ApartmentDetailsPage">
      <div className="container">
        <Link to='/' className="btn">Back to Home</Link>
        <hr />
        <h1>{name}</h1>
        <p><strong>Price: {price} per day</strong></p>
        <p><small>{country}</small></p>
        <p>Host: {host_name}</p>
        <p>Description: {description}</p>
        <p>House Rules: {house_rules}</p>
        <p>Bathrooms: {bathrooms}</p>
        <p>Beds: {beds}</p>
      </div>
    </section>

  )
}

export default ApartmentDetailsPage