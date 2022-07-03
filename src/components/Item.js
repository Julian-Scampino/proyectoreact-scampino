const Item = ({id, titulo, precio, descripcion, img}) =>{
   return(
    <>
        <div style={style.contenedor}>
        <h2>{titulo}</h2>
        <p>{`Id: ${id}`}</p>
        <p> {`Precio: $${precio}`}</p>
        <p>{descripcion}</p>
        <img style={style.img}src={img} alt=""></img>
        </div>
    </>
    )
}
const style = {
    contenedor: {
        border: "2px solid black",
        width: 300,
        height: 400
    },
    img:{
        width: 100,
        height: 100 
    }
}
export default Item