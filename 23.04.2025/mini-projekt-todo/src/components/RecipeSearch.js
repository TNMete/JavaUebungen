import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RecipeSearch.css";

const API_KEY = "015341d85add4717b6d2e14f26da2c31";

export default function RecipeSearch() {
    const [ingredients, setIngredients] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function fetchRecipes() {
        if (!ingredients) return;
        setLoading(true);
        const response = await fetch(
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${API_KEY}`
        );
        const data = await response.json();
        setRecipes(data);
        setLoading(false);
    }

    return (
        <div className="recipe-search-container">
            <h1 className="recipe-search-title">Rezeptsuche nach Zutaten</h1>

            <div>
                <input
                    type="text"
                    placeholder="z.B. tomato, cheese"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="recipe-search-input"
                />
                <button
                    onClick={fetchRecipes}
                    className="recipe-search-button"
                >
                    Suchen
                </button>
            </div>

            {loading && <p style={{ marginTop: "1rem" }}>Lade Rezepte...</p>}

            <button onClick={() => navigate(-1)} className="back-button">Zurück</button>

            <ul className="recipe-list">
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`} className="recipe-card">
                            <img src={recipe.image} alt={recipe.title} />
                            <p>{recipe.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
