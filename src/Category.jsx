import { useParams } from "react-router"
import useFetch from './useFetch.jsx'
import { Link } from 'react-router-dom'

/* www.themealdb.com/api/json/v1/1/filter.php?c=Seafood */

export default function Category() {
    const { id } = useParams()
    console.log(id)
    const { data: item, error, isPending } = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + id)

    if (item) {
        console.log(item.meals)
    }

    return (
        <main>
            <h2>Hello</h2>
            <section className="grid-section">
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {item && item.meals.map(e => (
                    <article>
                        <img src={e.strMealThumb} alt="" />
                        <div className="text">
                            <h2>{e.strMeal}</h2>
                            <Link to={'../page/' + e.strMeal}>See More</Link>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    )
}