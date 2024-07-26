import './ApartmentsList.css'
import { results } from './../../data/apartments.json'
import { useState } from 'react'
import ApartmentCard from '../ApartmentCard/ApartmentCard'
import { Link } from 'react-router-dom'

const ApartmentsList = () => {

    const [apartments, setApartments] = useState(results)

    const removeApartment = apartmentId => {
        const filteredApartments = apartments.filter(elm => elm.id != apartmentId)
        setApartments(filteredApartments)
    }

    return (
        <div className="ApartmentsList">
            {
                apartments.map(elm => {
                    return (
                        <Link to={`/apartamentos/${elm.id}`} key={elm.id} >
                            <ApartmentCard {...elm} removeApartment={removeApartment} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ApartmentsList