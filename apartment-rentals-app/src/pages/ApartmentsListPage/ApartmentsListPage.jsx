import { useState } from 'react';
import { results } from '../../data/rentals.json'
import ApartmentCard from '../../components/ApartmentCard/ApartmentCard.jsx';
import "./ApartmentsListPage.css"


const ApartmentsListPage = () => {

  const [apartments, setApartments] = useState(results)

  const removeApartment = apartmentId => {
    const filteredAparments = apartments.filter(apartment => apartment.id !== apartmentId)
    setApartments(filteredAparments)
  }


  return (
    <section className="ApartmentsListPage">
      <ul>
        {
          apartments.map(eachApartment => {

            return (
              <ApartmentCard key={eachApartment.id} {...eachApartment} removeApartment={removeApartment} />
            )
          })
        }
      </ul >

    </section>
  );
}

export default ApartmentsListPage