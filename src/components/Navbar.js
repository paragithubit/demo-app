import React from 'react'




function Navbar(props) {
     
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href ="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.title}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">{props.about}</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <div className="form-check form-switch">
         <input className="form-check-input" type="checkbox"onClick={props.toogleMode} role="switch" id="flexSwitchCheckDefault"/>
       <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">DarkMode</label>
</div>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

//Navbar.propTypes ={
   //title: PropTypes.string,
   //about:PropTypes.string
//}
     //pts full from propType.string
     
//Navbar.defaultProps ={
 // title:"Hello world",
 // about:"BCA"
//}
export default Navbar
