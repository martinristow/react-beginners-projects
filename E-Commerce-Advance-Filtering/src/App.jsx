import React, {useState} from 'react'
import {Nav} from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./SideBar/Sidebar.jsx";
import './index.css'

// Database
import data from './db/data.jsx';
import Card from "./Components/Card.jsx";

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [query, setQuery] = useState('');


    //------------------ Input Filter-------------
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }

    const filteredItems = data.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));

    //------------------ Radio Filter-------------
    const handleChange = (e) => {
        setSelectedCategory(e.target.value);
    }

    //------------------ Button Filter-------------
    const handleClick = (e) => {
        setSelectedCategory(e.target.value);
    }

    const filteredData = (products, selected, query) => {
        let filteredProducts = products;

        // Filtering Input Items
        if (query) {
            filteredProducts = filteredItems;
        }

        // Selected Filter
        if (selected) {
            filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) =>
                category === selected || color === selected || company === selected || newPrice === selected || title === selected)
        }

        return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}, index) => (
            <Card key={index} img={img} title={title} star={star} prevPrice={prevPrice} reviews={reviews}
                  newPrice={newPrice}/>
        ))

    }

    const result = filteredData(data, selectedCategory, query);
    return (
        <div>
            <Sidebar handleChange={handleChange}/>
            <Nav query={query} handleInputChange={handleInputChange}/>
            <Recommended handleClick={handleClick}/>
            <Products result={result}/>

        </div>
    )
}
export default App
