import './ApartmentsList.css'
import ApartmentCard from '../ApartmentCard/ApartmentCard'
import { Link } from 'react-router-dom'

const ApartmentsList = ({ apartments, removeApartment }) => {


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