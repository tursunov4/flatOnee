import React from 'react'
import loading from "../../assets/img/Spinner-1s-200px.gif"
import "./load.css"
const Loading = () => {
  return (
    <div className='loading__add'>
        <img width={80} src={loading} alt="" />
    </div>
  )
}

export default Loading