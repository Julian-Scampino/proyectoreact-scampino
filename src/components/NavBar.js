import './NavBar.css'
import logo from '../logo.svg'
const NavBar = () =>{
    return(
    <header>
        <h1>Electrón: empresa de electrónica</h1>
        <img src={logo} alt="" />
        <nav>
            <ul>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Nosotros</a>
                </li>
                <li>
                    <a href="">Productos</a>
                </li>
                <li>
                    <a href="">Contacto</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default NavBar