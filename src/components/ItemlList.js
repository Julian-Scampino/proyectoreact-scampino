import Item from './Item'
const ItemList = ({items}) =>{
    return(
    <>
    {items.map((productos) => <Item key={productos.id} id={productos.id} titulo={productos.title} precio={productos.price} descripcion={productos.description} img={productos.image}/>)}
    </>
    )
}

export default ItemList