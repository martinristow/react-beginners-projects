import React from 'react'
import Accordion from "./Components/Accordion.jsx";
import {accordionData} from "./Utils/content.js";

const App = () => {
    return (
        <div>
            <div className='accordion'>
                {accordionData.map(({title, content}, index) => (
                    <Accordion title={title} content={content} index={index}/>
                ))}
            </div>
        </div>
    )
}
export default App
