/* eslint-disable react/prop-types */
import React from 'react'
import './Dropdown.scss'
const Dropdown = (props) => {
  return (
    <div className="dropdown">
        <select name="sortoptions" id="sortoptions" onChange={props.onChange}>
          <option value="ascPrice" >По возрастанию цены</option>
          <option value="descPrice" >По убыванию цены</option>
        </select>
    </div>
  )
}
export default Dropdown
