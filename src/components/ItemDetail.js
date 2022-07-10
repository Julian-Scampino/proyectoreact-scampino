import ItemCount from './ItemCount'

const ItemDetail = ({item}) =>{
    const onAdd = () =>{
        alert("Comprado, gracias")
    }

    return(
        <div style={style.contenedor}>
            <h2>{item.title}</h2>
            <p>{`Id: ${item.id}`}</p>
            <p>{`Precio: $${item.price}`}</p>
            <p>{`Categoría: ${item.category}`}</p>
            <p>{item.description}</p>
            <img style={style.img}src={item.image} alt=""></img>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
}
export default ItemDetail

const style = {
    contenedor: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    img:{
        width: 200,
        height: 200 
    }
}