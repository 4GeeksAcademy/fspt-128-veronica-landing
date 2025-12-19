const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg glassNav ">
        <div className="container-fluid">
          <a className="navbar-brand glass" href="#">Ay los perretes</a>
          <button className="navbar-toggler justify" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">peticion</a>
              </li>
              <li className="nav-item glass">
                <a className="nav-link" href="#">mas info</a>
              </li>
              <li className="nav-item glass">
                <a className="nav-link" href="#">contactanos</a>
              </li>
              <li className="nav-item glass">
                <a className="nav-link disabled">ay que bonico</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>



  );

};
export default Navbar;
