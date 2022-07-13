import {FaCartPlus} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const IconoCarrito = () => {
    return(
        <NavLink to='/Cart'><FaCartPlus style={{fontSize: '30px'}}/></NavLink>
    )

}

export default IconoCarrito