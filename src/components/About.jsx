import React from 'react'

export default function About(props) {
  return (
    <>
    <div id='about'>
    <div className="about-image">
    <img src={props.image} />
    </div>
    
   
    <div className="about-text">
    <div id="Download">
    <h2>{props.title}</h2>
    <p>Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. 
    Officiis voluptas mollitia est 
    a unde accusantium aut nobis iure 
    necessitatibus expedita! Lorem ipsum
     dolor sit amet consectetur adipisicing
      elit. Numquam, sapiente.</p>
      <button>{props.button}</button>
    </div>
    </div>
    </div>
    </>
  )
}
