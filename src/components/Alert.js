import React from 'react'
// import propTypes from 'prop-types'
export default function Alert(props) {
  return (
    
    props.alert1 &&<div className={`alert alert-warning alert-dismissible fade show`} role="alert">
        <strong>{props.alert1.typ} !! </strong>{props.alert1.msg}
        
        </div>
  )
}

