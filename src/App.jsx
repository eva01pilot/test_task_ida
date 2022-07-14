import { React, useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import ProductForm from './Components/ProductForm/ProductForm'
import Prodlist from './Components/Prodlist/Prodlist'
import Dropdown from './Components/Dropdown/Dropdown'
import './App.scss'

function App () {
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [source, setSource] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setProducts([...products, {
      name,
      description,
      source,
      price
    }])
  }
  const handleChange = (e) => {
    e.preventDefault()
    switch (e.target.name){
      case 'product':setName(e.target.value); break
      case 'productPrice':setPrice(e.target.value); break
      case 'productImage':setSource(e.target.value); break
      case 'productDesc':setDescription(e.target.value); break
    }
  }
  const handleDelete = (e) => {
    e.preventDefault()
    const prods = [...products]
    prods.splice(e.target.getAttribute('prod'), 1)
    setProducts(prods)
  }
  const handleSortChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    switch (e.target.value){
      case 'ascPrice': this.setProducts(products.sort(sortAsc)); break
      case 'descPrice': this.setProducts(products.sort(sortDesc)); break
    }
  }

  const sortAsc = (a, b) => {
    if (a.price > b.price) return 1
    if (a.price < b.price) return -1
    if (a.price === b.price) return 0
  }
  const sortDesc = (a, b) => {
    if (a.price > b.price) return -1
    if (a.price < b.price) return 1
    if (a.price === b.price) return 0
  }
  return (
    <div className="App">
      <div className="flexwrapper">
        <Header/>
        <Dropdown onChange={handleSortChange}/>
      </div>
      <div className="flexwrapper">
        <div className="formcontainer">
          <ProductForm onSubmit={handleSubmit} onChange={handleChange}/>
        </div>
        <Prodlist product={products} onClick={handleDelete} />
      </div>
    </div>
  )
}

export default App
