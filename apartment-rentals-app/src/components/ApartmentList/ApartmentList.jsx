import { useState } from 'react';
import apartmentData from './../../data/rentals.json'
import Apartment from '../Apartment/Apartment';
import "./ApartmentList.css"


const ApartmentList = () => {

    const [apartments, setApartments] = useState(apartmentData.results)

    const removeApartment = apartmentId => {
        const filteredAparment = apartments.find(apartment => {
            return apartment.id === apartmentId
        })
        console.log(filteredAparment)
    }


    return (
        <section className="ApartmentList">
            <ul>
                {
                    apartments.map(eachApartment => {

                        return (
                            <Apartment key={eachApartment.id} name={eachApartment.name} description={eachApartment.description} rate={
                                eachApartment.review_scores_rating} removeApartment={removeApartment} id={eachApartment.id} />
                        )
                    })
                }
            </ul >

        </section>
    );
}

export default ApartmentList