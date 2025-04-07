import React from 'react'
import {Nav} from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./SideBar/Sidebar.jsx";

const App = () => {
    return (
        <div>
            <Sidebar />
            <Nav/>
            <Recommended/>
            <Products />

        </div>
    )
}
export default App
