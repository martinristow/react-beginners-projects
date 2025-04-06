import '../style.css'
import {useState} from "react";

const Accordion = ({title, content, index}) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <section className='accordion-card' key={index}>
            <div className="header" onClick={()=> setIsActive(!isActive)}>
                <div>{title}</div>
                <p className='icon'>{isActive ? '-' : '+'}</p>
            </div>

            <div className="content">
                { isActive && <p className='card-info'>{content}</p>}
            </div>

        </section>
    )
}
export default Accordion
