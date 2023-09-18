import './styles.css'
import { NavLink } from "react-router-dom";

export default function HeaderProducts() {
    return (
        <header className="ds-header-products ds-mt20">
            <nav className="ds-container ">
                <div >
                    <NavLink to='/products/computers' className={({ isActive }) => isActive ? 'menu-item menu-active' : 'menu-item'}>Computadores</NavLink>
                    <NavLink to='/products/electronics' className={({ isActive }) => isActive ? 'menu-item menu-active' : 'menu-item'}>Eletrônicos</NavLink>
                    <NavLink to='/products/books' className={({ isActive }) => isActive ? 'menu-item menu-active' : 'menu-item'}>Livros</NavLink>
                </div>
            </nav>
        </header>
    )
}
