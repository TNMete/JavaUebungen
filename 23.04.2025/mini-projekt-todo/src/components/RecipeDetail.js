import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./RecipeDetail.css";

const API_KEY = "015341d85add4717b6d2e14f26da2c31";

export default function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        async function fetchRecipeDetail() {
            const res = await fetch(
                `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
            );
            const data = await res.json();
            setRecipe(data);
        }

        fetchRecipeDetail();
    }, [id]);

    if (!recipe) return <p className="recipe-loading">Lade Rezeptdetails...</p>;

    return (
        <div className="recipe-detail-container">

            <Link to="/recipes" className="back-button">Zurück zur Suche</Link>

            <h1 className="recipe-detail-title">{recipe.title}</h1>

            <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-detail-image"
            />

            <h2 className="recipe-section-title">Zutaten</h2>
            <ul className="recipe-ingredients">
                {recipe.extendedIngredients.map((ing) => (
                    <li key={ing.id}>{ing.original}</li>
                ))}
            </ul>

            <h2 className="recipe-section-title">Anleitung</h2>
            <div
                className="recipe-instructions"
                dangerouslySetInnerHTML={{
                    __html: recipe.instructions || "Keine Anleitung vorhanden.",
                }}
            />
        </div>
    );
}
