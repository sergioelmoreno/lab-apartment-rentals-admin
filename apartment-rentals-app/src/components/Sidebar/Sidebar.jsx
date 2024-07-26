import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Apartamentos</Link>
                    </li>
                    <li>
                        <Link to="/">Otros</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar