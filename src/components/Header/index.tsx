import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
    return (
        <header className="ds-header">
            <nav>
                <Link to='/'>
                    <h1>
                    Github API
                    </h1>
                </Link>
            </nav>
        </header>
    )
}
