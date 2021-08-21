import { useState, useEffect } from 'react'
import Card from './components/Card'


export default function Section() {



    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken')
            .then(r => r.json())
            .then(data => {
                setRecipes(data.meals)
            })
    }, [])

    /* const [recipes, setRecipes] = useState([
        {
            category: 'Fish',
            title: 'Fish meal',
            id: 1
        },
        {
            category: 'Apple',
            title: 'Apple Pie',
            id: 2
        },
        {
            category: 'Pizza',
            title: 'Pizza',
            id: 3
        }
    ]) */

    return (
        <main>
            {recipes && <Card recipe={recipes} />}

        </main>
    )
}