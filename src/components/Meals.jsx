import axios from "axios";
import {useState, useEffect} from "react";
import '../styles/meals.css'

const Meals = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then(res => {
                setItems(res.data.meals)
            })
            .catch(err => console.log(err))
    }, []);

    const itemsList = items.map(({idMeal, strMeal, strMealThumb}) => (
        <section className="card">
            <img src={strMealThumb} alt={strMeal} />
            <h3>{strMeal}</h3>
            <p>{idMeal}</p>
        </section>
    ))

    return (
        <div className="items-container">
            {itemsList}
        </div>
    )
}
export default Meals
