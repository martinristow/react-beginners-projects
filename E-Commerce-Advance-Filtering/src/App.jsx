import React from 'react'
import {Nav} from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";

const App = () => {
    return (
        <div>
            <Nav/>
            <Products />
            <Recommended/>
        </div>
    )
}
export default App
