import { useState, useEffect } from 'react'
import './NavBar.css'
import logo from '../logo.svg'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () =>{

    const [categorias, setCategorias] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>{
            setCategorias(json)
        })
        .catch(err=>console.log(err))
        }, 1000)
    },[])

    return(
    <header>
        
        <NavLink to="/"><h1>Tienda<br/>Online</h1></NavLink>
        <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
        <nav>
            {categorias.map((categorias)=><NavLink key={categorias} to={`/category/${categorias}`}>{categorias}</NavLink>)}
        </nav>
        <CartWidget/>
    </header>
    )
}

export default NavBar