import { useParams } from "react-router"
import useFetch from './useFetch.jsx'

export default function Page() {
    let content = ''
    const { id } = useParams()

    const { data: page, error, isPending } = useFetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + id)
    console.log(isPending)
    if (page) {
        content = page.meals[0]
        console.log(content)
    }

    return (

        < main >
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {page &&
                <section style={{ maxWidth: '700px', margin: 'auto' }}>
                    <h1 style={heading}>{content.strMeal}</h1>
                    <img src={content.strMealThumb} alt="" style={{ height: '400px' }} />
                    <p>{content.strInstructions}</p>
                </section>}


        </main >
    )
}


const heading = {
    fontSize: '3rem'
}