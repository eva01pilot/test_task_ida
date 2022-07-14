import React from 'react'
import './ProductForm.scss'
import point from './formicon.svg'
const ProductForm = (props) => {
  return (
    <div className="form-placeholder">
    <form onSubmit={ props.onSubmit }>
        <label htmlFor = 'ProdName'>Наименование товара<sup><img src={point}/></sup></label>
        <input type="text" id='ProdName' name="product" onChange={props.onChange}placeholder='Введите наименование товара' required/>
        <label htmlFor = 'ProdDescription'>Описание товара<sup><img src={point}/></sup></label>
        <textarea maxLength="50" id='ProdDescription' name="productDesc" onChange={props.onChange} placeholder='Введите описание товара' required/>
        <label htmlFor = 'ProdImg'>Ссылка на изображение товара<sup><img src={point}/></sup></label>
        <input type="text" name="productImage" id='ProdImg' onChange={props.onChange} placeholder='Введите ссылку' required/>
        <label htmlFor = 'ProdPrice'>Цена товара<sup><img src={point}/></sup></label>
        <input type="text" name="productPrice" id='ProdPrice' onChange={props.onChange} placeholder='Введите цену' required/>
        <input type="submit" value="Добавить товар"/>
    </form>
    </div>
  )
}
export default ProductForm
