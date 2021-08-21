import useFetch from './useFetch'
import { Link } from 'react-router-dom'

export default function Categories() {

    const { data: item, error, isPending } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    if (item) {

        console.log(item.categories)
    }


    return (
        <main>
            <h1>Categories</h1>
            <section className="grid-section">
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {item && item.categories.map(e => (
                    <article>
                        <img src={e.strCategoryThumb} alt="" />
                        <div className="text">
                            <h2>{e.strCategory}</h2>
                            <Link to={'category/' + e.strCategory}>See More</Link>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    )
}