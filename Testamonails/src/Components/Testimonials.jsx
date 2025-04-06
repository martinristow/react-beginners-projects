import {useState} from 'react'
import '../style.css'
import {testimonials} from "../Utils/Testimonials.js";

const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handlePrevClick = () => {
        setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
    }
    const handleNextClick = () => {
        setCurrentIndex((currentIndex + testimonials.length + 1) % testimonials.length)
    }

    return (
        <div className='testimonials'>
            <div className='testimonials-quote'>
                {testimonials[currentIndex].quote}
            </div>

            <div className='testimonials-author'>
                - {testimonials[currentIndex].author}
            </div>

            <div className="testimonials-nav">
                <button onClick={handlePrevClick}>Prev</button>
                <button onClick={handleNextClick}>Next</button>
            </div>

        </div>
    )
}
export default Testimonials
