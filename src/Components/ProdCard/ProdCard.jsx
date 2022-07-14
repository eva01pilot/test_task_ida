/* eslint-disable react/prop-types */
import './ProdCard.scss'
import deletebtn from './delete.svg'
import React from 'react'
const ProdCard = (props) => {
  return (
        <div className="cardwrapper">
            <img src={deletebtn} className='deletebtn' onClick={props.onClick} prod={props.prod}/>
            <img src={props.productinfo.source} alt="Фотография Товара"/>
            <h1>{props.productinfo.name}</h1>
            <p>{props.productinfo.description}</p>
            <h1 className="price">{props.productinfo.price}</h1>
        </div>
)
}
export default ProdCard
