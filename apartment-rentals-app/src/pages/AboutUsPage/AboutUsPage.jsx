import { Link } from "react-router-dom"

const AboutUsPage = () => {
  return (
    <section className="AboutUs">
      <div className="container">
        <Link to='/' className="btn">Back to Home</Link>
        <hr />
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolor recusandae, corrupti consequuntur veniam mollitia doloremque saepe reprehenderit fuga nostrum beatae eos incidunt ipsum corporis inventore sint nisi neque eligendi.</p>
      </div>
    </section>
  )
}

export default AboutUsPage