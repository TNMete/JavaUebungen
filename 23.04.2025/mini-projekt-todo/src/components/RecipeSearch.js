import { useState } from "react";
import { Link } from "react-router-dom";
import "./RecipeSearch.css";

const API_KEY = "015341d85add4717b6d2e14f26da2c31";

export default function RecipeSearch() {
    const [ingredients, setIngredients] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchRecipes() {
        if (!ingredients) return; // keine leere Suche
        setLoading(true);
        const response = await fetch(
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${API_KEY}`
        );
        const data = await response.json();
        setRecipes(data);
        setLoading(false);
    }

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Rezeptsuche nach Zutaten</h1>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="z.B. tomato, cheese"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="border p-2 w-full rounded"
                />
                <button
                    onClick={fetchRecipes}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Suchen
                </button>
            </div>

            {loading && <p>Lade Rezepte...</p>}

            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id} className="mb-4">
                        <Link to={`/rezepte/${recipe.id}`} className="flex items-center gap-4 hover:bg-gray-100 p-2 rounded">
                            <img src={recipe.image} alt={recipe.title} className="w-24 rounded" />
                            <p>{recipe.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
