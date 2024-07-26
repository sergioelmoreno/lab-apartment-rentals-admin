import { Link, useParams } from "react-router-dom"
import apartmentsData from './../../data/apartments.json'

const ApartmentDetailsPage = () => {

    const { apartment_id } = useParams()

    const foundApartment = apartmentsData.results.find(elm => elm.id === apartment_id)

    return (
        <div className="ApartmentDetailsPage">
            <h1>Detalles de apartamento {foundApartment.name}</h1>
            <hr />
            <p>{foundApartment.cancellation_policy}</p>
            <hr />
            <Link to='/'>Volver al panel de apartamentos</Link>
        </div>
    )
}

export default ApartmentDetailsPage