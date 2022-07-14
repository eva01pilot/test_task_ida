/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import './Prodlist.scss'
import { React, useEffect } from 'react'
import ProdCard from '../ProdCard/ProdCard'

const Prodlist = (props) => {
  return (
    <div className="gridcards">
        {props.product.map((prod, i) => (
           <ProdCard key={i} productinfo={ prod } onClick={props.onClick} prod={i} />
        ))}
    </div>
  )
}
export default Prodlist
