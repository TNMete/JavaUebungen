import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./RecipeSearch.css";

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

    if (!recipe) return <p>Lade Rezeptdetails...</p>;

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} className="rounded w-full max-w-md mb-4" />

            <h2 className="text-lg font-semibold mt-4">Zutaten:</h2>
            <ul className="list-disc pl-5 mb-4">
                {recipe.extendedIngredients.map((ing) => (
                    <li key={ing.id}>{ing.original}</li>
                ))}
            </ul>

            <h2 className="text-lg font-semibold">Anleitung:</h2>
            <div
                className="prose prose-sm"
                dangerouslySetInnerHTML={{ __html: recipe.instructions || "Keine Anleitung vorhanden." }}
            />
        </div>
    );
}
