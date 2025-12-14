const Card = (props) => {

  return (
    <>
      <div className="col-sm6 col-md-4 p-2" >
        <div className="card">
          <div className="d-flex justify-content:center" style={{ width: "100%", overflow: "hidden", aspectRatio: "3/4" }}>
            <img src={props.perretes.imagen} className="card-img-top" />
          </div>
          <div className="card-body">
            <h4 className="card-title">{props.perretes.nombre}</h4>
            <p>{props.perretes.ojitos}</p>
            <p>{props.perretes.aficiones}</p>
            <p>{props.perretes.raza}</p>
          </div>
        </div>

      </div>
      
    </>
)}
export default Card;
