const Apartment = ({ name, description, rate, id, removeApartment }) => {

    return (
        <li>
            <p>{name}</p>
            <p>{description}</p>
            <p>{rate < 80 ? "bad reviewed" : "good reviewed"}</p>
            <button onClick={() => removeApartment(id)}>Delete Apartment</button>

            <hr></hr>


        </li>

    );
}

export default Apartment