import { useState } from "react"

const ApartmentForm = ({ addAparment }) => {

    const [name, setNameState] = useState('')
    const [price, setPriceState] = useState('')
    const [country, setCountryState] = useState('')
    const [host_name, setHostState] = useState('')
    const [description, setDescriptionState] = useState('')
    const [house_rules, setRulesState] = useState('')
    const [bathrooms, setBathroomsState] = useState(0)
    const [beds, setBedsState] = useState(0)


    const handleNameChange = (event) => {
        const { value } = event.target
        setNameState(value)
    }
    const handlePriceChange = (event) => {
        const { value } = event.target
        setPriceState(value)
    }
    const handleCountryChange = (event) => {
        const { value } = event.target
        setCountryState(value)
    }
    const handleHostChange = (event) => {
        const { value } = event.target
        setHostState(value)
    }
    const handleDescriptionChange = (event) => {
        const { value } = event.target
        setDescriptionState(value)
    }
    const handleRulesChange = (event) => {
        const { value } = event.target
        setRulesState(value)
    }
    const handleBathroomsChange = (event) => {
        const { value } = event.target
        setBathroomsState(value)
    }
    const handleBedsChange = (event) => {
        const { value } = event.target
        setBedsState(value)
    }

    const idCounter = 0

    const handleSubmit = (event) => {
        event.preventDefault()

        const newApartment = {
            name,
            price,
            country,
            host_name,
            description,
            house_rules,
            bathrooms,
            beds,
            review_scores_rating: 0,
            id: idCounter + 1
        }
        addAparment(newApartment)


    }



    return (

        <form onSubmit={handleSubmit}>

            <label htmlFor="nameForm">Name</label>
            <input onChange={handleNameChange} type="text" id="nameForm" value={name} />

            <label htmlFor="priceForm">Price</label>
            <input onChange={handlePriceChange} type="text" id="priceForm" value={price} />

            <label htmlFor="countryForm">Country</label>
            <input onChange={handleCountryChange} type="text" id="countryForm" value={country} />

            <label htmlFor="hostForm">Host</label>
            <input onChange={handleHostChange} type="text" id="hostForm" value={host_name} />

            <label htmlFor="descriptionForm">Description</label>
            <input onChange={handleDescriptionChange} type="text" id="descriptionForm" value={description} />

            <label htmlFor="rulesForm">House rules</label>
            <input onChange={handleRulesChange} type="text" id="rulesForm" value={house_rules} />

            <label htmlFor="bathroomsForm">Bathrooms</label>
            <input onChange={handleBathroomsChange} type="number" id="bathroomsForm" value={bathrooms} />

            <label htmlFor="bedsForm">Beds</label>
            <input onChange={handleBedsChange} type="number" id="bedsForm" value={beds} />

            <hr />

            <button>submit</button>







        </form>

    )


}

export default ApartmentForm