import { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemlList'
import ClipLoader from "react-spinners/ClipLoader"

const onAdd = () =>{
    alert("Comprado, gracias")
}
const ItemListContainer = ({greeting}) =>{

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
        fetch('https://fakestoreapi.com/products?limit=3')
        .then(res=>res.json())
        .then(json=>{
            setProductos(json)
        })
        .catch(err=>console.log(err))
        .finally(() =>{
            setLoading(false)
        })
        }, 2000)
    },[])

    return(
        <>
            <h2 style={{textAlign:'center'}}>{greeting}</h2>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            {loading ? <ClipLoader size={200} /> : <ItemList items={productos}/>}
        </>
    )
}
export default ItemListContainer