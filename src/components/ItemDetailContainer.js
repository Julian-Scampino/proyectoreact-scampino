import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import ClipLoader from "react-spinners/ClipLoader"

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(() =>{
        setTimeout(()=>{
            fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>setProducto(json))
            .catch(err=>console.log(err))
            .finally(()=>{
                setLoading(false)})
        }, 2000)
    },[])

    return(
        <>
            {loading ? <ClipLoader size={200}/> : <ItemDetail item={producto}/>}
        </>
    )
}

export default ItemDetailContainer