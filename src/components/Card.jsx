import { Link } from 'react-router-dom'
export default function Card(props) {
    const array = props.recipe
    return (
        <section className="grid-section">
            {array.map(e => {
                console.log(e)
                return (
                    <article className="article">
                        <div className="img-box">
                            <img alt="" src={e.strMealThumb} />
                        </div>
                        <div className="text">
                            <p>Category</p>
                            <h2>{e.strMeal}</h2>
                            <Link to={'page/' + e.strMeal}>See more</Link>
                        </div>
                    </article >
                )
            })}
        </section>
    )
}