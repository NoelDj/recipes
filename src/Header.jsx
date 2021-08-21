import { Link } from 'react-router-dom'
export default function Header() {
    const style = {
        margin: 'auto',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        marginBottom: '3em',
        padding: '3em'
    }
    return (
        <header style={style}>
            <div className="wrapper">
                <h1>Recipes</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/categories">Categories</Link>
                </nav>
            </div>
        </header>
    )
}