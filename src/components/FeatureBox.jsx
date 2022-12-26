import React from 'react'

export default function FeatureBox(props) {
  return (
    <div className='a-box'>
    <div className="a-b-img">
    <img src={props.image} />
    </div>

    <div className="s-b-text">
    <h2>  {props.title}  </h2>
    <p>There is a very awesome service  available for you!</p>
    </div>
    
    </div>
  )
}
