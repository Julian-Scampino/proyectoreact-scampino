const ItemDetail = ({item}) =>{
    return(
        <div style={style.contenedor}>
            <h2>{item.title}</h2>
            <p>{`Id: ${item.id}`}</p>
            <p>{`Precio: $${item.price}`}</p>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <img style={style.img}src={item.image} alt=""></img>
        </div>
    )
}
export default ItemDetail

const style = {
    contenedor: {
        border: "2px solid black",
        width: 600,
        height: 600
    },
    img:{
        width: 200,
        height: 200 
    }
}