const Card = ({ perretes }) => {

  return (
    <>
      <div className="col-sm6 col-md-4 p-2  " >
        <div className="card border border-black">
          <div className="d-flex justify-content:center" style={{ width: "100%", overflow: "hidden", aspectRatio: "3/4" }}>
            <img src={perretes.imagen} className="card-img-top img-thumbnail" />
          </div>
          <div className="card-body">
            <h4 className="card-title delius-regular">{perretes.nombre}</h4>
            <p className="card-text  macondo-swash-caps-regular"><span className="material-symbols-outlined">
              pets
            </span>{perretes.ojitos}</p>
            <p className="card-text macondo-swash-caps-regular"><span className="material-symbols-outlined">
              pets
            </span>{perretes.aficiones}</p>
           
            <p className="card-text  macondo-swash-caps-regular"><span className="material-symbols-outlined">
              pets
            </span>{perretes.raza}</p>
          </div>
        </div>

      </div>

    </>
  )
}
export default Card;
