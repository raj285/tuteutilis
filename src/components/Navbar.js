import React from 'react'
import propTypes from 'prop-types'
// import {a} from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode1} bg-${props.mode1}`}>
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
sName      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          <a className="nav-link active"  aria-current="page" href="#">Home <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"href="#">{props.aboutText}</a>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode1==='light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
          <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault">{props.bttc}</label>
      </div>
      
    </div>
  </nav> 
  
  )
}
  // here  it;s telling about dadta type of props
Navbar.propTypes={
    title : propTypes.string.isRequired,// isrequired means u have to fill it
    aboutText :propTypes.string,
    bttc :propTypes.string,
    textClr : propTypes.string,
    // mode :object
}
// if not passing the values use these default values
Navbar.defaultProps={
    title : 'set title here',
    aboutText : 'set text here'
};
