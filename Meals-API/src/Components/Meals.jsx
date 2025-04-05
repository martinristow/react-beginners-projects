import axios from 'axios'
import {useEffect, useState} from 'react'
import '../style.css'

const Meals = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then((response) => {
                setItems(response.data.meals)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const showMeals = items.map(({idMeal, strMeal, strMealThumb}) => {
        return (
            <section className="card" key={idMeal}>
                <img src={strMealThumb} alt={strMeal}/>
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        )
    })

    return (
        <div className="items-container">
            {showMeals}
        </div>
    )
}
export default Meals