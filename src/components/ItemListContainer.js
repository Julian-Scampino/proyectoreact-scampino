import ItemCount from './ItemCount'

const onAdd = () =>{
    alert("Comprado, gracias")
}
const ItemListContainer = ({greeting}) =>{
    return(
        <>
            <h2 style={{textAlign:'center'}}>{greeting}</h2>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    )
}
export default ItemListContainer