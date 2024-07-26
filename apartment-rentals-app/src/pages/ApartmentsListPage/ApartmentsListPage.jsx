import { useState } from 'react';
import { results } from '../../data/rentals.json'
import ApartmentCard from '../../components/ApartmentCard/ApartmentCard.jsx';
import "./ApartmentsListPage.css"
import NewApartmentForm from '../../components/NewAparmentForm/NewAparmentForm.jsx';


const ApartmentsListPage = () => {

  const [apartments, setApartments] = useState(results)



  const removeApartment = apartmentId => {
    const filteredAparments = apartments.filter(apartment => apartment.id !== apartmentId)
    setApartments(filteredAparments)
  }

  const addAparment = newAparment => {
    const newApartmentsArray = [newAparment, ...apartments]
    setApartments(newApartmentsArray)

  }


  return (
    <section className="ApartmentsListPage">

      <NewApartmentForm addAparment={addAparment} />
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