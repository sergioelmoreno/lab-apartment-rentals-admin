import { useState } from 'react';
import { results } from './../../data/rentals.json'
import Apartment from '../Apartment/Apartment';
import "./ApartmentList.css"


const ApartmentList = () => {

  const [apartments, setApartments] = useState(results)

  const removeApartment = apartmentId => {
    const filteredAparments = apartments.filter(apartment => apartment.id !== apartmentId)
    setApartments(filteredAparments)
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